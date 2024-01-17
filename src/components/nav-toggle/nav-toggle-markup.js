// * STYLES
import './nav-toggle.scss';

// * UTILITIES
import { setAttributes } from '../../utilities/set-attributes';

// > ---------------------------------------------------

function createNavToggleButton(ariaControlsID) {
  const navToggleBars = document.createElement('div');
  navToggleBars.classList.add('nav-toggle-bars');
  
  const navToggleButton = document.createElement('button');
  navToggleButton.classList.add('nav-toggle-button');
  setAttributes(navToggleButton, {
    'aria-label': 'Open Navigation Menu',
    'aria-expanded': false,
    'aria-controls': ariaControlsID,
  });
  navToggleButton.appendChild(navToggleBars);

  return navToggleButton;
}

export { createNavToggleButton };