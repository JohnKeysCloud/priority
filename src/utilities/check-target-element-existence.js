function checkTargetElementExistence(selector, callback) {
  const targetElement = document.querySelector(selector);
  
  if (!targetElement) {
    console.error(`Element not found for selector: ${selector}`);
    return;
  }

  if (callback) {
    callback(targetElement);
    return;
  }  
}

export { checkTargetElementExistence };