// * DATA
import { data } from './data.js';

// * LOGIC
import { linkObjectFactory } from './logic.js';

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

const content = document.getElementById('content');

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