var DOMElement = require('famous/dom-renderables/DOMElement');

function OBJView(node, options) {
	this.element = new DOMElement(node)
		.setProperty('background-color', 'pink')
		.setContent('This is the OBJView!');
}

module.exports = OBJView;