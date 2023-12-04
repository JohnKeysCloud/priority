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
    listElements: [
    ],
  },
};
const initialPage = listObjects.Home.listElements[0][0];
const specialNavListItemArray = ['New Project'];
content.appendChild(
  createZigZagNav(listObjects, initialPage, 'button', 'nav-primary-aria', specialNavListItemArray)
);

// * UPDATE zigZagNav List Element to create Add Project Button
/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ // PARAM: modifyListElement                                             │
│ // ? 1.listElement                                                      │
│ // ? 2.listItemIndex                                                    │
│ // ? 3.listElementContentArray;                                         │
│ // ? 4.id for modified element                                           │
└─────────────────────────────────────────────────────────────────────────┘
*/
const navContainerTwo = document.querySelector('.nav-list-container:nth-child(2)');
navContainerTwo.insertBefore(
  createAddProjectContainer(),
  navContainerTwo.lastChild
  );
  
const navContainerTwoUL = document.querySelector('.nav-list-container:nth-child(2) > ul');

let projectItemCount = 0;
for (let i = 0; i < projectItemCount; i++) {
  navContainerTwoUL.appendChild(createProjectItem(`Project ${i}`));
}

// create an array of all the list items in the nav
// on click of the add project button, unshift the add project form into the array
// whatever is typed into the project form will also be unshifted into the array
// when the add button is clicked, the array will be iterated over and the list items will be created
// the array will be cleared and the add project form will be removed from the array
// the array will be iterated over and the list items will be created

// add event listeners to all items in the first ul of the nav list container
// depending on the text content of the item, a different function will be called
// the function will create the appropriate content for the main container
// the function will also remove the content from the main container

// add event listeners to all items in the second ul of the nav list container
// depending on the text content of the item, a different function will be called
// the function will create the appropriate content for the main container
// the function will also remove the content from the main container

// the main container will consist of a main with a div inside of it
// the container will have two sections. One for the the title and one for the content
// for nav ul 1, it will show tasks to be done in the timeframe selected

// for nav ul 2, it will show the projects and the tasks associated with the project
// the tasks will be sorted by priority, date, then completion

// task ui:
// a list element composed of a checkbox, title, description underneath, due date (if there is one), a star icon to mark as important,
// and a three dot icon to open a menu with edit and delete options.
// clicking edit will replace the content of the list element with a form to edit the task (the same form used to create a task)





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