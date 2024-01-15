// * DATA
import { data } from './data.js';

// * LOGIC
import { linkObjectFactory } from './logic.js';
import { navListObjects } from '../components/zig-zag-nav/nav-list-objects.js';

// * MARKUP
import { createHeader } from './markup/create-header.js';
import { createMain } from './markup/create-main.js';
import { createZigZagNav } from '../components/zig-zag-nav/create-zig-zag-nav.js';

// * MODIFIERS
import { modifyGenericNavLinks } from './modifiers/modify-generic-nav-links.js';
import { modifySecondNavContainer } from './modifiers/modify-second-nav-container.js';

// * STYLESHEETS
import '../components/zig-zag-nav/zig-zag-nav.scss';
import '../css/styles.css';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence.js'; 

// > --------------------------------------------------------------

function appInit() {
  const content = checkTargetElementExistence('#content');

  content.appendChild(createHeader());  
  content.appendChild(
    createZigZagNav(navListObjects, 'All Tasks', 'button', 'nav-primary-aria')
  );
  content.appendChild(createMain(linkObjectFactory('all tasks', data.getAllTasks())));
  modifySecondNavContainer();
  modifyGenericNavLinks();
}

appInit();