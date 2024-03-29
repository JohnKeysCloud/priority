function toggleDueDateInputType(e) {
  if (e.target.value) return;

  if (e.target.type === 'text') {
    e.target.type = 'date';

  } else if (e.target.type === 'date') {
    e.target.type = 'text';
  }
}

function modifyDueDateInput(dueDateInput, formState) {
  if (formState === 'visible') {
    dueDateInput.addEventListener('blur', toggleDueDateInputType);
    dueDateInput.addEventListener('focus', toggleDueDateInputType);
  } else if (formState === 'closing') {
    dueDateInput.removeEventListener('blur', toggleDueDateInputType);
    dueDateInput.removeEventListener('focus', toggleDueDateInputType);
  }
}

export { modifyDueDateInput };
