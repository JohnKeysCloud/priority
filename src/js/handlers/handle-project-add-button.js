// * DATA
import { data } from '../data.js';

// * EMITTERS
import { emitProjectFormVisibilityToggle } from './handle-new-project-button.js';

// * EVENT_NAMES
import { ADD_NEW_PROJECT } from '../eventNames.js';

// * LOGIC
import { projectFactory } from '../logic.js';

// * PROJECT_DEPENDENT_UTILITIES
import { updateUserDataLocalStorage } from '../project-dependent-utilities/update-user-data-local-storage.js';
import { updateProjectList } from '../project-dependent-utilities/update-project-list.js';

// * STATES
import { formComponentState } from './handle-new-project-button.js';

// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';
import { events } from '../../utilities/pubsub.js';
import { toggleScrollBarVisibility } from '../../utilities/toggle-scroll-visibility.js';

// > ---------------------------------------------------

function checkListOverflow(projectList) {
  toggleScrollBarVisibility(projectList);
}

function AddNewProject() {
  const projectForm = checkTargetElementExistence('#add-project-form');

  const projectNameInput = projectForm.querySelector('#project-name-input');
  const projectName = projectNameInput.value.trim().toLowerCase();

  if (!projectName) return alert('Enter Project Name');
  projectForm.reset();

  const projectObject = projectFactory(projectName);
  data.addProject(projectObject); 

  const projectList = checkTargetElementExistence('#project-nav-list');
  updateProjectList(data, projectList);

  checkListOverflow(projectList);

  emitProjectFormVisibilityToggle(); 

  formComponentState.projectFormState = 'hidden';

  updateUserDataLocalStorage();
}

function toggleProjectAddEvent(formState) {
  if (formState === 'visible') {
    events.on(ADD_NEW_PROJECT, AddNewProject);
  } else if (formState === 'closing') {
    events.off(ADD_NEW_PROJECT, AddNewProject);
  }
} 

function emitInitializeProject() {
  events.emit(ADD_NEW_PROJECT);
}

function toggleProjectAddButtonListener(formState) {
  const projectAddButton = checkTargetElementExistence('#add-project-button');

  if (formState === 'visible') {
    projectAddButton.addEventListener('click', emitInitializeProject);
  } else if (formState === 'closing') {
    projectAddButton.removeEventListener('click', emitInitializeProject);
  }

}

function handleProjectAddButton(formState) {
  toggleProjectAddButtonListener(formState);
  toggleProjectAddEvent(formState);
}

export { handleProjectAddButton , updateProjectList };