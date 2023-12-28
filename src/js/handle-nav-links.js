import { events } from '../utilities/pubsub.js';
import { UPDATE_MAIN_CONTENT } from './eventNames.js';
import { checkTargetElementExistence } from '../utilities/check-target-element-existence.js';
import { navState } from '../components/zig-zag-nav/zig-zag-nav.js';
import { data } from './data.js';
import { linkObjectFactory } from './logic.js';
import { createMain } from './create-main.js';

function resolveCreateMainObject(targetElement) {
  const isProjectLink = targetElement.hasAttribute('data-project-name'); 
  const isPageLink = targetElement.hasAttribute('data-page-name');

  if (isProjectLink) {
    const projectArray = data.getProjectArray();
    const projectValue = targetElement.getAttribute('data-project-name');
    const projectObject = projectArray.find(project => project.getName() === projectValue);

    return projectObject;
  } else if (isPageLink) {
    const pageName = targetElement.getAttribute('data-page-name');
    const linkObject = linkObjectFactory(pageName, data.getAllTasks());
    
    linkObject.arrangeTasks(targetElement);
    
    return linkObject;
  }
}

function removeOldAriaCurrent(nodelist) {
  for (let i = 0; i < nodelist.length; i++) {
    if (nodelist[i].hasAttribute('aria-current')) {
      nodelist[i].removeAttribute('aria-current');
      break;
    }
  }
}

function setAriaCurrent(targetElement) {
  const nav = checkTargetElementExistence('.zig-zag-nav');
  const navLinks = nav.getElementsByClassName('nav-link');

  removeOldAriaCurrent(navLinks);

  targetElement.setAttribute('aria-current', 'page');

  return targetElement;
}

function checkIfClickableNavLink(targetElement) {
  const isTargetNavLink = targetElement.classList.contains('nav-link');
  const isTargetLinkActive = targetElement.hasAttribute('aria-current');
  const isTargetLinkClickable = isTargetNavLink && !isTargetLinkActive;

  if (isTargetLinkClickable) return true;
}

function clearMain() {
  const main = checkTargetElementExistence('main');

  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function updateMainContent(event) {
  const targetElement = event.target;
  const isTargetElementNavLink = checkIfClickableNavLink(targetElement);

  if (!isTargetElementNavLink) return;

  const newCurrentNavLink = setAriaCurrent(targetElement);
  
  const mainUpdateObject = resolveCreateMainObject(newCurrentNavLink);
  
  clearMain();
  createMain(mainUpdateObject);

  // TODO:
  console.log(`mainUpdateObject: ${mainUpdateObject}`);

  // !update main here
  // createMain() with mainUpdateObject
  // if it has "data-page-name"
  // create object consisting of heading (Object.name) and all tasks
  // (filtered or sorted depending on the value of the attr)
  // pass this object to updateMain
}

function emitUpdateMainContent(event) {
  events.emit(UPDATE_MAIN_CONTENT, event);
}

function toggleNavLinkListeners() {
  const zigZagNav = checkTargetElementExistence('.zig-zag-nav');

  if (navState.open === true) {
    zigZagNav.addEventListener('click', emitUpdateMainContent);
  } else if (navState.open === false) {
    zigZagNav.removeEventListener('click', emitUpdateMainContent);
  }
}

function handleNavLinks() {
  if (navState.open === true) {
    events.on(UPDATE_MAIN_CONTENT, updateMainContent);
  } else if (navState.open === false) {
    events.off(UPDATE_MAIN_CONTENT, updateMainContent);
  }
  toggleNavLinkListeners();
}

export { handleNavLinks };