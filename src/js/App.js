var FamousEngine = require('famous/core/FamousEngine');

function App(options) {

	// Create the scene based on an input selector.

	var scene = FamousEngine.createScene(options.selector);

	// Add a child node to add our mesh to.

	var child = scene.addChild();

	// Pass child node into new Mesh component.

	var mesh = new Mesh(child);

	// Give the mesh a geometry.

	mesh.setGeometry('Box');
}

module.exports = App;