import { events } from "../utilities/pubsub";
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";

function emitPublishProjectButtonListener() {
  events.emit('toggleDisplayFormContainerVisibility');
}

function toggleCancelButtonListener(isHidden) {
  const cancelAddProjectButton = document.getElementById('cancel-add-project-button');

  if (cancelAddProjectButton) {
    if (!isHidden) {
      cancelAddProjectButton.addEventListener('click', emitPublishProjectButtonListener);
    } else {
      cancelAddProjectButton.removeEventListener('click', emitPublishProjectButtonListener);
    }
  }
}

function checkTargetElementVisibility(targetElement) {
  const isHidden = targetElement.getAttribute('data-hidden') === 'true';
  toggleCancelButtonListener(isHidden);
}

function handleNewProjectCancelButton() {
  checkTargetElementExistence('#project-form-container', checkTargetElementVisibility);
}

export { handleNewProjectCancelButton };