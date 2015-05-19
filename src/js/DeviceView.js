var ScreenView = require('./ScreenView');
var OBJView = require('./OBJView');

function DeviceView(node, options) {

	// Add screenNode and screenView

	this.screenNode = node.addChild()
	this.screenView = new ScreenView(this.screenNode);

	// Add our objNode and objView

	this.objNode = node.addChild();
	this.objView = new OBJView(
		this.objNode,

		// Pass down obj URLs to load
		
		{
			urls: options.objURLs
		}
	);
}

module.exports = DeviceView;