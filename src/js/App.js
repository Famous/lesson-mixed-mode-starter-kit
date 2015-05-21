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

	// Add the device view to our scene.

	var deviceNode = scene.addChild()
	    .setOrigin(0.5, 0.5, 0.5)
	    .setAlign(0.5, 0.5, 0.5)
	    .setMountPoint(0.5, 0.5, 0.5)
	    .setRotation(0.2)
	    .setSizeMode(1, 1, 1)
	    .setPosition(0, 0, 200)
	    .setAbsoluteSize(600, 600, 600);

	var deviceView = new DeviceView(
		deviceNode
	);

	// Add light component to our scene.

	var lightNode = scene.addChild()
		.setAlign(0.5, 0.5, 0.5)
		.setPosition(0, 0, 700);

	var light = new PointLight(lightNode)
		.setColor(new Color('white'))

	// Define update loop

	var updater = deviceNode.addComponent({
		onUpdate: function onUpdate(time) {
			deviceNode.setRotation(
				-0.2,
				Math.sin(time / 1500) * 0.5,
				0
			);

			deviceNode.requestUpdateOnNextTick(updater);
		}
	});

	deviceNode.requestUpdateOnNextTick(updater);
}

module.exports = App;