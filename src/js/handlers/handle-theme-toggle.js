// * EVENT_NAMES
import { TOGGLE_THEME } from '../eventNames.js';

// * UTILITIES
import { addEventListener } from '../../utilities/add-event-listener.js';
import { events } from '../../utilities/pubsub.js';

// > --------------------------------------------------------------

const themeState = {
  savedTheme: getLocalStorageItem('savedTheme'),
  userPrefersLight: window.matchMedia('(prefers-color-scheme: light)').matches,
}

function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error('Error setting localStorage item:', error);
  }
}

function getLocalStorageItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return null;
  }
}

function updateColorSchemeMeta(theme) {
  let metaColorScheme = document.head.querySelector(
    'meta[name="color-scheme"]'
  );
  if (!metaColorScheme) {
    metaColorScheme = document.createElement('meta');
    metaColorScheme.setAttribute('name', 'color-scheme');
    document.head.appendChild(metaColorScheme);
  }
  metaColorScheme.setAttribute(
    'content',
    theme === 'light' ? 'light dark' : 'dark light'
  );
}

function toggleTheme(themeToggle) {
  const newTheme = themeToggle.checked ? 'light' : 'dark';
  themeState.savedTheme = newTheme;
  setLocalStorageItem('savedTheme', newTheme);
  document.body.classList.toggle('light-mode', newTheme === 'light');
  updateColorSchemeMeta(newTheme); 
}

function applyTheme(themeToggleButton) {
  const theme =
    themeState.savedTheme || (themeState.userPrefersLight ? 'light' : 'dark');
  themeToggleButton.checked = theme === 'light';
  document.body.classList.toggle('light-mode', theme === 'light');
  updateColorSchemeMeta(theme); 
}

function handleThemeToggle(themeToggleElement) {
  applyTheme(themeToggleElement);

  addEventListener(themeToggleElement, 'change', () => {
    events.emit(TOGGLE_THEME, themeToggleElement);
  });
  events.on(TOGGLE_THEME, toggleTheme);
}

export { themeState, handleThemeToggle };