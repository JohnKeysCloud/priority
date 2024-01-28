// * DATA
import { data } from '../data';

// * PROJECT_DEPENDENT_UTILITIES
import { updateColorSchemeMeta } from './update-color-scheme-meta';

// > --------------------------------------------------------------

function applyUserPreferredTheme(themeToggleButton) {
  const theme =
    data.getSavedTheme() ||
    (window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark');

  themeToggleButton.checked = theme === 'light';
  document.body.classList.toggle('light-mode', theme === 'light');
  updateColorSchemeMeta(theme);
}

export { applyUserPreferredTheme };