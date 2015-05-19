var ScreenView = require('./ScreenView');
var OBJView = require('./OBJView');

function DeviceView(node, options) {
	this.screenNode = node.addChild();
	this.screenView = new ScreenView(this.screenNode);

	this.objNode = node.addChild();
	this.objView = new OBJView(this.objNode);
}

module.exports = DeviceView;