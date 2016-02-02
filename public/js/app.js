var app = angular.module('timeLineApp',['ui.bootstrap','ng-drag-scroll']);
app.controller('timeLineController', function($scope, $http,wikisearch,findinfo, $window){
    $scope.windowWidth = $window.innerWidth;
	$scope.title = undefined;
    $scope.wikiSearch = wikisearch.findName;
    $scope.findInfo =  findinfo;
    var curDown = false;
    var curXPos = 0;
    $scope.addPerson = function(){
    	$scope.findInfo.addPerson(wikisearch.currentName);
    };
    $scope.zoom = function(size){
    	findinfo.generateMainLine(size);
    	document.getElementById('timeLineContainer').style.width = size<100 ? "100%":"1000%";
    
    }
    $scope.zoom(11);
})