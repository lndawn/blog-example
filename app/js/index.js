var welcomeControllers=angular.module('welcomeControllers',[]);
welcomeControllers.controller('welcomeCtrl',['$scope','$rootScope',
	function($scope,$rootScope){
		$scope.title="基于Angular的blog系统";
		$rootScope.title=res.title;
}])