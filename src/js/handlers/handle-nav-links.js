// * HANDLERS
import { handleMain } from './handle-main.js';

// * EVENT NAMES
import { HANDLE_MAIN } from '../eventNames.js';

// *  STATES
import { navState } from '../../components/zig-zag-nav/handle-zig-zag-nav.js';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';
import { events } from '../../utilities/pubsub.js';

// > ---------------------------------------------------

let activeLink;

function emitUpdateMain(event) {
  events.emit(HANDLE_MAIN, event);
}

function removeOldAriaCurrent(nodelist) {
  for (let i = 0; i < nodelist.length; i++) {
    if (nodelist[i].hasAttribute('aria-current')) {
      nodelist[i].removeAttribute('aria-current');
      break;
    }
  }
}

function setAriaCurrent(targetElement) {
  const nav = checkTargetElementExistence('.zig-zag-nav');
  const navLinks = nav.getElementsByClassName('nav-link');

  removeOldAriaCurrent(navLinks);

  targetElement.setAttribute('aria-current', 'page');

  activeLink = targetElement.textContent.toLowerCase();
}

function checkIfClickableNavLink(targetElement) {
  const isTargetNavLink = targetElement.classList.contains('nav-link');
  const isTargetLinkActive = targetElement.hasAttribute('aria-current');
  const isTargetLinkClickable = isTargetNavLink && !isTargetLinkActive;

  if (isTargetLinkClickable) return true;
}

function setActiveLink(event) {
  const targetElement = event.target;
  const isTargetElementNavLink = checkIfClickableNavLink(targetElement);
  if (!isTargetElementNavLink) return;

  setAriaCurrent(targetElement);
  emitUpdateMain(targetElement);
}

function toggleNavLinkListeners() {
  const zigZagNav = checkTargetElementExistence('.zig-zag-nav');

  if (navState.open === true) {
    zigZagNav.addEventListener('click', setActiveLink);
  } else if (navState.open === false) {
    zigZagNav.removeEventListener('click', setActiveLink);
  }
}

function handleNavLinks() {
  if (navState.open === true) {
    events.on(HANDLE_MAIN, handleMain);
  } else if (navState.open === false) {
    events.off(HANDLE_MAIN, handleMain);
  }
  toggleNavLinkListeners();
}

export { handleNavLinks, activeLink };