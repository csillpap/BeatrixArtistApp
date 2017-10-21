angular.module("BeatrixWebsite", ["ngRoute", "Controllers", "DrawingsDirective", "PaintingsDirective", "OtherArtDirective", "bootstrapLightbox", "ui.bootstrap"]);

angular.module("BeatrixWebsite").config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true); //enable href routing without hashes
	
	$routeProvider.when("/", {
		templateUrl: "templates/home.html"
	})
	.when("/drawings", {
		templateUrl: "templates/drawings.html",
		controller: 'DrawingsController'
	})
	.when("/paintings", {
		templateUrl: "templates/paintings.html",
		controller: 'PaintingsController'
	})
	.when("/other", {
		templateUrl: "templates/other.html",
		controller: 'OtherArtController'
	})
	.when("/about", {
		templateUrl: "templates/about.html"
	})
	.when("/contact", {
		templateUrl: "templates/contact.html"
	})

});