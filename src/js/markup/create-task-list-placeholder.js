function createTaskListPlaceholder() {
  const placeholderText = document.createElement('p');
  placeholderText.setAttribute('id', 'placeholder-text');
  placeholderText.classList.add('hvr-wobble-vertical');
  placeholderText.textContent = 'create a project in the above menu';

  const placeholderContainer = document.createElement('li');
  placeholderContainer.setAttribute('id', 'placeholder-container');
  placeholderContainer.appendChild(placeholderText);

  return placeholderContainer;
}

export { createTaskListPlaceholder };
