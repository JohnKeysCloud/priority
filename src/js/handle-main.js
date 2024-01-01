// * DATA
import { data } from './data.js';

// * HANDLERS
import { addTaskFormOpenerButtonListener, taskComponentState } from './add-task-form-opener-button-listener.js';
import { handleNavToggleButton } from '../components/nav-toggle/handle-nav-toggle-button.js';
import { removeAddTaskFormOpenerButtonListener } from './remove-add-task-form-opener-button-listener.js';

// * LAYOUT
import { createMainContentContainer } from './create-main-content-container.js';

// * LOGIC
import { linkObjectFactory } from './logic.js';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence.js';

// > ---------------------------------------------------

const mainState = {
  updateObjectType: null,
  projectName: null,
}

function closeNavPostTransition(targetElement) {
  targetElement.addEventListener('transitionend', handleNavToggleButton, {
    once: true,
  });
  // ? the once option is used to remove the event listener after it has been called once.
}

function clearMain(mainElement) {
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
}

function resolveMainUpdateObject(newCurrentNavLink) {
  const isProjectLink = newCurrentNavLink.hasAttribute('data-project-name');
  const isPageLink = newCurrentNavLink.hasAttribute('data-page-name');

  if (isProjectLink) {    
    const projectArray = data.getProjectArray();
    const projectValue = newCurrentNavLink.getAttribute('data-project-name');
    const projectObject = projectArray.find(
      (project) => project.getName() === projectValue
      );
    
    mainState.updateObjectType = 'project';
    
    return projectObject;
      
    } else if (isPageLink) {
    const pageName = newCurrentNavLink.getAttribute('data-page-name');
    const linkObject = linkObjectFactory(pageName, data.getAllTasks());

    linkObject.arrangeTasks(newCurrentNavLink);

    mainState.updateObjectType = 'link';

    return linkObject;

  }
}

function handleMain(targetElement) {
  const newCurrentNavLink = targetElement;
  const mainUpdateObject = resolveMainUpdateObject(newCurrentNavLink);
  const mainUpdateObjectName = mainUpdateObject.getName();
  const mainUpdateObjectType = mainUpdateObject.getType();
  const newMainContainer = createMainContentContainer(mainUpdateObject);
  
  const isAddTaskFormOpenerButtonAttached = taskComponentState.isAddTaskButtonListenerAttached;
  if (isAddTaskFormOpenerButtonAttached) {
    removeAddTaskFormOpenerButtonListener();
  }

  const mainElement = checkTargetElementExistence('main');
  clearMain(mainElement);

  mainElement.appendChild(newMainContainer);
  
  if (mainUpdateObjectType === 'project') {
    mainState.projectName = mainUpdateObjectName;
    addTaskFormOpenerButtonListener(mainUpdateObjectType);
  }

  closeNavPostTransition(targetElement);
}

export { handleMain, mainState };
