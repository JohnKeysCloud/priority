function createDeleteConfirmationDialog() {
  const heading = document.createElement('h2');
  heading.classList.add('delete-confirmation-heading');
  heading.textContent = 'please confirm:'; 

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-confirmation-button', 'bubble-button');
  deleteButton.textContent = 'delete';

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('delete-confirmation-button', 'bubble-button');
  cancelButton.textContent = 'cancel';

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('delete-confirmation-button-container');
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(cancelButton); 

  const deleteConfirmationModal = document.createElement('div');
  deleteConfirmationModal.classList.add('delete-confirmation-modal');
  deleteConfirmationModal.appendChild(heading);
  deleteConfirmationModal.appendChild(buttonContainer);

  const deleteConfirmationDialog = document.createElement('dialog');
  deleteConfirmationDialog.classList.add('delete-confirmation-dialog');
  deleteConfirmationDialog.setAttribute('aria-hidden', 'true');
  deleteConfirmationDialog.appendChild(deleteConfirmationModal);

  return deleteConfirmationDialog;
}

export { createDeleteConfirmationDialog };