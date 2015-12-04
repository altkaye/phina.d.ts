var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        _super.call(this, {});
        this.init({});
        this.backgroundColor = '#444';
        this.label = new phina.display.Label('Hello, phina.js!').addChildTo(this);
        this.label.x = this.gridX.center();
        this.label.y = this.gridY.center();
        this.label.fill = 'white';
    }
    return MainScene;
})(phina.display.CanvasScene);
;
phina.main(function () {
    var app = new phina.display.CanvasApp({});
    app.replaceScene(new MainScene());
    app.run();
});
