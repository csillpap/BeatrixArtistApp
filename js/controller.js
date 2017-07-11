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
	
	.controller("DrawingsController", function($scope, Lightbox) {
        $scope.drawingpics = [ 
	  { 
	    "thumbUrl": "images/drawings/prince-of-persia.jpg", 
	    "caption": "Prince of Persia",
		"url": "images/drawings/prince-of-persia.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Boris-Vallejo-painting.jpg", 
	    "caption": "Copy of Boris Vallejo's painting",
		"url": "images/drawings/Boris-Vallejo-painting.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/dragon.jpg", 
	    "caption": "Dragon",
		"url": "images/drawings/dragon.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/troll-hunter.jpg", 
	    "caption": "Trollhunter",
		"url": "images/drawings/troll-hunter.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/female-warrior.jpg", 
	    "caption": "Female Warrior",
		"url": "images/drawings/female-warrior.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Guldan.jpg", 
	    "caption": "Guldan from World of Warcraft",
		"url": "images/drawings/Guldan.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Lothar.jpg", 
	    "caption": "Lothar from World of Warcraft",
		"url": "images/drawings/Lothar.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Sylvanas-Windrunner.jpg", 
	    "caption": "Sylvanas Windrunner from World of Warcraft",
		"url": "images/drawings/Sylvanas-Windrunner.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/undead-warlock.jpg", 
	    "caption": "Undead Warlock",
		"url": "images/drawings/undead-warlock.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Varian.jpg", 
	    "caption": "Varian from World of Warcraft",
		"url": "images/drawings/Varian.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Thrall.jpg", 
	    "caption": "Thrall from World of Warcraft",
		"url": "images/drawings/Thrall.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/female-naga.jpg", 
	    "caption": "Female Naga",
		"url": "images/drawings/female-naga.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/sitting-man.jpg", 
	    "caption": "Man sitting on a chair",
		"url": "images/drawings/sitting-man.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/skeleton.jpg", 
	    "caption": "Skeleton",
		"url": "images/drawings/skeleton.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/skeleton-and-skull.jpg", 
	    "caption": "Skeleton and skulls",
		"url": "images/drawings/skeleton-and-skull.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/muscles.jpg", 
	    "caption": "The muscles of a human",
		"url": "images/drawings/muscles.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/skyrim.jpg", 
	    "caption": "Skyrim",
		"url": "images/drawings/skyrim.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Blood-queen-Lanathel.jpg", 
	    "caption": "Blood Queen Lanathel",
		"url": "images/drawings/Blood-queen-Lanathel.jpg"
	  }, 
	  { 
	    "thumbUrl": "images/drawings/Illidan.jpg", 
	    "caption": "Illidan from World of Warcraft",
		"url": "images/drawings/Illidan.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/pope-francis.jpg", 
	    "caption": "Pope Francis",
		"url": "images/drawings/pope-francis.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/plague-doctor.jpg", 
	    "caption": "Plague doctor",
		"url": "images/drawings/plague-doctor.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/Lulu.jpg", 
	    "caption": "Inspired by my sister's funny dog",
		"url": "images/drawings/Lulu.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/mushrooms.jpg", 
	    "caption": "Mushrooms",
		"url": "images/drawings/mushrooms.jpg"
	  },
	  { 
	    "thumbUrl": "images/drawings/arms.jpg", 
	    "caption": "Arms",
		"url": "images/drawings/arms.jpg"
	  },
	];
		$scope.openLightboxModal = function (index) {
			Lightbox.openModal($scope.drawingpics, index);
		};
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
	
	// Controller for Other Art
	
	.controller("OtherArtController", function($scope) {
        $scope.otherpics = [ 
	  { 
	    icon: "images/other/jimi-hendrix.jpg", 
	    description: "Jimi Hendrix - woodcut"
	  }, 
	  { 
	    icon: "images/other/cat.jpg", 
	    description: "Cat - linocut"
	  },
	  { 
	    icon: "images/other/lino-cat.jpg", 
	    description: "Cat - linocut"
	  },
	  { 
	    icon: "images/other/screenprint.jpg", 
	    description: "Man with a tree - screenprint"
	  },
	  { 
	    icon: "images/other/utopia-band.jpg", 
	    description: "Cover for the band Utopia"
	  },
	  { 
	    icon: "images/other/blinded-by-you.jpg", 
	    description: "The effect of a grenade"
	  },
	  { 
	    icon: "images/other/clay-head.jpg", 
	    description: "Human head made of clay"
	  },
	  { 
	    icon: "images/other/football-cards.jpg", 
	    description: "Football cards"
	  },
	  { 
	    icon: "images/other/drypoint.jpg", 
	    description: "Tiger and deer - drypoint"
	  },
	  { 
	    icon: "images/other/serj-tankian.jpg", 
	    description: "Serj Tankian from System Of a Down - linocut"
	  },
	  { 
	    icon: "images/other/invisible-yeti.jpg", 
	    description: "The invisible yeti - bookcover"
	  },
	  { 
	    icon: "images/other/trump-and-hillary.jpg", 
	    description: "Trump and Hillary painted with food ingredients"
	  },
	  { 
	    icon: "images/other/clay-sculpture.jpg", 
	    description: "Sculpture from clay"
	  },
	  { 
	    icon: "images/other/pinecone.jpg", 
	    description: "Pinecone from clay"
	  },
	  { 
	    icon: "images/other/platon.jpg", 
	    description: "Platon by Beatrix"
	  },
	];
    })
	