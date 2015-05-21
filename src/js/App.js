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
	    .setRotation(1.5, 0, 0)
	    .setSizeMode(1, 1, 1)
	    .setPosition(0, 0, 0)
	    .setAbsoluteSize(600, 600, 600);

	var deviceView = new DeviceView(
		deviceNode,
		{
			screen: {
				iframeURL: 'http://famous.co/',
				baseColor: 'black',
				glossiness: 500,
				glossColor: 'white'
			},
			OBJPeices: [
				{
					baseColor: 'silver',
					glossiness: 500,
					glossColor: '#444'
				},
				{
					geometry: 'keyboard',
					baseColor: '#181818',
					glossiness: 20,
					glossColor: 'white'
				},
				{
					geometry: 'screen',
					baseColor: 'black',
					glossiness: 500,
					glossColor: 'white'
				},
				{
					geometry: 'body',
					baseColor: 'silver',
					glossiness: 5,
					glossColor: '#222'
				},
				{
					geometry: 'logo',
					baseColor: 'white',
					glossiness: 5000,
					glossColor: 'white'
				},
				{
					geometry: 'lid',
					baseColor: 'silver',
					glossiness: 15,
					glossColor: '#444'				
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