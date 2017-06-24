angular.module("Controllers", [])

	//Controllers for the Contact page
	
	// Controller for sending messages
	
	.controller("MessageController", function($scope) {
		$scope.submitForm = function () {
			if ($scope.messageForm.$valid) {
				alert("Your message has been sent!");
			}
			else {
				alert("Your message could not been sent!");
			}
		}
	})
	
	// Controller for subscribing
	
	.controller("SubscribeController", function($scope) {
		$scope.submitForm = function () {
			if ($scope.subscribeForm.$valid) {
				alert("You have successfully subscribed!");
			}
			else {
				alert("There is a problem with your request!");
			}
		}
	})