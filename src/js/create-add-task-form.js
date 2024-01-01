function createAddTaskForm() {
  const titleLabel = document.createElement('label');
  titleLabel.classList.add('add-task-label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Title';

  const titleInput = document.createElement('input');
  titleInput.classList.add('add-task-input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('required', 'true');
  titleInput.setAttribute('placeholder', 'what are the vibes?');

  const titleContainer = document.createElement('div');
  titleContainer.setAttribute('id', 'title-container');
  titleContainer.classList.add('input-container');
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(titleInput);

  const detailsLabel = document.createElement('label');
  detailsLabel.classList.add('add-task-label');
  detailsLabel.setAttribute('for', 'details');
  detailsLabel.textContent = 'Details (optional)';

  const detailsInput = document.createElement('input');
  detailsInput.classList.add('add-task-input');
  detailsInput.setAttribute('type', 'text');
  detailsInput.setAttribute('id', 'details');
  detailsInput.setAttribute('name', 'details');
  detailsInput.setAttribute('placeholder', 'tell me more');

  const detailsContainer = document.createElement('div');
  detailsContainer.setAttribute('id', 'details-container');
  detailsContainer.classList.add('input-container');
  detailsContainer.appendChild(detailsLabel);
  detailsContainer.appendChild(detailsInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.classList.add('add-task-label');
  dueDateLabel.setAttribute('for', 'due-date');
  dueDateLabel.textContent = 'Due Date';

  const dueDateInput = document.createElement('input');
  dueDateInput.classList.add('add-task-input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'due-date');
  dueDateInput.setAttribute('name', 'due-date');
  dueDateInput.setAttribute('required', true);
  dueDateInput.setAttribute('placeholder', 'yyyy-mm-dd');

  const dueDateContainer = document.createElement('div');
  dueDateContainer.setAttribute('id', 'due-date-container');
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
  addTaskButton.textContent = 'Add Task';

  const cancelAddTaskButton = document.createElement('button');
  cancelAddTaskButton.classList.add('add-task-button');
  cancelAddTaskButton.setAttribute('id', 'cancel-add-task-button');
  cancelAddTaskButton.setAttribute('type', 'button');
  cancelAddTaskButton.setAttribute('aria-label', 'Cancel Add Task');
  cancelAddTaskButton.textContent = 'Cancel';

  const addTaskButtonContainer = document.createElement('div');
  addTaskButtonContainer.setAttribute('id', 'add-task-button-container');
  addTaskButtonContainer.appendChild(addTaskButton);
  addTaskButtonContainer.appendChild(cancelAddTaskButton);

  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('id', 'add-task-form');
  addTaskForm.appendChild(titleContainer);
  addTaskForm.appendChild(detailsContainer);
  addTaskForm.appendChild(dueDateContainer);
  addTaskForm.appendChild(addTaskButtonContainer);

  const addTaskFormContainer = document.createElement('div');
  addTaskFormContainer.setAttribute('id', 'add-task-form-container');
  addTaskFormContainer.setAttribute('aria-label', 'hidden');
  addTaskFormContainer.setAttribute('data-hidden', true);
  addTaskFormContainer.appendChild(addTaskForm);

  return addTaskFormContainer;
}

export { createAddTaskForm };