// * HANDLERS
import { handleSaveEditTaskButton } from './handle-edit-task-modal-buttons';

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
