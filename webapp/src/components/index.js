import angular from 'angular';
import appComponent from './app';
import taskListComponent from './task-list';

const rootModule = angular.module('root', []);

appComponent(rootModule);
taskListComponent(rootModule);

export default rootModule;