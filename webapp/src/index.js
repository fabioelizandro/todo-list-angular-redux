import './index.scss';
import angular from 'angular';
import rootModule from './components';
import createStore from './state/create-store';

const store = createStore();
const rootElement = document.getElementById('root');

rootModule.service('store', () => store);
rootElement.appendChild(document.createElement('app'));
angular.bootstrap(rootElement, [rootModule.name]);