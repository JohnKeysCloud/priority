import { handleSaveEditTaskButton } from '../handlers/handle-edit-task-modal-buttons';

// > ---------------------------------------------------

// TODO: remove the event listeners from this markup module

function createEditTaskForm() {
  const titleLabel = document.createElement('label');
  titleLabel.classList.add('edit-task-label');
  titleLabel.setAttribute('for', 'edit-task-title');
  titleLabel.textContent = 'Title';

  const titleInput = document.createElement('input');
  titleInput.classList.add('edit-task-input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'edit-task-title');
  titleInput.setAttribute('required', 'true');
  titleInput.setAttribute('placeholder', 'what are the vibes?');
  titleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveEditTaskButton();
    }
  });

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
  titleContainer.classList.add('input-container');
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(titleInput);

  const detailsLabel = document.createElement('label');
  detailsLabel.classList.add('edit-task-label');
  detailsLabel.setAttribute('for', 'edit-task-details');
  detailsLabel.textContent = 'Details (optional)';

  const detailsInput = document.createElement('input');
  detailsInput.classList.add('edit-task-input');
  detailsInput.setAttribute('type', 'text');
  detailsInput.setAttribute('id', 'edit-task-details');
  detailsInput.setAttribute('placeholder', 'tell me more');
  detailsInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveEditTaskButton();
    }
  });

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container');
  detailsContainer.classList.add('input-container');
  detailsContainer.appendChild(detailsLabel);
  detailsContainer.appendChild(detailsInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('edit-task-label');
  dueDateLabel.setAttribute('for', 'edit-task-due-date');
  dueDateLabel.textContent = 'Due Date';

  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('edit-task-input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'edit-task-due-date');
  dueDateInput.setAttribute('required', true);
  dueDateInput.setAttribute('placeholder', 'yyyy-mm-dd');
  dueDateInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveEditTaskButton();
    }
  });

  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('due-date-container');
  dueDateContainer.classList.add('input-container');
  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDateInput);

  const saveEditTaskButton = document.createElement('button');
  saveEditTaskButton.classList.add('edit-task-button');
  saveEditTaskButton.setAttribute('id', 'save-edit-task-button');
  saveEditTaskButton.setAttribute('type', 'button');
  saveEditTaskButton.setAttribute('aria-label', 'Edit Task');
  saveEditTaskButton.setAttribute('form', 'edit-task-form');
  saveEditTaskButton.textContent = 'save';

  const cancelEditTaskButton = document.createElement('button');
  cancelEditTaskButton.classList.add('edit-task-button');
  cancelEditTaskButton.setAttribute('id', 'cancel-edit-task-button');
  cancelEditTaskButton.setAttribute('type', 'button');
  cancelEditTaskButton.setAttribute('aria-label', 'Cancel Edit Task');
  cancelEditTaskButton.textContent = 'cancel';

  const editTaskButtonContainer = document.createElement('div');
  editTaskButtonContainer.classList.add('edit-task-button-container');
  editTaskButtonContainer.appendChild(saveEditTaskButton);
  editTaskButtonContainer.appendChild(cancelEditTaskButton);

  const editTaskForm = document.createElement('form');
  editTaskForm.setAttribute('id', 'edit-task-form');
  editTaskForm.appendChild(titleContainer);
  editTaskForm.appendChild(detailsContainer);
  editTaskForm.appendChild(dueDateContainer);
  editTaskForm.appendChild(editTaskButtonContainer);

  const editTaskFormContainer = document.createElement('div');
  editTaskFormContainer.classList.add('edit-task-form-container');
  editTaskFormContainer.appendChild(editTaskForm);

  return editTaskFormContainer;
}

export { createEditTaskForm };
