
let const_val = require("Constants");
const_val.ROT_R = 180.0;
cc.Class({
    extends: cc.Component,

    properties: {
        angle : {
            default : 0.0
        },
        x : {
            default : 0
        },
        y : {
            default : 0
        }
    },

    onLoad : function() {
        this.origin_x = (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2;
        this.origin_y = (const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) / 2;
    },

    moveCharacter : function() {
        this.x = const_val.ROT_R * Math.cos(this.angle) + this.origin_x;
        this.y = const_val.ROT_R * Math.sin(this.angle) + this.origin_y;
        this.angle += 2.0 * Math.PI / 120.0;
        if(this.angle > (2.0 * Math.PI)) {
            this.angle -= 2.0 * Math.PI;
        }
    },

    update (dt) {
        this.moveCharacter();
        this.node.setPosition(this.x, this.y);
    },
});
