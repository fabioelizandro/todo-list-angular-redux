import angular from 'angular';
import appComponent from './app';
import taskListComponent from './task-list';
import taskItemComponent from './task-item';

const rootModule = angular.module('root', []);

appComponent(rootModule);
taskListComponent(rootModule);
taskItemComponent(rootModule);

export default rootModule;