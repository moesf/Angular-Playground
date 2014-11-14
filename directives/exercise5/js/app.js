var app = angular.module("MyApp", []);

app.directive("myWidget", function() {
  var linkFunction = function(scope, element, attributes) {
    scope.text = attributes["myWidget"];
  };

  return {
    restrict: "A",
    template: "<p>{{text}}</p>",
    link: linkFunction,
    scope: {}
  };
});

app.directive("myWidgetBi", function() {
  return {
    restrict: "E",
    template: "<p>{{text}}</p>",
    scope: {
      text: "@text"// or just "@"
    }
  };
});

app.directive("myWidgetExpr", function() {
  var linkFunction = function(scope, element, attributes) {
    scope.text = scope.fn({ count: 5 });
  };

  return {
    restrict: "E",
    template: "<p>Use function: {{text}}</p>",
    link: linkFunction,
    scope: {
      fn: "&fn"
    }
  };
});