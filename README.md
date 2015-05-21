---
layout: default
title: Lights, Camera, Action
---

## Next steps

Now let's make some changes to our app and we'll step through them one by one.  This is what our App.js should look like now:


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


We changed our Circle to a Box to give it some volume.

    .setGeometry('Box');


Also, you'll notice that the node we are using for our mesh was given some properties now.  In case you don't know what these setters are doing here's a quick reference.

- __origin__: sets point on this node about which to rotate
- __align__: sets point on parent node about which to mount this node
- __mountPoint__: sets point on this node about mount itself
- __sizeMode__: sets sizing 'mode' (relative, absolute, render) for X, Y, and Z size of this node
- __absoluteSize__: sets X, Y, and Z pixel size of this node
- __position__: set X, Y, Z pixel translation of this node

Now our box is 700px in size (for all dimensions) and still located in the center of the screen.

## Camera


    var camera = new Camera(scene)
        .setDepth(1000);


The first thing you'll notice is that we are using a new component, the __Camera Component__.  Adding this component and giving it a depth value (1000 in our case) will give our scene some perspective, making it feel more 3d.

## Lights


    var light = new PointLight(lightNode)
        .setColor(new Color('white'));


Here we add the __PointLight Component__ to our lightNode.  This tells the FamousEngine that there is a light located at the position of this node.  It is important that place this node where we want the light to be located.  We also set the color of the light using the `.setColor` method.

## Action

Finally, we add some movement.

    var clock = FamousEngine.getClock();

    // Define update loop

    clock.setInterval(function() {
        var time = clock.getTime();

        meshNode.setRotation(
            time / 1500,
            time / 1200,
            time / 1300
        );

    }, 16);


First we retreive the clock from the engine and use it to create a setInterval loop running every 16 milliseconds.  The API is identical to the window.setInterval, but it runs in the Famous update loop which helps your Famous animations stay in sync!

In this update loop we simply set the rotation of the node that our mesh is using, which of course sets rotation of the mesh.  Here we are using engine time to set X, Y, Z rotation of our node, which creates a slow, infinite spin.

Feel free to change the rate of spin here by change the time divisors for our X, Y, and Z values.  Also, try changing the position of the light in the scene and how the changes affect our Box.






The MIT License (MIT)

Copyright (c) 2015 Famous Industries Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.