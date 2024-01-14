// * MARKUP
import { createAddProjectContainer } from "../markup/create-add-project-form";

// > --------------------------------------------------------------

function modifySecondNavContainer() {
  const projectNavListContainer = document.querySelector(
    '.nav-list-container:nth-child(2)'
  );
  projectNavListContainer.setAttribute('id', 'project-nav-list-container');
  projectNavListContainer.insertBefore(
    createAddProjectContainer(),
    projectNavListContainer.lastChild
  );

  const projectNavList = projectNavListContainer.querySelector('.nav-ul');
  projectNavList.setAttribute('id', 'project-nav-list');
}

export { modifySecondNavContainer };
