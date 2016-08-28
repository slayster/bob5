/**
 * File containing general functions for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */ 
 

// start the system and set basic variables
function bob5CanvasInit(elementID) {
    bob5Display = document.getElementById(elementID);
    bob5Canvas = bob5Display.getContext("2d");
    CANVAS_WIDTH = bob5Display.width;
    CANVAS_HEIGHT = bob5Display.height;
    
    bob5BackBuffer = document.createElement('canvas');
    bob5BackBuffer.width = CANVAS_WIDTH;
    bob5BackBuffer.height = CANVAS_HEIGHT;
    bob5Buffer = bob5BackBuffer.getContext("2d");
    
    renderer = new bob5Renderer();
    renderer.startRender();
    
    anicontroller = new bob5AnimationController();
    anicontroller.startAnimation();
    
    movecontroller = new bob5MovementController();
    movecontroller.startMovement();

    hoverMonitor = new bob5HoverMonitor();
    mouseDownMonitor = new bob5MouseDownMonitor();
    mouseUpMonitor = new bob5MouseUpMonitor();
    mouseClickMonitor = new bob5MouseClickMonitor();
    
    keyPressMonitor = new bob5KeyPressMonitor();
    
    // listen for mouse inputs
    bob5Display.addEventListener('mousemove', bob5EventMouseMove, false);
    bob5Display.addEventListener('mouseover', bob5EventMouseOver, false);
    bob5Display.addEventListener('mousedown', bob5EventMouseDown, false);
    bob5Display.addEventListener('mouseup', bob5EventMouseUp, false);
    bob5Display.addEventListener('click', bob5EventMouseClick, false);
    
    // listen for keyboard inputs
    document.addEventListener('keypress', bob5EventKeyPress, false);
    
    
}

function bob5ReplaceCursor(filename, width, height) {
    bob5Display.style.cursor = "none";
    customCursor = true;
    customCursorObject = new b5roCursor(filename, width, height);
}

function bob5Debug(message) {
    document.getElementById("bob5Debug").innerHTML = message;
}

function bob5ClearAll() {
    renderer.clear();
    hoverMonitor.clear();
    mouseDownMonitor.clear();
    mouseUpMonitor.clear();
    mouseClickMonitor.clear();
    keyPressMonitor.clear();
}
