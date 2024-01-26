// * DATA
import { data } from '../data.js';

// * HANDLERS
import { handleNavToggleButton } from '../../components/nav-toggle/handle-nav-toggle-button.js';
import { handleTaskItems } from './handle-task-items.js';
import { handleThemeToggle } from './handle-theme-toggle.js';
import { handleZigZagNav } from '../../components/zig-zag-nav/handle-zig-zag-nav.js';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';

// * PROJECT_DEPENDENT_UTILITIES
import { applyUserPreferredTheme } from '../project-dependent-utilities/apply-user-preferred-theme.js';
import { checkTaskListPopulation } from '../project-dependent-utilities/check-task-list-population.js';
import { updateProjectList } from '../project-dependent-utilities/update-project-list.js';

// * STATES
import { localStorageState } from '../project-dependent-utilities/retrieve-user-data.js';

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
  applyUserPreferredTheme(themeToggleElement);
  
  if (!localStorageState.projectArrayItemExists) return;
  const projectListElement = checkTargetElementExistence('#project-nav-list');
  updateProjectList(data, projectListElement);
  
  const taskListElement = checkTargetElementExistence('#task-list');
  if (!checkTaskListPopulation(taskListElement)) return;
  handleTaskItems(taskListElement);
}

export { handleInitialDOMInteractivity };
