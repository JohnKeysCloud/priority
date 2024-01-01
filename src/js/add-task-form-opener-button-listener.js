// * EVENT NAMES
import { TOGGLE_ADD_TASK_FORM } from "./eventNames";

// * HANDLERS
import { handleTaskAddButton } from "./handle-task-add-button";
import { handleTaskCancelButton } from "./handle-task-cancel-button";

// * UTITLIIES
import { events } from "../utilities/pubsub";
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";
import { setAttributes } from "../utilities/set-attributes";

// > ---------------------------------------------------

let taskComponentState = {
  formState: 'hidden',
  isAddTaskButtonListenerAttached: false,
}

function setDisplayNone(event) {
  taskComponentState.formState = 'hidden';

  const targetElement = event.target;
  targetElement.setAttribute('data-hidden', 'true');
  targetElement.removeEventListener('animationend', setDisplayNone);
}

function animatePreDisplayNone(targetElement) {
  taskComponentState.formState = 'closing';
  
  targetElement.addEventListener('animationend', setDisplayNone);
}

function toggleAddTaskForm() {
  const addTaskFormContainer = checkTargetElementExistence('#add-task-form-container');
  const currentTaskFormState = taskComponentState.formState;

  if (currentTaskFormState === 'hidden') {
    addTaskFormContainer.setAttribute('data-hidden', false);

    taskComponentState.formState = 'visible';
  } else if (currentTaskFormState === 'visible') {
    setAttributes(addTaskFormContainer, {
      'data-hidden': 'closing',
      'aria-label': 'hidden',
    });

    animatePreDisplayNone(addTaskFormContainer);
  }

  handleTaskAddButton(taskComponentState.formState);
  handleTaskCancelButton(taskComponentState.formState); 
}

function toggleAddTaskButtonEventPublishing(objectType) {
  if (objectType === 'project') {
    events.on(TOGGLE_ADD_TASK_FORM, toggleAddTaskForm);
  }
}

function emitToggleTaskFormVisibility() {
  events.emit(TOGGLE_ADD_TASK_FORM);
}

function toggleAddTaskButtonClickListener(objectType) {
  const addTaskFormOpenerButton = checkTargetElementExistence(
    '#add-task-form-opener-button'
  );

  if (objectType === 'project') {
    addTaskFormOpenerButton.addEventListener('click', emitToggleTaskFormVisibility);
    taskComponentState.isAddTaskButtonListenerAttached = true;
  }
}

function addTaskFormOpenerButtonListener(objectType) {
  toggleAddTaskButtonClickListener(objectType);
  toggleAddTaskButtonEventPublishing(objectType);
}

export { addTaskFormOpenerButtonListener, emitToggleTaskFormVisibility, taskComponentState, toggleAddTaskForm };