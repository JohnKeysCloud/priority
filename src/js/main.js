import '../css/styles.css';
import '../components/zig-zag-nav/zig-zag-nav.scss';

import { createZigZagNav } from '../components/zig-zag-nav/zip-zag-nav-markup';
import { createHeader } from './header-markup';
import { createListIcon } from '../components/listIcon/listIcon.js';

const content = document.getElementById('content');

// ! CREATE HEADER
content.appendChild(createHeader());  

// ! CREATE NAV
// ? createZigZagNav accepts 4 arguments:
// * objectOfLists is an object that contains the list objects that will be used to create the nav lists
// * initialPage is a string that will be used to set the aria - current attribute (use the index of the page name object)
// * navType is a string that will be used to determine if the nav links are buttons or anchors options are 'button' or 'a'
// * id is a string that will be used to set the id attribute of the nav's nested element
// * specialNavLink is a string that matches a page name in the objectOfLists that will be used to create a special nav link
  // * with custom behavior (adjustable in zigZagNav.js)
  
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
      ['add-project-form', '#'],
    ],
  },
};
const initialPage = listObjects.Home.listElements[0][0];

content.appendChild(
  createZigZagNav(listObjects, initialPage, 'button', 'nav-primary-aria', 'Add Project')
);


// ! test
// ! test
// ! test
const addProjectTestLi = document.querySelector(
  '#nav-primary-aria > div:nth-child(2) > ul > li:nth-child(2)'
);
addProjectTestLi.setAttribute('id', 'add-project-li');
addProjectTestLi.innerHTML = ''; // clear the li

const projectInputContainer = document.createElement('div');
projectInputContainer.setAttribute('id', 'project-input-container');

const projectNameInput = document.createElement('input');
projectNameInput.setAttribute('id', 'project-name-input');
projectNameInput.setAttribute('type', 'text');
projectNameInput.setAttribute('placeholder', 'Enter Project Name');
projectNameInput.setAttribute('max-length', 24);

const projectButtonsContainer = document.createElement('div');
projectButtonsContainer.setAttribute('id', 'project-buttons-container');

const addProjectButton = document.createElement('button');
addProjectButton.setAttribute('id', 'add-project-button');
addProjectButton.setAttribute('type', 'button');
addProjectButton.setAttribute('aria-label', 'Add Project');
addProjectButton.textContent = 'add';

const cancelAddProjectButton = document.createElement('button');
cancelAddProjectButton.setAttribute('id', 'cancel-add-project-button');
cancelAddProjectButton.setAttribute('type', 'button');
cancelAddProjectButton.setAttribute('aria-label', 'Cancel Add Project');
cancelAddProjectButton.textContent = 'cancel';

projectInputContainer.appendChild(createListIcon());
projectInputContainer.appendChild(projectNameInput);

projectButtonsContainer.appendChild(addProjectButton);
projectButtonsContainer.appendChild(cancelAddProjectButton);

addProjectTestLi.appendChild(projectInputContainer);
addProjectTestLi.appendChild(projectButtonsContainer);
// ! test
// ! test
// ! test

const main = document.createElement('main');
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

main.appendChild(mainContainer);
content.appendChild(main);