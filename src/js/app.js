// * HANDLERS
import { handleInitialDOMInteractivity } from './handlers/handle-dom-initial-interactivity.js';

// * MARKUP
import { createDOM } from './markup/create-dom.js';

// * MODIFIERS
import { modifyDOM } from './modifiers/modify-dom.js';

// > --------------------------------------------------------------

function appInit() {
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
}

appInit();