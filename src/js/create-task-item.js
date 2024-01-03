import { formatDistanceToNow } from "date-fns";

function createTaskItem(taskObject) {
  const taskCheckBoxContainer = document.createElement('div');
  taskCheckBoxContainer.classList.add('task-checkbox-container');

  const taskItemCheckbox = document.createElement('input');
  taskItemCheckbox.setAttribute('type', 'checkbox');
  taskItemCheckbox.classList.add('task-item-checkbox');
  taskCheckBoxContainer.appendChild(taskItemCheckbox);

  const taskItemTitle = document.createElement('h4');
  taskItemTitle.classList.add('task-item-title');
  taskItemTitle.textContent = taskObject.getName();

  const taskItemDetails = document.createElement('p');
  taskItemDetails.classList.add('task-item-details');
  taskItemDetails.textContent = taskObject.getDetails();

  const taskItemDate = document.createElement('p');
  taskItemDate.classList.add('task-item-date');
  const taskItemDateDistance = formatDistanceToNow(taskObject.getDueDate(), { addSuffix: true });
  taskItemDate.textContent = `Due ${taskItemDateDistance}`;

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
  taskButtonContainer.classList.add('task-item-button-container');
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
  console.log(taskObject.getDetails());
  if (taskObject.getDetails() !== '') {
    taskItem.appendChild(taskItemDetails);
  }
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
