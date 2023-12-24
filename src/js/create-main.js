import { createTaskList } from "./create-task-list";

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

  mainContent.appendChild(createTaskList());
  
  mainContainer.appendChild(mainContent);

  main.appendChild(mainContainer);

  return main;
}

export { createMain };