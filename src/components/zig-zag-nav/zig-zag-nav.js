import { events } from '../../utilities/pubsub.js';
import { HIDE_NAV_EVENT, SHOW_NAV_EVENT } from '../../js/eventNames.js';

function hideNav() {
  const zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.classList.remove('closing');
  zigZagNav.removeEventListener('animationend', hideNav);
  
  zigZagNav.classList.remove('open');
}

function initiateHideNav() {
  const zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.classList.add('closing');
  zigZagNav.addEventListener('animationend', hideNav);
}

function showNav() {
  const zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.classList.add('open');
  zigZagNav.setAttribute('aria-hidden', false);
}

function activateListeners() {
  events.on(SHOW_NAV_EVENT, showNav);
  events.on(HIDE_NAV_EVENT, initiateHideNav);
}

export { activateListeners };