// * EVENT NAMES
import { DELETE_PROJECT, TOGGLE_ADD_TASK_FORM, TOGGLE_EDIT_TASK_FORM } from "../eventNames";

// * UTILITIES
import { checkTargetElementExistence } from "../../utilities/check-target-element-existence";
import { events } from "../../utilities/pubsub";

import { data } from "../data";
import { mainState } from "./handle-main";

import { showModalEnhanced, closeModalEnhanced } from "../../utilities/enhanced-modal-handling";

import { toggleEditTaskFormVisibility } from "./handle-task-items";

import { projectTaskListState } from "./handle-task-list-via-project";

import { removeEditTaskEvent } from "./handle-task-items";

import { updateProjectList } from "./handle-project-add-button";

import { createMainContentContainer } from "../markup/create-main-content-container";
import { linkObjectFactory } from "../logic";
import { toggleAddTaskForm } from "./add-task-form-opener-button-listener";

import { createDeleteConfirmationDialog } from "../markup/create-delete-confirmation-dialog";

// > --------------------------------------------------------------

let isDeleteProjectEventPublished = false;

function reloadNav() {
  const projectNavList = checkTargetElementExistence('#project-nav-list');
  const nav = projectNavList.closest('.zig-zag-nav');
  const allTasksLink = nav.querySelector('.nav-link[data-page-name="all tasks"]');

  updateProjectList(data, projectNavList);
  allTasksLink.setAttribute('aria-current', 'true');
}

function createAllTasksUpdateObject() {
  const allTasks = data.getAllTasks();
  const allTasksUpdateObject = linkObjectFactory('all tasks', allTasks);

  return allTasksUpdateObject;
}

function reloadMainContentContainerWithAllTasks() {
  const mainContainer = checkTargetElementExistence('#main-container');
  const mainElement = mainContainer.parentNode;
  const allTasksUpdateObject = createAllTasksUpdateObject();
  const newMainContainer = createMainContentContainer(allTasksUpdateObject);
  
  mainContainer.remove();
  mainElement.appendChild(newMainContainer);
}

function removeCurrentProjectContainersListenersAndEventPublishing() {
  const taskListHasTaskItems = projectTaskListState.taskListHasTaskItems();
  if (taskListHasTaskItems) removeEditTaskEvent();

  events.off(TOGGLE_ADD_TASK_FORM, toggleAddTaskForm);
  events.off(DELETE_PROJECT, openDeleteProjectForm);
  isDeleteProjectEventPublished = false;
}

function deleteProject() {
  const projectToDeleteObject = projectTaskListState.projectObject;
  const projectNavList = checkTargetElementExistence('#project-nav-list');

  data.deleteProject(projectToDeleteObject);
  removeCurrentProjectContainersListenersAndEventPublishing();
  reloadMainContentContainerWithAllTasks();
  reloadNav();
  updateProjectList(data, projectNavList);

  mainState.isAddTaskButtonListenerAttached = false;
}

function handleDeleteConfirmationModalButtons(event) {
  const deleteButton = event.target.textContent === 'delete';
  const cancelButton = event.target.textContent === 'cancel';
  
  if (!deleteButton && !cancelButton) return;

  const deleteConfirmationModal = this.parentNode.parentNode;

  if (deleteButton) {
    deleteProject();
    closeModalEnhanced(deleteConfirmationModal);
  } else if (cancelButton) {
    closeModalEnhanced(deleteConfirmationModal);
  }
}

function addEventListenersToModalButtons() {
  const deleteConfirmationButtonContainer = checkTargetElementExistence('.delete-confirmation-button-container');

  deleteConfirmationButtonContainer.addEventListener('click', handleDeleteConfirmationModalButtons);
}

function openDeleteProjectForm() {
  const deleteConfirmationDialog = checkTargetElementExistence('.delete-confirmation-dialog');
  showModalEnhanced(deleteConfirmationDialog);
  addEventListenersToModalButtons();
}

function emitDeleteProject() {
  events.emit(DELETE_PROJECT);
}

function appendDeleteConfirmationDialogToProjectButtonContainer() {
  const projectButtonContainer = checkTargetElementExistence(
    '#project-button-container'
  );
  const deleteConfirmationDialog = createDeleteConfirmationDialog();

  projectButtonContainer.appendChild(deleteConfirmationDialog);
}

function addDeleteProjectEventPublishing() {
  if (isDeleteProjectEventPublished === true) return;

  isDeleteProjectEventPublished = true;
  events.on(DELETE_PROJECT, openDeleteProjectForm);
}

function addDeleteProjectButtonClickListener() {
  const deleteProjectButton = checkTargetElementExistence(
    '#delete-project-button'
  );
  
  deleteProjectButton.addEventListener('click', emitDeleteProject);
  mainState.isDeleteProjectButtonListenerAttached = true;
}

function initiateProjectDeletionFunctionality() {
  addDeleteProjectButtonClickListener();
  addDeleteProjectEventPublishing();
  appendDeleteConfirmationDialogToProjectButtonContainer();
}

export { initiateProjectDeletionFunctionality };