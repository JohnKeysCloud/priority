import { createListIcon } from "../components/listIcon/listIcon";

function createAddProjectContainer() {
  const projectNameInput = document.createElement('input');
  projectNameInput.setAttribute('id', 'project-name-input');
  projectNameInput.setAttribute('type', 'text');
  projectNameInput.setAttribute('placeholder', 'Enter Project Name');
  projectNameInput.setAttribute('max-length', 24);

  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('id', 'add-project-button');
  addProjectButton.setAttribute('type', 'button');
  addProjectButton.setAttribute('aria-label', 'Add Project');
  addProjectButton.textContent = 'add';

  const cancelAddProjectButton = document.createElement('button');
  cancelAddProjectButton.setAttribute('id', 'cancel-add-project-button');
  cancelAddProjectButton.setAttribute('type', 'button');
  cancelAddProjectButton.setAttribute('aria-label', 'Cancel Add Project');
  cancelAddProjectButton.textContent = 'cancel';

  const projectInputContainer = document.createElement('div');
  projectInputContainer.setAttribute('id', 'project-input-container');
  projectInputContainer.appendChild(createListIcon());
  projectInputContainer.appendChild(projectNameInput);

  const projectButtonsContainer = document.createElement('div');
  projectButtonsContainer.setAttribute('id', 'project-buttons-container');
  projectButtonsContainer.appendChild(addProjectButton);
  projectButtonsContainer.appendChild(cancelAddProjectButton);

  const projectFormContainer = document.createElement('form');
  projectFormContainer.setAttribute('id', 'project-form-container');
  projectFormContainer.setAttribute('aria-label', 'hidden');
  projectFormContainer.setAttribute('data-hidden', true);

  projectFormContainer.appendChild(projectInputContainer);
  projectFormContainer.appendChild(projectButtonsContainer);

  const newProjectButton = document.createElement('button');
  newProjectButton.setAttribute('id', 'new-project-button');
  newProjectButton.setAttribute('type', 'button');
  newProjectButton.setAttribute('aria-label', 'New Project');
  newProjectButton.textContent = 'New Project';

  const addProjectContainer = document.createElement('div');
  addProjectContainer.setAttribute('id', 'add-project-container');
  addProjectContainer.appendChild(newProjectButton);
  addProjectContainer.appendChild(projectFormContainer);

  return addProjectContainer;
}

export { createAddProjectContainer };
