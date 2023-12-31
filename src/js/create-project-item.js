// * MARKUP
import { createListIcon } from "../components/listIcon/create-list-icon"; // ?  IN COMPONENTS FOLDER

// > ---------------------------------------------------

function createProjectItem(projectName) {
  const projectButton = document.createElement('button');
  projectButton.classList.add('nav-link');
  projectButton.setAttribute('type', 'button');
  projectButton.setAttribute('aria-label', `Project ${projectName}`);
  projectButton.setAttribute('data-project-name', projectName);
  projectButton.textContent = projectName;

  const listIcon = createListIcon();

  const projectLi = document.createElement('li');
  projectLi.classList.add('project-li');
  projectLi.classList.add('nav-li');
  projectButton.setAttribute('aria-label', `Project ${projectName}`);
  projectLi.appendChild(listIcon);
  projectLi.appendChild(projectButton);

  return projectLi;
}

export { createProjectItem };