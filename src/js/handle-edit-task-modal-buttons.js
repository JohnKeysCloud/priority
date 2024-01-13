// * EMITTERS
import { emitEditTaskFormVisibilityToggle } from "./handle-task-item-interactables";

// * STATES
import { mainState } from "./handle-main";
import { taskToEditObject } from "./handle-task-items";

// * HANDLERS
import { handleTaskList } from "./handle-task-list";

// * UTILITIES
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";

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
  if (taskDueDate < new Date().toISOString().slice(0, 10)) return alert('Enter Valid Due Date');

  editTaskForm.reset();

  taskToEditObject.setName(taskName);
  taskToEditObject.setDetails(taskDetails);
  taskToEditObject.setDueDate(taskDueDate);

  emitEditTaskFormVisibilityToggle();

  if (mainState.linkType === 'project') {
    handleTaskList(mainState.projectName);
  } else if (mainState.linkType === 'page') {
    console.log('page link');
  }
}

function handleEditTaskModalButtons(event) {
  if (!event.target.classList.contains('edit-task-button')) return;

  const targetId = event.target.getAttribute('id');
  const isSaveButton = targetId === 'save-edit-task-button';
  const isCancelButton = targetId === 'cancel-edit-task-button';

  if (isSaveButton) {
    handleSaveEditTaskButton();
  } else if (isCancelButton) {
    emitEditTaskFormVisibilityToggle();
  }
}

export { handleEditTaskModalButtons, handleSaveEditTaskButton };