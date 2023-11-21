import { events } from '../../utilities/pubsub.js';
import { HIDE_NAV_EVENT, SHOW_NAV_EVENT } from '../../js/eventNames.js';

function hideNav() {
  const zigZagNav = document.querySelector('.zig-zag-nav');
  
  zigZagNav.removeEventListener('animationend', hideNav);
  
  zigZagNav.setAttribute('aria-hidden', true);
  zigZagNav.setAttribute('data-visibility', false);
}

function initiateHideNav() {
  const zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.setAttribute('data-visibility', 'closing');
  zigZagNav.addEventListener('animationend', hideNav);
}

function showNav() {
  const zigZagNav = document.querySelector('.zig-zag-nav');
  zigZagNav.setAttribute('aria-hidden', false);
  zigZagNav.setAttribute('data-visibility', true);
}

function activateListeners() {
  events.on(SHOW_NAV_EVENT, showNav);
  events.on(HIDE_NAV_EVENT, initiateHideNav);
}

export { activateListeners };