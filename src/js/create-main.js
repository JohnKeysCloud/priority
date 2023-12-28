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

function createMain(mainUpdateObject) { 
  const mainHeading = document.createElement('h2');
  mainHeading.setAttribute('id', 'main-heading');
  mainHeading.textContent = mainUpdateObject.getName();
  console.log('ass', mainUpdateObject.getName())

  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');
  mainContent.appendChild(createTaskList(mainUpdateObject));

  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  mainContainer.appendChild(mainHeading);
  mainContainer.appendChild(mainContent);
  
  const main = document.createElement('main');
  main.appendChild(mainContainer);

  return main;
}

export { createMain };