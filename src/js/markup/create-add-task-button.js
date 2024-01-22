// * UTILITIES
import { setAttributes } from "../../utilities/set-attributes";

// > --------------------------------------------------------------

function createProjectContainerButtons() {
  const addTaskFormButton = document.createElement('button');
  addTaskFormButton.classList.add('no-bubble-button', 'add-button');
  setAttributes(addTaskFormButton, {
    'id': 'add-task-form-opener-button',
    'type': 'button',
    'aria-label': 'Add Task',
  });
  addTaskFormButton.textContent = 'add task';

  const deleteProjectButton = document.createElement('button');
  deleteProjectButton.classList.add('no-bubble-button', 'delete-button');
  setAttributes(deleteProjectButton, {
    'id': 'delete-project-button',
    'type': 'button',
    'aria-label': 'Delete Project',
  });
  deleteProjectButton.textContent = 'delete project';

  const addTaskButtonContainer = document.createElement('div');
  addTaskButtonContainer.setAttribute(
    'id',
    'project-button-container'
  );

  addTaskButtonContainer.append(deleteProjectButton, addTaskFormButton);


  return addTaskButtonContainer;
}

export { createProjectContainerButtons };
