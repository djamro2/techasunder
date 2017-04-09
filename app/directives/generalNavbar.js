'use strict';

var directives = directives || angular.module('techAsunder.directives', []);

directives.directive('generalNavbar', function(){
	return {
	    restrict: 'AE',
	    templateUrl: '/client/app/views/partials/generalNavbar.html'
    };
});