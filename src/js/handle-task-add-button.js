// * DATA
import { data } from './data';

// * EVENT NAMES
import { ADD_NEW_TASK } from './eventNames';

// * LOGIC
import { taskFactory } from './logic';

// * MARKUP
import { createTaskItem } from './create-task-item';

// * EMITTERS
import { emitToggleTaskFormVisibility } from './add-task-form-opener-button-listener';

// * STATES
import { mainState } from './handle-main';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence';
import { events } from '../utilities/pubsub';

// > ---------------------------------------------------

function createTaskListFragment(projectObject) {
  const taskListFragment = document.createDocumentFragment();

  projectObject.getTaskArray().forEach((task) => {
    taskListFragment.appendChild(createTaskItem(task));
  });

  return taskListFragment;
}

function clearTaskList(taskList) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function updateTaskList(projectName) {
  const taskList = checkTargetElementExistence('#task-list');
  const projectObject = data.getProjectObject(projectName);
  const taskListFragment = createTaskListFragment(projectObject);
  
  clearTaskList(taskList);
  taskList.appendChild(taskListFragment);
}

function addNewTask() {
  const taskForm = checkTargetElementExistence('#add-task-form');

  const taskNameInput = taskForm.querySelector('#title');
  const taskDetailsInput = taskForm.querySelector('#details');
  const taskDueDateInput = taskForm.querySelector('#due-date');

  const taskName = taskNameInput.value.trim();
  const taskDetails = taskDetailsInput.value.trim();
  const taskDueDate = taskDueDateInput.value;
  
  if (!taskName) return alert('Enter Task Name');
  if (!taskDueDate) return alert('Enter Task Due Date');
  taskForm.reset();

  const projectName = mainState.projectName;

  const taskObject = taskFactory(taskName, projectName, taskDetails, taskDueDate);

  taskObject.setProjectName(projectName);

  data.addTaskToProject(projectName, taskObject);

  emitToggleTaskFormVisibility();

  updateTaskList(projectName);
}

function toggleTaskAddEvent(formState) {
  if (formState === 'visible') {
    events.on(ADD_NEW_TASK, addNewTask);
  }
  else if (formState === 'closing') {
    events.off(ADD_NEW_TASK, addNewTask);
  }
}

function emitInitializeTask() {  
  events.emit(ADD_NEW_TASK);
}

function toggleTaskAddButtonListener(formState) {
  const addTaskButton = checkTargetElementExistence('#add-task-button');

  if (formState === 'visible') {
    addTaskButton.addEventListener('click', emitInitializeTask);
  }
  else if (formState === 'closing') {
    addTaskButton.removeEventListener('click', emitInitializeTask);
  }
}

function handleTaskAddButton(formState) {
  toggleTaskAddButtonListener(formState);
  toggleTaskAddEvent(formState);
}

export { handleTaskAddButton };