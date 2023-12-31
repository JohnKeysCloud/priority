// * EVENT NAMES
import { TOGGLE_ADD_PROJECT_FORM } from "./eventNames";

// * HANDLERS
import { handleProjectAddButton } from "./handle-project-add-button";
import { handleProjectCancelButton } from "./handle-project-cancel-button";

// * STATES
import { navState } from "../components/zig-zag-nav/handle-zig-zag-nav";

// * UTILITIES
import { events } from "../utilities/pubsub";
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";
import { clearTextInput } from "../utilities/clear-text-input";
import { setAttributes } from "../utilities/set-attributes";

// > ---------------------------------------------------

function setDisplayNone(event) {
  const targetElement = event.target;
  targetElement.setAttribute('data-hidden', 'true');
  targetElement.removeEventListener('animationend', setDisplayNone);
}

function animatePreDisplayNone(targetElement) {
  targetElement.addEventListener('animationend', setDisplayNone); 
}

function toggleAddProjectForm() {
  const projectFormContainer = checkTargetElementExistence(
    '#project-form-container'
  );

  const isFormHidden = projectFormContainer.getAttribute('data-hidden');
  let formState = isFormHidden === 'true' ? 'hidden' : 'visible';

  if (formState === 'hidden') {
    setAttributes(projectFormContainer, {
      'data-hidden': 'false',
      'aria-label': 'visible',
    });
    formState = 'visible';
  } else if (formState === 'visible') {
    setAttributes(projectFormContainer, {
      'data-hidden': 'closing',
      'aria-label': 'hidden',
    });

    animatePreDisplayNone(projectFormContainer);

    const projectNameInput = checkTargetElementExistence('#project-name-input');
    clearTextInput(projectNameInput);

    formState = 'hidden';
  }

  handleProjectAddButton(formState);
  handleProjectCancelButton(formState);
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
  const newProjectButton = document.getElementById('new-project-button');

  if (navState.open === true) {
    newProjectButton.addEventListener('click', emitProjectFormVisibilityToggle);
  } else if (navState.open === false) {
    newProjectButton.removeEventListener('click', emitProjectFormVisibilityToggle);
  }

  toggleNewProjectButtonEventPublishing(navState);
}

export { emitProjectFormVisibilityToggle, handleNewProjectButton };