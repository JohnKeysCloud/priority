// * EMITTERS
import { emitEditTaskFormVisibilityToggle } from './handle-task-item-interactables';

// * STATES
import { mainState } from './handle-main';
import { editTaskState } from './handle-task-items';

// * HANDLERS
import { handleTaskListViaProject } from './handle-task-list-via-project';

// * PROJECT DEPEDENDENT UTILITIES
import { refreshTaskListFromLink } from '../project-dependent-utilities/refresh-task-list-from-link';
import { updateUserDataLocalStorage } from '../project-dependent-utilities/update-user-data-local-storage';

// * STATES
import { activeLink } from './handle-nav-links';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence';

// > --------------------------------------------------------------

function handleSaveEditTaskButton() {
  const editTaskForm = checkTargetElementExistence('#edit-task-form');

  const taskNameInput = editTaskForm.querySelector('#edit-task-title');
  const taskDetailsInput = editTaskForm.querySelector('#edit-task-details');
  const taskDueDateInput = editTaskForm.querySelector('#edit-task-due-date');

  const taskName = taskNameInput.value.trim().toLowerCase();
  const taskDetails = taskDetailsInput.value.trim();
  const taskDueDate = taskDueDateInput.value;

  if (!taskName) return alert('Enter Task Name');
  if (!taskDueDate) return alert('Enter Task Due Date');
  if (taskDueDate < new Date().toISOString().slice(0, 10))
    return alert('Enter Valid Due Date');

  editTaskForm.reset();

  editTaskState.taskToEditObjectState.setName(taskName);
  editTaskState.taskToEditObjectState.setDetails(taskDetails);
  editTaskState.taskToEditObjectState.setDueDate(taskDueDate);
  updateUserDataLocalStorage();

  emitEditTaskFormVisibilityToggle();

  if (mainState.linkType === 'project') {
    handleTaskListViaProject(mainState.linkOrProjectName);
  } else if (mainState.linkType === 'link') {
    refreshTaskListFromLink(activeLink);
  }
}

export { handleSaveEditTaskButton };
