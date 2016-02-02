angular.module('timeLineApp')
  .directive('timeline', function (findinfo) {
    return {
      templateUrl: 'js/timeline.html',
      restrict: 'EA',
      transclude: true,
      controller: function ($scope, $attrs, findinfo) {
      	$scope.mainLine = findinfo.mainLine;
      }
    };
  });