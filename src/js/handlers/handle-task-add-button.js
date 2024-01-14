// * DATA
import { data } from '../data';

// * EMITTERS
import { emitToggleTaskFormVisibility } from './add-task-form-opener-button-listener';

// * EVENT NAMES
import { ADD_NEW_TASK } from '../eventNames';

// * LOGIC
import { taskFactory } from '../logic';

// * HANDLERS
import { handleTaskList } from './handle-task-list';

// * STATES
import { mainState } from './handle-main';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence';
import { events } from '../../utilities/pubsub';

// > ---------------------------------------------------

function addNewTask() {
  const taskForm = checkTargetElementExistence('#add-task-form');

  const taskNameInput = taskForm.querySelector('#task-add-title');
  const taskDetailsInput = taskForm.querySelector('#task-add-details');
  const taskDueDateInput = taskForm.querySelector('#task-add-due-date');

  const taskName = taskNameInput.value.trim().toLowerCase();
  const taskDetails = taskDetailsInput.value.trim();
  const taskDueDate = taskDueDateInput.value;
  
  if (!taskName) return alert('Enter Task Name');
  if (!taskDueDate) return alert('Enter Task Due Date');
  if (taskDueDate < new Date().toISOString().slice(0, 10)) return alert('Enter Valid Due Date');
  
  taskForm.reset();

  const taskObject = taskFactory(taskName, projectName, taskDueDate, taskDetails);
  taskObject.setProjectName(projectName);
  
  const projectName = (mainState.projectName).toLowerCase();
  data.addTaskToProject(projectName, taskObject);

  emitToggleTaskFormVisibility();

  handleTaskList(projectName);
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

export { handleTaskAddButton};