function userData() {
  const encapsulatedProjectArray = [];
  let savedTheme = null;

  return {
    addTaskToProject: (projectName, task) => {
      const project = encapsulatedProjectArray.find(
        (project) => project.getName() === projectName
      );
      project.addTask(task);
    },
    getProjectArray: () => {
      return [...encapsulatedProjectArray];
    },
    setProjectArray: (projectArray) => {
      encapsulatedProjectArray.length = 0;
      projectArray.forEach((project) => encapsulatedProjectArray.push(project));
    },
    arrangeProjectArray: (callback) => {
      return [...encapsulatedProjectArray].filter(callback);
    },
    getProjectArrayLength: () => {
      return encapsulatedProjectArray.length;
    },
    addProject: (project) => {
      encapsulatedProjectArray.push(project);
    },
    deleteProject: (project) => {
      encapsulatedProjectArray.splice(
        encapsulatedProjectArray.indexOf(project),
        1
      );
    },
    getAllTasks: () => {
      return encapsulatedProjectArray.flatMap((project) =>
        project.getTaskArray()
      );
    },
    getProjectObject: (projectName) => {
      return encapsulatedProjectArray.find(
        (project) => project.getName() === projectName
      );
    },
    setSavedTheme: (theme) => {
      savedTheme = theme;
    },
    getSavedTheme: () => {
      return savedTheme;
    },
  };
}

export const data = userData();
