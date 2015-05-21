---
layout: default
title: The iFrame Screen
---

## Lining it up

Our screen DOMElement should be overlapping our laptop model right now.  We need to move so it sits right at the position of the screen.  

We should pass down our iframe URL in `App.js`.

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
        deviceNode,
        {
            iframeURL: 'http://famous.org/'
        }
    );

And then pass down this URL to the ScreenView.

    this.screenView = new ScreenView(
        this.screenNode,
        {
            url: options.iframeURL
        }
    );

To get the size just right, we should use Proportional size, so the node always stays the same size relative to the parent.

    
    .setProportionalSize(0.95, 0.6, 1.0)
    

We should use mountPoint and align to set its position so that it is always in the same position relative to its parent.


    .setMountPoint(0.5, 0.5, 0.5)
    .setAlign(0.5, 0.48, 0.155)


The screenView should lay perfectly over the laptop screen as it rotates now.

## The iFrame

Now lets add the iframe.  To change our screen 'div' to an iframe we shoul add some extra parameters into our constructors.


    function ScreenView(node, options) {
        this.element = new DOMElement(node, {
            tagName: 'iframe',
        })
    }

Next step is loading the iframe url, we can input this property using the 'setAttribute' method on our element.

Make sure to pass down this option from DeviceView into our ScreenView options.


    function ScreenView(node, options) {
        this.element = new DOMElement(node, {
            tagName: 'iframe',
        })
        .setAttribute('src', options.url)
        .setProperty('overflow', 'hidden')
        .setProperty('border', 'none');
    }





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
