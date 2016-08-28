/**
 * File containing keyboard event processing for the BOB5 Engine
 * 
 * @author Brendan Ellis <brendan@slayweb.com>
 * @package bob5_core
 */ 
 
function bob5EventKeyPress(e) {
    var evt=window.event || e
    for (i=0; i<keyPressObjects.length; i++) {
        if (keyPressObjects[i]!=null) {
            keyPressObjects[i].onKeyPress(evt);
        }
    }
}