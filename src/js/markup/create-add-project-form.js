// * MARKUP
import { createListIcon } from "../../components/listIcon/create-list-icon";

// * UTILITIES
import { setAttributes } from "../../utilities/set-attributes";

// > ---------------------------------------------------

function createAddProjectContainer() {
  const projectNameInput = document.createElement('input');
  setAttributes(projectNameInput, {
    'id': 'project-name-input',
    'type': 'text',
    'placeholder': 'Enter Project Name',
    'max-length': '24',
  });
  const addProjectButton = document.createElement('button');
  setAttributes(addProjectButton, {
    'id': 'add-project-button',
    'class': 'bubble-button',
    'type': 'button',
    'required': true,
    'name': 'add-project',
    'form': 'add-project-form',
    'aria-label': 'Add Project',
  });
  addProjectButton.textContent = 'add';

  const cancelAddProjectButton = document.createElement('button');
  setAttributes(cancelAddProjectButton, {
    'id': 'cancel-add-project-button',
    'class': 'bubble-button',
    'type': 'button',
    'aria-label': 'Cancel Add Project',
  });
  cancelAddProjectButton.textContent = 'cancel';

  const projectInputContainer = document.createElement('div');
  projectInputContainer.setAttribute('id', 'project-input-container');
  projectInputContainer.append(createListIcon(), projectNameInput);

  const projectButtonsContainer = document.createElement('div');
  projectButtonsContainer.setAttribute('id', 'project-buttons-container');
  projectButtonsContainer.append(addProjectButton, cancelAddProjectButton);

  const projectFormContainer = document.createElement('form');
  setAttributes(projectFormContainer, {
    'id': 'add-project-form',
    'aria-label': 'hidden',
    'data-hidden': true,
  });
  projectFormContainer.append(projectInputContainer, projectButtonsContainer);

  const newProjectButton = document.createElement('button');
  setAttributes(newProjectButton, {
    'id': 'new-project-button',
    'type': 'button',
    'aria-label': 'New Project',
  });
  newProjectButton.textContent = 'New Project';

  const addProjectContainer = document.createElement('div');
  addProjectContainer.setAttribute('id', 'add-project-container');
  addProjectContainer.append(newProjectButton, projectFormContainer);

  return addProjectContainer;
}

export { createAddProjectContainer };
