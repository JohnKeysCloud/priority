// * EMITTERS
import { emitToggleTaskFormVisibility } from "./add-task-form-opener-button-listener";

// * EVENT NAMES
import { TOGGLE_ADD_TASK_FORM } from "../eventNames";

// * EVENTS
import { toggleAddTaskForm } from "./add-task-form-opener-button-listener";

// * STATES
import { mainState } from "./handle-main";

// * UTILITIES
import { checkTargetElementExistence } from "../../utilities/check-target-element-existence";
import { events } from "../../utilities/pubsub";

// > ---------------------------------------------------

function removeAddTaskFormOpenerButtonListener() {
  const addTaskFormOpenerButton = checkTargetElementExistence(
    '#add-task-form-opener-button'
  );
  addTaskFormOpenerButton.removeEventListener('click', emitToggleTaskFormVisibility);

  mainState.isAddTaskButtonListenerAttached = false;
  events.off(TOGGLE_ADD_TASK_FORM, toggleAddTaskForm);
}

export { removeAddTaskFormOpenerButtonListener };