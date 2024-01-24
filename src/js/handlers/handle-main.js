// * DATA
import { data } from '../data.js';

// * DEPENDENCIES
import { addDays, format } from 'date-fns';

// * HANDLERS
import { addTaskFormOpenerButtonListener } from './add-task-form-opener-button-listener.js';
import { initiateProjectDeletionFunctionality } from './add-delete-project-button-listener.js';
import { handleNavToggleButton } from '../../components/nav-toggle/handle-nav-toggle-button.js';
import { handleTaskItems } from './handle-task-items.js';
import { removeAddTaskFormOpenerButtonListener } from './remove-add-task-form-opener-button-listener.js';

// * LAYOUT
import { createMainContentContainer } from '../markup/create-main-content-container.js';

// * LOGIC
import { linkObjectFactory } from '../logic.js';

// * PROJECT_DEPENDENT_UTILITIES
import { checkTaskListPopulation } from '../project-dependent-utilities/check-task-list-population.js';
import { updateProjectTaskListState } from '../project-dependent-utilities/update-project-task-list-state.js';

// * STATES
import { projectTaskListState } from './handle-task-list-via-project.js';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';

// > ---------------------------------------------------

const mainState = {
  linkOrProjectName: 'null',
  linkType: 'link',
  linkOrProjectName: null,
  addTaskFormState: 'hidden',
  isDeleteProjectButtonListenerAttached: false,
  isAddTaskButtonListenerAttached: false,
};

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

function getLinkObjectData(pageName, allTasks) {
  const today = new Date();

  const actions = {
    'all tasks': () => allTasks,
    'priorities': () => allTasks.filter(task => task.getPriority() === true),
    'today': () => {
      const todayFormatted = format(today, 'yyyy-MM-dd');
      return allTasks.filter(task => task.getDueDate() === todayFormatted);
    },
    'next 7 days': () => {
      const nextWeek = addDays(today, 7);
      const nextWeekFormatted = format(nextWeek, 'yyyy-MM-dd');
      return allTasks.filter(task => task.getDueDate() <= nextWeekFormatted);
    }
  };

  return (actions[pageName] || (() => allTasks))();
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
    
    const linkObjectData = getLinkObjectData(pageName, data.getAllTasks());

    const linkObject = linkObjectFactory(pageName, linkObjectData);

    mainState.linkType = 'link';

    return linkObject;

  }
}

function handleMain(clickedLinkElement) {
  const newCurrentNavLink = clickedLinkElement;
  const mainUpdateObject = resolveMainUpdateObject(newCurrentNavLink);
  const mainUpdateObjectName = mainUpdateObject.getName();
  const mainUpdateObjectType = mainUpdateObject.getType();
  const newMainContainer = createMainContentContainer(mainUpdateObject);
  const newTaskList = newMainContainer.querySelector('#task-list');
  
  const isAddTaskFormOpenerButtonAttached = mainState.isAddTaskButtonListenerAttached;
  if (isAddTaskFormOpenerButtonAttached) {
    removeAddTaskFormOpenerButtonListener();
  }

  const mainElement = checkTargetElementExistence('main');
  clearMain(mainElement);

  mainElement.appendChild(newMainContainer);
  mainState.linkOrProjectName = mainUpdateObjectName;
  
  if (mainUpdateObjectType === 'project') {
    updateProjectTaskListState(mainUpdateObject);
    initiateProjectDeletionFunctionality();
    addTaskFormOpenerButtonListener(mainUpdateObjectType);
  } 

  const taskListHasTaskItems = checkTaskListPopulation(newTaskList); // ? boolean
  if (taskListHasTaskItems) {
    handleTaskItems(newTaskList);
  }

  closeNavPostTransition(clickedLinkElement);
}

export { handleMain, mainState };
