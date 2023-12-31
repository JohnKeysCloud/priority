// * EVENT NAMES
import { HIDE_NAV_EVENT, SHOW_NAV_EVENT } from '../../js/eventNames.js';

// * HANLDERS
import { handleNavLinks } from '../../js/handle-nav-links.js';
import { handleNewProjectButton } from '../../js/handle-new-project-button.js';

// * UTILITIES
import { events } from '../../utilities/pubsub.js';

// > ---------------------------------------------------

let navState = {
  open: false,
  animating: false,
}

function hideNav() {
  navState.open = false;
  navState.animating = false;

  const zigZagNav = document.querySelector('.zig-zag-nav');
  
  zigZagNav.removeEventListener('animationend', hideNav);
  
  zigZagNav.setAttribute('aria-hidden', true);
  zigZagNav.setAttribute('data-visibility', false);

  handleNewProjectButton();
  handleNavLinks();
}

function initiateHideNav() {
  navState.animating = true;

  const zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.setAttribute('data-visibility', 'closing');
  zigZagNav.addEventListener('animationend', hideNav);
}

function showNav() {
  navState.open = true;
  navState.animating = false;

  const zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.setAttribute('aria-hidden', false);
  zigZagNav.setAttribute('data-visibility', true);

  handleNavLinks();
  handleNewProjectButton();
}

function handleNav() {
  events.on(SHOW_NAV_EVENT, showNav);
  events.on(HIDE_NAV_EVENT, initiateHideNav);
}

export { handleNav, navState };