function linkObjectFactory(name, data) { // abstract out targetElement.. pass in name instead
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
      task.setProject(this);
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

function taskFactory(project, title, details, dueDate) {
  if (
    typeof title !== 'string' ||
    typeof details !== 'string' ||
    typeof dueDate !== 'string'
  ) {
    throw new Error('⚠️ Title, details & due-date, must all be strings');
  }

  let state = {
    project: project,
    title: title,
    details: details,
    dueDate: dueDate,
    priority: false,
    completed: false,
  };
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

export { projectFactory, taskFactory, linkObjectFactory };
