// * MARKUP
import { createAddTaskButton } from './create-add-task-button.js';
import { createAddTaskForm } from './create-add-task-form.js';

// > ---------------------------------------------------

function createAddTaskContainer() {
  const addTaskContainer = document.createElement('div');
  addTaskContainer.setAttribute('id', 'add-task-container');
  addTaskContainer.append(createAddTaskButton(), createAddTaskForm());

  return addTaskContainer;
}

export { createAddTaskContainer };
