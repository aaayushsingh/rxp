angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://sc.productrx.com/public/').
        then(function(response) {
            $scope.greeting = response.data;
	    console.log(response.data);
        });
});
