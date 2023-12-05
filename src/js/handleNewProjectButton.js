import { events } from "../utilities/pubsub";
import { checkTargetElementExistence } from "../utilities/check-target-element-existence";
import { handleNewProjectCancelButton } from "./handleNewProjectCancelButton";

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

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

export { handleNewProjectButton, emitPublishProjectButtonListener };