/**
 * File containing mouse event processing for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */ 
 
// mouse movement tracker
function bob5EventMouseMove(e) {
    var xpos = 0;
    var ypos = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
    	xpos = e.pageX;
    	ypos = e.pageY;
    }
    else {
    	xpos = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    	ypos = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    xpos -= bob5Display.offsetLeft;
    ypos -= bob5Display.offsetTop;	
	
	// send move events
	if (customCursor == true) {
	   customCursorObject.onMouseMove(xpos,ypos);
	}
    for (i=0; i<hoverObjects.length; i++) {
        if (hoverObjects[i]!=null) {
            hoverObjects[i].onMouseMove(xpos,ypos);
        }
    }
	
	
    bob5Debug("X:"+xpos+", Y:"+ypos);
} 
// mouse over event processor
function bob5EventMouseOver(e) {
    var evt=window.event || e
    //alert(evt.type);
}
// mouse down event processor
function bob5EventMouseDown(e) {
    var evt = window.event || e
    for (i=0; i<mouseDownObjects.length; i++) {
        if (mouseDownObjects[i]!=null) {
            if (evt.pageX || evt.pageY) {
            	xpos = evt.pageX;
            	ypos = evt.pageY;
            }
            else {
            	xpos = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            	ypos = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            xpos -= bob5Display.offsetLeft;
            ypos -= bob5Display.offsetTop;
            tx = mouseDownObjects[i].getX();
            ty = mouseDownObjects[i].getY();
            tw = mouseDownObjects[i].getW();
            th = mouseDownObjects[i].getH();
            if ((xpos>tx)&&(xpos<(tx+tw))) {
                if ((ypos>ty)&&(ypos<(ty+th))) {
                    mouseDownObjects[i].onMouseDown(evt);
                }
            }
        }
    }
}
// mouse up event processor
function bob5EventMouseUp(e) {
    var evt=window.event || e
    for (i=0; i<mouseUpObjects.length; i++) {
        if (mouseUpObjects[i]!=null) {
            mouseUpObjects[i].onMouseUp(evt);
        }
    }
}
// mouse click event processor
function bob5EventMouseClick(e) {
    var evt = window.event || e
    for (i=0; i<mouseClickObjects.length; i++) {
        if (mouseClickObjects[i]!=null) {
            if (evt.pageX || evt.pageY) {
            	xpos = evt.pageX;
            	ypos = evt.pageY;
            }
            else {
            	xpos = evt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            	ypos = evt.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            xpos -= bob5Display.offsetLeft;
            ypos -= bob5Display.offsetTop;
            tx = mouseClickObjects[i].getX();
            ty = mouseClickObjects[i].getY();
            tw = mouseClickObjects[i].getW();
            th = mouseClickObjects[i].getH();
            if ((xpos>tx)&&(xpos<(tx+tw))) {
                if ((ypos>ty)&&(ypos<(ty+th))) {
                    mouseClickObjects[i].onMouseClick(evt);
                }
            }
        }
    }
}
// send value=true for ON value=false for OFF
function updateShowFPS(value) {
    if (value!=showFPS) {
        showFPS = value;
        if (showFPS==true) {
            // start counter
            frameCounter = new FPSCounter();
        } else {
            // end counter
            frameCounter = null;
        }
    }
}
