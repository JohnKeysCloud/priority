// * UTILITIES
import { setAttributes } from '../../utilities/set-attributes';

// > --------------------------------------------------------------

function createEditTaskForm() {
  const titleLabel = document.createElement('label');
  titleLabel.classList.add('edit-task-label');
  titleLabel.setAttribute('for', 'edit-task-title');
  titleLabel.textContent = 'Title';

  const titleInput = document.createElement('input');
  titleInput.classList.add('edit-task-input');
  setAttributes(titleInput, {
    'type': 'text',
    'id': 'edit-task-title',
    'required': true,
    'placeholder': 'what are the vibes?',
  });

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container', 'input-container');
  titleContainer.append(titleLabel, titleInput);

  const detailsLabel = document.createElement('label');
  detailsLabel.classList.add('edit-task-label');
  detailsLabel.setAttribute('for', 'edit-task-details');
  detailsLabel.textContent = 'Details (optional)';

  const detailsInput = document.createElement('input');
  detailsInput.classList.add('edit-task-input');
  setAttributes(detailsInput, {
    'type': 'text',
    'id': 'edit-task-details',
    'placeholder': 'tell me more',
  });

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container', 'input-container');
  detailsContainer.append(detailsLabel, detailsInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('edit-task-label');
  dueDateLabel.setAttribute('for', 'edit-task-due-date');
  dueDateLabel.textContent = 'Due Date';

  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('edit-task-input');
  setAttributes(dueDateInput, {
    'type': 'date',
    'id': 'edit-task-due-date',
    'required': true,
    'placeholder': 'Select a date',
    'autocomplete': 'off'
  });

  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('due-date-container', 'input-container');
  dueDateContainer.append(dueDateLabel, dueDateInput);

  const saveEditTaskButton = document.createElement('button');
  saveEditTaskButton.classList.add('edit-task-button', 'bubble-button');
  setAttributes(saveEditTaskButton, {
    'id': 'save-edit-task-button',
    'type': 'button',
    'aria-label': 'Edit Task',
    'form': 'edit-task-form',
  });
  saveEditTaskButton.textContent = 'save';

  const cancelEditTaskButton = document.createElement('button');
  cancelEditTaskButton.classList.add('edit-task-button', 'bubble-button');
  setAttributes(cancelEditTaskButton, {
    'id': 'cancel-edit-task-button',
    'type': 'button',
    'aria-label': 'Cancel Edit Task',
  });
  cancelEditTaskButton.textContent = 'cancel';

  const deleteTaskButton = document.createElement('button');
  deleteTaskButton.classList.add('edit-task-button', 'no-bubble-button', 'delete-button');
  setAttributes(deleteTaskButton, {
    'id': 'delete-edit-task-button',
    'type': 'button',
    'aria-label': 'Delete Task',
  });
  deleteTaskButton.textContent = 'delete task';

  const editTaskButtonContainer = document.createElement('div');
  editTaskButtonContainer.classList.add('edit-task-button-container');
  editTaskButtonContainer.append(saveEditTaskButton, cancelEditTaskButton, deleteTaskButton);

  const editTaskForm = document.createElement('form');
  editTaskForm.setAttribute('id', 'edit-task-form');
  editTaskForm.append(
    titleContainer,
    detailsContainer,
    dueDateContainer,
    editTaskButtonContainer
  );

  const editTaskFormContainer = document.createElement('div');
  editTaskFormContainer.classList.add('edit-task-form-container');
  editTaskFormContainer.appendChild(editTaskForm);

  return editTaskFormContainer;
}

export { createEditTaskForm };