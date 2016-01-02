window.onload = function() {

	INTERFACE.loadingScreen.init({element: 'main-loader'});
	INTERFACE.loadingScreen.show();

	INTERFACE.lifeBar.init({xPos: 'right', yPos: 'top', color: 'blue', count: 1, border: true});
	INTERFACE.powerBar.init({xPos: 'right', yPos: 'top', color: 'red', count: 2});

	INTERFACE.score.init({xPos: 'left', yPos: 'top', count: 1});

	INTERFACE.socialBar.init({yPos: 'bottom', url: 'http://google.com', facebook: true, twitter: true, google: true});

	INTERFACE.titleBox.init({element: 'title-box', class: ['cheese', 'main-instructions']});

	INTERFACE.mainMenu.init({menuArray: [{title: 'play', type: 'action', action: startGame}]});
	INTERFACE.mainMenu.show();
	INTERFACE.loadingScreen.hide();

};

var startGame = function() {
	INTERFACE.titleBox.hide();
	INTERFACE.mainMenu.hide();
	INTERFACE.lifeBar.show();
	INTERFACE.powerBar.show();
	INTERFACE.score.show();
	INTERFACE.socialBar.show();
};
