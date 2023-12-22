// * EVENT NAMES
import { TOGGLE_ADD_PROJECT_FORM } from "../js/eventNames";

// * HANDLER FUNCTIONS
import { handleProjectAddButton } from "./handle-project-add-button";
import { handleProjectCancelButton } from "./handle-project-cancel-button";

// * UTILITIES
import { events } from "../utilities/pubsub";
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";
import { setAttributes } from "../utilities/set-attributes";

function setDisplayNone(event) {
  const targetElement = event.target;
  targetElement.setAttribute('data-hidden', 'true');
  targetElement.removeEventListener('animationend', setDisplayNone);
}

function animatePreDisplayNone(targetElement) {
  targetElement.addEventListener('animationend', setDisplayNone); 
}

function publishProjectButtonListener(targetElement) {
  events.on(TOGGLE_ADD_PROJECT_FORM, () => {
    const isFormHidden = targetElement.getAttribute('data-hidden');
    let formState = (isFormHidden === 'true') ? 'hidden' : 'visible';

    if (formState === 'hidden') {
      setAttributes(targetElement, {
        'data-hidden': 'false',
        'aria-label': 'visible',
      });
      formState = 'visible';
    } else if (formState === 'visible') {
      setAttributes(targetElement, {
        'data-hidden': 'closing',
        'aria-label': 'hidden',
      });  

      animatePreDisplayNone(targetElement);
      
      formState = 'hidden';
    }
    
    handleProjectAddButton(formState); 
    handleProjectCancelButton(formState);
  });
}

function toggleProjectFormVisibility() {
  events.emit(TOGGLE_ADD_PROJECT_FORM);
}

function handleNewProjectButton() {
  const newProjectButton = document.getElementById('new-project-button');
  newProjectButton.addEventListener('click', toggleProjectFormVisibility);

  const projectFormContainer = checkTargetElementExistence('#project-form-container');
  publishProjectButtonListener(projectFormContainer);
}

export { toggleProjectFormVisibility, handleNewProjectButton };
