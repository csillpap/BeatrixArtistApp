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
	
	
	//Controllers for the Gallery
	
	//Controller for the drawings
	
	.controller("DrawingsController", function($scope) {
        $scope.drawingpics = [ 
	  { 
	    icon: "images/drawings/prince-of-persia.jpg", 
	    description: "Prince of Persia"
	  },
	  { 
	    icon: "images/drawings/Boris-Vallejo-painting.jpg", 
	    description: "Copy of Boris Vallejo's painting"
	  },
	  { 
	    icon: "images/drawings/dragon.jpg", 
	    description: "Dragon"
	  },
	  { 
	    icon: "images/drawings/troll-hunter.jpg", 
	    description: "Trollhunter"
	  },
	  { 
	    icon: "images/drawings/female-warrior.jpg", 
	    description: "Female Warrior"
	  },
	  { 
	    icon: "images/drawings/Guldan.jpg", 
	    description: "Guldan from World of Warcraft"
	  },
	  { 
	    icon: "images/drawings/Lothar.jpg", 
	    description: "Lothar from World of Warcraft"
	  },
	  { 
	    icon: "images/drawings/Sylvanas-Windrunner.jpg", 
	    description: "Sylvanas Windrunner from World of Warcraft"
	  },
	  { 
	    icon: "images/drawings/undead-warlock.jpg", 
	    description: "Undead Warlock"
	  },
	  { 
	    icon: "images/drawings/Varian.jpg", 
	    description: "Varian from World of Warcraft"
	  },
	  { 
	    icon: "images/drawings/Thrall.jpg", 
	    description: "Thrall from World of Warcraft"
	  },
	  { 
	    icon: "images/drawings/female-naga.jpg", 
	    description: "Female Naga"
	  },
	  { 
	    icon: "images/drawings/sitting-man.jpg", 
	    description: "Man sitting on a chair"
	  },
	  { 
	    icon: "images/drawings/skeleton.jpg", 
	    description: "Skeleton"
	  },
	  { 
	    icon: "images/drawings/skeleton-and-skull.jpg", 
	    description: "Skeleton and skulls"
	  },
	  { 
	    icon: "images/drawings/muscles.jpg", 
	    description: "The muscles of a human"
	  },
	  { 
	    icon: "images/drawings/skyrim.jpg", 
	    description: "Skyrim"
	  },
	  { 
	    icon: "images/drawings/Blood-queen-Lanathel.jpg", 
	    description: "Blood Queen Lanathel"
	  }, 
	  { 
	    icon: "images/drawings/Illidan.jpg", 
	    description: "Illidan from World of Warcraft"
	  },
	  { 
	    icon: "images/drawings/pope-francis.jpg", 
	    description: "Pope Francis"
	  },
	  { 
	    icon: "images/drawings/plague-doctor.jpg", 
	    description: "Plague doctor"
	  },
	  { 
	    icon: "images/drawings/Lulu.jpg", 
	    description: "Inspired by my sister's funny dog"
	  },
	  { 
	    icon: "images/drawings/mushrooms.jpg", 
	    description: "Mushrooms"
	  },
	  { 
	    icon: "images/drawings/arms.jpg", 
	    description: "Arms"
	  },
	];
    })