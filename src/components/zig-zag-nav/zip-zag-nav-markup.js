import './zig-zag-nav.scss';
import { activateListeners } from './zig-zag-nav.js';

// * pageNames is an array of strings that will be used to create the nav links
// * initialPage is a string that will be used to set the aria-current attribute (use the index of the page name)
// * buttonOrAnchor is a string that will be used to determine if the nav links are buttons or anchors options are 'button' or 'a'
// * id is a string that will be used to set the id attribute of the nav's nested UL element

function createZigZagNav(pageNames, initialPage, buttonOrAnchor, ariaControlsID) {
  const zigZagNav = document.createElement('nav');
  zigZagNav.classList.add('zig-zag-nav');
  zigZagNav.setAttribute('id', ariaControlsID);
  zigZagNav.setAttribute('aria-label', 'Main Navigation');
  zigZagNav.setAttribute('aria-hidden', true);
  zigZagNav.setAttribute('data-visibility', false);

  const navUL = document.createElement('ul');
  navUL.classList.add('nav-ul');

  const listFragment = document.createDocumentFragment();
  pageNames.forEach((page, index) => {
    const navLI = document.createElement('li');
    navLI.classList.add('nav-li');

    const linkNumberSpan = document.createElement('span');
    linkNumberSpan.classList.add('nav-number');
    linkNumberSpan.setAttribute('aria-hidden', true);
    linkNumberSpan.textContent = `0${index}`;

    const navLink = document.createElement(buttonOrAnchor === 'button' ? 'button' : 'a' ? 'a' : alert('Accepts only "button" or "a" as arguments'));
    navLink.classList.add('nav-link');

    if (buttonOrAnchor === 'a') {
      navLink.setAttribute('href', '#'); // ! UPDATE THIS TO USE THE PAGE NAME
    }

    if (page === initialPage) {
      navLink.setAttribute('aria-current', 'page');
    }
    
    navLink.appendChild(linkNumberSpan);
    navLink.appendChild(document.createTextNode(page));
    navLI.appendChild(navLink);
    listFragment.appendChild(navLI);
  });

  navUL.appendChild(listFragment);

  zigZagNav.appendChild(navUL);

  activateListeners();

  return zigZagNav;
}

export { createZigZagNav };