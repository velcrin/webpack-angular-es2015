import './repo-details.style.css'
import template from './repo-details.html';

export default class RepoDetails {

    static selector() {
        return 'repoDetails';
    }

    constructor() {
        this.template = template;
        this.scope = {
            repo: '='
        };
    }
}