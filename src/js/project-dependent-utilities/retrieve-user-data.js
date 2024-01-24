// * DATA 
import { data } from '../data.js';

// * PROJECT_DEPENDENT_UTILITIES
import { retrieveProjectArrayFromLocalStorage } from './retrieve-project-array-from-local-storage.js';

// * UTILITITES
import { checkStorageAvailability } from '../../utilities/check-storage-availability.js';

// > --------------------------------------------------------------

let localStorageState = {
  projectArrayItemExists: null,
  savedThemeItemExists: null,
};

function retrieveUserData() {
  if (!checkStorageAvailability('localStorage')) return;  

  const localStorageItems = {
    projectArray: localStorage.getItem('projectArray'),
    savedTheme: localStorage.getItem('savedTheme'),
  };

  if (localStorageItems.projectArray) {
    const projectArray = retrieveProjectArrayFromLocalStorage();
    data.setProjectArray(projectArray);
    localStorageState.projectArrayItemExists = true;
  }

  if (localStorageItems.savedTheme) {
    const theme = localStorageItems.savedTheme;
    
    data.setSavedTheme(theme);    
    localStorageState.savedThemeItemExists = true;
  }
}

export { retrieveUserData, localStorageState };

