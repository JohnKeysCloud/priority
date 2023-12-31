// * EMITTERS
import { emitProjectFormVisibilityToggle } from "./handle-new-project-button";

// * UTILITIES
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";

// > ---------------------------------------------------

function toggleCancelButtonListener(isHidden) {
  const cancelAddProjectButton = document.getElementById('cancel-add-project-button');

  if (cancelAddProjectButton) {
    if (!isHidden) {
      cancelAddProjectButton.addEventListener('click', emitProjectFormVisibilityToggle);
    } else {
      cancelAddProjectButton.removeEventListener('click', emitProjectFormVisibilityToggle);
    }
  }
}

function checkTargetElementVisibility(targetElement) {
  const isHidden = targetElement.getAttribute('data-hidden') === 'true';
  toggleCancelButtonListener(isHidden);
}

function handleProjectCancelButton() {
  const projectFormContainer = checkTargetElementExistence('#project-form-container');
  checkTargetElementVisibility(projectFormContainer);
}

export { handleProjectCancelButton };