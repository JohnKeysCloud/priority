// * MARKUP
import { createAddTaskButton } from './create-add-task-button';
import { createAddTaskForm } from './create-add-task-form.js';

// > ---------------------------------------------------

function createAddTaskContainer() {
  const addTaskContainer = document.createElement('div');
  addTaskContainer.setAttribute('id', 'add-task-container');
  addTaskContainer.appendChild(createAddTaskButton());
  addTaskContainer.appendChild(createAddTaskForm());

  return addTaskContainer;
}

export { createAddTaskContainer };
