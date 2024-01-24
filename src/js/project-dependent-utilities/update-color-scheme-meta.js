function updateColorSchemeMeta(theme) {
  let metaColorScheme = document.head.querySelector(
    'meta[name="color-scheme"]'
  );
  if (!metaColorScheme) {
    metaColorScheme = document.createElement('meta');
    metaColorScheme.setAttribute('name', 'color-scheme');
    document.head.appendChild(metaColorScheme);
  }
  metaColorScheme.setAttribute(
    'content',
    theme === 'light' ? 'light dark' : 'dark light'
  );
}

export { updateColorSchemeMeta };