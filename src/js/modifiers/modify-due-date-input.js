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
    dueDateInput.addEventListener('focus', toggleDueDateInputType);
    dueDateInput.addEventListener('blur', toggleDueDateInputType);
  } else if (formState === 'closing') {
    dueDateInput.removeEventListener('focus', toggleDueDateInputType);
    dueDateInput.removeEventListener('blur', toggleDueDateInputType);
  }
}

export { modifyDueDateInput };
