import { projectFactory, taskFactory } from '../logic.js';

// > --------------------------------------------------------------

function getRevertedProjectArray(projectList) {
  const projectArray = [];

  projectList.forEach((project) => {
    const projectObject = projectFactory(project.name);
    const taskArray = project.taskArray;

    taskArray.forEach((task) => {
      const taskObject = taskFactory(
        task.name,
        project.name,
        task.dueDate,
        task.details,
        task.priority,
        task.completed
      );

      projectObject.addTask(taskObject);
    });

    projectArray.push(projectObject);
  });

  return projectArray;
}

function retrieveProjectArrayFromLocalStorage() {
  const projectArrayParsed = JSON.parse(localStorage.getItem('projectArray'));
  const revertedProjectArray = getRevertedProjectArray(projectArrayParsed);

  return revertedProjectArray;
}

export { retrieveProjectArrayFromLocalStorage };
