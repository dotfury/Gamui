

<!-- Start app/scripts/energy-bar.js -->

## init({xPos:{string} 'left' or 'right' , yPos:{string} 'top' or 'bottom' , color:{string} , count:{number} , border: {boolean}, class: [Array of classes to add to element]})

Initialize an energy bar
EX: Life bar, Energy bar, etc.
### Examples:

var eBar = new EnergyBar();
eBar.init({xPos: 'right', yPos: 'top', color: 'blue', count: 1, border: true});

### Params:

* **object** *{xPos:{string} 'left' or 'right' , yPos:{string} 'top' or 'bottom' , color:{string} , count:{number} , border: {boolean}, class: [Array of classes to add to element]}* 

## update(percentage)

Update the energy bar %

### Examples:

eBar.update(90);

### Params:

* **number** *percentage* to update the energy bar with

## hide()

Hide energy bar

### Examples:

eBar.hide();

## show()

Show energy bar

### Examples:

eBar.show();

<!-- End app/scripts/energy-bar.js -->




<!-- Start app/scripts/fullscreen.js -->

## init()

Initialize a FullScreen object

### Examples:

var fSreen = new FullScreen();
fScreen.init();

## setFull()

Set browser window to full screen

### Examples:

fScreen.setFull();

## endFull()

Exit full screen

### Examples:

fScreen.endFull();

<!-- End app/scripts/fullscreen.js -->




<!-- Start app/scripts/interface.js -->

## INTERFACE

<!-- End app/scripts/interface.js -->




<!-- Start app/scripts/main.js -->

## onload()

<!-- End app/scripts/main.js -->




<!-- Start app/scripts/menu.js -->

## init({menuArray: , class: , parent: })

Initialize a menu
Useful for in game menus
Styled with css
### Examples:

var menu = new Menu();
menu.init({menuArray: [{title: 'play', type: 'action', action: startGame}], class: [Array of classes to add to element](optional), parent:{HTML} element to place menu(optional)});

### Params:

* **Object** *{menuArray: , class: , parent: }* 

## hide()

Hide menu
### Examples:

menu.hide();

## show()

Show menu
### Examples:

menu.show();

<!-- End app/scripts/menu.js -->




<!-- Start app/scripts/score-box.js -->

## init({xPos:{string} 'left' or 'right' , yPos:{string} 'top' or 'bottom', count:{number} , score: {number}(optional), class: [Array of classes to add to element](optional)})

Initialize a score box
Useful for in game popups, loading screen
Styled with css
### Examples:

var sBox = new ScoreBox();
sBox.init({xPos: 'left', yPos: 'top', count: 1});

### Params:

* **object** *{xPos:{string} 'left' or 'right' , yPos:{string} 'top' or 'bottom', count:{number} , score: {number}(optional), class: [Array of classes to add to element](optional)}* 

## update(Amount)

Update the score

### Examples:

sBox.update(90);

### Params:

* **number** *Amount* to increment score

## reset()

Reset the score

### Examples:

sBox.reset();

## hide()

Hide the score

### Examples:

sBox.hide();

## show()

Show the score

### Examples:

sBox.show();

<!-- End app/scripts/score-box.js -->




<!-- Start app/scripts/screen.js -->

## init({ element: HTML element in DOM to use, class: [Array of class names to add for styling, etc.]})

Initialize a screen
Useful for in game popups, loading screen
Styled with css
### Examples:

var iBox = new GameScreen();
iBox.init({element: 'instructions', class: ['cheese', 'main-instructions']});

### Params:

* **object** *{ element: HTML element in DOM to use, class: [Array of class names to add for styling, etc.]}* 

## show()

Display info box
### Examples:

iBox.show();

## hide()

Hide info box
### Examples:

iBox.hide();

## getElement()

Return the HTML element
### Examples:

iBox.getElement();

### Return:

* **HTML** element

<!-- End app/scripts/screen.js -->




<!-- Start app/scripts/social-bar.js -->

## init({ yPos:{string} 'top' or 'bottom' , facebook:{boolean} , twitter:{boolean} , google:{boolean} , url:{string} URL to share , class: [Array of class to add to element]})

Initialize a social bar
Useful for FB share, tweet, etc.
Styled with css
### Examples:

var socBar = new SocialBar();
socBar.init({yPos: 'bottom', url: 'http://google.com', facebook: true, twitter: true, google: true});

### Params:

* **object** *{ yPos:{string} 'top' or 'bottom' , facebook:{boolean} , twitter:{boolean} , google:{boolean} , url:{string} URL to share , class: [Array of class to add to element]}* 

## show()

Show social bar
### Examples:

socBar.show();

## hide()

Hide social bar
### Examples:

socBar.hide();

## parseButtons()

Initialize social buttons manually due to post loading

<!-- End app/scripts/social-bar.js -->

