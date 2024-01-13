// * DATA
import { data } from './data.js';

// * HANDLERS
import { addTaskFormOpenerButtonListener, taskComponentState } from './add-task-form-opener-button-listener.js';
import { handleNavToggleButton } from '../components/nav-toggle/handle-nav-toggle-button.js';
import { handleTaskItems } from './handle-task-items';
import { removeAddTaskFormOpenerButtonListener } from './remove-add-task-form-opener-button-listener.js';

// * LAYOUT
import { createMainContentContainer } from './create-main-content-container.js';

// * LOGIC
import { linkObjectFactory } from './logic.js';

// * UTILITIES
import { checkTargetElementExistence } from '../utilities/check-target-element-existence.js';
import { checkTaskListPopulation } from './handle-task-list.js';

// > ---------------------------------------------------

const mainState = {
  linkType: null,
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
    
    mainState.linkType = 'project';
    
    return projectObject;
      
    } else if (isPageLink) {
    const pageName = newCurrentNavLink.getAttribute('data-page-name');
    const linkObject = linkObjectFactory(pageName, data.getAllTasks());

    mainState.linkType = 'link';

    return linkObject;

  }
}

function handleMain(targetElement) {
  const newCurrentNavLink = targetElement;
  const mainUpdateObject = resolveMainUpdateObject(newCurrentNavLink);
  const mainUpdateObjectName = mainUpdateObject.getName();
  const mainUpdateObjectType = mainUpdateObject.getType();
  const newMainContainer = createMainContentContainer(mainUpdateObject);
  const newTaskList = newMainContainer.querySelector('#task-list');
  
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

  const taskListHasTaskItems = checkTaskListPopulation(newTaskList); // ? boolean
  if (taskListHasTaskItems) {
    handleTaskItems(newTaskList);
  }

  closeNavPostTransition(targetElement);
}

export { handleMain, mainState };
