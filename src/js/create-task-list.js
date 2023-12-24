import { projectArray } from './data';
import { createTaskListPlaceholder } from './create-task-list-placeholder.js'

import { createAddTaskForm } from './create-task-form';
import { createAddTaskButton } from './create-add-task-button';
import { createTaskItem } from './create-task-item';

function createTaskList() {
  const taskList = document.createElement('ul');
  taskList.classList.add('task-list');

  if (projectArray.length === 0) {
    taskList.appendChild(createTaskListPlaceholder());
  } else {
    projectArray.forEach((project) => {
      const projectTaskArray = project.getTaskArray();

      projectTaskArray.forEach((task) => {
        taskList.appendChild(createTaskItem(task));
      });
    });
  }
  taskList.appendChild(createAddTaskButton());
  
    taskList.appendChild(createAddTaskForm());
  return taskList;
}

export { createTaskList };