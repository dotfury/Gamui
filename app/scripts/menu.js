var Menu = function() {

	var menuContainer, menu;

/**
* Initialize a menu
* Useful for in game menus
* Styled with css
* ### Examples:
*
* var menu = new Menu();
* menu.init({menuArray: [{title: 'play', type: 'action', action: startGame}], class: [Array of classes to add to element](optional), parent:{HTML} element to place menu(optional)});
*
* @param {Object} {menuArray: , class: , parent: }
* @api public
*/
	var init = function(args) {
		if (!Array.isArray(args.menuArray)) {
			return console.error('Menu init method must be passed an Array.');
		}
		menuContainer = document.createElement('div');
		menu = document.createElement('ul');

		menuContainer.className = 'menu';

		menuContainer.appendChild(menu);
		if (args.parent !== '' && args.parent !== undefined) {
			args.parent.appendChild(menuContainer);
		} else {
			document.body.appendChild(menuContainer);
		}

		if (args.class !== undefined && args.class.length > 0) {
			if (!Array.isArray(args.class)) return console.error('Class property needs to be an array.');
			args.class.forEach(function(className) {
				menuContainer.classList.add(className);
			});
		}

		args.menuArray.forEach(function(item) {
			if (typeof item.url == 'undefined' && typeof item.action == 'undefined') {
				return console.error('All menu items must have an action or url.');
			} else if (typeof item.type == 'undefined') {
				return console.error('All menu items must have a type.');
			}

			var menuItem = document.createElement('li');
			menuItem.className = 'menu-item';

			if (item.type == 'link') {
				menuItem.innerHTML = '<a href="' + item.url + '" target="_blank">' + item.title + '</a>';
			} else {
				menuItem.innerHTML = item.title;
				menuItem.addEventListener('click', function() {
					item.action();
				});
			}
			menu.appendChild(menuItem);
		});
	};

	/**
	* Hide menu
	* ### Examples:
	*
	* menu.hide();
	*
	* @api public
	*/
	var hide = function() {
		menuContainer.style.display = 'none';
	};

	/**
	* Show menu
	* ### Examples:
	*
	* menu.show();
	*
	* @api public
	*/
	var show = function() {
		menuContainer.style.display = 'block';
	};

	return {
		init: init,
		hide: hide,
		show: show
	};

};
