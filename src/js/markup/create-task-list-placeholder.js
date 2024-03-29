function createTaskListPlaceholder() {
  const placeholderText = document.createElement('p');
  placeholderText.classList.add('hvr-wobble-vertical');
  placeholderText.setAttribute('id', 'placeholder-text');
  placeholderText.textContent = 'nothing to see here...';

  const placeholderContainer = document.createElement('li');
  placeholderContainer.setAttribute('id', 'placeholder-container');
  placeholderContainer.appendChild(placeholderText);

  return placeholderContainer;
}

export { createTaskListPlaceholder };
