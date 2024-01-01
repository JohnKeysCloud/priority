// * EMITTERS
import { emitToggleTaskFormVisibility } from "./add-task-form-opener-button-listener";

// * EVENT NAMES
import { TOGGLE_ADD_TASK_FORM } from "./eventNames";

// * EVENTS
import { toggleAddTaskForm } from "./add-task-form-opener-button-listener";

// * STATES
import { taskComponentState } from "./add-task-form-opener-button-listener";

// * UTILITIES
import { events } from "../utilities/pubsub";
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";

// > ---------------------------------------------------

function removeAddTaskFormOpenerButtonListener() {
  const addTaskFormOpenerButton = checkTargetElementExistence(
    '#add-task-form-opener-button'
  );
  addTaskFormOpenerButton.removeEventListener('click', emitToggleTaskFormVisibility);

  taskComponentState.isAddTaskButtonListenerAttached = false;
  events.off(TOGGLE_ADD_TASK_FORM, toggleAddTaskForm);
}

export { removeAddTaskFormOpenerButtonListener };