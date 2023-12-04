function handleNewProjectButton() {
  const newProjectButton = document.getElementById('new-project-button');

  newProjectButton.addEventListener('click', () => {
    const projectFormContainer = document.getElementById('project-form-container');
    const projectFormContainerHidden = projectFormContainer.getAttribute('data-hidden');

  // TODO:
  // ? refactor below to account for animating from display none 

  projectFormContainerHidden === 'true'
    ? projectFormContainer.setAttribute('data-hidden', false)
    : projectFormContainer.setAttribute('data-hidden', true);
  });
}

export { handleNewProjectButton };