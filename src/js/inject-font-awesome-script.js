// * UTILITIES
import { addScriptToHead } from "../utilities/html-script-injection";

// > ---------------------------------------------------

function injectFontAwesomeScript() {
  const iconScriptSource = 'https://kit.fontawesome.com/24176ab973.js';
  const attributes = {
    crossorigin: 'anonymous',
  };

  addScriptToHead(iconScriptSource, attributes);

}

export { injectFontAwesomeScript };