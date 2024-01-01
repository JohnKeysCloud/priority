import { checkTargetElementExistence } from '../utilities/check-target-element-existence';

function toggleAddButtonListener(formState) {
  const addTaskButton = checkTargetElementExistence('#add-task-button');

  if (formState === 'visible') {
    // addTaskButton.addEventListener('click', emitInitializeTask);
  }
  else if (formState === 'closing') {
    // addTaskButton.removeEventListener('click', emitInitializeTask);
  }
}

function handleTaskAddButton(formState) {
  toggleAddButtonListener(formState);
}

export { handleTaskAddButton };