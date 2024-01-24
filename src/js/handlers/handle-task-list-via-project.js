// * DATA
import { data } from '../data.js';

// * HANDLERS
import { handleTaskItems } from './handle-task-items.js';

// * MARKUP
import { createTaskList } from '../markup/create-task-list.js';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';

// > --------------------------------------------------------------

let projectTaskListState = {
  projectObject: null,
  taskListElement: null,
  taskListHasTaskItems: function () {
    return this.projectObject && this.projectObject.getTaskArray().length > 0;
  },
};

function handleTaskListViaProject(projectName) {
  projectTaskListState.taskListElement = checkTargetElementExistence('#task-list');
  projectTaskListState.projectObject = data.getProjectObject(projectName);

  const mainContent = projectTaskListState.taskListElement.parentNode;
  const oldTaskListElement = projectTaskListState.taskListElement;
  oldTaskListElement.remove();
  
  const newTaskListElement = createTaskList(projectTaskListState.projectObject);
  projectTaskListState.taskListElement = newTaskListElement;
  mainContent.appendChild(newTaskListElement);
  
  if (projectTaskListState.taskListHasTaskItems) {
    handleTaskItems(newTaskListElement);
  }
}

export { handleTaskListViaProject, projectTaskListState };
