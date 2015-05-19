var DOMElement = require('famous/dom-renderables/DOMElement');

function ScreenView(node, options) {
	this.element = new DOMElement(node)
		.setProperty('background-color', 'white')
		.setContent('This is the ScreenView!');
}

module.exports = ScreenView;