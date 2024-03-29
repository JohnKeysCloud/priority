// * DATA
import { data } from '../data';

// * EMITTERS
import { emitEditTaskFormVisibilityToggle } from './handle-task-items';

// * PROJECT DEPEDENDENT UTILITIES
import { updateUserDataLocalStorage } from '../project-dependent-utilities/update-user-data-local-storage';

// > --------------------------------------------------------------

function toggleStarIcon(priorityButton, isPriority) {
  if (isPriority === 'false') {
    priorityButton.setAttribute('data-checked', 'true');
  } else if (isPriority === 'true') {
    priorityButton.setAttribute('data-checked', 'false');
  }
}

function toggleTaskPriority(priorityButton, taskObject) {
  const isPriority = priorityButton.getAttribute('data-checked');

  toggleStarIcon(priorityButton, isPriority);

  if (isPriority === 'false') {
    taskObject.setPriority(true);
  } else if (isPriority === 'true') {
    taskObject.setPriority(false);
  }

  updateUserDataLocalStorage();
}

// > --------------------------------------------------------------

function getTaskObject(taskName) {
  const allTasks = data.getAllTasks();
  const taskObject = allTasks.find((task) => task.getName() === taskName);

  return taskObject;
}

function toggleTaskCompletion(checkbox, taskObject) {
  const isChecked = checkbox.checked;

  if (isChecked === true) {
    taskObject.setCompleted(true);
    checkbox.setAttribute('data-checked', 'true');
  } else if (isChecked === false) {
    taskObject.setCompleted(false);
    checkbox.setAttribute('data-checked', 'false');
  }

  updateUserDataLocalStorage();
}

// > --------------------------------------------------------------

function handleCheckBoxKeydown(event) {
  const target = event.target;
  const targetTagName = target.tagName.toLowerCase();

  if (targetTagName !== 'input') return;

  const targetClassList = target.classList;
  const isCheckBox = targetClassList.contains('task-item-checkbox');

  if (!isCheckBox) return;

  if (event.key === 'Enter') {
    event.preventDefault();
    target.click();
  }
}

// > --------------------------------------------------------------

function handleTaskItemInteractables(event) {
  const target = event.target;
  const targetTagName = target.tagName.toLowerCase();

  if (targetTagName !== 'button' && targetTagName !== 'input') return;

  const taskItem = target.closest('.task-item');
  if (!taskItem) return;

  const taskName = taskItem
    .querySelector('.task-item-title')
    .textContent.toLowerCase();
  
  const correspondingTaskObject = getTaskObject(taskName);

  const handlers = {
    'task-item-checkbox': () => toggleTaskCompletion(target, correspondingTaskObject),
    'task-priority-star-button': () => toggleTaskPriority(target, correspondingTaskObject),
    'modify-task-button': () => emitEditTaskFormVisibilityToggle(correspondingTaskObject),
  };

  const handler = handlers[target.className];
  if (handler) handler();
}

export { handleTaskItemInteractables, emitEditTaskFormVisibilityToggle, getTaskObject, handleCheckBoxKeydown };