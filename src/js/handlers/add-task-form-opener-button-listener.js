// * EVENT NAMES
import { TOGGLE_ADD_TASK_FORM } from "../eventNames";

// * HANDLERS
import { handleTaskAddButton } from "./handle-task-add-button";
import { handleTaskAddInputs } from "./handle-task-add-inputs";
import { handleTaskCancelButton } from "./handle-task-cancel-button";

// * STATES
import { mainState } from "./handle-main";

// * UTITLIIES
import { checkTargetElementExistence } from "../../utilities/check-target-element-existence";
import { events } from "../../utilities/pubsub";
import { setAttributes } from "../../utilities/set-attributes";

// > ---------------------------------------------------

function setDisplayNone(event) {
  mainState.addTaskFormState = 'hidden';

  const targetElement = event.target;
  targetElement.setAttribute('data-hidden', 'true');
  targetElement.removeEventListener('animationend', setDisplayNone);
}

function animatePreDisplayNone(targetElement) {
  mainState.addTaskFormState = 'closing';
  
  targetElement.addEventListener('animationend', setDisplayNone);
}

function toggleAddTaskForm() {
  const addTaskFormContainer = checkTargetElementExistence('.add-task-form-container');
  const currenAddTaskFormState = mainState.addTaskFormState;

  if (currenAddTaskFormState === 'hidden') {
    setAttributes(addTaskFormContainer, {
      'data-hidden': 'false',
      'aria-label': 'visible',
    });

    mainState.addTaskFormState = 'visible';
  } else if (currenAddTaskFormState === 'visible') {
    setAttributes(addTaskFormContainer, {
      'data-hidden': 'closing',
      'aria-label': 'hidden',
    });

    animatePreDisplayNone(addTaskFormContainer);
  }

  handleTaskAddInputs(addTaskFormContainer, mainState.addTaskFormState);
  handleTaskAddButton(mainState.addTaskFormState);
  handleTaskCancelButton(mainState.addTaskFormState); 
}

function emitToggleTaskFormVisibility() {
  events.emit(TOGGLE_ADD_TASK_FORM);
}

function toggleAddTaskButtonEventPublishing(objectType) {
  if (objectType === 'project') {
    events.on(TOGGLE_ADD_TASK_FORM, toggleAddTaskForm);
  }
}

function toggleAddTaskButtonClickListener(objectType) {
  const addTaskFormOpenerButton = checkTargetElementExistence(
    '#add-task-form-opener-button'
  );

  if (objectType === 'project') {
    addTaskFormOpenerButton.addEventListener('click', emitToggleTaskFormVisibility);
    mainState.isAddTaskButtonListenerAttached = true;
  }
}

function addTaskFormOpenerButtonListener(objectType) {
  toggleAddTaskButtonClickListener(objectType);
  toggleAddTaskButtonEventPublishing(objectType);
}

export { addTaskFormOpenerButtonListener, emitToggleTaskFormVisibility, mainState, toggleAddTaskForm };