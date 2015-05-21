---
layout: default
title: Mixing Modes
---

## DOM meets WebGL

Let's get straight to it.  How do we 'mix modes'?

First let's change our 'Box' geometry to a 'Sphere' to better visualize this mixed-mode-magic^tm.

    var mesh = new Mesh(meshNode)
        .setGeometry('Sphere');


Now lets add a div to our scene.


    var element = new DOMElement(meshNode)
        .setProperty('background-color', 'pink');


Congratulations! You have mixed modes!  You should see a DOM 'div' elemnt intersecting a WebGL sphere.

## Explanation

You might have noticed that we used the same node for our __Mesh__ as our __DOMElement__.  This means both of these components have the same and position.  You can think of size in Famous as a bounding box for both DOMElements and WebGL shapes.  The sphere perfectly fits within the DOMElement here because it shares the same bounding box.

Switching back to a Box geometry helps illustrate this point.

    var mesh = new Mesh(meshNode)
        .setGeometry('Box');


Doing this actually completely obscures the DOMElement.  Because they share the same bounding box, and the Box completely fills this bounding box, the DOMElement cannot be seen.

Try experimenting with other geometries like `Torus` and `Tetrahedron` to see other geometries fill this bounding box.





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