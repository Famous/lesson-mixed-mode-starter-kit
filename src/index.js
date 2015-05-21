var FamousEngine = require('famous/core/FamousEngine');

// Create the scene based on a selector.

var scene = FamousEngine.createScene('body');

// Initialize the engine.
	
FamousEngine.init();

// App Code

var App = require('./js/App');
var app = new App(scene);
