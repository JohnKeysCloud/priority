// * EMITTERS
import { emitToggleTaskFormVisibility } from "./add-task-form-opener-button-listener";

// * UTILITIES
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";  

// > ---------------------------------------------------

function toggleCancelButtonListener(isHidden) {
  const cancelAddTaskButton = document.getElementById('cancel-add-task-button');

  if (cancelAddTaskButton) {
    if (!isHidden) {
      cancelAddTaskButton.addEventListener('click', emitToggleTaskFormVisibility);
    } else {
      cancelAddTaskButton.removeEventListener('click', emitToggleTaskFormVisibility);
    }
  }
}

function checkTargetElementVisibility(targetElement) {
  const isHidden = targetElement.getAttribute('data-hidden') === 'true';
  toggleCancelButtonListener(isHidden);
}

function handleTaskCancelButton() {
  const taskFormContainer = checkTargetElementExistence('#add-task-form-container');
  checkTargetElementVisibility(taskFormContainer);
}

export { handleTaskCancelButton };