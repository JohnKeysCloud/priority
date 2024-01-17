// * UTILITIES
import { setAttributes } from "../../utilities/set-attributes";

// > --------------------------------------------------------------

function createAddTaskButton() {
  const addTaskFormButton = document.createElement('button');
  setAttributes(addTaskFormButton, {
    'id': 'add-task-form-opener-button',
    'type': 'button',
    'aria-label': 'Add Task',
  });
  addTaskFormButton.textContent = 'add task';

  const addTaskButtonContainer = document.createElement('div');
  addTaskButtonContainer.setAttribute(
    'id',
    'add-task-form-opener-button-container'
  );

  addTaskButtonContainer.appendChild(addTaskFormButton);

  return addTaskButtonContainer;
}

export { createAddTaskButton };
