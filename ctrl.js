var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page.html'
        })
        .when('/aceh', {
            templateUrl: 'page1.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});