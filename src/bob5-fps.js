/**
 * File containing the FPS counter for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */   


function FPSCounter() {

    function draw() {
        bob5Buffer.fillStyle= "rgb(127,255,0)";
        bob5Buffer.font = "bold 12px sans-serif";
        bob5Buffer.fillText(this.text1, 0, 10);
        bob5Buffer.fillText(this.text2, 0, 25);
    }
    
    function tick() {
        this.totalFrames += this.frames;
        this.seconds++;
        this.text1 = "Current FPS: "+parseInt(this.frames);
        this.text2 = "Average FPS: "+parseInt(Math.floor(this.totalFrames/this.seconds));
        this.frames = 0;
        setTimeout("frameCounter.tick()",1000);
    }
    
    function newFrame() {
        this.frames++;
    }
    
    this.seconds = 0;
    this.frames = 0;
    this.totalFrames = 0;
    this.draw = draw;
    this.text1 = "Current FPS:";
    this.text2 = "Average FPS:";
    this.tick = tick;
    this.newFrame = newFrame;
    setTimeout("frameCounter.tick()",1000);
}
