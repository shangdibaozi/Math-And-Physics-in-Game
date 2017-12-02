cc.Class({
    extends: cc.Component,

    properties: {
        x : {
            default : 0,
            tooltip : "物体的初始位置"
        },
        v : {
            default : 3,
            tooltip : "物体在x方向的速度"
        }
    },

    moveCharacter : function() {
        this.x += this.v;
        this.node.setPositionX(this.x);
    },

    update (dt) {
        this.moveCharacter(); // 每帧调用一次
    }
});
