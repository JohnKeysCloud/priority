// * MODIFIERS
import { modifyGenericNavLinks } from './modify-generic-nav-links';
import { modifySecondNavContainer } from './modify-second-nav-container';

// > --------------------------------------------------------------

function modifyDOM() {
  modifySecondNavContainer();
  modifyGenericNavLinks();
}

export { modifyDOM };
