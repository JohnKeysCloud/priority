// * DATA
import { data } from './data.js';

// * HANDLERS
import { handleTaskItems } from './handle-task-items';

// * MARKUP
import { createTaskList } from './create-task-list';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence';

// > --------------------------------------------------------------

function checkTaskListPopulation(taskListElement) {
  const taskListFirstChild = taskListElement.firstChild; // ? taskListChildren[0] || null
  const placeholderExists =
    taskListFirstChild &&
    taskListFirstChild.hasAttribute('id', 'placeholder-container');

  if (placeholderExists || !taskListFirstChild) {
    return false;
  } else {
    return true;
  }
}

function handleTaskList(projectName) {
  const taskList = checkTargetElementExistence('#task-list');
  const mainContent = taskList.parentNode;
  const projectObject = data.getProjectObject(projectName);

  taskList.remove();

  const taskListElement = createTaskList(projectObject);
  mainContent.appendChild(taskListElement);

  const taskListHasTaskItems = checkTaskListPopulation(taskListElement);
  if (taskListHasTaskItems) {
    handleTaskItems(taskListElement);
  }
}

export { handleTaskList, checkTaskListPopulation };
