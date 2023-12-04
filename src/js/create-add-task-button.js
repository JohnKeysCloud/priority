function createAddTaskButton() {
  const openAddTaskFormButton = document.createElement('button');
  openAddTaskFormButton.setAttribute('id', 'open-add-task-form-button');
  openAddTaskFormButton.setAttribute('type', 'button');
  openAddTaskFormButton.setAttribute('aria-label', 'Add Task');
  openAddTaskFormButton.textContent = 'Add Task';

  const openAddTaskButtonContainer = document.createElement('div');
  openAddTaskButtonContainer.setAttribute(
    'id',
    'open-add-task-button-container'
  );
  openAddTaskButtonContainer.appendChild(openAddTaskFormButton);
  openAddTaskButtonContainer.appendChild(openAddTaskFormButton);

  return openAddTaskButtonContainer;
}

export { createAddTaskButton };
