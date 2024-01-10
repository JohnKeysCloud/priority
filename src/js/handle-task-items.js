// * DATA
import { data } from './data';

// * UTILITIES
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";

// > --------------------------------------------------------------

function toggleStarIcon(priorityButton, isPriority) {
  if (isPriority === 'false') {
    priorityButton.setAttribute('data-checked', 'true');
  } else if (isPriority === 'true') {
    priorityButton.setAttribute('data-checked', 'false');
  }
}


function toggleTaskPriority(priorityButton, taskName) {
  const isPriority = priorityButton.getAttribute('data-checked');
  const taskObject = getTaskObject(taskName);

  toggleStarIcon(priorityButton, isPriority);

  if (isPriority === 'false') {
    taskObject.setPriority(true);
  } else if (isPriority === 'true') {
    taskObject.setPriority(false);
  }
}

// > --------------------------------------------------------------

function getTaskObject(taskName) {
  const allTasks = data.getAllTasks();
  const taskObject = allTasks.find(task => task.getName() === taskName);

  return taskObject
}

function toggleTaskCompletion(checkbox, taskName) {
  const isChecked = checkbox.checked;
  const taskObject = getTaskObject(taskName);
  
  if (isChecked === true) {
    taskObject.setCompleted(true);
    checkbox.setAttribute('data-checked', 'true');
  } else if (isChecked === false) {
    taskObject.setCompleted(false);
    checkbox.setAttribute('data-checked', 'false');
  }
}

// > --------------------------------------------------------------

import { TOGGLE_EDIT_TASK_FORM } from './eventNames';
import { events } from '../utilities/pubsub';
import { setAttributes } from '../utilities/set-attributes';

let modalState;

function handleModalButtons(event) {
  if (!event.target.classList.contains('edit-task-button')) return;

  const targetId = event.target.getAttribute('id');
  const isSaveButton = targetId === 'save-edit-task-button';
  const isCancelButton = targetId === 'cancel-edit-task-button';

  if (isSaveButton) {
    console.log('add functionality to save edit task button');
    // handleSaveEditTaskButton(event.target);
  } else if (isCancelButton) {
    events.emit(TOGGLE_EDIT_TASK_FORM);
  }
}

function toggleModalButtonContainerEventListeners(modalState) {
  const editTaskButtonContainer = checkTargetElementExistence('.edit-task-button-container');

  if (modalState === 'hidden') {
    editTaskButtonContainer.removeEventListener('click', handleModalButtons);
  } else if (modalState === 'visible') {
    editTaskButtonContainer.addEventListener('click', handleModalButtons);
  }
}

function closeModalEnhanced(element) {
  modalState = 'hidden';

  element.close();
  setAttributes(element, {
    'data-hidden': 'hidden',
    'aria-label': 'hidden',
  });
}

function animatePreDisplayNone(element, callback) {
  const onAnimationEnd = () => {
    callback(element);

    element.removeEventListener('animationend', onAnimationEnd);
  };
  
  element.setAttribute('data-hidden', 'closing');
  element.addEventListener('animationend', onAnimationEnd); 
}

function showModalEnhanced(modal) {
  modal.showModal();
  setAttributes(modal, {
    'data-hidden': 'visible',
    'aria-label': 'visible',
  });
}

function toggleEditTaskFormVisibility(data) {
  const editTaskModal = checkTargetElementExistence('#edit-task-modal');
  const taskModalVisibilityOnCall = editTaskModal.getAttribute('data-hidden');

  if (taskModalVisibilityOnCall === 'hidden') {
    modalState = 'visible';
    
    showModalEnhanced(editTaskModal)
    toggleModalButtonContainerEventListeners(modalState); 
  } else if (taskModalVisibilityOnCall === 'visible') {
    modalState = 'closing';

    animatePreDisplayNone(editTaskModal, closeModalEnhanced);

    toggleModalButtonContainerEventListeners(modalState);
  }

  // TODO: 
  // let [event, taskName] = [...data];
  // console.log(taskName);
  // console.log(event.target);
}

function emitEditTaskFormVisibilityToggle(data) {
  events.emit(TOGGLE_EDIT_TASK_FORM, data);
}

// > --------------------------------------------------------------

import { createEditTaskModal } from './create-edit-task-modal';

function handleTaskItems(taskListElement) {
  const taskItem = checkTargetElementExistence('.task-item');

  if (!taskItem) return events.off(TOGGLE_EDIT_TASK_FORM);
  
  events.on(TOGGLE_EDIT_TASK_FORM, toggleEditTaskFormVisibility);

  const contentElement = checkTargetElementExistence('#content');
  const editTaskModal = createEditTaskModal();
  contentElement.appendChild(editTaskModal);

  const taskItems = taskListElement.querySelectorAll('.task-item');
  taskItems.forEach(taskItem => {
    taskItem.addEventListener('click', (e) => {
      const target = e.target;
      const targetTagName = target.tagName.toLowerCase();

      if ( targetTagName !== 'button' && targetTagName !== 'input') return;
      
      const taskName = (taskItem.querySelector('.task-item-title').textContent).toLowerCase();
      const checkbox = taskItem.querySelector('.task-item-checkbox');
      const priorityButton = taskItem.querySelector('.task-priority-star-button');
      const taskModifyButton = taskItem.querySelector('.modify-task-button');
      const emitToggleTaskFormData = [e, taskName];

      if (target === checkbox) {
        toggleTaskCompletion(checkbox, taskName);
      } else if (target === priorityButton) {
        toggleTaskPriority(priorityButton, taskName);
      } else if (target === taskModifyButton) {
        emitEditTaskFormVisibilityToggle(emitToggleTaskFormData);
      }
    });
  });
}

export { handleTaskItems };

// remove and createTaskList putting the priority tasks first date sorted
// followed by the non-priority tasks date sorted