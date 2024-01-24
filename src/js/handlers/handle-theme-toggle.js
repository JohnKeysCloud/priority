// * DATA
import { data } from '../data.js';

// * EVENT_NAMES
import { TOGGLE_THEME } from '../eventNames.js';

// * UTILITIES
import { addEventListener } from '../../utilities/add-event-listener.js';
import { events } from '../../utilities/pubsub.js';
import { setLocalStorageItem } from '../../utilities/handle-local-storage.js';
import { updateColorSchemeMeta } from '../project-dependent-utilities/update-color-scheme-meta.js';

// > --------------------------------------------------------------

function toggleTheme(themeToggle) {
  const newTheme = themeToggle.checked ? 'light' : 'dark';
  data.setSavedTheme(newTheme);
  setLocalStorageItem('savedTheme', newTheme);
  document.body.classList.toggle('light-mode', newTheme === 'light');
  updateColorSchemeMeta(newTheme); 
}

function handleThemeToggle(themeToggleElement) {
  addEventListener(themeToggleElement, 'change', () => {
    events.emit(TOGGLE_THEME, themeToggleElement);
  });
  events.on(TOGGLE_THEME, toggleTheme);
}

export { handleThemeToggle };