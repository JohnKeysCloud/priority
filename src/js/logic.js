// * DEPENDENCIES
import { parseISO, compareAsc } from 'date-fns';

// > --------------------------------------------------------------

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
    sortTaskArray: () => {
      const taskArray = state.tasks;

      taskArray.sort((a, b) => {
        // * callback is a function that returns a date string

        const dateStringA = a.getDueDate();
        const dateStringB = b.getDueDate();

        // * parseISO converts the date string into a Date object
        const dateA = parseISO(dateStringA);
        const dateB = parseISO(dateStringB);

        // * compareAsc compares the two dates and returns a number
        return compareAsc(dateA, dateB);
      });
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
    getName: () => {
      return state.name;
    },
    setName: (name) => {
      state.name = name;
    },
    getType: () => {
      return state.type;
    },
    addTask: function (task) {
      state.tasks.push(task);
    },
    deleteTask: function (task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    sortTaskArray: () => {
      const taskArray = state.tasks;

      taskArray.sort((a, b) => {
        // * callback is a function that returns a date string

        const dateStringA = a.getDueDate();
        const dateStringB = b.getDueDate();

        // * parseISO converts the date string into a Date object
        const dateA = parseISO(dateStringA);
        const dateB = parseISO(dateStringB);

        // * compareAsc compares the two dates and returns a number
        return compareAsc(dateA, dateB);
      });
    },
    getTaskArray: () => {
      return state.tasks;
    },
  };
}

function taskFactory(name, projectName, dueDate, details, priority = false, completed = false) {
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
    dueDate: dueDate,
    details: details,
    priority: priority,
    completed: completed,
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
    setCompleted: (boolean) => {
      state.completed = boolean;
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
