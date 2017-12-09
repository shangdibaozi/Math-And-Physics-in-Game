let const_val = require("Constants");

var Ball = function() {
    this.bActive    = false;
    this.x          = 0;
    this.y          = 0;
    this.vx         = 0;
    this.vy         = 0;
};

cc.Class({
    extends : cc.Component,
    properties : {
        ball : cc.Node
    },

    onLoad : function() {
        this.initCharacter();
    },

    initCharacter : function() {
        this.ballNodes  = [];
        this.Balls      = [];
        for(var i = 0; i < const_val.MAX_BALL_NUM; i++) {
            this.Balls.push(new Ball());
            this.Balls[i].bActive = false;
            this.ballNodes.push(cc.instantiate(this.ball));
            this.node.addChild(this.ballNodes[i]);
            this.ballNodes[i].active = false;
        }
        this.nBallNum = 0;
        this.nTimeCount = 0;
    },

    moveCharacter : function() {
        var Balls = this.Balls;
        for(var i = 0; i < const_val.MAX_BALL_NUM; i++) {
            if(Balls[i].bActive) {
                Balls[i].x += Balls[i].vx;
                Balls[i].y += Balls[i].vy;
                Balls[i].vy -= const_val.GR;
                if((Balls[i].x < -const_val.CHAR_WIDTH) || (Balls[i].x > const_val.VIEW_WIDTH) ||
                    (Balls[i].y < -const_val.CHAR_HEIGHT) || (Balls[i].y > const_val.VIEW_HEIGHT)) {
                        Balls[i].bActive = false;
                        this.ballNodes[i].active = false;
                    }
            }
        }

        if((this.nTimeCount % 2) === 0) {
            for(var i = 0; i < const_val.MAX_BALL_NUM; i++) {
                if(Balls[i].bActive === false) {
                    Balls[i].bActive = true;
                    this.ballNodes[i].active = true;
                    Balls[i].x = (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2.0;
                    Balls[i].y = 0;
                    Balls[i].vx = Math.random() * const_val.VEL_WIDTH - const_val.VEL_WIDTH / 2.0; // C++中的random返回的是整数所以要除以RAND_MAX，js中的Math.random()返回的是[0, 1)之间的小数。
                    Balls[i].vy = Math.random() * const_val.VEL_HEIGHT - const_val.VEL_HEIGHT / 2.0 + const_val.BASE_VEL;
                    break;
                }
            }
        }
        this.nTimeCount++;
    },

    update : function() {
        this.moveCharacter();
        for(var i = 0; i < const_val.MAX_BALL_NUM; i++) {
            if(this.Balls[i].bActive) {
                this.ballNodes[i].setPosition(this.Balls[i].x, this.Balls[i].y);
            }
        }
    }
});