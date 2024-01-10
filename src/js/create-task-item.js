// * UTILITIES
import { formatDate } from "../utilities/format-date";

import { setAttributes } from "../utilities/set-attributes";

// > --------------------------------------------------------------

function createTaskItem(taskObject) {
  const taskTitle = (taskObject.getName()).toLowerCase();
  const taskDetails = taskObject.getDetails();
  const taskDueDate = taskObject.getDueDate();
  const isTaskComplete = taskObject.getCompleted();
  const isTaskPriority = taskObject.getPriority();

  const taskCheckBoxContainer = document.createElement('div');
  taskCheckBoxContainer.classList.add('task-checkbox-container');

  const taskItemCheckbox = document.createElement('input');
  taskItemCheckbox.setAttribute('type', 'checkbox');
  taskItemCheckbox.setAttribute('data-checked', isTaskComplete ? 'true' : 'false');
  isTaskComplete ? taskItemCheckbox.checked = true : taskItemCheckbox.checked = false;

  taskItemCheckbox.classList.add('task-item-checkbox');
  taskCheckBoxContainer.appendChild(taskItemCheckbox);

  const taskItemTitle = document.createElement('h4');
  taskItemTitle.classList.add('task-item-title');
  taskItemTitle.textContent = taskTitle;

  const taskItemDetails = document.createElement('p');
  taskItemDetails.classList.add('task-item-details');
  taskItemDetails.textContent = taskDetails;

  const taskItemDate = document.createElement('p');
  taskItemDate.classList.add('task-item-date');
  taskItemDate.textContent = `Due ${formatDate(taskDueDate)}`;

  const taskPriorityStarIcon = document.createElement('span');
  taskPriorityStarIcon.classList.add('task-priority-star-icon', 'material-symbols-outlined');
  taskPriorityStarIcon.textContent = 'star';

  const taskPriorityStarButton = document.createElement('button');
  taskPriorityStarButton.classList.add('task-priority-star-button'); 
  setAttributes(taskPriorityStarButton, {
    'aria-label': 'Prioritize Task',
    'type': 'button',
    'data-checked': isTaskPriority ? 'true' : 'false',
  });
  taskPriorityStarButton.appendChild(taskPriorityStarIcon);

  const modifyTaskButton = document.createElement('button');
  modifyTaskButton.classList.add('modify-task-button');
  modifyTaskButton.setAttribute('type', 'button');
  modifyTaskButton.setAttribute('aria-label', 'Edit Task');

  const modifyTaskButtonIcon = document.createElement('i');
  modifyTaskButtonIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
  modifyTaskButton.appendChild(modifyTaskButtonIcon);

  const taskButtonContainer = document.createElement('div');
  taskButtonContainer.classList.add('task-item-button-container');
  taskButtonContainer.appendChild(taskPriorityStarButton);
  taskButtonContainer.appendChild(modifyTaskButton);

  const taskRightSideContainer = document.createElement('div');
  taskRightSideContainer.classList.add('task-right-side-container');
  taskRightSideContainer.appendChild(taskItemDate);
  taskRightSideContainer.appendChild(taskButtonContainer);

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.appendChild(taskCheckBoxContainer);
  taskItem.appendChild(taskItemTitle);
  if (taskDetails.trim() !== '') {
    taskItem.appendChild(taskItemDetails);
  }
  taskItem.appendChild(taskRightSideContainer);

  return taskItem;
}

export { createTaskItem };
