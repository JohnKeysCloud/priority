import { events } from '../../utilities/pubsub.js';
import { HIDE_NAV_EVENT, SHOW_NAV_EVENT } from '../../js/eventNames.js';

// ! let isAnimating = false;
// ! let pending = null;

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

  zigZagNav.removeEventListener('animationend', hideNav);
  // ! This is a hack to prevent the nav from hiding when the user clicks the nav toggle button while the nav is animating closed
  // ! use isAnimating to prevent the nav from hiding while it is animating closed
  // ! use pending to prevent the nav from hiding while it is animating open
  // ! isAnimating and pending are set to true when the nav is animating and set to false when the animation is complete
  // ! isAnimating and pending are set to false when the nav is hidden
  // ! isAnimating and pending are set to false when the nav is shown

  zigZagNav.setAttribute('aria-hidden', false);
  zigZagNav.setAttribute('data-visibility', true);
}

function activateListeners() {
  events.on(SHOW_NAV_EVENT, showNav);
  events.on(HIDE_NAV_EVENT, initiateHideNav);
}

export { activateListeners };