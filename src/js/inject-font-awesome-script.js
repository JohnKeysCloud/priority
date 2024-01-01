// * UTILITIES
import { addScriptToHead } from "../utilities/add-script-to-head";

// > ---------------------------------------------------

function injectFontAwesomeScript() {
  const iconScriptSource = 'https://kit.fontawesome.com/24176ab973.js';
  const attributes = {
    crossorigin: 'anonymous',
  };

  addScriptToHead(iconScriptSource, attributes);

}

export { injectFontAwesomeScript };