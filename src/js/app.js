import '../css/styles.css';
import '../components/zig-zag-nav/zig-zag-nav.scss';

// * LAYOUT
import { createZigZagNav } from '../components/zig-zag-nav/zip-zag-nav-markup.js';
import { createHeader } from './header-markup.js';
import { createAddProjectContainer } from './create-add-project-form.js';
import { createMain } from './main-markup.js';

// * HANDLER FUNCTIONS
import { handleNewProjectButton } from '../js/handleNewProjectButton.js';

// * UTILITIES
import { createScrollAnimation } from '../utilities/scroll-element-content.js';
import { createTaskItem } from './create-task-item.js';
import { createProjectItem } from './create-project-item.js';

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
      ['Important', '#'],
    ],
  },
  Projects: {
    listElements: [],
  },
};
content.appendChild(
  createZigZagNav(listObjects, 'All Tasks', 'button', 'nav-primary-aria')
);

// * UPDATE zigZagNav List Element to create Add Project Button and classify Project List
const projectNavListContainer = document.querySelector('.nav-list-container:nth-child(2)');
projectNavListContainer.setAttribute('id', 'project-nav-list-container');
projectNavListContainer.insertBefore(
  createAddProjectContainer(),
  projectNavListContainer.lastChild
);
const projectNavList = projectNavListContainer.querySelector('.nav-ul');
projectNavList.setAttribute('id', 'project-nav-list');

// !
// !
// !

content.appendChild(createMain());

// * UPDATE task details scroll animation
const taskDetailContainers = document.querySelectorAll('.task-item-details');

taskDetailContainers.forEach((container) => {
  createScrollAnimation(container, 'backward', 0.5);
});

// * HANDLER CALLS
handleNewProjectButton();
