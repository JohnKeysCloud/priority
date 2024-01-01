function linkObjectFactory(name, data) {
  let state = {
    name: name,
    tasks: data, // ? all tasks (array),
    type: 'link',
  };

  return {
    getName: () => {
      return state.name;
    },
    getType: () => {
      return state.type;
    },
    getShallowCopy: () => {
      return { ...state };
    },
    // TODO:
    arrangeTasks: (targetElement) => {
      if (targetElement.getAttribute('data-arrange-method') === 'sort') {
        // ! console.log('sort me');
      } else if (
        targetElement.getAttribute('data-arrange-method') === 'filter'
      ) {
        // ! console.log('filter me');
      }
    },
    getTaskArray: () => {
      return state.tasks;
    },
  };
}

function projectFactory(name) {
  if (typeof name !== 'string') {
    throw new Error('name must be a string');
  }

  let state = {
    name: name,
    tasks: [],
    type: 'project',
  };

  return {
    addTask: function (task) {
      state.tasks.push(task);
    },
    getTaskArray: () => {
      return state.tasks;
    },
    getName: () => {
      return state.name;
    },
    getType: () => {
      return state.type;
    },
    setName: (name) => {
      state.name = name;
    },
  };
}

function taskFactory(name, projectName, details, dueDate) {
  if (
    typeof name !== 'string' &&
    typeof details !== 'string' &&
    typeof dueDate !== 'string'
  ) {
    throw new Error('⚠️ name, details & due-date, must all be strings');
  }

  let state = {
    name: name,
    projectName: projectName,
    details: details,
    dueDate: dueDate,
    priority: false,
    completed: false,
  };
  return {
    getName: () => {
      return state.name;
    },
    setName: (name) => {
      state.name = name;
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
    setProjectName: function (projectName) {
      state.project = projectName;
    },
    getProjectName: function () {
      return state.projectName;
    },
  };
}

export { projectFactory, taskFactory, linkObjectFactory };
