// * ASSETS
import cycloneStudiosLogo from '../../../src/assets/images/cycloneStudios.svg';

// * COMPONENTS
import { createGitHubLink } from "../../components/create-git-hub-link";

// * UTILITIES
import { setAttributes } from "../../utilities/set-attributes";

// > --------------------------------------------------------------

function createFooter() {
  const cyloneStudiosLogo = document.createElement('img');
  cyloneStudiosLogo.classList.add('cyclone-studios-logo');
  setAttributes(cyloneStudiosLogo, {
    src: cycloneStudiosLogo,
    alt: 'Cyclone Studios logo',
  });

  const cycloneStudioLogoLink = document.createElement('a');
  cycloneStudioLogoLink.classList.add('cyclone-studios-logo-link');
  setAttributes(cycloneStudioLogoLink, {
    href: 'https://www.cyclonestud.io',
    rel: 'noopener noreferrer',
    target: '_blank',
    type: 'button',
    'aria-label': 'Cyclone Studios link',
  });
  cycloneStudioLogoLink.appendChild(cyloneStudiosLogo);

  const currentYear = new Date().getFullYear();
  const copyrightTextContent = `©${currentYear}`;
  const footerParagraph = document.createElement('p');
  footerParagraph.classList.add('footer-paragraph');
  footerParagraph.textContent = copyrightTextContent;

  const cycloneLogoContainer = document.createElement('div');
  cycloneLogoContainer.classList.add('cyclone-logo-container');
  cycloneLogoContainer.append(cycloneStudioLogoLink, footerParagraph);

  const gitHubLogoLink = createGitHubLink(
    '1.5rem',
    'white',
    'johnkeyscloud',
    'priority'
  );
  
  const footer = document.createElement('footer');
  footer.append(cycloneLogoContainer, gitHubLogoLink);

  return footer;
}

export { createFooter };