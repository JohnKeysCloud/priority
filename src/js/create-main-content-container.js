// * MARKUP
import { createTaskList } from "./create-task-list";
import { createAddTaskContainer } from "./create-add-task-container";
import { createEditTaskModal } from "./create-edit-task-modal";

// * UTILITIES
import { enableScrollAnimation } from "./enable-scroll-animation";

import { handleTaskItems } from "./handle-task-items";

// > ---------------------------------------------------

function createMainContentContainer(mainUpdateObject) {
  const mainHeading = document.createElement('h2');
  const headingTextContent = mainUpdateObject.getName();
  mainHeading.setAttribute('id', 'main-heading');
  mainHeading.textContent = headingTextContent;
  
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  const taskListElement = createTaskList(mainUpdateObject);
  mainContent.appendChild(taskListElement);

  const updateObjectTaskArray = mainUpdateObject.getTaskArray();
  if (updateObjectTaskArray.length > 0) {
    enableScrollAnimation();
    console.log(mainUpdateObject.getTaskArray());
    handleTaskItems(taskListElement);
  }
  
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