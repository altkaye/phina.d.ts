// Type definitions for phina.js
// Project: http://phinajs.com/
// Definitions by: altkaye <https://github.com/altkaye>
// Definitions: https://github.com/altkaye/phina.d.ts

declare module phina.geom {
    export class Vector2 {
        public x: number;
        public y: number;
        constructor(x: any, y: any);
        public clone(): any;
        public equals(v: any): any;
        public set(x: any, y: any): any;
        public add(v: any): any;
        public sub(v: any): any;
        public mul(n: any): any;
        public div(n: any): any;
        public negate(): any;
        public dot(v: any): any;
        public cross(v: any): any;
        public length(): any;
        public lengthSquared(): any;
        public distance(v: any): any;
        public distanceSquared(v: any): any;
        public random(min: any, max: any): any;
        public normalize(): any;
        public toString(): any;
        public toAngle(): any;
        public fromAngle(rad: any, len: any): any;
        public static min(a: any, b: any): any;
        public static max(a: any, b: any): any;
        public static add(lhs: any, rhs: any): any;
        public static sub(lhs: any, rhs: any): any;
        public static mul(v: any, n: any): any;
        public static div(v: any, n: any): any;
        public static negate(v: any): any;
        public static dot(lhs: any, rhs: any): any;
        public static cross(lhs: any, rhs: any): any;
        public static distance(lhs: any, rhs: any): any;
        public static distanceSquared(lhs: any, rhs: any): any;
        public static manhattanDistance(lhs: any, rhs: any): any;
        public static reflect(v: any, normal: any): any;
        public static lerp(lhs: any, rhs: any, t: any): any;
        public static slerp(lhs: any, rhs: any, t: any): any;
        public static random(len: any, min: any, max: any): any;
    }
}
declare module phina.geom {
    export class Matrix33 {
        constructor();
        public set(m00: any, m01: any, m02: any, m10: any, m11: any, m12: any, m20: any, m21: any, m22: any): any;
        public identity(): any;
        public clone(): any;
        public determinant(): any;
        public transpose(): any;
        public invert(): any;
        public multiply(mat: any): any;
        public multiplyVector2(v: any): any;
        public getRow(): any;
        public getCol(): any;
        public toString(): any;
        public x: any;
    }
}
declare module phina.geom {
    export class Rect {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        constructor(x: any, y: any, width: any, height: any);
        public set(x: any, y: any, width: any, height: any): any;
        public moveTo(x: any, y: any): any;
        public moveBy(x: any, y: any): any;
        public setSize(w: any, h: any): any;
        public padding(top: any, right: any, bottom: any, left: any): any;
        public contains(x: any, y: any): any;
        public clone(): any;
        public toCircle(): any;
        public toArray(): any;
        public left: any;
        public top: any;
        public right: any;
        public bottom: any;
        public centerX: any;
        public centerY: any;
    }
}
declare module phina.geom {
    export class Circle {
        public x: number;
        public y: number;
        public radius: number;
        constructor(x: any, y: any, radius: any);
        public set(x: any, y: any, radius: any): any;
        public moveTo(x: any, y: any): any;
        public moveBy(x: any, y: any): any;
        public contains(x: any, y: any): any;
        public clone(): any;
        public toRect(): any;
        public toArray(): any;
        public left: any;
        public top: any;
        public right: any;
        public bottom: any;
        public size: any;
    }
}
declare module phina.geom {
    export class Collision {
        public static testCircleCircle(circle0: any, circle1: any): any;
        public static testRectRect(rect0: any, rect1: any): any;
        public static testCircleRect(circle: any, rect: any): any;
    }
}
declare module phina.util {
    export class EventDispatcher {
        constructor();
        public on(type: any, listener: any): any;
        public off(type: any, listener: any): any;
        public fire(e: any): any;
        public flare(type: any, param: any): any;
        public one(type: any, listener: any): any;
        public has(type: any): any;
        public clear(type: any): any;
    }
}
declare module phina.util {
    export class Tween extends phina.util.EventDispatcher {
        public superClass: string;
        constructor(target: any);
        public fromTo(target: any, beginProps: any, finishProps: any, duration: any, easing: any): any;
        public to(target: any, finishProps: any, duration: any, easing: any): any;
        public from(target: any, beginProps: any, duration: any, easing: any): any;
        public by(target: any, props: any, duration: any, easing: any): any;
        public yoyo(): any;
        public gain(time: any): any;
        public forward(time: any): any;
        public backward(time: any): any;
        public seek(time: any): any;
        public easing: any;
        public static EASING: any;
    }
}
declare module phina.util {
    export class Ticker extends phina.util.EventDispatcher {
        public superClass: string;
        public frame: any;
        public deltaTime: any;
        public elapsedTime: any;
        constructor();
        public tick(func: any): any;
        public run(): any;
        public start(): any;
        public resume(): any;
        public stop(): any;
        public rewind(): any;
        public fps: any;
    }
}
declare module phina.util {
    export class Grid {
        public width: number;
        public columns: number;
        public loop: boolean;
        public offset: number;
        constructor();
        public span(index: any): any;
        public unit(): any;
        public center(offset: any): any;
    }
}
declare module phina.util {
    export class ChangeDispatcher extends phina.util.EventDispatcher {
        public superClass: string;
        constructor();
        public register(key: any, defaultValue: any): any;
        public observe(): any;
        public unobserve(): any;
    }
}
declare module phina.util {
    export class Flow extends phina.util.EventDispatcher {
        public superClass: string;
        constructor(func: any, wait: any);
        public resolve(arg: any): any;
        public reject(): any;
        public then(func: any): any;
        public static resolve(value: any): any;
        public static all(flows: any): any;
    }
}
declare module phina.util {
    export class Color {
        public r: number;
        public g: number;
        public b: number;
        public a: number;
        constructor(r: any, g: any, b: any, a: any);
        public set(r: any, g: any, b: any, a: any): any;
        public setFromNumber(r: any, g: any, b: any, a: any): any;
        public setFromArray(arr: any): any;
        public setFromObject(obj: any): any;
        public setFromString(str: any): any;
        public setSmart(): any;
        public toStyleAsHex(): any;
        public toStyleAsRGB(): any;
        public toStyleAsRGBA(): any;
        public toStyle(): any;
        public static COLOR_LIST: any;
        public static strToNum(str: any): any;
        public static stringToNumber(str: any): any;
        public static HSLtoRGB(h: any, s: any, l: any): any;
        public static HSLAtoRGBA(h: any, s: any, l: any, a: any): any;
        public static createStyleRGB(r: any, g: any, b: any): any;
        public static createStyleRGBA(r: any, g: any, b: any, a: any): any;
        public static createStyleHSL(h: any, s: any, l: any): any;
        public static createStyleHSLA(h: any, s: any, l: any, a: any): any;
    }
}
declare module phina.util {
    export class Random {
        public seed: number;
        constructor(seed: any);
        public random(): any;
        public randint(min: any, max: any): any;
        public randfloat(min: any, max: any): any;
        public randbool(): any;
        public randarray(len: any, min: any, max: any): any;
        public static MAX: number;
        public static seed: number;
        public static getSeed(): any;
        public static setSeed(seed: any): any;
        public static random(): any;
        public static randint(min: any, max: any): any;
        public static randfloat(min: any, max: any): any;
        public static randbool(): any;
        public static randarray(len: any, min: any, max: any): any;
        public static xor32(seed: any): any;
    }
}
declare module phina.asset {
    export class Asset extends phina.util.EventDispatcher {
        public superClass: string;
        constructor(src: any);
        public load(src: any): any;
        public isLoaded(): any;
        protected _load(resolve: any): any;
    }
}
declare module phina.asset {
    export class AssetManager {
        public static assets: any;
        public static get(type: any, key: any): any;
        public static set(type: any, key: any, asset: any): any;
        public static contains(type: any, key: any): any;
    }
}
declare module phina.asset {
    export class AssetLoader extends phina.util.EventDispatcher {
        public superClass: string;
        constructor(params: any);
        public load(params: any): any;
        public static assetLoadFunctions: any;
    }
}
declare module phina.asset {
    export class File extends phina.asset.Asset {
        public superClass: string;
        constructor();
        protected _load(resolve: any): any;
    }
}
declare module phina.asset {
    export class Script extends phina.asset.Asset {
        public superClass: string;
        constructor();
        protected _load(resolve: any): any;
    }
}
declare module phina.asset {
    export class Texture extends phina.asset.Asset {
        public superClass: string;
        constructor();
        protected _load(resolve: any): any;
    }
}
declare module phina.asset {
    export class Sound extends phina.asset.Asset {
        public superClass: string;
        protected _loop: boolean;
        protected _loopStart: number;
        protected _loopEnd: number;
        constructor();
        public play(): any;
        public stop(): any;
        protected _oscillator(type: any): any;
        public loadFromBuffer(buffer: any): any;
        public setLoop(loop: any): any;
        public setLoopStart(loopStart: any): any;
        public setLoopEnd(loopEnd: any): any;
        protected _load(r: any): any;
        protected _loadFromFile(r: any): any;
        protected _loadFromURIScheme(r: any): any;
        public volume: any;
        public loop: any;
        public loopStart: any;
        public loopEnd: any;
        public static audioContext: any;
    }
}
declare module phina.asset {
    export class SpriteSheet extends phina.asset.Asset {
        public superClass: string;
        constructor();
        public setup(params: any): any;
        protected _load(resolve: any): any;
        protected _setupFrame(frame: any): any;
        protected _setupAnim(animations: any): any;
        public getFrame(index: any): any;
        public getAnimation(name: any): any;
    }
}
declare module phina.asset {
    export class Font extends phina.asset.Asset {
        public superClass: string;
        constructor();
        public load(path: any): any;
        protected _load(resolve: any): any;
        protected _checkLoaded(font: any, callback: any): any;
        public setFontName(name: any): any;
        public getFontName(): any;
    }
}
declare module phina.input {
    export class Input extends phina.util.EventDispatcher {
        public superClass: string;
        public domElement: any;
        constructor(domElement: any);
        public update(): any;
        protected _start(x: any, y: any, flag: any): any;
        protected _end(flag: any): any;
        protected _move(x: any, y: any): any;
        public x: any;
        public y: any;
        public dx: any;
        public dy: any;
    }
}
declare module phina.input {
    export class Mouse extends phina.input.Input {
        public superClass: string;
        constructor(domElement: any);
        public getButton(button: any): any;
        public getButtonDown(button: any): any;
        public getButtonUp(button: any): any;
        public static BUTTON_LEFT: number;
        public static BUTTON_MIDDLE: number;
        public static BUTTON_RIGHT: number;
    }
}
declare module phina.input {
    export class Touch extends phina.input.Input {
        public superClass: string;
        constructor(domElement: any, isMulti: any);
        public getTouch(): any;
        public getTouchStart(): any;
        public getTouchEnd(): any;
    }
}
declare module phina.input {
    export class TouchList {
        public domElement: any;
        public touchMap: any;
        public touches: any;
        protected _id: any;
        constructor(domElement: any);
        public getEmpty(): any;
        public getTouch(id: any): any;
        public removeTouch(touch: any): any;
        public update(): any;
        public id: any;
    }
}
declare module phina.input {
    export class Keyboard extends phina.input.Input {
        public superClass: string;
        constructor(domElement: any);
        public update(): any;
        public getKey(key: any): any;
        public getKeyDown(key: any): any;
        public getKeyUp(key: any): any;
        public getKeyAngle(): any;
        public getKeyDirection(): any;
        public setKey(key: any, flag: any): any;
        public clearKey(): any;
        public static ARROW_BIT_TO_ANGLE_TABLE: any;
        public static KEY_CODE: any;
    }
}
declare module phina.input {
    export class GamepadManager extends phina.util.EventDispatcher {
        public superClass: string;
        public gamepads: any;
        protected _created: any;
        protected _rawgamepads: any;
        constructor();
        public update(): any;
        public get(index: any): any;
        public dispose(index: any): any;
        public isConnected(index: any): any;
        protected _poll(): any;
        public static isAvailable: boolean;
    }
}
declare module phina.input {
    export class Gamepad {
        public index: any;
        public buttons: any;
        public sticks: any;
        public id: any;
        public connected: boolean;
        public mapping: any;
        public timestamp: any;
        constructor(index: any);
        public getKey(button: any): any;
        public getKeyDown(button: any): any;
        public getKeyUp(button: any): any;
        public getKeyAngle(): any;
        public getKeyDirection(): any;
        public getStickAngle(stickId: any): any;
        public getStickDirection(stickId: any): any;
        protected _updateState(gamepad: any): any;
        protected _updateStateEmpty(): any;
        protected _updateButton(value: any, buttonId: any): any;
        protected _updateStick(value: any, stickId: any, axisName: any): any;
        public static isAvailable: boolean;
        public static ANALOGUE_BUTTON_THRESHOLD: number;
        public static BUTTON_CODE: any;
    }
}
declare module phina.app {
    export class Updater {
        constructor(app: any);
        public update(root: any): any;
        protected _updateElement(element: any): any;
        protected _checkPoint(obj: any): any;
        protected __checkPoint(obj: any, p: any): any;
    }
}
declare module phina.app {
    export class Interactive {
        constructor(app: any);
        public enable(): any;
        public disable(): any;
        public check(root: any): any;
        protected _checkElement(element: any): any;
        protected _checkPoint(obj: any): any;
        protected __checkPoint(obj: any, p: any): any;
    }
}
declare module phina.app {
    export class BaseApp extends phina.util.EventDispatcher {
        public superClass: string;
        public awake: any;
        public fps: any;
        public frame: any;
        constructor();
        public run(): any;
        public replaceScene(scene: any): any;
        public pushScene(scene: any): any;
        public popScene(): any;
        public start(): any;
        public stop(): any;
        public enableStats(): any;
        public enableDatGUI(callback: any): any;
        protected _loop(): any;
        protected _update(): any;
        protected _draw(): any;
        public currentScene: any;
        public deltaTime: any;
        public elapsedTime: any;
        public currentTime: any;
        public startTime: any;
    }
}
declare module phina.app {
    export class Element extends phina.util.EventDispatcher {
        public superClass: string;
        public parent: any;
        public children: any;
        constructor();
        public addChild(child: any): any;
        public addChildTo(parent: any): any;
        public addChildAt(child: any, index: any): any;
        public getChildAt(index: any): any;
        public getChildByName(name: any): any;
        public getChildIndex(child: any): any;
        public getParent(): any;
        public getRoot(): any;
        public removeChild(child: any): any;
        public remove(): any;
        public fromJSON(json: any): any;
        public toJSON(): any;
    }
}
declare module phina.app {
    export class Object2D extends phina.app.Element {
        public superClass: string;
        public position: any;
        public rotation: number;
        public scale: any;
        public origin: any;
        constructor();
        public hitTest(x: any, y: any): any;
        public hitTestRect(x: any, y: any): any;
        public hitTestCircle(x: any, y: any): any;
        public hitTestElement(elm: any): any;
        public globalToLocal(p: any): any;
        public setInteractive(flag: any, type: any): any;
        public setX(x: any): any;
        public setY(y: any): any;
        public setPosition(x: any, y: any): any;
        public setRotation(rotation: any): any;
        public setScale(x: any, y: any): any;
        public setOrigin(x: any, y: any): any;
        public setWidth(width: any): any;
        public setHeight(height: any): any;
        public setSize(width: any, height: any): any;
        public setBoundingType(type: any): any;
        public moveTo(x: any, y: any): any;
        public moveBy(x: any, y: any): any;
        protected _calcWorldMatrix(): any;
        public x: any;
        public y: any;
        public originX: any;
        public originY: any;
        public scaleX: any;
        public scaleY: any;
        public width: any;
        public height: any;
        public radius: any;
        public top: any;
        public right: any;
        public bottom: any;
        public left: any;
        public centerX: any;
        public centerY: any;
    }
}
declare module phina.app {
    export class Scene extends phina.app.Element {
        public superClass: string;
        constructor();
        public exit(params: any): any;
    }
}
declare module phina.accessory {
    export class Accessory extends phina.util.EventDispatcher {
        public superClass: string;
        constructor(target: any);
        public setTarget(target: any): any;
        public getTarget(): any;
        public isAttached(): any;
        public attachTo(element: any): any;
        public remove(): any;
    }
}
declare module phina.accessory {
    export class Tweener extends phina.accessory.Accessory {
        public superClass: string;
        constructor(target: any);
        protected _init(): any;
        public update(app: any): any;
        public to(props: any, duration: any, easing: any): any;
        public by(props: any, duration: any, easing: any): any;
        public from(props: any, duration: any, easing: any): any;
        public wait(time: any): any;
        public call(func: any, self: any, args: any): any;
        public set(key: any, value: any): any;
        public moveTo(x: any, y: any, duration: any, easing: any): any;
        public moveBy(x: any, y: any, duration: any, easing: any): any;
        public fade(value: any, duration: any, easing: any): any;
        public fadeOut(duration: any, easing: any): any;
        public fadeIn(duration: any, easing: any): any;
        public play(): any;
        public pause(): any;
        public stop(): any;
        public rewind(): any;
        public yoyo(): any;
        public setLoop(flag: any): any;
        public clear(): any;
        public fromJSON(json: any): any;
        protected _add(params: any): any;
        protected _updateTask(app: any): any;
        protected _updateTween(app: any): any;
        protected _updateWait(app: any): any;
    }
}
declare module phina.accessory {
    export class Draggable extends phina.accessory.Accessory {
        public superClass: string;
        constructor(target: any);
        public back(): any;
        public enable(): any;
    }
}
declare module phina.accessory {
    export class Flickable extends phina.accessory.Accessory {
        public superClass: string;
        constructor(target: any);
        public update(): any;
        public cancel(): any;
        public enable(): any;
    }
}
declare module phina.accessory {
    export class FrameAnimation extends phina.accessory.Accessory {
        public superClass: string;
        constructor(ss: any);
        public update(): any;
        public gotoAndPlay(name: any): any;
        public gotoAndStop(name: any): any;
        protected _updateFrame(): any;
    }
}
declare module phina.accessory {
    export class Physical extends phina.accessory.Accessory {
        public superClass: string;
        constructor(target: any);
        public update(): any;
        public force(x: any, y: any): any;
    }
}
declare module phina.graphics {
    export class Canvas {
        public domElement: any;
        public canvas: any;
        public context: any;
        constructor(canvas: any);
        public setSize(width: any, height: any): any;
        public setSizeToScreen(): any;
        public fitScreen(isEver: any): any;
        public clear(x: any, y: any, width: any, height: any): any;
        public clearColor(fillStyle: any, x: any, y: any, width: any, height: any): any;
        public beginPath(): any;
        public closePath(): any;
        public moveTo(x: any, y: any): any;
        public lineTo(x: any, y: any): any;
        public fill(): any;
        public stroke(): any;
        public clip(): any;
        public drawPoint(x: any, y: any): any;
        public line(x0: any, y0: any, x1: any, y1: any): any;
        public drawLine(x0: any, y0: any, x1: any, y1: any): any;
        public drawDashLine(x0: any, y0: any, x1: any, y1: any, pattern: any): any;
        public drawArrow(x0: any, y0: any, x1: any, y1: any, arrowRadius: any): any;
        public lines(): any;
        public strokeLines(): any;
        public fillLines(): any;
        public rect(x: any, y: any, width: any, height: any): any;
        public fillRect(): any;
        public strokeRect(): any;
        public roundRect(x: any, y: any, width: any, height: any, radius: any): any;
        public fillRoundRect(x: any, y: any, width: any, height: any, radius: any): any;
        public strokeRoundRect(x: any, y: any, width: any, height: any, radius: any): any;
        public circle(x: any, y: any, radius: any): any;
        public fillCircle(x: any, y: any, radius: any): any;
        public strokeCircle(x: any, y: any, radius: any): any;
        public arc(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any): any;
        public fillArc(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any): any;
        public strokeArc(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any): any;
        public pie(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any): any;
        public fillPie(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any): any;
        public strokePie(x: any, y: any, radius: any, startAngle: any, endAngle: any, anticlockwise: any): any;
        public polygon(x: any, y: any, size: any, sides: any, offsetAngle: any): any;
        public fillPolygon(x: any, y: any, radius: any, sides: any, offsetAngle: any): any;
        public strokePolygon(x: any, y: any, radius: any, sides: any, offsetAngle: any): any;
        public star(x: any, y: any, radius: any, sides: any, sideIndent: any, offsetAngle: any): any;
        public fillStar(x: any, y: any, radius: any, sides: any, sideIndent: any, offsetAngle: any): any;
        public strokeStar(x: any, y: any, radius: any, sides: any, sideIndent: any, offsetAngle: any): any;
        public heart(x: any, y: any, radius: any, angle: any): any;
        public fillHeart(x: any, y: any, radius: any, angle: any): any;
        public strokeHeart(x: any, y: any, radius: any, angle: any): any;
        public setTransform(m11: any, m12: any, m21: any, m22: any, dx: any, dy: any): any;
        public resetTransform(): any;
        public transformCenter(): any;
        public translate(x: any, y: any): any;
        public rotate(rotation: any): any;
        public scale(scaleX: any, scaleY: any): any;
        public saveAsImage(mime_type: any): any;
        public width: any;
        public height: any;
        public fillStyle: any;
        public strokeStyle: any;
        public static dummyCanvas: any;
    }
}
declare module phina.graphics {
    export class CanvasRecorder extends phina.util.EventDispatcher {
        public superClass: string;
        protected _id: any;
        public objectURL: any;
        constructor(canvas: any, options: any);
        public setOption(key: any, value: any): any;
        public setOptions(options: any): any;
        public start(fps: any, recordingTime: any): any;
        public stop(): any;
        public open(): any;
        public width: any;
        public height: any;
        public quality: any;
        public workerScript: any;
        public workers: any;
        public repeat: any;
        public loop: any;
        public transparent: any;
        public background: any;
    }
}
declare module phina.display {
    export class CanvasElement extends phina.app.Object2D {
        public superClass: string;
        public visible: boolean;
        public alpha: number;
        public blendMode: string;
        public renderChildBySelf: boolean;
        constructor(options: any);
        public setVisible(flag: any): any;
        public show(): any;
        public hide(): any;
        protected _calcWorldAlpha(): any;
    }
}
declare module phina.display {
    export class Shape extends phina.display.CanvasElement {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
        protected _renderBackground(width: any, height: any, color: any): any;
        public draw(canvas: any): any;
        public width: any;
        public height: any;
        public radius: any;
        public padding: any;
        public backgroundColor: any;
        public fill: any;
        public stroke: any;
        public strokeWidth: any;
        public shadow: any;
        public shadowBlur: any;
    }
}
declare module phina.display {
    export class RectangleShape extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
        public cornerRadius: any;
    }
}
declare module phina.display {
    export class CircleShape extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
    }
}
declare module phina.display {
    export class TriangleShape extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
    }
}
declare module phina.display {
    export class StarShape extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
        public sides: any;
        public sideIndent: any;
    }
}
declare module phina.display {
    export class PolygonShape extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
        public sides: any;
    }
}
declare module phina.display {
    export class HeartShape extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
        public cornerAngle: any;
    }
}
declare module phina.display {
    export class Sprite extends phina.display.CanvasElement {
        public superClass: string;
        constructor(image: any, width: any, height: any);
        public draw(canvas: any): any;
        public setFrameIndex(index: any, width: any, height: any): any;
        public frameIndex: any;
    }
}
declare module phina.display {
    export class Label extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        public calcWidth(): any;
        public calcHeight(): any;
        protected _render(): any;
        public text: any;
        public fontSize: any;
        public fontWeight: any;
        public fontFamily: any;
        public align: any;
        public baseline: any;
        public lineHeight: any;
    }
}
declare module phina.display {
    export class CanvasScene extends phina.app.Scene {
        public superClass: string;
        constructor(params: any);
        public hitTest(): any;
        protected _update(): any;
        protected _render(): any;
        public static default: any;
    }
}
declare module phina.display {
    export class Layer extends phina.display.CanvasElement {
        public superClass: string;
        public renderChildBySelf: boolean;
        constructor(params: any);
        public draw(canvas: any): any;
    }
}
declare module phina.display {
    export class ThreeLayer extends phina.display.CanvasElement {
        public superClass: string;
        public scene: any;
        public camera: any;
        public light: any;
        public renderer: any;
        public renderChildBySelf: boolean;
        constructor(params: any);
        public draw(canvas: any): any;
    }
}
declare module phina.display {
    export class CanvasRenderer {
        constructor(canvas: any);
        public render(scene: any): any;
        public renderChildren(obj: any): any;
        public renderObject(obj: any): any;
    }
}
declare module phina.display {
    export class DomApp extends phina.app.BaseApp {
        public superClass: string;
        public domElement: any;
        constructor(options: any);
        public update(): any;
        protected _checkClick(e: any): any;
    }
}
declare module phina.display {
    export class CanvasApp extends phina.display.DomApp {
        public superClass: string;
        constructor(options: any);
        protected _draw(): any;
        public fitScreen(): any;
    }
}
declare module phina.effect {
    export class Wave extends phina.display.CircleShape {
        public superClass: string;
        constructor(params: any);
    }
}
declare module phina.ui {
    export class Button extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
        public cornerRadius: any;
        public text: any;
        public fontColor: any;
        public fontSize: any;
        public fontFamily: any;
    }
}
declare module phina.ui {
    export class Gauge extends phina.display.Shape {
        public superClass: string;
        constructor(options: any);
        public isFull(): any;
        public isEmpty(): any;
        public setValue(value: any): any;
        public getRate(): any;
        protected _render(): any;
        public value: any;
        public maxValue: any;
        public gaugeColor: any;
        public cornerRadius: any;
    }
}
declare module phina.ui {
    export class CircleGauge extends phina.ui.Gauge {
        public superClass: string;
        constructor(options: any);
        protected _render(): any;
    }
}
declare module phina.game {
    export class ManagerScene extends phina.app.Scene {
        public superClass: string;
        constructor(params: any);
        public setScenes(scenes: any): any;
        public gotoScene(index: any, args: any): any;
        public gotoNext(args: any): any;
        public getCurrentIndex(): any;
        public getCurrentLabel(): any;
        public labelToIndex(label: any): any;
        public indexToLabel(index: any): any;
        public onnext(e: any): any;
    }
}
declare module phina.game {
    export class SplashScene extends phina.display.CanvasScene {
        public superClass: string;
        constructor(options: any);
        protected _init(): any;
        public static defaults: any;
    }
}
declare module phina.game {
    export class TitleScene extends phina.display.CanvasScene {
        public superClass: string;
        constructor(params: any);
        public static defaults: any;
    }
}
declare module phina.game {
    export class ResultScene extends phina.display.CanvasScene {
        public superClass: string;
        constructor(params: any);
        public static defaults: any;
    }
}
declare module phina.game {
    export class LoadingScene extends phina.display.CanvasScene {
        public superClass: string;
        constructor(options: any);
        public static defaults: any;
    }
}
declare module phina.game {
    export class CountScene extends phina.display.CanvasScene {
        public superClass: string;
        constructor(options: any);
        protected _updateCount(): any;
        public static defaults: any;
    }
}
declare module phina.game {
    export class GameApp extends phina.display.CanvasApp {
        public superClass: string;
        constructor(options: any);
    }
}
declare module phina.game {
    export class PieTimer extends phina.display.Shape {
        public superClass: string;
        constructor(time: any, style: any);
        public update(app: any): any;
        public start(): any;
        public stop(): any;
        protected _render(): any;
        public time: any;
    }
}
declare module phina.social {
    export class Twitter extends phina.display.CircleShape {
        public superClass: string;
        constructor(params: any);
        public static baseURL: string;
        public static defaults: any;
        public static createURL(options: any): any;
    }
}
