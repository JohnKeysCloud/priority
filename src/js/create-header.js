// * ASSETS
import priorityLogo from '../assets/images/priority-logo.webp';

// * MARKUP
import { createNavToggleButton } from '../components/nav-toggle/nav-toggle-markup';
import { createThemeToggleButton } from '../components/theme-toggle/theme-toggle.markup';

// > ---------------------------------------------------

function createHeader() {
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
  headerRight.appendChild(createNavToggleButton('nav-primary-aria'));

  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  content.appendChild(header);

  return header;
}

export { createHeader };
