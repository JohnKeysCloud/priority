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