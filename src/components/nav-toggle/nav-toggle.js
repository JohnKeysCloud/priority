// * UTILITES
import { events } from '../../utilities/pubsub.js';

// * EVENT NAMES
import { HIDE_NAV_EVENT, SHOW_NAV_EVENT } from '../../js/eventNames.js';

function toggleNavButton() {
  let toggleButtonActivated = this.classList.contains('active');

  if (!toggleButtonActivated) {
    this.classList.add('active');

    this.setAttribute('aria-label', 'Close Navigation Menu');
    this.setAttribute('aria-expanded', true);

    events.emit(SHOW_NAV_EVENT);
  } else {
    this.classList.remove('active');

    this.setAttribute('aria-label', 'Open Navigation Menu');
    this.setAttribute('aria-expanded', false);

    events.emit(HIDE_NAV_EVENT);
  }
}

export { toggleNavButton };
