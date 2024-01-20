function checkTaskListPopulation(taskListElement) {
  const taskListFirstChild = taskListElement.firstChild; // ? taskListChildren[0] || null
  const placeholderExists =
    taskListFirstChild &&
    taskListFirstChild.hasAttribute('id', 'placeholder-container');

  if (placeholderExists || !taskListFirstChild) {
    return false;
  } else {
    return true;
  }
}

export { checkTaskListPopulation };