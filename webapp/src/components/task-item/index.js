import template from './index.html';
import { markAsDone, markAsUndone } from 'state/task/actions';

controller.$inject = ['store'];
function controller(store) {
  const $ctrl = this;
  
  $ctrl.markAsDone = (taskId) => {
    store.dispatch(markAsDone(taskId));
  };

  $ctrl.markAsUndone = (taskId) => {
    store.dispatch(markAsUndone(taskId));
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
