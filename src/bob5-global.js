/**
 * File containing globabl variables and settings for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */    

/**
 * Width of the HTML5 Canvas
 * @var integer
 */  
var CANVAS_WIDTH;
/**
 * Height of the HTML5 Canvas
 * @var integer
 */  
var CANVAS_HEIGHT;

/**
 * Delay used in the Renderer loop
 * @var integer
 */  
var RENDER_SPEED = 1;
/**
 * Delay used in the Movement loop
 * @var integer
 */  
var MOVEMENT_SPEED = 2;
/**
 * Delay used in the Animation loop
 * @var integer
 */  
var ANIMATION_SPEED = 2;

var bob5Display;
var bob5Canvas;
var bob5BackBuffer;

var renderer;
var anicontroller;
var movecontroller;

/**
 * Show the Frames Per Second counter or not?
 * @var boolean
 */  
var showFPS = false;
/**
 * The number of frames rendered in the current second
 * @var integer
 */  
var frameCounter;

/**
 * Is a custom cursor being used?
 * @var boolean
 */  
var customCursor = false;
/**
 * Object representing the current custom cursor if one is set
 * @var object
 */  
var customCursorObject;

/**
 * Array containing all current renderable objects
 * @var array
 */  
var renderableObjects;
/**
 * Array containing all current animating objects
 * @var array
 */  
var animatingObjects;
/**
 * Array containing all current moving objects
 * @var array
 */  
var movingObjects;

var hoverMonitor;
var hoverObjects;

var mouseDownMonitor;
var mouseDownObjects;

var mouseUpMonitor;
var mouseUpObjects;

var mouseClickMonitor;
var mouseClickObjects;

var keyPressMonitor;
var keyPressObjects;
