'use strict';
var indexControllers=angular.module('indexControllers',['loginControllers','signupControllers',
	'logoutControllers','welcomeControllers']);
//该方法极大的增加了http请求数量
var imgs=['imgs/background/1.jpg','imgs/background/2.jpg','imgs/background/3.jpg',
	'imgs/background/4.jpg','imgs/background/5.jpg','imgs/background/6.jpg',
	'imgs/background/7.jpg'];
indexControllers.controller('IndexCtrl',['$scope','$interval',
	function($scope,$interval){
		$scope.currentSlide=0;
		$scope.indexbg=imgs[$scope.currentSlide];
		$scope.autoSlide=true;
		$scope.nextimg=function(){
			$scope.autoSlide=false;
			if($scope.currentSlide<imgs.length-1){
				$scope.currentSlide +=1;
			}
			else{
				$scope.currentSlide=0;
			}
			//$("#bg").attr("src",imgs[i]);
			$scope.indexbg=imgs[$scope.currentSlide];
			setTimeout(function(){$scope.autoSlide=true;},5000);
		}
		$scope.preimg=function(){
			$scope.autoSlide=false;
			if($scope.currentSlide>0){
				$scope.currentSlide -=1;
			}
			else{
				$scope.currentSlide=imgs.length-1;
			}
			//$("#bg").attr("src",imgs[i]);
			$scope.indexbg=imgs[$scope.currentSlide];
			setTimeout(function(){$scope.autoSlide=true;},5000);
		};
		$scope.inCurrentSlideIndex=function(index){
			return $scope.currentSlide===index;
		}
		$scope.loopSlides=function(){
			if($scope.autoSlide==false){return false;}
			if($scope.currentSlide<imgs.length-1){
				$scope.currentSlide +=1;
			}
			else{
				$scope.currentSlide=0;
			}
			$scope.indexbg=imgs[$scope.currentSlide];
		};
		$interval(function(){$scope.loopSlides();},2000);
		$scope.txt={
			home:"欢迎",
		}	
		$scope.resetLogin=function(user){
			if(user.name){
				$scope.login={
					url:'logout',
					name:'注销'
				};
				$scope.signup={
					url:'',
					name:'欢迎'+user.name
				};
			}else{
				$scope.login={
					url:'login',
					name:'登录'
				};
				$scope.signup={
					url:'signup',
					name:'注册'
				};
			}
		};
		$scope.resetLogin({});
	}]
);
//signIn and signUp controller