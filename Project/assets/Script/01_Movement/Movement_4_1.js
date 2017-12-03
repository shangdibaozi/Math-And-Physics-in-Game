var const_val = require("Constants");

cc.Class({
    extends : cc.Component,

    properties : {
    },

    onLoad : function() {
        this.initCharacter();
    },

    initCharacter : function() {
        this.x = 0;
        this.y = const_val.VIEW_HEIGHT;
        this.vx = const_val.PLAYER_VEL;
        this.vy = 0;
    },

    moveCharacter : function() {
        this.x += this.vx;
        this.y -= this.vy;
        this.vy += const_val.GR;

        if((this.x > const_val.VIEW_WIDTH) || (this.y < 0)) {
            this.initCharacter();
        }
        this.node.setPosition(this.x, this.y);
    },

    update : function() {
        this.moveCharacter();
    }
});