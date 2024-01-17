// * Dependencies: html-script-injection.js

// * Description: Creates a theme toggle button.
// ? @return {HTMLElement} themeToggleContainer

// * @example
// ? const themeToggleContainer = createThemeToggleButton();
// ? document.body.appendChild(themeToggleContainer);

// * STYLESHEETS
import './theme-toggle.scss';

// > ---------------------------------------------------

function createThemeToggleButton() {
  const themeToggleContainer = document.createElement('div');
  themeToggleContainer.setAttribute('id', 'theme-toggle-container');

  const themeToggleCheckbox = document.createElement('input');
  themeToggleCheckbox.setAttribute('type', 'checkbox');
  themeToggleCheckbox.setAttribute('id', 'theme-toggle-checkbox');

  // TODO:
  if (localStorage.getItem('lightMode') === 'enabled') {
    themeToggleCheckbox.checked = true;
    themeToggleCheckbox.setAttribute('data-checked', 'true');
    themeToggleCheckbox.setAttribute('aria-label', 'Toggle Dark Mode');
  } else if (localStorage.getItem('lightMode') === null) {
    themeToggleCheckbox.checked = false;
    themeToggleCheckbox.setAttribute('data-checked', 'false');
    themeToggleCheckbox.setAttribute('aria-label', 'Toggle Light Mode');
  }

  const themeToggleLabel = document.createElement('label');
  themeToggleLabel.setAttribute('id', 'theme-toggle-label');
  themeToggleLabel.setAttribute('for', 'theme-toggle-checkbox');

  const sunIcon = document.createElement('i');
  sunIcon.classList.add('fa-solid', 'fa-sun');
  sunIcon.setAttribute('id', 'sun');

  const moonIcon = document.createElement('i');
  moonIcon.classList.add('fa-solid', 'fa-moon');
  moonIcon.setAttribute('id', 'moon');

  themeToggleLabel.appendChild(sunIcon);
  themeToggleLabel.appendChild(moonIcon);

  themeToggleContainer.appendChild(themeToggleCheckbox);
  themeToggleContainer.appendChild(themeToggleLabel);

  return themeToggleContainer;
}

export { createThemeToggleButton };