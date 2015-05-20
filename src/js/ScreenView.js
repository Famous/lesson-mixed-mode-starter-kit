var DOMElement = require('famous/dom-renderables/DOMElement');

function ScreenView(node, options) {
	this.element = new DOMElement(node, {
		tagName: 'iframe',
	})
	.setAttribute('src', options.url)
	.setProperty('border', 'none');
}

module.exports = ScreenView;