// * DATA
import { data } from '../data.js';

// * LOGIC
import { linkObjectFactory } from '../logic.js';
import { navListObjects } from '../../components/zig-zag-nav/nav-list-objects.js';

// * MARKUP
import { createHeader } from './create-header.js';
import { createMain } from './create-main.js';
import { createZigZagNav } from '../../components/zig-zag-nav/create-zig-zag-nav.js';
import { createFooter } from './create-footer.js';

// * STYLESHEETS
import '../../components/zig-zag-nav/zig-zag-nav.scss'
import '../../css/styles.css';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';

// > --------------------------------------------------------------

function createDOM() {
  const content = checkTargetElementExistence('#content');
  const initialMainContent = linkObjectFactory('all tasks', data.getAllTasks());

  content.append(
    createHeader(),
    createZigZagNav(navListObjects, 'All Tasks', 'button', 'nav-primary-aria'),
    createMain(initialMainContent),
    createFooter(),
  );
}

export { createDOM };