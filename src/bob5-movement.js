/**
 * File containing movement controller storage objects for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */ 

function bob5MovementController() {

    // main controller repeated loop
    function doMovement() {
        // loop moving objects - call their move method
        for (i=0; i<movingObjects.length; i++) {
            if (movingObjects[i]!=null) {
                movingObjects[i].move();
            }
        }
        // still running? repeat
        if (this.running==true) {
            setTimeout("movecontroller.doMovement()",2);
        }
    }
    
    function startMovement() {
        this.running = true;
        this.doMovement();
    }
    
    function stopMovement() {
        this.running = false;
    }
    
    function getFreeSpot() {
        this.currentSpace++;
        if (this.currentSpace>=movingObjects.length) {
            this.currentSpace = 0;
        }
        if (movingObjects[this.currentSpace]==null) {
            return this.currentSpace;
        } else {
            found = false;
            loopPos = this.currentSpace + 1;
            if (loopPos>=movingObjects.length) {
                loopPos = 0;
            }
            while ( (loopPos!=this.currentSpace) && (!found) ) {
                if ( movingObjects[loopPos]==null ) {
                    found = true;
                } else {
                    loopPos++;
                    if (loopPos>=movingObjects.length) {
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
    
    function add(mo) {
        id = this.getFreeSpot();
        movingObjects[id] = mo;
        mo.setMoverId(id);
        return id;
    }
    
    function remove(mo) {
        movingObjects[mo.getMoverId()] = null;
    }
    
    function clear() {
        movingObjects = new Array(this.currentSize);
        this.currentSpace = 0;
    }
    
    this.running = false;
    this.currentSpace = 0;
    this.currentSize = 300;
    movingObjects = new Array(this.currentSize);
    
    this.doMovement = doMovement;
    this.startMovement = startMovement;
    this.stopMovement = stopMovement;
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.getFreeSpot = getFreeSpot;
}
