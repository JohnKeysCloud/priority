// * EVENT_NAMES
import { HIDE_NAV_EVENT, SHOW_NAV_EVENT } from '../../js/eventNames.js';

// * STATES
import { navState } from '../zig-zag-nav/handle-zig-zag-nav.js';

// * UTILITES
import { events } from '../../utilities/pubsub.js';
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';

// > ---------------------------------------------------

function handleNavToggleButton() {
  const toggleButton = checkTargetElementExistence('.nav-toggle-button');
  const toggleButtonActivated = toggleButton.classList.contains('active');

  if (!toggleButtonActivated) {
    if (navState.animating === true) return;

    toggleButton.classList.add('active');

    toggleButton.setAttribute('aria-label', 'Close Navigation Menu');
    toggleButton.setAttribute('aria-expanded', true);

    events.emit(SHOW_NAV_EVENT);
  } else {
    toggleButton.classList.remove('active');

    toggleButton.setAttribute('aria-label', 'Open Navigation Menu');
    toggleButton.setAttribute('aria-expanded', false);

    events.emit(HIDE_NAV_EVENT);
  }
}

export { handleNavToggleButton };
