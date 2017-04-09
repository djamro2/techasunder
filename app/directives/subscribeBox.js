'use strict';

var directives = directives || angular.module('techAsunder.directives', []);

directives.directive('subscribeBox', function(){
	return {
	    restrict: 'AE',
	    templateUrl: '/client/app/views/partials/subscribebox.html'
    };
});