// * Dependencies: html-script-injection.js

// * Description: Creates a theme toggle button.
// ? @return {HTMLElement} themeToggleContainer

// * @example
// ? const themeToggleContainer = createThemeToggleButton();
// ? document.body.appendChild(themeToggleContainer);

import { addScriptToHead } from "../../utilities/html-script-injection";
import './theme-toggle.scss';

const iconScriptSource = 'https://kit.fontawesome.com/24176ab973.js';
const attributes = {
  crossorigin: 'anonymous',
}

addScriptToHead(iconScriptSource, attributes);

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