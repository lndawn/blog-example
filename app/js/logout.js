npvar logoutControllers=angular.module('logoutControllers',[]);
logoutControllers.controller('logoutCtrl',["$scope","$rootScope","$http","$location",
	function($scope,$rootScope,$http,$location){
		$rootScope.title="注销";
		$http.get('/logout').success(function(){
			$scope.$parent.resetLogin({});
			$location.path("/");
		});
	}])