// * UTILITIES
import { setAttributes } from "../../utilities/set-attributes";

// > --------------------------------------------------------------

function createProjectContainerButtons() {
  const addTaskFormButton = document.createElement('button');
  setAttributes(addTaskFormButton, {
    'id': 'add-task-form-opener-button',
    'type': 'button',
    'aria-label': 'Add Task',
  });
  addTaskFormButton.textContent = 'add task';

  const deleteProjectButton = document.createElement('button');
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
