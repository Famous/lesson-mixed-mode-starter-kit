var DOMElement = require('famous/dom-renderables/DOMElement');
var Mesh = require('famous/webgl-renderables/Mesh');
var Color = require('famous/utilities/Color');

function ScreenView(node, options) {

	this.element = new DOMElement(node, {
		tagName: 'iframe'
	})
	.setAttribute('src', options.iframeURL)
	.setProperty('border', 'none');

	this.mesh = new Mesh(node)
		.setGeometry('Plane')
		.setBaseColor(new Color('black').setOpacity(0))
		.setGlossiness(new Color(options.glossColor), options.glossiness);
}

module.exports = ScreenView;