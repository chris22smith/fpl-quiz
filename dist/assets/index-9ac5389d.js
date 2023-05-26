var nm=Object.defineProperty;var sm=(e,t,r)=>t in e?nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var wa=(e,t,r)=>(sm(e,typeof t!="symbol"?t+"":t,r),r);function am(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const n=Object.getOwnPropertyDescriptor(i,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function lm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mh={exports:{}},Qs={},gh={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xn=Symbol.for("react.element"),um=Symbol.for("react.portal"),cm=Symbol.for("react.fragment"),dm=Symbol.for("react.strict_mode"),hm=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),gm=Symbol.for("react.suspense"),vm=Symbol.for("react.memo"),ym=Symbol.for("react.lazy"),bc=Symbol.iterator;function bm(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var vh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yh=Object.assign,bh={};function co(e,t,r){this.props=e,this.context=t,this.refs=bh,this.updater=r||vh}co.prototype.isReactComponent={};co.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};co.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wh(){}wh.prototype=co.prototype;function mu(e,t,r){this.props=e,this.context=t,this.refs=bh,this.updater=r||vh}var gu=mu.prototype=new wh;gu.constructor=mu;yh(gu,co.prototype);gu.isPureReactComponent=!0;var wc=Array.isArray,_h=Object.prototype.hasOwnProperty,vu={current:null},xh={key:!0,ref:!0,__self:!0,__source:!0};function kh(e,t,r){var i,o={},n=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(n=""+t.key),t)_h.call(t,i)&&!xh.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)o[i]===void 0&&(o[i]=l[i]);return{$$typeof:xn,type:e,key:n,ref:s,props:o,_owner:vu.current}}function wm(e,t){return{$$typeof:xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===xn}function _m(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var _c=/\/+/g;function _a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_m(""+e.key):t.toString(36)}function Zn(e,t,r,i,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(n){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xn:case um:s=!0}}if(s)return s=e,o=o(s),e=i===""?"."+_a(s,0):i,wc(o)?(r="",e!=null&&(r=e.replace(_c,"$&/")+"/"),Zn(o,t,r,"",function(c){return c})):o!=null&&(yu(o)&&(o=wm(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_c,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=i===""?".":i+":",wc(e))for(var l=0;l<e.length;l++){n=e[l];var u=i+_a(n,l);s+=Zn(n,t,r,u,o)}else if(u=bm(e),typeof u=="function")for(e=u.call(e),l=0;!(n=e.next()).done;)n=n.value,u=i+_a(n,l++),s+=Zn(n,t,r,u,o);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function An(e,t,r){if(e==null)return e;var i=[],o=0;return Zn(e,i,"","",function(n){return t.call(r,n,o++)}),i}function xm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},Jn={transition:null},km={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Jn,ReactCurrentOwner:vu};Y.Children={map:An,forEach:function(e,t,r){An(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return An(e,function(){t++}),t},toArray:function(e){return An(e,function(t){return t})||[]},only:function(e){if(!yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=co;Y.Fragment=cm;Y.Profiler=hm;Y.PureComponent=mu;Y.StrictMode=dm;Y.Suspense=gm;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;Y.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=yh({},e.props),o=e.key,n=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,s=vu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)_h.call(t,u)&&!xh.hasOwnProperty(u)&&(i[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:xn,type:e.type,key:o,ref:n,props:i,_owner:s}};Y.createContext=function(e){return e={$$typeof:fm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pm,_context:e},e.Consumer=e};Y.createElement=kh;Y.createFactory=function(e){var t=kh.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:mm,render:e}};Y.isValidElement=yu;Y.lazy=function(e){return{$$typeof:ym,_payload:{_status:-1,_result:e},_init:xm}};Y.memo=function(e,t){return{$$typeof:vm,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Jn.transition;Jn.transition={};try{e()}finally{Jn.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return ot.current.useCallback(e,t)};Y.useContext=function(e){return ot.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};Y.useEffect=function(e,t){return ot.current.useEffect(e,t)};Y.useId=function(){return ot.current.useId()};Y.useImperativeHandle=function(e,t,r){return ot.current.useImperativeHandle(e,t,r)};Y.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return ot.current.useMemo(e,t)};Y.useReducer=function(e,t,r){return ot.current.useReducer(e,t,r)};Y.useRef=function(e){return ot.current.useRef(e)};Y.useState=function(e){return ot.current.useState(e)};Y.useSyncExternalStore=function(e,t,r){return ot.current.useSyncExternalStore(e,t,r)};Y.useTransition=function(){return ot.current.useTransition()};Y.version="18.2.0";gh.exports=Y;var le=gh.exports;const Ch=lm(le),N=am({__proto__:null,default:Ch},[le]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=le,Sm=Symbol.for("react.element"),$m=Symbol.for("react.fragment"),zm=Object.prototype.hasOwnProperty,Em=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Am={key:!0,ref:!0,__self:!0,__source:!0};function Sh(e,t,r){var i,o={},n=null,s=null;r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)zm.call(t,i)&&!Am.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Sm,type:e,key:n,ref:s,props:o,_owner:Em.current}}Qs.Fragment=$m;Qs.jsx=Sh;Qs.jsxs=Sh;mh.exports=Qs;var U=mh.exports,ul={},$h={exports:{}},zt={},zh={exports:{}},Eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,W){var q=D.length;D.push(W);e:for(;0<q;){var fe=q-1>>>1,Ce=D[fe];if(0<o(Ce,W))D[fe]=W,D[q]=Ce,q=fe;else break e}}function r(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],q=D.pop();if(q!==W){D[0]=q;e:for(var fe=0,Ce=D.length,$i=Ce>>>1;fe<$i;){var lr=2*(fe+1)-1,ba=D[lr],Zr=lr+1,En=D[Zr];if(0>o(ba,q))Zr<Ce&&0>o(En,ba)?(D[fe]=En,D[Zr]=q,fe=Zr):(D[fe]=ba,D[lr]=q,fe=lr);else if(Zr<Ce&&0>o(En,q))D[fe]=En,D[Zr]=q,fe=Zr;else break e}}return W}function o(D,W){var q=D.sortIndex-W.sortIndex;return q!==0?q:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],m=1,d=null,p=3,v=!1,y=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var W=r(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=D)i(c),W.sortIndex=W.expirationTime,t(u,W);else break;W=r(c)}}function w(D){if(_=!1,g(D),!y)if(r(u)!==null)y=!0,Ke(x);else{var W=r(c);W!==null&&Ie(w,W.startTime-D)}}function x(D,W){y=!1,_&&(_=!1,b(z),z=-1),v=!0;var q=p;try{for(g(W),d=r(u);d!==null&&(!(d.expirationTime>W)||D&&!ne());){var fe=d.callback;if(typeof fe=="function"){d.callback=null,p=d.priorityLevel;var Ce=fe(d.expirationTime<=W);W=e.unstable_now(),typeof Ce=="function"?d.callback=Ce:d===r(u)&&i(u),g(W)}else i(u);d=r(u)}if(d!==null)var $i=!0;else{var lr=r(c);lr!==null&&Ie(w,lr.startTime-W),$i=!1}return $i}finally{d=null,p=q,v=!1}}var k=!1,C=null,z=-1,L=5,A=-1;function ne(){return!(e.unstable_now()-A<L)}function J(){if(C!==null){var D=e.unstable_now();A=D;var W=!0;try{W=C(!0,D)}finally{W?ce():(k=!1,C=null)}}else k=!1}var ce;if(typeof f=="function")ce=function(){f(J)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Me=Ne.port2;Ne.port1.onmessage=J,ce=function(){Me.postMessage(null)}}else ce=function(){S(J,0)};function Ke(D){C=D,k||(k=!0,ce())}function Ie(D,W){z=S(function(){D(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Ke(x))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var q=p;p=W;try{return D()}finally{p=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=p;p=D;try{return W()}finally{p=q}},e.unstable_scheduleCallback=function(D,W,q){var fe=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,D){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=q+Ce,D={id:m++,callback:W,priorityLevel:D,startTime:q,expirationTime:Ce,sortIndex:-1},q>fe?(D.sortIndex=q,t(c,D),r(u)===null&&D===r(c)&&(_?(b(z),z=-1):_=!0,Ie(w,q-fe))):(D.sortIndex=Ce,t(u,D),y||v||(y=!0,Ke(x))),D},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(D){var W=p;return function(){var q=p;p=W;try{return D.apply(this,arguments)}finally{p=q}}}})(Eh);zh.exports=Eh;var Tm=zh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=le,_t=Tm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Th=new Set,Go={};function ki(e,t){Gi(e,t),Gi(e+"Capture",t)}function Gi(e,t){for(Go[e]=t,e=0;e<t.length;e++)Th.add(t[e])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,Lm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},kc={};function Im(e){return cl.call(kc,e)?!0:cl.call(xc,e)?!1:Lm.test(e)?kc[e]=!0:(xc[e]=!0,!1)}function Dm(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pm(e,t,r,i){if(t===null||typeof t>"u"||Dm(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function nt(e,t,r,i,o,n,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=n,this.removeEmptyString=s}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var bu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bu,wu);Ue[t]=new nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bu,wu);Ue[t]=new nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bu,wu);Ue[t]=new nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new nt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function _u(e,t,r,i){var o=Ue.hasOwnProperty(t)?Ue[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pm(t,r,o,i)&&(r=null),i||o===null?Im(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var _r=Ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tn=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),xu=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),Lh=Symbol.for("react.provider"),Ih=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),Cu=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),Dh=Symbol.for("react.offscreen"),Cc=Symbol.iterator;function vo(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,xa;function Lo(e){if(xa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);xa=t&&t[1]||""}return`
`+xa+e}var ka=!1;function Ca(e,t){if(!e||ka)return"";ka=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),n=i.stack.split(`
`),s=o.length-1,l=n.length-1;1<=s&&0<=l&&o[s]!==n[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==n[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==n[l]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{ka=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Lo(e):""}function Om(e){switch(e.tag){case 5:return Lo(e.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return e=Ca(e.type,!1),e;case 11:return e=Ca(e.type.render,!1),e;case 1:return e=Ca(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Li:return"Fragment";case Ti:return"Portal";case dl:return"Profiler";case xu:return"StrictMode";case hl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ih:return(e.displayName||"Context")+".Consumer";case Lh:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cu:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case Cr:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function Rm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ph(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nm(e){var t=Ph(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,n=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){i=""+s,n.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ln(e){e._valueTracker||(e._valueTracker=Nm(e))}function Oh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Ph(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var r=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Sc(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Ur(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rh(e,t){t=t.checked,t!=null&&_u(e,"checked",t,!1)}function gl(e,t){Rh(e,t);var r=Ur(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,r):t.hasOwnProperty("defaultValue")&&vl(e,t.type,Ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $c(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function vl(e,t,r){(t!=="number"||ps(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Io=Array.isArray;function Hi(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Ur(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(Io(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ur(r)}}function Nh(e,t){var r=Ur(t.value),i=Ur(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Ec(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var In,Fh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(In=In||document.createElement("div"),In.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=In.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mm=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(e){Mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oo[t]=Oo[e]})});function Bh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Oo.hasOwnProperty(e)&&Oo[e]?(""+t).trim():t+"px"}function Vh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=Bh(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var Fm=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function _l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,ji=null,Wi=null;function Ac(e){if(e=Sn(e)){if(typeof kl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ea(t),kl(e.stateNode,e.type,t))}}function Uh(e){ji?Wi?Wi.push(e):Wi=[e]:ji=e}function Hh(){if(ji){var e=ji,t=Wi;if(Wi=ji=null,Ac(e),t)for(e=0;e<t.length;e++)Ac(t[e])}}function jh(e,t){return e(t)}function Wh(){}var Sa=!1;function Kh(e,t,r){if(Sa)return e(t,r);Sa=!0;try{return jh(e,t,r)}finally{Sa=!1,(ji!==null||Wi!==null)&&(Wh(),Hh())}}function Jo(e,t){var r=e.stateNode;if(r===null)return null;var i=ea(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Cl=!1;if(gr)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Cl=!1}function Bm(e,t,r,i,o,n,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(m){this.onError(m)}}var Ro=!1,fs=null,ms=!1,Sl=null,Vm={onError:function(e){Ro=!0,fs=e}};function Um(e,t,r,i,o,n,s,l,u){Ro=!1,fs=null,Bm.apply(Vm,arguments)}function Hm(e,t,r,i,o,n,s,l,u){if(Um.apply(this,arguments),Ro){if(Ro){var c=fs;Ro=!1,fs=null}else throw Error(E(198));ms||(ms=!0,Sl=c)}}function Ci(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function qh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tc(e){if(Ci(e)!==e)throw Error(E(188))}function jm(e){var t=e.alternate;if(!t){if(t=Ci(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var n=o.alternate;if(n===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===n.child){for(n=o.child;n;){if(n===r)return Tc(o),e;if(n===i)return Tc(o),t;n=n.sibling}throw Error(E(188))}if(r.return!==i.return)r=o,i=n;else{for(var s=!1,l=o.child;l;){if(l===r){s=!0,r=o,i=n;break}if(l===i){s=!0,i=o,r=n;break}l=l.sibling}if(!s){for(l=n.child;l;){if(l===r){s=!0,r=n,i=o;break}if(l===i){s=!0,i=n,r=o;break}l=l.sibling}if(!s)throw Error(E(189))}}if(r.alternate!==i)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function Yh(e){return e=jm(e),e!==null?Qh(e):null}function Qh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qh(e);if(t!==null)return t;e=e.sibling}return null}var Xh=_t.unstable_scheduleCallback,Lc=_t.unstable_cancelCallback,Wm=_t.unstable_shouldYield,Km=_t.unstable_requestPaint,Se=_t.unstable_now,qm=_t.unstable_getCurrentPriorityLevel,$u=_t.unstable_ImmediatePriority,Gh=_t.unstable_UserBlockingPriority,gs=_t.unstable_NormalPriority,Ym=_t.unstable_LowPriority,Zh=_t.unstable_IdlePriority,Xs=null,ir=null;function Qm(e){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(Xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Zm,Xm=Math.log,Gm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Xm(e)/Gm|0)|0}var Dn=64,Pn=4194304;function Do(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vs(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,n=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~o;l!==0?i=Do(l):(n&=s,n!==0&&(i=Do(n)))}else s=r&~o,s!==0?i=Do(s):n!==0&&(i=Do(n));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,n=t&-t,o>=n||o===16&&(n&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Wt(t),o=1<<r,i|=e[r],t&=~o;return i}function Jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,n=e.pendingLanes;0<n;){var s=31-Wt(n),l=1<<s,u=o[s];u===-1?(!(l&r)||l&i)&&(o[s]=Jm(l,t)):u<=t&&(e.expiredLanes|=l),n&=~l}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jh(){var e=Dn;return Dn<<=1,!(Dn&4194240)&&(Dn=64),e}function $a(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function kn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=r}function t0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Wt(r),n=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~n}}function zu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Wt(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var te=0;function ep(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tp,Eu,rp,ip,op,zl=!1,On=[],Ir=null,Dr=null,Pr=null,en=new Map,tn=new Map,$r=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":en.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tn.delete(t.pointerId)}}function bo(e,t,r,i,o,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:n,targetContainers:[o]},t!==null&&(t=Sn(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function i0(e,t,r,i,o){switch(t){case"focusin":return Ir=bo(Ir,e,t,r,i,o),!0;case"dragenter":return Dr=bo(Dr,e,t,r,i,o),!0;case"mouseover":return Pr=bo(Pr,e,t,r,i,o),!0;case"pointerover":var n=o.pointerId;return en.set(n,bo(en.get(n)||null,e,t,r,i,o)),!0;case"gotpointercapture":return n=o.pointerId,tn.set(n,bo(tn.get(n)||null,e,t,r,i,o)),!0}return!1}function np(e){var t=oi(e.target);if(t!==null){var r=Ci(t);if(r!==null){if(t=r.tag,t===13){if(t=qh(r),t!==null){e.blockedOn=t,op(e.priority,function(){rp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function es(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);xl=i,r.target.dispatchEvent(i),xl=null}else return t=Sn(r),t!==null&&Eu(t),e.blockedOn=r,!1;t.shift()}return!0}function Dc(e,t,r){es(e)&&r.delete(t)}function o0(){zl=!1,Ir!==null&&es(Ir)&&(Ir=null),Dr!==null&&es(Dr)&&(Dr=null),Pr!==null&&es(Pr)&&(Pr=null),en.forEach(Dc),tn.forEach(Dc)}function wo(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,o0)))}function rn(e){function t(o){return wo(o,e)}if(0<On.length){wo(On[0],e);for(var r=1;r<On.length;r++){var i=On[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Ir!==null&&wo(Ir,e),Dr!==null&&wo(Dr,e),Pr!==null&&wo(Pr,e),en.forEach(t),tn.forEach(t),r=0;r<$r.length;r++)i=$r[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<$r.length&&(r=$r[0],r.blockedOn===null);)np(r),r.blockedOn===null&&$r.shift()}var Ki=_r.ReactCurrentBatchConfig,ys=!0;function n0(e,t,r,i){var o=te,n=Ki.transition;Ki.transition=null;try{te=1,Au(e,t,r,i)}finally{te=o,Ki.transition=n}}function s0(e,t,r,i){var o=te,n=Ki.transition;Ki.transition=null;try{te=4,Au(e,t,r,i)}finally{te=o,Ki.transition=n}}function Au(e,t,r,i){if(ys){var o=El(e,t,r,i);if(o===null)Ra(e,t,i,bs,r),Ic(e,i);else if(i0(o,e,t,r,i))i.stopPropagation();else if(Ic(e,i),t&4&&-1<r0.indexOf(e)){for(;o!==null;){var n=Sn(o);if(n!==null&&tp(n),n=El(e,t,r,i),n===null&&Ra(e,t,i,bs,r),n===o)break;o=n}o!==null&&i.stopPropagation()}else Ra(e,t,i,null,r)}}var bs=null;function El(e,t,r,i){if(bs=null,e=Su(i),e=oi(e),e!==null)if(t=Ci(e),t===null)e=null;else if(r=t.tag,r===13){if(e=qh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bs=e,null}function sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qm()){case $u:return 1;case Gh:return 4;case gs:case Ym:return 16;case Zh:return 536870912;default:return 16}default:return 16}}var Ar=null,Tu=null,ts=null;function ap(){if(ts)return ts;var e,t=Tu,r=t.length,i,o="value"in Ar?Ar.value:Ar.textContent,n=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===o[n-i];i++);return ts=o.slice(e,1<i?1-i:void 0)}function rs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function Pc(){return!1}function Et(e){function t(r,i,o,n,s){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Rn:Pc,this.isPropagationStopped=Pc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lu=Et(ho),Cn=ye({},ho,{view:0,detail:0}),a0=Et(Cn),za,Ea,_o,Gs=ye({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(za=e.screenX-_o.screenX,Ea=e.screenY-_o.screenY):Ea=za=0,_o=e),za)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),Oc=Et(Gs),l0=ye({},Gs,{dataTransfer:0}),u0=Et(l0),c0=ye({},Cn,{relatedTarget:0}),Aa=Et(c0),d0=ye({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=Et(d0),p0=ye({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),f0=Et(p0),m0=ye({},ho,{data:0}),Rc=Et(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=y0[e])?!!t[e]:!1}function Iu(){return b0}var w0=ye({},Cn,{key:function(e){if(e.key){var t=g0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(e){return e.type==="keypress"?rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_0=Et(w0),x0=ye({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=Et(x0),k0=ye({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),C0=Et(k0),S0=ye({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=Et(S0),z0=ye({},Gs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=Et(z0),A0=[9,13,27,32],Du=gr&&"CompositionEvent"in window,No=null;gr&&"documentMode"in document&&(No=document.documentMode);var T0=gr&&"TextEvent"in window&&!No,lp=gr&&(!Du||No&&8<No&&11>=No),Mc=String.fromCharCode(32),Fc=!1;function up(e,t){switch(e){case"keyup":return A0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ii=!1;function L0(e,t){switch(e){case"compositionend":return cp(t);case"keypress":return t.which!==32?null:(Fc=!0,Mc);case"textInput":return e=t.data,e===Mc&&Fc?null:e;default:return null}}function I0(e,t){if(Ii)return e==="compositionend"||!Du&&up(e,t)?(e=ap(),ts=Tu=Ar=null,Ii=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lp&&t.locale!=="ko"?null:t.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D0[e.type]:t==="textarea"}function dp(e,t,r,i){Uh(i),t=ws(t,"onChange"),0<t.length&&(r=new Lu("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Mo=null,on=null;function P0(e){xp(e,0)}function Zs(e){var t=Oi(e);if(Oh(t))return e}function O0(e,t){if(e==="change")return t}var hp=!1;if(gr){var Ta;if(gr){var La="oninput"in document;if(!La){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),La=typeof Vc.oninput=="function"}Ta=La}else Ta=!1;hp=Ta&&(!document.documentMode||9<document.documentMode)}function Uc(){Mo&&(Mo.detachEvent("onpropertychange",pp),on=Mo=null)}function pp(e){if(e.propertyName==="value"&&Zs(on)){var t=[];dp(t,on,e,Su(e)),Kh(P0,t)}}function R0(e,t,r){e==="focusin"?(Uc(),Mo=t,on=r,Mo.attachEvent("onpropertychange",pp)):e==="focusout"&&Uc()}function N0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zs(on)}function M0(e,t){if(e==="click")return Zs(t)}function F0(e,t){if(e==="input"||e==="change")return Zs(t)}function B0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:B0;function nn(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!cl.call(t,o)||!Yt(e[o],t[o]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jc(e,t){var r=Hc(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Hc(r)}}function fp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mp(){for(var e=window,t=ps();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ps(e.document)}return t}function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function V0(e){var t=mp(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&fp(r.ownerDocument.documentElement,r)){if(i!==null&&Pu(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,n=Math.min(i.start,o);i=i.end===void 0?n:Math.min(i.end,o),!e.extend&&n>i&&(o=i,i=n,n=o),o=jc(r,n);var s=jc(r,i);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),n>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U0=gr&&"documentMode"in document&&11>=document.documentMode,Di=null,Al=null,Fo=null,Tl=!1;function Wc(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tl||Di==null||Di!==ps(i)||(i=Di,"selectionStart"in i&&Pu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&nn(Fo,i)||(Fo=i,i=ws(Al,"onSelect"),0<i.length&&(t=new Lu("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Di)))}function Nn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Pi={animationend:Nn("Animation","AnimationEnd"),animationiteration:Nn("Animation","AnimationIteration"),animationstart:Nn("Animation","AnimationStart"),transitionend:Nn("Transition","TransitionEnd")},Ia={},gp={};gr&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function Js(e){if(Ia[e])return Ia[e];if(!Pi[e])return e;var t=Pi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in gp)return Ia[e]=t[r];return e}var vp=Js("animationend"),yp=Js("animationiteration"),bp=Js("animationstart"),wp=Js("transitionend"),_p=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(e,t){_p.set(e,t),ki(t,[e])}for(var Da=0;Da<Kc.length;Da++){var Pa=Kc[Da],H0=Pa.toLowerCase(),j0=Pa[0].toUpperCase()+Pa.slice(1);Qr(H0,"on"+j0)}Qr(vp,"onAnimationEnd");Qr(yp,"onAnimationIteration");Qr(bp,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(wp,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function qc(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,Hm(i,t,void 0,e),e.currentTarget=null}function xp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var n=void 0;if(t)for(var s=i.length-1;0<=s;s--){var l=i[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==n&&o.isPropagationStopped())break e;qc(o,l,c),n=u}else for(s=0;s<i.length;s++){if(l=i[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==n&&o.isPropagationStopped())break e;qc(o,l,c),n=u}}}if(ms)throw e=Sl,ms=!1,Sl=null,e}function de(e,t){var r=t[Ol];r===void 0&&(r=t[Ol]=new Set);var i=e+"__bubble";r.has(i)||(kp(t,e,2,!1),r.add(i))}function Oa(e,t,r){var i=0;t&&(i|=4),kp(r,e,i,t)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function sn(e){if(!e[Mn]){e[Mn]=!0,Th.forEach(function(r){r!=="selectionchange"&&(W0.has(r)||Oa(r,!1,e),Oa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mn]||(t[Mn]=!0,Oa("selectionchange",!1,t))}}function kp(e,t,r,i){switch(sp(t)){case 1:var o=n0;break;case 4:o=s0;break;default:o=Au}r=o.bind(null,t,r,e),o=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Ra(e,t,r,i,o){var n=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var l=i.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=i.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=oi(l),s===null)return;if(u=s.tag,u===5||u===6){i=n=s;continue e}l=l.parentNode}}i=i.return}Kh(function(){var c=n,m=Su(r),d=[];e:{var p=_p.get(e);if(p!==void 0){var v=Lu,y=e;switch(e){case"keypress":if(rs(r)===0)break e;case"keydown":case"keyup":v=_0;break;case"focusin":y="focus",v=Aa;break;case"focusout":y="blur",v=Aa;break;case"beforeblur":case"afterblur":v=Aa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=C0;break;case vp:case yp:case bp:v=h0;break;case wp:v=$0;break;case"scroll":v=a0;break;case"wheel":v=E0;break;case"copy":case"cut":case"paste":v=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Nc}var _=(t&4)!==0,S=!_&&e==="scroll",b=_?p!==null?p+"Capture":null:p;_=[];for(var f=c,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,b!==null&&(w=Jo(f,b),w!=null&&_.push(an(f,w,g)))),S)break;f=f.return}0<_.length&&(p=new v(p,y,null,r,m),d.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&r!==xl&&(y=r.relatedTarget||r.fromElement)&&(oi(y)||y[vr]))break e;if((v||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=c,y=y?oi(y):null,y!==null&&(S=Ci(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(_=Oc,w="onMouseLeave",b="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(_=Nc,w="onPointerLeave",b="onPointerEnter",f="pointer"),S=v==null?p:Oi(v),g=y==null?p:Oi(y),p=new _(w,f+"leave",v,r,m),p.target=S,p.relatedTarget=g,w=null,oi(m)===c&&(_=new _(b,f+"enter",y,r,m),_.target=g,_.relatedTarget=S,w=_),S=w,v&&y)t:{for(_=v,b=y,f=0,g=_;g;g=zi(g))f++;for(g=0,w=b;w;w=zi(w))g++;for(;0<f-g;)_=zi(_),f--;for(;0<g-f;)b=zi(b),g--;for(;f--;){if(_===b||b!==null&&_===b.alternate)break t;_=zi(_),b=zi(b)}_=null}else _=null;v!==null&&Yc(d,p,v,_,!1),y!==null&&S!==null&&Yc(d,S,y,_,!0)}}e:{if(p=c?Oi(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var x=O0;else if(Bc(p))if(hp)x=F0;else{x=N0;var k=R0}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=M0);if(x&&(x=x(e,c))){dp(d,x,r,m);break e}k&&k(e,p,c),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&vl(p,"number",p.value)}switch(k=c?Oi(c):window,e){case"focusin":(Bc(k)||k.contentEditable==="true")&&(Di=k,Al=c,Fo=null);break;case"focusout":Fo=Al=Di=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Wc(d,r,m);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":Wc(d,r,m)}var C;if(Du)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ii?up(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(lp&&r.locale!=="ko"&&(Ii||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ii&&(C=ap()):(Ar=m,Tu="value"in Ar?Ar.value:Ar.textContent,Ii=!0)),k=ws(c,z),0<k.length&&(z=new Rc(z,e,null,r,m),d.push({event:z,listeners:k}),C?z.data=C:(C=cp(r),C!==null&&(z.data=C)))),(C=T0?L0(e,r):I0(e,r))&&(c=ws(c,"onBeforeInput"),0<c.length&&(m=new Rc("onBeforeInput","beforeinput",null,r,m),d.push({event:m,listeners:c}),m.data=C))}xp(d,t)})}function an(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ws(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,n=o.stateNode;o.tag===5&&n!==null&&(o=n,n=Jo(e,r),n!=null&&i.unshift(an(e,n,o)),n=Jo(e,t),n!=null&&i.push(an(e,n,o))),e=e.return}return i}function zi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yc(e,t,r,i,o){for(var n=t._reactName,s=[];r!==null&&r!==i;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===i)break;l.tag===5&&c!==null&&(l=c,o?(u=Jo(r,n),u!=null&&s.unshift(an(r,u,l))):o||(u=Jo(r,n),u!=null&&s.push(an(r,u,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var K0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function Qc(e){return(typeof e=="string"?e:""+e).replace(K0,`
`).replace(q0,"")}function Fn(e,t,r){if(t=Qc(t),Qc(e)!==t&&r)throw Error(E(425))}function _s(){}var Ll=null,Il=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(e){return Xc.resolve(null).then(e).catch(X0)}:Pl;function X0(e){setTimeout(function(){throw e})}function Na(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),rn(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);rn(t)}function Or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),rr="__reactFiber$"+po,ln="__reactProps$"+po,vr="__reactContainer$"+po,Ol="__reactEvents$"+po,G0="__reactListeners$"+po,Z0="__reactHandles$"+po;function oi(e){var t=e[rr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[vr]||r[rr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Gc(e);e!==null;){if(r=e[rr])return r;e=Gc(e)}return t}e=r,r=e.parentNode}return null}function Sn(e){return e=e[rr]||e[vr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Oi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ea(e){return e[ln]||null}var Rl=[],Ri=-1;function Xr(e){return{current:e}}function he(e){0>Ri||(e.current=Rl[Ri],Rl[Ri]=null,Ri--)}function ue(e,t){Ri++,Rl[Ri]=e.current,e.current=t}var Hr={},Xe=Xr(Hr),lt=Xr(!1),ci=Hr;function Zi(e,t){var r=e.type.contextTypes;if(!r)return Hr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},n;for(n in r)o[n]=t[n];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ut(e){return e=e.childContextTypes,e!=null}function xs(){he(lt),he(Xe)}function Zc(e,t,r){if(Xe.current!==Hr)throw Error(E(168));ue(Xe,t),ue(lt,r)}function Cp(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(E(108,Rm(e)||"Unknown",o));return ye({},r,i)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hr,ci=Xe.current,ue(Xe,e),ue(lt,lt.current),!0}function Jc(e,t,r){var i=e.stateNode;if(!i)throw Error(E(169));r?(e=Cp(e,t,ci),i.__reactInternalMemoizedMergedChildContext=e,he(lt),he(Xe),ue(Xe,e)):he(lt),ue(lt,r)}var dr=null,ta=!1,Ma=!1;function Sp(e){dr===null?dr=[e]:dr.push(e)}function J0(e){ta=!0,Sp(e)}function Gr(){if(!Ma&&dr!==null){Ma=!0;var e=0,t=te;try{var r=dr;for(te=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}dr=null,ta=!1}catch(o){throw dr!==null&&(dr=dr.slice(e+1)),Xh($u,Gr),o}finally{te=t,Ma=!1}}return null}var Ni=[],Mi=0,Cs=null,Ss=0,At=[],Tt=0,di=null,pr=1,fr="";function ei(e,t){Ni[Mi++]=Ss,Ni[Mi++]=Cs,Cs=e,Ss=t}function $p(e,t,r){At[Tt++]=pr,At[Tt++]=fr,At[Tt++]=di,di=e;var i=pr;e=fr;var o=32-Wt(i)-1;i&=~(1<<o),r+=1;var n=32-Wt(t)+o;if(30<n){var s=o-o%5;n=(i&(1<<s)-1).toString(32),i>>=s,o-=s,pr=1<<32-Wt(t)+o|r<<o|i,fr=n+e}else pr=1<<n|r<<o|i,fr=e}function Ou(e){e.return!==null&&(ei(e,1),$p(e,1,0))}function Ru(e){for(;e===Cs;)Cs=Ni[--Mi],Ni[Mi]=null,Ss=Ni[--Mi],Ni[Mi]=null;for(;e===di;)di=At[--Tt],At[Tt]=null,fr=At[--Tt],At[Tt]=null,pr=At[--Tt],At[Tt]=null}var wt=null,vt=null,me=!1,jt=null;function zp(e,t){var r=Lt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ed(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,vt=Or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=di!==null?{id:pr,overflow:fr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Lt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,wt=e,vt=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(me){var t=vt;if(t){var r=t;if(!ed(e,t)){if(Nl(e))throw Error(E(418));t=Or(r.nextSibling);var i=wt;t&&ed(e,t)?zp(i,r):(e.flags=e.flags&-4097|2,me=!1,wt=e)}}else{if(Nl(e))throw Error(E(418));e.flags=e.flags&-4097|2,me=!1,wt=e}}}function td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function Bn(e){if(e!==wt)return!1;if(!me)return td(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=vt)){if(Nl(e))throw Ep(),Error(E(418));for(;t;)zp(e,t),t=Or(t.nextSibling)}if(td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){vt=Or(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=wt?Or(e.stateNode.nextSibling):null;return!0}function Ep(){for(var e=vt;e;)e=Or(e.nextSibling)}function Ji(){vt=wt=null,me=!1}function Nu(e){jt===null?jt=[e]:jt.push(e)}var eg=_r.ReactCurrentBatchConfig;function Ut(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var $s=Xr(null),zs=null,Fi=null,Mu=null;function Fu(){Mu=Fi=zs=null}function Bu(e){var t=$s.current;he($s),e._currentValue=t}function Fl(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function qi(e,t){zs=e,Mu=Fi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Dt(e){var t=e._currentValue;if(Mu!==e)if(e={context:e,memoizedValue:t,next:null},Fi===null){if(zs===null)throw Error(E(308));Fi=e,zs.dependencies={lanes:0,firstContext:e}}else Fi=Fi.next=e;return t}var ni=null;function Vu(e){ni===null?ni=[e]:ni.push(e)}function Ap(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,Vu(t)):(r.next=o.next,o.next=r),t.interleaved=r,yr(e,i)}function yr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Sr=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,G&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,yr(e,r)}return o=i.interleaved,o===null?(t.next=t,Vu(i)):(t.next=o.next,o.next=t),i.interleaved=t,yr(e,r)}function is(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,zu(e,r)}}function rd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};n===null?o=n=s:n=n.next=s,r=r.next}while(r!==null);n===null?o=n=t:n=n.next=t}else o=n=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:n,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Es(e,t,r,i){var o=e.updateQueue;Sr=!1;var n=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?n=c:s.next=c,s=u;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==s&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=u))}if(n!==null){var d=o.baseState;s=0,m=c=u=null,l=n;do{var p=l.lane,v=l.eventTime;if((i&p)===p){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,_=l;switch(p=t,v=r,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(v,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(v,d,p):y,p==null)break e;d=ye({},d,p);break e;case 2:Sr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=v,u=d):m=m.next=v,s|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(m===null&&(u=d),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else n===null&&(o.shared.lanes=0);pi|=s,e.lanes=s,e.memoizedState=d}}function id(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(E(191,o));o.call(i)}}}var Lp=new Ah.Component().refs;function Bl(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:ye({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ra={isMounted:function(e){return(e=e._reactInternals)?Ci(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=et(),o=Mr(e),n=mr(i,o);n.payload=t,r!=null&&(n.callback=r),t=Rr(e,n,o),t!==null&&(Kt(t,e,o,i),is(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=et(),o=Mr(e),n=mr(i,o);n.tag=1,n.payload=t,r!=null&&(n.callback=r),t=Rr(e,n,o),t!==null&&(Kt(t,e,o,i),is(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=et(),i=Mr(e),o=mr(r,i);o.tag=2,t!=null&&(o.callback=t),t=Rr(e,o,i),t!==null&&(Kt(t,e,i,r),is(t,e,i))}};function od(e,t,r,i,o,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,n,s):t.prototype&&t.prototype.isPureReactComponent?!nn(r,i)||!nn(o,n):!0}function Ip(e,t,r){var i=!1,o=Hr,n=t.contextType;return typeof n=="object"&&n!==null?n=Dt(n):(o=ut(t)?ci:Xe.current,i=t.contextTypes,n=(i=i!=null)?Zi(e,o):Hr),t=new t(r,n),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=n),t}function nd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function Vl(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=Lp,Uu(e);var n=t.contextType;typeof n=="object"&&n!==null?o.context=Dt(n):(n=ut(t)?ci:Xe.current,o.context=Zi(e,n)),o.state=e.memoizedState,n=t.getDerivedStateFromProps,typeof n=="function"&&(Bl(e,t,n,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ra.enqueueReplaceState(o,o.state,null),Es(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var i=r.stateNode}if(!i)throw Error(E(147,e));var o=i,n=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===n?t.ref:(t=function(s){var l=o.refs;l===Lp&&(l=o.refs={}),s===null?delete l[n]:l[n]=s},t._stringRef=n,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Vn(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function Dp(e){function t(b,f){if(e){var g=b.deletions;g===null?(b.deletions=[f],b.flags|=16):g.push(f)}}function r(b,f){if(!e)return null;for(;f!==null;)t(b,f),f=f.sibling;return null}function i(b,f){for(b=new Map;f!==null;)f.key!==null?b.set(f.key,f):b.set(f.index,f),f=f.sibling;return b}function o(b,f){return b=Fr(b,f),b.index=0,b.sibling=null,b}function n(b,f,g){return b.index=g,e?(g=b.alternate,g!==null?(g=g.index,g<f?(b.flags|=2,f):g):(b.flags|=2,f)):(b.flags|=1048576,f)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,f,g,w){return f===null||f.tag!==6?(f=Wa(g,b.mode,w),f.return=b,f):(f=o(f,g),f.return=b,f)}function u(b,f,g,w){var x=g.type;return x===Li?m(b,f,g.props.children,w,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Cr&&sd(x)===f.type)?(w=o(f,g.props),w.ref=xo(b,f,g),w.return=b,w):(w=us(g.type,g.key,g.props,null,b.mode,w),w.ref=xo(b,f,g),w.return=b,w)}function c(b,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ka(g,b.mode,w),f.return=b,f):(f=o(f,g.children||[]),f.return=b,f)}function m(b,f,g,w,x){return f===null||f.tag!==7?(f=ui(g,b.mode,w,x),f.return=b,f):(f=o(f,g),f.return=b,f)}function d(b,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wa(""+f,b.mode,g),f.return=b,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tn:return g=us(f.type,f.key,f.props,null,b.mode,g),g.ref=xo(b,null,f),g.return=b,g;case Ti:return f=Ka(f,b.mode,g),f.return=b,f;case Cr:var w=f._init;return d(b,w(f._payload),g)}if(Io(f)||vo(f))return f=ui(f,b.mode,g,null),f.return=b,f;Vn(b,f)}return null}function p(b,f,g,w){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:l(b,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tn:return g.key===x?u(b,f,g,w):null;case Ti:return g.key===x?c(b,f,g,w):null;case Cr:return x=g._init,p(b,f,x(g._payload),w)}if(Io(g)||vo(g))return x!==null?null:m(b,f,g,w,null);Vn(b,g)}return null}function v(b,f,g,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(g)||null,l(f,b,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Tn:return b=b.get(w.key===null?g:w.key)||null,u(f,b,w,x);case Ti:return b=b.get(w.key===null?g:w.key)||null,c(f,b,w,x);case Cr:var k=w._init;return v(b,f,g,k(w._payload),x)}if(Io(w)||vo(w))return b=b.get(g)||null,m(f,b,w,x,null);Vn(f,w)}return null}function y(b,f,g,w){for(var x=null,k=null,C=f,z=f=0,L=null;C!==null&&z<g.length;z++){C.index>z?(L=C,C=null):L=C.sibling;var A=p(b,C,g[z],w);if(A===null){C===null&&(C=L);break}e&&C&&A.alternate===null&&t(b,C),f=n(A,f,z),k===null?x=A:k.sibling=A,k=A,C=L}if(z===g.length)return r(b,C),me&&ei(b,z),x;if(C===null){for(;z<g.length;z++)C=d(b,g[z],w),C!==null&&(f=n(C,f,z),k===null?x=C:k.sibling=C,k=C);return me&&ei(b,z),x}for(C=i(b,C);z<g.length;z++)L=v(C,b,z,g[z],w),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?z:L.key),f=n(L,f,z),k===null?x=L:k.sibling=L,k=L);return e&&C.forEach(function(ne){return t(b,ne)}),me&&ei(b,z),x}function _(b,f,g,w){var x=vo(g);if(typeof x!="function")throw Error(E(150));if(g=x.call(g),g==null)throw Error(E(151));for(var k=x=null,C=f,z=f=0,L=null,A=g.next();C!==null&&!A.done;z++,A=g.next()){C.index>z?(L=C,C=null):L=C.sibling;var ne=p(b,C,A.value,w);if(ne===null){C===null&&(C=L);break}e&&C&&ne.alternate===null&&t(b,C),f=n(ne,f,z),k===null?x=ne:k.sibling=ne,k=ne,C=L}if(A.done)return r(b,C),me&&ei(b,z),x;if(C===null){for(;!A.done;z++,A=g.next())A=d(b,A.value,w),A!==null&&(f=n(A,f,z),k===null?x=A:k.sibling=A,k=A);return me&&ei(b,z),x}for(C=i(b,C);!A.done;z++,A=g.next())A=v(C,b,z,A.value,w),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?z:A.key),f=n(A,f,z),k===null?x=A:k.sibling=A,k=A);return e&&C.forEach(function(J){return t(b,J)}),me&&ei(b,z),x}function S(b,f,g,w){if(typeof g=="object"&&g!==null&&g.type===Li&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Tn:e:{for(var x=g.key,k=f;k!==null;){if(k.key===x){if(x=g.type,x===Li){if(k.tag===7){r(b,k.sibling),f=o(k,g.props.children),f.return=b,b=f;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Cr&&sd(x)===k.type){r(b,k.sibling),f=o(k,g.props),f.ref=xo(b,k,g),f.return=b,b=f;break e}r(b,k);break}else t(b,k);k=k.sibling}g.type===Li?(f=ui(g.props.children,b.mode,w,g.key),f.return=b,b=f):(w=us(g.type,g.key,g.props,null,b.mode,w),w.ref=xo(b,f,g),w.return=b,b=w)}return s(b);case Ti:e:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(b,f.sibling),f=o(f,g.children||[]),f.return=b,b=f;break e}else{r(b,f);break}else t(b,f);f=f.sibling}f=Ka(g,b.mode,w),f.return=b,b=f}return s(b);case Cr:return k=g._init,S(b,f,k(g._payload),w)}if(Io(g))return y(b,f,g,w);if(vo(g))return _(b,f,g,w);Vn(b,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(b,f.sibling),f=o(f,g),f.return=b,b=f):(r(b,f),f=Wa(g,b.mode,w),f.return=b,b=f),s(b)):r(b,f)}return S}var eo=Dp(!0),Pp=Dp(!1),$n={},or=Xr($n),un=Xr($n),cn=Xr($n);function si(e){if(e===$n)throw Error(E(174));return e}function Hu(e,t){switch(ue(cn,t),ue(un,e),ue(or,$n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bl(t,e)}he(or),ue(or,t)}function to(){he(or),he(un),he(cn)}function Op(e){si(cn.current);var t=si(or.current),r=bl(t,e.type);t!==r&&(ue(un,e),ue(or,r))}function ju(e){un.current===e&&(he(or),he(un))}var ge=Xr(0);function As(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa=[];function Wu(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var os=_r.ReactCurrentDispatcher,Ba=_r.ReactCurrentBatchConfig,hi=0,ve=null,Te=null,De=null,Ts=!1,Bo=!1,dn=0,tg=0;function qe(){throw Error(E(321))}function Ku(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Yt(e[r],t[r]))return!1;return!0}function qu(e,t,r,i,o,n){if(hi=n,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,os.current=e===null||e.memoizedState===null?ng:sg,e=r(i,o),Bo){n=0;do{if(Bo=!1,dn=0,25<=n)throw Error(E(301));n+=1,De=Te=null,t.updateQueue=null,os.current=ag,e=r(i,o)}while(Bo)}if(os.current=Ls,t=Te!==null&&Te.next!==null,hi=0,De=Te=ve=null,Ts=!1,t)throw Error(E(300));return e}function Yu(){var e=dn!==0;return dn=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ve.memoizedState=De=e:De=De.next=e,De}function Pt(){if(Te===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=De===null?ve.memoizedState:De.next;if(t!==null)De=t,Te=e;else{if(e===null)throw Error(E(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},De===null?ve.memoizedState=De=e:De=De.next=e}return De}function hn(e,t){return typeof t=="function"?t(e):t}function Va(e){var t=Pt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=Te,o=i.baseQueue,n=r.pending;if(n!==null){if(o!==null){var s=o.next;o.next=n.next,n.next=s}i.baseQueue=o=n,r.pending=null}if(o!==null){n=o.next,i=i.baseState;var l=s=null,u=null,c=n;do{var m=c.lane;if((hi&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var d={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=d,s=i):u=u.next=d,ve.lanes|=m,pi|=m}c=c.next}while(c!==null&&c!==n);u===null?s=i:u.next=l,Yt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=u,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do n=o.lane,ve.lanes|=n,pi|=n,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ua(e){var t=Pt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,n=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do n=e(n,s.action),s=s.next;while(s!==o);Yt(n,t.memoizedState)||(at=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),r.lastRenderedState=n}return[n,i]}function Rp(){}function Np(e,t){var r=ve,i=Pt(),o=t(),n=!Yt(i.memoizedState,o);if(n&&(i.memoizedState=o,at=!0),i=i.queue,Qu(Bp.bind(null,r,i,e),[e]),i.getSnapshot!==t||n||De!==null&&De.memoizedState.tag&1){if(r.flags|=2048,pn(9,Fp.bind(null,r,i,o,t),void 0,null),Pe===null)throw Error(E(349));hi&30||Mp(r,t,o)}return o}function Mp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Fp(e,t,r,i){t.value=r,t.getSnapshot=i,Vp(t)&&Up(e)}function Bp(e,t,r){return r(function(){Vp(t)&&Up(e)})}function Vp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Yt(e,r)}catch{return!0}}function Up(e){var t=yr(e,1);t!==null&&Kt(t,e,1,-1)}function ad(e){var t=tr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hn,lastRenderedState:e},t.queue=e,e=e.dispatch=og.bind(null,ve,e),[t.memoizedState,e]}function pn(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Hp(){return Pt().memoizedState}function ns(e,t,r,i){var o=tr();ve.flags|=e,o.memoizedState=pn(1|t,r,void 0,i===void 0?null:i)}function ia(e,t,r,i){var o=Pt();i=i===void 0?null:i;var n=void 0;if(Te!==null){var s=Te.memoizedState;if(n=s.destroy,i!==null&&Ku(i,s.deps)){o.memoizedState=pn(t,r,n,i);return}}ve.flags|=e,o.memoizedState=pn(1|t,r,n,i)}function ld(e,t){return ns(8390656,8,e,t)}function Qu(e,t){return ia(2048,8,e,t)}function jp(e,t){return ia(4,2,e,t)}function Wp(e,t){return ia(4,4,e,t)}function Kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qp(e,t,r){return r=r!=null?r.concat([e]):null,ia(4,4,Kp.bind(null,t,e),r)}function Xu(){}function Yp(e,t){var r=Pt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ku(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Qp(e,t){var r=Pt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&Ku(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Xp(e,t,r){return hi&21?(Yt(r,t)||(r=Jh(),ve.lanes|=r,pi|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=r)}function rg(e,t){var r=te;te=r!==0&&4>r?r:4,e(!0);var i=Ba.transition;Ba.transition={};try{e(!1),t()}finally{te=r,Ba.transition=i}}function Gp(){return Pt().memoizedState}function ig(e,t,r){var i=Mr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},Zp(e))Jp(t,r);else if(r=Ap(e,t,r,i),r!==null){var o=et();Kt(r,e,i,o),ef(r,t,i)}}function og(e,t,r){var i=Mr(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(Zp(e))Jp(t,o);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var s=t.lastRenderedState,l=n(s,r);if(o.hasEagerState=!0,o.eagerState=l,Yt(l,s)){var u=t.interleaved;u===null?(o.next=o,Vu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}r=Ap(e,t,o,i),r!==null&&(o=et(),Kt(r,e,i,o),ef(r,t,i))}}function Zp(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Jp(e,t){Bo=Ts=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ef(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,zu(e,r)}}var Ls={readContext:Dt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},ng={readContext:Dt,useCallback:function(e,t){return tr().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:ld,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ns(4194308,4,Kp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return ns(4,2,e,t)},useMemo:function(e,t){var r=tr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=tr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=ig.bind(null,ve,e),[i.memoizedState,e]},useRef:function(e){var t=tr();return e={current:e},t.memoizedState=e},useState:ad,useDebugValue:Xu,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=ad(!1),t=e[0];return e=rg.bind(null,e[1]),tr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=ve,o=tr();if(me){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),Pe===null)throw Error(E(349));hi&30||Mp(i,t,r)}o.memoizedState=r;var n={value:r,getSnapshot:t};return o.queue=n,ld(Bp.bind(null,i,n,e),[e]),i.flags|=2048,pn(9,Fp.bind(null,i,n,r,t),void 0,null),r},useId:function(){var e=tr(),t=Pe.identifierPrefix;if(me){var r=fr,i=pr;r=(i&~(1<<32-Wt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=dn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=tg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sg={readContext:Dt,useCallback:Yp,useContext:Dt,useEffect:Qu,useImperativeHandle:qp,useInsertionEffect:jp,useLayoutEffect:Wp,useMemo:Qp,useReducer:Va,useRef:Hp,useState:function(){return Va(hn)},useDebugValue:Xu,useDeferredValue:function(e){var t=Pt();return Xp(t,Te.memoizedState,e)},useTransition:function(){var e=Va(hn)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Rp,useSyncExternalStore:Np,useId:Gp,unstable_isNewReconciler:!1},ag={readContext:Dt,useCallback:Yp,useContext:Dt,useEffect:Qu,useImperativeHandle:qp,useInsertionEffect:jp,useLayoutEffect:Wp,useMemo:Qp,useReducer:Ua,useRef:Hp,useState:function(){return Ua(hn)},useDebugValue:Xu,useDeferredValue:function(e){var t=Pt();return Te===null?t.memoizedState=e:Xp(t,Te.memoizedState,e)},useTransition:function(){var e=Ua(hn)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Rp,useSyncExternalStore:Np,useId:Gp,unstable_isNewReconciler:!1};function ro(e,t){try{var r="",i=t;do r+=Om(i),i=i.return;while(i);var o=r}catch(n){o=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:t,stack:o,digest:null}}function Ha(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,r){r=mr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Ds||(Ds=!0,Zl=i),Ul(e,t)},r}function rf(e,t,r){r=mr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){Ul(e,t)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(r.callback=function(){Ul(e,t),typeof i!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function ud(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new lg;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=xg.bind(null,e,t,r),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dd(e,t,r,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=mr(-1,1),t.tag=2,Rr(r,t,1))),r.lanes|=1),e)}var ug=_r.ReactCurrentOwner,at=!1;function Je(e,t,r,i){t.child=e===null?Pp(t,null,r,i):eo(t,e.child,r,i)}function hd(e,t,r,i,o){r=r.render;var n=t.ref;return qi(t,o),i=qu(e,t,r,i,n,o),r=Yu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,br(e,t,o)):(me&&r&&Ou(t),t.flags|=1,Je(e,t,i,o),t.child)}function pd(e,t,r,i,o){if(e===null){var n=r.type;return typeof n=="function"&&!oc(n)&&n.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=n,of(e,t,n,i,o)):(e=us(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!(e.lanes&o)){var s=n.memoizedProps;if(r=r.compare,r=r!==null?r:nn,r(s,i)&&e.ref===t.ref)return br(e,t,o)}return t.flags|=1,e=Fr(n,i),e.ref=t.ref,e.return=t,t.child=e}function of(e,t,r,i,o){if(e!==null){var n=e.memoizedProps;if(nn(n,i)&&e.ref===t.ref)if(at=!1,t.pendingProps=i=n,(e.lanes&o)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,br(e,t,o)}return Hl(e,t,r,i,o)}function nf(e,t,r){var i=t.pendingProps,o=i.children,n=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Vi,mt),mt|=r;else{if(!(r&1073741824))return e=n!==null?n.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Vi,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=n!==null?n.baseLanes:r,ue(Vi,mt),mt|=i}else n!==null?(i=n.baseLanes|r,t.memoizedState=null):i=r,ue(Vi,mt),mt|=i;return Je(e,t,o,r),t.child}function sf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Hl(e,t,r,i,o){var n=ut(r)?ci:Xe.current;return n=Zi(t,n),qi(t,o),r=qu(e,t,r,i,n,o),i=Yu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,br(e,t,o)):(me&&i&&Ou(t),t.flags|=1,Je(e,t,r,o),t.child)}function fd(e,t,r,i,o){if(ut(r)){var n=!0;ks(t)}else n=!1;if(qi(t,o),t.stateNode===null)ss(e,t),Ip(t,r,i),Vl(t,r,i,o),i=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=ut(r)?ci:Xe.current,c=Zi(t,c));var m=r.getDerivedStateFromProps,d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==i||u!==c)&&nd(t,s,i,c),Sr=!1;var p=t.memoizedState;s.state=p,Es(t,i,s,o),u=t.memoizedState,l!==i||p!==u||lt.current||Sr?(typeof m=="function"&&(Bl(t,r,m,i),u=t.memoizedState),(l=Sr||od(t,r,l,i,p,u,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),s.props=i,s.state=u,s.context=c,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Tp(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ut(t.type,l),s.props=c,d=t.pendingProps,p=s.context,u=r.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=ut(r)?ci:Xe.current,u=Zi(t,u));var v=r.getDerivedStateFromProps;(m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||p!==u)&&nd(t,s,i,u),Sr=!1,p=t.memoizedState,s.state=p,Es(t,i,s,o);var y=t.memoizedState;l!==d||p!==y||lt.current||Sr?(typeof v=="function"&&(Bl(t,r,v,i),y=t.memoizedState),(c=Sr||od(t,r,c,i,p,y,u)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),s.props=i,s.state=y,s.context=u,i=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return jl(e,t,r,i,n,o)}function jl(e,t,r,i,o,n){sf(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return o&&Jc(t,r,!1),br(e,t,n);i=t.stateNode,ug.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=eo(t,e.child,null,n),t.child=eo(t,null,l,n)):Je(e,t,l,n),t.memoizedState=i.state,o&&Jc(t,r,!0),t.child}function af(e){var t=e.stateNode;t.pendingContext?Zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zc(e,t.context,!1),Hu(e,t.containerInfo)}function md(e,t,r,i,o){return Ji(),Nu(o),t.flags|=256,Je(e,t,r,i),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,t,r){var i=t.pendingProps,o=ge.current,n=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(n=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(ge,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,n?(i=t.mode,n=t.child,s={mode:"hidden",children:s},!(i&1)&&n!==null?(n.childLanes=0,n.pendingProps=s):n=sa(s,i,0,null),e=ui(e,i,r,null),n.return=t,e.return=t,n.sibling=e,t.child=n,t.child.memoizedState=Kl(r),t.memoizedState=Wl,e):Gu(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return cg(e,t,s,i,l,o,r);if(n){n=i.fallback,s=t.mode,o=e.child,l=o.sibling;var u={mode:"hidden",children:i.children};return!(s&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=u,t.deletions=null):(i=Fr(o,u),i.subtreeFlags=o.subtreeFlags&14680064),l!==null?n=Fr(l,n):(n=ui(n,s,r,null),n.flags|=2),n.return=t,i.return=t,i.sibling=n,t.child=i,i=n,n=t.child,s=e.child.memoizedState,s=s===null?Kl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},n.memoizedState=s,n.childLanes=e.childLanes&~r,t.memoizedState=Wl,i}return n=e.child,e=n.sibling,i=Fr(n,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Gu(e,t){return t=sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Un(e,t,r,i){return i!==null&&Nu(i),eo(t,e.child,null,r),e=Gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cg(e,t,r,i,o,n,s){if(r)return t.flags&256?(t.flags&=-257,i=Ha(Error(E(422))),Un(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(n=i.fallback,o=t.mode,i=sa({mode:"visible",children:i.children},o,0,null),n=ui(n,o,s,null),n.flags|=2,i.return=t,n.return=t,i.sibling=n,t.child=i,t.mode&1&&eo(t,e.child,null,s),t.child.memoizedState=Kl(s),t.memoizedState=Wl,n);if(!(t.mode&1))return Un(e,t,s,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var l=i.dgst;return i=l,n=Error(E(419)),i=Ha(n,i,void 0),Un(e,t,s,i)}if(l=(s&e.childLanes)!==0,at||l){if(i=Pe,i!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|s)?0:o,o!==0&&o!==n.retryLane&&(n.retryLane=o,yr(e,o),Kt(i,e,o,-1))}return ic(),i=Ha(Error(E(421))),Un(e,t,s,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=kg.bind(null,e),o._reactRetry=t,null):(e=n.treeContext,vt=Or(o.nextSibling),wt=t,me=!0,jt=null,e!==null&&(At[Tt++]=pr,At[Tt++]=fr,At[Tt++]=di,pr=e.id,fr=e.overflow,di=t),t=Gu(t,i.children),t.flags|=4096,t)}function gd(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Fl(e.return,t,r)}function ja(e,t,r,i,o){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=i,n.tail=r,n.tailMode=o)}function uf(e,t,r){var i=t.pendingProps,o=i.revealOrder,n=i.tail;if(Je(e,t,i.children,r),i=ge.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,r,t);else if(e.tag===19)gd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ue(ge,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&As(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ja(t,!1,o,r,n);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&As(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ja(t,!0,r,null,n);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ss(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function br(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),pi|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Fr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Fr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function dg(e,t,r){switch(t.tag){case 3:af(t),Ji();break;case 5:Op(t);break;case 1:ut(t.type)&&ks(t);break;case 4:Hu(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;ue($s,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ue(ge,ge.current&1),t.flags|=128,null):r&t.child.childLanes?lf(e,t,r):(ue(ge,ge.current&1),e=br(e,t,r),e!==null?e.sibling:null);ue(ge,ge.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return uf(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(ge,ge.current),i)break;return null;case 22:case 23:return t.lanes=0,nf(e,t,r)}return br(e,t,r)}var cf,ql,df,hf;cf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ql=function(){};df=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,si(or.current);var n=null;switch(r){case"input":o=ml(e,o),i=ml(e,i),n=[];break;case"select":o=ye({},o,{value:void 0}),i=ye({},i,{value:void 0}),n=[];break;case"textarea":o=yl(e,o),i=yl(e,i),n=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=_s)}wl(r,i);var s;r=null;for(c in o)if(!i.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Go.hasOwnProperty(c)?n||(n=[]):(n=n||[]).push(c,null));for(c in i){var u=i[c];if(l=o!=null?o[c]:void 0,i.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(r||(r={}),r[s]=u[s])}else r||(n||(n=[]),n.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(n=n||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(n=n||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Go.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",e),n||l===u||(n=[])):(n=n||[]).push(c,u))}r&&(n=n||[]).push("style",r);var c=n;(t.updateQueue=c)&&(t.flags|=4)}};hf=function(e,t,r,i){r!==i&&(t.flags|=4)};function ko(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function hg(e,t,r){var i=t.pendingProps;switch(Ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return ut(t.type)&&xs(),Ye(t),null;case 3:return i=t.stateNode,to(),he(lt),he(Xe),Wu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Bn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(tu(jt),jt=null))),ql(e,t),Ye(t),null;case 5:ju(t);var o=si(cn.current);if(r=t.type,e!==null&&t.stateNode!=null)df(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(E(166));return Ye(t),null}if(e=si(or.current),Bn(t)){i=t.stateNode,r=t.type;var n=t.memoizedProps;switch(i[rr]=t,i[ln]=n,e=(t.mode&1)!==0,r){case"dialog":de("cancel",i),de("close",i);break;case"iframe":case"object":case"embed":de("load",i);break;case"video":case"audio":for(o=0;o<Po.length;o++)de(Po[o],i);break;case"source":de("error",i);break;case"img":case"image":case"link":de("error",i),de("load",i);break;case"details":de("toggle",i);break;case"input":Sc(i,n),de("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!n.multiple},de("invalid",i);break;case"textarea":zc(i,n),de("invalid",i)}wl(r,n),o=null;for(var s in n)if(n.hasOwnProperty(s)){var l=n[s];s==="children"?typeof l=="string"?i.textContent!==l&&(n.suppressHydrationWarning!==!0&&Fn(i.textContent,l,e),o=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(n.suppressHydrationWarning!==!0&&Fn(i.textContent,l,e),o=["children",""+l]):Go.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&de("scroll",i)}switch(r){case"input":Ln(i),$c(i,n,!0);break;case"textarea":Ln(i),Ec(i);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(i.onclick=_s)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[rr]=t,e[ln]=i,cf(e,t,!1,!1),t.stateNode=e;e:{switch(s=_l(r,i),r){case"dialog":de("cancel",e),de("close",e),o=i;break;case"iframe":case"object":case"embed":de("load",e),o=i;break;case"video":case"audio":for(o=0;o<Po.length;o++)de(Po[o],e);o=i;break;case"source":de("error",e),o=i;break;case"img":case"image":case"link":de("error",e),de("load",e),o=i;break;case"details":de("toggle",e),o=i;break;case"input":Sc(e,i),o=ml(e,i),de("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=ye({},i,{value:void 0}),de("invalid",e);break;case"textarea":zc(e,i),o=yl(e,i),de("invalid",e);break;default:o=i}wl(r,o),l=o;for(n in l)if(l.hasOwnProperty(n)){var u=l[n];n==="style"?Vh(e,u):n==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fh(e,u)):n==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Zo(e,u):typeof u=="number"&&Zo(e,""+u):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(Go.hasOwnProperty(n)?u!=null&&n==="onScroll"&&de("scroll",e):u!=null&&_u(e,n,u,s))}switch(r){case"input":Ln(e),$c(e,i,!1);break;case"textarea":Ln(e),Ec(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ur(i.value));break;case"select":e.multiple=!!i.multiple,n=i.value,n!=null?Hi(e,!!i.multiple,n,!1):i.defaultValue!=null&&Hi(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=_s)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)hf(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(E(166));if(r=si(cn.current),si(or.current),Bn(t)){if(i=t.stateNode,r=t.memoizedProps,i[rr]=t,(n=i.nodeValue!==r)&&(e=wt,e!==null))switch(e.tag){case 3:Fn(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fn(i.nodeValue,r,(e.mode&1)!==0)}n&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[rr]=t,t.stateNode=i}return Ye(t),null;case 13:if(he(ge),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&vt!==null&&t.mode&1&&!(t.flags&128))Ep(),Ji(),t.flags|=98560,n=!1;else if(n=Bn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(E(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(E(317));n[rr]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),n=!1}else jt!==null&&(tu(jt),jt=null),n=!0;if(!n)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Le===0&&(Le=3):ic())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return to(),ql(e,t),e===null&&sn(t.stateNode.containerInfo),Ye(t),null;case 10:return Bu(t.type._context),Ye(t),null;case 17:return ut(t.type)&&xs(),Ye(t),null;case 19:if(he(ge),n=t.memoizedState,n===null)return Ye(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)ko(n,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=As(e),s!==null){for(t.flags|=128,ko(n,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)n=r,e=i,n.flags&=14680066,s=n.alternate,s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ue(ge,ge.current&1|2),t.child}e=e.sibling}n.tail!==null&&Se()>io&&(t.flags|=128,i=!0,ko(n,!1),t.lanes=4194304)}else{if(!i)if(e=As(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ko(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!me)return Ye(t),null}else 2*Se()-n.renderingStartTime>io&&r!==1073741824&&(t.flags|=128,i=!0,ko(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(r=n.last,r!==null?r.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Se(),t.sibling=null,r=ge.current,ue(ge,i?r&1|2:r&1),t):(Ye(t),null);case 22:case 23:return rc(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?mt&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function pg(e,t){switch(Ru(t),t.tag){case 1:return ut(t.type)&&xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return to(),he(lt),he(Xe),Wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ju(t),null;case 13:if(he(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ge),null;case 4:return to(),null;case 10:return Bu(t.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var Hn=!1,Qe=!1,fg=typeof WeakSet=="function"?WeakSet:Set,P=null;function Bi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){be(e,t,i)}else r.current=null}function Yl(e,t,r){try{r()}catch(i){be(e,t,i)}}var vd=!1;function mg(e,t){if(Ll=ys,e=mp(),Pu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,n=i.focusNode;i=i.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break e}var s=0,l=-1,u=-1,c=0,m=0,d=e,p=null;t:for(;;){for(var v;d!==r||o!==0&&d.nodeType!==3||(l=s+o),d!==n||i!==0&&d.nodeType!==3||(u=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===r&&++c===o&&(l=s),p===n&&++m===i&&(u=s),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Il={focusedElem:e,selectionRange:r},ys=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,S=y.memoizedState,b=t.stateNode,f=b.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ut(t.type,_),S);b.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){be(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=vd,vd=!1,y}function Vo(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var n=o.destroy;o.destroy=void 0,n!==void 0&&Yl(t,r,n)}o=o.next}while(o!==i)}}function oa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Ql(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rr],delete t[ln],delete t[Ol],delete t[G0],delete t[Z0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_s));else if(i!==4&&(e=e.child,e!==null))for(Xl(e,t,r),e=e.sibling;e!==null;)Xl(e,t,r),e=e.sibling}function Gl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Gl(e,t,r),e=e.sibling;e!==null;)Gl(e,t,r),e=e.sibling}var Fe=null,Ht=!1;function kr(e,t,r){for(r=r.child;r!==null;)mf(e,t,r),r=r.sibling}function mf(e,t,r){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(Xs,r)}catch{}switch(r.tag){case 5:Qe||Bi(r,t);case 6:var i=Fe,o=Ht;Fe=null,kr(e,t,r),Fe=i,Ht=o,Fe!==null&&(Ht?(e=Fe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Fe.removeChild(r.stateNode));break;case 18:Fe!==null&&(Ht?(e=Fe,r=r.stateNode,e.nodeType===8?Na(e.parentNode,r):e.nodeType===1&&Na(e,r),rn(e)):Na(Fe,r.stateNode));break;case 4:i=Fe,o=Ht,Fe=r.stateNode.containerInfo,Ht=!0,kr(e,t,r),Fe=i,Ht=o;break;case 0:case 11:case 14:case 15:if(!Qe&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var n=o,s=n.destroy;n=n.tag,s!==void 0&&(n&2||n&4)&&Yl(r,t,s),o=o.next}while(o!==i)}kr(e,t,r);break;case 1:if(!Qe&&(Bi(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(l){be(r,t,l)}kr(e,t,r);break;case 21:kr(e,t,r);break;case 22:r.mode&1?(Qe=(i=Qe)||r.memoizedState!==null,kr(e,t,r),Qe=i):kr(e,t,r);break;default:kr(e,t,r)}}function bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new fg),t.forEach(function(i){var o=Cg.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Bt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var n=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Ht=!1;break e;case 3:Fe=l.stateNode.containerInfo,Ht=!0;break e;case 4:Fe=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(Fe===null)throw Error(E(160));mf(n,s,o),Fe=null,Ht=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){be(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),er(e),i&4){try{Vo(3,e,e.return),oa(3,e)}catch(_){be(e,e.return,_)}try{Vo(5,e,e.return)}catch(_){be(e,e.return,_)}}break;case 1:Bt(t,e),er(e),i&512&&r!==null&&Bi(r,r.return);break;case 5:if(Bt(t,e),er(e),i&512&&r!==null&&Bi(r,r.return),e.flags&32){var o=e.stateNode;try{Zo(o,"")}catch(_){be(e,e.return,_)}}if(i&4&&(o=e.stateNode,o!=null)){var n=e.memoizedProps,s=r!==null?r.memoizedProps:n,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&n.type==="radio"&&n.name!=null&&Rh(o,n),_l(l,s);var c=_l(l,n);for(s=0;s<u.length;s+=2){var m=u[s],d=u[s+1];m==="style"?Vh(o,d):m==="dangerouslySetInnerHTML"?Fh(o,d):m==="children"?Zo(o,d):_u(o,m,d,c)}switch(l){case"input":gl(o,n);break;case"textarea":Nh(o,n);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!n.multiple;var v=n.value;v!=null?Hi(o,!!n.multiple,v,!1):p!==!!n.multiple&&(n.defaultValue!=null?Hi(o,!!n.multiple,n.defaultValue,!0):Hi(o,!!n.multiple,n.multiple?[]:"",!1))}o[ln]=n}catch(_){be(e,e.return,_)}}break;case 6:if(Bt(t,e),er(e),i&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,n=e.memoizedProps;try{o.nodeValue=n}catch(_){be(e,e.return,_)}}break;case 3:if(Bt(t,e),er(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{rn(t.containerInfo)}catch(_){be(e,e.return,_)}break;case 4:Bt(t,e),er(e);break;case 13:Bt(t,e),er(e),o=e.child,o.flags&8192&&(n=o.memoizedState!==null,o.stateNode.isHidden=n,!n||o.alternate!==null&&o.alternate.memoizedState!==null||(ec=Se())),i&4&&bd(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(Qe=(c=Qe)||m,Bt(t,e),Qe=c):Bt(t,e),er(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(d=P=m;P!==null;){switch(p=P,v=p.child,p.tag){case 0:case 11:case 14:case 15:Vo(4,p,p.return);break;case 1:Bi(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){be(i,r,_)}}break;case 5:Bi(p,p.return);break;case 22:if(p.memoizedState!==null){_d(d);continue}}v!==null?(v.return=p,P=v):_d(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{o=d.stateNode,c?(n=o.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(l=d.stateNode,u=d.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Bh("display",s))}catch(_){be(e,e.return,_)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){be(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Bt(t,e),er(e),i&4&&bd(e);break;case 21:break;default:Bt(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ff(r)){var i=r;break e}r=r.return}throw Error(E(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(Zo(o,""),i.flags&=-33);var n=yd(e);Gl(e,n,o);break;case 3:case 4:var s=i.stateNode.containerInfo,l=yd(e);Xl(e,l,s);break;default:throw Error(E(161))}}catch(u){be(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gg(e,t,r){P=e,vf(e)}function vf(e,t,r){for(var i=(e.mode&1)!==0;P!==null;){var o=P,n=o.child;if(o.tag===22&&i){var s=o.memoizedState!==null||Hn;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||Qe;l=Hn;var c=Qe;if(Hn=s,(Qe=u)&&!c)for(P=o;P!==null;)s=P,u=s.child,s.tag===22&&s.memoizedState!==null?xd(o):u!==null?(u.return=s,P=u):xd(o);for(;n!==null;)P=n,vf(n),n=n.sibling;P=o,Hn=l,Qe=c}wd(e)}else o.subtreeFlags&8772&&n!==null?(n.return=o,P=n):wd(e)}}function wd(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||oa(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Qe)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Ut(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var n=t.updateQueue;n!==null&&id(t,n,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}id(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&rn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Qe||t.flags&512&&Ql(t)}catch(p){be(t,t.return,p)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function _d(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function xd(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{oa(4,t)}catch(u){be(t,r,u)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(u){be(t,o,u)}}var n=t.return;try{Ql(t)}catch(u){be(t,n,u)}break;case 5:var s=t.return;try{Ql(t)}catch(u){be(t,s,u)}}}catch(u){be(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var vg=Math.ceil,Is=_r.ReactCurrentDispatcher,Zu=_r.ReactCurrentOwner,It=_r.ReactCurrentBatchConfig,G=0,Pe=null,$e=null,Be=0,mt=0,Vi=Xr(0),Le=0,fn=null,pi=0,na=0,Ju=0,Uo=null,st=null,ec=0,io=1/0,cr=null,Ds=!1,Zl=null,Nr=null,jn=!1,Tr=null,Ps=0,Ho=0,Jl=null,as=-1,ls=0;function et(){return G&6?Se():as!==-1?as:as=Se()}function Mr(e){return e.mode&1?G&2&&Be!==0?Be&-Be:eg.transition!==null?(ls===0&&(ls=Jh()),ls):(e=te,e!==0||(e=window.event,e=e===void 0?16:sp(e.type)),e):1}function Kt(e,t,r,i){if(50<Ho)throw Ho=0,Jl=null,Error(E(185));kn(e,r,i),(!(G&2)||e!==Pe)&&(e===Pe&&(!(G&2)&&(na|=r),Le===4&&zr(e,Be)),ct(e,i),r===1&&G===0&&!(t.mode&1)&&(io=Se()+500,ta&&Gr()))}function ct(e,t){var r=e.callbackNode;e0(e,t);var i=vs(e,e===Pe?Be:0);if(i===0)r!==null&&Lc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Lc(r),t===1)e.tag===0?J0(kd.bind(null,e)):Sp(kd.bind(null,e)),Q0(function(){!(G&6)&&Gr()}),r=null;else{switch(ep(i)){case 1:r=$u;break;case 4:r=Gh;break;case 16:r=gs;break;case 536870912:r=Zh;break;default:r=gs}r=Sf(r,yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function yf(e,t){if(as=-1,ls=0,G&6)throw Error(E(327));var r=e.callbackNode;if(Yi()&&e.callbackNode!==r)return null;var i=vs(e,e===Pe?Be:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Os(e,i);else{t=i;var o=G;G|=2;var n=wf();(Pe!==e||Be!==t)&&(cr=null,io=Se()+500,li(e,t));do try{wg();break}catch(l){bf(e,l)}while(1);Fu(),Is.current=n,G=o,$e!==null?t=0:(Pe=null,Be=0,t=Le)}if(t!==0){if(t===2&&(o=$l(e),o!==0&&(i=o,t=eu(e,o))),t===1)throw r=fn,li(e,0),zr(e,i),ct(e,Se()),r;if(t===6)zr(e,i);else{if(o=e.current.alternate,!(i&30)&&!yg(o)&&(t=Os(e,i),t===2&&(n=$l(e),n!==0&&(i=n,t=eu(e,n))),t===1))throw r=fn,li(e,0),zr(e,i),ct(e,Se()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(E(345));case 2:ti(e,st,cr);break;case 3:if(zr(e,i),(i&130023424)===i&&(t=ec+500-Se(),10<t)){if(vs(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pl(ti.bind(null,e,st,cr),t);break}ti(e,st,cr);break;case 4:if(zr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var s=31-Wt(i);n=1<<s,s=t[s],s>o&&(o=s),i&=~n}if(i=o,i=Se()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vg(i/1960))-i,10<i){e.timeoutHandle=Pl(ti.bind(null,e,st,cr),i);break}ti(e,st,cr);break;case 5:ti(e,st,cr);break;default:throw Error(E(329))}}}return ct(e,Se()),e.callbackNode===r?yf.bind(null,e):null}function eu(e,t){var r=Uo;return e.current.memoizedState.isDehydrated&&(li(e,t).flags|=256),e=Os(e,t),e!==2&&(t=st,st=r,t!==null&&tu(t)),e}function tu(e){st===null?st=e:st.push.apply(st,e)}function yg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],n=o.getSnapshot;o=o.value;try{if(!Yt(n(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zr(e,t){for(t&=~Ju,t&=~na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Wt(t),i=1<<r;e[r]=-1,t&=~i}}function kd(e){if(G&6)throw Error(E(327));Yi();var t=vs(e,0);if(!(t&1))return ct(e,Se()),null;var r=Os(e,t);if(e.tag!==0&&r===2){var i=$l(e);i!==0&&(t=i,r=eu(e,i))}if(r===1)throw r=fn,li(e,0),zr(e,t),ct(e,Se()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ti(e,st,cr),ct(e,Se()),null}function tc(e,t){var r=G;G|=1;try{return e(t)}finally{G=r,G===0&&(io=Se()+500,ta&&Gr())}}function fi(e){Tr!==null&&Tr.tag===0&&!(G&6)&&Yi();var t=G;G|=1;var r=It.transition,i=te;try{if(It.transition=null,te=1,e)return e()}finally{te=i,It.transition=r,G=t,!(G&6)&&Gr()}}function rc(){mt=Vi.current,he(Vi)}function li(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Y0(r)),$e!==null)for(r=$e.return;r!==null;){var i=r;switch(Ru(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xs();break;case 3:to(),he(lt),he(Xe),Wu();break;case 5:ju(i);break;case 4:to();break;case 13:he(ge);break;case 19:he(ge);break;case 10:Bu(i.type._context);break;case 22:case 23:rc()}r=r.return}if(Pe=e,$e=e=Fr(e.current,null),Be=mt=t,Le=0,fn=null,Ju=na=pi=0,st=Uo=null,ni!==null){for(t=0;t<ni.length;t++)if(r=ni[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,n=r.pending;if(n!==null){var s=n.next;n.next=o,i.next=s}r.pending=i}ni=null}return e}function bf(e,t){do{var r=$e;try{if(Fu(),os.current=Ls,Ts){for(var i=ve.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Ts=!1}if(hi=0,De=Te=ve=null,Bo=!1,dn=0,Zu.current=null,r===null||r.return===null){Le=1,fn=t,$e=null;break}e:{var n=e,s=r.return,l=r,u=t;if(t=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=l,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=cd(s);if(v!==null){v.flags&=-257,dd(v,s,l,n,t),v.mode&1&&ud(n,c,t),t=v,u=c;var y=t.updateQueue;if(y===null){var _=new Set;_.add(u),t.updateQueue=_}else y.add(u);break e}else{if(!(t&1)){ud(n,c,t),ic();break e}u=Error(E(426))}}else if(me&&l.mode&1){var S=cd(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),dd(S,s,l,n,t),Nu(ro(u,l));break e}}n=u=ro(u,l),Le!==4&&(Le=2),Uo===null?Uo=[n]:Uo.push(n),n=s;do{switch(n.tag){case 3:n.flags|=65536,t&=-t,n.lanes|=t;var b=tf(n,u,t);rd(n,b);break e;case 1:l=u;var f=n.type,g=n.stateNode;if(!(n.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Nr===null||!Nr.has(g)))){n.flags|=65536,t&=-t,n.lanes|=t;var w=rf(n,l,t);rd(n,w);break e}}n=n.return}while(n!==null)}xf(r)}catch(x){t=x,$e===r&&r!==null&&($e=r=r.return);continue}break}while(1)}function wf(){var e=Is.current;return Is.current=Ls,e===null?Ls:e}function ic(){(Le===0||Le===3||Le===2)&&(Le=4),Pe===null||!(pi&268435455)&&!(na&268435455)||zr(Pe,Be)}function Os(e,t){var r=G;G|=2;var i=wf();(Pe!==e||Be!==t)&&(cr=null,li(e,t));do try{bg();break}catch(o){bf(e,o)}while(1);if(Fu(),G=r,Is.current=i,$e!==null)throw Error(E(261));return Pe=null,Be=0,Le}function bg(){for(;$e!==null;)_f($e)}function wg(){for(;$e!==null&&!Wm();)_f($e)}function _f(e){var t=Cf(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?xf(e):$e=t,Zu.current=null}function xf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=pg(r,t),r!==null){r.flags&=32767,$e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,$e=null;return}}else if(r=hg(r,t,mt),r!==null){$e=r;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Le===0&&(Le=5)}function ti(e,t,r){var i=te,o=It.transition;try{It.transition=null,te=1,_g(e,t,r,i)}finally{It.transition=o,te=i}return null}function _g(e,t,r,i){do Yi();while(Tr!==null);if(G&6)throw Error(E(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var n=r.lanes|r.childLanes;if(t0(e,n),e===Pe&&($e=Pe=null,Be=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||jn||(jn=!0,Sf(gs,function(){return Yi(),null})),n=(r.flags&15990)!==0,r.subtreeFlags&15990||n){n=It.transition,It.transition=null;var s=te;te=1;var l=G;G|=4,Zu.current=null,mg(e,r),gf(r,e),V0(Il),ys=!!Ll,Il=Ll=null,e.current=r,gg(r),Km(),G=l,te=s,It.transition=n}else e.current=r;if(jn&&(jn=!1,Tr=e,Ps=o),n=e.pendingLanes,n===0&&(Nr=null),Qm(r.stateNode),ct(e,Se()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(Ds)throw Ds=!1,e=Zl,Zl=null,e;return Ps&1&&e.tag!==0&&Yi(),n=e.pendingLanes,n&1?e===Jl?Ho++:(Ho=0,Jl=e):Ho=0,Gr(),null}function Yi(){if(Tr!==null){var e=ep(Ps),t=It.transition,r=te;try{if(It.transition=null,te=16>e?16:e,Tr===null)var i=!1;else{if(e=Tr,Tr=null,Ps=0,G&6)throw Error(E(331));var o=G;for(G|=4,P=e.current;P!==null;){var n=P,s=n.child;if(P.flags&16){var l=n.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(P=c;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Vo(8,m,n)}var d=m.child;if(d!==null)d.return=m,P=d;else for(;P!==null;){m=P;var p=m.sibling,v=m.return;if(pf(m),m===c){P=null;break}if(p!==null){p.return=v,P=p;break}P=v}}}var y=n.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}P=n}}if(n.subtreeFlags&2064&&s!==null)s.return=n,P=s;else e:for(;P!==null;){if(n=P,n.flags&2048)switch(n.tag){case 0:case 11:case 15:Vo(9,n,n.return)}var b=n.sibling;if(b!==null){b.return=n.return,P=b;break e}P=n.return}}var f=e.current;for(P=f;P!==null;){s=P;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,P=g;else e:for(s=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:oa(9,l)}}catch(x){be(l,l.return,x)}if(l===s){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(G=o,Gr(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(Xs,e)}catch{}i=!0}return i}finally{te=r,It.transition=t}}return!1}function Cd(e,t,r){t=ro(r,t),t=tf(e,t,1),e=Rr(e,t,1),t=et(),e!==null&&(kn(e,1,t),ct(e,t))}function be(e,t,r){if(e.tag===3)Cd(e,e,r);else for(;t!==null;){if(t.tag===3){Cd(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Nr===null||!Nr.has(i))){e=ro(r,e),e=rf(t,e,1),t=Rr(t,e,1),e=et(),t!==null&&(kn(t,1,e),ct(t,e));break}}t=t.return}}function xg(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&r,Pe===e&&(Be&r)===r&&(Le===4||Le===3&&(Be&130023424)===Be&&500>Se()-ec?li(e,0):Ju|=r),ct(e,t)}function kf(e,t){t===0&&(e.mode&1?(t=Pn,Pn<<=1,!(Pn&130023424)&&(Pn=4194304)):t=1);var r=et();e=yr(e,t),e!==null&&(kn(e,t,r),ct(e,r))}function kg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),kf(e,r)}function Cg(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(t),kf(e,r)}var Cf;Cf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return at=!1,dg(e,t,r);at=!!(e.flags&131072)}else at=!1,me&&t.flags&1048576&&$p(t,Ss,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ss(e,t),e=t.pendingProps;var o=Zi(t,Xe.current);qi(t,r),o=qu(null,t,i,e,o,r);var n=Yu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(i)?(n=!0,ks(t)):n=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Uu(t),o.updater=ra,t.stateNode=o,o._reactInternals=t,Vl(t,i,e,r),t=jl(null,t,i,!0,n,r)):(t.tag=0,me&&n&&Ou(t),Je(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch(ss(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=$g(i),e=Ut(i,e),o){case 0:t=Hl(null,t,i,e,r);break e;case 1:t=fd(null,t,i,e,r);break e;case 11:t=hd(null,t,i,e,r);break e;case 14:t=pd(null,t,i,Ut(i.type,e),r);break e}throw Error(E(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),Hl(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),fd(e,t,i,o,r);case 3:e:{if(af(t),e===null)throw Error(E(387));i=t.pendingProps,n=t.memoizedState,o=n.element,Tp(e,t),Es(t,i,null,r);var s=t.memoizedState;if(i=s.element,n.isDehydrated)if(n={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){o=ro(Error(E(423)),t),t=md(e,t,i,r,o);break e}else if(i!==o){o=ro(Error(E(424)),t),t=md(e,t,i,r,o);break e}else for(vt=Or(t.stateNode.containerInfo.firstChild),wt=t,me=!0,jt=null,r=Pp(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ji(),i===o){t=br(e,t,r);break e}Je(e,t,i,r)}t=t.child}return t;case 5:return Op(t),e===null&&Ml(t),i=t.type,o=t.pendingProps,n=e!==null?e.memoizedProps:null,s=o.children,Dl(i,o)?s=null:n!==null&&Dl(i,n)&&(t.flags|=32),sf(e,t),Je(e,t,s,r),t.child;case 6:return e===null&&Ml(t),null;case 13:return lf(e,t,r);case 4:return Hu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=eo(t,null,i,r):Je(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),hd(e,t,i,o,r);case 7:return Je(e,t,t.pendingProps,r),t.child;case 8:return Je(e,t,t.pendingProps.children,r),t.child;case 12:return Je(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,n=t.memoizedProps,s=o.value,ue($s,i._currentValue),i._currentValue=s,n!==null)if(Yt(n.value,s)){if(n.children===o.children&&!lt.current){t=br(e,t,r);break e}}else for(n=t.child,n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){s=n.child;for(var u=l.firstContext;u!==null;){if(u.context===i){if(n.tag===1){u=mr(-1,r&-r),u.tag=2;var c=n.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}n.lanes|=r,u=n.alternate,u!==null&&(u.lanes|=r),Fl(n.return,r,t),l.lanes|=r;break}u=u.next}}else if(n.tag===10)s=n.type===t.type?null:n.child;else if(n.tag===18){if(s=n.return,s===null)throw Error(E(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Fl(s,r,t),s=n.sibling}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}Je(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,qi(t,r),o=Dt(o),i=i(o),t.flags|=1,Je(e,t,i,r),t.child;case 14:return i=t.type,o=Ut(i,t.pendingProps),o=Ut(i.type,o),pd(e,t,i,o,r);case 15:return of(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Ut(i,o),ss(e,t),t.tag=1,ut(i)?(e=!0,ks(t)):e=!1,qi(t,r),Ip(t,i,o),Vl(t,i,o,r),jl(null,t,i,!0,e,r);case 19:return uf(e,t,r);case 22:return nf(e,t,r)}throw Error(E(156,t.tag))};function Sf(e,t){return Xh(e,t)}function Sg(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,r,i){return new Sg(e,t,r,i)}function oc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $g(e){if(typeof e=="function")return oc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===Cu)return 14}return 2}function Fr(e,t){var r=e.alternate;return r===null?(r=Lt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function us(e,t,r,i,o,n){var s=2;if(i=e,typeof e=="function")oc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Li:return ui(r.children,o,n,t);case xu:s=8,o|=8;break;case dl:return e=Lt(12,r,t,o|2),e.elementType=dl,e.lanes=n,e;case hl:return e=Lt(13,r,t,o),e.elementType=hl,e.lanes=n,e;case pl:return e=Lt(19,r,t,o),e.elementType=pl,e.lanes=n,e;case Dh:return sa(r,o,n,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lh:s=10;break e;case Ih:s=9;break e;case ku:s=11;break e;case Cu:s=14;break e;case Cr:s=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Lt(s,r,t,o),t.elementType=e,t.type=i,t.lanes=n,t}function ui(e,t,r,i){return e=Lt(7,e,i,t),e.lanes=r,e}function sa(e,t,r,i){return e=Lt(22,e,i,t),e.elementType=Dh,e.lanes=r,e.stateNode={isHidden:!1},e}function Wa(e,t,r){return e=Lt(6,e,null,t),e.lanes=r,e}function Ka(e,t,r){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zg(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nc(e,t,r,i,o,n,s,l,u){return e=new zg(e,t,r,l,u),t===1?(t=1,n===!0&&(t|=8)):t=0,n=Lt(3,null,null,t),e.current=n,n.stateNode=e,n.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(n),e}function Eg(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function $f(e){if(!e)return Hr;e=e._reactInternals;e:{if(Ci(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(ut(r))return Cp(e,r,t)}return t}function zf(e,t,r,i,o,n,s,l,u){return e=nc(r,i,!0,e,o,n,s,l,u),e.context=$f(null),r=e.current,i=et(),o=Mr(r),n=mr(i,o),n.callback=t??null,Rr(r,n,o),e.current.lanes=o,kn(e,o,i),ct(e,i),e}function aa(e,t,r,i){var o=t.current,n=et(),s=Mr(o);return r=$f(r),t.context===null?t.context=r:t.pendingContext=r,t=mr(n,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Rr(o,t,s),e!==null&&(Kt(e,o,s,n),is(e,o,s)),s}function Rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function sc(e,t){Sd(e,t),(e=e.alternate)&&Sd(e,t)}function Ag(){return null}var Ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function ac(e){this._internalRoot=e}la.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));aa(e,t,null,null)};la.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fi(function(){aa(null,e,null,null)}),t[vr]=null}};function la(e){this._internalRoot=e}la.prototype.unstable_scheduleHydration=function(e){if(e){var t=ip();e={blockedOn:null,target:e,priority:t};for(var r=0;r<$r.length&&t!==0&&t<$r[r].priority;r++);$r.splice(r,0,e),r===0&&np(e)}};function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Tg(e,t,r,i,o){if(o){if(typeof i=="function"){var n=i;i=function(){var c=Rs(s);n.call(c)}}var s=zf(t,i,e,0,null,!1,!1,"",$d);return e._reactRootContainer=s,e[vr]=s.current,sn(e.nodeType===8?e.parentNode:e),fi(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var l=i;i=function(){var c=Rs(u);l.call(c)}}var u=nc(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=u,e[vr]=u.current,sn(e.nodeType===8?e.parentNode:e),fi(function(){aa(t,u,r,i)}),u}function ca(e,t,r,i,o){var n=r._reactRootContainer;if(n){var s=n;if(typeof o=="function"){var l=o;o=function(){var u=Rs(s);l.call(u)}}aa(t,s,e,o)}else s=Tg(r,t,e,o,i);return Rs(s)}tp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Do(t.pendingLanes);r!==0&&(zu(t,r|1),ct(t,Se()),!(G&6)&&(io=Se()+500,Gr()))}break;case 13:fi(function(){var i=yr(e,1);if(i!==null){var o=et();Kt(i,e,1,o)}}),sc(e,1)}};Eu=function(e){if(e.tag===13){var t=yr(e,134217728);if(t!==null){var r=et();Kt(t,e,134217728,r)}sc(e,134217728)}};rp=function(e){if(e.tag===13){var t=Mr(e),r=yr(e,t);if(r!==null){var i=et();Kt(r,e,t,i)}sc(e,t)}};ip=function(){return te};op=function(e,t){var r=te;try{return te=e,t()}finally{te=r}};kl=function(e,t,r){switch(t){case"input":if(gl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=ea(i);if(!o)throw Error(E(90));Oh(i),gl(i,o)}}}break;case"textarea":Nh(e,r);break;case"select":t=r.value,t!=null&&Hi(e,!!r.multiple,t,!1)}};jh=tc;Wh=fi;var Lg={usingClientEntryPoint:!1,Events:[Sn,Oi,ea,Uh,Hh,tc]},Co={findFiberByHostInstance:oi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ig={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yh(e),e===null?null:e.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{Xs=Wn.inject(Ig),ir=Wn}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lg;zt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(t))throw Error(E(200));return Eg(e,t,null,r)};zt.createRoot=function(e,t){if(!lc(e))throw Error(E(299));var r=!1,i="",o=Ef;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nc(e,1,!1,null,null,r,!1,i,o),e[vr]=t.current,sn(e.nodeType===8?e.parentNode:e),new ac(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Yh(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return fi(e)};zt.hydrate=function(e,t,r){if(!ua(t))throw Error(E(200));return ca(null,e,t,!0,r)};zt.hydrateRoot=function(e,t,r){if(!lc(e))throw Error(E(405));var i=r!=null&&r.hydratedSources||null,o=!1,n="",s=Ef;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=zf(t,null,e,1,r??null,o,!1,n,s),e[vr]=t.current,sn(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new la(t)};zt.render=function(e,t,r){if(!ua(t))throw Error(E(200));return ca(null,e,t,!1,r)};zt.unmountComponentAtNode=function(e){if(!ua(e))throw Error(E(40));return e._reactRootContainer?(fi(function(){ca(null,null,e,!1,function(){e._reactRootContainer=null,e[vr]=null})}),!0):!1};zt.unstable_batchedUpdates=tc;zt.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!ua(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return ca(e,t,r,!1,i)};zt.version="18.2.0-next-9e3b772b8-20220608";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),$h.exports=zt;var Dg=$h.exports,zd=Dg;ul.createRoot=zd.createRoot,ul.hydrateRoot=zd.hydrateRoot;function Pg(){return U.jsx("header",{children:U.jsx("span",{children:"Header"})})}function Og(){return U.jsx("footer",{children:U.jsx("span",{children:"Footer"})})}function da(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var Rg={};da(Rg,"ErrorBoundary",()=>fo);var Ng={};da(Ng,"ErrorBoundaryContext",()=>uc);const uc=le.createContext(null),qa={didCatch:!1,error:null};class fo extends le.Component{constructor(){super(...arguments);wa(this,"state",qa);wa(this,"resetErrorBoundary",(...r)=>{var o,n;const{error:i}=this.state;i!==null&&((n=(o=this.props).onReset)==null||n.call(o,{args:r,reason:"imperative-api"}),this.setState(qa))})}static getDerivedStateFromError(r){return{didCatch:!0,error:r}}componentDidCatch(r,i){var o,n;(n=(o=this.props).onError)==null||n.call(o,r,i)}componentDidUpdate(r,i){var s,l;const{didCatch:o}=this.state,{resetKeys:n}=this.props;o&&i.error!==null&&Mg(r.resetKeys,n)&&((l=(s=this.props).onReset)==null||l.call(s,{next:n,prev:r.resetKeys,reason:"keys"}),this.setState(qa))}render(){const{children:r,fallbackRender:i,FallbackComponent:o,fallback:n}=this.props,{didCatch:s,error:l}=this.state;let u=r;if(s){const c={error:l,resetErrorBoundary:this.resetErrorBoundary};if(le.isValidElement(n))u=n;else if(typeof i=="function")u=i(c);else if(o)u=le.createElement(o,c);else throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return le.createElement(uc.Provider,{value:{didCatch:s,error:l,resetErrorBoundary:this.resetErrorBoundary}},u)}}function Mg(e=[],t=[]){return e.length!==t.length||e.some((r,i)=>!Object.is(r,t[i]))}var Fg={};da(Fg,"useErrorBoundary",()=>Vg);function Bg(e){if(e==null||typeof e.didCatch!="boolean"||typeof e.resetErrorBoundary!="function")throw new Error("ErrorBoundaryContext not found");return!0}function Vg(){const e=le.useContext(uc);Bg(e);const[t,r]=le.useState({error:null,hasError:!1}),i=le.useMemo(()=>({resetBoundary:()=>{e==null||e.resetErrorBoundary(),r({error:null,hasError:!1})},showBoundary:o=>r({error:o,hasError:!0})}),[e==null?void 0:e.resetErrorBoundary]);if(t.hasError)throw t.error;return i}var Ug={};da(Ug,"withErrorBoundary",()=>Hg);function Hg(e,t){const r=le.forwardRef((o,n)=>le.createElement(fo,t,le.createElement(e,{...o,ref:n}))),i=e.displayName||e.name||"Unknown";return r.displayName=`withErrorBoundary(${i})`,r}var cs=window,cc=cs.ShadowRoot&&(cs.ShadyCSS===void 0||cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dc=Symbol(),Ed=new WeakMap,Tf=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==dc)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(cc&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Ed.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ed.set(r,t))}return t}toString(){return this.cssText}},jg=e=>new Tf(typeof e=="string"?e:e+"",void 0,dc),B=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Tf(r,e,dc)},Wg=(e,t)=>{cc?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),o=cs.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)})},Ad=cc?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return jg(r)})(e):e,Ya,Ns=window,Td=Ns.trustedTypes,Kg=Td?Td.emptyScript:"",Ld=Ns.reactiveElementPolyfillSupport,mn={toAttribute(e,t){switch(t){case Boolean:e=e?Kg:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Lf=(e,t)=>t!==e&&(t==t||e==e),Qa={attribute:!0,type:String,converter:mn,reflect:!1,hasChanged:Lf},Ai=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=Qa){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Qa}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Ad(i))}else e!==void 0&&t.push(Ad(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Wg(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Qa){var i;const o=this.constructor._$Ep(e,r);if(o!==void 0&&r.reflect===!0){const n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:mn).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=i.getPropertyOptions(o),s=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:mn;this._$El=o,this[o]=s.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Lf)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ai.finalized=!0,Ai.elementProperties=new Map,Ai.elementStyles=[],Ai.shadowRootOptions={mode:"open"},Ld==null||Ld({ReactiveElement:Ai}),((Ya=Ns.reactiveElementVersions)!==null&&Ya!==void 0?Ya:Ns.reactiveElementVersions=[]).push("1.6.1");var Xa,Ms=window,oo=Ms.trustedTypes,Id=oo?oo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Er=`lit$${(Math.random()+"").slice(9)}$`,If="?"+Er,qg=`<${If}>`,no=document,gn=(e="")=>no.createComment(e),vn=e=>e===null||typeof e!="object"&&typeof e!="function",Df=Array.isArray,Yg=e=>Df(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",So=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dd=/-->/g,Pd=/>/g,Jr=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Od=/'/g,Rd=/"/g,Pf=/^(?:script|style|textarea|title)$/i,Qg=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),$=Qg(1),yt=Symbol.for("lit-noChange"),we=Symbol.for("lit-nothing"),Nd=new WeakMap,Qi=no.createTreeWalker(no,129,null,!1),Xg=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=So;for(let u=0;u<r;u++){const c=e[u];let m,d,p=-1,v=0;for(;v<c.length&&(s.lastIndex=v,d=s.exec(c),d!==null);)v=s.lastIndex,s===So?d[1]==="!--"?s=Dd:d[1]!==void 0?s=Pd:d[2]!==void 0?(Pf.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=Jr):d[3]!==void 0&&(s=Jr):s===Jr?d[0]===">"?(s=o??So,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,m=d[1],s=d[3]===void 0?Jr:d[3]==='"'?Rd:Od):s===Rd||s===Od?s=Jr:s===Dd||s===Pd?s=So:(s=Jr,o=void 0);const y=s===Jr&&e[u+1].startsWith("/>")?" ":"";n+=s===So?c+qg:p>=0?(i.push(m),c.slice(0,p)+"$lit$"+c.slice(p)+Er+y):c+Er+(p===-2?(i.push(void 0),u):y)}const l=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Id!==void 0?Id.createHTML(l):l,i]},Fs=class{constructor({strings:t,_$litType$:r},i){let o;this.parts=[];let n=0,s=0;const l=t.length-1,u=this.parts,[c,m]=Xg(t,r);if(this.el=Fs.createElement(c,i),Qi.currentNode=this.el.content,r===2){const d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(o=Qi.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const p of o.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(Er)){const v=m[s++];if(d.push(p),v!==void 0){const y=o.getAttribute(v.toLowerCase()+"$lit$").split(Er),_=/([.?@])?(.*)/.exec(v);u.push({type:1,index:n,name:_[2],strings:y,ctor:_[1]==="."?Zg:_[1]==="?"?ev:_[1]==="@"?tv:pa})}else u.push({type:6,index:n})}for(const p of d)o.removeAttribute(p)}if(Pf.test(o.tagName)){const d=o.textContent.split(Er),p=d.length-1;if(p>0){o.textContent=oo?oo.emptyScript:"";for(let v=0;v<p;v++)o.append(d[v],gn()),Qi.nextNode(),u.push({type:2,index:++n});o.append(d[p],gn())}}}else if(o.nodeType===8)if(o.data===If)u.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(Er,d+1))!==-1;)u.push({type:7,index:n}),d+=Er.length-1}n++}}static createElement(t,r){const i=no.createElement("template");return i.innerHTML=t,i}};function so(e,t,r=e,i){var o,n,s,l;if(t===yt)return t;let u=i!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[i]:r._$Cl;const c=vn(t)?void 0:t._$litDirective$;return(u==null?void 0:u.constructor)!==c&&((n=u==null?void 0:u._$AO)===null||n===void 0||n.call(u,!1),c===void 0?u=void 0:(u=new c(e),u._$AT(e,r,i)),i!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=u:r._$Cl=u),u!==void 0&&(t=so(e,u._$AS(e,t.values),u,i)),t}var Gg=class{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:i},parts:o}=this._$AD,n=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:no).importNode(i,!0);Qi.currentNode=n;let s=Qi.nextNode(),l=0,u=0,c=o[0];for(;c!==void 0;){if(l===c.index){let m;c.type===2?m=new ha(s,s.nextSibling,this,t):c.type===1?m=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(m=new rv(s,this,t)),this.u.push(m),c=o[++u]}l!==(c==null?void 0:c.index)&&(s=Qi.nextNode(),l++)}return n}p(t){let r=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},ha=class{constructor(e,t,r,i){var o;this.type=2,this._$AH=we,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=so(this,e,t),vn(e)?e===we||e==null||e===""?(this._$AH!==we&&this._$AR(),this._$AH=we):e!==this._$AH&&e!==yt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yg(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==we&&vn(this._$AH)?this._$AA.nextSibling.data=e:this.T(no.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Fs.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(r);else{const n=new Gg(o,this),s=n.v(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let t=Nd.get(e.strings);return t===void 0&&Nd.set(e.strings,t=new Fs(e)),t}k(e){Df(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new ha(this.O(gn()),this.O(gn()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},pa=class{constructor(e,t,r,i,o){this.type=1,this._$AH=we,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=we}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(o===void 0)e=so(this,e,t,0),n=!vn(e)||e!==this._$AH&&e!==yt,n&&(this._$AH=e);else{const s=e;let l,u;for(e=o[0],l=0;l<o.length-1;l++)u=so(this,s[r+l],t,l),u===yt&&(u=this._$AH[l]),n||(n=!vn(u)||u!==this._$AH[l]),u===we?e=we:e!==we&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}n&&!i&&this.j(e)}j(e){e===we?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Zg=class extends pa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===we?void 0:e}},Jg=oo?oo.emptyScript:"",ev=class extends pa{constructor(){super(...arguments),this.type=4}j(t){t&&t!==we?this.element.setAttribute(this.name,Jg):this.element.removeAttribute(this.name)}},tv=class extends pa{constructor(t,r,i,o,n){super(t,r,i,o,n),this.type=5}_$AI(t,r=this){var i;if((t=(i=so(this,t,r,0))!==null&&i!==void 0?i:we)===yt)return;const o=this._$AH,n=t===we&&o!==we||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==we&&(o===we||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},rv=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){so(this,e)}},Md=Ms.litHtmlPolyfillSupport;Md==null||Md(Fs,ha),((Xa=Ms.litHtmlVersions)!==null&&Xa!==void 0?Xa:Ms.litHtmlVersions=[]).push("2.6.1");var iv=(e,t,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=n._$litPart$;if(s===void 0){const l=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new ha(t.insertBefore(gn(),l),l,void 0,r??{})}return s._$AI(e),s},Ga,Za,jo=class extends Ai{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=iv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return yt}};jo.finalized=!0,jo._$litElement$=!0,(Ga=globalThis.litElementHydrateSupport)===null||Ga===void 0||Ga.call(globalThis,{LitElement:jo});var Fd=globalThis.litElementPolyfillSupport;Fd==null||Fd({LitElement:jo});((Za=globalThis.litElementVersions)!==null&&Za!==void 0?Za:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var V=B`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ov=B`
  ${V}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,hc=Object.defineProperty,nv=Object.defineProperties,sv=Object.getOwnPropertyDescriptor,av=Object.getOwnPropertyDescriptors,Bs=Object.getOwnPropertySymbols,Of=Object.prototype.hasOwnProperty,Rf=Object.prototype.propertyIsEnumerable,Bd=(e,t,r)=>t in e?hc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,se=(e,t)=>{for(var r in t||(t={}))Of.call(t,r)&&Bd(e,r,t[r]);if(Bs)for(var r of Bs(t))Rf.call(t,r)&&Bd(e,r,t[r]);return e},Ge=(e,t)=>nv(e,av(t)),pc=(e,t)=>{var r={};for(var i in e)Of.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&Bs)for(var i of Bs(e))t.indexOf(i)<0&&Rf.call(e,i)&&(r[i]=e[i]);return r},lv=(e,t)=>{for(var r in t)hc(e,r,{get:t[r],enumerable:!0})},a=(e,t,r,i)=>{for(var o=i>1?void 0:i?sv(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&hc(t,r,o),o},M=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(s){customElements.define(r,s)}}})(e,t),uv=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ge(se({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function h(e){return(t,r)=>r!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,r):uv(e,t)}function j(e){return h(Ge(se({},e),{state:!0}))}var fc=({finisher:e,descriptor:t})=>(r,i)=>{var o;if(i===void 0){const n=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:Ge(se({},r),{key:n});return e!=null&&(s.finisher=function(l){e(l,n)}),s}{const n=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(n,i)}};function Nf(e){return fc({finisher:(t,r)=>{Object.assign(t.prototype[r],e)}})}function I(e,t){return fc({descriptor:r=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var n,s;return this[o]===void 0&&(this[o]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null),this[o]}}return i}})}function cv(e){return fc({descriptor:t=>({async get(){var r;return await this.updateComplete,(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}var Ja;((Ja=window.HTMLSlotElement)===null||Ja===void 0?void 0:Ja.prototype.assignedElements)!=null;var R=class extends jo{emit(e,t){const r=new CustomEvent(e,se({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};a([h()],R.prototype,"dir",2);a([h()],R.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Vs=class extends R{render(){return $` <slot></slot> `}};Vs.styles=ov;Vs=a([M("sl-visually-hidden")],Vs);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dv=new Set(["children","localName","ref","style","className"]),Vd=new WeakMap,hv=(e,t,r,i,o)=>{const n=o==null?void 0:o[t];n===void 0||r===i?r==null&&t in HTMLElement.prototype?e.removeAttribute(t):e[t]=r:((s,l,u)=>{let c=Vd.get(s);c===void 0&&Vd.set(s,c=new Map);let m=c.get(l);u!==void 0?m===void 0?(c.set(l,m={handleEvent:u}),s.addEventListener(l,m)):m.handleEvent=u:m!==void 0&&(c.delete(l),s.removeEventListener(l,m))})(e,n,r)};function F(e=window.React,t,r,i,o){let n,s,l;if(t===void 0){const v=e;({tagName:s,elementClass:l,events:i,displayName:o}=v),n=v.react}else n=e,l=r,s=t;const u=n.Component,c=n.createElement,m=new Set(Object.keys(i??{}));class d extends u{constructor(){super(...arguments),this.o=null}t(y){if(this.o!==null)for(const _ in this.i)hv(this.o,_,this.props[_],y?y[_]:void 0,i)}componentDidMount(){this.t()}componentDidUpdate(y){this.t(y)}render(){const{_$Gl:y,..._}=this.props;this.h!==y&&(this.u=b=>{y!==null&&((f,g)=>{typeof f=="function"?f(g):f.current=g})(y,b),this.o=b,this.h=y}),this.i={};const S={ref:this.u};for(const[b,f]of Object.entries(_))dv.has(b)?S[b==="className"?"class":b]=f:m.has(b)||b in l.prototype?this.i[b]=f:S[b]=f;return c(s,S)}}d.displayName=o??l.name;const p=n.forwardRef((v,y)=>c(d,{...v,_$Gl:y},v==null?void 0:v.children));return p.displayName=d.displayName,p}F({tagName:"sl-visually-hidden",elementClass:Vs,react:N,events:{}});var pv=B`
  ${V}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,ru=new Set,fv=new MutationObserver(Bf),Ui=new Map,Mf=document.documentElement.dir||"ltr",Ff=document.documentElement.lang||navigator.language,ii;fv.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function mv(...e){e.map(t=>{const r=t.$code.toLowerCase();Ui.has(r)?Ui.set(r,Object.assign(Object.assign({},Ui.get(r)),t)):Ui.set(r,t),ii||(ii=t)}),Bf()}function Bf(){Mf=document.documentElement.dir||"ltr",Ff=document.documentElement.lang||navigator.language,[...ru.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Vf=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ru.add(this.host)}hostDisconnected(){ru.delete(this.host)}dir(){return`${this.host.dir||Mf}`.toLowerCase()}lang(){return`${this.host.lang||Ff}`.toLowerCase()}getTranslationData(e){var t,r;const i=new Intl.Locale(e),o=i==null?void 0:i.language.toLowerCase(),n=(r=(t=i==null?void 0:i.region)===null||t===void 0?void 0:t.toLowerCase())!==null&&r!==void 0?r:"",s=Ui.get(`${o}-${n}`),l=Ui.get(o);return{locale:i,language:o,region:n,primary:s,secondary:l}}exists(e,t){var r;const{primary:i,secondary:o}=this.getTranslationData((r=t.lang)!==null&&r!==void 0?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||o&&o[e]||t.includeFallback&&ii&&ii[e])}term(e,...t){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let o;if(r&&r[e])o=r[e];else if(i&&i[e])o=i[e];else if(ii&&ii[e])o=ii[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},ie=class extends Vf{},gv={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};mv(gv);function T(e,t){const r=se({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:n}=i,s=Array.isArray(e)?e:[e];i.update=function(l){s.forEach(u=>{const c=u;if(l.has(c)){const m=l.get(c),d=this[c];m!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](m,d)}}),n.call(this,l)}}}var hr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fa=e=>(...t)=>({_$litDirective$:e,values:t}),ma=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var H=fa(class extends ma{constructor(e){var t;if(super(e),e.type!==hr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.nt.add(n);return this.render(t)}const o=e.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const s=!!t[n];s===this.nt.has(n)||!((i=this.st)===null||i===void 0)&&i.has(n)||(s?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return yt}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var vv=0,Qt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.attrId=++vv,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${H({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Qt.styles=pv;a([I(".tab")],Qt.prototype,"tab",2);a([h({reflect:!0})],Qt.prototype,"panel",2);a([h({type:Boolean,reflect:!0})],Qt.prototype,"active",2);a([h({type:Boolean})],Qt.prototype,"closable",2);a([h({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);a([T("active")],Qt.prototype,"handleActiveChange",1);a([T("disabled")],Qt.prototype,"handleDisabledChange",1);Qt=a([M("sl-tab")],Qt);F({tagName:"sl-tab",elementClass:Qt,react:N,events:{onSlClose:"sl-close"}});var yv=B`
  ${V}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function bv(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var iu=new Set;function wv(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Wo(e){if(iu.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=wv();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ko(e){iu.delete(e),iu.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function ou(e,t,r="vertical",i="smooth"){const o=bv(e,t),n=o.top+t.scrollTop,s=o.left+t.scrollLeft,l=t.scrollLeft,u=t.scrollLeft+t.offsetWidth,c=t.scrollTop,m=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>u&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<c?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>m&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}var dt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.allSettled([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,i)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(s=>s.matches(":focus")),n=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(o);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&ou(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=se({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ou(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),s=o.slice(0,o.indexOf(e)).reduce((l,u)=>({left:l.left+u.clientWidth,top:l.top+u.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${H({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};dt.styles=yv;a([I(".tab-group")],dt.prototype,"tabGroup",2);a([I(".tab-group__body")],dt.prototype,"body",2);a([I(".tab-group__nav")],dt.prototype,"nav",2);a([I(".tab-group__indicator")],dt.prototype,"indicator",2);a([j()],dt.prototype,"hasScrollControls",2);a([h()],dt.prototype,"placement",2);a([h()],dt.prototype,"activation",2);a([h({attribute:"no-scroll-controls",type:Boolean})],dt.prototype,"noScrollControls",2);a([T("noScrollControls",{waitUntilFirstUpdate:!0})],dt.prototype,"updateScrollControls",1);a([T("placement",{waitUntilFirstUpdate:!0})],dt.prototype,"syncIndicator",1);dt=a([M("sl-tab-group")],dt);F({tagName:"sl-tab-group",elementClass:dt,react:N,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"}});var _v=B`
  ${V}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,xv=0,mi=class extends R{constructor(){super(...arguments),this.attrId=++xv,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${H({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};mi.styles=_v;a([h({reflect:!0})],mi.prototype,"name",2);a([h({type:Boolean,reflect:!0})],mi.prototype,"active",2);a([T("active")],mi.prototype,"handleActiveChange",1);mi=a([M("sl-tab-panel")],mi);F({tagName:"sl-tab-panel",elementClass:mi,react:N,events:{}});var kv=B`
  ${V}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,jr=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${H({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};jr.styles=kv;a([h({reflect:!0})],jr.prototype,"variant",2);a([h({reflect:!0})],jr.prototype,"size",2);a([h({type:Boolean,reflect:!0})],jr.prototype,"pill",2);a([h({type:Boolean})],jr.prototype,"removable",2);jr=a([M("sl-tag")],jr);F({tagName:"sl-tag",elementClass:jr,react:N,events:{onSlRemove:"sl-remove"}});var Cv=B`
  ${V}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,Uf=new Map,Sv=new WeakMap;function $v(e){return e??{keyframes:[],options:{duration:0}}}function Ud(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function oe(e,t){Uf.set(e,$v(t))}function _e(e,t,r){const i=Sv.get(e);if(i!=null&&i[t])return Ud(i[t],r.dir);const o=Uf.get(t);return o?Ud(o,r.dir):{keyframes:[],options:{duration:0}}}function tt(e,t){return new Promise(r=>{function i(o){o.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}function xe(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Ge(se({},r),{duration:mc()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Hd(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function mc(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ze(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function Us(e,t){return e.map(r=>Ge(se({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var Oe=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const e=Hd(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}}handleMouseOut(){if(this.hasTrigger("hover")){const e=Hd(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await ze(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=_e(this,"tooltip.show",{dir:this.localize.dir()});await xe(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await ze(this.body);const{keyframes:e,options:t}=_e(this,"tooltip.hide",{dir:this.localize.dir()});await xe(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${H({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open?"polite":"off"}
        >
          ${this.content}
        </slot>
      </sl-popup>
    `}};Oe.styles=Cv;a([I("slot:not([name])")],Oe.prototype,"defaultSlot",2);a([I(".tooltip__body")],Oe.prototype,"body",2);a([I("sl-popup")],Oe.prototype,"popup",2);a([h()],Oe.prototype,"content",2);a([h()],Oe.prototype,"placement",2);a([h({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);a([h({type:Number})],Oe.prototype,"distance",2);a([h({type:Boolean,reflect:!0})],Oe.prototype,"open",2);a([h({type:Number})],Oe.prototype,"skidding",2);a([h()],Oe.prototype,"trigger",2);a([h({type:Boolean})],Oe.prototype,"hoist",2);a([T("open",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleOpenChange",1);a([T(["content","distance","hoist","placement","skidding"])],Oe.prototype,"handleOptionsChange",1);a([T("disabled")],Oe.prototype,"handleDisabledChange",1);Oe=a([M("sl-tooltip")],Oe);oe("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});oe("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});F({tagName:"sl-tooltip",elementClass:Oe,react:N,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});var zn=B`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,zv=B`
  ${V}
  ${zn}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,Ev=e=>e.strings===void 0,Av={},Tv=(e,t=Av)=>e._$AH=t,gi=fa(class extends ma{constructor(e){if(super(e),e.type!==hr.PROPERTY&&e.type!==hr.ATTRIBUTE&&e.type!==hr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ev(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===yt||t===we)return t;const r=e.element,i=e.name;if(e.type===hr.PROPERTY){if(t===r[i])return yt}else if(e.type===hr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return yt}else if(e.type===hr.ATTRIBUTE&&r.getAttribute(i)===t+"")return yt;return Tv(e),t}});/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Si=(e="value")=>(t,r)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,s,l){var u;const c=i.getPropertyOptions(e),m=typeof c.attribute=="string"?c.attribute:e;if(n===m){const d=c.converter||mn,v=(typeof d=="function"?d:(u=d==null?void 0:d.fromAttribute)!=null?u:mn.fromAttribute)(l,c.type);this[e]!==v&&(this[r]=v)}o.call(this,n,s,l)}},$o=new WeakMap,zo=new WeakMap,el=new WeakSet,Kn=new WeakMap,xr=class{constructor(e,t){(this.host=e).addController(this),this.options=se({form:r=>{if(r.hasAttribute("form")&&r.getAttribute("form")!==""){const i=r.getRootNode(),o=r.getAttribute("form");if(o)return i.getElementById(o)}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Kn.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Kn.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,$o.has(this.form)?$o.get(this.form).add(this.host):$o.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),zo.has(this.form)||(zo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=$o.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),zo.has(this.form)&&(this.form.reportValidity=zo.get(this.form),zo.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,i.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=$o.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Kn.set(this.host,[])}handleInteraction(e){const t=Kn.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){t?el.add(e):el.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!el.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ga=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Lv=Object.freeze(Ge(se({},ga),{valid:!1,valueMissing:!0})),Iv=Object.freeze(Ge(se({},ga),{valid:!1,customError:!0})),O=e=>e??we;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Ft=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Dv(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var Z=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ft(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${O(this.name)}
              .value=${gi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${O(this.placeholder)}
              rows=${O(this.rows)}
              minlength=${O(this.minlength)}
              maxlength=${O(this.maxlength)}
              autocapitalize=${O(this.autocapitalize)}
              autocorrect=${O(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${O(this.spellcheck)}
              enterkeyhint=${O(this.enterkeyhint)}
              inputmode=${O(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};Z.styles=zv;a([I(".textarea__control")],Z.prototype,"input",2);a([j()],Z.prototype,"hasFocus",2);a([h()],Z.prototype,"title",2);a([h()],Z.prototype,"name",2);a([h()],Z.prototype,"value",2);a([h({reflect:!0})],Z.prototype,"size",2);a([h({type:Boolean,reflect:!0})],Z.prototype,"filled",2);a([h()],Z.prototype,"label",2);a([h({attribute:"help-text"})],Z.prototype,"helpText",2);a([h()],Z.prototype,"placeholder",2);a([h({type:Number})],Z.prototype,"rows",2);a([h()],Z.prototype,"resize",2);a([h({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],Z.prototype,"readonly",2);a([h({reflect:!0})],Z.prototype,"form",2);a([h({type:Boolean,reflect:!0})],Z.prototype,"required",2);a([h({type:Number})],Z.prototype,"minlength",2);a([h({type:Number})],Z.prototype,"maxlength",2);a([h()],Z.prototype,"autocapitalize",2);a([h()],Z.prototype,"autocorrect",2);a([h()],Z.prototype,"autocomplete",2);a([h({type:Boolean})],Z.prototype,"autofocus",2);a([h()],Z.prototype,"enterkeyhint",2);a([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],Z.prototype,"spellcheck",2);a([h()],Z.prototype,"inputmode",2);a([Si()],Z.prototype,"defaultValue",2);a([T("disabled",{waitUntilFirstUpdate:!0})],Z.prototype,"handleDisabledChange",1);a([T("rows",{waitUntilFirstUpdate:!0})],Z.prototype,"handleRowsChange",1);a([T("value",{waitUntilFirstUpdate:!0})],Z.prototype,"handleValueChange",1);Z=a([M("sl-textarea")],Z);F({tagName:"sl-textarea",elementClass:Z,react:N,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var Pv=B`
  ${V}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,Ov=B`
  ${V}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;function jd(e,t,r){return e?t():r==null?void 0:r()}var re=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ze(this.childrenContainer);const{keyframes:e,options:t}=_e(this,"tree-item.collapse",{dir:this.localize.dir()});await xe(this.childrenContainer,Us(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&re.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ze(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:t}=_e(this,"tree-item.expand",{dir:this.localize.dir()});await xe(this.childrenContainer,Us(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>re.isTreeItem(t)&&(e||!t.disabled)):[]}render(){const e=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return $`
      <div
        part="base"
        class="${H({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${H({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${jd(this.loading,()=>$` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${jd(this.selectable,()=>$`
                <sl-checkbox
                  tabindex="-1"
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${gi(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                ></sl-checkbox>
              `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <slot
          name="children"
          class="tree-item__children"
          part="children"
          role="group"
          @slotchange="${this.handleChildrenSlotChange}"
        ></slot>
      </div>
    `}};re.styles=Ov;a([j()],re.prototype,"indeterminate",2);a([j()],re.prototype,"isLeaf",2);a([j()],re.prototype,"loading",2);a([j()],re.prototype,"selectable",2);a([h({type:Boolean,reflect:!0})],re.prototype,"expanded",2);a([h({type:Boolean,reflect:!0})],re.prototype,"selected",2);a([h({type:Boolean,reflect:!0})],re.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],re.prototype,"lazy",2);a([I("slot:not([name])")],re.prototype,"defaultSlot",2);a([I("slot[name=children]")],re.prototype,"childrenSlot",2);a([I(".tree-item__item")],re.prototype,"itemElement",2);a([I(".tree-item__children")],re.prototype,"childrenContainer",2);a([I(".tree-item__expand-button slot")],re.prototype,"expandButtonSlot",2);a([T("loading",{waitUntilFirstUpdate:!0})],re.prototype,"handleLoadingChange",1);a([T("disabled")],re.prototype,"handleDisabledChange",1);a([T("selected")],re.prototype,"handleSelectedChange",1);a([T("expanded",{waitUntilFirstUpdate:!0})],re.prototype,"handleExpandedChange",1);a([T("expanded",{waitUntilFirstUpdate:!0})],re.prototype,"handleExpandAnimation",1);a([T("lazy",{waitUntilFirstUpdate:!0})],re.prototype,"handleLazyChange",1);re=a([M("sl-tree-item")],re);oe("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});oe("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});/*! Bundled license information:

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function Ae(e,t,r){const i=o=>Object.is(o,-0)?0:o;return e<t?i(t):e>r?i(r):i(e)}function Wd(e,t=!1){function r(n){const s=n.getChildrenItems({includeDisabled:!1});if(s.length){const l=s.every(c=>c.selected),u=s.every(c=>!c.selected&&!c.indeterminate);n.selected=l,n.indeterminate=!l&&!u}}function i(n){const s=n.parentElement;re.isTreeItem(s)&&(r(s),i(s))}function o(n){for(const s of n.getChildrenItems())s.selected=t?n.selected||s.selected:!s.disabled&&n.selected,o(s);t&&r(n)}o(e),i(e)}var wr=class extends R{constructor(){super(...arguments),this.selection="single",this.localize=new ie(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`);r===null?e.append(this.getExpandButtonIcon(t)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(t))})}}async connectedCallback(){super.connectedCallback(),this.handleTreeChanged=this.handleTreeChanged.bind(this),this.handleFocusIn=this.handleFocusIn.bind(this),this.handleFocusOut=this.handleFocusOut.bind(this),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut),this.removeEventListener("sl-lazy-change",this.handleSlotChange)}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}handleTreeChanged(e){for(const t of e){const r=[...t.addedNodes].filter(re.isTreeItem),i=[...t.removedNodes].filter(re.isTreeItem);r.forEach(this.initTreeItem),i.includes(this.lastFocusedItem)&&this.focusItem(this.getFocusableItems()[0])}}syncTreeItems(e){const t=this.getAllTreeItems();if(this.selection==="multiple")Wd(e);else for(const r of t)r!==e&&(r.selected=!1)}selectItem(e){const t=[...this.selectedItems];this.selection==="multiple"?(e.selected=!e.selected,e.lazy&&(e.expanded=!0),this.syncTreeItems(e)):this.selection==="single"||e.isLeaf?(e.expanded=!e.expanded,e.selected=!0,this.syncTreeItems(e)):this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(i=>!t.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(u=>u.matches(":focus")),n=t[o],s=u=>{const c=t[Ae(u,0,t.length-1)];this.focusItem(c)},l=u=>{n.expanded=u};e.key==="ArrowDown"?s(o+1):e.key==="ArrowUp"?s(o-1):r&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!n||n.disabled||n.expanded||n.isLeaf&&!n.lazy?s(o+1):l(!0):r&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!n||n.disabled||n.isLeaf||!n.expanded?s(o-1):l(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(n.disabled||this.selectItem(n))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),i=e.composedPath().some(o=>{var n;return(n=o==null?void 0:o.classList)==null?void 0:n.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(this.selection==="multiple"&&i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleFocusOut(e){const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)}handleFocusIn(e){const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),re.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>Wd(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var i;if(r.disabled)return!1;const o=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(r),!t.has(r)})}render(){return $`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <slot name="expand-icon" hidden aria-hidden="true"> </slot>
        <slot name="collapse-icon" hidden aria-hidden="true"> </slot>
      </div>
    `}};wr.styles=Pv;a([I("slot:not([name])")],wr.prototype,"defaultSlot",2);a([I("slot[name=expand-icon]")],wr.prototype,"expandedIconSlot",2);a([I("slot[name=collapse-icon]")],wr.prototype,"collapsedIconSlot",2);a([h()],wr.prototype,"selection",2);a([T("selection")],wr.prototype,"handleSelectionChange",1);wr=a([M("sl-tree")],wr);F({tagName:"sl-tree",elementClass:wr,react:N,events:{onSlSelectionChange:"sl-selection-change"}});F({tagName:"sl-tree-item",elementClass:re,react:N,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"}});var Rv=B`
  ${V}
  ${zn}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,pe=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this),this.hasSlotController=new Ft(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",n=t*e;if(o){const s=`${t-n}px + ${e} * ${i}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${i} / 2))`}else{const s=`${n}px - ${e} * ${i}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${O(this.name)}
              ?disabled=${this.disabled}
              min=${O(this.min)}
              max=${O(this.max)}
              step=${O(this.step)}
              .value=${gi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?$`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};pe.styles=Rv;a([I(".range__control")],pe.prototype,"input",2);a([I(".range__tooltip")],pe.prototype,"output",2);a([j()],pe.prototype,"hasFocus",2);a([j()],pe.prototype,"hasTooltip",2);a([h()],pe.prototype,"title",2);a([h()],pe.prototype,"name",2);a([h({type:Number})],pe.prototype,"value",2);a([h()],pe.prototype,"label",2);a([h({attribute:"help-text"})],pe.prototype,"helpText",2);a([h({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);a([h({type:Number})],pe.prototype,"min",2);a([h({type:Number})],pe.prototype,"max",2);a([h({type:Number})],pe.prototype,"step",2);a([h()],pe.prototype,"tooltip",2);a([h({attribute:!1})],pe.prototype,"tooltipFormatter",2);a([h({reflect:!0})],pe.prototype,"form",2);a([Si()],pe.prototype,"defaultValue",2);a([Nf({passive:!0})],pe.prototype,"handleThumbDragStart",1);a([T("value",{waitUntilFirstUpdate:!0})],pe.prototype,"handleValueChange",1);a([T("disabled",{waitUntilFirstUpdate:!0})],pe.prototype,"handleDisabledChange",1);a([T("hasTooltip",{waitUntilFirstUpdate:!0})],pe.prototype,"syncRange",1);pe=a([M("sl-range")],pe);F({tagName:"sl-range",elementClass:pe,react:N,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var Nv=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ar=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:i,value:o}=Nv.find(n=>Math.abs(r)<n.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let n;i==="minute"?n=qn("second"):i==="hour"?n=qn("minute"):i==="day"?n=qn("hour"):n=qn("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),n)}return $` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};a([j()],ar.prototype,"isoTime",2);a([j()],ar.prototype,"relativeTime",2);a([j()],ar.prototype,"titleTime",2);a([h()],ar.prototype,"date",2);a([h()],ar.prototype,"format",2);a([h()],ar.prototype,"numeric",2);a([h({type:Boolean})],ar.prototype,"sync",2);ar=a([M("sl-relative-time")],ar);function qn(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}F({tagName:"sl-relative-time",elementClass:ar,react:N,events:{}});var Mv=B`
  ${V}

  :host {
    display: contents;
  }
`,ao=class extends R{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};ao.styles=Mv;a([h({type:Boolean,reflect:!0})],ao.prototype,"disabled",2);a([T("disabled",{waitUntilFirstUpdate:!0})],ao.prototype,"handleDisabledChange",1);ao=a([M("sl-resize-observer")],ao);F({tagName:"sl-resize-observer",elementClass:ao,react:N,events:{onSlResize:"sl-resize"}});var Fv=B`
  ${V}
  ${zn}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,X=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ft(this,"help-text","label"),this.localize=new ie(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.handleDocumentFocusIn=this.handleDocumentFocusIn.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleDocumentFocusIn(e){const t=e.composedPath();this&&!t.includes(this)&&this.hide()}handleDocumentKeyDown(e){const t=e.target,r=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(r||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),n=o.indexOf(this.currentOption);let s=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=n+1,s>o.length-1&&(s=0)):e.key==="ArrowUp"?(s=n-1,s<0&&(s=o.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=o.length-1),this.setCurrentOption(o[s])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of o)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}}handleDocumentMouseDown(e){const t=e.composedPath();this&&!t.includes(this)&&this.hide()}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),i=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(i=>r.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,i;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ze(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=_e(this,"select.show",{dir:this.localize.dir()});await xe(this.popup.popup,e,t),this.currentOption&&ou(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ze(this);const{keyframes:e,options:t}=_e(this,"select.hide",{dir:this.localize.dir()});await xe(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,tt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,tt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${H({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?$`
                    <div part="tags" class="select__tags">
                      ${this.selectedOptions.map((s,l)=>l<this.maxOptionsVisible||this.maxOptionsVisible<=0?$`
                            <sl-tag
                              part="tag"
                              exportparts="
                                base:tag__base,
                                content:tag__content,
                                remove-button:tag__remove-button,
                                remove-button__base:tag__remove-button__base
                              "
                              ?pill=${this.pill}
                              size=${this.size}
                              removable
                              @sl-remove=${u=>this.handleTagRemove(u,s)}
                            >
                              ${s.getTextLabel()}
                            </sl-tag>
                          `:l===this.maxOptionsVisible?$` <sl-tag size=${this.size}> +${this.selectedOptions.length-l} </sl-tag> `:null)}
                    </div>
                  `:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </div>
    `}};X.styles=Fv;a([I(".select")],X.prototype,"popup",2);a([I(".select__combobox")],X.prototype,"combobox",2);a([I(".select__display-input")],X.prototype,"displayInput",2);a([I(".select__value-input")],X.prototype,"valueInput",2);a([I(".select__listbox")],X.prototype,"listbox",2);a([j()],X.prototype,"hasFocus",2);a([j()],X.prototype,"displayLabel",2);a([j()],X.prototype,"currentOption",2);a([j()],X.prototype,"selectedOptions",2);a([h()],X.prototype,"name",2);a([h({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],X.prototype,"value",2);a([Si()],X.prototype,"defaultValue",2);a([h()],X.prototype,"size",2);a([h()],X.prototype,"placeholder",2);a([h({type:Boolean,reflect:!0})],X.prototype,"multiple",2);a([h({attribute:"max-options-visible",type:Number})],X.prototype,"maxOptionsVisible",2);a([h({type:Boolean,reflect:!0})],X.prototype,"disabled",2);a([h({type:Boolean})],X.prototype,"clearable",2);a([h({type:Boolean,reflect:!0})],X.prototype,"open",2);a([h({type:Boolean})],X.prototype,"hoist",2);a([h({type:Boolean,reflect:!0})],X.prototype,"filled",2);a([h({type:Boolean,reflect:!0})],X.prototype,"pill",2);a([h()],X.prototype,"label",2);a([h({reflect:!0})],X.prototype,"placement",2);a([h({attribute:"help-text"})],X.prototype,"helpText",2);a([h({reflect:!0})],X.prototype,"form",2);a([h({type:Boolean,reflect:!0})],X.prototype,"required",2);a([T("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);a([T("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);a([T("open",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpenChange",1);X=a([M("sl-select")],X);oe("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});F({tagName:"sl-select",elementClass:X,react:N,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"}});var Bv=B`
  ${V}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,yn=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${H({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};yn.styles=Bv;a([h()],yn.prototype,"effect",2);yn=a([M("sl-skeleton")],yn);F({tagName:"sl-skeleton",elementClass:yn,react:N,events:{}});var Vv=B`
  ${V}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Hs=class extends R{constructor(){super(...arguments),this.localize=new ie(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Hs.styles=Vv;Hs=a([M("sl-spinner")],Hs);var Uv=F({tagName:"sl-spinner",elementClass:Hs,react:N,events:{}}),Hv=B`
  ${V}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function qo(e,t){function r(o){const n=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,l=n.left+s.pageXOffset,u=n.top+s.pageYOffset,c=o.pageX-l,m=o.pageY-u;t!=null&&t.onMove&&t.onMove(c,m)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var rt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),qo(this,{onMove:(r,i)=>{let o=this.vertical?i:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(s=>{let l;s.endsWith("%")?l=this.size*(parseFloat(s)/100):l=parseFloat(s),t&&!this.vertical&&(l=this.size-l),o>=l-this.snapThreshold&&o<=l+this.snapThreshold&&(o=l)}),this.position=Ae(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Ae(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${i}`:r&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${o}`,this.style[t]="",$`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${O(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};rt.styles=Hv;a([I(".divider")],rt.prototype,"divider",2);a([h({type:Number,reflect:!0})],rt.prototype,"position",2);a([h({attribute:"position-in-pixels",type:Number})],rt.prototype,"positionInPixels",2);a([h({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);a([h({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);a([h()],rt.prototype,"primary",2);a([h()],rt.prototype,"snap",2);a([h({type:Number,attribute:"snap-threshold"})],rt.prototype,"snapThreshold",2);a([T("position")],rt.prototype,"handlePositionChange",1);a([T("positionInPixels")],rt.prototype,"handlePositionInPixelsChange",1);a([T("vertical")],rt.prototype,"handleVerticalChange",1);rt=a([M("sl-split-panel")],rt);F({tagName:"sl-split-panel",elementClass:rt,react:N,events:{onSlReposition:"sl-reposition"}});var jv=B`
  ${V}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,He=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${H({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${O(this.value)}
          .checked=${gi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <slot part="label" class="switch__label"></slot>
      </label>
    `}};He.styles=jv;a([I('input[type="checkbox"]')],He.prototype,"input",2);a([j()],He.prototype,"hasFocus",2);a([h()],He.prototype,"title",2);a([h()],He.prototype,"name",2);a([h()],He.prototype,"value",2);a([h({reflect:!0})],He.prototype,"size",2);a([h({type:Boolean,reflect:!0})],He.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],He.prototype,"checked",2);a([Si("checked")],He.prototype,"defaultChecked",2);a([h({reflect:!0})],He.prototype,"form",2);a([h({type:Boolean,reflect:!0})],He.prototype,"required",2);a([T("checked",{waitUntilFirstUpdate:!0})],He.prototype,"handleCheckedChange",1);a([T("disabled",{waitUntilFirstUpdate:!0})],He.prototype,"handleDisabledChange",1);He=a([M("sl-switch")],He);F({tagName:"sl-switch",elementClass:He,react:N,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"}});var Wv=B`
  ${V}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;function mo(e){return e.split("-")[1]}function gc(e){return e==="y"?"height":"width"}function Br(e){return e.split("-")[0]}function go(e){return["top","bottom"].includes(Br(e))?"x":"y"}function Kd(e,t,r){let{reference:i,floating:o}=e;const n=i.x+i.width/2-o.width/2,s=i.y+i.height/2-o.height/2,l=go(t),u=gc(l),c=i[u]/2-o[u]/2,m=l==="x";let d;switch(Br(t)){case"top":d={x:n,y:i.y-o.height};break;case"bottom":d={x:n,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:s};break;case"left":d={x:i.x-o.width,y:s};break;default:d={x:i.x,y:i.y}}switch(mo(t)){case"start":d[l]-=c*(r&&m?-1:1);break;case"end":d[l]+=c*(r&&m?-1:1)}return d}var Kv=async(e,t,r)=>{const{placement:i="bottom",strategy:o="absolute",middleware:n=[],platform:s}=r,l=n.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:m,y:d}=Kd(c,i,u),p=i,v={},y=0;for(let _=0;_<l.length;_++){const{name:S,fn:b}=l[_],{x:f,y:g,data:w,reset:x}=await b({x:m,y:d,initialPlacement:i,placement:p,strategy:o,middlewareData:v,rects:c,platform:s,elements:{reference:e,floating:t}});m=f??m,d=g??d,v=Ge(se({},v),{[S]:se(se({},v[S]),w)}),x&&y<=50&&(y++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(c=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:m,y:d}=Kd(c,p,u)),_=-1)}return{x:m,y:d,placement:p,strategy:o,middlewareData:v}};function Hf(e){return typeof e!="number"?function(t){return se({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function nu(e){return Ge(se({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function vc(e,t){var r;t===void 0&&(t={});const{x:i,y:o,platform:n,rects:s,elements:l,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:m="viewport",elementContext:d="floating",altBoundary:p=!1,padding:v=0}=t,y=Hf(v),_=l[p?d==="floating"?"reference":"floating":d],S=nu(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(_)))==null||r?_:_.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:m,strategy:u})),b=d==="floating"?Ge(se({},s.floating),{x:i,y:o}):s.reference,f=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),g=await(n.isElement==null?void 0:n.isElement(f))&&await(n.getScale==null?void 0:n.getScale(f))||{x:1,y:1},w=nu(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:f,strategy:u}):b);return{top:(S.top-w.top+y.top)/g.y,bottom:(w.bottom-S.bottom+y.bottom)/g.y,left:(S.left-w.left+y.left)/g.x,right:(w.right-S.right+y.right)/g.x}}var su=Math.min,ri=Math.max;function au(e,t,r){return ri(e,su(t,r))}var qv=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:i=0}=e||{},{x:o,y:n,placement:s,rects:l,platform:u}=t;if(r==null)return{};const c=Hf(i),m={x:o,y:n},d=go(s),p=gc(d),v=await u.getDimensions(r),y=d==="y"?"top":"left",_=d==="y"?"bottom":"right",S=l.reference[p]+l.reference[d]-m[d]-l.floating[p],b=m[d]-l.reference[d],f=await(u.getOffsetParent==null?void 0:u.getOffsetParent(r));let g=f?d==="y"?f.clientHeight||0:f.clientWidth||0:0;g===0&&(g=l.floating[p]);const w=S/2-b/2,x=c[y],k=g-v[p]-c[_],C=g/2-v[p]/2+w,z=au(x,C,k),L=mo(s)!=null&&C!=z&&l.reference[p]/2-(C<x?c[y]:c[_])-v[p]/2<0;return{[d]:m[d]-(L?C<x?x-C:k-C:0),data:{[d]:z,centerOffset:C-z}}}}),Yv=["top","right","bottom","left"];Yv.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var Qv={left:"right",right:"left",bottom:"top",top:"bottom"};function js(e){return e.replace(/left|right|bottom|top/g,t=>Qv[t])}function Xv(e,t,r){r===void 0&&(r=!1);const i=mo(e),o=go(e),n=gc(o);let s=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=js(s)),{main:s,cross:js(s)}}var Gv={start:"end",end:"start"};function tl(e){return e.replace(/start|end/g,t=>Gv[t])}var Zv=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:i,middlewareData:o,rects:n,initialPlacement:s,platform:l,elements:u}=t,c=e,{mainAxis:m=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:_=!0}=c,S=pc(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),b=Br(i),f=Br(s)===s,g=await(l.isRTL==null?void 0:l.isRTL(u.floating)),w=p||(f||!_?[js(s)]:function(J){const ce=js(J);return[tl(J),ce,tl(ce)]}(s));p||y==="none"||w.push(...function(J,ce,Ne,Me){const Ke=mo(J);let Ie=function(D,W,q){const fe=["left","right"],Ce=["right","left"],$i=["top","bottom"],lr=["bottom","top"];switch(D){case"top":case"bottom":return q?W?Ce:fe:W?fe:Ce;case"left":case"right":return W?$i:lr;default:return[]}}(Br(J),Ne==="start",Me);return Ke&&(Ie=Ie.map(D=>D+"-"+Ke),ce&&(Ie=Ie.concat(Ie.map(tl)))),Ie}(s,_,y,g));const x=[s,...w],k=await vc(t,S),C=[];let z=((r=o.flip)==null?void 0:r.overflows)||[];if(m&&C.push(k[b]),d){const{main:J,cross:ce}=Xv(i,n,g);C.push(k[J],k[ce])}if(z=[...z,{placement:i,overflows:C}],!C.every(J=>J<=0)){var L,A;const J=(((L=o.flip)==null?void 0:L.index)||0)+1,ce=x[J];if(ce)return{data:{index:J,overflows:z},reset:{placement:ce}};let Ne=(A=z.filter(Me=>Me.overflows[0]<=0).sort((Me,Ke)=>Me.overflows[1]-Ke.overflows[1])[0])==null?void 0:A.placement;if(!Ne)switch(v){case"bestFit":{var ne;const Me=(ne=z.map(Ke=>[Ke.placement,Ke.overflows.filter(Ie=>Ie>0).reduce((Ie,D)=>Ie+D,0)]).sort((Ke,Ie)=>Ke[1]-Ie[1])[0])==null?void 0:ne[0];Me&&(Ne=Me);break}case"initialPlacement":Ne=s}if(i!==Ne)return{reset:{placement:Ne}}}return{}}}},Jv=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:i}=t,o=await async function(n,s){const{placement:l,platform:u,elements:c}=n,m=await(u.isRTL==null?void 0:u.isRTL(c.floating)),d=Br(l),p=mo(l),v=go(l)==="x",y=["left","top"].includes(d)?-1:1,_=m&&v?-1:1,S=typeof s=="function"?s(n):s;let{mainAxis:b,crossAxis:f,alignmentAxis:g}=typeof S=="number"?{mainAxis:S,crossAxis:0,alignmentAxis:null}:se({mainAxis:0,crossAxis:0,alignmentAxis:null},S);return p&&typeof g=="number"&&(f=p==="end"?-1*g:g),v?{x:f*_,y:b*y}:{x:b*y,y:f*_}}(t,e);return{x:r+o.x,y:i+o.y,data:o}}}};function ey(e){return e==="x"?"y":"x"}var ty=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:o}=t,n=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:u={fn:b=>{let{x:f,y:g}=b;return{x:f,y:g}}}}=n,c=pc(n,["mainAxis","crossAxis","limiter"]),m={x:r,y:i},d=await vc(t,c),p=go(Br(o)),v=ey(p);let y=m[p],_=m[v];if(s){const b=p==="y"?"bottom":"right";y=au(y+d[p==="y"?"top":"left"],y,y-d[b])}if(l){const b=v==="y"?"bottom":"right";_=au(_+d[v==="y"?"top":"left"],_,_-d[b])}const S=u.fn(Ge(se({},t),{[p]:y,[v]:_}));return Ge(se({},S),{data:{x:S.x-r,y:S.y-i}})}}},qd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:o,elements:n}=t,s=e,{apply:l=()=>{}}=s,u=pc(s,["apply"]),c=await vc(t,u),m=Br(r),d=mo(r),p=go(r)==="x",{width:v,height:y}=i.floating;let _,S;m==="top"||m==="bottom"?(_=m,S=d===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(S=m,_=d==="end"?"top":"bottom");const b=y-c[_],f=v-c[S];let g=b,w=f;if(p?w=su(v-c.right-c.left,f):g=su(y-c.bottom-c.top,b),!t.middlewareData.shift&&!d){const k=ri(c.left,0),C=ri(c.right,0),z=ri(c.top,0),L=ri(c.bottom,0);p?w=v-2*(k!==0||C!==0?k+C:ri(c.left,c.right)):g=y-2*(z!==0||L!==0?z+L:ri(c.top,c.bottom))}await l(Ge(se({},t),{availableWidth:w,availableHeight:g}));const x=await o.getDimensions(n.floating);return v!==x.width||y!==x.height?{reset:{rects:!0}}:{}}}};function bt(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function nr(e){return bt(e).getComputedStyle(e)}var Yd=Math.min,Yo=Math.max,Ws=Math.round;function jf(e){const t=nr(e);let r=parseFloat(t.width),i=parseFloat(t.height);const o=e.offsetWidth,n=e.offsetHeight,s=Ws(r)!==o||Ws(i)!==n;return s&&(r=o,i=n),{width:r,height:i,fallback:s}}function Wr(e){return Kf(e)?(e.nodeName||"").toLowerCase():""}var Yn;function Wf(){if(Yn)return Yn;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(Yn=e.brands.map(t=>t.brand+"/"+t.version).join(" "),Yn):navigator.userAgent}function sr(e){return e instanceof bt(e).HTMLElement}function qt(e){return e instanceof bt(e).Element}function Kf(e){return e instanceof bt(e).Node}function Qd(e){return typeof ShadowRoot>"u"?!1:e instanceof bt(e).ShadowRoot||e instanceof ShadowRoot}function va(e){const{overflow:t,overflowX:r,overflowY:i,display:o}=nr(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(o)}function ry(e){return["table","td","th"].includes(Wr(e))}function lu(e){const t=/firefox/i.test(Wf()),r=nr(e),i=r.backdropFilter||r.WebkitBackdropFilter;return r.transform!=="none"||r.perspective!=="none"||!!i&&i!=="none"||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"||["transform","perspective"].some(o=>r.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const n=r.contain;return n!=null&&n.includes(o)})}function uu(){return/^((?!chrome|android).)*safari/i.test(Wf())}function yc(e){return["html","body","#document"].includes(Wr(e))}function qf(e){return qt(e)?e:e.contextElement}var Yf={x:1,y:1};function Xi(e){const t=qf(e);if(!sr(t))return Yf;const r=t.getBoundingClientRect(),{width:i,height:o,fallback:n}=jf(t);let s=(n?Ws(r.width):r.width)/i,l=(n?Ws(r.height):r.height)/o;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}function vi(e,t,r,i){var o,n;t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),l=qf(e);let u=Yf;t&&(i?qt(i)&&(u=Xi(i)):u=Xi(e));const c=l?bt(l):window,m=uu()&&r;let d=(s.left+(m&&((o=c.visualViewport)==null?void 0:o.offsetLeft)||0))/u.x,p=(s.top+(m&&((n=c.visualViewport)==null?void 0:n.offsetTop)||0))/u.y,v=s.width/u.x,y=s.height/u.y;if(l){const _=bt(l),S=i&&qt(i)?bt(i):i;let b=_.frameElement;for(;b&&i&&S!==_;){const f=Xi(b),g=b.getBoundingClientRect(),w=getComputedStyle(b);g.x+=(b.clientLeft+parseFloat(w.paddingLeft))*f.x,g.y+=(b.clientTop+parseFloat(w.paddingTop))*f.y,d*=f.x,p*=f.y,v*=f.x,y*=f.y,d+=g.x,p+=g.y,b=bt(b).frameElement}}return{width:v,height:y,top:p,right:d+v,bottom:p+y,left:d,x:d,y:p}}function Vr(e){return((Kf(e)?e.ownerDocument:e.document)||window.document).documentElement}function ya(e){return qt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Qf(e){return vi(Vr(e)).left+ya(e).scrollLeft}function bn(e){if(Wr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Qd(e)&&e.host||Vr(e);return Qd(t)?t.host:t}function Xf(e){const t=bn(e);return yc(t)?t.ownerDocument.body:sr(t)&&va(t)?t:Xf(t)}function Qo(e,t){var r;t===void 0&&(t=[]);const i=Xf(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),n=bt(i);return o?t.concat(n,n.visualViewport||[],va(i)?i:[]):t.concat(i,Qo(i))}function Xd(e,t,r){let i;if(t==="viewport")i=function(s,l){const u=bt(s),c=Vr(s),m=u.visualViewport;let d=c.clientWidth,p=c.clientHeight,v=0,y=0;if(m){d=m.width,p=m.height;const _=uu();(!_||_&&l==="fixed")&&(v=m.offsetLeft,y=m.offsetTop)}return{width:d,height:p,x:v,y}}(e,r);else if(t==="document")i=function(s){const l=Vr(s),u=ya(s),c=s.ownerDocument.body,m=Yo(l.scrollWidth,l.clientWidth,c.scrollWidth,c.clientWidth),d=Yo(l.scrollHeight,l.clientHeight,c.scrollHeight,c.clientHeight);let p=-u.scrollLeft+Qf(s);const v=-u.scrollTop;return nr(c).direction==="rtl"&&(p+=Yo(l.clientWidth,c.clientWidth)-m),{width:m,height:d,x:p,y:v}}(Vr(e));else if(qt(t))i=function(s,l){const u=vi(s,!0,l==="fixed"),c=u.top+s.clientTop,m=u.left+s.clientLeft,d=sr(s)?Xi(s):{x:1,y:1};return{width:s.clientWidth*d.x,height:s.clientHeight*d.y,x:m*d.x,y:c*d.y}}(t,r);else{const s=se({},t);if(uu()){var o,n;const l=bt(e);s.x-=((o=l.visualViewport)==null?void 0:o.offsetLeft)||0,s.y-=((n=l.visualViewport)==null?void 0:n.offsetTop)||0}i=s}return nu(i)}function Gd(e,t){return sr(e)&&nr(e).position!=="fixed"?t?t(e):e.offsetParent:null}function Zd(e,t){const r=bt(e);let i=Gd(e,t);for(;i&&ry(i)&&nr(i).position==="static";)i=Gd(i,t);return i&&(Wr(i)==="html"||Wr(i)==="body"&&nr(i).position==="static"&&!lu(i))?r:i||function(o){let n=bn(o);for(;sr(n)&&!yc(n);){if(lu(n))return n;n=bn(n)}return null}(e)||r}function iy(e,t,r){const i=sr(t),o=Vr(t),n=vi(e,!0,r==="fixed",t);let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&r!=="fixed")if((Wr(t)!=="body"||va(o))&&(s=ya(t)),sr(t)){const u=vi(t,!0);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else o&&(l.x=Qf(o));return{x:n.left+s.scrollLeft-l.x,y:n.top+s.scrollTop-l.y,width:n.width,height:n.height}}var ds={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:o}=e;const n=r==="clippingAncestors"?function(c,m){const d=m.get(c);if(d)return d;let p=Qo(c).filter(S=>qt(S)&&Wr(S)!=="body"),v=null;const y=nr(c).position==="fixed";let _=y?bn(c):c;for(;qt(_)&&!yc(_);){const S=nr(_),b=lu(_);S.position==="fixed"?v=null:(y?b||v:b||S.position!=="static"||!v||!["absolute","fixed"].includes(v.position))?v=S:p=p.filter(f=>f!==_),_=bn(_)}return m.set(c,p),p}(t,this._c):[].concat(r),s=[...n,i],l=s[0],u=s.reduce((c,m)=>{const d=Xd(t,m,o);return c.top=Yo(d.top,c.top),c.right=Yd(d.right,c.right),c.bottom=Yd(d.bottom,c.bottom),c.left=Yo(d.left,c.left),c},Xd(t,l,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:i}=e;const o=sr(r),n=Vr(r);if(r===n)return t;let s={scrollLeft:0,scrollTop:0},l={x:1,y:1};const u={x:0,y:0};if((o||!o&&i!=="fixed")&&((Wr(r)!=="body"||va(n))&&(s=ya(r)),sr(r))){const c=vi(r);l=Xi(r),u.x=c.x+r.clientLeft,u.y=c.y+r.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+u.x,y:t.y*l.y-s.scrollTop*l.y+u.y}},isElement:qt,getDimensions:function(e){return sr(e)?jf(e):e.getBoundingClientRect()},getOffsetParent:Zd,getDocumentElement:Vr,getScale:Xi,async getElementRects(e){let{reference:t,floating:r,strategy:i}=e;const o=this.getOffsetParent||Zd,n=this.getDimensions;return{reference:iy(t,await o(r),i),floating:se({x:0,y:0},await n(r))}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>nr(e).direction==="rtl"};function oy(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:s=!0,animationFrame:l=!1}=i,u=o&&!l,c=u||n?[...qt(e)?Qo(e):e.contextElement?Qo(e.contextElement):[],...Qo(t)]:[];c.forEach(v=>{u&&v.addEventListener("scroll",r,{passive:!0}),n&&v.addEventListener("resize",r)});let m,d=null;if(s){let v=!0;d=new ResizeObserver(()=>{v||r(),v=!1}),qt(e)&&!l&&d.observe(e),qt(e)||!e.contextElement||l||d.observe(e.contextElement),d.observe(t)}let p=l?vi(e):null;return l&&function v(){const y=vi(e);!p||y.x===p.x&&y.y===p.y&&y.width===p.width&&y.height===p.height||r(),p=y,m=requestAnimationFrame(v)}(),r(),()=>{var v;c.forEach(y=>{u&&y.removeEventListener("scroll",r),n&&y.removeEventListener("resize",r)}),(v=d)==null||v.disconnect(),d=null,l&&cancelAnimationFrame(m)}}var ny=(e,t,r)=>{const i=new Map,o=se({platform:ds},r),n=Ge(se({},o.platform),{_c:i});return Kv(e,t,Ge(se({},o),{platform:n}))};function sy(e){return ay(e)}function rl(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ay(e){for(let t=e;t;t=rl(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=rl(e);t;t=rl(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}var ae=class extends R{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=oy(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Jv({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(qd({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Zv({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(ty({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(qd({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(qv({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>ds.getOffsetParent(r,sy):ds.getOffsetParent;ny(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ge(se({},ds),{getOffsetParent:t})}).then(({x:r,y:i,middlewareData:o,placement:n})=>{const s=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const u=o.arrow.x,c=o.arrow.y;let m="",d="",p="",v="";if(this.arrowPlacement==="start"){const y=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?y:"",v=s?"":y}else if(this.arrowPlacement==="end"){const y=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":y,v=s?y:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(v=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(v=typeof u=="number"?`${u}px`:"",m=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:m,right:d,bottom:p,left:v,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${H({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ae.styles=Wv;a([I(".popup")],ae.prototype,"popup",2);a([I(".popup__arrow")],ae.prototype,"arrowEl",2);a([h()],ae.prototype,"anchor",2);a([h({type:Boolean,reflect:!0})],ae.prototype,"active",2);a([h({reflect:!0})],ae.prototype,"placement",2);a([h({reflect:!0})],ae.prototype,"strategy",2);a([h({type:Number})],ae.prototype,"distance",2);a([h({type:Number})],ae.prototype,"skidding",2);a([h({type:Boolean})],ae.prototype,"arrow",2);a([h({attribute:"arrow-placement"})],ae.prototype,"arrowPlacement",2);a([h({attribute:"arrow-padding",type:Number})],ae.prototype,"arrowPadding",2);a([h({type:Boolean})],ae.prototype,"flip",2);a([h({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ae.prototype,"flipFallbackPlacements",2);a([h({attribute:"flip-fallback-strategy"})],ae.prototype,"flipFallbackStrategy",2);a([h({type:Object})],ae.prototype,"flipBoundary",2);a([h({attribute:"flip-padding",type:Number})],ae.prototype,"flipPadding",2);a([h({type:Boolean})],ae.prototype,"shift",2);a([h({type:Object})],ae.prototype,"shiftBoundary",2);a([h({attribute:"shift-padding",type:Number})],ae.prototype,"shiftPadding",2);a([h({attribute:"auto-size"})],ae.prototype,"autoSize",2);a([h()],ae.prototype,"sync",2);a([h({type:Object})],ae.prototype,"autoSizeBoundary",2);a([h({attribute:"auto-size-padding",type:Number})],ae.prototype,"autoSizePadding",2);ae=a([M("sl-popup")],ae);F({tagName:"sl-popup",elementClass:ae,react:N,events:{onSlReposition:"sl-reposition"}});var ly=B`
  ${V}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,gt=fa(class extends ma{constructor(e){var t;if(super(e),e.type!==hr.ATTRIBUTE||e.name!=="style"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?r.removeProperty(i):r[i]="")});for(const i in t){const o=t[i];o!=null&&(this.vt.add(i),i.includes("-")?r.setProperty(i,o):r[i]=o)}return yt}});/*! Bundled license information:

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var yi=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return $`
      <div
        part="base"
        class=${H({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${O(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${gt({width:`${this.value}%`})}>
          ${this.indeterminate?"":$` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};yi.styles=ly;a([h({type:Number,reflect:!0})],yi.prototype,"value",2);a([h({type:Boolean,reflect:!0})],yi.prototype,"indeterminate",2);a([h()],yi.prototype,"label",2);yi=a([M("sl-progress-bar")],yi);F({tagName:"sl-progress-bar",elementClass:yi,react:N,events:{}});var uy=B`
  ${V}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,Kr=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Kr.styles=uy;a([I(".progress-ring__indicator")],Kr.prototype,"indicator",2);a([j()],Kr.prototype,"indicatorOffset",2);a([h({type:Number,reflect:!0})],Kr.prototype,"value",2);a([h()],Kr.prototype,"label",2);Kr=a([M("sl-progress-ring")],Kr);F({tagName:"sl-progress-ring",elementClass:Kr,react:N,events:{}});var cy=B`
  ${V}

  :host {
    display: inline-block;
  }
`,Gf=null,Zf=class{};Zf.render=function(e,t){Gf(e,t)};self.QrCreator=Zf;(function(e){function t(l,u,c,m){var d={},p=e(c,u);p.u(l),p.J(),m=m||0;var v=p.h(),y=p.h()+2*m;return d.text=l,d.level=u,d.version=c,d.O=y,d.a=function(_,S){return _-=m,S-=m,0>_||_>=v||0>S||S>=v?!1:p.a(_,S)},d}function r(l,u,c,m,d,p,v,y,_,S){function b(f,g,w,x,k,C,z){f?(l.lineTo(g+C,w+z),l.arcTo(g,w,x,k,p)):l.lineTo(g,w)}v?l.moveTo(u+p,c):l.moveTo(u,c),b(y,m,c,m,d,-p,0),b(_,m,d,u,d,0,-p),b(S,u,d,u,c,p,0),b(v,u,c,m,c,0,p)}function i(l,u,c,m,d,p,v,y,_,S){function b(f,g,w,x){l.moveTo(f+w,g),l.lineTo(f,g),l.lineTo(f,g+x),l.arcTo(f,g,f+w,g,p)}v&&b(u,c,p,p),y&&b(m,c,-p,p),_&&b(m,d,-p,-p),S&&b(u,d,p,-p)}function o(l,u){var c=u.fill;if(typeof c=="string")l.fillStyle=c;else{var m=c.type,d=c.colorStops;if(c=c.position.map(v=>Math.round(v*u.size)),m==="linear-gradient")var p=l.createLinearGradient.apply(l,c);else if(m==="radial-gradient")p=l.createRadialGradient.apply(l,c);else throw Error("Unsupported fill");d.forEach(([v,y])=>{p.addColorStop(v,y)}),l.fillStyle=p}}function n(l,u){e:{var c=u.text,m=u.v,d=u.N,p=u.K,v=u.P;for(d=Math.max(1,d||1),p=Math.min(40,p||40);d<=p;d+=1)try{var y=t(c,m,d,v);break e}catch{}y=void 0}if(!y)return null;for(c=l.getContext("2d"),u.background&&(c.fillStyle=u.background,c.fillRect(u.left,u.top,u.size,u.size)),m=y.O,p=u.size/m,c.beginPath(),v=0;v<m;v+=1)for(d=0;d<m;d+=1){var _=c,S=u.left+d*p,b=u.top+v*p,f=v,g=d,w=y.a,x=S+p,k=b+p,C=f-1,z=f+1,L=g-1,A=g+1,ne=Math.floor(Math.min(.5,Math.max(0,u.R))*p),J=w(f,g),ce=w(C,L),Ne=w(C,g);C=w(C,A);var Me=w(f,A);A=w(z,A),g=w(z,g),z=w(z,L),f=w(f,L),S=Math.round(S),b=Math.round(b),x=Math.round(x),k=Math.round(k),J?r(_,S,b,x,k,ne,!Ne&&!f,!Ne&&!Me,!g&&!Me,!g&&!f):i(_,S,b,x,k,ne,Ne&&f&&ce,Ne&&Me&&C,g&&Me&&A,g&&f&&z)}return o(c,u),c.fill(),l}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Gf=function(l,u){var c={};Object.assign(c,s,l),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,u instanceof HTMLCanvasElement?((u.width!==c.size||u.height!==c.size)&&(u.width=c.size,u.height=c.size),u.getContext("2d").clearRect(0,0,u.width,u.height),n(u,c)):(l=document.createElement("canvas"),l.width=c.size,l.height=c.size,c=n(l,c),u.appendChild(c))}})(function(){function e(u){var c=r.s(u);return{S:function(){return 4},b:function(){return c.length},write:function(m){for(var d=0;d<c.length;d+=1)m.put(c[d],8)}}}function t(){var u=[],c=0,m={B:function(){return u},c:function(d){return(u[Math.floor(d/8)]>>>7-d%8&1)==1},put:function(d,p){for(var v=0;v<p;v+=1)m.m((d>>>p-v-1&1)==1)},f:function(){return c},m:function(d){var p=Math.floor(c/8);u.length<=p&&u.push(0),d&&(u[p]|=128>>>c%8),c+=1}};return m}function r(u,c){function m(f,g){for(var w=-1;7>=w;w+=1)if(!(-1>=f+w||y<=f+w))for(var x=-1;7>=x;x+=1)-1>=g+x||y<=g+x||(v[f+w][g+x]=0<=w&&6>=w&&(x==0||x==6)||0<=x&&6>=x&&(w==0||w==6)||2<=w&&4>=w&&2<=x&&4>=x)}function d(f,g){for(var w=y=4*u+17,x=Array(w),k=0;k<w;k+=1){x[k]=Array(w);for(var C=0;C<w;C+=1)x[k][C]=null}for(v=x,m(0,0),m(y-7,0),m(0,y-7),w=n.G(u),x=0;x<w.length;x+=1)for(k=0;k<w.length;k+=1){C=w[x];var z=w[k];if(v[C][z]==null)for(var L=-2;2>=L;L+=1)for(var A=-2;2>=A;A+=1)v[C+L][z+A]=L==-2||L==2||A==-2||A==2||L==0&&A==0}for(w=8;w<y-8;w+=1)v[w][6]==null&&(v[w][6]=w%2==0);for(w=8;w<y-8;w+=1)v[6][w]==null&&(v[6][w]=w%2==0);for(w=n.w(p<<3|g),x=0;15>x;x+=1)k=!f&&(w>>x&1)==1,v[6>x?x:8>x?x+1:y-15+x][8]=k,v[8][8>x?y-x-1:9>x?15-x:14-x]=k;if(v[y-8][8]=!f,7<=u){for(w=n.A(u),x=0;18>x;x+=1)k=!f&&(w>>x&1)==1,v[Math.floor(x/3)][x%3+y-8-3]=k;for(x=0;18>x;x+=1)k=!f&&(w>>x&1)==1,v[x%3+y-8-3][Math.floor(x/3)]=k}if(_==null){for(f=l.I(u,p),w=t(),x=0;x<S.length;x+=1)k=S[x],w.put(4,4),w.put(k.b(),n.f(4,u)),k.write(w);for(x=k=0;x<f.length;x+=1)k+=f[x].j;if(w.f()>8*k)throw Error("code length overflow. ("+w.f()+">"+8*k+")");for(w.f()+4<=8*k&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*k)&&(w.put(236,8),!(w.f()>=8*k));)w.put(17,8);var ne=0;for(k=x=0,C=Array(f.length),z=Array(f.length),L=0;L<f.length;L+=1){var J=f[L].j,ce=f[L].o-J;for(x=Math.max(x,J),k=Math.max(k,ce),C[L]=Array(J),A=0;A<C[L].length;A+=1)C[L][A]=255&w.B()[A+ne];for(ne+=J,A=n.C(ce),J=i(C[L],A.b()-1).l(A),z[L]=Array(A.b()-1),A=0;A<z[L].length;A+=1)ce=A+J.b()-z[L].length,z[L][A]=0<=ce?J.c(ce):0}for(A=w=0;A<f.length;A+=1)w+=f[A].o;for(w=Array(w),A=ne=0;A<x;A+=1)for(L=0;L<f.length;L+=1)A<C[L].length&&(w[ne]=C[L][A],ne+=1);for(A=0;A<k;A+=1)for(L=0;L<f.length;L+=1)A<z[L].length&&(w[ne]=z[L][A],ne+=1);_=w}for(f=_,w=-1,x=y-1,k=7,C=0,g=n.F(g),z=y-1;0<z;z-=2)for(z==6&&--z;;){for(L=0;2>L;L+=1)v[x][z-L]==null&&(A=!1,C<f.length&&(A=(f[C]>>>k&1)==1),g(x,z-L)&&(A=!A),v[x][z-L]=A,--k,k==-1&&(C+=1,k=7));if(x+=w,0>x||y<=x){x-=w,w=-w;break}}}var p=o[c],v=null,y=0,_=null,S=[],b={u:function(f){f=e(f),S.push(f),_=null},a:function(f,g){if(0>f||y<=f||0>g||y<=g)throw Error(f+","+g);return v[f][g]},h:function(){return y},J:function(){for(var f=0,g=0,w=0;8>w;w+=1){d(!0,w);var x=n.D(b);(w==0||f>x)&&(f=x,g=w)}d(!1,g)}};return b}function i(u,c){if(typeof u.length>"u")throw Error(u.length+"/"+c);var m=function(){for(var p=0;p<u.length&&u[p]==0;)p+=1;for(var v=Array(u.length-p+c),y=0;y<u.length-p;y+=1)v[y]=u[y+p];return v}(),d={c:function(p){return m[p]},b:function(){return m.length},multiply:function(p){for(var v=Array(d.b()+p.b()-1),y=0;y<d.b();y+=1)for(var _=0;_<p.b();_+=1)v[y+_]^=s.i(s.g(d.c(y))+s.g(p.c(_)));return i(v,0)},l:function(p){if(0>d.b()-p.b())return d;for(var v=s.g(d.c(0))-s.g(p.c(0)),y=Array(d.b()),_=0;_<d.b();_+=1)y[_]=d.c(_);for(_=0;_<p.b();_+=1)y[_]^=s.i(s.g(p.c(_))+v);return i(y,0).l(p)}};return d}r.s=function(u){for(var c=[],m=0;m<u.length;m++){var d=u.charCodeAt(m);128>d?c.push(d):2048>d?c.push(192|d>>6,128|d&63):55296>d||57344<=d?c.push(224|d>>12,128|d>>6&63,128|d&63):(m++,d=65536+((d&1023)<<10|u.charCodeAt(m)&1023),c.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return c};var o={L:1,M:0,Q:3,H:2},n=function(){function u(d){for(var p=0;d!=0;)p+=1,d>>>=1;return p}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],m={w:function(d){for(var p=d<<10;0<=u(p)-u(1335);)p^=1335<<u(p)-u(1335);return(d<<10|p)^21522},A:function(d){for(var p=d<<12;0<=u(p)-u(7973);)p^=7973<<u(p)-u(7973);return d<<12|p},G:function(d){return c[d-1]},F:function(d){switch(d){case 0:return function(p,v){return(p+v)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,v){return v%3==0};case 3:return function(p,v){return(p+v)%3==0};case 4:return function(p,v){return(Math.floor(p/2)+Math.floor(v/3))%2==0};case 5:return function(p,v){return p*v%2+p*v%3==0};case 6:return function(p,v){return(p*v%2+p*v%3)%2==0};case 7:return function(p,v){return(p*v%3+(p+v)%2)%2==0};default:throw Error("bad maskPattern:"+d)}},C:function(d){for(var p=i([1],0),v=0;v<d;v+=1)p=p.multiply(i([1,s.i(v)],0));return p},f:function(d,p){if(d!=4||1>p||40<p)throw Error("mode: "+d+"; type: "+p);return 10>p?8:16},D:function(d){for(var p=d.h(),v=0,y=0;y<p;y+=1)for(var _=0;_<p;_+=1){for(var S=0,b=d.a(y,_),f=-1;1>=f;f+=1)if(!(0>y+f||p<=y+f))for(var g=-1;1>=g;g+=1)0>_+g||p<=_+g||(f!=0||g!=0)&&b==d.a(y+f,_+g)&&(S+=1);5<S&&(v+=3+S-5)}for(y=0;y<p-1;y+=1)for(_=0;_<p-1;_+=1)S=0,d.a(y,_)&&(S+=1),d.a(y+1,_)&&(S+=1),d.a(y,_+1)&&(S+=1),d.a(y+1,_+1)&&(S+=1),(S==0||S==4)&&(v+=3);for(y=0;y<p;y+=1)for(_=0;_<p-6;_+=1)d.a(y,_)&&!d.a(y,_+1)&&d.a(y,_+2)&&d.a(y,_+3)&&d.a(y,_+4)&&!d.a(y,_+5)&&d.a(y,_+6)&&(v+=40);for(_=0;_<p;_+=1)for(y=0;y<p-6;y+=1)d.a(y,_)&&!d.a(y+1,_)&&d.a(y+2,_)&&d.a(y+3,_)&&d.a(y+4,_)&&!d.a(y+5,_)&&d.a(y+6,_)&&(v+=40);for(_=S=0;_<p;_+=1)for(y=0;y<p;y+=1)d.a(y,_)&&(S+=1);return v+=Math.abs(100*S/p/p-50)/5*10}};return m}(),s=function(){for(var u=Array(256),c=Array(256),m=0;8>m;m+=1)u[m]=1<<m;for(m=8;256>m;m+=1)u[m]=u[m-4]^u[m-5]^u[m-6]^u[m-8];for(m=0;255>m;m+=1)c[u[m]]=m;return{g:function(d){if(1>d)throw Error("glog("+d+")");return c[d]},i:function(d){for(;0>d;)d+=255;for(;256<=d;)d-=255;return u[d]}}}(),l=function(){function u(d,p){switch(p){case o.L:return c[4*(d-1)];case o.M:return c[4*(d-1)+1];case o.Q:return c[4*(d-1)+2];case o.H:return c[4*(d-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m={I:function(d,p){var v=u(d,p);if(typeof v>"u")throw Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+p);d=v.length/3,p=[];for(var y=0;y<d;y+=1)for(var _=v[3*y],S=v[3*y+1],b=v[3*y+2],f=0;f<_;f+=1){var g=b,w={};w.o=S,w.j=g,p.push(w)}return p}};return m}();return r}());var dy=QrCreator,xt=class extends R{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&dy.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:null,size:this.size*2},this.canvas)}render(){var e;return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${gt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};xt.styles=cy;a([I("canvas")],xt.prototype,"canvas",2);a([h()],xt.prototype,"value",2);a([h()],xt.prototype,"label",2);a([h({type:Number})],xt.prototype,"size",2);a([h()],xt.prototype,"fill",2);a([h()],xt.prototype,"background",2);a([h({type:Number})],xt.prototype,"radius",2);a([h({attribute:"error-correction"})],xt.prototype,"errorCorrection",2);a([T(["background","errorCorrection","fill","radius","size","value"])],xt.prototype,"generate",1);xt=a([M("sl-qr-code")],xt);F({tagName:"sl-qr-code",elementClass:xt,react:N,events:{}});var hy=B`
  ${V}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,Xt=class extends R{constructor(){super(...arguments),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.setInitialAttributes(),this.addEventListeners()}disconnectedCallback(){this.removeEventListeners()}addEventListeners(){this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}removeEventListeners(){this.removeEventListener("blur",this.handleBlur),this.removeEventListener("click",this.handleClick),this.removeEventListener("focus",this.handleFocus)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${H({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?$` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Xt.styles=hy;a([j()],Xt.prototype,"checked",2);a([j()],Xt.prototype,"hasFocus",2);a([h()],Xt.prototype,"value",2);a([h({reflect:!0})],Xt.prototype,"size",2);a([h({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);a([T("checked")],Xt.prototype,"handleCheckedChange",1);a([T("disabled",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleDisabledChange",1);Xt=a([M("sl-radio")],Xt);F({tagName:"sl-radio",elementClass:Xt,react:N,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}});var Jf=B`
  ${V}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,py=B`
  ${Jf}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,em=Symbol.for(""),fy=e=>{if((e==null?void 0:e.r)===em)return e==null?void 0:e._$litStatic$},Ks=(e,...t)=>({_$litStatic$:t.reduce((r,i,o)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:em}),Jd=new Map,my=e=>(t,...r)=>{const i=r.length;let o,n;const s=[],l=[];let u,c=0,m=!1;for(;c<i;){for(u=t[c];c<i&&(n=r[c],(o=fy(n))!==void 0);)u+=o+t[++c],m=!0;l.push(n),s.push(u),c++}if(c===i&&s.push(t[i]),m){const d=s.join("$$lit$$");(t=Jd.get(d))===void 0&&(s.raw=s,Jd.set(d,t=s)),r=l}return e(t,...r)},Xo=my($);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var kt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Xo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${H({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${O(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};kt.styles=py;a([I(".button")],kt.prototype,"input",2);a([I(".hidden-input")],kt.prototype,"hiddenInput",2);a([j()],kt.prototype,"hasFocus",2);a([h({type:Boolean,reflect:!0})],kt.prototype,"checked",2);a([h()],kt.prototype,"value",2);a([h({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);a([h({reflect:!0})],kt.prototype,"size",2);a([h({type:Boolean,reflect:!0})],kt.prototype,"pill",2);a([T("disabled",{waitUntilFirstUpdate:!0})],kt.prototype,"handleDisabledChange",1);kt=a([M("sl-radio-button")],kt);F({tagName:"sl-radio-button",elementClass:kt,react:N,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}});var gy=B`
  ${V}
  ${zn}

  :host {
    display: block;
  }

  .form-control {
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,je=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this),this.hasSlotController=new Ft(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Iv:e?Lv:ga}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,r.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(l=>!l.disabled),i=(t=r.find(l=>l.checked))!=null?t:r[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let s=r.indexOf(i)+o;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleSlotChange(){var e,t;if(customElements.get("sl-radio")||customElements.get("sl-radio-button")){const r=this.getAllRadios();if(r.forEach(i=>{i.checked=i.value===this.value,i.size=this.size}),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!r.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}else customElements.whenDefined("sl-radio").then(()=>this.handleSlotChange()),customElements.whenDefined("sl-radio-button").then(()=>this.handleSlotChange())}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=$`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?$`
                <sl-button-group part="button-group" exportparts="base:button-group__base">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
      </fieldset>
    `}};je.styles=gy;a([I("slot:not([name])")],je.prototype,"defaultSlot",2);a([I(".radio-group__validation-input")],je.prototype,"validationInput",2);a([j()],je.prototype,"hasButtonGroup",2);a([j()],je.prototype,"errorMessage",2);a([j()],je.prototype,"defaultValue",2);a([h()],je.prototype,"label",2);a([h({attribute:"help-text"})],je.prototype,"helpText",2);a([h()],je.prototype,"name",2);a([h({reflect:!0})],je.prototype,"value",2);a([h({reflect:!0})],je.prototype,"size",2);a([h({reflect:!0})],je.prototype,"form",2);a([h({type:Boolean,reflect:!0})],je.prototype,"required",2);a([T("value")],je.prototype,"handleValueChange",1);je=a([M("sl-radio-group")],je);F({tagName:"sl-radio-group",elementClass:je,react:N,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var vy=B`
  ${V}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbols--indicator {
      color: SelectedItem;
    }
  }
`,cu=class extends ma{constructor(e){if(super(e),this.it=we,e.type!==hr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===we||e==null)return this._t=void 0,this.it=e;if(e===yt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};cu.directiveName="unsafeHTML",cu.resultType=1;var eh=fa(cu),We=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:i,width:o}=this.rating.getBoundingClientRect(),n=t?this.roundToPrecision((i-e)/o*this.max,this.precision):this.roundToPrecision((e-r)/o*this.max,this.precision);return Ae(n,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,$`
      <div
        part="base"
        class=${H({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          ${t.map(i=>$`
              <span
                class=${H({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${eh(this.getSymbol(i+1))}
              </span>
            `)}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${t.map(i=>$`
              <span
                class=${H({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                style=${gt({clipPath:r>i+1?"none":e?`inset(0 0 0 ${100-(r-i)/1*100}%)`:`inset(0 ${100-(r-i)/1*100}% 0 0)`})}
                role="presentation"
              >
                ${eh(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};We.styles=vy;a([I(".rating")],We.prototype,"rating",2);a([j()],We.prototype,"hoverValue",2);a([j()],We.prototype,"isHovering",2);a([h()],We.prototype,"label",2);a([h({type:Number})],We.prototype,"value",2);a([h({type:Number})],We.prototype,"max",2);a([h({type:Number})],We.prototype,"precision",2);a([h({type:Boolean,reflect:!0})],We.prototype,"readonly",2);a([h({type:Boolean,reflect:!0})],We.prototype,"disabled",2);a([h()],We.prototype,"getSymbol",2);a([Nf({passive:!0})],We.prototype,"handleTouchMove",1);a([T("hoverValue")],We.prototype,"handleHoverValueChange",1);a([T("isHovering")],We.prototype,"handleIsHoveringChange",1);We=a([M("sl-rating")],We);/*! Bundled license information:

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/F({tagName:"sl-rating",elementClass:We,react:N,events:{onSlChange:"sl-change",onSlHover:"sl-hover"}});var yy=B`
  ${V}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,qr=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),qo(this.base,{onMove:i=>{this.position=parseFloat(Ae(i/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(o-=i),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(o+=i),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=Ae(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        id="image-comparer"
        class=${H({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <slot name="before" part="before" class="image-comparer__before"></slot>

          <slot
            name="after"
            part="after"
            class="image-comparer__after"
            style=${gt({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          ></slot>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${gt({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <slot
            name="handle"
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <sl-icon library="system" name="grip-vertical"></sl-icon>
          </slot>
        </div>
      </div>
    `}};qr.styles=yy;a([I(".image-comparer")],qr.prototype,"base",2);a([I(".image-comparer__handle")],qr.prototype,"handle",2);a([h({type:Number,reflect:!0})],qr.prototype,"position",2);a([T("position",{waitUntilFirstUpdate:!0})],qr.prototype,"handlePositionChange",1);qr=a([M("sl-image-comparer")],qr);F({tagName:"sl-image-comparer",elementClass:qr,react:N,events:{onSlChange:"sl-change"}});var by=B`
  ${V}
  ${zn}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,K=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Ft(this,"help-text","label"),this.localize=new ie(this),this.hasFocus=!1,this.title="",this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){const e=document.createElement("input");return e.type="date",e.value=this.value,e.valueAsDate}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){const e=document.createElement("input");return e.type="number",e.value=this.value,e.valueAsNumber}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i){this.input.setRangeText(e,t,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${H({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${H({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${O(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${O(this.placeholder)}
              minlength=${O(this.minlength)}
              maxlength=${O(this.maxlength)}
              min=${O(this.min)}
              max=${O(this.max)}
              step=${O(this.step)}
              .value=${gi(this.value)}
              autocapitalize=${O(this.autocapitalize)}
              autocomplete=${O(this.autocomplete)}
              autocorrect=${O(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${O(this.pattern)}
              enterkeyhint=${O(this.enterkeyhint)}
              inputmode=${O(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?$`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?$`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?$`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:$`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};K.styles=by;a([I(".input__control")],K.prototype,"input",2);a([j()],K.prototype,"hasFocus",2);a([h()],K.prototype,"title",2);a([h({reflect:!0})],K.prototype,"type",2);a([h()],K.prototype,"name",2);a([h()],K.prototype,"value",2);a([Si()],K.prototype,"defaultValue",2);a([h({reflect:!0})],K.prototype,"size",2);a([h({type:Boolean,reflect:!0})],K.prototype,"filled",2);a([h({type:Boolean,reflect:!0})],K.prototype,"pill",2);a([h()],K.prototype,"label",2);a([h({attribute:"help-text"})],K.prototype,"helpText",2);a([h({type:Boolean})],K.prototype,"clearable",2);a([h({type:Boolean,reflect:!0})],K.prototype,"disabled",2);a([h()],K.prototype,"placeholder",2);a([h({type:Boolean,reflect:!0})],K.prototype,"readonly",2);a([h({attribute:"password-toggle",type:Boolean})],K.prototype,"passwordToggle",2);a([h({attribute:"password-visible",type:Boolean})],K.prototype,"passwordVisible",2);a([h({attribute:"no-spin-buttons",type:Boolean})],K.prototype,"noSpinButtons",2);a([h({reflect:!0})],K.prototype,"form",2);a([h({type:Boolean,reflect:!0})],K.prototype,"required",2);a([h()],K.prototype,"pattern",2);a([h({type:Number})],K.prototype,"minlength",2);a([h({type:Number})],K.prototype,"maxlength",2);a([h()],K.prototype,"min",2);a([h()],K.prototype,"max",2);a([h()],K.prototype,"step",2);a([h()],K.prototype,"autocapitalize",2);a([h()],K.prototype,"autocorrect",2);a([h()],K.prototype,"autocomplete",2);a([h({type:Boolean})],K.prototype,"autofocus",2);a([h()],K.prototype,"enterkeyhint",2);a([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],K.prototype,"spellcheck",2);a([h()],K.prototype,"inputmode",2);a([T("disabled",{waitUntilFirstUpdate:!0})],K.prototype,"handleDisabledChange",1);a([T("step",{waitUntilFirstUpdate:!0})],K.prototype,"handleStepChange",1);a([T("value",{waitUntilFirstUpdate:!0})],K.prototype,"handleValueChange",1);K=a([M("sl-input")],K);F({tagName:"sl-input",elementClass:K,react:N,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var il=new Map;function wy(e,t="cors"){const r=il.get(e);if(r!==void 0)return Promise.resolve(r);const i=fetch(e,{mode:t}).then(async o=>{const n={ok:o.ok,status:o.status,html:await o.text()};return il.set(e,n),n});return il.set(e,i),i}var _y=B`
  ${V}

  :host {
    display: block;
  }
`,Yr=class extends R{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await wy(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return $`<slot></slot>`}};Yr.styles=_y;a([h()],Yr.prototype,"src",2);a([h()],Yr.prototype,"mode",2);a([h({attribute:"allow-scripts",type:Boolean})],Yr.prototype,"allowScripts",2);a([T("src")],Yr.prototype,"handleSrcChange",1);Yr=a([M("sl-include")],Yr);F({tagName:"sl-include",elementClass:Yr,react:N,events:{onSlLoad:"sl-load",onSlError:"sl-error"}});var xy=B`
  ${V}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,wn=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const r=e.target.closest("sl-menu-item");!r||r.disabled||r.inert||(r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}}))}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};wn.styles=xy;a([I("slot")],wn.prototype,"defaultSlot",2);wn=a([M("sl-menu")],wn);F({tagName:"sl-menu",elementClass:wn,react:N,events:{onSlSelect:"sl-select"}});var ky=B`
  ${V}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Ct=class extends R{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleHostClick(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Dv(this.defaultSlot)}render(){return $`
      <div
        part="base"
        class=${H({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Ct.styles=ky;a([I("slot:not([name])")],Ct.prototype,"defaultSlot",2);a([I(".menu-item")],Ct.prototype,"menuItem",2);a([h()],Ct.prototype,"type",2);a([h({type:Boolean,reflect:!0})],Ct.prototype,"checked",2);a([h()],Ct.prototype,"value",2);a([h({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);a([T("checked")],Ct.prototype,"handleCheckedChange",1);a([T("disabled")],Ct.prototype,"handleDisabledChange",1);a([T("type")],Ct.prototype,"handleTypeChange",1);Ct=a([M("sl-menu-item")],Ct);F({tagName:"sl-menu-item",elementClass:Ct,react:N,events:{}});var Cy=B`
  ${V}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,qs=class extends R{render(){return $` <slot part="base" class="menu-label"></slot> `}};qs.styles=Cy;qs=a([M("sl-menu-label")],qs);F({tagName:"sl-menu-label",elementClass:qs,react:N,events:{}});var Sy=B`
  ${V}

  :host {
    display: contents;
  }
`,Ot=class extends R{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleMutation=this.handleMutation.bind(this),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){this.stopObserver()}handleMutation(e){this.emit("sl-mutation",{detail:{mutationList:e}})}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return $` <slot></slot> `}};Ot.styles=Sy;a([h({reflect:!0})],Ot.prototype,"attr",2);a([h({attribute:"attr-old-value",type:Boolean,reflect:!0})],Ot.prototype,"attrOldValue",2);a([h({attribute:"char-data",type:Boolean,reflect:!0})],Ot.prototype,"charData",2);a([h({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Ot.prototype,"charDataOldValue",2);a([h({attribute:"child-list",type:Boolean,reflect:!0})],Ot.prototype,"childList",2);a([h({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);a([T("disabled")],Ot.prototype,"handleDisabledChange",1);a([T("attr",{waitUntilFirstUpdate:!0}),T("attr-old-value",{waitUntilFirstUpdate:!0}),T("char-data",{waitUntilFirstUpdate:!0}),T("char-data-old-value",{waitUntilFirstUpdate:!0}),T("childList",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleChange",1);Ot=a([M("sl-mutation-observer")],Ot);F({tagName:"sl-mutation-observer",elementClass:Ot,react:N,events:{onSlMutation:"sl-mutation"}});var $y=B`
  ${V}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,St=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return $`
      <div
        part="base"
        class=${H({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};St.styles=$y;a([I(".option__label")],St.prototype,"defaultSlot",2);a([j()],St.prototype,"current",2);a([j()],St.prototype,"selected",2);a([j()],St.prototype,"hasHover",2);a([h({reflect:!0})],St.prototype,"value",2);a([h({type:Boolean,reflect:!0})],St.prototype,"disabled",2);a([T("disabled")],St.prototype,"handleDisabledChange",1);a([T("selected")],St.prototype,"handleSelectedChange",1);a([T("value")],St.prototype,"handleValueChange",1);St=a([M("sl-option")],St);F({tagName:"sl-option",elementClass:St,react:N,events:{}});var zy=B`
  ${V}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,lo=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};lo.styles=zy;a([h({type:Boolean,reflect:!0})],lo.prototype,"vertical",2);a([T("vertical")],lo.prototype,"handleVerticalChange",1);lo=a([M("sl-divider")],lo);F({tagName:"sl-divider",elementClass:lo,react:N,events:{}});function th(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function tm(e){var t,r;const i=[];function o(l){l instanceof HTMLElement&&(i.push(l),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&o(l.shadowRoot)),[...l.children].forEach(u=>o(u))}o(e);const n=(t=i.find(l=>th(l)))!=null?t:null,s=(r=i.reverse().find(l=>th(l)))!=null?r:null;return{start:n,end:s}}var Eo=[],rm=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Eo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Eo=Eo.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Eo[Eo.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=tm(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}},Ey=B`
  ${V}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function rh(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ht=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"footer"),this.localize=new ie(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new rm(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Wo(this)))}disconnectedCallback(){super.disconnectedCallback(),Ko(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=_e(this,"drawer.denyClose",{dir:this.localize.dir()});xe(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&!this.contained&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Wo(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ze(this.drawer),ze(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=_e(this,`drawer.show${rh(this.placement)}`,{dir:this.localize.dir()}),r=_e(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([xe(this.panel,t.keyframes,t.options),xe(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ko(this)),await Promise.all([ze(this.drawer),ze(this.overlay)]);const e=_e(this,`drawer.hide${rh(this.placement)}`,{dir:this.localize.dir()}),t=_e(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([xe(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),xe(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Wo(this)),this.open&&this.contained&&(this.modal.deactivate(),Ko(this))}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${H({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ht.styles=Ey;a([I(".drawer")],ht.prototype,"drawer",2);a([I(".drawer__panel")],ht.prototype,"panel",2);a([I(".drawer__overlay")],ht.prototype,"overlay",2);a([h({type:Boolean,reflect:!0})],ht.prototype,"open",2);a([h({reflect:!0})],ht.prototype,"label",2);a([h({reflect:!0})],ht.prototype,"placement",2);a([h({type:Boolean,reflect:!0})],ht.prototype,"contained",2);a([h({attribute:"no-header",type:Boolean,reflect:!0})],ht.prototype,"noHeader",2);a([T("open",{waitUntilFirstUpdate:!0})],ht.prototype,"handleOpenChange",1);a([T("contained",{waitUntilFirstUpdate:!0})],ht.prototype,"handleNoModalChange",1);ht=a([M("sl-drawer")],ht);oe("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});oe("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});oe("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});oe("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});oe("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});F({tagName:"sl-drawer",elementClass:ht,react:N,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"}});var uo=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[i]+this.unit,n=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(n,{style:"unit",unit:o,unitDisplay:this.display})}};a([h({type:Number})],uo.prototype,"value",2);a([h()],uo.prototype,"unit",2);a([h()],uo.prototype,"display",2);uo=a([M("sl-format-bytes")],uo);F({tagName:"sl-format-bytes",elementClass:uo,react:N,events:{}});var Ay=B`
  ${V}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ze=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>tm(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ze(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=_e(this,"dropdown.show",{dir:this.localize.dir()});await xe(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ze(this);const{keyframes:e,options:t}=_e(this,"dropdown.hide",{dir:this.localize.dir()});await xe(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${H({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};Ze.styles=Ay;a([I(".dropdown")],Ze.prototype,"popup",2);a([I(".dropdown__trigger")],Ze.prototype,"trigger",2);a([I(".dropdown__panel")],Ze.prototype,"panel",2);a([h({type:Boolean,reflect:!0})],Ze.prototype,"open",2);a([h({reflect:!0})],Ze.prototype,"placement",2);a([h({type:Boolean,reflect:!0})],Ze.prototype,"disabled",2);a([h({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ze.prototype,"stayOpenOnSelect",2);a([h({attribute:!1})],Ze.prototype,"containingElement",2);a([h({type:Number})],Ze.prototype,"distance",2);a([h({type:Number})],Ze.prototype,"skidding",2);a([h({type:Boolean})],Ze.prototype,"hoist",2);a([T("open",{waitUntilFirstUpdate:!0})],Ze.prototype,"handleOpenChange",1);Ze=a([M("sl-dropdown")],Ze);oe("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});oe("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});F({tagName:"sl-dropdown",elementClass:Ze,react:N,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});var it=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return $`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};a([h()],it.prototype,"date",2);a([h()],it.prototype,"weekday",2);a([h()],it.prototype,"era",2);a([h()],it.prototype,"year",2);a([h()],it.prototype,"month",2);a([h()],it.prototype,"day",2);a([h()],it.prototype,"hour",2);a([h()],it.prototype,"minute",2);a([h()],it.prototype,"second",2);a([h({attribute:"time-zone-name"})],it.prototype,"timeZoneName",2);a([h({attribute:"time-zone"})],it.prototype,"timeZone",2);a([h({attribute:"hour-format"})],it.prototype,"hourFormat",2);it=a([M("sl-format-date")],it);F({tagName:"sl-format-date",elementClass:it,react:N,events:{}});var $t=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([h({type:Number})],$t.prototype,"value",2);a([h()],$t.prototype,"type",2);a([h({attribute:"no-grouping",type:Boolean})],$t.prototype,"noGrouping",2);a([h()],$t.prototype,"currency",2);a([h({attribute:"currency-display"})],$t.prototype,"currencyDisplay",2);a([h({attribute:"minimum-integer-digits",type:Number})],$t.prototype,"minimumIntegerDigits",2);a([h({attribute:"minimum-fraction-digits",type:Number})],$t.prototype,"minimumFractionDigits",2);a([h({attribute:"maximum-fraction-digits",type:Number})],$t.prototype,"maximumFractionDigits",2);a([h({attribute:"minimum-significant-digits",type:Number})],$t.prototype,"minimumSignificantDigits",2);a([h({attribute:"maximum-significant-digits",type:Number})],$t.prototype,"maximumSignificantDigits",2);$t=a([M("sl-format-number")],$t);F({tagName:"sl-format-number",elementClass:$t,react:N,events:{}});var du="";function ih(e){du=e}function Ty(e=""){if(!du){const t=[...document.getElementsByTagName("script")],r=t.find(i=>i.hasAttribute("data-shoelace"));if(r)ih(r.getAttribute("data-shoelace"));else{const i=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let o="";i&&(o=i.getAttribute("src")),ih(o.split("/").slice(0,-1).join("/"))}}return du.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Ly={name:"default",resolver:e=>Ty(`assets/icons/${e}.svg`)},Iy=Ly,oh={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Dy={name:"system",resolver:e=>e in oh?`data:image/svg+xml,${encodeURIComponent(oh[e])}`:""},Py=Dy,Oy=[Iy,Py],hu=[];function Ry(e){hu.push(e)}function Ny(e){hu=hu.filter(t=>t!==e)}function nh(e){return Oy.find(t=>t.name===e)}var My=B`
  ${V}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ao=Symbol(),Qn=Symbol(),ol,nl=new Map,Rt=class extends R{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}static async resolveIcon(e){var t;let r;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Ao:Qn}catch{return Qn}try{const i=document.createElement("div");i.innerHTML=await r.text();const o=i.firstElementChild;if(((t=o==null?void 0:o.tagName)==null?void 0:t.toLowerCase())!=="svg")return Ao;ol||(ol=new DOMParser);const s=ol.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Ao}catch{return Ao}}connectedCallback(){super.connectedCallback(),Ry(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ny(this)}getUrl(){const e=nh(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=nh(this.library),r=this.getUrl();if(!r){this.svg=null;return}let i=nl.get(r);i||(i=Rt.resolveIcon(r),nl.set(r,i));const o=await i;if(o===Qn&&nl.delete(r),r===this.getUrl())switch(o){case Qn:case Ao:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=t==null?void 0:t.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}render(){return this.svg}};Rt.styles=My;a([j()],Rt.prototype,"svg",2);a([h({reflect:!0})],Rt.prototype,"name",2);a([h()],Rt.prototype,"src",2);a([h()],Rt.prototype,"label",2);a([h({reflect:!0})],Rt.prototype,"library",2);a([T("label")],Rt.prototype,"handleLabelChange",1);a([T(["name","src","library"])],Rt.prototype,"setIcon",1);Rt=a([M("sl-icon")],Rt);F({tagName:"sl-icon",elementClass:Rt,react:N,events:{onSlLoad:"sl-load",onSlError:"sl-error"}});var Fy=B`
  ${V}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,pt=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ks`a`:Ks`button`;return Xo`
      <${t}
        part="base"
        class=${H({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${O(e?void 0:this.disabled)}
        type=${O(e?void 0:"button")}
        href=${O(e?this.href:void 0)}
        target=${O(e?this.target:void 0)}
        download=${O(e?this.download:void 0)}
        rel=${O(e&&this.target?"noreferrer noopener":void 0)}
        role=${O(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${O(this.name)}
          library=${O(this.library)}
          src=${O(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};pt.styles=Fy;a([I(".icon-button")],pt.prototype,"button",2);a([j()],pt.prototype,"hasFocus",2);a([h()],pt.prototype,"name",2);a([h()],pt.prototype,"library",2);a([h()],pt.prototype,"src",2);a([h()],pt.prototype,"href",2);a([h()],pt.prototype,"target",2);a([h()],pt.prototype,"download",2);a([h()],pt.prototype,"label",2);a([h({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);pt=a([M("sl-icon-button")],pt);F({tagName:"sl-icon-button",elementClass:pt,react:N,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"}});var By=B`
  ${V}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`,bi=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return $`
      <div
        part="base"
        class=${H({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${e?$`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${O(this.target?this.target:void 0)}"
                rel=${O(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:$`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `}};bi.styles=By;a([h()],bi.prototype,"href",2);a([h()],bi.prototype,"target",2);a([h()],bi.prototype,"rel",2);bi=a([M("sl-breadcrumb-item")],bi);F({tagName:"sl-breadcrumb-item",elementClass:bi,react:N,events:{}});var Vy=B`
  ${V}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Ys=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${H({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ys.styles=Vy;Ys=a([M("sl-card")],Ys);F({tagName:"sl-card",elementClass:Ys,react:N,events:{}});var Uy=B`
  ${V}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,sh=Symbol(),Hy=e=>(t,r,i)=>{const o=i.value;i.value=function(...n){clearTimeout(this[sh]),this[sh]=window.setTimeout(()=>{o.apply(this,n)},e)}},im=class{constructor(e){this.pointers=new Set,this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.host=e,e.addController(this),this.handleScroll=this.handleScroll.bind(this),this.handlePointerDown=this.handlePointerDown.bind(this),this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp),t.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),t.addEventListener("touchend",this.handleTouchEnd)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp),t.removeEventListener("touchstart",this.handleTouchStart),t.removeEventListener("touchend",this.handleTouchEnd)}handleScroll(){this.scrolling||(this.scrolling=!0,this.host.requestUpdate()),this.handleScrollEnd()}handleScrollEnd(){this.pointers.size?this.handleScrollEnd():(this.scrolling=!1,this.host.scrollContainer.dispatchEvent(new CustomEvent("scrollend",{bubbles:!1,cancelable:!1})),this.host.requestUpdate())}handlePointerDown(e){if(e.pointerType==="touch")return;this.pointers.add(e.pointerId),this.mouseDragging&&!this.dragging&&e.button===0&&(e.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))}handlePointerMove(e){const t=this.host.scrollContainer,r=!!e.movementX||!!e.movementY;!this.dragging&&r?(t.setPointerCapture(e.pointerId),this.handleDragStart()):t.hasPointerCapture(e.pointerId)&&this.handleDrag(e)}handlePointerUp(e){this.pointers.delete(e.pointerId),this.host.scrollContainer.releasePointerCapture(e.pointerId),this.pointers.size===0&&this.handleDragEnd()}handleTouchEnd(e){for(const t of e.changedTouches)this.pointers.delete(t.identifier)}handleTouchStart(e){for(const t of e.touches)this.pointers.add(t.identifier)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}async handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove),this.dragging=!1;const r=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,n=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:r,top:i,behavior:"auto"}),t.scrollTo({left:o,top:n,behavior:mc()?"auto":"smooth"}),this.scrolling&&await tt(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),e.requestUpdate()}};a([Hy(100)],im.prototype,"handleScrollEnd",1);var jy=B`
  ${V}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,_n=class extends R{static isCarouselItem(e){return e instanceof Element&&e.getAttribute("aria-roledescription")==="slide"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return $` <slot></slot> `}};_n.styles=jy;_n=a([M("sl-carousel-item")],_n);var Wy=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function*Ky(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function*qy(e,t,r=1){const i=t===void 0?0:e;t!=null||(t=e);for(let o=i;r>0?o<t:t<o;o+=r)yield o}var ke=class extends R{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Wy(this,()=>this.next()),this.scrollController=new im(this),this.slides=this.getElementsByTagName("sl-carousel-item"),this.intersectionObserverEntries=new Map,this.localize=new Vf(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(r=>{this.intersectionObserverEntries.set(r.target,r);const i=r.target;i.toggleAttribute("inert",!r.isIntersecting),i.classList.toggle("--in-view",r.isIntersecting),i.setAttribute("aria-hidden",r.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange.bind(this)),this.mutationObserver.observe(this,{childList:!0,subtree:!1})}getPageCount(){return Math.ceil(this.getSlides().length/this.slidesPerPage)}getCurrentPage(){return Math.floor(this.activeSlide/this.slidesPerPage)}getSlides({excludeClones:e=!0}={}){return[...this.slides].filter(t=>!e||!t.hasAttribute("data-clone"))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",n=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),n&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var s;const l=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleScrollEnd(){const e=this.getSlides(),r=[...this.intersectionObserverEntries.values()].find(i=>i.isIntersecting);if(this.loop&&(r!=null&&r.target.hasAttribute("data-clone"))){const i=Number(r.target.getAttribute("data-clone"));this.goToSlide(i,"auto");return}r&&(this.activeSlide=e.indexOf(r.target))}handleSlotChange(e){e.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>_n.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}initializeSlides(){const e=this.getSlides(),t=this.intersectionObserver;if(this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((r,i)=>{t.unobserve(r),r.classList.remove("--in-view"),r.classList.remove("--is-active"),r.setAttribute("aria-label",this.localize.term("slideNum",i+1)),r.hasAttribute("data-clone")&&r.remove()}),this.loop){const r=this.slidesPerPage,i=e.slice(-r),o=e.slice(0,r);i.reverse().forEach((n,s)=>{const l=n.cloneNode(!0);l.setAttribute("data-clone",String(e.length-s-1)),this.prepend(l)}),o.forEach((n,s)=>{const l=n.cloneNode(!0);l.setAttribute("data-clone",String(s)),this.append(l)})}this.getSlides({excludeClones:!1}).forEach(r=>{t.observe(r)}),this.goToSlide(this.activeSlide,"auto")}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}handleSlidesPerMoveChange(){const e=this.getSlides({excludeClones:!1}),t=this.slidesPerMove;e.forEach((r,i)=>{Math.abs(i-t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:i,scrollContainer:o}=this,n=this.getSlides(),s=this.getSlides({excludeClones:!1}),l=(e+n.length)%n.length;this.activeSlide=l;const u=Ae(e+(i?r:0),0,s.length-1),c=s[u],m=o.getBoundingClientRect(),d=c.getBoundingClientRect();o.scrollTo({left:d.left-m.left+o.scrollLeft,top:d.top-m.top+o.scrollTop,behavior:mc()?"auto":t})}render(){const{scrollController:e,slidesPerPage:t}=this,r=this.getPageCount(),i=this.getCurrentPage(),o=this.loop||i>0,n=this.loop||i<r-1,s=this.localize.dir()==="ltr";return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${H({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?$`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${H({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${s?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${H({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!n})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?$`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Ky(qy(r),l=>{const u=l===i;return $`
                    <button
                      part="pagination-item ${u?"pagination-item--active":""}"
                      class="${H({"carousel__pagination-item":!0,"carousel__pagination-item--active":u})}"
                      role="tab"
                      aria-selected="${u?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,r)}"
                      tabindex=${u?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ke.styles=Uy;a([h({type:Boolean,reflect:!0})],ke.prototype,"loop",2);a([h({type:Boolean,reflect:!0})],ke.prototype,"navigation",2);a([h({type:Boolean,reflect:!0})],ke.prototype,"pagination",2);a([h({type:Boolean,reflect:!0})],ke.prototype,"autoplay",2);a([h({type:Number,attribute:"autoplay-interval"})],ke.prototype,"autoplayInterval",2);a([h({type:Number,attribute:"slides-per-page"})],ke.prototype,"slidesPerPage",2);a([h({type:Number,attribute:"slides-per-move"})],ke.prototype,"slidesPerMove",2);a([h()],ke.prototype,"orientation",2);a([h({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ke.prototype,"mouseDragging",2);a([I("slot:not([name])")],ke.prototype,"defaultSlot",2);a([I(".carousel__slides")],ke.prototype,"scrollContainer",2);a([I(".carousel__pagination")],ke.prototype,"paginationContainer",2);a([j()],ke.prototype,"activeSlide",2);a([T("loop",{waitUntilFirstUpdate:!0}),T("slidesPerPage",{waitUntilFirstUpdate:!0})],ke.prototype,"initializeSlides",1);a([T("activeSlide")],ke.prototype,"handelSlideChange",1);a([T("slidesPerMove")],ke.prototype,"handleSlidesPerMoveChange",1);a([T("autoplay")],ke.prototype,"handleAutoplayChange",1);a([T("mouseDragging")],ke.prototype,"handleMouseDraggingChange",1);ke=a([M("sl-carousel")],ke);/*! Bundled license information:

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/F({tagName:"sl-carousel",elementClass:ke,react:N,events:{onSlSlideChange:"sl-slide-change"}});F({tagName:"sl-carousel-item",elementClass:_n,react:N,events:{}});var Yy=B`
  ${V}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Re=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${H({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${O(this.value)}
          .indeterminate=${gi(this.indeterminate)}
          .checked=${gi(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?$`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?$`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};Re.styles=Yy;a([I('input[type="checkbox"]')],Re.prototype,"input",2);a([j()],Re.prototype,"hasFocus",2);a([h()],Re.prototype,"title",2);a([h()],Re.prototype,"name",2);a([h()],Re.prototype,"value",2);a([h({reflect:!0})],Re.prototype,"size",2);a([h({type:Boolean,reflect:!0})],Re.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],Re.prototype,"checked",2);a([h({type:Boolean,reflect:!0})],Re.prototype,"indeterminate",2);a([Si("checked")],Re.prototype,"defaultChecked",2);a([h({reflect:!0})],Re.prototype,"form",2);a([h({type:Boolean,reflect:!0})],Re.prototype,"required",2);a([T("disabled",{waitUntilFirstUpdate:!0})],Re.prototype,"handleDisabledChange",1);a([T(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Re.prototype,"handleStateChange",1);Re=a([M("sl-checkbox")],Re);F({tagName:"sl-checkbox",elementClass:Re,react:N,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var Qy=B`
  ${V}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Ve(e,t){Xy(e)&&(e="100%");var r=Gy(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Xn(e){return Math.min(1,Math.max(0,e))}function Xy(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Gy(e){return typeof e=="string"&&e.indexOf("%")!==-1}function om(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Gn(e){return e<=1?"".concat(Number(e)*100,"%"):e}function ai(e){return e.length===1?"0"+e:String(e)}function Zy(e,t,r){return{r:Ve(e,255)*255,g:Ve(t,255)*255,b:Ve(r,255)*255}}function ah(e,t,r){e=Ve(e,255),t=Ve(t,255),r=Ve(r,255);var i=Math.max(e,t,r),o=Math.min(e,t,r),n=0,s=0,l=(i+o)/2;if(i===o)s=0,n=0;else{var u=i-o;switch(s=l>.5?u/(2-i-o):u/(i+o),i){case e:n=(t-r)/u+(t<r?6:0);break;case t:n=(r-e)/u+2;break;case r:n=(e-t)/u+4;break}n/=6}return{h:n,s,l}}function sl(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Jy(e,t,r){var i,o,n;if(e=Ve(e,360),t=Ve(t,100),r=Ve(r,100),t===0)o=r,n=r,i=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;i=sl(l,s,e+1/3),o=sl(l,s,e),n=sl(l,s,e-1/3)}return{r:i*255,g:o*255,b:n*255}}function lh(e,t,r){e=Ve(e,255),t=Ve(t,255),r=Ve(r,255);var i=Math.max(e,t,r),o=Math.min(e,t,r),n=0,s=i,l=i-o,u=i===0?0:l/i;if(i===o)n=0;else{switch(i){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4;break}n/=6}return{h:n,s:u,v:s}}function eb(e,t,r){e=Ve(e,360)*6,t=Ve(t,100),r=Ve(r,100);var i=Math.floor(e),o=e-i,n=r*(1-t),s=r*(1-o*t),l=r*(1-(1-o)*t),u=i%6,c=[r,s,n,n,l,r][u],m=[l,r,r,s,n,n][u],d=[n,n,l,r,r,s][u];return{r:c*255,g:m*255,b:d*255}}function uh(e,t,r,i){var o=[ai(Math.round(e).toString(16)),ai(Math.round(t).toString(16)),ai(Math.round(r).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function tb(e,t,r,i,o){var n=[ai(Math.round(e).toString(16)),ai(Math.round(t).toString(16)),ai(Math.round(r).toString(16)),ai(rb(i))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function rb(e){return Math.round(parseFloat(e)*255).toString(16)}function ch(e){return ft(e)/255}function ft(e){return parseInt(e,16)}function ib(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var pu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ob(e){var t={r:0,g:0,b:0},r=1,i=null,o=null,n=null,s=!1,l=!1;return typeof e=="string"&&(e=ab(e)),typeof e=="object"&&(ur(e.r)&&ur(e.g)&&ur(e.b)?(t=Zy(e.r,e.g,e.b),s=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):ur(e.h)&&ur(e.s)&&ur(e.v)?(i=Gn(e.s),o=Gn(e.v),t=eb(e.h,i,o),s=!0,l="hsv"):ur(e.h)&&ur(e.s)&&ur(e.l)&&(i=Gn(e.s),n=Gn(e.l),t=Jy(e.h,i,n),s=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=om(r),{ok:s,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var nb="[-\\+]?\\d+%?",sb="[-\\+]?\\d*\\.\\d+%?",Lr="(?:".concat(sb,")|(?:").concat(nb,")"),al="[\\s|\\(]+(".concat(Lr,")[,|\\s]+(").concat(Lr,")[,|\\s]+(").concat(Lr,")\\s*\\)?"),ll="[\\s|\\(]+(".concat(Lr,")[,|\\s]+(").concat(Lr,")[,|\\s]+(").concat(Lr,")[,|\\s]+(").concat(Lr,")\\s*\\)?"),Vt={CSS_UNIT:new RegExp(Lr),rgb:new RegExp("rgb"+al),rgba:new RegExp("rgba"+ll),hsl:new RegExp("hsl"+al),hsla:new RegExp("hsla"+ll),hsv:new RegExp("hsv"+al),hsva:new RegExp("hsva"+ll),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ab(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var t=!1;if(pu[e])e=pu[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r=Vt.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=Vt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Vt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Vt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Vt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Vt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Vt.hex8.exec(e),r?{r:ft(r[1]),g:ft(r[2]),b:ft(r[3]),a:ch(r[4]),format:t?"name":"hex8"}:(r=Vt.hex6.exec(e),r?{r:ft(r[1]),g:ft(r[2]),b:ft(r[3]),format:t?"name":"hex"}:(r=Vt.hex4.exec(e),r?{r:ft(r[1]+r[1]),g:ft(r[2]+r[2]),b:ft(r[3]+r[3]),a:ch(r[4]+r[4]),format:t?"name":"hex8"}:(r=Vt.hex3.exec(e),r?{r:ft(r[1]+r[1]),g:ft(r[2]+r[2]),b:ft(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function ur(e){return!!Vt.CSS_UNIT.exec(String(e))}var dh=function(){function e(t,r){t===void 0&&(t=""),r===void 0&&(r={});var i;if(t instanceof e)return t;typeof t=="number"&&(t=ib(t)),this.originalInput=t;var o=ob(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=r.format)!==null&&i!==void 0?i:o.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},e.prototype.getLuminance=function(){var t=this.toRgb(),r,i,o,n=t.r/255,s=t.g/255,l=t.b/255;return n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(t){return this.a=om(t),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},e.prototype.toHsv=function(){var t=lh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},e.prototype.toHsvString=function(){var t=lh(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?"hsv(".concat(r,", ").concat(i,"%, ").concat(o,"%)"):"hsva(".concat(r,", ").concat(i,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var t=ah(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},e.prototype.toHslString=function(){var t=ah(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?"hsl(".concat(r,", ").concat(i,"%, ").concat(o,"%)"):"hsla(".concat(r,", ").concat(i,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(t){return t===void 0&&(t=!1),uh(this.r,this.g,this.b,t)},e.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},e.prototype.toHex8=function(t){return t===void 0&&(t=!1),tb(this.r,this.g,this.b,this.a,t)},e.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(r,", ").concat(i,")"):"rgba(".concat(t,", ").concat(r,", ").concat(i,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var t=function(r){return"".concat(Math.round(Ve(r,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var t=function(r){return Math.round(Ve(r,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+uh(this.r,this.g,this.b,!1),r=0,i=Object.entries(pu);r<i.length;r++){var o=i[r],n=o[0],s=o[1];if(t===s)return n}return!1},e.prototype.toString=function(t){var r=!!t;t=t??this.format;var i=!1,o=this.a<1&&this.a>=0,n=!r&&o&&(t.startsWith("hex")||t==="name");return n?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=Xn(r.l),new e(r)},e.prototype.brighten=function(t){t===void 0&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new e(r)},e.prototype.darken=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=Xn(r.l),new e(r)},e.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},e.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},e.prototype.desaturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=Xn(r.s),new e(r)},e.prototype.saturate=function(t){t===void 0&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=Xn(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new e(r)},e.prototype.mix=function(t,r){r===void 0&&(r=50);var i=this.toRgb(),o=new e(t).toRgb(),n=r/100,s={r:(o.r-i.r)*n+i.r,g:(o.g-i.g)*n+i.g,b:(o.b-i.b)*n+i.b,a:(o.a-i.a)*n+i.a};return new e(s)},e.prototype.analogous=function(t,r){t===void 0&&(t=6),r===void 0&&(r=30);var i=this.toHsl(),o=360/r,n=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,n.push(new e(i));return n},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var r=this.toHsv(),i=r.h,o=r.s,n=r.v,s=[],l=1/t;t--;)s.push(new e({h:i,s:o,v:n})),n=(n+l)%1;return s},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),i=new e(t).toRgb();return new e({r:i.r+(r.r-i.r)*r.a,g:i.g+(r.g-i.g)*r.a,b:i.b+(r.b-i.b)*r.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),i=r.h,o=[this],n=360/t,s=1;s<t;s++)o.push(new e({h:(i+s*n)%360,s:r.s,l:r.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}(),hh="EyeDropper"in window,Q=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.handleFocusIn=this.handleFocusIn.bind(this),this.handleFocusOut=this.handleFocusOut.bind(this),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut)}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFocusIn(){this.hasFocus=!0,this.emit("sl-focus")}handleFocusOut(){this.hasFocus=!1,this.emit("sl-blur")}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value;r.focus(),e.preventDefault(),qo(t,{onMove:n=>{this.alpha=Ae(n/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value;r.focus(),e.preventDefault(),qo(t,{onMove:n=>{this.hue=Ae(n/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:o}=t.getBoundingClientRect();let n=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,qo(t,{onMove:(s,l)=>{this.saturation=Ae(s/i*100,0,100),this.brightness=Ae(100-l/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Ae(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Ae(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Ae(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Ae(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Ae(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Ae(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Ae(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Ae(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new dh(e);if(!t.isValid)return null;const r=t.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=t.toRgb(),n=t.toHexString(),s=t.toHex8String(),l=t.toHsv(),u={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:u.h,s:u.s,v:u.v,string:this.setLetterCase(`hsv(${Math.round(u.h)}, ${Math.round(u.s)}%, ${Math.round(u.v)}%)`)},hsva:{h:u.h,s:u.s,v:u.v,a:u.a,string:this.setLetterCase(`hsva(${Math.round(u.h)}, ${Math.round(u.s)}%, ${Math.round(u.v)}%, ${u.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(n),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!hh)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,i=100){const o=new dh(`hsva(${e}, ${t}, ${r}, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=$`
      <div
        part="base"
        class=${H({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?$`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${gt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${H({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${gt({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${O(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${gt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${O(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?$`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${gt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${gt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${O(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${gt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":$`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${hh?$`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(o=>{const n=this.parseColor(o);return n?$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${O(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(n.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${gt({backgroundColor:n.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:$`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${H({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${gt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};Q.styles=Qy;a([I('[part~="base"]')],Q.prototype,"base",2);a([I('[part~="input"]')],Q.prototype,"input",2);a([I(".color-dropdown")],Q.prototype,"dropdown",2);a([I('[part~="preview"]')],Q.prototype,"previewButton",2);a([I('[part~="trigger"]')],Q.prototype,"trigger",2);a([j()],Q.prototype,"hasFocus",2);a([j()],Q.prototype,"isDraggingGridHandle",2);a([j()],Q.prototype,"isEmpty",2);a([j()],Q.prototype,"inputValue",2);a([j()],Q.prototype,"hue",2);a([j()],Q.prototype,"saturation",2);a([j()],Q.prototype,"brightness",2);a([j()],Q.prototype,"alpha",2);a([h()],Q.prototype,"value",2);a([Si()],Q.prototype,"defaultValue",2);a([h()],Q.prototype,"label",2);a([h()],Q.prototype,"format",2);a([h({type:Boolean,reflect:!0})],Q.prototype,"inline",2);a([h()],Q.prototype,"size",2);a([h({attribute:"no-format-toggle",type:Boolean})],Q.prototype,"noFormatToggle",2);a([h()],Q.prototype,"name",2);a([h({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);a([h({type:Boolean})],Q.prototype,"hoist",2);a([h({type:Boolean})],Q.prototype,"opacity",2);a([h({type:Boolean})],Q.prototype,"uppercase",2);a([h()],Q.prototype,"swatches",2);a([h({reflect:!0})],Q.prototype,"form",2);a([h({type:Boolean,reflect:!0})],Q.prototype,"required",2);a([T("format",{waitUntilFirstUpdate:!0})],Q.prototype,"handleFormatChange",1);a([T("opacity",{waitUntilFirstUpdate:!0})],Q.prototype,"handleOpacityChange",1);a([T("value")],Q.prototype,"handleValueChange",1);Q=a([M("sl-color-picker")],Q);F({tagName:"sl-color-picker",elementClass:Q,react:N,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"}});var lb=B`
  ${V}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Nt=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1;return}await ze(this.body),this.body.hidden=!1;const{keyframes:t,options:r}=_e(this,"details.show",{dir:this.localize.dir()});await xe(this.body,Us(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.open=!0;return}await ze(this.body);const{keyframes:t,options:r}=_e(this,"details.hide",{dir:this.localize.dir()});await xe(this.body,Us(t,this.body.scrollHeight),r),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,tt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,tt(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${H({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <div
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </div>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </div>
    `}};Nt.styles=lb;a([I(".details")],Nt.prototype,"details",2);a([I(".details__header")],Nt.prototype,"header",2);a([I(".details__body")],Nt.prototype,"body",2);a([I(".details__expand-icon-slot")],Nt.prototype,"expandIconSlot",2);a([h({type:Boolean,reflect:!0})],Nt.prototype,"open",2);a([h()],Nt.prototype,"summary",2);a([h({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);a([T("open",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleOpenChange",1);Nt=a([M("sl-details")],Nt);oe("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});oe("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});F({tagName:"sl-details",elementClass:Nt,react:N,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});var ub=B`
  ${V}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Gt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"footer"),this.localize=new ie(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new rm(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Wo(this))}disconnectedCallback(){super.disconnectedCallback(),Ko(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=_e(this,"dialog.denyClose",{dir:this.localize.dir()});xe(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Wo(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([ze(this.dialog),ze(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=_e(this,"dialog.show",{dir:this.localize.dir()}),r=_e(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([xe(this.panel,t.keyframes,t.options),xe(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ze(this.dialog),ze(this.overlay)]);const e=_e(this,"dialog.hide",{dir:this.localize.dir()}),t=_e(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([xe(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),xe(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ko(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${H({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Gt.styles=ub;a([I(".dialog")],Gt.prototype,"dialog",2);a([I(".dialog__panel")],Gt.prototype,"panel",2);a([I(".dialog__overlay")],Gt.prototype,"overlay",2);a([h({type:Boolean,reflect:!0})],Gt.prototype,"open",2);a([h({reflect:!0})],Gt.prototype,"label",2);a([h({attribute:"no-header",type:Boolean,reflect:!0})],Gt.prototype,"noHeader",2);a([T("open",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleOpenChange",1);Gt=a([M("sl-dialog")],Gt);oe("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});oe("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});oe("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});oe("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});F({tagName:"sl-dialog",elementClass:Gt,react:N,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"}});var cb=B`
  ${V}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Ei=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Zt=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ft(this,"icon","suffix"),this.localize=new ie(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ze(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=_e(this,"alert.show",{dir:this.localize.dir()});await xe(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ze(this.base);const{keyframes:e,options:t}=_e(this,"alert.hide",{dir:this.localize.dir()});await xe(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}async toast(){return new Promise(e=>{Ei.parentElement===null&&document.body.append(Ei),Ei.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ei.removeChild(this),e(),Ei.querySelector("sl-alert")===null&&Ei.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${H({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="alert__icon"></slot>

        <slot part="message" class="alert__message" aria-live="polite"></slot>

        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Zt.styles=cb;a([I('[part~="base"]')],Zt.prototype,"base",2);a([h({type:Boolean,reflect:!0})],Zt.prototype,"open",2);a([h({type:Boolean,reflect:!0})],Zt.prototype,"closable",2);a([h({reflect:!0})],Zt.prototype,"variant",2);a([h({type:Number})],Zt.prototype,"duration",2);a([T("open",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleOpenChange",1);a([T("duration")],Zt.prototype,"handleDurationChange",1);Zt=a([M("sl-alert")],Zt);oe("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});oe("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});F({tagName:"sl-alert",elementClass:Zt,react:N,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"}});var db=B`
  ${V}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Mt=class extends R{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?$`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Mt.styles=db;a([I(".animated-image__animated")],Mt.prototype,"animatedImage",2);a([j()],Mt.prototype,"frozenFrame",2);a([j()],Mt.prototype,"isLoaded",2);a([h()],Mt.prototype,"src",2);a([h()],Mt.prototype,"alt",2);a([h({type:Boolean,reflect:!0})],Mt.prototype,"play",2);a([T("play",{waitUntilFirstUpdate:!0})],Mt.prototype,"handlePlayChange",1);a([T("src")],Mt.prototype,"handleSrcChange",1);Mt=a([M("sl-animated-image")],Mt);F({tagName:"sl-animated-image",elementClass:Mt,react:N,events:{onSlLoad:"sl-load",onSlError:"sl-error"}});var hb=B`
  ${V}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,wi=class extends R{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <slot
        part="base"
        class=${H({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};wi.styles=hb;a([h({reflect:!0})],wi.prototype,"variant",2);a([h({type:Boolean,reflect:!0})],wi.prototype,"pill",2);a([h({type:Boolean,reflect:!0})],wi.prototype,"pulse",2);wi=a([M("sl-badge")],wi);F({tagName:"sl-badge",elementClass:wi,react:N,events:{}});var pb=B`
  ${V}

  :host {
    display: contents;
  }
`,fu={};lv(fu,{backInDown:()=>zb,backInLeft:()=>Eb,backInRight:()=>Ab,backInUp:()=>Tb,backOutDown:()=>Lb,backOutLeft:()=>Ib,backOutRight:()=>Db,backOutUp:()=>Pb,bounce:()=>fb,bounceIn:()=>Ob,bounceInDown:()=>Rb,bounceInLeft:()=>Nb,bounceInRight:()=>Mb,bounceInUp:()=>Fb,bounceOut:()=>Bb,bounceOutDown:()=>Vb,bounceOutLeft:()=>Ub,bounceOutRight:()=>Hb,bounceOutUp:()=>jb,easings:()=>ow,fadeIn:()=>Wb,fadeInBottomLeft:()=>Kb,fadeInBottomRight:()=>qb,fadeInDown:()=>Yb,fadeInDownBig:()=>Qb,fadeInLeft:()=>Xb,fadeInLeftBig:()=>Gb,fadeInRight:()=>Zb,fadeInRightBig:()=>Jb,fadeInTopLeft:()=>e1,fadeInTopRight:()=>t1,fadeInUp:()=>r1,fadeInUpBig:()=>i1,fadeOut:()=>o1,fadeOutBottomLeft:()=>n1,fadeOutBottomRight:()=>s1,fadeOutDown:()=>a1,fadeOutDownBig:()=>l1,fadeOutLeft:()=>u1,fadeOutLeftBig:()=>c1,fadeOutRight:()=>d1,fadeOutRightBig:()=>h1,fadeOutTopLeft:()=>p1,fadeOutTopRight:()=>f1,fadeOutUp:()=>m1,fadeOutUpBig:()=>g1,flash:()=>mb,flip:()=>v1,flipInX:()=>y1,flipInY:()=>b1,flipOutX:()=>w1,flipOutY:()=>_1,headShake:()=>gb,heartBeat:()=>vb,hinge:()=>j1,jackInTheBox:()=>W1,jello:()=>yb,lightSpeedInLeft:()=>x1,lightSpeedInRight:()=>k1,lightSpeedOutLeft:()=>C1,lightSpeedOutRight:()=>S1,pulse:()=>bb,rollIn:()=>K1,rollOut:()=>q1,rotateIn:()=>$1,rotateInDownLeft:()=>z1,rotateInDownRight:()=>E1,rotateInUpLeft:()=>A1,rotateInUpRight:()=>T1,rotateOut:()=>L1,rotateOutDownLeft:()=>I1,rotateOutDownRight:()=>D1,rotateOutUpLeft:()=>P1,rotateOutUpRight:()=>O1,rubberBand:()=>wb,shake:()=>_b,shakeX:()=>xb,shakeY:()=>kb,slideInDown:()=>R1,slideInLeft:()=>N1,slideInRight:()=>M1,slideInUp:()=>F1,slideOutDown:()=>B1,slideOutLeft:()=>V1,slideOutRight:()=>U1,slideOutUp:()=>H1,swing:()=>Cb,tada:()=>Sb,wobble:()=>$b,zoomIn:()=>Y1,zoomInDown:()=>Q1,zoomInLeft:()=>X1,zoomInRight:()=>G1,zoomInUp:()=>Z1,zoomOut:()=>J1,zoomOutDown:()=>ew,zoomOutLeft:()=>tw,zoomOutRight:()=>rw,zoomOutUp:()=>iw});var fb=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],mb=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],gb=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],vb=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],yb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],bb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],wb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],_b=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],xb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],kb=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Cb=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Sb=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],$b=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zb=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Eb=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Ab=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Tb=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Lb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Ib=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Db=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Pb=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ob=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Rb=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Nb=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Mb=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Fb=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Bb=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Vb=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Ub=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Hb=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],jb=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Wb=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],Kb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],qb=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Yb=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Qb=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Xb=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Gb=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Zb=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Jb=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],e1=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],t1=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],r1=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],i1=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],o1=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],n1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],s1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],a1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],l1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],u1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],c1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],d1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],h1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],p1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],f1=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],m1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],g1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],v1=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],y1=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],b1=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],w1=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],_1=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],x1=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],k1=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],C1=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],S1=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],$1=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],z1=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],E1=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],A1=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],T1=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],L1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],I1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],D1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],P1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],O1=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],R1=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],N1=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],M1=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],F1=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],B1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],V1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],U1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],H1=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],j1=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],W1=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],K1=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],q1=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],Y1=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],Q1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],X1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],G1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Z1=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],J1=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],ew=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],tw=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],rw=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],iw=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ow={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},Ee=class extends R{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation(),this.handleAnimationCancel=this.handleAnimationCancel.bind(this),this.handleAnimationFinish=this.handleAnimationFinish.bind(this)}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleAnimationFinish(){this.play=!1,this.hasStarted=!1,this.emit("sl-finish")}handleAnimationCancel(){this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=fu.easings[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:fu[this.name],n=(await this.defaultSlot).assignedElements()[0];return!n||!i?!1:(this.destroyAnimation(),this.animation=n.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ee.styles=pb;a([cv("slot")],Ee.prototype,"defaultSlot",2);a([h()],Ee.prototype,"name",2);a([h({type:Boolean,reflect:!0})],Ee.prototype,"play",2);a([h({type:Number})],Ee.prototype,"delay",2);a([h()],Ee.prototype,"direction",2);a([h({type:Number})],Ee.prototype,"duration",2);a([h()],Ee.prototype,"easing",2);a([h({attribute:"end-delay",type:Number})],Ee.prototype,"endDelay",2);a([h()],Ee.prototype,"fill",2);a([h({type:Number})],Ee.prototype,"iterations",2);a([h({attribute:"iteration-start",type:Number})],Ee.prototype,"iterationStart",2);a([h({attribute:!1})],Ee.prototype,"keyframes",2);a([h({attribute:"playback-rate",type:Number})],Ee.prototype,"playbackRate",2);a([T(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ee.prototype,"handleAnimationChange",1);a([T("play")],Ee.prototype,"handlePlayChange",1);a([T("playbackRate")],Ee.prototype,"handlePlaybackRateChange",1);Ee=a([M("sl-animation")],Ee);F({tagName:"sl-animation",elementClass:Ee,react:N,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"}});var nw=B`
  ${V}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Jt=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=$``;return this.initials?t=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=$`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <sl-icon name="person-fill" library="system"></sl-icon>
        </slot>
      `,$`
      <div
        part="base"
        class=${H({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Jt.styles=nw;a([j()],Jt.prototype,"hasError",2);a([h()],Jt.prototype,"image",2);a([h()],Jt.prototype,"label",2);a([h()],Jt.prototype,"initials",2);a([h()],Jt.prototype,"loading",2);a([h({reflect:!0})],Jt.prototype,"shape",2);a([T("image")],Jt.prototype,"handleImageChange",1);Jt=a([M("sl-avatar")],Jt);F({tagName:"sl-avatar",elementClass:Jt,react:N,events:{}});var sw=B`
  ${V}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,_i=class extends R{constructor(){super(...arguments),this.localize=new ie(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),$`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};_i.styles=sw;a([I("slot")],_i.prototype,"defaultSlot",2);a([I('slot[name="separator"]')],_i.prototype,"separatorSlot",2);a([h()],_i.prototype,"label",2);_i=a([M("sl-breadcrumb")],_i);F({tagName:"sl-breadcrumb",elementClass:_i,react:N,events:{}});var ee=class extends R{constructor(){super(...arguments),this.formControlController=new xr(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Ft(this,"[default]","prefix","suffix"),this.localize=new ie(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ga}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ks`a`:Ks`button`;return Xo`
      <${t}
        part="base"
        class=${H({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${O(e?void 0:this.disabled)}
        type=${O(e?void 0:this.type)}
        title=${this.title}
        name=${O(e?void 0:this.name)}
        value=${O(e?void 0:this.value)}
        href=${O(e?this.href:void 0)}
        target=${O(e?this.target:void 0)}
        download=${O(e?this.download:void 0)}
        rel=${O(e?this.rel:void 0)}
        role=${O(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Xo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Xo`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};ee.styles=Jf;a([I(".button")],ee.prototype,"button",2);a([j()],ee.prototype,"hasFocus",2);a([j()],ee.prototype,"invalid",2);a([h()],ee.prototype,"title",2);a([h({reflect:!0})],ee.prototype,"variant",2);a([h({reflect:!0})],ee.prototype,"size",2);a([h({type:Boolean,reflect:!0})],ee.prototype,"caret",2);a([h({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);a([h({type:Boolean,reflect:!0})],ee.prototype,"loading",2);a([h({type:Boolean,reflect:!0})],ee.prototype,"outline",2);a([h({type:Boolean,reflect:!0})],ee.prototype,"pill",2);a([h({type:Boolean,reflect:!0})],ee.prototype,"circle",2);a([h()],ee.prototype,"type",2);a([h()],ee.prototype,"name",2);a([h()],ee.prototype,"value",2);a([h()],ee.prototype,"href",2);a([h()],ee.prototype,"target",2);a([h()],ee.prototype,"rel",2);a([h()],ee.prototype,"download",2);a([h()],ee.prototype,"form",2);a([h({attribute:"formaction"})],ee.prototype,"formAction",2);a([h({attribute:"formenctype"})],ee.prototype,"formEnctype",2);a([h({attribute:"formmethod"})],ee.prototype,"formMethod",2);a([h({attribute:"formnovalidate",type:Boolean})],ee.prototype,"formNoValidate",2);a([h({attribute:"formtarget"})],ee.prototype,"formTarget",2);a([T("disabled",{waitUntilFirstUpdate:!0})],ee.prototype,"handleDisabledChange",1);ee=a([M("sl-button")],ee);var hs=F({tagName:"sl-button",elementClass:ee,react:N,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"}}),aw=B`
  ${V}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,xi=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=To(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=To(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=To(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=To(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=To(t);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",r===0),i.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),i.classList.toggle("sl-button-group__button--last",r===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};xi.styles=aw;a([I("slot")],xi.prototype,"defaultSlot",2);a([j()],xi.prototype,"disableRole",2);a([h()],xi.prototype,"label",2);xi=a([M("sl-button-group")],xi);function To(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var lw=F({tagName:"sl-button-group",elementClass:xi,react:N,events:{}});const uw="https://api.allorigins.win/raw?url=",cw="https://cors-anywhere.herokuapp.com/",ph="https://fantasy.premierleague.com/api/",fh={bootstrap:"bootstrap-static/",element:"element-summary/",events:"events",event:"event",entry:"entry",elementTypes:"element-types",gameweekFixtures:"fixtures/?event",teams:"teams/",leagueClassicStanding:"leagues-classic/"},dw=async e=>{let t=new Request(uw+ph+e),r=await fetch(t);if(r.status!==200&&(console.error("1st proxy failed"),t=new Request(cw+ph+e),r=await fetch(t),r.status!==200))return console.error("2nd proxy failed"),!1;const i=await r.json();return window.sessionStorage.setItem(e,JSON.stringify(i)),i},hw=()=>{{const e=window.sessionStorage.getItem(fh.bootstrap);return e?JSON.parse(e):dw(fh.bootstrap)}};function pw(e,t){return U.jsx(fo,{fallback:U.jsx("span",{children:"Scores error"}),children:U.jsxs("div",{id:"scores",children:[U.jsxs("div",{id:"current-score",children:[U.jsx("span",{id:"score-label",children:"Current Score"}),U.jsx("span",{id:"score",children:e})]}),U.jsxs("div",{id:"best-score",children:[U.jsx("span",{id:"high-score-label",children:"Personal Best"}),U.jsx("span",{id:"high-score",children:t})]})]})})}function fw(e,t){const[r,i]=le.useState(!1),o=[{prop:"total_points",label:"scored more FPL points"},{prop:"goals_scored",label:"scored more goals"},{prop:"assists",label:"more assists"},{prop:"minutes",label:"played more minutes"},{prop:"bonus",label:"been awarded more bonus points"},{prop:"selected_by_percent",label:"the higher ownership"},{prop:"bps",label:"the higher BPS score"},{prop:"now_cost",label:"the higher price"},{prop:"points_per_game",label:"averaged more points per game"},{prop:"yellow_cards",label:"received more yellow cards"}];m();function n(_){return _[Math.floor(Math.random()*_.length)]}const s=n(e),l=e.filter(_=>_.id!==s.id),u=n(l),c=n(o);function m(){i(!1)}function d(_){switch(_[c.prop]){case"selected_by_percent":return _[c.prop]+"%";case"now_cost":return _[c.prop]/10;default:return _[c.prop]}}function p(){Number(s[c.prop])>Number(u[c.prop])?t(!0):t(!1),i(!0)}function v(){Number(s[c.prop])===Number(u[c.prop])?t(!0):t(!1),i(!0)}function y(){Number(s[c.prop])<Number(u[c.prop])?t(!0):t(!1),i(!0)}return U.jsx(fo,{fallback:U.jsx("span",{children:"Question error"}),children:U.jsxs("div",{className:"question",children:[U.jsxs("h2",{children:["Who has ",U.jsx("span",{id:"metric",children:c.label}),"?"]}),U.jsxs(lw,{children:[U.jsxs(hs,{variant:"primary",id:"player1",onClick:()=>p(),children:[U.jsx("span",{id:"player1-name",children:`${s.first_name} ${s.second_name}`}),r&&U.jsx("span",{id:"player1-metric",children:d(s)})]}),U.jsx(hs,{id:"draw",onClick:()=>v(),children:"DRAW"}),U.jsxs(hs,{variant:"primary",id:"player2",onClick:()=>y(),children:[U.jsx("span",{id:"player2-name",children:`${u.first_name} ${u.second_name}`}),r&&U.jsx("span",{id:"player2-metric",children:d(u)})]})]})]})})}function mw(e){return U.jsx(fo,{fallback:U.jsx("span",{children:"Answer error"}),children:U.jsxs("div",{className:"answer",children:[e===!0&&U.jsx("p",{id:"right",hidden:!0,children:"✔ Right"}),e===!1&&U.jsx("p",{id:"wrong",hidden:!0,children:"✘ Wrong"})]})})}function gw(){const[e,t]=le.useState([]),[r,i]=le.useState(0),[o,n]=le.useState(parseInt(localStorage.getItem("highScore"))||0),[s,l]=le.useState(null),[u,c]=le.useState(!0),[m,d]=le.useState(1),p=le.useRef(null),v=2.5;function y(w){l(w),w===!0&&(i(x=>x+1),r>o&&(n(r),localStorage.setItem("highScore",r))),w===!1&&i(0),c(!1)}function _(w){return w.status==="a"||w.status==="d"}function S(w){return w.total_points>0}function b(w){return w.selected_by_percent>=v}function f(w){const{id:x,first_name:k,second_name:C,total_points:z,goals_scored:L,assists:A,bonus:ne,minutes:J,selected_by_percent:ce,bps:Ne,now_cost:Me,points_per_game:Ke,yellow_cards:Ie}=w;return{id:x,first_name:k,second_name:C,total_points:z,goals_scored:L,assists:A,bonus:ne,minutes:J,selected_by_percent:ce,bps:Ne,now_cost:Me,points_per_game:Ke,yellow_cards:Ie}}function g(){d(w=>w+1),c(!0)}return le.useEffect(()=>{t(hw)},[]),le.useEffect(()=>{p.current={popularRegisteredPlayersWithPoints:e.elements.filter(_).filter(S).filter(b)},p.byPoints=p.popularRegisteredPlayersWithPoints.sort((w,x)=>w.total_points>x.total_points?1:-1),p.playersBasic=p.byPoints.map(f)},[e]),U.jsx(fo,{fallback:U.jsx("span",{children:"Game error"}),children:U.jsxs(le.Suspense,{fallback:U.jsx(Uv,{}),children:[U.jsx(pw,{score:r,highScore:o}),U.jsx(fw,{count:m,list:p.playersBasic,setCorrectnessHandler:y}),U.jsx(mw,{isCorrect:s}),U.jsx(hs,{variant:"primary",id:"next",disabled:u,onClick:()=>g(),children:"Next question"})]})})}function vw(){return U.jsx("main",{children:U.jsx(gw,{})})}function yw(){return U.jsxs(U.Fragment,{children:[U.jsx(Pg,{}),U.jsx(vw,{}),U.jsx(Og,{})]})}ul.createRoot(document.getElementById("root")).render(U.jsx(Ch.StrictMode,{children:U.jsx(yw,{})}));
