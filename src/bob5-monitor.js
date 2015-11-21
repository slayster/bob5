/**
 * File containing mouse monitor storage objects for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */ 
 
function bob5HoverMonitor() {

    function getFreeSpot() {
        this.currentSpace++;
        if (this.currentSpace>=hoverObjects.length) {
            this.currentSpace = 0;
        }
        if (hoverObjects[this.currentSpace]==null) {
            return this.currentSpace;
        } else {
            found = false;
            loopPos = this.currentSpace + 1;
            if (loopPos>=hoverObjects.length) {
                loopPos = 0;
            }
            while ( (loopPos!=this.currentSpace) && (!found) ) {
                if ( hoverObjects[loopPos]==null ) {
                    found = true;
                } else {
                    loopPos++;
                    if (loopPos>=hoverObjects.length) {
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
    
    function add(ao) {
        id = this.getFreeSpot();
        hoverObjects[id] = ao;
        ao.setHoverId(id);
        return id;
    }
    
    function remove(ao) {
        hoverObjects[ao.getHoverId()] = null;
    }
    
    function clear() {
        hoverObjects = new Array(this.currentSize);
        this.currentSpace = 0;
    }
    
    this.currentSpace = 0;
    this.currentSize = 300;
    hoverObjects = new Array(this.currentSize);
    
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.getFreeSpot = getFreeSpot;
}

// ### MOUSE DOWN MONITOR OBJECT ### //

function bob5MouseDownMonitor() {

    function getFreeSpot() {
        this.currentSpace++;
        if (this.currentSpace>=mouseDownObjects.length) {
            this.currentSpace = 0;
        }
        if (mouseDownObjects[this.currentSpace]==null) {
            return this.currentSpace;
        } else {
            found = false;
            loopPos = this.currentSpace + 1;
            if (loopPos>=mouseDownObjects.length) {
                loopPos = 0;
            }
            while ( (loopPos!=this.currentSpace) && (!found) ) {
                if ( mouseDownObjects[loopPos]==null ) {
                    found = true;
                } else {
                    loopPos++;
                    if (loopPos>=mouseDownObjects.length) {
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
    
    function add(ao) {
        id = this.getFreeSpot();
        mouseDownObjects[id] = ao;
        ao.setMouseDownId(id);
        return id;
    }
    
    function remove(ao) {
        mouseDownObjects[ao.getMouseDownId()] = null;
    }
    
    function clear() {
        mouseDownObjects = new Array(this.currentSize);
        this.currentSpace = 0;
    }
    
    this.currentSpace = 0;
    this.currentSize = 300;
    mouseDownObjects = new Array(this.currentSize);
    
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.getFreeSpot = getFreeSpot;
}

// ### MOUSE UP MONITOR OBJECT ### //

function bob5MouseUpMonitor() {

    function getFreeSpot() {
        this.currentSpace++;
        if (this.currentSpace>=mouseUpObjects.length) {
            this.currentSpace = 0;
        }
        if (mouseUpObjects[this.currentSpace]==null) {
            return this.currentSpace;
        } else {
            found = false;
            loopPos = this.currentSpace + 1;
            if (loopPos>=mouseUpObjects.length) {
                loopPos = 0;
            }
            while ( (loopPos!=this.currentSpace) && (!found) ) {
                if ( mouseUpObjects[loopPos]==null ) {
                    found = true;
                } else {
                    loopPos++;
                    if (loopPos>=mouseUpObjects.length) {
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
    
    function add(ao) {
        id = this.getFreeSpot();
        mouseUpObjects[id] = ao;
        ao.setMouseUpId(id);
        return id;
    }
    
    function remove(ao) {
        mouseUpObjects[ao.getMouseUpId()] = null;
    }
    
    function clear() {
        mouseUpObjects = new Array(this.currentSize);
        this.currentSpace = 0;
    }
    
    this.currentSpace = 0;
    this.currentSize = 300;
    mouseUpObjects = new Array(this.currentSize);
    
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.getFreeSpot = getFreeSpot;
}

// ### MOUSE CLICK MONITOR OBJECT ### //

function bob5MouseClickMonitor() {

    function getFreeSpot() {
        this.currentSpace++;
        if (this.currentSpace>=mouseClickObjects.length) {
            this.currentSpace = 0;
        }
        if (mouseClickObjects[this.currentSpace]==null) {
            return this.currentSpace;
        } else {
            found = false;
            loopPos = this.currentSpace + 1;
            if (loopPos>=mouseClickObjects.length) {
                loopPos = 0;
            }
            while ( (loopPos!=this.currentSpace) && (!found) ) {
                if ( mouseClickObjects[loopPos]==null ) {
                    found = true;
                } else {
                    loopPos++;
                    if (loopPos>=mouseClickObjects.length) {
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
    
    function add(ao) {
        id = this.getFreeSpot();
        mouseClickObjects[id] = ao;
        ao.setMouseClickId(id);
        return id;
    }
    
    function remove(ao) {
        mouseClickObjects[ao.getMouseClickId()] = null;
    }
    
    function clear() {
        mouseClickObjects = new Array(this.currentSize);
        this.currentSpace = 0;
    }
    
    this.currentSpace = 0;
    this.currentSize = 300;
    mouseClickObjects = new Array(this.currentSize);
    
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.getFreeSpot = getFreeSpot;
}
