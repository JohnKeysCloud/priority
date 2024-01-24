// * EVENT_NAMES
import { TOGGLE_EDIT_TASK_FORM } from "../eventNames";

// * HANDLERS
import { handleEditTaskModalButtons } from './handle-edit-task-modal-buttons';
import { handleTaskItemInteractables } from './handle-task-item-interactables';

// * MARKUP
import { createEditTaskDialog } from '../markup/create-edit-task-dialog';

// * UTILITIES
import { checkTargetElementExistence } from "../../utilities/check-target-element-existence";
import { closeModalEnhanced, showModalEnhanced } from '../../utilities/enhanced-modal-handling';
import { events } from "../../utilities/pubsub";
import { handleTaskEditInputs } from "./handle-task-edit-inputs";
import { scrollElementContent } from "../../utilities/scroll-element-content";

// > --------------------------------------------------------------

// TODO: refactor to turn edit task event off when task list has no children
// TODO: create state object for this module using:
let modalState;
let isEditTaskFormEventPublished = false;
let taskToEditObjectState;

function removeEditTaskEvent() {
  events.off(TOGGLE_EDIT_TASK_FORM, toggleEditTaskFormVisibility);
  isEditTaskFormEventPublished = false;
}

function toggleModalButtonContainerEventListeners(modalState) {
  const editTaskButtonContainer = checkTargetElementExistence(
    '.edit-task-button-container'
  );

  if (modalState === 'hidden') {
    editTaskButtonContainer.removeEventListener('click', handleEditTaskModalButtons);
  } else if (modalState === 'visible') {
    editTaskButtonContainer.addEventListener('click', handleEditTaskModalButtons);
  }
}

function animatePreDisplayNone(element, callback) {
  const onAnimationEnd = () => {
    callback(element);

    element.removeEventListener('animationend', onAnimationEnd);

    modalState = 'hidden';
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
    modalState = 'visible';
    taskToEditObjectState = correspondingTaskObject;

    setModalPlaceholders(correspondingTaskObject);
    showModalEnhanced(editTaskDialog);
    toggleModalButtonContainerEventListeners(modalState);
  } else if (taskModalVisibilityOnCall === 'visible') {
    modalState = 'closing';

    animatePreDisplayNone(editTaskDialog, closeModalEnhanced);

    toggleModalButtonContainerEventListeners(modalState);
  }
  
  handleTaskEditInputs(editTaskDialog, modalState);

}

function emitEditTaskFormVisibilityToggle(data) {
  events.emit(TOGGLE_EDIT_TASK_FORM, data);
}

function publishEditTaskEvent() {
  events.on(TOGGLE_EDIT_TASK_FORM, toggleEditTaskFormVisibility);
  isEditTaskFormEventPublished = true;

  return isEditTaskFormEventPublished
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

  if (isEditTaskFormEventPublished) return;
  publishEditTaskEvent();
}

export {
  handleTaskItems,
  isEditTaskFormEventPublished,
  removeEditTaskEvent,
  emitEditTaskFormVisibilityToggle,
  taskToEditObjectState,
  toggleEditTaskFormVisibility,
};