var signupControllers=angular.module('signupControllers',[]);
signupControllers.controller('signupCtrl',["$scope","$rootScope","$http","$location",
	function($scope,$rootScope,$http,$location){
		$rootScope.title="注册";
		$scope.user={
			name:'',
			email:'',
			password:'',
			repeatpassword:''
		}
		$scope.createClick=function(){
			$http.post('/signup',$scope.user).success(function(data){
				if(data.err){
					return $scope.err=data.err;
				}
				$location.path('/');
			});
		};
	}])