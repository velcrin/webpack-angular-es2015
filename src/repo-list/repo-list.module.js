import material from 'angular-material';
import 'angular-material/angular-material.min.css';
import angular from 'angular';
import RepoList from './repo-list.directive.js';

export default angular.module('repo-list', [material])
    .directive(RepoList.selector(), () => new RepoList())
    .name;
