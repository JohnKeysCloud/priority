// * MODIFIERS
import { modifySecondNavContainer } from "./modify-second-nav-container";
import { modifyGenericNavLinks } from "./modify-generic-nav-links";

// > --------------------------------------------------------------

function modifyDOM() {
  modifySecondNavContainer();
  modifyGenericNavLinks();
}

export { modifyDOM };
