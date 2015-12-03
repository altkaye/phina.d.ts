///<reference path="../../phina.d.ts"/>;

// MainScene クラスを定義
class MainScene extends phina.display.CanvasScene {
    private backgroundColor: string;
    private label: phina.display.Label;

    private hoge(...args) {

    }

    constructor() {
        super({});
        this.init({});//TODO fix this
        //(<any>this).superInit({});
        // 背景色を指定
        this.backgroundColor = '#444';
        // ラベルを生成
        this.label = new phina.display.Label('Hello, phina.js!').addChildTo(this);
        this.label.x = (<any>this).gridX.center(); // x 座標 TODO
        this.label.y = (<any>this).gridY.center(); // y 座標 TODO
        this.label.fill = 'white'; // 塗りつぶし色

        this.hoge(3, 3, 4, 5);
    }
};

// メイン処理
phina.main(function() {
    var app = new phina.display.CanvasApp({});
    app.replaceScene(new MainScene());
    // アプリケーション実行
    app.run();
});