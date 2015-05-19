var PointLight = require('famous/webgl-renderables/lights/PointLight');
var FamousEngine = require('famous/core/FamousEngine');
var Camera = require('famous/components/Camera');
var Color = require('famous/utilities/Color');
var DOMElement = require('famous/dom-renderables/DOMElement');
var DeviceView = require('./DeviceView');

function App(scene) {

	// Add a camera to our scene for perspective rendering.

	var camera = new Camera(scene)
		.setDepth(1000);

	// Add mesh to our scene.

	var laptopNode = scene.addChild()
	    .setOrigin(0.5, 0.5, 0.5)
	    .setAlign(0.5, 0.5, 0.5)
	    .setMountPoint(0.5, 0.5, 0.5)
	    .setSizeMode(1, 1, 1)
	    .setAbsoluteSize(200, 200, 200);

	var deviceView = new DeviceView(laptopNode, {});

	// Add light component to our scene.

	var lightNode = scene.addChild()
		.setAlign(0.5, 0.5, 0.5)
		.setPosition(0, 0, 250);

	var light = new PointLight(lightNode, new Color('white'))

	// Save reference to our Famous clock

	var clock = FamousEngine.getClock();

	// Define update loop

	clock.setInterval(function() {
		var time = clock.getTime();

		laptopNode.setRotation(
			time / 1500,
			time / 1200,
			time / 1300
		);

	}, 16);
}

module.exports = App;