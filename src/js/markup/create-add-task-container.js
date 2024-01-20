// * MARKUP
import { createAddTaskForm } from './create-add-task-form.js';
import { createProjectContainerButtons } from './create-add-task-button.js';

// > ---------------------------------------------------

function createAddTaskContainer() {
  const addTaskContainer = document.createElement('div');
  addTaskContainer.setAttribute('id', 'project-handling-container');
  addTaskContainer.append(createProjectContainerButtons(), createAddTaskForm());

  return addTaskContainer;
}

export { createAddTaskContainer };
