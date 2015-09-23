import template from './repo-list.html';
import controller from './repo-list.controller.js';

export default class RepoList {

    static selector() {
        return 'repoList';
    }

    constructor() {
        this.template = template;
        this.controller = controller;
        this.controllerAs = 'list';
        this.scope = {};
        this.bindToController = {
            selectedRepo: '='
        };
    }
}