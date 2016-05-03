var loginControllers=angular.module('loginControllers',[]);
loginControllers.controller('loginCtrl',['$scope','$rootScope','$http','$location',
	function($scope,$rootScope,$http,$location){
		$rootScope.title="登录";
		$scope.user={
			name:'',
			password:''
		};
		$scope.login=function(){
			$http.post('/login',$scope.user).success(function(data){
				if(data.err){
					return $scope.err=data.err;
				}
				$scope.$parent.resetLogin(data);
				$location.path("/");
			})
		};
		$scope.register=function(){
			window.location.hash="/signup";
		};
}])