// * DATA
import { data } from "../data";

// * STATES
import { projectTaskListState } from "../handlers/handle-task-list-via-project";

// > --------------------------------------------------------------

function updateProjectTaskListState(projectName) {
  projectTaskListState.projectObject = data.getProjectObject(projectName);
}

export { updateProjectTaskListState };
