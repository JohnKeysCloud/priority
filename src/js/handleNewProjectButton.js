// * UTILITIES
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";
import { events } from "../utilities/pubsub";
import { setAttributes } from "../utilities/set-attributes";

// * HANDLER FUNCTIONS
import { handleNewProjectCancelButton } from "./handleNewProjectCancelButton";

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
  });
}

function emitPublishProjectButtonListener() {
  events.emit('toggleDisplayFormContainerVisibility');

  handleNewProjectCancelButton();
}

function handleNewProjectButton() {
  const newProjectButton = document.getElementById('new-project-button');

  checkTargetElementExistence('#project-form-container', publishProjectButtonListener);

  newProjectButton.addEventListener('click', emitPublishProjectButtonListener);
}

export { emitPublishProjectButtonListener, handleNewProjectButton };
