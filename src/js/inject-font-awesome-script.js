// * UTILITIES
import { addScriptToHead } from "../utilities/add-script-to-head";

// > ---------------------------------------------------

function injectFontAwesomeScript() {
  const source = 'https://kit.fontawesome.com/24176ab973.js';
  const attributes = {
    crossorigin: 'anonymous',
  };

  addScriptToHead(source, attributes);

}

export { injectFontAwesomeScript };