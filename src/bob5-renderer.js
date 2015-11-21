/**
 * File containing renderer object for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */   
        
 
function bob5Renderer() {

    // main renderer repeated loop
    function doRender() {
        bob5CanvasBuffer.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // loop renderable objects - call their draw method - add to back buffer
        for (i=0; i<renderableObjects.length; i++) {
            if (renderableObjects[i]!=null) {
                renderableObjects[i].draw();
            }
        }
        // show fps?
        if (showFPS==true) {
            frameCounter.newFrame();
            frameCounter.draw();
        }
        // custom cursor?
        if (customCursor==true) {
            customCursorObject.draw();
        }        
        // swap buffers
        bob5Canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        bob5Canvas.drawImage(bob5BackBuffer, 0, 0);
        // still running? repeat
        if (this.renderRunning==true) {
            setTimeout("renderer.doRender()", RENDER_SPEED);
        }
    }
    
    function startRender() {
        this.renderRunning = true;
        this.doRender();
    }
    
    function stopRender() {
        this.renderRunning = false;
    }
    
    function getFreeSpot() {
        this.currentSpace++;
        if (this.currentSpace>=renderableObjects.length) {
            this.currentSpace = 0;
        }
        if (renderableObjects[this.currentSpace]==null) {
            return this.currentSpace;
        } else {
            found = false;
            loopPos = this.currentSpace + 1;
            if (loopPos>=renderableOjects.length) {
                loopPos = 0;
            }
            while ( (loopPos!=this.currentSpace) && (!found) ) {
                if ( renderableObjects[loopPos]==null ) {
                    found = true;
                } else {
                    loopPos++;
                    if (loopPos>=renderableObjects.length) {
                        loopPos = 0;
                    }
                }
            }
            if (!found) {
                loopPos++;
                this.currentSize = this.currentSize + 100;
                newroa = new Array(this.currentSize);
                // arraycopy
                //System.arraycopy(renderableObjects, 0, newroi, 0, renderableObjects.length-1);
                //renderableObjects = newroi;
            }
            this.currentSpace = loopPos;
            return this.currentSpace;            
        }
    }
    
    function add(ro) {
        id = this.getFreeSpot();
        renderableObjects[id] = ro;
        ro.setRendererId(id);
        return id;
    }
    
    function remove(ro) {
        renderableObjects[ro.getRendererId()] = null;
    }
    
    function clear() {
        renderableObjects = new Array(this.currentSize);
        this.currentSpace = 0;
    }
    
    this.renderRunning = false;
    this.currentSpace = 0;
    this.currentSize = 300;
    renderableObjects = new Array(this.currentSize);
    
    this.doRender = doRender;
    this.startRender = startRender;
    this.stopRender = stopRender;
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.getFreeSpot = getFreeSpot;
}
