var Sequence = function() {

	var container, wait, offset, imgCount, interval, loadCount = 0, imageIndex = 0;

/**
 * Initialize a Sequence
 * EX: Intro logos
 * ### Examples:
 *
 * var seq = new Sequence();
 * eBar.init({images: ['../images/kitten1.jpg', '../images/kitten2.jpg'], wait: 1000, offset: 2000, class: ['open-sequence']);
 *
 * @param {object} {images: [Array of images in sequence], wait: {number} how long to display each image, offset:{number} time for image fade(css transition time), class: [Array of classes to add to element]}
 * @api public
 */
	var init = function(args) {

    container = document.createElement('div');
    container.className = 'sequence-container';
    offset = args.offset || 1000;
    wait = args.wait || 1500;

    if (args.images !== undefined && args.images.length > 0) {
      if (!Array.isArray(args.images)) {
        return console.error('Images property must be an array');
      } else {
        imgCount = args.images.length;
        args.images.forEach(function(img, i) {
          if (typeof img != 'string') return console.error('Images must be URL string');
          var imgClass = 'hide';
          var newImg = document.createElement('img');
          newImg.setAttribute('src', img);
          newImg.setAttribute('class', imgClass);
          container.appendChild(newImg);
          newImg.onload = function() {
            loadCount++;
          };
        });
      }
    } else {
      return console.error('Sequence must be instatiated with images');
    }

    if (args.class != undefined && args.class.length > 0) {
			if (!Array.isArray(args.class)) return console.error('Class property needs to be an array.');
			args.class.forEach(function(className) {
				container.classList.add(className);
			});
		}

	};

	/**
	 * Progress the Sequence
	 *
	 * ### Examples:
	 *
	 * seq.cycle();
	 *
	 * @api private
	 */
	var cycle = function() {
      if (imageIndex == container.childNodes.length) {
        return remove();
      } else {
        setTimeout(function() {
          container.childNodes[imageIndex].classList.remove('hide');
          container.childNodes[imageIndex].classList.add('show');
        }, 500);

        setTimeout(function() {
          container.childNodes[imageIndex].classList.remove('show');
          container.childNodes[imageIndex].classList.add('hide');

          setTimeout(function() {
            imageIndex++;
            cycle();
          }, offset);

        }, wait);
      }
	};

  /**
	 * Make sure all images are loaded before display
	 *
	 * ### Examples:
	 *
	 * seq.checkLoad();
	 *
	 * @api private
	 */
  var checkLoad = function(callback) {
    if (loadCount == imgCount) {
      document.body.appendChild(container);
      cycle();
      callback();
    } else {
      setTimeout(function() {
        checkLoad(callback);
      }, 500);
    }
  };

	/**
	 * Remove Sequence from DOM
	 *
	 * ### Examples:
	 *
	 * seq.remove();
	 * @api public
	 */
	var remove = function() {
    clearInterval(interval);
    interval = null;
    setTimeout(function() {
      document.body.removeChild(container);
    }, 500);
	};

	/**
	 * Insert Sequence to DOM
	 *
	 * ### Examples:
	 *
	 * seq.insert();
	 * @api public
	 */
	var insert = function(callback) {
    checkLoad(callback);
	};

	return {
		init: init,
		remove: remove,
		insert: insert
	};

};
