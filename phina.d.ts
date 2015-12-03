declare module phina.geom
{
export class Vector2
{
 constructor(x:any,y:any);
 clone():any;
 equals(v:any):any;
 set(x:any,y:any):any;
 add(v:any):any;
 sub(v:any):any;
 mul(n:any):any;
 div(n:any):any;
 negate():any;
 dot(v:any):any;
 cross(v:any):any;
 length():any;
 lengthSquared():any;
 distance(v:any):any;
 distanceSquared(v:any):any;
 random(min:any,max:any):any;
 normalize():any;
 toString():any;
 toAngle():any;
 fromAngle(rad:any,len:any):any;
}
}
declare module phina.geom
{
export class Matrix33
{
 constructor();
 set(m00:any,m01:any,m02:any,m10:any,m11:any,m12:any,m20:any,m21:any,m22:any):any;
 identity():any;
 clone():any;
 determinant():any;
 transpose():any;
 invert():any;
 multiply(mat:any):any;
 multiplyVector2(v:any):any;
 getRow():any;
 getCol():any;
 toString():any;
}
}
declare module phina.geom
{
export class Rect
{
 constructor(x:any,y:any,width:any,height:any);
 set(x:any,y:any,width:any,height:any):any;
 moveTo(x:any,y:any):any;
 moveBy(x:any,y:any):any;
 setSize(w:any,h:any):any;
 padding(top:any,right:any,bottom:any,left:any):any;
 contains(x:any,y:any):any;
 clone():any;
 toCircle():any;
 toArray():any;
}
}
declare module phina.geom
{
export class Circle
{
 constructor(x:any,y:any,radius:any);
 set(x:any,y:any,radius:any):any;
 moveTo(x:any,y:any):any;
 moveBy(x:any,y:any):any;
 contains(x:any,y:any):any;
 clone():any;
 toRect():any;
 toArray():any;
}
}
declare module phina.geom
{
export class Collision
{
}
}
declare module phina.util
{
export class EventDispatcher
{
 constructor();
 on(type:any,listener:any):any;
 off(type:any,listener:any):any;
 fire(e:any):any;
 flare(type:any,param:any):any;
 one(type:any,listener:any):any;
 has(type:any):any;
 clear(type:any):any;
}
}
declare module phina.util
{
export class Tween extends phina.util.EventDispatcher
{
 constructor(target:any);
 fromTo(target:any,beginProps:any,finishProps:any,duration:any,easing:any):any;
 to(target:any,finishProps:any,duration:any,easing:any):any;
 from(target:any,beginProps:any,duration:any,easing:any):any;
 by(target:any,props:any,duration:any,easing:any):any;
 yoyo():any;
 gain(time:any):any;
 forward(time:any):any;
 backward(time:any):any;
 seek(time:any):any;
}
}
declare module phina.util
{
export class Ticker extends phina.util.EventDispatcher
{
 constructor();
 tick(func:any):any;
 run():any;
 start():any;
 resume():any;
 stop():any;
 rewind():any;
}
}
declare module phina.util
{
export class Grid
{
 constructor();
 span(index:any):any;
 unit():any;
 center(offset:any):any;
}
}
declare module phina.util
{
export class ChangeDispatcher extends phina.util.EventDispatcher
{
 constructor();
 register(key:any,defaultValue:any):any;
 observe():any;
 unobserve():any;
}
}
declare module phina.util
{
export class Flow extends phina.util.EventDispatcher
{
 constructor(func:any,wait:any);
 resolve(arg:any):any;
 reject():any;
 then(func:any):any;
}
}
declare module phina.util
{
export class Color
{
 constructor(r:any,g:any,b:any,a:any);
 set(r:any,g:any,b:any,a:any):any;
 setFromNumber(r:any,g:any,b:any,a:any):any;
 setFromArray(arr:any):any;
 setFromObject(obj:any):any;
 setFromString(str:any):any;
 setSmart():any;
 toStyleAsHex():any;
 toStyleAsRGB():any;
 toStyleAsRGBA():any;
 toStyle():any;
}
}
declare module phina.util
{
export class Random
{
 constructor(seed:any);
 random():any;
 randint(min:any,max:any):any;
 randfloat(min:any,max:any):any;
 randbool():any;
 randarray(len:any,min:any,max:any):any;
}
}
declare module phina.asset
{
export class Asset extends phina.util.EventDispatcher
{
 constructor(src:any);
 load(src:any):any;
 isLoaded():any;
protected _load(resolve:any):any;
}
}
declare module phina.asset
{
export class AssetManager
{
}
}
declare module phina.asset
{
export class AssetLoader extends phina.util.EventDispatcher
{
 constructor(params:any);
 load(params:any):any;
}
}
declare module phina.asset
{
export class File extends phina.asset.Asset
{
 constructor();
protected _load(resolve:any):any;
}
}
declare module phina.asset
{
export class Script extends phina.asset.Asset
{
 constructor();
protected _load(resolve:any):any;
}
}
declare module phina.asset
{
export class Texture extends phina.asset.Asset
{
 constructor();
protected _load(resolve:any):any;
}
}
declare module phina.asset
{
export class Sound extends phina.asset.Asset
{
 constructor();
 play():any;
 stop():any;
protected _oscillator(type:any):any;
 loadFromBuffer(buffer:any):any;
 setLoop(loop:any):any;
 setLoopStart(loopStart:any):any;
 setLoopEnd(loopEnd:any):any;
protected _load(r:any):any;
protected _loadFromFile(r:any):any;
protected _loadFromURIScheme(r:any):any;
}
}
declare module phina.asset
{
export class SpriteSheet extends phina.asset.Asset
{
 constructor();
 setup(params:any):any;
protected _load(resolve:any):any;
protected _setupFrame(frame:any):any;
protected _setupAnim(animations:any):any;
 getFrame(index:any):any;
 getAnimation(name:any):any;
}
}
declare module phina.asset
{
export class Font extends phina.asset.Asset
{
 constructor();
 load(path:any):any;
protected _load(resolve:any):any;
protected _checkLoaded(font:any,callback:any):any;
 setFontName(name:any):any;
 getFontName():any;
}
}
declare module phina.input
{
export class Input extends phina.util.EventDispatcher
{
 constructor(domElement:any);
 update():any;
protected _start(x:any,y:any,flag:any):any;
protected _end(flag:any):any;
protected _move(x:any,y:any):any;
}
}
declare module phina.input
{
export class Mouse extends phina.input.Input
{
 constructor(domElement:any);
 getButton(button:any):any;
 getButtonDown(button:any):any;
 getButtonUp(button:any):any;
}
}
declare module phina.input
{
export class Touch extends phina.input.Input
{
 constructor(domElement:any,isMulti:any);
 getTouch():any;
 getTouchStart():any;
 getTouchEnd():any;
}
}
declare module phina.input
{
export class TouchList
{
 constructor(domElement:any);
 getEmpty():any;
 getTouch(id:any):any;
 removeTouch(touch:any):any;
 update():any;
}
}
declare module phina.input
{
export class Keyboard extends phina.input.Input
{
 constructor(domElement:any);
 update():any;
 getKey(key:any):any;
 getKeyDown(key:any):any;
 getKeyUp(key:any):any;
 getKeyAngle():any;
 getKeyDirection():any;
 setKey(key:any,flag:any):any;
 clearKey():any;
}
}
declare module phina.input
{
export class GamepadManager extends phina.util.EventDispatcher
{
 constructor();
 update():any;
 get(index:any):any;
 dispose(index:any):any;
 isConnected(index:any):any;
protected _poll():any;
}
}
declare module phina.input
{
export class Gamepad
{
 constructor(index:any);
 getKey(button:any):any;
 getKeyDown(button:any):any;
 getKeyUp(button:any):any;
 getKeyAngle():any;
 getKeyDirection():any;
 getStickAngle(stickId:any):any;
 getStickDirection(stickId:any):any;
protected _updateState(gamepad:any):any;
protected _updateStateEmpty():any;
protected _updateButton(value:any,buttonId:any):any;
protected _updateStick(value:any,stickId:any,axisName:any):any;
}
}
declare module phina.app
{
export class Updater
{
 constructor(app:any);
 update(root:any):any;
protected _updateElement(element:any):any;
protected _checkPoint(obj:any):any;
protected __checkPoint(obj:any,p:any):any;
}
}
declare module phina.app
{
export class Interactive
{
 constructor(app:any);
 enable():any;
 disable():any;
 check(root:any):any;
protected _checkElement(element:any):any;
protected _checkPoint(obj:any):any;
protected __checkPoint(obj:any,p:any):any;
}
}
declare module phina.app
{
export class BaseApp extends phina.util.EventDispatcher
{
 constructor();
 run():any;
 replaceScene(scene:any):any;
 pushScene(scene:any):any;
 popScene():any;
 start():any;
 stop():any;
 enableStats():any;
 enableDatGUI(callback:any):any;
protected _loop():any;
protected _update():any;
protected _draw():any;
}
}
declare module phina.app
{
export class Element extends phina.util.EventDispatcher
{
 constructor();
 addChild(child:any):any;
 addChildTo(parent:any):any;
 addChildAt(child:any,index:any):any;
 getChildAt(index:any):any;
 getChildByName(name:any):any;
 getChildIndex(child:any):any;
 getParent():any;
 getRoot():any;
 removeChild(child:any):any;
 remove():any;
 fromJSON(json:any):any;
 toJSON():any;
}
}
declare module phina.app
{
export class Object2D extends phina.app.Element
{
 constructor();
 hitTest(x:any,y:any):any;
 hitTestRect(x:any,y:any):any;
 hitTestCircle(x:any,y:any):any;
 hitTestElement(elm:any):any;
 globalToLocal(p:any):any;
 setInteractive(flag:any,type:any):any;
 setX(x:any):any;
 setY(y:any):any;
 setPosition(x:any,y:any):any;
 setRotation(rotation:any):any;
 setScale(x:any,y:any):any;
 setOrigin(x:any,y:any):any;
 setWidth(width:any):any;
 setHeight(height:any):any;
 setSize(width:any,height:any):any;
 setBoundingType(type:any):any;
 moveTo(x:any,y:any):any;
 moveBy(x:any,y:any):any;
protected _calcWorldMatrix():any;
}
}
declare module phina.app
{
export class Scene extends phina.app.Element
{
 constructor();
 exit(params:any):any;
}
}
declare module phina.accessory
{
export class Accessory extends phina.util.EventDispatcher
{
 constructor(target:any);
 setTarget(target:any):any;
 getTarget():any;
 isAttached():any;
 attachTo(element:any):any;
 remove():any;
}
}
declare module phina.accessory
{
export class Tweener extends phina.accessory.Accessory
{
 constructor(target:any);
protected _init():any;
 update(app:any):any;
 to(props:any,duration:any,easing:any):any;
 by(props:any,duration:any,easing:any):any;
 from(props:any,duration:any,easing:any):any;
 wait(time:any):any;
 call(func:any,self:any,args:any):any;
 set(key:any,value:any):any;
 moveTo(x:any,y:any,duration:any,easing:any):any;
 moveBy(x:any,y:any,duration:any,easing:any):any;
 fade(value:any,duration:any,easing:any):any;
 fadeOut(duration:any,easing:any):any;
 fadeIn(duration:any,easing:any):any;
 play():any;
 pause():any;
 stop():any;
 rewind():any;
 yoyo():any;
 setLoop(flag:any):any;
 clear():any;
 fromJSON(json:any):any;
protected _add(params:any):any;
protected _updateTask(app:any):any;
protected _updateTween(app:any):any;
protected _updateWait(app:any):any;
}
}
declare module phina.accessory
{
export class Draggable extends phina.accessory.Accessory
{
 constructor(target:any);
 back():any;
 enable():any;
}
}
declare module phina.accessory
{
export class Flickable extends phina.accessory.Accessory
{
 constructor(target:any);
 update():any;
 cancel():any;
 enable():any;
}
}
declare module phina.accessory
{
export class FrameAnimation extends phina.accessory.Accessory
{
 constructor(ss:any);
 update():any;
 gotoAndPlay(name:any):any;
 gotoAndStop(name:any):any;
protected _updateFrame():any;
}
}
declare module phina.accessory
{
export class Physical extends phina.accessory.Accessory
{
 constructor(target:any);
 update():any;
 force(x:any,y:any):any;
}
}
declare module phina.graphics
{
export class Canvas
{
 constructor(canvas:any);
 setSize(width:any,height:any):any;
 setSizeToScreen():any;
 fitScreen(isEver:any):any;
 clear(x:any,y:any,width:any,height:any):any;
 clearColor(fillStyle:any,x:any,y:any,width:any,height:any):any;
 beginPath():any;
 closePath():any;
 moveTo(x:any,y:any):any;
 lineTo(x:any,y:any):any;
 fill():any;
 stroke():any;
 clip():any;
 drawPoint(x:any,y:any):any;
 line(x0:any,y0:any,x1:any,y1:any):any;
 drawLine(x0:any,y0:any,x1:any,y1:any):any;
 drawDashLine(x0:any,y0:any,x1:any,y1:any,pattern:any):any;
 drawArrow(x0:any,y0:any,x1:any,y1:any,arrowRadius:any):any;
 lines():any;
 strokeLines():any;
 fillLines():any;
 rect(x:any,y:any,width:any,height:any):any;
 fillRect():any;
 strokeRect():any;
 roundRect(x:any,y:any,width:any,height:any,radius:any):any;
 fillRoundRect(x:any,y:any,width:any,height:any,radius:any):any;
 strokeRoundRect(x:any,y:any,width:any,height:any,radius:any):any;
 circle(x:any,y:any,radius:any):any;
 fillCircle(x:any,y:any,radius:any):any;
 strokeCircle(x:any,y:any,radius:any):any;
 arc(x:any,y:any,radius:any,startAngle:any,endAngle:any,anticlockwise:any):any;
 fillArc(x:any,y:any,radius:any,startAngle:any,endAngle:any,anticlockwise:any):any;
 strokeArc(x:any,y:any,radius:any,startAngle:any,endAngle:any,anticlockwise:any):any;
 pie(x:any,y:any,radius:any,startAngle:any,endAngle:any,anticlockwise:any):any;
 fillPie(x:any,y:any,radius:any,startAngle:any,endAngle:any,anticlockwise:any):any;
 strokePie(x:any,y:any,radius:any,startAngle:any,endAngle:any,anticlockwise:any):any;
 polygon(x:any,y:any,size:any,sides:any,offsetAngle:any):any;
 fillPolygon(x:any,y:any,radius:any,sides:any,offsetAngle:any):any;
 strokePolygon(x:any,y:any,radius:any,sides:any,offsetAngle:any):any;
 star(x:any,y:any,radius:any,sides:any,sideIndent:any,offsetAngle:any):any;
 fillStar(x:any,y:any,radius:any,sides:any,sideIndent:any,offsetAngle:any):any;
 strokeStar(x:any,y:any,radius:any,sides:any,sideIndent:any,offsetAngle:any):any;
 heart(x:any,y:any,radius:any,angle:any):any;
 fillHeart(x:any,y:any,radius:any,angle:any):any;
 strokeHeart(x:any,y:any,radius:any,angle:any):any;
 setTransform(m11:any,m12:any,m21:any,m22:any,dx:any,dy:any):any;
 resetTransform():any;
 transformCenter():any;
 translate(x:any,y:any):any;
 rotate(rotation:any):any;
 scale(scaleX:any,scaleY:any):any;
 saveAsImage(mime_type:any):any;
}
}
declare module phina.graphics
{
export class CanvasRecorder extends phina.util.EventDispatcher
{
 constructor(canvas:any,options:any);
 setOption(key:any,value:any):any;
 setOptions(options:any):any;
 start(fps:any,recordingTime:any):any;
 stop():any;
 open():any;
}
}
declare module phina.display
{
export class CanvasElement extends phina.app.Object2D
{
 constructor(options:any);
 setVisible(flag:any):any;
 show():any;
 hide():any;
protected _calcWorldAlpha():any;
}
}
declare module phina.display
{
export class Shape extends phina.display.CanvasElement
{
 constructor(options:any);
protected _render():any;
protected _renderBackground(width:any,height:any,color:any):any;
 draw(canvas:any):any;
}
}
declare module phina.display
{
export class RectangleShape extends phina.display.Shape
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.display
{
export class CircleShape extends phina.display.Shape
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.display
{
export class TriangleShape extends phina.display.Shape
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.display
{
export class StarShape extends phina.display.Shape
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.display
{
export class PolygonShape extends phina.display.Shape
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.display
{
export class HeartShape extends phina.display.Shape
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.display
{
export class Sprite extends phina.display.CanvasElement
{
 constructor(image:any,width:any,height:any);
 draw(canvas:any):any;
 setFrameIndex(index:any,width:any,height:any):any;
}
}
declare module phina.display
{
export class Label extends phina.display.Shape
{
 constructor(options:any);
 calcWidth():any;
 calcHeight():any;
protected _render():any;
}
}
declare module phina.display
{
export class CanvasScene extends phina.app.Scene
{
 constructor(params:any);
 hitTest():any;
protected _update():any;
protected _render():any;
}
}
declare module phina.display
{
export class Layer extends phina.display.CanvasElement
{
 constructor(params:any);
 draw(canvas:any):any;
}
}
declare module phina.display
{
export class ThreeLayer extends phina.display.CanvasElement
{
 constructor(params:any);
 draw(canvas:any):any;
}
}
declare module phina.display
{
export class CanvasRenderer
{
 constructor(canvas:any);
 render(scene:any):any;
 renderChildren(obj:any):any;
 renderObject(obj:any):any;
}
}
declare module phina.display
{
export class DomApp extends phina.app.BaseApp
{
 constructor(options:any);
 update():any;
protected _checkClick(e:any):any;
}
}
declare module phina.display
{
export class CanvasApp extends phina.display.DomApp
{
 constructor(options:any);
protected _draw():any;
 fitScreen():any;
}
}
declare module phina.effect
{
export class Wave extends phina.display.CircleShape
{
 constructor(params:any);
}
}
declare module phina.ui
{
export class Button extends phina.display.Shape
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.ui
{
export class Gauge extends phina.display.Shape
{
 constructor(options:any);
 isFull():any;
 isEmpty():any;
 setValue(value:any):any;
 getRate():any;
protected _render():any;
}
}
declare module phina.ui
{
export class CircleGauge extends phina.ui.Gauge
{
 constructor(options:any);
protected _render():any;
}
}
declare module phina.game
{
export class ManagerScene extends phina.app.Scene
{
 constructor(params:any);
 setScenes(scenes:any):any;
 gotoScene(index:any,args:any):any;
 gotoNext(args:any):any;
 getCurrentIndex():any;
 getCurrentLabel():any;
 labelToIndex(label:any):any;
 indexToLabel(index:any):any;
 onnext(e:any):any;
}
}
declare module phina.game
{
export class SplashScene extends phina.display.CanvasScene
{
 constructor(options:any);
protected _init():any;
}
}
declare module phina.game
{
export class TitleScene extends phina.display.CanvasScene
{
 constructor(params:any);
}
}
declare module phina.game
{
export class ResultScene extends phina.display.CanvasScene
{
 constructor(params:any);
}
}
declare module phina.game
{
export class LoadingScene extends phina.display.CanvasScene
{
 constructor(options:any);
}
}
declare module phina.game
{
export class CountScene extends phina.display.CanvasScene
{
 constructor(options:any);
protected _updateCount():any;
}
}
declare module phina.game
{
export class GameApp extends phina.display.CanvasApp
{
 constructor(options:any);
}
}
declare module phina.game
{
export class PieTimer extends phina.display.Shape
{
 constructor(time:any,style:any);
 update(app:any):any;
 start():any;
 stop():any;
protected _render():any;
}
}
declare module phina.social
{
export class Twitter extends phina.display.CircleShape
{
 constructor(params:any);
}
}
