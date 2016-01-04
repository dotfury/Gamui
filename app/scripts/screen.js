var GameScreen = function() {

	var gScreen;

	/**
 * Initialize a screen
 * Useful for in game popups, loading screen
 * Styled with css
 * ### Examples:
 *
 * var iBox = new GameScreen();
 * iBox.init({element: 'instructions', class: ['cheese', 'main-instructions']});
 *
 * @param {object} { element: HTML element in DOM to use, class: [Array of class names to add for styling, etc.]}
 * @api public
 */
	var init = function(args) {
		if (args.element === '' || args.element === undefined) {
			return console.error('Need to supply an element by id to create a screen.');
		}

		gScreen = document.getElementById(args.element);
		gScreen.classList.add('game-screen');

		if (gScreen === null) {
			return console.error('No element with id of ' + args.element + ' found.');
		}

		if (args.class !== undefined && args.class.length > 0) {
			if (!Array.isArray(args.class)) return console.error('Class property needs to be an array.');
			args.class.forEach(function(className) {
				gScreen.classList.add(className);
			});
		}
	};

	/**
 * Display info box
 * ### Examples:
 *
 * iBox.show();
 *
 * @api public
 */
	var show = function() {
		gScreen.style.display = 'block';
	};

	/**
 * Hide info box
 * ### Examples:
 *
 * iBox.hide();
 *
 * @api public
 */
	var hide = function() {
		gScreen.style.display = 'none';
	};

	/**
	* Return the HTML element
	* ### Examples:
	*
	* iBox.getElement();
	*
	* @return {HTML} element
	* @api public
	*/
	var getElement = function() {
		return gScreen;
	};

	return {
		init: init,
		show: show,
		hide: hide,
		getElement: getElement
	};

};
