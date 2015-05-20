var DOMElement = require('famous/dom-renderables/DOMElement');
var Mesh = require('famous/webgl-renderables/Mesh');
var Color = require('famous/utilities/Color');

function ScreenView(node, options) {
	this.element = new DOMElement(node, {
		tagName: 'iframe',
	})
	.setAttribute('src', options.url)
	.setProperty('border', 'none');

	this.meshNode = node.addChild()
		.setPosition(0, 0, 0)
		.setOpacity(0.1);

	this.mesh = new Mesh(this.meshNode)
		.setGeometry('Plane')
		.setBaseColor(new Color('black'))
		.setGlossiness(new Color('white'), 500);
}

module.exports = ScreenView;