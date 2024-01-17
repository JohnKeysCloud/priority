
// * EVENT NAMES
import { ADD_NEW_TASK } from '../eventNames';

// * UTITLIIES
import { events } from '../../utilities/pubsub';

// > --------------------------------------------------------------

function emitInitializeTaskViaInput(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    events.emit(ADD_NEW_TASK);
  }
}

function toggleTaskAddInputListeners(taskAddInputs, formState) {
  if (formState === 'visible') {
    taskAddInputs.forEach((input) => {
      input.addEventListener('keydown', emitInitializeTaskViaInput);
    });
  } else if (formState === 'closing') {
    taskAddInputs.forEach((input) => {
      input.removeEventListener('keydown', emitInitializeTaskViaInput);
    });
  }
}

function handleTaskAddInputs(addTaskFormContainer, formState) {
  const taskAddInputs = addTaskFormContainer.querySelectorAll('.add-task-input');
  toggleTaskAddInputListeners(taskAddInputs, formState);
}

export { handleTaskAddInputs };
