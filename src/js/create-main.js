import { updateMainContentContainer } from "./update-main-content-container";

function createMain(mainUpdateObject) { 
  const mainContentContainer = updateMainContentContainer(mainUpdateObject);
  const main = document.createElement('main');
  main.appendChild(mainContentContainer);

  return main;
}

export { createMain };