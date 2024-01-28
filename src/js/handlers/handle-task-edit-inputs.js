// * HANDLERS
import { handleSaveEditTaskButton } from './handle-save-edit-task-button';

// > --------------------------------------------------------------

function emitSaveEditTaskViaInput(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSaveEditTaskButton();
  }
}

function toggleTaskEditInputListeners(taskEditInputs, formState) {
  if (formState === 'visible') {
    taskEditInputs.forEach((input) => {
      input.addEventListener('keydown', emitSaveEditTaskViaInput);
    });
  } else if (formState === 'closing') {
    taskEditInputs.forEach((input) => {
      input.removeEventListener('keydown', emitSaveEditTaskViaInput);
    });
  }
}

function handleTaskEditInputs(editTaskModal, formState) {
  const taskEditInputs = editTaskModal.querySelectorAll('.edit-task-input');
  toggleTaskEditInputListeners(taskEditInputs, formState);
}

export { handleTaskEditInputs };