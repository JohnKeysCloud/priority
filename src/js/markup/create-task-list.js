// * MARKUP
import { createTaskItem } from './create-task-item.js';
import { createTaskListPlaceholder } from './create-task-list-placeholder.js'

// > ---------------------------------------------------

function getTaskListContent(mainUpdateObject) {
const taskArray = mainUpdateObject.getTaskArray();
  const mainUpdateObjectType = mainUpdateObject.getType(); 
  
  if (taskArray.length === 0 && mainUpdateObjectType === 'link') {
    const taskListPlaceholder = createTaskListPlaceholder();

    return taskListPlaceholder

  } else if (taskArray.length > 0) {
    const taskListFragment = document.createDocumentFragment();

    if (taskArray.length > 1) mainUpdateObject.sortTaskArray();
    
    taskArray.forEach((task) => {
      taskListFragment.appendChild(createTaskItem(task));
    });

    return taskListFragment;
  } else {
    return
  }
}

function createTaskList(mainUpdateObject) {
  const taskList = document.createElement('ul');
  taskList.setAttribute('id', 'task-list');

  const taskListContent = getTaskListContent(mainUpdateObject);

  if (taskListContent) {
    taskList.appendChild(taskListContent);
  }

  return taskList;
}

export { createTaskList };