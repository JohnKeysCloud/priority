// * EMITTERS
import { emitProjectFormVisibilityToggle } from './handle-new-project-button';

// > ---------------------------------------------------

function toggleCancelButtonListener(formState) {
  const cancelAddProjectButton = document.getElementById('cancel-add-project-button');

  if (formState === 'visible') {
    cancelAddProjectButton.addEventListener('click', emitProjectFormVisibilityToggle);
  } else if (formState === 'closing') {
    cancelAddProjectButton.removeEventListener('click', emitProjectFormVisibilityToggle);
  }
}

function handleProjectCancelButton(formState) {
  toggleCancelButtonListener(formState);
}

export { handleProjectCancelButton };