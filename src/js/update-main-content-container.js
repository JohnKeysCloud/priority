import { createTaskList } from "./create-task-list";

function updateMainContentContainer(mainUpdateObject) {
  const mainHeading = document.createElement('h2');
  mainHeading.setAttribute('id', 'main-heading');
  mainHeading.textContent = mainUpdateObject.getName();
  
  console.log(2, mainUpdateObject.getName());
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.appendChild(createTaskList(mainUpdateObject));

  const mainContentContainer = document.createElement('div');
  mainContentContainer.setAttribute('id', 'main-container');
  mainContentContainer.appendChild(mainHeading);
  mainContentContainer.appendChild(mainContent);
  
  return mainContentContainer
}

export { updateMainContentContainer } 