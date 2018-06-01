var myApp = angular.module('mainApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            template: 'Welcome User!'
        })
        .when('/anotherPage', {
            template: 'Welcome user, Again!'
        })
        .otherwise({
            redirectTo: '/'
        });
});