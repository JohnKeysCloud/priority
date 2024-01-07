// * DATA
import { data } from './data';

// * EVENT NAMES
import { ADD_NEW_TASK } from './eventNames';

// * LOGIC
import { taskFactory } from './logic';

// * MARKUP
import { createTaskList } from './create-task-list';

// * EMITTERS
import { emitToggleTaskFormVisibility } from './add-task-form-opener-button-listener';

// * STATES
import { mainState } from './handle-main';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence';
import { events } from '../utilities/pubsub';

import { enableScrollAnimation } from './enable-scroll-animation';

// > ---------------------------------------------------

function updateTaskList(projectName) {
  const taskList = checkTargetElementExistence('#task-list');
  const mainContent = taskList.parentNode;
  const projectObject = data.getProjectObject(projectName);
  
  taskList.remove();

  mainContent.appendChild(createTaskList(projectObject));
  enableScrollAnimation();
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
  console.log(new Date());
  console.log(new Date().toString());
  console.log(new Date().toLocaleDateString());
  console.log(new Date().toISOString());
  console.log(new Date().toISOString().slice(0, 10));
  console.log(taskDueDate);
  if (taskDueDate < new Date().toISOString().slice(0, 10)) return alert('Enter Valid Due Date');

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