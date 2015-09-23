import angular from 'angular';
import 'angular-mocks';
import Controller from './repo-list.controller.js';

describe('Repo list controller', () => {

    var $httpBackend, $http;

    beforeEach(angular.mock.inject((_$httpBackend_, _$http_) => {
        $httpBackend = _$httpBackend_;
        $http = _$http_;
    }));

    it('should expose the repo list', () => {
        $httpBackend.whenGET('https://api.github.com/users/velcrin/repos')
            .respond(['repo1', 'repo2']);

        let controller = new Controller($http);
        $httpBackend.flush();

        expect(controller.repos).toEqual(['repo1', 'repo2']);
    });
});