// * MARKUP
import { createListIcon } from "../../components/listIcon/create-list-icon"; 

// * UTILITIES
import { setAttributes } from '../../utilities/set-attributes.js'; 

// > ---------------------------------------------------

function createProjectItem(projectName) {
  const projectButton = document.createElement('button');
  projectButton.classList.add('nav-link');
  setAttributes(projectButton, {
    'type': 'button',
    'aria-label': `Project ${projectName}`,
    'data-project-name': projectName,
  })
  projectButton.textContent = projectName;

  const listIcon = createListIcon();

  const projectLi = document.createElement('li');
  projectLi.classList.add('project-li', 'nav-li');
  projectButton.setAttribute('aria-label', `Project ${projectName}`);
  projectLi.append(listIcon, projectButton);

  return projectLi;
}

export { createProjectItem };