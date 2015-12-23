angular.module('timeLineApp')
  .directive('timeline', function (findinfo) {
    return {
      templateUrl: 'js/timeline.html',
      restrict: 'EA',
      controller: function ($scope, $attrs, findinfo) {
      	$scope.mainLine = findinfo.mainLine;
      }
    };
  });