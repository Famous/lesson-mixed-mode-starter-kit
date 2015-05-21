var ScreenView = require('./ScreenView');
var OBJView = require('./OBJView');

function DeviceView(node) {

	// Add screenNode and screenView

	this.screenNode = node.addChild()
	this.screenView = new ScreenView(this.screenNode);

	// Add our objNode and objView

	this.objNode = node.addChild();
	this.objView = new OBJView(this.objNode);
}

module.exports = DeviceView;