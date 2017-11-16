import angular from 'angular';
import 'angular-mocks';
import jQuery from 'jquery';
import { createStore } from 'redux';
import taskItemComponent from 'components/task-item';
import { markAsDone, markAsUndone } from 'state/task/actions';

const store = { dispatch: jest.fn() };

const compile = ({ task }) => {
  let element = null;

  angular.mock.inject(($compile, $rootScope) => {
    const rawElement = jQuery(`
     <task-item 
      id="task.id" 
      description="task.description"
      done="task.done">
     </taks-item>
    `);

    $rootScope.task = task;
    element = $compile(rawElement)($rootScope);
    $rootScope.$apply();
  });

  return element;
};

describe('<task-item />', () => {
  beforeEach(() => {
    const testModule = angular.module('test', []);
    testModule.service('store', () => store);
    taskItemComponent(testModule);
    angular.mock.module('test');
  });

  it('renders task description', () => {
    const task = { id: 1, description: 'My description', done: false };
    const element = compile({ task });
    expect(element.text()).toContain('My description');
  });

  describe('done', () => {
    it('renders only done button when is undone', () => {
      const task = { id: 1, description: 'My description', done: false };
      const element = compile({ task });
      expect(element.find('button').text().trim()).toEqual('Done');
    });

    it('renders only undone button when is done', () => {
      const task = { id: 1, description: 'My description', done: true };
      const element = compile({ task });
      expect(element.find('button').text().trim()).toEqual('Undone');
    });

    it('dispatches mark as done action for the task when is undone', () => {
      const task = { id: 1, description: 'My description', done: false };
      const element = compile({ task });
      jQuery(element.find('button')).click();
      expect(store.dispatch).toHaveBeenCalledWith(markAsDone(1));
    });

    it('dispatches mark as undone action for the task when is done', () => {
      const task = { id: 1, description: 'My description', done: true };
      const element = compile({ task });
      jQuery(element.find('button')).click();
      expect(store.dispatch).toHaveBeenCalledWith(markAsUndone(1));
    });
  });
});