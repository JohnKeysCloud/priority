function createAddTaskButton() {
  const addTaskFormButton = document.createElement('button');
  addTaskFormButton.setAttribute('id', 'add-task-form-opener-button');
  addTaskFormButton.setAttribute('type', 'button');
  addTaskFormButton.setAttribute('aria-label', 'Add Task');
  addTaskFormButton.textContent = 'Add Task';

  const addTaskButtonContainer = document.createElement('div');
  addTaskButtonContainer.setAttribute(
    'id',
    'add-task-form-opener-button-container'
  );

  addTaskButtonContainer.appendChild(addTaskFormButton);

  return addTaskButtonContainer;
}

export { createAddTaskButton };
