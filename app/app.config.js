'use strict';

var jobikigai = angular.module('jobikigai', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {templateUrl: 'templates/view_home/home.html',
                controller: 'homeCtrl'})
            .otherwise({redirectTo : '/'});
    });