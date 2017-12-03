var const_val = require("Constants");

cc.Class({
    extends : cc.Component,
    properties : {

    },

    onLoad : function() {
        this.x = (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2.0;
        this.y = (const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) / 2.0;
        this.fAngle = Math.PI / 6.0;
        this.vx = const_val.PLAYER_VEL * Math.cos(this.fAngle);
        this.vy = const_val.PLAYER_VEL * Math.sin(this.fAngle);
    },

    moveCharacter : function() {
        this.x += this.vx;
        this.y += this.vy;

        if((this.x < -const_val.CHAR_WIDTH) || (this.x > const_val.VIEW_WIDTH) ||
            (this.y < -const_val.CHAR_HEIGHT) || (this.y > const_val.VIEW_HEIGHT)) {
                this.x = (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2.0;
                this.y = (const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) / 2.0;

                this.fAngle += 2.0 * Math.PI / 10.0;
                if(this.fAngle > (2.0 * Math.PI)) {
                    this.fAngle -= 2.0 * Math.PI;
                }
                this.vx = const_val.PLAYER_VEL * Math.cos(this.fAngle);
                this.vy = const_val.PLAYER_VEL * Math.sin(this.fAngle);
            }
        this.node.setPosition(this.x, this.y);
    },

    update : function() {
        this.moveCharacter();
    }
});