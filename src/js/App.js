var PointLight = require('famous/webgl-renderables/lights/PointLight');
var FamousEngine = require('famous/core/FamousEngine');
var Mesh = require('famous/webgl-renderables/Mesh');
var Camera = require('famous/components/Camera');
var Color = require('famous/utilities/Color');

function App(scene) {

    // Add a camera to our scene for perspective rendering.

    var camera = new Camera(scene)
        .setDepth(1000);

    // Add mesh to our scene.

    var meshNode = scene.addChild()
        .setOrigin(0.5, 0.5, 0.5)
        .setAlign(0.5, 0.5, 0.5)
        .setMountPoint(0.5, 0.5, 0.5)
        .setSizeMode(1, 1, 1)
        .setAbsoluteSize(200, 200, 200);

    var mesh = new Mesh(meshNode)
        .setGeometry('Box');

    // Add light component to our scene.

    var lightNode = scene.addChild()
        .setAlign(0.5, 0.5, 0.5)
        .setPosition(0, 0, 250);

    var light = new PointLight(lightNode)
        .setColor(new Color('white'));

    // Save reference to our Famous clock

    var clock = FamousEngine.getClock();

    // Define update loop

    FamousEngine.getClock().setInterval(function() {
        var time = clock.getTime();

        meshNode.setRotation(
            time / 1500,
            time / 1200,
            time / 1300
        );

    }, 16);
}

module.exports = App;