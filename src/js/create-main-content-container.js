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

  const numberOfTaskItems = taskListElement.children.length;
  if (numberOfTaskItems > 0) {
    enableScrollAnimation();
    handleTaskItems(taskListElement);
  }
  
  const mainContentContainer = document.createElement('div');
  const objectType = mainUpdateObject.getType();
  mainContentContainer.appendChild(mainHeading);
  if (objectType === 'project') {
    mainContentContainer.appendChild(createAddTaskContainer());
  } 
  mainContentContainer.setAttribute('id', 'main-container');
  mainContentContainer.appendChild(mainContent);
  
  return mainContentContainer
}

export { createMainContentContainer } 