var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html'
        })
        .when('/user', {
            templateUrl: 'userPage.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})

app.controller('loginCtrl', function($scope, $location) {
    $scope.submit = function() {
        var username = $scope.username;
        var password = $scope.password;
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $location.path('/dashboard');
        } else if ($scope.username == 'user' && $scope.password == 'user') {
            $location.path('/user');
        } else {
            alert('Wrong Username and Password');
        }
    }
})