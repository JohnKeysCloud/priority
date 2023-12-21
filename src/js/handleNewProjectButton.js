// * UTILITIES
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";
import { events } from "../utilities/pubsub";
import { setAttributes } from "../utilities/set-attributes";

// * HANDLER FUNCTIONS
import { handleNewProjectCancelButton } from "./handleNewProjectCancelButton";
import { handleNewProjectAddButton } from "./handle-project-add-button";

function publishProjectButtonListener(targetElement) {
  events.on('toggleDisplayFormContainerVisibility', () => {
    const projectFormContainerHidden = targetElement.getAttribute('data-hidden');
    if (projectFormContainerHidden === 'true') {
      setAttributes(targetElement, {
        'data-hidden': 'false',
        'aria-label': 'visible',
      });
    } else if (projectFormContainerHidden === 'false') {
      setAttributes(targetElement, {
        'data-hidden': 'true',
        'aria-label': 'hidden',
      });  
    }
    handleNewProjectCancelButton();
    handleNewProjectAddButton(); 
  });
}

function emitPublishProjectButtonListener() {
  events.emit('toggleDisplayFormContainerVisibility');
}

function handleNewProjectButton() {
  const newProjectButton = document.getElementById('new-project-button');
  newProjectButton.addEventListener('click', emitPublishProjectButtonListener);

  const projectFormContainer = checkTargetElementExistence('#project-form-container');
  publishProjectButtonListener(projectFormContainer);
}

export { emitPublishProjectButtonListener, handleNewProjectButton };
