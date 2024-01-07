// * UTILITIES
import { scrollElementContent } from "../utilities/scroll-element-content";

// > --------------------------------------------------------------

function getContainersWithOverflow(containers) {
  const containersWithOverflow = [];

  containers.forEach((container) => {
    const containerWidth = container.clientWidth;
    const containerScrollWidth = container.scrollWidth;

    if (containerWidth < containerScrollWidth) {
      containersWithOverflow.push(container);
    }
  });

  return containersWithOverflow;
}

function enableScrollAnimation() {
  const taskDetailContainers = document.querySelectorAll('.task-item-details');

  const containersWithOverflow = getContainersWithOverflow(taskDetailContainers);

  containersWithOverflow.forEach((container) => {
    scrollElementContent(container, 'backward', 0.5);
  });
}

export { enableScrollAnimation };
