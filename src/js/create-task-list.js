// * MARKUP
import { createTaskItem } from './create-task-item';
import { createTaskListPlaceholder } from './create-task-list-placeholder.js'

// > ---------------------------------------------------

function createTaskList(mainUpdateObject) {
  const taskArray = mainUpdateObject.getTaskArray();
  const mainUpdateObjectType = mainUpdateObject.getType();

  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-list');

  if (taskArray.length === 0 && mainUpdateObjectType === 'link') {
    taskList.appendChild(createTaskListPlaceholder());
  } else {
    taskArray.forEach((task) => {
      taskList.appendChild(createTaskItem(task));
    });
  }
  
  return taskList;
}

export { createTaskList };