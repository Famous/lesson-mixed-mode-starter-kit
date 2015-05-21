---
layout: default
title: Importing the Model
---

## OBJs

Here's the fun part.  Let's import our 3d models using the Famous OBJLoader.  We'll start by resizing and positioning our deviceNode.

`App.js`

    // Add the device view to our scene.

    var deviceNode = scene.addChild()
        .setOrigin(0.5, 0.5, 0.5)
        .setAlign(0.5, 0.5, 0.5)
        .setMountPoint(0.5, 0.5, 0.5)
        .setRotation(0.2)
        .setSizeMode(1, 1, 1)
        .setPosition(0, 0, 200)
        .setAbsoluteSize(600, 600, 600);

    var deviceView = new DeviceView(
        deviceNode
    );


In OBJView we'll use the OBJLoader to make the request for our OBJ asset.  We provide a callback function that is passed all the data we need to create our Mesh's custom geometry.

    OBJLoader.load('obj/macbook.obj', function(geometries) {
        // Create custom geometries here
    });

After the OBJLoader makes a request for the OBJ file it parses the data and passes it to our callback.  Now we can take the data, and use it to create a new Geometry.

    OBJLoader.load('obj/macbook.obj', function(geometries) {
        for (var i = 0; i < geometries.length; i++) {
            var buffers = geometries[i];
            var geometry = new Geometry({
                buffers: [
                    { name: 'a_pos', data: buffers.vertices, size: 3 },
                    { name: 'a_normals', data: buffers.normals, size: 3 },
                    { name: 'a_texCoords', data: buffers.textureCoords, size: 2 },
                    { name: 'indices', data: buffers.indices, size: 1 }
                ]
            });
        }
    });

For more details on exactly what is going on here, check out the __Geometry__ documentation, but for now we will assume that this code will generate a new geometry based on our desired OBJ.

Now we can put that geometry into our mesh

    OBJLoader.load('obj/macbook.obj', function(geometries) {
        for (var i = 0; i < geometries.length; i++) {
            var buffers = geometries[i];

            var geometry = new Geometry({
                buffers: [
                    { name: 'a_pos', data: buffers.vertices, size: 3 },
                    { name: 'a_normals', data: buffers.normals, size: 3 },
                    { name: 'a_texCoords', data: buffers.textureCoords, size: 2 },
                    { name: 'indices', data: buffers.indices, size: 1 }
                ]
            });

            var peiceNode = node.addChild();
            var mesh = new Mesh(peiceNode)
                .setGeometry(geometry)
        }
    });




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

