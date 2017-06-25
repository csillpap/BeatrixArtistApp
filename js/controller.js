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
	
	// Controller for the paintings
	
	.controller("PaintingsController", function($scope) {
        $scope.paintingpics = [ 
	  { 
	    icon: "images/paintings/colorful-girl.jpg", 
	    description: "Colorful portrait of a girl"
	  },
	  { 
	    icon: "images/paintings/abstract-portrait.jpg", 
	    description: "Abstract portrait of a girl"
	  },
	  { 
	    icon: "images/paintings/old-man.jpg", 
	    description: "Portrait of an old man"
	  },
	  { 
	    icon: "images/paintings/woman.jpg", 
	    description: "Portrait of a woman"
	  },
	  { 
	    icon: "images/paintings/woman2.jpg", 
	    description: "Portrait of a woman"
	  },
	  { 
	    icon: "images/paintings/girl.jpg", 
	    description: "Girl"
	  },
	  { 
	    icon: "images/paintings/friends.jpg", 
	    description: "Friends"
	  },
	  { 
	    icon: "images/paintings/water-color-moncsa.jpg", 
	    description: "My friend Moncsa"
	  },
	  { 
	    icon: "images/paintings/elderly-lady.jpg", 
	    description: "Elderly lady"
	  },
	  { 
	    icon: "images/paintings/franz-marc-the-fox.jpg", 
	    description: "Franz Marc: The Fox"
	  }, 
	  { 
	    icon: "images/paintings/matisse-woman-in-green.jpg", 
	    description: "Matisse: Woman in green"
	  },
	  { 
	    icon: "images/paintings/victor-manuel-gitana-tropical.jpg", 
	    description: "Victor Manuel: Gitana Tropical"
	  },
	  { 
	    icon: "images/paintings/fox.jpg", 
	    description: "Fox"
	  },
	  { 
	    icon: "images/paintings/rabbit.jpg", 
	    description: "Rabbit"
	  },
	  { 
	    icon: "images/paintings/raven.jpg", 
	    description: "Raven"
	  },
	  { 
	    icon: "images/paintings/wolf.jpg", 
	    description: "Wolf"
	  },
	  { 
	    icon: "images/paintings/butterfly.jpg", 
	    description: "Butterfly"
	  },
	  { 
	    icon: "images/paintings/cat.jpg", 
	    description: "Cat"
	  },
	  { 
	    icon: "images/paintings/lizard.jpg", 
	    description: "Lizard"
	  },
	  { 
	    icon: "images/paintings/squirrel.jpg", 
	    description: "Squirrel"
	  },
	  { 
	    icon: "images/paintings/swan.jpg", 
	    description: "Swan"
	  },
	  { 
	    icon: "images/paintings/tit.jpg", 
	    description: "Tit"
	  },
	  { 
	    icon: "images/paintings/deer.jpg", 
	    description: "Deer"
	  },
	  { 
	    icon: "images/paintings/boy.jpg", 
	    description: "Boy"
	  },
	  { 
	    icon: "images/paintings/town-life.jpg", 
	    description: "Life of teenage boys in our little town"
	  },
	  { 
	    icon: "images/paintings/town-life2.jpg", 
	    description: "Life of teenage boys in our little town"
	  },
	  { 
	    icon: "images/paintings/town-life3.jpg", 
	    description: "Life of teenage boys in our little town"
	  },
	  { 
	    icon: "images/paintings/town-life4.jpg", 
	    description: "Life of teenage boys in our little town"
	  },
	];
    })