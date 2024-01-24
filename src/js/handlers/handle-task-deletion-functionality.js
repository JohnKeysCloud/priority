// * DATA
import { data } from '../data';

// * EMITTERS
import { emitEditTaskFormVisibilityToggle } from './handle-task-item-interactables';

// * EVENT_NAMES
import { OPEN_TASK_DELETE_DIALOG } from '../eventNames';

// * MARKUP
import { createTaskListPlaceholder } from '../markup/create-task-list-placeholder';

// * PROJECT-DEPENDENT-UTILITIES
import { checkTaskListPopulation } from '../project-dependent-utilities/check-task-list-population';
import { updateUserDataLocalStorage } from '../project-dependent-utilities/update-user-data-local-storage';

// * STATES
import { mainState } from './handle-main';
import { editTaskState } from './handle-task-items';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence'; 
import { events } from '../../utilities/pubsub';
import { showModalEnhanced, closeModalEnhanced } from "../../utilities/enhanced-modal-handling";

// > --------------------------------------------------------------

let isDeleteTaskEventPublished = false;

function removeTaskItemFromDOM(taskToDeleteObject) {
  const selector = `[data-task-name="${taskToDeleteObject.getName()}"]`;
  const taskItemToDelete = checkTargetElementExistence(selector);

  if (taskItemToDelete) {
    taskItemToDelete.remove();
  }

  const taskList = checkTargetElementExistence('#task-list');
  const areThereTaskItems = checkTaskListPopulation(taskList);
  if (mainState.linkType === 'link' && !areThereTaskItems) {
    taskList.appendChild(createTaskListPlaceholder());
  }
}

function deleteTask() {
  const taskToDeleteObject = editTaskState.taskToEditObjectState;
  const taskToDeleteProjectName = taskToDeleteObject.getProjectName();
  const projectObjectToDeleteTaskFrom = data.getProjectObject(
    taskToDeleteProjectName
  );

  projectObjectToDeleteTaskFrom.deleteTask(taskToDeleteObject);
  updateUserDataLocalStorage();

  removeTaskItemFromDOM(taskToDeleteObject);
}

function handleDeleteTaskConfirmationModalButtons(event) {
  const deleteButton = event.target.textContent === 'delete';
  const cancelButton = event.target.textContent === 'cancel';

  if (!deleteButton && !cancelButton) return;

  const deleteConfirmationModal = this.parentNode.parentNode;

  if (deleteButton) {
    deleteTask();
    closeModalEnhanced(deleteConfirmationModal);

    events.off(OPEN_TASK_DELETE_DIALOG, openDeleteTaskDialog);
    isDeleteTaskEventPublished = false;
  } else if (cancelButton) {
    closeModalEnhanced(deleteConfirmationModal);

    events.off(OPEN_TASK_DELETE_DIALOG, openDeleteTaskDialog);
    isDeleteTaskEventPublished = false;
  }
}

function addDeleteTaskEventListenersToModalButtons() {
  const deleteConfirmationButtonContainer = checkTargetElementExistence(
    '.delete-confirmation-button-container'
  );

  deleteConfirmationButtonContainer.addEventListener(
    'click',
    handleDeleteTaskConfirmationModalButtons
  );
}

function openDeleteTaskDialog() {
  const deleteConfirmationDialog = checkTargetElementExistence(
    '.delete-confirmation-dialog'
  );
  showModalEnhanced(deleteConfirmationDialog);
  addDeleteTaskEventListenersToModalButtons();
}

function addDeleteTaskEventPublishing() {
  if (isDeleteTaskEventPublished === true) return;

  isDeleteTaskEventPublished = true;
  events.on(OPEN_TASK_DELETE_DIALOG, openDeleteTaskDialog);
}

function publishAndEmitDeleteTaskDialogEvent() {
  addDeleteTaskEventPublishing();
  events.emit(OPEN_TASK_DELETE_DIALOG);
}

function initiateTaskDeletionFunctionality() {
  const deleteConfirmationDialog = checkTargetElementExistence(
    '.delete-confirmation-dialog'
  );

  emitEditTaskFormVisibilityToggle();
  showModalEnhanced(deleteConfirmationDialog);
  publishAndEmitDeleteTaskDialogEvent();
}

export { initiateTaskDeletionFunctionality };