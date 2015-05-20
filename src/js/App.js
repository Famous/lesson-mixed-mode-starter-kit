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
	    .setRotation(0.3)
	    .setSizeMode(1, 1, 1)
	    .setPosition(0, 0, 200)
	    .setAbsoluteSize(600, 600, 600);

	var deviceView = new DeviceView(
		deviceNode,
		{
			iframeURL: 'http://famous.co/',
			objs: [
				{
					url: 'obj/macbook/body.obj',
					baseColor: 'silver',
					glossiness: 500
				},
				{
					url: 'obj/macbook/keyboard.obj',
					baseColor: '#181818',
					glossiness: 20
				},
				{
					url: 'obj/macbook/lid.obj',
					baseColor: 'silver',
					glossiness: 5
				},
				{
					url: 'obj/macbook/screen.obj',
					baseColor: 'black',
					glossiness: 500
				},
				{
					url: 'obj/macbook/vents.obj',
					baseColor: 'silver',
					glossiness: 20					
				}
			]
		}
	);

	// Add light component to our scene.

	var lightNode = scene.addChild()
		.setAlign(0.5, 0.5, 0.5)
		.setPosition(0, 0, 700);

	var light = new PointLight(lightNode)
		.setColor(new Color('white'))

	// Save reference to our Famous clock

	var clock = FamousEngine.getClock();

	// Define update loop

	clock.setInterval(function() {
		var time = clock.getTime();

		deviceNode.setRotation(
			0,
			time / 1500,
			0
		);

	}, 16);
}

module.exports = App;