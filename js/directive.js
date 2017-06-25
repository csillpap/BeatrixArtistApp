// Directive for Drawings 

angular.module("DrawingsDirective",[]).directive("drawings", function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
	scope: {
		drawing: "="
	},
    templateUrl: 'templates/directives/drawings.html'
  };
}); 