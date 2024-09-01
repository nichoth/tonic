/**
 * An instance of a Tonic element
 * @typedef {
*   (TonicComponent extends Tonic) |
*   ()=>TonicTemplate|Promise<TonicTemplate>
* } TonicComponent
*/

interface ITonicComponent extends Tonic {}

type TonicComponent = (()=>TonicTemplate|HTMLElement)|typeof Tonic

/**
* Class Tonic
*/
export class Tonic<T = {}> extends HTMLElement {
   static _tags:string;
   static _refIds:any[];
   static _data:{};
   static _states:{};
   static _children:{};
   static _reg:{};
   static _stylesheetRegistry:any[];
   static _index:number;
   static event (type:string):string;
   static get version():string;
   static get SPREAD():RegExp;
   static get ESC():RegExp;
   static get AsyncFunctionGenerator():Function;
   static get AsyncFunction():Function;
   static get MAP():{
       '"': string;
       '&': string;
       '\'': string;
       '<': string;
       '>': string;
       '`': string;
       '/': string;
   };
   static ssr:boolean;
   static nonce:string;
   static _createId():string;
   static _normalizeAttrs(o: any, x?: {}): {};
   static match(el:HTMLElement, s:string):HTMLElement|null;
   static getTagName(camelName:string):string;
   static get tag():`${string}-${string}`;
   static getPropertyNames(proto:any):string[];
   /**
    * Add a component
    * @param {typeof TonicComponent} c
    * @param {string} [htmlName] Name of the element, default to the class name
    * @returns {void}
    */
   static add(c:TonicComponent, htmlName?:string):void;
   static registerStyles(stylesheetFn:()=>string):void;
   static escape(s:string):string;
   static unsafeRawString(s:string, templateStrings:string[]):TonicTemplate;
   /**
    * @type {Element[] & { __children__? }}
    * @private
    */
   private elements:Element[] & { __children__? };
   /**
    * @type {ChildNode[] & { __children__? }}
    * @private
    */
   private nodes:ChildNode[] & { __children__? };
   _props:any; /** @private */
   _state:any;
   preventRenderOnReconnect:boolean;
   props:T & Partial<{ class; id; }>;
   /**
    * Render the component.
    * @abstract
    * @return {TonicTemplate|Promise<TonicTemplate>}
    */
   render():TonicTemplate|Promise<TonicTemplate>;
   get isTonicComponent():boolean;
   _checkId():string;
   set state(newState: any);
   get state():any;
   _events():void;
   _prop(o:any):string;
   _placehold(r:any):string;
   dispatch(eventName:string, detail?:any):void;
   emit(eventName:string, detail?:any):void;
   html(strings:any, ...values:any[]):TonicTemplate;
   scheduleReRender(oldProps:any):any;
   pendingReRender:any;
   reRender(o?:{}):any;
   handleEvent(e: any):void;
   _drainIterator(target:any, iterator:any):any;
   /**
    * _set
    * @param {Element|InstanceType<typeof Tonic>|ShadowRoot} target
    * @param {()=>any} render
    * @param {string} content
    * @returns {Promise<void>}
    * @private
    */
   private _set;
   _apply(target:any, content:any):void;
   connectedCallback():Promise<any>;
   root:any;
   _id:any;
   _source:string;
   isInDocument(target:any):boolean;
   disconnectedCallback():void;
}
export default Tonic;

export class TonicTemplate {
   constructor(rawText:any, templateStrings:any, unsafe:any);
   isTonicTemplate: boolean;
   unsafe:any;
   rawText:any;
   templateStrings:any;
   valueOf():any;
   toString():any;
}
