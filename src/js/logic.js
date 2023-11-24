
// 2 inputs

// 1.project name 
// which will generate a project list element in the project list
// clicking this project list element will display in the main section a list of all the todos in that project
// as well as a form to add a new todo to that project [title, details(optional), date, checkbox for important]

// all projects will be stored in an array of objects

// clicking all tasks will display all todos in the main section date sorted
// clicking today will display all todos with a date of today in the main section
// clicking this week will display all todos with a date of this week in the main section
// clicking important will display all todos with the important checkbox checked during creation in the main section


// template Object


const projects = {
  'default': {
    title: 'default',
    tasks: [],
  },

  addTask: function (task) {
    this.tasks.push(task);
  }

  

};

