// * DATA
import { data } from './data.js';

// * MARKUP
import { createTaskItem } from './create-task-item';
import { createTaskListPlaceholder } from './create-task-list-placeholder.js'

// * STATES
import { mainState } from './handle-main.js';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence.js';

// > ---------------------------------------------------

function getTaskListContent(mainUpdateObject) {
  const taskArray = mainUpdateObject.getTaskArray();
  const mainUpdateObjectType = mainUpdateObject.getType();
  
  if (taskArray.length === 0 && mainUpdateObjectType === 'link') {
    const taskListPlaceholder = createTaskListPlaceholder();

    return taskListPlaceholder

  } else {
    const taskListFragment = document.createDocumentFragment();
    
    taskArray.forEach((task) => {
      taskListFragment.appendChild(createTaskItem(task));
    });

    return taskListFragment;
  }
}

function createTaskList(mainUpdateObject) {
  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-list');

  const taskListContent = getTaskListContent(mainUpdateObject);

  taskList.appendChild(taskListContent);

  return taskList;
}

export { createTaskList };