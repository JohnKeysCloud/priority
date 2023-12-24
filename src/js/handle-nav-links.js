import { checkTargetElementExistence } from '../utilities/check-target-element-existence.js';

// TODO:

function populateMainContainer(event) {
  const targetElement = event.target;

  if (!(targetElement.classList.contains('nav-link'))) return console.log('nah nigga', event);

  if (targetElement.hasAttribute('data-project-name')) {


  } 

  
  const projectName = targetElement.getAttribute('data-project-name');
  console.log(projectName);


}



function handleNavLinks(navState) {
  const zigZagNav = checkTargetElementExistence('.zig-zag-nav');

  if (navState === 'open') {
    zigZagNav.addEventListener('click', populateMainContainer);
  } else if (navState === 'closed') {
    zigZagNav.removeEventListener('click', populateMainContainer);
  }
}


export { handleNavLinks };