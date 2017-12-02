
// var const_val = require("01_Movement/Constants");
// console.log(const_val);
var const_val = require("Constants");
cc.Class({
    extends : cc.Component,
    properties : {
        x : {
            default : 0,
            tooltip : "物体的初始位置"
        },
        v : {
            default : 10,
            tooltip : "物体在x方向的速度"
        }
    },

    moveCharacter : function() {
        this.x += this.v;
        if(this.x > const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) {
            this.v = -this.v;
            this.x = const_val.VIEW_WIDTH - const_val.CHAR_WIDTH;
        }
        if(this.x < 0) {
            this.v = -this.v;
            this.x = 0;
        }
        this.node.setPositionX(this.x);
    },

    update : function(dt) {
        this.moveCharacter();
    }
});

