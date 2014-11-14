var app = angular.module("MyApp", [])
.directive('myWidget', function(){
  return {
    restrict: 'E',
    template: '<p>Hello World 1</p>'
  }
})
.directive('myWidgetReplace', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<p>Hello World 2</p>'
  } 
})
.directive('myWidgetTemplate', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'widget.html'
  } 
})