var EnergyBar = function() {

	var container, bar;

/**
 * Initialize an energy bar
 * EX: Life bar, Energy bar, etc.
 * ### Examples:
 *
 * var eBar = new EnergyBar();
 * eBar.init({xPos: 'right', yPos: 'top', color: 'blue', count: 1, border: true});
 *
 * @param {object} {xPos:{string} 'left' or 'right' , yPos:{string} 'top' or 'bottom' , color:{string} , count:{number} , border: {boolean}, class: [Array of classes to add to element]}
 * @api public
 */
	var init = function(args) {
		if (!args.xPos || !args.yPos) {
			return console.error('One or more position missing.');
		}

		args.color = args.color || 'red';
		args.count = args.count || 1;

		container = document.createElement('div');
		bar = document.createElement('div');

		var topBottomAmount = 10;

		if (args.count > 1) {
			topBottomAmount = (args.count * 10);
			topBottomAmount += (args.count - 1) * 20;
		}
		if (topBottomAmount < 10) topBottomAmount = 10;

		container.className = 'energy-bar-cont';
		bar.className = 'energy-bar';

		if (args.border) container.style.borderColor = args.color;

		container.style[args.xPos] = '10px';
		container.style[args.yPos] = topBottomAmount + 'px';

		bar.style.backgroundColor = args.color;

		if (args.class !== undefined && args.class.length > 0) {
			if (!Array.isArray(args.class)) return console.error('Class property needs to be an array.');
			args.class.forEach(function(className) {
				container.classList.add(className);
			});
		}

		container.appendChild(bar);
		document.body.appendChild(container);

	};

	/**
	 * Update the energy bar %
	 *
	 * ### Examples:
	 *
	 * eBar.update(90);
	 *
	 * @param {number} percentage to update the energy bar with
	 * @api public
	 */
	var update = function(percent) {
		if (percent > 100) percent = 100;
		if (percent < 0) percent = 0;
		bar.style.width = percent + '%';
	};

	/**
	 * Hide energy bar
	 *
	 * ### Examples:
	 *
	 * eBar.hide();
	 * @api public
	 */
	var hide = function() {
		container.style.display = 'none';
	};

	/**
	 * Show energy bar
	 *
	 * ### Examples:
	 *
	 * eBar.show();
	 * @api public
	 */
	var show = function() {
		container.style.display = 'block';
	};

	return {
		init: init,
		update: update,
		hide: hide,
		show: show
	};

};
