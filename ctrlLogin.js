var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
        })
        .when('/dashboard', {
            resolve: {
                "check": function($location, $rootScope) {
                    if (!$rootScope.$loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'dashboard.html'
        })
        .when('/user', {
            templateUrl: 'userPage.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})

app.controller('loginCtrl', function($scope, $location, $rootScope) {
    $scope.submit = function() {
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.$loggedIn = true;
            $location.path('/dashboard');
        } else if ($scope.username == 'user' && $scope.password == 'user') {
            $location.path('/user');
        } else {
            alert('Wrong Username and Password');
        }
    }
})