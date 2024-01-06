// * DATA
import { data } from './data.js';

// * LOGIC
import { linkObjectFactory } from './logic.js';

// * MARKUP
import { createHeader } from './create-header.js';
import { createMain } from './create-main.js';
import { createZigZagNav } from '../components/zig-zag-nav/create-zig-zag-nav.js';

// * MODIFIERS
import { modifyGenericNavLinks } from './modify-generic-nav-links.js';
import { modifySecondNavContainer } from './modify-second-nav-container.js';
import { injectFontAwesomeScript } from './inject-font-awesome-script.js';

// * STYLESHEETS
import '../components/zig-zag-nav/zig-zag-nav.scss';
import '../css/styles.css';

// * UTILITIES
import { createScrollAnimation } from '../utilities/scroll-element-content.js';

const content = document.getElementById('content');

// * INJECT font awesome script
injectFontAwesomeScript();

// * CREATE header
content.appendChild(createHeader());  

// * CREATE nav
/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ // PARAM: createZigZagNav                                               │
  │ // ? 1. objectOfLists                                                   │
  │ // ? 2. initialPage (used to set the aria - current attribute)          │
  │ // ? 3. navType (anchor for 'a' tags / button for 'button tags)         │
  │ // ? 4. id (sets navigations id for aria in conjunction with a nav      │
  │   // ? toggle button)                                                   │                                                               │
  │ // ? 5. specialNavLinkArr is an array of page names with that will      │
  │   // ? be used to create a special nav links via a unique css class     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const listObjects = {
  Home: {
    listElements: [
      ['All Tasks', '#'],
      ['Today', '#'],
      ['Next 7 Days', '#'],
      ['Priorities', '#'],
    ],
  },
  Projects: {
    listElements: [],
  },
};
content.appendChild(
  createZigZagNav(listObjects, 'All Tasks', 'button', 'nav-primary-aria')
);

// * MODIFIER CALLS (order matters)
modifySecondNavContainer();
modifyGenericNavLinks();

// !
// !
// !

content.appendChild(createMain(linkObjectFactory('all tasks', data.getAllTasks())));

// !
// !
// !

// * UPDATE task details scroll animation
const taskDetailContainers = document.querySelectorAll('.task-item-details');

taskDetailContainers.forEach((container) => {
  createScrollAnimation(container, 'backward', 0.5);
});