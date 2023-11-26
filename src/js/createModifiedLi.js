import { createListIcon } from "../components/listIcon/listIcon";

function createModifiedLiContent() {
  const projectInputContainer = document.createElement('div');
  projectInputContainer.setAttribute('id', 'project-input-container');

  const projectNameInput = document.createElement('input');
  projectNameInput.setAttribute('id', 'project-name-input');
  projectNameInput.setAttribute('type', 'text');
  projectNameInput.setAttribute('placeholder', 'Enter Project Name');
  projectNameInput.setAttribute('max-length', 24);

  const projectButtonsContainer = document.createElement('div');
  projectButtonsContainer.setAttribute('id', 'project-buttons-container');

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

  projectInputContainer.appendChild(createListIcon());
  projectInputContainer.appendChild(projectNameInput);

  projectButtonsContainer.appendChild(addProjectButton);
  projectButtonsContainer.appendChild(cancelAddProjectButton);

  console.log(projectButtonsContainer, projectInputContainer);

  return [projectInputContainer, projectButtonsContainer];
}

export { createModifiedLiContent };
