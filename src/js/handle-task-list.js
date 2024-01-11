import { enableScrollAnimations } from './enable-scroll-animation';
import { handleTaskItems } from './handle-task-items';

// > --------------------------------------------------------------

function handleTaskList(taskListElement) {
  const taskListChildren = taskListElement.children;
  const taskListFirstChild = taskListChildren[0];

  // TODO: get state of taskList events... if events from either of the functions enableScrollAnimations or handleTaskItems are published and or have listeners, then remove them all if the taskListChildren.length is 0

  if (
    taskListFirstChild &&
    taskListFirstChild.hasAttribute('id', 'placeholder-container')
  )
    return;

  if (taskListChildren.length > 0) {
    enableScrollAnimations();
    handleTaskItems(taskListElement);
  }
}

export { handleTaskList };