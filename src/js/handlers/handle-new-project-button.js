// * EVENT NAMES
import { TOGGLE_ADD_PROJECT_FORM } from "../eventNames";

// * HANDLERS
import { handleProjectAddButton } from "./handle-project-add-button";
import { handleProjectAddInput } from './handle-project-add-input';
import { handleProjectCancelButton } from "./handle-project-cancel-button";

// * STATES
import { navState } from "../../components/zig-zag-nav/handle-zig-zag-nav";

// * UTILITIES
import { checkTargetElementExistence } from "../../utilities/check-target-element-existence";
import { clearTextInput } from "../../utilities/clear-text-input";
import { events } from "../../utilities/pubsub";
import { setAttributes } from "../../utilities/set-attributes";

// > ---------------------------------------------------

let formComponentState = {
  projectFormState: 'hidden',
}

function setDisplayNone(event) {
  formComponentState.projectFormState = 'hidden';

  const targetElement = event.target;
  targetElement.setAttribute('data-hidden', 'true');
  targetElement.removeEventListener('animationend', setDisplayNone);
}

function animatePreDisplayNone(targetElement) {
  formComponentState.projectFormState = 'closing';

  targetElement.addEventListener('animationend', setDisplayNone); 
}

function toggleAddProjectForm() {
  const projectFormContainer = checkTargetElementExistence(
    '#add-project-form'
  );
  const projectFormState = formComponentState.projectFormState;
  const projectNameInput = checkTargetElementExistence('#project-name-input');

  if (projectFormState === 'hidden') {
    setAttributes(projectFormContainer, {
      'data-hidden': 'false',
      'aria-label': 'visible',
    });

    formComponentState.projectFormState = 'visible';
  } else if (projectFormState === 'visible') {
    setAttributes(projectFormContainer, {
      'data-hidden': 'closing',
      'aria-label': 'hidden',
    });

    animatePreDisplayNone(projectFormContainer);
    clearTextInput(projectNameInput);
  }
  
  handleProjectAddInput(projectNameInput, formComponentState.projectFormState);
  handleProjectAddButton(formComponentState.projectFormState);
  handleProjectCancelButton(formComponentState.projectFormState);
}

function toggleNewProjectButtonEventPublishing(navState) {
  if (navState.open === true) {
    events.on(TOGGLE_ADD_PROJECT_FORM, toggleAddProjectForm);
  } else if (navState.open === false) {
    events.off(TOGGLE_ADD_PROJECT_FORM, toggleAddProjectForm);
  }
}

function emitProjectFormVisibilityToggle() {
  events.emit(TOGGLE_ADD_PROJECT_FORM);
}

function handleNewProjectButton() {
  const newProjectButton = checkTargetElementExistence('#new-project-button');

  if (navState.open === true) {
    newProjectButton.addEventListener('click', emitProjectFormVisibilityToggle);
  } else if (navState.open === false) {
    newProjectButton.removeEventListener('click', emitProjectFormVisibilityToggle);
  }

  toggleNewProjectButtonEventPublishing(navState);
}

export { emitProjectFormVisibilityToggle, handleNewProjectButton, formComponentState };