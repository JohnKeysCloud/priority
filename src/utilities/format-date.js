function formatDate(dateString, options) {
  let date = new Date(dateString);
  let dateOptions;

  if (options) {
    dateOptions = options;
  }
  else {
    dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
  }

  return date.toLocaleDateString('en-us', dateOptions);
}

export { formatDate }