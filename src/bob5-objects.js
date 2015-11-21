/**
 * File containing basic renderable objects for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */

// Basic background object
function b5roBackground(r,g,b) {

    function draw() {
        bob5Buffer.fillStyle = "rgb("+r+","+g+","+b+")";
        bob5Buffer.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
    
    this.r = parseInt(r);
    this.g = parseInt(g);
    this.b = parseInt(b);

    this.inheritFrom = renderableObject;
    this.inheritFrom();
    this.draw = draw;
}

// basic background image object 
function b5roBackgroundImage(r,g,b,fn) {

    function draw() {
        bob5Buffer.fillStyle = "rgb("+r+","+g+","+b+")";
        bob5Buffer.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        bob5Buffer.drawImage(this.image,0,0);
    }
    
    this.r = parseInt(r);
    this.g = parseInt(g);
    this.b = parseInt(b);
    this.image = new Image(CANVAS_WIDTH,CANVAS_HEIGHT);    
    this.image.src = fn;
    
    this.inheritFrom = renderableObject;
    this.inheritFrom();
    this.draw = draw;
}

// basic sprite object 
function b5roSprite(fn,x,y,w,h) {

    function draw() {
        bob5Buffer.drawImage(this.image,this.x,this.y);
    }
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = new Image(this.w,this.h);    
    this.image.src = fn;
    
    this.inheritFrom = renderableObject;
    this.inheritFrom();
    this.draw = draw;
}

// basic animated sprite
function b5roAnimatedSprite(fn,x,y,w,h,d) {
    
    function draw() {
        bob5Buffer.drawImage(this.images[this.frame],this.x,this.y);
    }
    
    function animate() {
        this.delayTime++;
        if (this.delayTime==this.frameDelay) {
            this.delayTime = 0;
            this.frame++;
            if (this.frame>=this.spriteFrames.length) {
                this.frame = 0;
            }
        }    
    }
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.images = new Array(fn.length);
    for (i=0; i<fn.length; i++) {
        this.images[i] = new Image(this.w,this.h);    
        this.images[i].src = fn[i];
    }
    this.frame = 0;
    this.frameDelay = d;
    this.delayTime = 0;
    this.spriteFrames = fn;
    
    this.inheritFrom = renderableObject;
    this.inheritFrom();
    this.draw = draw;
    this.animate = animate;
}

// basic button object 
function b5roButton(fnOn,fnHover,fnClick,fnOff,x,y,w,h) {

    function draw() {
        bob5Buffer.drawImage(this.image, this.x, this.y);
    }
    
    function onMouseMove(xpos,ypos) {
        if ((xpos>this.x)&&(xpos<(this.x+this.w))) {
            if ((ypos>this.y)&&(ypos<(this.y+this.h))) {
                if (this.down==true) {
                    this.image = this.imageClick;
                } else {
                    this.image = this.imageHover;
                }
            } else {
                this.image = this.imageOn;
            }
        } else {
            this.image = this.imageOn;
        }	
    }
    
    function onMouseDown(e) {
        this.image = this.imageClick;
        this.down = true;
    }
    
    function onMouseUp() {
        if (this.down==true) {
            this.image = this.imageHover;
            this.down = false;
        }
    }
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.down = false;
    this.image = new Image(this.w, this.h);
    this.image.src = fnOn;
    
    this.imageOn = new Image(this.w, this.h);
    this.imageOn.src = fnOn;
    this.imageHover = new Image(this.w, this.h);
    this.imageHover.src = fnHover;
    this.imageClick = new Image(this.w, this.h);
    this.imageClick.src = fnClick;
    this.imageOff = new Image(this.w, this.h);
    this.imageOff.src = fnOff;
    
    this.inheritFrom = renderableObject;
    this.inheritFrom();
    this.draw = draw;
    this.onMouseMove = onMouseMove;
    this.onMouseDown = onMouseDown;
    this.onMouseUp = onMouseUp;
        
}

// basic cursor object 
function b5roCursor(fn,w,h) {

    function draw() {
        bob5Buffer.drawImage(this.image,this.x,this.y);
    }

   function setX(x) {
        this.x = x;
    }
    
    function setY(y) {
        this.y = y;
    }
    
    function onMouseMove(x,y) {
        this.x = x;
        this.y = y;
    }
    
    this.x = 0;
    this.y = 0;
    this.w = w;
    this.h = h;
    this.image = new Image(this.w,this.h);    
    this.image.src = fn;
    
    this.inheritFrom = renderableObject;
    this.inheritFrom();
    this.draw = draw;
    this.setX = setX;
    this.setY = setY;
    this.onMouseMove = onMouseMove;
}
