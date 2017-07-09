angular.module("BeatrixWebsite", ["ngRoute", "Controllers", "DrawingsDirective", "PaintingsDirective", "OtherArtDirective"]);

angular.module("BeatrixWebsite").config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); //enable href routing without hashes
	
	$routeProvider.when("/", {
		templateUrl: "templates/home.html"
	})
	.when("/gallery", {
		templateUrl: "templates/gallery.html"
	})
	.when("/drawings", {
		templateUrl: "templates/drawings.html",
		controller: 'DrawingsController'
	})
	.when("/about", {
		templateUrl: "templates/about.html"
	})
	.when("/contact", {
		templateUrl: "templates/contact.html"
	})

});