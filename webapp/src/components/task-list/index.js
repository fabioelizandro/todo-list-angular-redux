import template from './template';
import { selectTasks } from 'state/task/selectors';

controller.$inject = ['store'];
function controller(store) {
  const $ctrl = this;

  $ctrl.tasks = selectTasks(store.getState());

  store.subscribe(() => {
    $ctrl.tasks = selectTasks(store.getState());
  });
}

export default module => {
  module.component('taskList', {
    template,
    controller
  });
};
