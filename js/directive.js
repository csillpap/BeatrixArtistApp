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

// Directive for Paintings

angular.module("PaintingsDirective",[]).directive("paintings", function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
	scope: {
		painting: "="
	},
    templateUrl: 'templates/directives/paintings.html'
  };
});

// Directive for Other Art

angular.module("OtherArtDirective",[]).directive("otherArt", function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
	scope: {
		other: "="
	},
    templateUrl: 'templates/directives/other-art.html'
  };
});