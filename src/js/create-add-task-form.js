// * EVENT NAMES
import { ADD_NEW_TASK } from "./eventNames";

// * UTILITIES
import { events } from "../utilities/pubsub";

// > ---------------------------------------------------

function createAddTaskForm() {
  const titleLabel = document.createElement('label');
  titleLabel.classList.add('add-task-label');
  titleLabel.setAttribute('for', 'task-add-title');
  titleLabel.textContent = 'Title';

  const titleInput = document.createElement('input');
  titleInput.classList.add('add-task-input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'task-add-title');
  titleInput.setAttribute('required', 'true');
  titleInput.setAttribute('placeholder', 'what are the vibes?');
  titleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      events.emit(ADD_NEW_TASK);
    }
  });

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
  titleContainer.classList.add('input-container');
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(titleInput);

  const detailsLabel = document.createElement('label');
  detailsLabel.classList.add('add-task-label');
  detailsLabel.setAttribute('for', 'task-add-details');
  detailsLabel.textContent = 'Details (optional)';

  const detailsInput = document.createElement('input');
  detailsInput.classList.add('add-task-input');
  detailsInput.setAttribute('type', 'text');
  detailsInput.setAttribute('id', 'task-add-details');
  detailsInput.setAttribute('placeholder', 'tell me more');
  detailsInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      events.emit(ADD_NEW_TASK);
    }
  });

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container');
  detailsContainer.classList.add('input-container');
  detailsContainer.appendChild(detailsLabel);
  detailsContainer.appendChild(detailsInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('add-task-label');
  dueDateLabel.setAttribute('for', 'task-add-due-date');
  dueDateLabel.textContent = 'Due Date';

  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('add-task-input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'task-add-due-date');
  dueDateInput.setAttribute('required', true);
  dueDateInput.setAttribute('placeholder', 'yyyy-mm-dd');
  dueDateInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      events.emit(ADD_NEW_TASK);
    }
  });

  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('due-date-container');
  dueDateContainer.classList.add('input-container');
  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDateInput);

  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task-button');
  addTaskButton.setAttribute('id', 'add-task-button');
  addTaskButton.setAttribute('type', 'button');
  addTaskButton.setAttribute('aria-label', 'Add Task');
  addTaskButton.setAttribute('name', 'add-task-button');
  addTaskButton.setAttribute('form', 'add-task-form');
  addTaskButton.textContent = 'add';

  const cancelAddTaskButton = document.createElement('button');
  cancelAddTaskButton.classList.add('add-task-button');
  cancelAddTaskButton.setAttribute('id', 'cancel-add-task-button');
  cancelAddTaskButton.setAttribute('type', 'button');
  cancelAddTaskButton.setAttribute('aria-label', 'Cancel Add Task');
  cancelAddTaskButton.textContent = 'cancel';

  const addTaskButtonContainer = document.createElement('div');
  addTaskButtonContainer.classList.add('add-task-button-container');
  addTaskButtonContainer.appendChild(addTaskButton);
  addTaskButtonContainer.appendChild(cancelAddTaskButton);

  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'add-task-form');
  addTaskForm.appendChild(titleContainer);
  addTaskForm.appendChild(detailsContainer);
  addTaskForm.appendChild(dueDateContainer);
  addTaskForm.appendChild(addTaskButtonContainer);

  const addTaskFormContainer = document.createElement('div');
  addTaskFormContainer.classList.add('add-task-form-container');
  addTaskFormContainer.setAttribute('aria-label', 'hidden');
  addTaskFormContainer.setAttribute('data-hidden', true);
  addTaskFormContainer.appendChild(addTaskForm);

  return addTaskFormContainer;
}

export { createAddTaskForm };