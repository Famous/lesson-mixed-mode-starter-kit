var ScreenView = require('./ScreenView');
var OBJView = require('./OBJView');

function DeviceView(node, options) {

	// Add screenNode and screenView

	this.screenNode = node.addChild()
		.setSizeMode(1, 1, 1)
		.setAbsoluteSize(200, 200, 200);

	this.screenView = new ScreenView(this.screenNode);

	// Add our objNode and objView

	this.objNode = node.addChild()
		.setPosition(0, 200, 0)
		.setSizeMode(1, 1, 1)
		.setAbsoluteSize(200, 200, 200);

	this.objView = new OBJView(this.objNode);
}

module.exports = DeviceView;