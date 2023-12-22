import { createAddTaskForm } from "./create-task-form";
import { createAddTaskButton } from "./create-add-task-button";
import { createTaskItem } from "./create-task-item";
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ // ? Classes:                                                           │
  │ // * .main-container                                                    │
  │ // * .main-content                                                      │
  │ // * .main-heading                                                      │
  │ // * .task-list                                                         │
  │ // * .initial-task-item                                                 │
  └─────────────────────────────────────────────────────────────────────────┘
 */

function createMain() {
  const main = document.createElement('main');
  
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');
  
  const mainHeading = document.createElement('h2');
  mainHeading.classList.add('main-heading');
  mainHeading.textContent = 'all tasks';
  mainContainer.appendChild(mainHeading);

  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  const taskList = document.createElement('ul');
  taskList.classList.add('task-list');
  mainContent.appendChild(taskList);

  const placeholderText = document.createElement('p');
  placeholderText.setAttribute('id', 'placeholder-text');
  placeholderText.classList.add('hvr-wobble-vertical');
  placeholderText.textContent = 'Set your priorities in menu above.';

  const placeholderContainer = document.createElement('div');
  placeholderContainer.setAttribute('id', 'placeholder-container');
  placeholderContainer.appendChild(placeholderText);

  taskList.appendChild(placeholderContainer);
  
  // ? Remove the placeholder, add the initial task item, and add the add task button
  // * taskList.appendChild(createTaskItem());
  // * taskList.appendChild(createAddTaskButton());
  // * taskList.appendChild(createAddTaskForm());
  
  mainContainer.appendChild(mainContent);

  main.appendChild(mainContainer);

  return main;
}

export { createMain };