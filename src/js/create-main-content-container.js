// * MARKUP
import { createTaskList } from "./create-task-list";
import { createAddTaskContainer } from "./create-add-task-container";

// > ---------------------------------------------------

function createMainContentContainer(mainUpdateObject) {
  const mainHeading = document.createElement('h2');
  const headingTextContent = mainUpdateObject.getName();
  mainHeading.setAttribute('id', 'main-heading');
  mainHeading.textContent = headingTextContent;
  
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.appendChild(createTaskList(mainUpdateObject));
  
  const objectType = mainUpdateObject.getType();
  if (objectType === 'project') {
    mainContent.appendChild(createAddTaskContainer());
  } 

  const mainContentContainer = document.createElement('div');
  mainContentContainer.setAttribute('id', 'main-container');
  mainContentContainer.appendChild(mainHeading);
  mainContentContainer.appendChild(mainContent);
  
  return mainContentContainer
}

export { createMainContentContainer } 