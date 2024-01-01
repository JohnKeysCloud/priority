// * STYLESHEETS
import './listIcon.scss';

// > ---------------------------------------------------

function createListIcon() {
  const listIconContainer = document.createElement('div');
  listIconContainer.classList.add('list-icon-container');
  listIconContainer.setAttribute('aria-hidden', true);

  const listIconBars = document.createElement('div');
  listIconBars.classList.add('list-icon-bars');

  listIconContainer.appendChild(listIconBars);

  return listIconContainer;
}

export { createListIcon };

