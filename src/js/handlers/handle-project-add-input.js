// * EVENT NAMES
import { ADD_NEW_PROJECT } from "../eventNames";

// * UTILITIES
import { events } from "../../utilities/pubsub";

// > --------------------------------------------------------------

function emitInitializeProjectViaInput(event) {  
  if (event.key === 'Enter') {
    event.preventDefault(); 
    events.emit(ADD_NEW_PROJECT);
  }
}

function toggleProjectAddInputListener(projectNameInput, projectFormState) {
  if (projectFormState === 'visible') {
    projectNameInput.addEventListener('keydown', emitInitializeProjectViaInput);
  } else if (projectFormState === 'closing') {
    projectNameInput.removeEventListener('keydown', emitInitializeProjectViaInput);
  }
}

function handleProjectAddInput(projectNameInput, projectFormState) {
  toggleProjectAddInputListener(projectNameInput, projectFormState);
}

export { handleProjectAddInput };