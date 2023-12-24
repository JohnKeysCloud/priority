function createTaskItem(task) {
  const taskCheckBoxContainer = document.createElement('div');
  taskCheckBoxContainer.classList.add('task-checkbox-container');

  const taskItemCheckbox = document.createElement('input');
  taskItemCheckbox.setAttribute('type', 'checkbox');
  taskItemCheckbox.classList.add('task-item-checkbox');
  taskCheckBoxContainer.appendChild(taskItemCheckbox);

  const taskItemTitle = document.createElement('h4');
  taskItemTitle.classList.add('task-item-title');
  taskItemTitle.textContent = `Task Item`;
  taskItemTitle.textContent = task.getTitle();

  const taskItemDetails = document.createElement('p');
  taskItemDetails.classList.add('task-item-details');
  taskItemDetails.textContent = 'Lorem ipsum dolor sit amet consectetur.';
  taskItemDetails.textContent = task.getDetails();

  const taskItemDate = document.createElement('p');
  taskItemDate.classList.add('task-item-date');
  taskItemDate.textContent = '2021-01-01';
  taskItemDate.textContent = task.getDueDate();

  const taskPriorityCheckbox = document.createElement('input');
  taskPriorityCheckbox.classList.add('task-priority-checkbox');
  taskPriorityCheckbox.setAttribute('type', 'checkbox');
  taskPriorityCheckbox.setAttribute('aria-label', 'Prioritize Task');

  const modifyTaskButton = document.createElement('button');
  modifyTaskButton.classList.add('modify-task-button');
  modifyTaskButton.setAttribute('type', 'button');
  modifyTaskButton.setAttribute('aria-label', 'Edit Task');

  const modifyTaskButtonIcon = document.createElement('i');
  modifyTaskButtonIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
  modifyTaskButton.appendChild(modifyTaskButtonIcon);

  const taskButtonContainer = document.createElement('div');
  taskButtonContainer.classList.add('task-button-container');
  taskButtonContainer.appendChild(taskPriorityCheckbox);
  taskButtonContainer.appendChild(modifyTaskButton);

  const taskRightSideContainer = document.createElement('div');
  taskRightSideContainer.classList.add('task-right-side-container');
  taskRightSideContainer.appendChild(taskItemDate);
  taskRightSideContainer.appendChild(taskButtonContainer);

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.appendChild(taskCheckBoxContainer);
  taskItem.appendChild(taskItemTitle);
  taskItem.appendChild(taskItemDetails);
  taskItem.appendChild(taskRightSideContainer);

  // TODO:
  const taskEditModal = document.createElement('dialog');
  taskEditModal.classList.add('task-edit-modal');
  // taskItem.appendChild(taskEditModal);

  const taskEditButton = document.createElement('button');
  taskEditButton.classList.add('task-edit-button');
  taskEditButton.setAttribute('type', 'button');
  taskEditButton.setAttribute('aria-label', 'Edit Task');
  taskEditModal.appendChild(taskEditButton);

  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.classList.add('task-delete-button');
  taskDeleteButton.setAttribute('type', 'button');
  taskDeleteButton.setAttribute('aria-label', 'Delete Task');
  taskEditModal.appendChild(taskDeleteButton);

  return taskItem;
}

export { createTaskItem };