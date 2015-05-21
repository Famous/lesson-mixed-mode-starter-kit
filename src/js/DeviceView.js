var ScreenView = require('./ScreenView');
var OBJView = require('./OBJView');

function DeviceView(node, options) {

	// Add screenNode and screenView

	this.screenNode = node.addChild()
		.setProportionalSize(0.95, 0.6, 1.0)
		.setMountPoint(0.5, 0.5, 0.5)
		.setAlign(0.5, 0.48, 0.155);

	this.screenView = new ScreenView(
		this.screenNode,

		// Pass down screen options

		options.screen
	);

	// Add our objNode and objView

	this.objNode = node.addChild();
	this.objView = new OBJView(
		this.objNode,

		// Pass down obj URLs to load

		options.OBJPeices
	);
}

module.exports = DeviceView;