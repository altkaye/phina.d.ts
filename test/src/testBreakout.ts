///<reference path="../../phina.d.ts" />
module breakout {
    const SCREEN_WIDTH = 640;
    const SCREEN_HEIGHT = 960;
    const MAX_PER_LINE = 8;
    const BLOCK_NUM = MAX_PER_LINE * 5;
    const BLOCK_SIZE = 64;
    const BOARD_PADDING = 50;
    const PADDLE_WIDTH = 150;
    const PADDLE_HEIGHT = 32;
    const BALL_RADIUS = 16;
    const BALL_SPEED = 16;

    const BOARD_SIZE = SCREEN_WIDTH - BOARD_PADDING * 2;
    const BOARD_OFFSET_X = BOARD_PADDING + BLOCK_SIZE / 2;
    const BOARD_OFFSET_Y = 150;

    export class MainScene extends phina.display.CanvasScene {
        private group;
        private backgroundColor;
        private ball;
        private paddle;
        private ballSpeed;
        private gridX;
        private gridY;

        constructor() {
            super(null);
            var param = {
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
            }
            this.init(param);

            this.backgroundColor = '#444';


            this.group = new phina.display.CanvasElement({}).addChildTo(this);

            var gridX = new phina.util.Grid();
            gridX.width = BOARD_SIZE;
            gridX.columns = MAX_PER_LINE;
            (<any>gridX).unitWidth = gridX.width/gridX.columns;//TODO
            var gridY = new phina.util.Grid();
            gridY.width = BOARD_SIZE;
            gridY.columns = MAX_PER_LINE;
            (<any>gridY).unitWidth = gridY.width/gridY.columns;//TODO

            var self = this;

            (<any>BLOCK_NUM).times((i) => {//TODO
                // グリッド上でのインデックス
                var xIndex = i % MAX_PER_LINE;
                var yIndex = Math.floor(i / MAX_PER_LINE);
                var angle = (360) / BLOCK_NUM * i;
                var block = new Block(angle).addChildTo(this.group).setPosition(100, 100);

                block.x = gridX.span(xIndex) + BOARD_OFFSET_X;
                block.y = gridY.span(yIndex) + BOARD_OFFSET_Y;
            }, this);

            // ボール
            this.ball = new Ball().addChildTo(this);

            // パドル
            this.paddle = new Paddle().addChildTo(this);
            this.paddle.setPosition(this.gridX.center(), this.gridY.span(15));
            this.paddle.hold(this.ball);

            // タッチでゲーム開始
            this.ballSpeed = 0;
            this.one('pointend', () => {
                this.paddle.release();
                this.ballSpeed = BALL_SPEED;
            });
        }

        public update(app) {
            // パドル移動
            this.paddle.x = app.pointer.x;
            if (this.paddle.left < 0) {
                this.paddle.left = 0;
            }
            if (this.paddle.right > this.gridX.width) {
                this.paddle.right = this.gridX.width;
            }

            // スピードの数分, 移動と衝突判定を繰り返す
            (this.ballSpeed).times(function() {
                this.ball.move();
                this.checkHit();
            }, this);
        }

        private checkHit() {
            //
            var ball = this.ball;

            // 画面外対応
            if (ball.left < 0) {
                ball.left = 0;
                ball.reflectX();
            }
            if (ball.right > this.gridX.width) {
                ball.right = this.gridX.width
                ball.reflectX();
            }
            if (ball.top < 0) {
                ball.top = 0;
                ball.reflectY();
            }
            if (ball.bottom > this.gridY.width) {
                ball.bottom = this.gridY.width
                ball.reflectY();
            }

            // ボールとパドル
            if (ball.hitTestElement(this.paddle)) {
                ball.bottom = this.paddle.top;

                var dx = ball.x - this.paddle.x;
                ball.direction.x = dx;
                ball.direction.y = -80;
                ball.direction.normalize();

                // speed up
                this.ballSpeed += 1;
            }

            this.group.children.some(function(block) {
                // ヒット
                if (ball.hitTestElement(block)) {
                    var dq = phina.geom.Vector2.sub(ball, block);

                    if (Math.abs(dq.x) < Math.abs(dq.y)) {
                        ball.reflectY();
                        if (dq.y >= 0) {
                            ball.top = block.bottom;
                        }
                        else {
                            ball.bottom = block.top;
                        }
                    }
                    else {
                        ball.reflectX();
                        if (dq.x >= 0) {
                            ball.left = block.right;
                        }
                        else {
                            ball.right = block.left;
                        }
                    }

                    block.remove();

                    return true;
                }
            }, this);
        }

    }

    class Block extends phina.display.RectangleShape {
        private angle;
        constructor(angle) {
            super({});
            this.init({
                width: BLOCK_SIZE,
                height: BLOCK_SIZE,
                fill: (<any>'hsl({0}, 80%, 60%)').format(angle || 0),
                stroke: null,
                cornerRadius: 8,
            });
            this.angle = angle;
        }
    };

    class Ball extends phina.display.CircleShape {
        private speed;
        private direction;
        constructor() {
            super({});
            this.init({
                radius: BALL_RADIUS,
                fill: '#eee',
                stroke: null,
                cornerRadius: 8,
            });

            this.speed = 0;
            this.direction = new phina.geom.Vector2(1, -1).normalize();
        }

        public move() {
            this.x += this.direction.x;
            this.y += this.direction.y;
        }

        public reflectX() {
            this.direction.x *= -1;
        }

        public reflectY() {
            this.direction.y *= -1;
        }
    };

    class Paddle extends phina.display.RectangleShape {
        private ball;

        constructor() {
            super({});
            this.init({
                width: PADDLE_WIDTH,
                height: PADDLE_HEIGHT,
                fill: '#eee',
                stroke: null,
                cornerRadius: 8,
            });
        }

        public hold(ball) {
            this.ball = ball;
        }

        public release() {
            this.ball = null;
        }

        public update() {
            if (this.ball) {
                this.ball.x = this.x;
                this.ball.y = this.top - this.ball.radius;
            }
        }
    };


    phina.main(() => {
        var app = new phina.display.CanvasApp({//TODO GameApp does not work without globalize
            startLabel: (<any>location.search.substr(1)).toObject().scene || 'title',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
        });

        app.replaceScene(new MainScene());

        app.enableStats();

        app.run();
    });
}