// * ASSETS
import priorityLogo from '../../assets/images/priority-logo.webp';

// * MARKUP
import { createNavToggleButton } from '../../components/nav-toggle/nav-toggle-markup';
import { createThemeToggleButton } from '../../components/theme-toggle/theme-toggle.markup';

// * UTILITIES
import { setAttributes } from '../../utilities/set-attributes';

// > ---------------------------------------------------

function createHeader() {
  const headerLogo = document.createElement('img');
  headerLogo.classList.add('header-logo');
  setAttributes(headerLogo, {
    'alt': 'Priority Logo',
    'aria-label': 'Priority Logo',
    'src': priorityLogo,
  });

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = '<pr{io}rity>';

  const headerLeft = document.createElement('div');
  headerLeft.classList.add('header-left');
  headerLeft.append(headerLogo, headerTitle);

  const headerRight = document.createElement('div');
  headerRight.classList.add('header-right');
  headerRight.append(createThemeToggleButton(), createNavToggleButton('nav-primary-aria'));

  const header = document.createElement('header');
  header.append(headerLeft, headerRight);
  
  return header;
}

export { createHeader };
