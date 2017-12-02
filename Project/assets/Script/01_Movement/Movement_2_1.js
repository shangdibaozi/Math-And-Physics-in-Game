
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

    },

    start () {

    },

    moveCharacter : function() {

    },

    update (dt) {
        this.moveCharacter();
    }
});
