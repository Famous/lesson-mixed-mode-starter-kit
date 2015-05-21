---
layout: default
title: Using Meshes
---

## The Mesh Component

Before thinking about how to structure our demo, we should learn about the primary component of the WebGLRenderer, the __Mesh Component__

## Boilerplate

Let's get our app up and running with some boilerplate code.  This should look familiar.  Copy and paste the code snippets below into `index.js`.

    var FamousEngine = require('famous/core/FamousEngine');

    // Create the scene based on a selector.

    var scene = FamousEngine.createScene('body');

    // Initialize the engine.
        
    FamousEngine.init();

    // App Code

    var App = require('./js/App');
    var app = new App(scene);

The App code section at the bottom of the index page is where we create our app and pass in a selector.  If we look into `App.js` we can see exactly what this App function is.

## Creating our App

    var FamousEngine = require('famous/core/FamousEngine');
    var Mesh = require('famous/webgl-renderables/Mesh');

    function App(scene) {

        // Add a child node to add our mesh to.

        var child = scene.addChild();

        // Pass child node into new Mesh component.

        var mesh = new Mesh(child);

        // Give the mesh a geometry.

        mesh.setGeometry('Circle');
    }

    module.exports = App;

Here you can see that our App is nothing more than a function that takes in a scene as an argument.  

From there, a child node is added to the scene and passed into the __Mesh Component__.  You can think of a mesh as a WebGL object.  In drawing our mesh, we must decide it's geometry (shape) and its color.

In the above example we set our Mesh's geometry to that of a circle.  We won't set the color of the Mesh quite yet, which should leave the mesh with the default color.

The result is a soothing-gray circle, the size of our scene, which in this case is the size of screen.

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