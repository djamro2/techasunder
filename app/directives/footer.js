'use strict';

var directives = directives || angular.module('techAsunder.directives', []);

directives.directive('generalFooter', function(){
	return {
	    restrict: 'AE',
	    templateUrl: '/client/app/views/partials/footer.html'
    };
});