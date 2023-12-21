import { projectArray } from "./data";
import { projectFactory } from "./logic";

// * UTILITIES
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";
import { events } from "../utilities/pubsub";
import { createProjectItem } from "./create-project-item";

function updateProjectList(projectArray, projectList) {
  const reversedProjectArray = projectArray.slice().reverse();
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

function publishAddProjectListener(targetElement) {
  events.on('addProject', () => {
    const projectNameInput = document.querySelector('#project-name-input');
    const projectName = projectNameInput.value.trim();
    const projectList = targetElement;

    if (!projectName) return alert('Enter Project Name');

    const newProject = projectFactory(projectName);

    projectArray.push(newProject);

    updateProjectList(projectArray, projectList);

    projectNameInput.value = '';
  });
}

function emitInitializeProject() {
  events.emit('addProject');
}

function handleNewProjectAddButton() {
  const projectAddButton = document.querySelector('#add-project-button');
  projectAddButton.addEventListener('click', emitInitializeProject);

  const projectList = checkTargetElementExistence('#project-nav-list');
  publishAddProjectListener(projectList);
}

export { handleNewProjectAddButton };