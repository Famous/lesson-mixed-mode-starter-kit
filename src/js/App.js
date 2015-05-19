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
	    .setSizeMode(1, 1, 1)
	    .setAbsoluteSize(500, 500, 500);

	var deviceView = new DeviceView(
		deviceNode,
		{
			objURLs: [
				'obj/macbook/Body.obj',
				'obj/macbook/bolts.obj',
				'obj/macbook/cap_bottom.obj',
				'obj/macbook/cap.obj',
				'obj/macbook/hdmi.obj',
				'obj/macbook/Keyboard.obj',
				'obj/macbook/lattice_01.obj',
				'obj/macbook/lattice_02.obj',
				'obj/macbook/Mini_Displ_01.obj',
				'obj/macbook/Mini_Displ_02.obj',
				'obj/macbook/Out_Phone.obj',
				'obj/macbook/Power_port.obj',
				'obj/macbook/sdxc_card.obj',
				'obj/macbook/USB_01.obj',
				'obj/macbook/USB_02.obj'
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
			Math.sin(time / 1500) * 0.1,
			Math.sin(time / 1500) * 0.1,
			Math.sin(time / 1500) * 0.1
		);

	}, 16);
}

module.exports = App;