let const_val = require("Constants");

cc.Class({
    extends : cc.Component,
    properties : {

    },

    onLoad : function() {
        this.initCharacter();
    },

    initCharacter : function() {
        this.x = 0.0;
        this.vx = const_val.PLAYER_VEL;
        this.y = 200.0;
        this.vy = -10.0;
        this.t = 0;
    },

    moveCharacter : function() {
        this.x = this.vx * this.t;
        this.y = const_val.VIEW_HEIGHT - (0.5 * const_val.GR * this.t * this.t + this.vy * this.t + 200.0);
        this.t++;
        if((this.x > const_val.VIEW_WIDTH) || (this.y < 0)) {
            this.t = 0;
        }
        this.node.setPosition(this.x, this.y);
    },

    update : function() {
        this.moveCharacter();
    }
});