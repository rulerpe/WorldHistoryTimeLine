angular.module('timeLineApp')
  .directive('mobiletimeline', function (findinfo) {
    return {
      templateUrl: 'js/mobileTimeLine.html',
      restrict: 'EA',
      controller: function ($scope, $attrs, findinfo) {
      	$scope.mainLine = findinfo.mainLine;
      }
    };
  });