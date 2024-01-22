// * EMITTERS
import { emitEditTaskFormVisibilityToggle } from "./handle-task-item-interactables";

// * HANDLERS
import { initiateTaskDeletionFunctionality } from './handle-task-deletion-functionality';
import { handleSaveEditTaskButton } from './handle-save-edit-task-button';

// > --------------------------------------------------------------

function handleEditTaskModalButtons(event) {
  if (!event.target.classList.contains('edit-task-button')) return;
  
  const targetId = event.target.getAttribute('id');
  const isSaveButton = targetId === 'save-edit-task-button';
  const isCancelButton = targetId === 'cancel-edit-task-button';
  const isDeleteButon = targetId === 'delete-edit-task-button';
  
  if (isSaveButton) {
    handleSaveEditTaskButton();
  } else if (isCancelButton) {
    emitEditTaskFormVisibilityToggle();
  } else if (isDeleteButon) {
    initiateTaskDeletionFunctionality();
  }
}

export { handleEditTaskModalButtons };