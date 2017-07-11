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
	
	.controller("PaintingsController", function($scope, Lightbox) {
        $scope.paintingpics = [ 
	  { 
	    "thumbUrl": "images/paintings/colorful-girl.jpg", 
	    "caption": "Colorful portrait of a girl",
		"url": "images/paintings/colorful-girl.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/abstract-portrait.jpg", 
	    "caption": "Abstract portrait of a girl",
		"url": "images/paintings/abstract-portrait.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/old-man.jpg", 
	    "caption": "Portrait of an old man",
		"url": "images/paintings/old-man.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/woman.jpg", 
	    "caption": "Portrait of a woman",
		"url": "images/paintings/woman.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/woman2.jpg", 
	    "caption": "Portrait of a woman",
		"url": "images/paintings/woman2.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/girl.jpg", 
	    "caption": "Girl",
		"url": "images/paintings/girl.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/friends.jpg", 
	    "caption": "Friends",
		"url": "images/paintings/friends.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/water-color-moncsa.jpg", 
	    "caption": "My friend Moncsa",
		"url": "images/paintings/water-color-moncsa.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/elderly-lady.jpg", 
	    "caption": "Elderly lady",
		"url": "images/paintings/elderly-lady.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/franz-marc-the-fox.jpg", 
	    "caption": "Franz Marc: The Fox",
		"url": "images/paintings/franz-marc-the-fox.jpg"
	  }, 
	  { 
	    "thumbUrl": "images/paintings/matisse-woman-in-green.jpg", 
	    "caption": "Matisse: Woman in green",
		"url": "images/paintings/matisse-woman-in-green.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/victor-manuel-gitana-tropical.jpg", 
	    "caption": "Victor Manuel: Gitana Tropical",
		"url": "images/paintings/victor-manuel-gitana-tropical.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/fox.jpg", 
	    "caption": "Fox",
		"url": "images/paintings/fox.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/rabbit.jpg", 
	    "caption": "Rabbit",
		"url": "images/paintings/rabbit.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/raven.jpg", 
	    "caption": "Raven",
		"url": "images/paintings/raven.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/wolf.jpg", 
	    "caption": "Wolf",
		"url": "images/paintings/wolf.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/butterfly.jpg", 
	    "caption": "Butterfly",
		"url": "images/paintings/butterfly.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/cat.jpg", 
	    "caption": "Cat",
		"url": "images/paintings/cat.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/lizard.jpg", 
	    "caption": "Lizard",
		"url": "images/paintings/lizard.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/squirrel.jpg", 
	    "caption": "Squirrel",
		"url": "images/paintings/squirrel.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/swan.jpg", 
	    "caption": "Swan",
		"url": "images/paintings/swan.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/tit.jpg", 
	    "caption": "Tit",
		"url": "images/paintings/tit.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/deer.jpg", 
	    "caption": "Deer",
		"url": "images/paintings/deer.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/boy.jpg", 
	    "caption": "Boy",
		"url": "images/paintings/boy.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/town-life.jpg", 
	    "caption": "Life of teenage boys in our little town",
		"url": "images/paintings/town-life.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/town-life2.jpg", 
	    "caption": "Life of teenage boys in our little town",
		"url": "images/paintings/town-life2.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/town-life3.jpg", 
	    "caption": "Life of teenage boys in our little town",
		"url": "images/paintings/town-life3.jpg"
	  },
	  { 
	    "thumbUrl": "images/paintings/town-life4.jpg", 
	    "caption": "Life of teenage boys in our little town",
		"url": "images/paintings/town-life4.jpg"
	  },
	];
		$scope.openLightboxModal = function (index) {
			Lightbox.openModal($scope.paintingpics, index);
		};
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
	