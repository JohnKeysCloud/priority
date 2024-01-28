// * EVENT_NAMES
import { TOGGLE_EDIT_TASK_FORM } from '../eventNames';

// * HANDLERS
import { handleEditTaskModalButtons } from './handle-edit-task-modal-buttons';
import { handleTaskItemInteractables } from './handle-task-item-interactables';
import { handleCheckBoxKeydown } from './handle-task-item-interactables';

// * MARKUP
import { createEditTaskDialog } from '../markup/create-edit-task-dialog';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence';
import { closeModalEnhanced, showModalEnhanced } from '../../utilities/enhanced-modal-handling';
import { events } from '../../utilities/pubsub';
import { handleTaskEditInputs } from './handle-task-edit-inputs';
import { scrollElementContent } from '../../utilities/scroll-element-content';

// > --------------------------------------------------------------

let editTaskState = {
  modalState: 'hidden',
  isEditTaskFormEventPublished: false,
  taskToEditObjectState: null,
};

function removeEditTaskEvent() {
  events.off(TOGGLE_EDIT_TASK_FORM, toggleEditTaskFormVisibility);
  editTaskState.isEditTaskFormEventPublished = false;
}

function toggleModalButtonContainerEventListeners() {
  const editTaskButtonContainer = checkTargetElementExistence(
    '.edit-task-button-container'
  );

  if (editTaskState.modalState === 'hidden') {
    editTaskButtonContainer.removeEventListener('click', handleEditTaskModalButtons);
  } else if (editTaskState.modalState === 'visible') {
    editTaskButtonContainer.addEventListener('click', handleEditTaskModalButtons);
  }
}

function animatePreDisplayNone(element, callback) {
  const onAnimationEnd = () => {
    callback(element);

    element.removeEventListener('animationend', onAnimationEnd);

    editTaskState.modalState = 'hidden';
  };

  element.setAttribute('data-hidden', 'closing');
  element.addEventListener('animationend', onAnimationEnd);
}

function setModalPlaceholders(correspondingTaskObject) {
  const editTaskDialog = checkTargetElementExistence('#edit-task-dialog');

  const taskNameInput = editTaskDialog.querySelector('#edit-task-title');
  const taskDetailsInput = editTaskDialog.querySelector('#edit-task-details');
  const taskDueDateInput = editTaskDialog.querySelector('#edit-task-due-date');

  const taskName = correspondingTaskObject.getName();
  const taskDetails = correspondingTaskObject.getDetails();
  const taskDueDate = correspondingTaskObject.getDueDate();

  taskNameInput.value = taskName;
  taskDetailsInput.value = taskDetails;
  taskDueDateInput.value = taskDueDate;
}

function toggleEditTaskFormVisibility(correspondingTaskObject) {
  const editTaskDialog = checkTargetElementExistence('#edit-task-dialog');
  const taskModalVisibilityOnCall = editTaskDialog.getAttribute('data-hidden');

  if (taskModalVisibilityOnCall === 'hidden') {
    editTaskState.modalState = 'visible';
    editTaskState.taskToEditObjectState = correspondingTaskObject;

    setModalPlaceholders(correspondingTaskObject);
    showModalEnhanced(editTaskDialog);
    toggleModalButtonContainerEventListeners(editTaskState.modalState);
  } else if (taskModalVisibilityOnCall === 'visible') {
    editTaskState.modalState = 'closing';

    animatePreDisplayNone(editTaskDialog, closeModalEnhanced);

    toggleModalButtonContainerEventListeners(editTaskState.modalState);
  }
  
  handleTaskEditInputs(editTaskDialog, editTaskState.modalState);

}

function emitEditTaskFormVisibilityToggle(data) {
  events.emit(TOGGLE_EDIT_TASK_FORM, data);
}

function publishEditTaskEvent() {
  events.on(TOGGLE_EDIT_TASK_FORM, toggleEditTaskFormVisibility);
  editTaskState.isEditTaskFormEventPublished = true;

  return editTaskState.isEditTaskFormEventPublished;
}

function getContainersWithOverflow(containers) {
  const containersWithOverflow = [];

  containers.forEach((container) => {
    const containerWidth = container.clientWidth;
    const containerScrollWidth = container.scrollWidth;

    if (containerWidth < containerScrollWidth) {
      containersWithOverflow.push(container);
    }
  });

  return containersWithOverflow;
}

function enableTaskDetailOverFlowScrollAnimations(taskListElement) {
  const taskDetailContainers =
    taskListElement.querySelectorAll('.task-item-details');

  const containersWithOverflow =
    getContainersWithOverflow(taskDetailContainers);

  containersWithOverflow.forEach((container) => {
    scrollElementContent(container, 'backward', 0.5);
  });
}

function addTaskListEventListener(taskListElement) {
  taskListElement.addEventListener('click', handleTaskItemInteractables);
  taskListElement.addEventListener('keydown', handleCheckBoxKeydown);
}

function appendTaskEditModalToMainContentContainer() {
  const contentElement = checkTargetElementExistence('#main-container');
  const editTaskDialog = createEditTaskDialog();
  contentElement.appendChild(editTaskDialog);
}

function handleTaskItems(taskListElement) {
  // ? this function is called if taskListElement has taskItem children (from handle-task-list.js).
  appendTaskEditModalToMainContentContainer();
  addTaskListEventListener(taskListElement);
  enableTaskDetailOverFlowScrollAnimations(taskListElement);

  if (editTaskState.isEditTaskFormEventPublished) return;
  publishEditTaskEvent();
}

export {
  handleTaskItems,
  removeEditTaskEvent,
  emitEditTaskFormVisibilityToggle,
  editTaskState,
  toggleEditTaskFormVisibility,
};