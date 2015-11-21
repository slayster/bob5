/**
 * File containing animation controller object for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */   
 
 
function bob5AnimationController() {

    // main controller repeated loop
    function doAnimations() {
        // loop animating objects - call their animate method
        for (i=0; i<animatingObjects.length; i++) {
            if (animatingObjects[i]!=null) {
                animatingObjects[i].animate();
            }
        }
        // still running? repeat
        if (this.running==true) {
            setTimeout("anicontroller.doAnimations()",2);
        }
    }
    
    function startAnimation() {
        this.running = true;
        this.doAnimations();
    }
    
    function stopAnimation() {
        this.running = false;
    }
    
    function getFreeSpot() {
        this.currentSpace++;
        if (this.currentSpace>=animatingObjects.length) {
            this.currentSpace = 0;
        }
        if (animatingObjects[this.currentSpace]==null) {
            return this.currentSpace;
        } else {
            found = false;
            loopPos = this.currentSpace + 1;
            if (loopPos>=animatingObjects.length) {
                loopPos = 0;
            }
            while ( (loopPos!=this.currentSpace) && (!found) ) {
                if ( animatingObjects[loopPos]==null ) {
                    found = true;
                } else {
                    loopPos++;
                    if (loopPos>=ranimatingObjects.length) {
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
        animatingObjects[id] = ao;
        ao.setAnimatorId(id);
        return id;
    }
    
    function remove(ao) {
        animatingObjects[ao.getAnimatorId()] = null;
    }
    
    function clear() {
        animatingObjects = new Array(this.currentSize);
        this.currentSpace = 0;
    }
    
    this.running = false;
    this.currentSpace = 0;
    this.currentSize = 300;
    animatingObjects = new Array(this.currentSize);
    
    this.doAnimations = doAnimations;
    this.startAnimation = startAnimation;
    this.stopAnimation = stopAnimation;
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.getFreeSpot = getFreeSpot;
}
