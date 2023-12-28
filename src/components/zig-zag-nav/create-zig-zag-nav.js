import './zig-zag-nav.scss';
import { publishNavEvents } from './zig-zag-nav.js';

// * initialPage is a string that will be used to set the aria-current attribute (use the index of the page name)
// * anchorOrButton is a string that will be used to determine if the nav links are buttons or anchors options are 'button' or 'a'
// * id is a string that will be used to set the id attribute of the nav's nested UL element

function createZigZagNav(
  objectOfLists,
  initialPage,
  anchorOrButton,
  ariaControlsID,
  specialNavListItemArray
) {
  const zigZagNav = document.createElement('nav');
  zigZagNav.classList.add('zig-zag-nav');
  zigZagNav.setAttribute('id', ariaControlsID);
  zigZagNav.setAttribute('aria-label', 'Main Navigation');
  zigZagNav.setAttribute('aria-hidden', true);
  zigZagNav.setAttribute('data-visibility', false);

  for (const list in objectOfLists) {
    const listContainer = document.createElement('div');
    listContainer.classList.add('nav-list-container');

    const listHeader = document.createElement('h2');
    listHeader.classList.add('nav-list-header');
    listHeader.textContent = list;
    zigZagNav.appendChild(listHeader);

    const listUL = document.createElement('ul');
    listUL.classList.add('nav-ul');

    const groupedListElements = objectOfLists[list].listElements;

    const listFragment = document.createDocumentFragment();
    groupedListElements.forEach((pageNameAndHref, index) => {
      const pageName = pageNameAndHref[0];
      const pageHref = pageNameAndHref[1];

      const navLink = document.createElement(
        anchorOrButton === 'button'
          ? 'button'
          : 'a'
          ? 'a'
          : console.log('zigZagNav only accepts "button" or "a" as arguments')
      );
      navLink.classList.add('nav-link');
      if (anchorOrButton === 'a') {
        navLink.setAttribute('href', pageHref);
      }
      if (pageName === initialPage) {
        navLink.setAttribute('aria-current', 'page');
      }

      const navLI = document.createElement('li');
      navLI.classList.add('nav-li');
      if (specialNavListItemArray) {
        specialNavListItemArray.forEach((specialNavLink) => {
          if (pageName === specialNavLink) {
            navLI.classList.add('special-nav-li');
          }
        });
      }

      navLink.textContent = pageName;
      navLink.setAttribute('data-page-name', pageName.toLowerCase());

      navLI.appendChild(navLink);
      listFragment.appendChild(navLI);
    });

    listUL.appendChild(listFragment);
    
    listContainer.appendChild(listHeader);
    listContainer.appendChild(listUL);

    zigZagNav.appendChild(listContainer);
  }

  publishNavEvents();

  return zigZagNav;
}

export { createZigZagNav };