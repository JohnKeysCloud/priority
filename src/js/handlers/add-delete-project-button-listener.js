// * DATA
import { data } from "../data";

// * EMITTERS
import { toggleAddTaskForm } from "./add-task-form-opener-button-listener";

// * EVENT_NAMES
import { OPEN_PROJECT_DELETE_DIALOG, TOGGLE_ADD_TASK_FORM } from "../eventNames";

// * HANDLERS
import { removeEditTaskEvent } from "./handle-task-items";

// * LOGIC
import { linkObjectFactory } from "../logic";

// * MARKUP
import { createMainContentContainer } from "../markup/create-main-content-container";

// * STATES
import { mainState } from "./handle-main";
import { projectTaskListState } from "./handle-task-list-via-project";

// * UTILITIES
import { checkTargetElementExistence } from "../../utilities/check-target-element-existence";
import { events } from "../../utilities/pubsub";
import { showModalEnhanced, closeModalEnhanced } from "../../utilities/enhanced-modal-handling";

// * PROJECT_DEPENDENT_UTILITIES
import { updateProjectList } from "./handle-project-add-button";
import { updateUserDataLocalStorage } from "../project-dependent-utilities/update-user-data-local-storage";

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

function unsubscribeEditTaskFormEvent() {
  const taskListHasTaskItems = projectTaskListState.taskListHasTaskItems();
  if (taskListHasTaskItems) removeEditTaskEvent();
}

function deleteProject() {
  const projectToDeleteObject = projectTaskListState.projectObject;
  const projectNavList = checkTargetElementExistence('#project-nav-list');

  data.deleteProject(projectToDeleteObject);
  updateUserDataLocalStorage();

  unsubscribeEditTaskFormEvent();
  reloadMainContentContainerWithAllTasks();
  reloadNav();
  updateProjectList(data, projectNavList);

  mainState.isAddTaskButtonListenerAttached = false;
}

function handleDeleteProjectConfirmationModalButtons(event) {
  const deleteButton = event.target.textContent === 'delete';
  const cancelButton = event.target.textContent === 'cancel';
  
  if (!deleteButton && !cancelButton) return;

  const deleteConfirmationModal = this.parentNode.parentNode;

  if (deleteButton) {
    deleteProject();
    closeModalEnhanced(deleteConfirmationModal);

    events.off(TOGGLE_ADD_TASK_FORM, toggleAddTaskForm);
    events.off(OPEN_PROJECT_DELETE_DIALOG, openDeleteProjectDialog);
    isDeleteProjectEventPublished = false;
  } else if (cancelButton) {
    closeModalEnhanced(deleteConfirmationModal);
    
    events.off(OPEN_PROJECT_DELETE_DIALOG, openDeleteProjectDialog);
    isDeleteProjectEventPublished = false;
  }
}

function addDeleteProjectEventListenersToModalButtons() {
  const deleteConfirmationButtonContainer = checkTargetElementExistence('.delete-confirmation-button-container');

  deleteConfirmationButtonContainer.addEventListener('click', handleDeleteProjectConfirmationModalButtons);
}

function openDeleteProjectDialog() {
  const deleteConfirmationDialog = checkTargetElementExistence('.delete-confirmation-dialog');
  showModalEnhanced(deleteConfirmationDialog);
  addDeleteProjectEventListenersToModalButtons();
}

function addDeleteProjectEventPublishing() {
  if (isDeleteProjectEventPublished === true) return;

  isDeleteProjectEventPublished = true;
  events.on(OPEN_PROJECT_DELETE_DIALOG, openDeleteProjectDialog);
}

function publishAndEmitDeleteProjectDialog() {
  addDeleteProjectEventPublishing();
  events.emit(OPEN_PROJECT_DELETE_DIALOG);
}

function addDeleteProjectButtonClickListener() {
  const deleteProjectButton = checkTargetElementExistence(
    '#delete-project-button'
  );
  
  deleteProjectButton.addEventListener('click', publishAndEmitDeleteProjectDialog);
  mainState.isDeleteProjectButtonListenerAttached = true;
}

function initiateProjectDeletionFunctionality() {
  addDeleteProjectButtonClickListener();
}

export { initiateProjectDeletionFunctionality };