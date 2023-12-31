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

let addTaskFormOpenerButtonState = {
  isListenerAttached: false,
}

function setDisplayNone(event) {
  const targetElement = event.target;
  targetElement.setAttribute('data-hidden', 'true');
  targetElement.removeEventListener('animationend', setDisplayNone);
}

function animatePreDisplayNone(targetElement) {
  targetElement.addEventListener('animationend', setDisplayNone);
}

function toggleAddTaskForm() {
  const addTaskFormContainer = checkTargetElementExistence('#add-task-form-container');
  const isAddTaskFormContainerHidden = addTaskFormContainer.getAttribute('data-hidden');
  let formState = isAddTaskFormContainerHidden === 'true' ? 'hidden' : 'visible';

  if (formState === 'hidden') {
    addTaskFormContainer.setAttribute('data-hidden', false);
  } else if (formState === 'visible') {
    setAttributes(addTaskFormContainer, {
      'data-hidden': 'closing',
      'aria-label': 'hidden',
    });

    animatePreDisplayNone(addTaskFormContainer);

    formState = 'hidden';
  }

  // TODO:
  handleTaskAddButton(formState);
  handleTaskCancelButton(formState); 
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
    addTaskFormOpenerButtonState.isListenerAttached = true;
  }
}

function addTaskFormOpenerButtonListener(objectType) {
  toggleAddTaskButtonClickListener(objectType);
  toggleAddTaskButtonEventPublishing(objectType);
}

export { addTaskFormOpenerButtonListener, emitToggleTaskFormVisibility, addTaskFormOpenerButtonState, toggleAddTaskForm };