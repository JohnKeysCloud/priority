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
    getTaskArray: () => {
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

function taskFactory(project, title, details, dueDate) {
  if (
    typeof title !== 'string' ||
    typeof details !== 'string' ||
    typeof dueDate !== 'string'
  ) {
    throw new Error(
      '⚠️ Title, details & due-date, must all be strings'
    );
  }

  let state = {
    project: project,
    title: title,
    details: details,
    dueDate: dueDate,
    priority: false,
    completed: false,
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

export { projectFactory, taskFactory };