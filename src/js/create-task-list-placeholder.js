function createTaskListPlaceholder() {
  const placeholderText = document.createElement('p');
  placeholderText.setAttribute('id', 'placeholder-text');
  placeholderText.classList.add('hvr-wobble-vertical');
  placeholderText.textContent = 'Set your priorities in menu above.';

  const placeholderContainer = document.createElement('div');
  placeholderContainer.setAttribute('id', 'placeholder-container');
  placeholderContainer.appendChild(placeholderText);

  return placeholderContainer;
}

export { createTaskListPlaceholder };
