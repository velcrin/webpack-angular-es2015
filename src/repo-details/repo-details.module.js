import material from 'angular-material';
import 'angular-material/angular-material.min.css';
import angular from 'angular';
import RepoDetails from './repo-details.directive.js';

export default angular.module('repo-details', [material])
    .directive(RepoDetails.selector(), () => new RepoDetails())
    .name;
