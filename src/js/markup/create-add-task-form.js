// * UTILITIES
import { setAttributes } from "../../utilities/set-attributes";

// > ---------------------------------------------------

function createAddTaskForm() {
  const titleLabel = document.createElement('label');
  titleLabel.classList.add('add-task-label');
  titleLabel.setAttribute('for', 'task-add-title');
  titleLabel.textContent = 'Title';

  const titleInput = document.createElement('input');
  titleInput.classList.add('add-task-input');
  setAttributes(titleInput, {
    'type': 'text',
    'id': 'task-add-title',
    'required': true,
    'placeholder': 'what are the vibes?',
  });

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container', 'input-container');
  titleContainer.append(titleLabel, titleInput);

  const detailsLabel = document.createElement('label');
  detailsLabel.classList.add('add-task-label');
  detailsLabel.setAttribute('for', 'task-add-details');
  detailsLabel.textContent = 'Details (optional)';

  const detailsInput = document.createElement('input');
  detailsInput.classList.add('add-task-input');
  setAttributes(detailsInput, {
    'type': 'text',
    'id': 'task-add-details',
    'placeholder': 'tell me more',
  });

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container', 'input-container');
  detailsContainer.append(detailsLabel, detailsInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('add-task-label');
  dueDateLabel.setAttribute('for', 'task-add-due-date');
  dueDateLabel.textContent = 'Due Date';

  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('add-task-input');
  setAttributes(dueDateInput, {
    'type': 'text',
    'id': 'task-add-due-date',
    'required': true,
    'aria-label': 'Enter Due Date',
    'placeholder': 'Select a date',
  });

  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('due-date-container', 'input-container');
  dueDateContainer.append(dueDateLabel, dueDateInput);

  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('add-task-button', 'bubble-button');
  setAttributes(addTaskButton, {
    'id': 'add-task-button',
    'type': 'button',
    'aria-label': 'Add Task',
    'name': 'add-task-button',
    'form': 'add-task-form',
  });
  addTaskButton.textContent = 'add';

  const cancelAddTaskButton = document.createElement('button');
  cancelAddTaskButton.classList.add('add-task-button', 'bubble-button');
  setAttributes(cancelAddTaskButton, {
    'id': 'cancel-add-task-button',
    'type': 'button',
    'aria-label': 'Cancel Add Task',
  });
  cancelAddTaskButton.textContent = 'cancel';

  const addTaskButtonContainer = document.createElement('div');
  addTaskButtonContainer.classList.add('add-task-button-container');
  addTaskButtonContainer.append(addTaskButton, cancelAddTaskButton);

  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'add-task-form');
  addTaskForm.append(
    titleContainer,
    detailsContainer,
    dueDateContainer,
    addTaskButtonContainer
  );

  const addTaskFormContainer = document.createElement('div');
  addTaskFormContainer.classList.add('add-task-form-container');
  setAttributes(addTaskFormContainer, {
    'id': 'add-task-form-container',
    'data-hidden': true,
    'aria-label': 'hidden',
  });
  addTaskFormContainer.appendChild(addTaskForm);

  return addTaskFormContainer;
}

export { createAddTaskForm };