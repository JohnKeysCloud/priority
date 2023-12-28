import { createTaskList } from "./create-task-list";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ // ? Classes:                                                           │
  │ // * #main-container                                                    │
  │ // * #main-content                                                      │
  │ // * #main-heading                                                      │
  │ // * #task-list                                                         │
  │ // * #initial-task-item                                                 │
  └─────────────────────────────────────────────────────────────────────────┘
 */

function createMain() { // TODO: accept param for project or link object
  const mainHeading = document.createElement('h2');
  mainHeading.setAttribute('id', 'main-heading');
  // TODO: textcontent = object.name
  mainHeading.textContent = 'all tasks';

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  // TODO: object.gettaskArray(); ?
  mainContent.appendChild(createTaskList());

  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  mainContainer.appendChild(mainHeading);
  mainContainer.appendChild(mainContent);
  
  const main = document.createElement('main');
  main.appendChild(mainContainer);

  return main;
}

export { createMain };