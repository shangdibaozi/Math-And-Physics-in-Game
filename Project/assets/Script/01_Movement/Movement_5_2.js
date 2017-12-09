let const_val = require("Constants");

let BALL = function() {
    this.bActive = false;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
};

cc.Class({
    extends : cc.Component,

    properties : {
        ball : cc.Node
    },

    onLoad : function() {
        this.ballNodes = [];
        this.Balls = [];
        this.nTimeCount = 0;
        this.nBallNum = 0;
        this.initCharacter();
    },

    initCharacter : function() {
        for(let i = 0; i < const_val.MAX_BALL_NUM; i++) {
            this.Balls.push(new BALL());
            this.Balls[i].bActive = false;

            this.ballNodes.push(cc.instantiate(this.ball));
            this.ballNodes[i].active = false;
            this.node.addChild(this.ballNodes[i]);
        }
    },

    moveCharacter : function() {
        let Balls = this.Balls;
        for(let i = 0; i < const_val.MAX_BALL_NUM; i++) {
            if(Balls[i].bActive) {
                Balls[i].x += Balls[i].vx;
                Balls[i].y += Balls[i].vy;
                Balls[i].vy -= const_val.GR;
                if((Balls[i].x < -const_val.CHAR_WIDTH) || (Balls[i].x > const_val.VIEW_WIDTH) ||
                    (Balls[i].y < -const_val.CHAR_HEIGHT) || (Balls[i].y > const_val.VIEW_HEIGHT)) {
                        Balls[i].bActive = false;
                    }
            }
        }

        if(this.nTimeCount % 2 === 0) {
            for(let i = 0; i < const_val.MAX_BALL_NUM; i++) {
                if(Balls[i].bActive === false) {
                    Balls[i].bActive = true;
                    Balls[i].x = (const_val.VIEW_WIDTH - const_val.CHAR_WIDTH) / 2.0;
                    Balls[i].y = 0;
                    let fRand_r = Math.sqrt(-2.0 * Math.log(Math.random()));
                    let fRand_t = 2.0 * Math.PI * Math.random();
                    Balls[i].vx = fRand_r * Math.cos(fRand_t) * const_val.VEL_WIDTH;
                    Balls[i].vy = fRand_r * Math.sin(fRand_t) * const_val.VEL_HEIGHT + const_val.BASE_VEL;
                    break;
                }
            }
        }
        this.nTimeCount++;
    },

    update : function() {
        this.moveCharacter();
        for(let i = 0; i < const_val.MAX_BALL_NUM; i++) {
            
            if(this.Balls[i].bActive) {
                this.ballNodes[i].active = true;
                this.ballNodes[i].setPosition(this.Balls[i].x, this.Balls[i].y);
            } else {
                this.ballNodes[i].active = false;
            }
        }
    }
});