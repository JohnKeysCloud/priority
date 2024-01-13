// * EVENT NAMES 
import { emitEditTaskFormVisibilityToggle } from "./handle-task-item-interactables";

import { taskToEditObject } from "./handle-task-items";

// > --------------------------------------------------------------

function handleSaveEditTaskButton(saveButton) {
  // TODO:
  // ? get inputs, check format, trim, lowercase... return if invalid
  // ? use taskToEditObject setter methods to update the task
  // ? reload taskList
}

function handleEditTaskModalButtons(event) {
  if (!event.target.classList.contains('edit-task-button')) return;

  const targetId = event.target.getAttribute('id');
  const isSaveButton = targetId === 'save-edit-task-button';
  const isCancelButton = targetId === 'cancel-edit-task-button';

  if (isSaveButton) {
    handleSaveEditTaskButton(event.target);
  } else if (isCancelButton) {
    emitEditTaskFormVisibilityToggle();
  }
}

export { handleEditTaskModalButtons };