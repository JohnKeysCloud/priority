// * UTILITIES
import { addLinkToHead } from "../utilities/add-link-to-head";

// > ---------------------------------------------------

function injectStarMaterialIcon() {
  const href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
  const rel = 'stylesheet';

  addLinkToHead(href, rel);
}

export { injectStarMaterialIcon };