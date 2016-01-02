var SocialBar = function() {

	var bar,
		firstShow = true,
		hasFB = false,
		hasTW = false,
		hasGP = false;

/**
 * Initialize a social bar
 * Useful for FB share, tweet, etc.
 * Styled with css
 * ### Examples:
 *
 * var socBar = new SocialBar();
 * socBar.init({yPos: 'bottom', url: 'http://google.com', facebook: true, twitter: true, google: true});
 *
 * @param {object} { yPos:{string} 'top' or 'bottom' , facebook:{boolean} , twitter:{boolean} , google:{boolean} , url:{string} URL to share , class: [Array of class to add to element]}
 * @api public
 */
	var init = function(args) {
		if (typeof args.url == 'undefined' || args.url == '') {
			console.error('The social bar must be initialized with a url.');
			return;
		}

		var yPos = args.yPos || 'top';
		var innerString = '';

		bar = document.createElement('div');
		bar.setAttribute('id', 'social-bar');

		bar.style[yPos] = 0;

		if (args.facebook) {
			innerString += '<div class="fb-share-button" data-href="' + args.url + '" data-layout="button_count" style="vertical-align:top;zoom:1;*display:inline"></div>';
			hasFB = true;
		}

		if (args.twitter) {
			innerString += '<a class="twitter-share-button" href="https://twitter.com/share">Tweet</a>';
			hasTW = true;
		}

		if (args.google) {
			innerString += '<div class="g-plus" data-action="share" data-annotation="bubble" data-href="' + args.url + '"></div>';
			hasGP = true;
		}

		if (args.class != undefined && args.class.length > 0) {
			if (!Array.isArray(args.class)) return console.error('Class property needs to be an array.');
			args.class.forEach(function(className) {
				bar.classList.add(className);
			});
		}

		bar.innerHTML = innerString;

		document.body.appendChild(bar);
	};

	/**
	* Show social bar
	* ### Examples:
	*
	* socBar.show();
	*
	* @api public
	*/
	var show = function() {
		bar.style.display = 'block';
		if (firstShow) {
			// Initialize social buttons manually due to post loading
			parseButtons();
		}
	};

	/**
	* Hide social bar
	* ### Examples:
	*
	* socBar.hide();
	*
	* @api public
	*/
	var hide = function() {
		bar.style.display = 'none';
	};

	/**
	* Initialize social buttons manually due to post loading
	*
	* @api private
	*/
	var parseButtons = function() {
		if (hasFB) FB.XFBML.parse();
		if (hasTW) twttr.widgets.load();
		if (hasGP) gapi.plus.go();
		firstShow = false;
	};

	return {
		init: init,
		show: show,
		hide: hide
	};

};
