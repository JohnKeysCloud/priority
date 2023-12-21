function projectFactory(name) {
  if (typeof name !== 'string') {
    throw new Error('name must be a string');
  }

  let state = {
    name: name,
    tasks: [],
  }
  return {
    addTask: function (task) {
      task.setProject(this);
      state.tasks.push(task);
    },
    getTasks: () => {
      return state.tasks;
    },
    getName: () => {
      return state.name;
    },
    setName: (name) => {
      state.name = name;
    },
  }
}

function taskFactory(title, details, dueDate, priority) {
  if (
    typeof title !== 'string' ||
    typeof details !== 'string' ||
    typeof dueDate !== 'string' ||
    typeof priority !== 'string'
  ) {
    throw new Error(
      'Title, details, dueDate, and priority must all be strings'
    );
  }

  let state = {
    title: title,
    details: details,
    dueDate: dueDate,
    priority: priority,
    completed: false,
    project: null,
  }
  return {
    getTitle: () => {
      return state.title;
    },
    setTitle: (title) => {
      state.title = title;
    },
    getDetails: () => {
      return state.details;
    },
    setDetails: (details) => {
      state.details = details;
    },
    getDueDate: () => {
      return state.dueDate;
    },
    setDueDate: (dueDate) => {
      state.dueDate = dueDate;
    },
    getPriority: () => {
      return state.priority;
    },
    setPriority: (priority) => {
      state.priority = priority;
    },
    getCompleted: () => {
      return state.completed;
    },
    setCompleted: (completed) => {
      state.completed = completed;
    },
    setProject: function (project) {
      state.project = project;
    },
    getProject: function () {
      return state.project;
    },
  };
}

// const project1 = projectFactory('project1');
// const project2 = projectFactory('project2');

// const task1 = taskFactory('task1', 'details1', 'dueDate1', 'priority1');
// const task2 = taskFactory('task2', 'details2', 'dueDate2', 'priority2');
// const task3 = taskFactory('task3', 'details3', 'dueDate3', 'priority3');

// project1.addTask(task1);
// project1.addTask(task2);
// project2.addTask(task3);

// console.log(project1.getTitle());
// console.log(project2.getTitle());

// let projectOneTasks = []
// for (let i = 0; i < project1.getTasks().length; i++) {
//   projectOneTasks.push(project1.getTasks()[i]);
// }
// console.log(projectOneTasks);

// // console.log(project2.getTasks());

export { projectFactory, taskFactory };