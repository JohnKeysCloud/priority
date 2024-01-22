// * MARKUP
import { createAddTaskContainer } from "./create-add-task-container";
import { createDeleteConfirmationDialog } from "./create-delete-confirmation-dialog";
import { createTaskList } from "./create-task-list";

// > ---------------------------------------------------

function createMainContentContainer(mainUpdateObject) {
  const mainHeading = document.createElement('h2');
  const headingTextContent = mainUpdateObject.getName();
  mainHeading.setAttribute('id', 'main-heading');
  mainHeading.textContent = headingTextContent;
  
  const taskListElement = createTaskList(mainUpdateObject);

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.appendChild(taskListElement);

  const mainContentContainer = document.createElement('div');
  const objectType = mainUpdateObject.getType();
  mainContentContainer.setAttribute('id', 'main-container');
  mainContentContainer.appendChild(mainHeading);
  if (objectType === 'project') {
    mainContentContainer.appendChild(createAddTaskContainer());
  } 
  mainContentContainer.appendChild(mainContent);

  mainContentContainer.appendChild(createDeleteConfirmationDialog());
  
  return mainContentContainer
}

export { createMainContentContainer } 