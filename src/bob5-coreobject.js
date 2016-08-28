/**
 * File containing general renderable object for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */   

// renderable objects must implement: draw()
// animatable objects must implement: animate()
// moveable objects must implement: move()
function renderableObject() {
    function draw() {
    }
    function animate() {
    }
    function move() {
    }
    function onMouseMove() {
    }
    function onMouseDown() {
    }
    function onMouseUp() {
    }
    function onMouseClick() {
    }
    function onKeyPress() {
    }
    function setRendererId(id) {
        this.rendererid = id;
    }
    function getRendererId(id) {
        return this.rendererid;
    }
    function setAnimatorId(id) {
        this.animatorid = id;
    }
    function getAnimatorId(id) {
        return this.animatorid;
    }
    function setMoverId(id) {
        this.moverid = id;
    }
    function getMoverId(id) {
        return this.moverid;
    }
    function setHoverId(id) {
        this.hoverid = id;
    }
    function getHoverId(id) {
        return this.hoverid;
    }
    function setMouseDownId(id) {
        this.mousedownid = id;
    }
    function getMouseDownId(id) {
        return this.mousedownid;
    }
    function setMouseUpId(id) {
        this.mouseupid = id;
    }
    function getMouseUpId(id) {
        return this.mouseupid;
    }
    function setMouseClickId(id) {
        this.mouseclickid = id;
    }
    function getMouseClickId(id) {
        return this.mouseclickid;
    }
    function setKeyPressId(id) {
        this.keypressid = id;
    }
    function getKeyPressId(id) {
        return this.keypressid;
    }
    function getX() {
        return this.x;
    }
    function getY() {
        return this.y;
    }
    function getW() {
        return this.w;
    }
    function getH() {
        return this.h;
    }
    function setX(xp) {
        this.x = xp;
    }
    function setY(yp) {
        this.y = yp;
    }
    this.rendererid = null;
    this.animatorid = null;
    this.moverid = null;
    this.hoverid = null;
    this.mousedownid = null;
    this.mouseupid = null;
    this.mouseclickid = null;
    this.keypressid = null;
    this.setRendererId = setRendererId;
    this.getRendererId = getRendererId;
    this.setAnimatorId = setAnimatorId;
    this.getAnimatorId = getAnimatorId;
    this.setMoverId = setMoverId;
    this.getMoverId = getMoverId;
    this.setHoverId = setHoverId;
    this.getHoverId = getHoverId;
    this.setMouseDownId = setMouseDownId;
    this.getMouseDownId = getMouseDownId;
    this.setMouseUpId = setMouseUpId;
    this.getMouseUpId = getMouseUpId;
    this.setMouseClickId = setMouseClickId;
    this.getMouseClickId = getMouseClickId;
    this.setKeyPressId = setKeyPressId;
    this.getKeyPressId = getKeyPressId;
    this.draw = draw;
    this.animate = animate;
    this.move = move;
    this.onMouseMove = onMouseMove;
    this.onMouseDown = onMouseDown;
    this.onMouseUp = onMouseUp;
    this.onMouseClick = onMouseClick;
    this.onKeyPress = onKeyPress;
    this.getX = getX;
    this.getY = getY;
    this.getW = getW;
    this.getH = getH;
    this.setX = setX;
    this.setY = setY;
}
