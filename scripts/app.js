var Yike = angular.module('Yike',['ngRoute','Ctrls']);

Yike.run(['$rootScope',function($rootScope){
	//设置全局域
	$rootScope.collapsed = false;
	$rootScope.loaded = false;
	$rootScope.title = '今日一刻';

	$rootScope.toggle = function(){

		$rootScope.collapsed = !$rootScope.collapsed;
		var navs = document.querySelectorAll('.navs dd');
		var len = navs.length;
		if($rootScope.collapsed){
			for(var  i=0;i<len;i++){
				navs[i].style.transform = 'translate(0)';
				/*navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				navs[i].style.transitionProperty = 'all';
				navs[i].style.transitionDelay = '0.1s';
				navs[i].style.transitionTimingFunction = 'ease-out';*/
				navs[i].style.transition = 'all ease-out '+(i + 1) * 0.15+'s .1s';
}
		}else{
			for(var  i=len-1;i>=0;i--){
				navs[i].style.transform = 'translate(-100%)';
				/*navs[i].style.transitionDuration = (len-i) * 0.15 + 's';
				navs[i].style.transitionProperty = 'all';
				navs[i].style.transitionDelay = '0s';
				navs[i].style.transitionTimingFunction = 'ease-out';*/
				navs[i].style.transition = 'all ease-out '+(len-i) * 0.15+'s';
			}
		}

	}
}])
//配置路由
Yike.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/today',{
		templateUrl : './views/today.html',
		controller : 'TodayCtrl'
	}).when('/older',{
		templateUrl : './views/older.html',
		controller : 'OlderCtrl'
	}).when('/author',{
		templateUrl : './views/author.html',
		controller : 'AuthorCtrl'
	}).when('/category',{
		templateUrl : './views/category.html',
		controller : 'CategoryCtrl'
	}).when('/favourite',{
		templateUrl : './views/favourite.html',
		controller : 'FavouriteCtrl'
	}).when('/settings',{
		templateUrl : './views/settings.html',
		controller : 'SettingsCtrl'
	}).otherwise({
		redirectTo : '/today'
	})
}])