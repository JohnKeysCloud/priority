// * EVENT_NAMES
import { HIDE_NAV_EVENT, SHOW_NAV_EVENT } from '../../js/eventNames.js';

// * HANLDERS
import { handleNavLinks } from '../../js/handlers/handle-nav-links.js';
import { handleNewProjectButton } from '../../js/handlers/handle-new-project-button.js';

// * UTILITIES
import { events } from '../../utilities/pubsub.js';

// > ---------------------------------------------------

let navState = {
  open: false,
  animating: false,
  zigZagNavReference: null
}

function hideNav() {
  navState.open = false;
  navState.animating = false;
  
  navState.zigZagNavReference.removeEventListener('animationend', hideNav);
  
  navState.zigZagNavReference.setAttribute('aria-hidden', true);
  navState.zigZagNavReference.setAttribute('data-visibility', false);

  handleNewProjectButton();
  handleNavLinks();

  events.on(SHOW_NAV_EVENT, showNav);
  events.off(HIDE_NAV_EVENT, showNav);
}

function initiateHideNav() {
  navState.animating = true;

  navState.zigZagNavReference.setAttribute('data-visibility', 'closing');
  navState.zigZagNavReference.addEventListener('animationend', hideNav);
}

function showNav() {
  navState.open = true;
  navState.animating = false;

  navState.zigZagNavReference.setAttribute('aria-hidden', false);
  navState.zigZagNavReference.setAttribute('data-visibility', true);

  handleNavLinks();
  handleNewProjectButton();

  events.on(HIDE_NAV_EVENT, initiateHideNav);
  events.off(SHOW_NAV_EVENT, showNav);
}

function handleZigZagNav(zigZagNavElement) {
  navState.zigZagNavReference = zigZagNavElement;

  events.on(SHOW_NAV_EVENT, showNav);
}

export { handleZigZagNav, navState };