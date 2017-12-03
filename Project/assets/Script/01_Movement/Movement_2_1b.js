var const_val = require("Constants");

cc.Class({
    extends : cc.Component,
    properties : {
        x : {
            default : 0
        },
        y : {
            default : 0
        }
    },

    onLoad : function() {
        this.bLeftKey = false;
        this.bRightKey = false;
        this.bUpKey = false;
        this.bDownKey = false;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy : function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyDown : function(event) {
        switch(event.keyCode) {
            case cc.KEY.a:
                this.bLeftKey = true;
                break;
            case cc.KEY.d : 
                this.bRightKey = true;
                break;
            case cc.KEY.w : 
                this.bUpKey = true;
                break;
            case cc.KEY.s :
                this.bDownKey = true;
                break;
        }
    },

    onKeyUp : function(event) {
        switch(event.keyCode) {
            case cc.KEY.a:
                this.bLeftKey = false;
                break;
            case cc.KEY.d : 
                this.bRightKey = false;
                break;
            case cc.KEY.w : 
                this.bUpKey = false;
                break;
            case cc.KEY.s :
                this.bDownKey = false;
                break;
        }
    },

    moveCharacter : function() {
        if(this.bLeftKey) {
            if(this.bUpKey || this.bDownKey) {
                this.x -= const_val.PLAYER_VEL / const_val.ROOT2;
            } else {
                this.x -= const_val.PLAYER_VEL;
            }
            if(this.x < 0) {
                this.x = 0;
            }
        }

        if(this.bRightKey) {
            if(this.bUpKey || this.bDownKey) {
                this.x += const_val.PLAYER_VEL / const_val.ROOT2;
            } else {
                this.x += const_val.PLAYER_VEL;
            }
            if(this.x > const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) {
                this.x = const_val.VIEW_WIDTH - const_val.CHAR_WIDTH;
            }
        }

        if(this.bUpKey) {
            if(this.bLeftKey || this.bRightKey) {
                this.y += const_val.PLAYER_VEL / const_val.ROOT2;
            } else {
                this.y += const_val.PLAYER_VEL;
            }
            if(this.y > const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) {
                this.y = const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT;
            }
        }

        if(this.bDownKey) {
            if(this.bLeftKey || this.bRightKey) {
                this.y -= const_val.PLAYER_VEL / const_val.ROOT2;
            } else {
                this.y -= const_val.PLAYER_VEL;
            }
            if(this.y < 0) {
                 this.y = 0;
            }
        }
        this.node.setPosition(this.x, this.y);
    },

    update : function() {
        this.moveCharacter();
    }
});