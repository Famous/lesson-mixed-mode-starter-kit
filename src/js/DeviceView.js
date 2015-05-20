var ScreenView = require('./ScreenView');
var OBJView = require('./OBJView');

function DeviceView(node, options) {

	// Add screenNode and screenView

	this.screenNode = node.addChild()
		.setProportionalSize(0.93, 0.58, 1.0)
		.setRotation(0, 0, 0)
		.setMountPoint(0.5, 0.5, 0.5)
		.setAlign(0.5, 0.48, 0.168);

	this.screenView = new ScreenView(
		this.screenNode,
		{
			url: options.iframeURL
		}
	);

	// Add our objNode and objView

	this.objNode = node.addChild();
	this.objView = new OBJView(
		this.objNode,

		// Pass down obj URLs to load

		{
			objs: options.objs
		}
	);
}

module.exports = DeviceView;