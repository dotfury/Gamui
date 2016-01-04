var FullScreen = function() {

	var isFullScreen = false;

	/**
	 * Initialize a FullScreen object
	 *
	 * ### Examples:
	 *
	 * var fSreen = new FullScreen();
	 * fScreen.init();
	 *
	 * @api public
	 */
	var init = function() {
		document.addEventListener("keydown", function(e) {
			if (e.keyCode == 13) {
				endFull();
			}
		}, false);
	};

	/**
	 * Set browser window to full screen
	 *
	 * ### Examples:
	 *
	 * fScreen.setFull();
	 *
	 * @api public
	 */
	var setFull = function() {
		var elem = document.getElementsByTagName("body")[0];
		isFullScreen = true;
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	};

	/**
	 * Exit full screen
	 *
	 * ### Examples:
	 *
	 * fScreen.endFull();
	 *
	 * @api public
	 */
	var endFull = function() {
		if(!isFullScreen) return;
		isFullScreen = false;
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	};

	return {
		init: init,
		setFull: setFull,
		endFull: endFull
	};

};
