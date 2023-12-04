function projectFactory(title) {
  if (typeof title !== 'string') {
    throw new Error('Title must be a string');
  }

  let state = {
    title: title,
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
    getTitle: () => {
      return state.title;
    },
    setTitle: (title) => {
      state.title = title;
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

const project1 = projectFactory('project1');
const project2 = projectFactory('project2');

const task1 = taskFactory('task1', 'details1', 'dueDate1', 'priority1');
const task2 = taskFactory('task2', 'details2', 'dueDate2', 'priority2');
const task3 = taskFactory('task3', 'details3', 'dueDate3', 'priority3');

project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

console.log(project1.getTitle());
console.log(project2.getTitle());

console.log(project1.getTasks());
console.log(project2.getTasks());