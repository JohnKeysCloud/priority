// * DATA
import { data } from '../data';

// * UTILITIES
import { updateLocalStorage } from '../../utilities/update-local-storage';

// > --------------------------------------------------------------

function getFormattedData() {
  const projectArray = data.getProjectArray();
  const formattedData = [];

  projectArray.forEach((project) => {    
    const taskArray = project.getTaskArray();
    const projectObjectTaskArray = [];
    
    taskArray.forEach((task) => {
      const taskObject = {
        name: task.getName(),
        details: task.getDetails(),
        dueDate: task.getDueDate(),
        priority: task.getPriority(),
        completed: task.getCompleted(),
      };

      projectObjectTaskArray.push(taskObject);
    });
    
    const projectObject = {
      name: project.getName(),
      taskArray: projectObjectTaskArray,
      type: 'project',
    };

    formattedData.push(projectObject);
  });

  return JSON.stringify(formattedData);
}

function updateUserDataLocalStorage() {
  const localStorageKey = 'projectArray';
  let localStorageValue = getFormattedData();
  
  updateLocalStorage(localStorageKey, localStorageValue);
}

export { updateUserDataLocalStorage };