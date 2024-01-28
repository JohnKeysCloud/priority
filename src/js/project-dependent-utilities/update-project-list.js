// * MARKUP
import { createProjectItem } from '../markup/create-project-item';

// > --------------------------------------------------------------

function updateProjectList(data, projectList) {
  const reversedProjectArray = data.getProjectArray().slice().reverse();
  // ? to put the most recently added project at the top of the list
  // * slice() is used to create a copy of the array
  // * not entering a start and end index will return a copy of the entire array
  // * reverse() is used to reverse the order of the array

  if (projectList.firstChild) {
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }
  }

  reversedProjectArray.forEach((project) => {
    projectList.appendChild(createProjectItem(project.getName()));
  });
}

export { updateProjectList };