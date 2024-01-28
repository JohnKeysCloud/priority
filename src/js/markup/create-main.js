// * MARKUP
import { createMainContentContainer } from './create-main-content-container';

// > ---------------------------------------------------

function createMain(mainUpdateObject) { 
  const mainContentContainer = createMainContentContainer(mainUpdateObject);
  const main = document.createElement('main');
  main.appendChild(mainContentContainer);

  return main;
}

export { createMain };