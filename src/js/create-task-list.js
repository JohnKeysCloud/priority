import { data } from './data.js';
import { createTaskListPlaceholder } from './create-task-list-placeholder.js'

import { createAddTaskForm } from './create-task-form';
import { createAddTaskButton } from './create-add-task-button';
import { createTaskItem } from './create-task-item';

function createTaskList(mainUpdateObject) {
  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-list');
  const taskArray = mainUpdateObject.getTaskArray();

  if (taskArray.length === 0) {
    taskList.appendChild(createTaskListPlaceholder());
  } else {
    taskArray.forEach((task) => {
      taskList.appendChild(createTaskItem(task));
    });
  }

  // taskList.appendChild(createTaskItem());
  // taskList.appendChild(createTaskItem());
  // taskList.appendChild(createTaskItem());
  // taskList.appendChild(createTaskItem());
  // taskList.appendChild(createTaskItem());
  // taskList.appendChild(createAddTaskButton());
  // taskList.appendChild(createAddTaskForm());
  
  return taskList;
}

export { createTaskList };