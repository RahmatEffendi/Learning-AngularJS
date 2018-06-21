var app = angular.module('mainApp', []);

app.controller('app', function($scope) {
    $scope.counter = -1;
    $scope.$watch('myText', function(newValue, oldValue) {
        $scope.counter++;
        if ($scope.counter == 100) {
            alert("Limitless")
        }
        //console.log("New Value : " + newValue);
        //console.log("Old Value : " + oldValue);
    });
});