var ScoreBox = function() {

	var score, box;

/**
* Initialize a score box
* Useful for in game popups, loading screen
* Styled with css
* ### Examples:
*
* var sBox = new ScoreBox();
* sBox.init({xPos: 'left', yPos: 'top', count: 1});
*
* @param {object} {xPos:{string} 'left' or 'right' , yPos:{string} 'top' or 'bottom', count:{number} , score: {number}(optional), class: [Array of classes to add to element](optional)}
* @api public
*/
	var init = function(args) {
		if (!args.xPos || !args.yPos) {
			return console.error('One or more position missing.');
		}

		args.count = args.count || 1;

		score = args.score || 0;

		box = document.createElement('div');
		box.style.display = 'none';
		box.className = 'score-box';

		if (args.class !== undefined && args.class.length > 0) {
			if (!Array.isArray(args.class)) return console.error('Class property needs to be an array.');
			args.class.forEach(function(className) {
				box.classList.add(className);
			});
		}

		var topBottomAmount = 10;

		if (args.count > 1) {
			topBottomAmount = (args.count * 10);
			topBottomAmount += (args.count - 1) * 20;
		}
		if (topBottomAmount < 10) topBottomAmount = 10;

		box.style[args.xPos] = '10px';
		box.style[args.yPos] = topBottomAmount + 'px';

		document.body.appendChild(box);
	};

	/**
	 * Update the score
	 *
	 * ### Examples:
	 *
	 * sBox.update(90);
	 *
	 * @param {number} Amount to increment score
	 * @api public
	 */
	var update = function(points) {
		score += points;
		box.innerHTML = score;
	};

	/**
	 * Reset the score
	 *
	 * ### Examples:
	 *
	 * sBox.reset();
	 *
	 * @api public
	 */
	var reset = function() {
		score = 0;
		update(0);
	};

	/**
	 * Hide the score
	 *
	 * ### Examples:
	 *
	 * sBox.hide();
	 *
	 * @api public
	 */
	var hide = function() {
		box.style.display = 'none';
	};

	/**
	 * Show the score
	 *
	 * ### Examples:
	 *
	 * sBox.show();
	 *
	 * @api public
	 */
	var show = function() {
		box.innerHTML = score;
		box.style.display = 'block';
	};

	return {
		init: init,
		update: update,
		reset: reset,
		hide: hide,
		show: show
	};

};
