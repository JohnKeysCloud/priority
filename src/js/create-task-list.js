import { data } from './data.js';
import { createTaskListPlaceholder } from './create-task-list-placeholder.js'

import { createAddTaskForm } from './create-task-form';
import { createAddTaskButton } from './create-add-task-button';
import { createTaskItem } from './create-task-item';

function createTaskList() {
  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-list');

  if (data.getProjectArrayLength() === 0) {
    // taskList.appendChild(createTaskListPlaceholder());
  } else {
    data.getProjectArray().forEach((project) => {
      const projectTaskArray = project.getTaskArray();

      projectTaskArray.forEach((task) => {
        taskList.appendChild(createTaskItem(task));
      });
    });
  }

  taskList.appendChild(createTaskItem());
  taskList.appendChild(createTaskItem());
  taskList.appendChild(createTaskItem());
  taskList.appendChild(createTaskItem());
  taskList.appendChild(createTaskItem());
  // taskList.appendChild(createAddTaskButton());
  // taskList.appendChild(createAddTaskForm());
  
  return taskList;
}

export { createTaskList };