// * DATA
import { data } from './data';

// * EVENT NAMES
import { ADD_NEW_TASK } from './eventNames';

// * LOGIC
import { taskFactory } from './logic';

// * EMITTERS
import { emitToggleTaskFormVisibility } from './add-task-form-opener-button-listener';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence';
import { events } from '../utilities/pubsub';

// > ---------------------------------------------------

function addNewTask() {
  const taskForm = checkTargetElementExistence('#add-task-form');
  const taskNameInput = taskForm.querySelector('#title');
  const taskDetailsInput = taskForm.querySelector('#details');
  const taskDueDateInput = taskForm.querySelector('#due-date');

  const taskName = taskNameInput.value.trim();
  const taskDetails = taskDetailsInput.value.trim();
  const taskDueDate = taskDueDateInput.value;

  // TODO: 
  console.table([taskName, taskDetails, taskDueDate]);
  // ! add required to name and date inputs
  // ! add validation maybe?
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