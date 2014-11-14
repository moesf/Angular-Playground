angular.module('MyApp', []);

function DataCtrl($scope, $http) {
  
  $http.jsonp("http://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero").
  success(function(data) {
    $scope.data = data;
    $scope.name = data.name;
    $scope.salutation = data.salutation;
    $scope.greeting = data.greeting;
    
    // $("[ng-model='nameNew']").val(data.name);
    // $("[ng-model='salutation']").val(data.salutation);
    // $("[ng-model='greeting']").val(data.greeting);
  }).
  error(function (data) {
    $scope.data = "Request failed";
  });
}