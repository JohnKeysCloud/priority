// export const projectArray = [];

// function getTodaysDate() {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const day = date.getDate();

//   return new Date(year, month, day);
// }


function projectsEncapsulation() {
  const encapsulatedProjectArray = [];
  
  return {    
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
      encapsulatedProjectArray.splice(encapsulatedProjectArray.indexOf(project), 1);
    },
    getAllTasks: () => {
      return encapsulatedProjectArray.flatMap((project) => project.getTaskArray());
    },
    arrangeTasks: () => {
      // if complete, move to bottom
      // if priority, move to top
      // else sort by due date
    }
  };
}


export const data = projectsEncapsulation();
