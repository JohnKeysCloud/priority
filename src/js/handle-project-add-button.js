// * DATA
import { data } from './data.js';

// * EMITTERS
import { emitProjectFormVisibilityToggle } from './handle-new-project-button';

// * EVENT NAMES
import { ADD_NEW_PROJECT } from './eventNames';

// * LOGIC
import { projectFactory } from './logic';

// * MARKUP
import { createProjectItem } from './create-project-item';

// * STATES
import { formComponentState } from './handle-new-project-button';

// * UTILITIES
import { events } from '../utilities/pubsub';
import { checkTargetElementExistence } from '../utilities/check-target-element-existence';
import { toggleScrollBarVisibility } from '../utilities/toggle-scroll-visibility.js';

// > ---------------------------------------------------

function updateProjectList(data, projectList) {
  const reversedProjectArray = data.getProjectArray().slice().reverse();
  // ? to put the most recently added project at the top of the list
  // * slice() is used to create a copy of the array
  // * not entering a start and end index will return a copy of the entire array
  // * reverse() is used to reverse the order of the array

  while (projectList.firstChild) {
    projectList.removeChild(projectList.firstChild);
  }

  reversedProjectArray.forEach((project) => {
    projectList.appendChild(createProjectItem(project.getName()));
  });
}

function checkListOverflow(projectList) {
  toggleScrollBarVisibility(projectList);
}

function AddNewProject() {
  const projectForm = checkTargetElementExistence('#add-project-form');

  const projectNameInput = projectForm.querySelector('#project-name-input');
  const projectName = projectNameInput.value.trim();

  projectForm.reset()

  if (!projectName) return alert('Enter Project Name');

  const projectObject = projectFactory(projectName);
  data.addProject(projectObject); // ? imported from data.js

  const projectList = checkTargetElementExistence('#project-nav-list');
  updateProjectList(data, projectList);

  checkListOverflow(projectList);

  emitProjectFormVisibilityToggle(); // ? emits TOGGLE_ADD_PROJECT_FORM

  formComponentState.projectFormState = 'hidden';
}

function toggleProjectAddEvent(formState) {
  if (formState === 'visible') {
    events.on(ADD_NEW_PROJECT, AddNewProject);
  } else if (formState === 'closing') {
    events.off(ADD_NEW_PROJECT, AddNewProject);
  }
}

function emitInitializeProject() {
  events.emit(ADD_NEW_PROJECT);
}

function toggleProjectAddButtonListener(formState) {
  const projectAddButton = checkTargetElementExistence('#add-project-button');

  if (formState === 'visible') {
    projectAddButton.addEventListener('click', emitInitializeProject);
  } else if (formState === 'closing') {
    projectAddButton.removeEventListener('click', emitInitializeProject);
  }

}

function handleProjectAddButton(formState) {
  toggleProjectAddButtonListener(formState);
  toggleProjectAddEvent(formState);
}

export { handleProjectAddButton };