// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var const_val = require("Constants");
const_val.ROT_R = 180.0;
const_val.ANGLE_VEL = 2.0 * Math.PI / 120.0;

cc.Class({
    extends: cc.Component,

    properties: {
        x : 0,
        y : 0,
        rx : 0,
        ry : 0,
        vx : 0,
        vy : 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.rx = const_val.ROT_R;
        this.ry = 0.0;
        this.vx = 0.0;
        this.vy = const_val.ROT_R * const_val.ANGLE_VEL;
        this.x = this.rx + (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2.0;
        this.y = this.ry + (const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) / 2.0;
    },

    moveCharacter : function() {
        this.rx += this.vx;
        this.ry += this.vy;
        this.vx += -const_val.ANGLE_VEL * const_val.ANGLE_VEL * this.rx;
        this.vy += -const_val.ANGLE_VEL * const_val.ANGLE_VEL * this.ry;
        this.x = this.rx + (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2.0;
        this.y = this.ry + (const_val.VIEW_HEIGHT - const_val.CHAR_HEIGHT) / 2.0;
    },

    update (dt) {
        this.moveCharacter();
        this.node.setPosition(this.x, this.y);
    },
});
