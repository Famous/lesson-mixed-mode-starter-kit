---
layout: default
title: Details, Details
---

## Adding Colors!

Finally, let's add some color to our laptop.

In `App.js` we'll pass down some extra data for each of our OBJs.

    var deviceView = new DeviceView(
        deviceNode,
        {
            screen: {
                iframeURL: 'http://famous.co/',
                baseColor: 'black',
                glossiness: 500,
                glossColor: 'white'
            },
            OBJPeices: [
                {
                    baseColor: 'silver',
                    glossiness: 500,
                    glossColor: '#444'
                },
                {
                    geometry: 'keyboard',
                    baseColor: '#181818',
                    glossiness: 20,
                    glossColor: 'white'
                },
                {
                    geometry: 'screen',
                    baseColor: 'black',
                    glossiness: 500,
                    glossColor: 'white'
                },
                {
                    geometry: 'body',
                    baseColor: 'silver',
                    glossiness: 5,
                    glossColor: '#222'
                },
                {
                    geometry: 'logo',
                    baseColor: 'white',
                    glossiness: 5000,
                    glossColor: 'white'
                },
                {
                    geometry: 'lid',
                    baseColor: 'silver',
                    glossiness: 15,
                    glossColor: '#444'              
                }
            ]
        }
    );

We'll pass this data down in our DeviceView

    this.objNode = node.addChild();
    this.objView = new OBJView(
        this.objNode,

        // Pass down obj URLs to load

        options.OBJPeices
    );

And now when we load our OBJs and create our meshes, we can use some other basic functionality of Mesh.  

Setting baseColor of Mesh tells Famous what color to paint the surface of the Mesh.

    mesh.setBaseColor(new Color('pink'));

Setting glossiness tells Famous how shiny the mesh is, and what color the specular reflections are.

    mesh.setGlossiness(new Color('white'), 50);


Let's update our OBJView to use our new color and glossiness data.

    function OBJView(node, peices) {

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
                    .setBaseColor(new Color(peices[i].baseColor))
                    .setGlossiness(new Color(peices[i].glossColor), peices[i].glossiness);
            }
        });
    }

Our values that we are using to affect the color of the mesh, like baseColor, glossColor, and glossiness strength are determined by the values passed down in App.js.

Now our laptop looks a bit more realistic! But there's one last thing...

How could we add the specular highlights to our DOM screen?

    function ScreenView(node, options) {

        this.element = new DOMElement(node, {
            tagName: 'iframe'
        })
        .setProperty('backface-visibility', 'none')
        .setAttribute('src', options.iframeURL)
        .setProperty('border', 'none');

        this.mesh = new Mesh(node)
            .setGeometry('Plane')
            .setBaseColor(new Color(options.baseColor).setOpacity(0))
            .setGlossiness(new Color(options.glossColor), options.glossiness);
    }

If we add a mesh to our ScreenNode and give it a baseColor with opacity 0, we can get a glass like overlay on our DOM, so they WebGL plane is completely see through, but we still get the specular highlights.






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