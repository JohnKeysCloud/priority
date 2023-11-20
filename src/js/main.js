import '../css/styles.css';
import '../components/zig-zag-nav/zig-zag-nav.scss';
import priorityLogo from '../assets/images/priority-logo.webp';

import { createThemeToggleButton } from '../components/theme-toggle/theme-toggle.markup';
import { createNavToggleButton } from '../components/nav-toggle/nav-toggle-markup';
import { createZigZagNav } from '../components/zig-zag-nav/zip-zag-nav-markup';

const content = document.getElementById('content');
const pages = ['All Tasks', 'Today', 'Next 7 Days', 'Important', 'project', 'New Project'];

// ! CREATE HEADER
const header = document.createElement('header');

const headerLeft = document.createElement('div');
headerLeft.classList.add('header-left');

const headerLogo = document.createElement('img');
headerLogo.classList.add('header-logo');
headerLogo.setAttribute('src', priorityLogo);
headerLogo.setAttribute('alt', 'Priority Logo');

const headerTitle = document.createElement('h1');
headerTitle.classList.add('header-title');
headerTitle.textContent = '<pr{io}rity>';

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

const headerRight = document.createElement('div');
headerRight.classList.add('header-right');

headerRight.appendChild(createThemeToggleButton());
headerRight.appendChild(createNavToggleButton());

header.appendChild(headerLeft);
header.appendChild(headerRight);

content.appendChild(header);



const aside = document.createElement('aside');
// ! CREATE NAV
aside.appendChild(createZigZagNav(pages, pages[0], 'button'));

content.appendChild(aside);



// const pageSections = [createHeader,createAside,createMain, createFooter];

// function createHeader() {
//   const header = document.createElement('header');  
//   const headerTitle = document.createElement('h1');
//   headerTitle.classList.add('header-title');
//   headerTitle.textContent = 'toDo';
//   header.appendChild(headerTitle);

//   return header
// }

// function createAside() {
//   const aside = document.createElement('aside');
//   aside.textContent = 'aside';
  
//   return aside;
// }


// function createMain() {
//   const main = document.createElement('main');
//   main.textContent = 'main';

//   return main;
// }

// function createFooter() {
//   const footer = document.createElement('footer');
//   footer.textContent = 'footer';

//   return footer
// }

// function renderPage(pageSections) {
//   const content = document.getElementById('content');

//   while (content.firstChild) {
//     content.removeChild(content.firstChild);
//   }

//   pageSections.forEach(section => {
//     content.appendChild(section());
//   });
// }

// renderPage(pageSections);