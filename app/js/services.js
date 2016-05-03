'use strict';
var userServices=angular.module('userServices',['ngResource']);
userServices.factory('user',['$resource',
	function($resource){
		return $resource('background/user/:userId.json',{},{
			query:{method:'GET',}
		})
	}])