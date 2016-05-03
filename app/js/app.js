'use strict';
var blogApp=angular.module('blogApp',['ngRoute','indexControllers','loginControllers','signupControllers',
	'logoutControllers','welcomeControllers']);
blogApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
		when('/',{
			templateUrl:'tpls/index.html',
			controller:'welcomeCtrl'
		}).
		when('/login',{
			templateUrl:'tpls/login.html',
			controller:'loginCtrl'
		}).
		when('/logout',{
			templateUrl:'tpls/logout.html',
			controller:'logoutCtrl',
		}).
		when('/signup',{
			templateUrl:'tpls/signup.html',
			controller:'signupCtrl',
		}).
		otherwise({redirectTo:'/'});
	}
])
