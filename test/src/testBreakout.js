var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var breakout;
(function (breakout) {
    var SCREEN_WIDTH = 640;
    var SCREEN_HEIGHT = 960;
    var MAX_PER_LINE = 8;
    var BLOCK_NUM = MAX_PER_LINE * 5;
    var BLOCK_SIZE = 64;
    var BOARD_PADDING = 50;
    var PADDLE_WIDTH = 150;
    var PADDLE_HEIGHT = 32;
    var BALL_RADIUS = 16;
    var BALL_SPEED = 16;
    var BOARD_SIZE = SCREEN_WIDTH - BOARD_PADDING * 2;
    var BOARD_OFFSET_X = BOARD_PADDING + BLOCK_SIZE / 2;
    var BOARD_OFFSET_Y = 150;
    var MainScene = (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            var _this = this;
            _super.call(this, null);
            var param = {
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
            };
            this.init(param);
            this.backgroundColor = '#444';
            this.group = new phina.display.CanvasElement({}).addChildTo(this);
            var gridX = new phina.util.Grid();
            gridX.width = BOARD_SIZE;
            gridX.columns = MAX_PER_LINE;
            gridX.unitWidth = gridX.width / gridX.columns;
            var gridY = new phina.util.Grid();
            gridY.width = BOARD_SIZE;
            gridY.columns = MAX_PER_LINE;
            gridY.unitWidth = gridY.width / gridY.columns;
            var self = this;
            BLOCK_NUM.times(function (i) {
                var xIndex = i % MAX_PER_LINE;
                var yIndex = Math.floor(i / MAX_PER_LINE);
                var angle = (360) / BLOCK_NUM * i;
                var block = new Block(angle).addChildTo(_this.group).setPosition(100, 100);
                block.x = gridX.span(xIndex) + BOARD_OFFSET_X;
                block.y = gridY.span(yIndex) + BOARD_OFFSET_Y;
            }, this);
            this.ball = new Ball().addChildTo(this);
            this.paddle = new Paddle().addChildTo(this);
            this.paddle.setPosition(this.gridX.center(), this.gridY.span(15));
            this.paddle.hold(this.ball);
            this.ballSpeed = 0;
            this.one('pointend', function () {
                _this.paddle.release();
                _this.ballSpeed = BALL_SPEED;
            });
        }
        MainScene.prototype.update = function (app) {
            this.paddle.x = app.pointer.x;
            if (this.paddle.left < 0) {
                this.paddle.left = 0;
            }
            if (this.paddle.right > this.gridX.width) {
                this.paddle.right = this.gridX.width;
            }
            (this.ballSpeed).times(function () {
                this.ball.move();
                this.checkHit();
            }, this);
        };
        MainScene.prototype.checkHit = function () {
            var ball = this.ball;
            if (ball.left < 0) {
                ball.left = 0;
                ball.reflectX();
            }
            if (ball.right > this.gridX.width) {
                ball.right = this.gridX.width;
                ball.reflectX();
            }
            if (ball.top < 0) {
                ball.top = 0;
                ball.reflectY();
            }
            if (ball.bottom > this.gridY.width) {
                ball.bottom = this.gridY.width;
                ball.reflectY();
            }
            if (ball.hitTestElement(this.paddle)) {
                ball.bottom = this.paddle.top;
                var dx = ball.x - this.paddle.x;
                ball.direction.x = dx;
                ball.direction.y = -80;
                ball.direction.normalize();
                this.ballSpeed += 1;
            }
            this.group.children.some(function (block) {
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
        };
        return MainScene;
    })(phina.display.CanvasScene);
    breakout.MainScene = MainScene;
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block(angle) {
            _super.call(this, {});
            this.init({
                width: BLOCK_SIZE,
                height: BLOCK_SIZE,
                fill: 'hsl({0}, 80%, 60%)'.format(angle || 0),
                stroke: null,
                cornerRadius: 8,
            });
            this.angle = angle;
        }
        return Block;
    })(phina.display.RectangleShape);
    ;
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball() {
            _super.call(this, {});
            this.init({
                radius: BALL_RADIUS,
                fill: '#eee',
                stroke: null,
                cornerRadius: 8,
            });
            this.speed = 0;
            this.direction = new phina.geom.Vector2(1, -1).normalize();
        }
        Ball.prototype.move = function () {
            this.x += this.direction.x;
            this.y += this.direction.y;
        };
        Ball.prototype.reflectX = function () {
            this.direction.x *= -1;
        };
        Ball.prototype.reflectY = function () {
            this.direction.y *= -1;
        };
        return Ball;
    })(phina.display.CircleShape);
    ;
    var Paddle = (function (_super) {
        __extends(Paddle, _super);
        function Paddle() {
            _super.call(this, {});
            this.init({
                width: PADDLE_WIDTH,
                height: PADDLE_HEIGHT,
                fill: '#eee',
                stroke: null,
                cornerRadius: 8,
            });
        }
        Paddle.prototype.hold = function (ball) {
            this.ball = ball;
        };
        Paddle.prototype.release = function () {
            this.ball = null;
        };
        Paddle.prototype.update = function () {
            if (this.ball) {
                this.ball.x = this.x;
                this.ball.y = this.top - this.ball.radius;
            }
        };
        return Paddle;
    })(phina.display.RectangleShape);
    ;
    phina.main(function () {
        var app = new phina.display.CanvasApp({
            startLabel: location.search.substr(1).toObject().scene || 'title',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
        });
        app.replaceScene(new MainScene());
        app.enableStats();
        app.run();
    });
})(breakout || (breakout = {}));
