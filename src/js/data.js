function projectsEncapsulation() {
  const encapsulatedProjectArray = [];

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
  };
}

export const data = projectsEncapsulation();
