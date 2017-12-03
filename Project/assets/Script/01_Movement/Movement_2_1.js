
var const_val = require("Constants");
cc.Class({
    extends: cc.Component,

    properties: {
        x : {
            default : (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2
        },
        y : {
            default : (const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) / 2
        }
    },

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.isWPressed = false;
        this.isSPressed = false;
        this.isAPressed = false;
        this.isDPressed = false;
    },

    onDestroy : function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.systemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyDown : function(event) {
        switch(event.keyCode) {
            case cc.KEY.a:
                this.isAPressed = true;
            break;
            case cc.KEY.d : 
                this.isDPressed = true;
            break;

            case cc.KEY.w : 
                this.isWPressed = true;
            break;
            case cc.KEY.s :
                this.isSPressed = true;
            break;
        }
    },

    onKeyUp : function() {
        switch(event.keyCode) {
            case cc.KEY.a:
                this.isAPressed = false;
            break;
            case cc.KEY.d : 
                this.isDPressed = false;
            break;

            case cc.KEY.w : 
                this.isWPressed = false;
            break;
            case cc.KEY.s :
                this.isSPressed = false;
            break;
        }
    },

    moveCharacter : function() {
        if(this.isAPressed) {
            this.x -= const_val.PLAYER_VEL;
            if(this.x < 0) {
                this.x = 0;
            }
        }
        if(this.isDPressed) {
            this.x += const_val.PLAYER_VEL;
            if(this.x > const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) {
                this.x = const_val.VIEW_WIDTH - const_val.CHAR_WIDTH;
            }
        }
        if(this.isWPressed) {
            this.y += const_val.PLAYER_VEL;
            if(this.y > const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) {
                this.y = const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT;
            }
        }
        if(this.isSPressed) {
            this.y -= const_val.PLAYER_VEL;
            if(this.y < 0) {
                this.y = 0;
            }
        }
        this.node.setPositionX(this.x);
        this.node.setPositionY(this.y);
    },

    update (dt) {
        this.moveCharacter();
    }
});
