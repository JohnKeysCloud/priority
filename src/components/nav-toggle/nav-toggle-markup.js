import './nav-toggle.scss';
import { toggleNavButton } from './nav-toggle';

function createNavToggleButton(ariaControlsID) {
  const navToggleButton = document.createElement('button');
  navToggleButton.classList.add('nav-toggle-button');
  navToggleButton.setAttribute('aria-label', 'Open Navigation Menu');
  navToggleButton.setAttribute('aria-expanded', false);
  navToggleButton.setAttribute('aria-controls', ariaControlsID);

  const navToggleBars = document.createElement('div');
  navToggleBars.classList.add('nav-toggle-bars');

  navToggleButton.appendChild(navToggleBars);

  navToggleButton.addEventListener('click', toggleNavButton);

  return navToggleButton;
}

export { createNavToggleButton };