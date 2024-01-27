// * HANDLERS
import { handleSaveEditTaskButton } from "./handle-save-edit-task-button";

// * MODIFEIRS
import { modifyDueDateInput } from "../modifiers/modify-due-date-input";

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

  const dueDateInput = Array.from(taskEditInputs).find(
    (input) => input.id === 'edit-task-due-date'
  );  
  modifyDueDateInput(dueDateInput, formState);
}

export { handleTaskEditInputs };