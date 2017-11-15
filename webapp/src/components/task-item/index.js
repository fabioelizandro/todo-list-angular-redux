import template from './index.html';
import { markAsDone } from 'state/task/actions';

controller.$inject = ['store'];
function controller(store) {
  const $ctrl = this;
  
  $ctrl.markAsDone = (taskId) => {
    store.dispatch(markAsDone(taskId));
  };
};

export default module => {
  module.component('taskItem', {
    template,
    controller,
    bindings: {
      id: '<',
      description: '<',
      done: '<'
    }
  });
};
