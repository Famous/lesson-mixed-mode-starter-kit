var OBJLoader = require('famous/webgl-geometries/OBJLoader');
var Mesh = require('famous/webgl-renderables/Mesh');
var Geometry = require('famous/webgl-geometries/Geometry');

function OBJView(node, options) {
	this.node = node;

	for (var i = 0; i < options.urls.length; i++) {
		OBJLoader.load(options.urls[i], function(buffers) {

			var geometry = new Geometry({
				buffers: [
					{ name: 'a_pos', data: buffers.vertices, size: 3 },
					{ name: 'a_normals', data: buffers.normals, size: 3 },
					{ name: 'a_texCoords', data: buffers.textureCoords, size: 2 },
					{ name: 'indices', data: buffers.indices, size: 1 }
				]
			});

			var node = this.node.addChild();
			var mesh = new Mesh(node)
				.setGeometry(geometry)

		}.bind(this));
	}
}

module.exports = OBJView;