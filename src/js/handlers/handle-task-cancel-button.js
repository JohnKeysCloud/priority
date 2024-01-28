// * EMITTERS
import { emitToggleTaskFormVisibility } from './add-task-form-opener-button-listener';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence';

// > ---------------------------------------------------

function toggleCancelButtonListener(formState) {
  const cancelAddTaskButton = checkTargetElementExistence('#cancel-add-task-button');

  if (formState === 'visible') { 
    cancelAddTaskButton.addEventListener('click', emitToggleTaskFormVisibility);
  } else if (formState === 'closing') {
    cancelAddTaskButton.removeEventListener('click', emitToggleTaskFormVisibility);
  }
}

function handleTaskCancelButton(formState) {
  toggleCancelButtonListener(formState);
}

export { handleTaskCancelButton };