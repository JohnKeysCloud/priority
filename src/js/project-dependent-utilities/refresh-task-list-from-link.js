// * DATA
import { data } from '../data';

// * HANDLERS
import { handleTaskItems } from '../handlers/handle-task-items';

// * LOGIC
import { linkObjectFactory } from '../logic';

// * MARKUP
import { createTaskList } from '../markup/create-task-list';

// * PROJECT_DEPENDENT_UTILITIES
import { checkTaskListPopulation } from './check-task-list-population';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence';

// > --------------------------------------------------------------

function refreshTaskListFromLink(linkName) {
  const mainContent = checkTargetElementExistence('#main-content');
  const taskList = mainContent.querySelector('#task-list');
  const pageName = linkName;
  const linkObject = linkObjectFactory(pageName, data.getAllTasks());
  const newTaskList = createTaskList(linkObject);

  taskList.remove();
  mainContent.appendChild(newTaskList);

  const taskListHasTaskItems = checkTaskListPopulation(newTaskList);
  if (taskListHasTaskItems) {
    handleTaskItems(newTaskList);
  }
}

export { refreshTaskListFromLink };