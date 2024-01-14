// * MARKUP
import { createEditTaskForm } from './create-edit-task-form.js';

// * UTILITIES
import { setAttributes } from '../../utilities/set-attributes.js';

// > --------------------------------------------------------------

function createEditTaskModal() {
  const editTaskHeading = document.createElement('h2');
  editTaskHeading.setAttribute('id', 'edit-task-heading');
  editTaskHeading.textContent = 'Edit Task';

  const editTaskModal = document.createElement('dialog');
  setAttributes(editTaskModal, {
    'id': 'edit-task-modal',
    'aria-label': 'hidden',
    'data-hidden': 'hidden',
  });
  editTaskModal.appendChild(editTaskHeading);
  editTaskModal.appendChild(createEditTaskForm());

  return editTaskModal;
}

export { createEditTaskModal };