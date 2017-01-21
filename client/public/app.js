'use strict';

angular.module('myApp', [
    'ngRoute',
    'ui.router',
    'ngMaterial'
])
    .config(pageRoutes).run(function () {

});
pageRoutes.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function pageRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/pages/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'app/pages/cart/cart.html',
            controller: 'cartController',
            controllerAs: 'vm'
        })
        .state('test', {
            url: '/test',
            templateUrl: 'test/test.html',
            controller: 'testCtrl',
            controllerAs: 'vm'
        });
    $locationProvider.html5Mode(true);
}