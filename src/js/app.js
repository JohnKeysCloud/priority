// * HANDLERS
import { handleInitialDOMInteractivity } from './handlers/handle-initial-dom-interactivity.js';

// * MARKUP
import { createDOM } from './markup/create-dom.js';

// * MODIFIERS
import { modifyDOM } from './modifiers/modify-dom.js';

// * PROJECT_DEPENDENT_UTILITIES
import { retrieveUserData } from './project-dependent-utilities/retrieve-user-data.js';

// > --------------------------------------------------------------

function appInit() {
  retrieveUserData();
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
}

appInit();