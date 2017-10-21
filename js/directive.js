// Directive for Drawings 

angular.module("DrawingsDirective",[]).directive("drawingImages", function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
	scope: {
		drawing: "="
	},
    templateUrl: 'templates/directives/drawing-images.html'
  };
}); 

// Directive for Paintings

angular.module("PaintingsDirective",[]).directive("paintingImages", function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
	scope: {
		painting: "="
	},
    templateUrl: 'templates/directives/painting-images.html'
  };
});

// Directive for Other Art

angular.module("OtherArtDirective",[]).directive("otherImages", function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
	scope: {
		other: "="
	},
    templateUrl: 'templates/directives/other-images.html'
  };
});