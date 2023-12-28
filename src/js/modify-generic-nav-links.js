function modifyGenericNavLinks() {
  const genericNavLinks = document.querySelectorAll('.nav-list-container:not(#project-nav-list-container) .nav-link');

  genericNavLinks.forEach((navLink) => {
    if (navLink.getAttribute('data-page-name') === 'all tasks'
      || navLink.getAttribute('data-page-name') === 'today'
      || navLink.getAttribute('data-page-name') === 'next 7 days')
    {
      navLink.setAttribute('data-arrange-method', 'sort');
    } else if (navLink.getAttribute('data-page-name') === 'priorities') {
      navLink.setAttribute('data-arrange-method', 'filter');
    }
  });
}

export { modifyGenericNavLinks };