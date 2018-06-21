var app = angular.module('mainApp', []);

app.controller('app', function($scope) {
    var range = new Array(100);
    $scope.range = range;
});