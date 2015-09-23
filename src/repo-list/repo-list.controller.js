export default class RepoListController {

    constructor($http) {
        $http.get('https://api.github.com/users/velcrin/repos').then(({data}) => {
            this.repos = data;
        });
    }

    selectRepo(repo) {
        this.selectedRepo = repo;
    }
}