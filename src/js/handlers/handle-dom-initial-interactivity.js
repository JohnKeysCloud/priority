// * HANDLERS
import { handleNavToggleButton } from '../../components/nav-toggle/handle-nav-toggle-button.js';
import { handleZigZagNav } from '../../components/zig-zag-nav/handle-zig-zag-nav.js';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';

import { handleThemeToggle } from './handle-theme-toggle.js';

// > --------------------------------------------------------------

function handleInitialDOMInteractivity() {
  const zigZagNavElement = checkTargetElementExistence('.zig-zag-nav');
  handleZigZagNav(zigZagNavElement);

  const navToggleButton = checkTargetElementExistence('.nav-toggle-button');
  navToggleButton.addEventListener('click', handleNavToggleButton);

  const themeToggleElement = checkTargetElementExistence(
    '#theme-toggle-checkbox'
  );
  handleThemeToggle(themeToggleElement);
}

export { handleInitialDOMInteractivity };
