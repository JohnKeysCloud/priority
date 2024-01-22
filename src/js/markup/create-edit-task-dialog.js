// * MARKUP
import { createEditTaskForm } from './create-edit-task-form.js';

// * UTILITIES
import { setAttributes } from '../../utilities/set-attributes.js';

// > --------------------------------------------------------------

function createEditTaskDialog() {
  const editTaskHeading = document.createElement('h2');
  editTaskHeading.setAttribute('id', 'edit-task-heading');
  editTaskHeading.textContent = 'Edit Task';

  const editTaskDialog = document.createElement('dialog');
  setAttributes(editTaskDialog, {
    'id': 'edit-task-dialog',
    'aria-label': 'hidden',
    'data-hidden': 'hidden',
  });
  editTaskDialog.append(editTaskHeading, createEditTaskForm());

  return editTaskDialog;
}

export { createEditTaskDialog };