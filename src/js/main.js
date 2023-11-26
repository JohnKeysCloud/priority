import '../css/styles.css';
import '../components/zig-zag-nav/zig-zag-nav.scss';

import { createZigZagNav } from '../components/zig-zag-nav/zip-zag-nav-markup';
import { createHeader } from './header-markup';
import { modifyListElement } from '../utilities/modify-li.js';
import { createModifiedLiContent } from './createModifiedLi.js';

const content = document.getElementById('content');

// ! CREATE header
content.appendChild(createHeader());  

// ! CREATE nav
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
    listElements: [
      ['Add Project', '#'],
      ['ADD_PROJECT_FORM', '#'],
    ],
  },
};
const initialPage = listObjects.Home.listElements[0][0];
const specialNavListItemArray = ['Add Project', 'ADD_PROJECT_FORM'];

content.appendChild(
  createZigZagNav(listObjects, initialPage, 'button', 'nav-primary-aria', specialNavListItemArray)
);

// ! MODIFY zigZagNav List Element to create Add Project Button
/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ // PARAM: modifyListElement                                             │
│ // ? 1.listElement                                                      │
│ // ? 2.listItemIndex                                                    │
│ // ? 3.listElementContentArray;                                         │
│ // ? 4.id for modified element                                           │
└─────────────────────────────────────────────────────────────────────────┘
*/
const projectList = document.querySelector('.nav-list-container:nth-child(2) > ul');
modifyListElement(projectList, 2, createModifiedLiContent(), 'add-project-li');


// !
// !
// !

const main = document.createElement('main');
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

main.appendChild(mainContainer);
content.appendChild(main);