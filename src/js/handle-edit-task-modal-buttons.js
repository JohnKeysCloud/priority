// * EVENT NAMES 
import { emitEditTaskFormVisibilityToggle } from "./handle-task-item-interactables";

// > --------------------------------------------------------------

function handleEditTaskModalButtons(event) {
  if (!event.target.classList.contains('edit-task-button')) return;

  const targetId = event.target.getAttribute('id');
  const isSaveButton = targetId === 'save-edit-task-button';
  const isCancelButton = targetId === 'cancel-edit-task-button';

  if (isSaveButton) {
    console.log('add functionality to save edit task button');
    // handleSaveEditTaskButton(event.target);
  } else if (isCancelButton) {
    emitEditTaskFormVisibilityToggle();
  }
}

export { handleEditTaskModalButtons };