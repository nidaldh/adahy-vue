const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginPage-CJBUhJDz.js","assets/LoginPage-bPjSGjYc.css","assets/DashboardPage--HjMLutp.js","assets/DashboardPage-Dj98W9d0.css","assets/CustomerAnimalRelationshipPage-6MgfbhPb.js","assets/CustomerAnimalRelationshipPage-C0wjRHoy.css","assets/AnimalsListPage-BAGIsdbH.js","assets/AnimalsListPage-4Mi5cP8U.css","assets/PaymentListPage-DkA3AGZb.js","assets/payments-CZv0c8BV.js","assets/PaymentListPage-_6YFrJhc.css","assets/PaymentFormPage-CdENUJTN.js","assets/PaymentFormPage-D0OoT7eM.css","assets/ReportsPage-Cd7tUIAG.js","assets/ReportsPage-XZHLkXXM.css","assets/NotFoundPage-s7TOrDHM.js","assets/NotFoundPage-CbVG8xpx.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Se={},Ns=[],jt=()=>{},$g=()=>!1,vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),El=t=>t.startsWith("onUpdate:"),Ke=Object.assign,bl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bg=Object.prototype.hasOwnProperty,we=(t,e)=>Bg.call(t,e),K=Array.isArray,ks=t=>nr(t)==="[object Map]",zs=t=>nr(t)==="[object Set]",Kc=t=>nr(t)==="[object Date]",te=t=>typeof t=="function",Ue=t=>typeof t=="string",Gt=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Ch=t=>(Re(t)||te(t))&&te(t.then)&&te(t.catch),Th=Object.prototype.toString,nr=t=>Th.call(t),Vg=t=>nr(t).slice(8,-1),Sh=t=>nr(t)==="[object Object]",Il=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hg=/-(\w)/g,St=yo(t=>t.replace(Hg,(e,n)=>n?n.toUpperCase():"")),Wg=/\B([A-Z])/g,Gn=yo(t=>t.replace(Wg,"-$1").toLowerCase()),wo=yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ta=yo(t=>t?`on${wo(t)}`:""),Mn=(t,e)=>!Object.is(t,e),Ar=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ah=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Fr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},jg=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let Gc;const Eo=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ue(s)?zg(s):Cl(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ue(t)||Re(t))return t}const qg=/;(?![^(]*\))/g,Kg=/:([^]+)/,Gg=/\/\*[^]*?\*\//g;function zg(t){const e={};return t.replace(Gg,"").split(qg).forEach(n=>{if(n){const s=n.split(Kg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ki(t){let e="";if(Ue(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=ki(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qg=wl(Yg);function Rh(t){return!!t||t===""}function Jg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=sr(t[s],e[s]);return n}function sr(t,e){if(t===e)return!0;let n=Kc(t),s=Kc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Gt(t),s=Gt(e),n||s)return t===e;if(n=K(t),s=K(e),n||s)return n&&s?Jg(t,e):!1;if(n=Re(t),s=Re(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!sr(t[o],e[o]))return!1}}return String(t)===String(e)}function Tl(t,e){return t.findIndex(n=>sr(n,e))}const Ph=t=>!!(t&&t.__v_isRef===!0),Be=t=>Ue(t)?t:t==null?"":K(t)||Re(t)&&(t.toString===Th||!te(t.toString))?Ph(t)?Be(t.value):JSON.stringify(t,Nh,2):String(t),Nh=(t,e)=>Ph(e)?Nh(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[na(s,r)+" =>"]=i,n),{})}:zs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>na(n))}:Gt(e)?na(e):Re(e)&&!K(e)&&!Sh(e)?String(e):e,na=(t,e="")=>{var n;return Gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let et;class kh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){++this._on===1&&(this.prevScope=et,et=this)}off(){this._on>0&&--this._on===0&&(et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Oh(t){return new kh(t)}function Dh(){return et}function Xg(t,e=!1){et&&et.cleanups.push(t)}let Ne;const sa=new WeakSet;class xh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,et&&et.active&&et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sa.has(this)&&(sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zc(this),Fh(this);const e=Ne,n=kt;Ne=this,kt=!0;try{return this.fn()}finally{Uh(this),Ne=e,kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rl(e);this.deps=this.depsTail=void 0,zc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xa(this)&&this.run()}get dirty(){return xa(this)}}let Mh=0,mi,gi;function Lh(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=mi,mi=t}function Sl(){Mh++}function Al(){if(--Mh>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mi;){let e=mi;for(mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Fh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Uh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Rl(s),Zg(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function xa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($h(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $h(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi)||(t.globalVersion=Oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!xa(t))))return;t.flags|=2;const e=t.dep,n=Ne,s=kt;Ne=t,kt=!0;try{Fh(t);const i=t.fn(t._value);(e.version===0||Mn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ne=n,kt=s,Uh(t),t.flags&=-3}}function Rl(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Rl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let kt=!0;const Bh=[];function hn(){Bh.push(kt),kt=!1}function fn(){const t=Bh.pop();kt=t===void 0?!0:t}function zc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let Oi=0;class e_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!kt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new e_(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Vh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=s)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){Sl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Al()}}}function Vh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Vh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ur=new WeakMap,as=Symbol(""),Ma=Symbol(""),Di=Symbol("");function tt(t,e,n){if(kt&&Ne){let s=Ur.get(t);s||Ur.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Pl),i.map=s,i.key=n),i.track()}}function nn(t,e,n,s,i,r){const o=Ur.get(t);if(!o){Oi++;return}const a=l=>{l&&l.trigger()};if(Sl(),e==="clear")o.forEach(a);else{const l=K(t),c=l&&Il(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===Di||!Gt(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Di)),e){case"add":l?c&&a(o.get("length")):(a(o.get(as)),ks(t)&&a(o.get(Ma)));break;case"delete":l||(a(o.get(as)),ks(t)&&a(o.get(Ma)));break;case"set":ks(t)&&a(o.get(as));break}}Al()}function t_(t,e){const n=Ur.get(t);return n&&n.get(e)}function bs(t){const e=me(t);return e===t?e:(tt(e,"iterate",Di),It(t)?e:e.map(Ye))}function bo(t){return tt(t=me(t),"iterate",Di),t}const n_={__proto__:null,[Symbol.iterator](){return ia(this,Symbol.iterator,Ye)},concat(...t){return bs(this).concat(...t.map(e=>K(e)?bs(e):e))},entries(){return ia(this,"entries",t=>(t[1]=Ye(t[1]),t))},every(t,e){return Jt(this,"every",t,e,void 0,arguments)},filter(t,e){return Jt(this,"filter",t,e,n=>n.map(Ye),arguments)},find(t,e){return Jt(this,"find",t,e,Ye,arguments)},findIndex(t,e){return Jt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jt(this,"findLast",t,e,Ye,arguments)},findLastIndex(t,e){return Jt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ra(this,"includes",t)},indexOf(...t){return ra(this,"indexOf",t)},join(t){return bs(this).join(t)},lastIndexOf(...t){return ra(this,"lastIndexOf",t)},map(t,e){return Jt(this,"map",t,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...t){return ii(this,"push",t)},reduce(t,...e){return Yc(this,"reduce",t,e)},reduceRight(t,...e){return Yc(this,"reduceRight",t,e)},shift(){return ii(this,"shift")},some(t,e){return Jt(this,"some",t,e,void 0,arguments)},splice(...t){return ii(this,"splice",t)},toReversed(){return bs(this).toReversed()},toSorted(t){return bs(this).toSorted(t)},toSpliced(...t){return bs(this).toSpliced(...t)},unshift(...t){return ii(this,"unshift",t)},values(){return ia(this,"values",Ye)}};function ia(t,e,n){const s=bo(t),i=s[e]();return s!==t&&!It(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const s_=Array.prototype;function Jt(t,e,n,s,i,r){const o=bo(t),a=o!==t&&!It(t),l=o[e];if(l!==s_[e]){const d=l.apply(t,r);return a?Ye(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,Ye(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Yc(t,e,n,s){const i=bo(t);let r=n;return i!==t&&(It(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Ye(a),l,t)}),i[e](r,...s)}function ra(t,e,n){const s=me(t);tt(s,"iterate",Di);const i=s[e](...n);return(i===-1||i===!1)&&Ol(n[0])?(n[0]=me(n[0]),s[e](...n)):i}function ii(t,e,n=[]){hn(),Sl();const s=me(t)[e].apply(t,n);return Al(),fn(),s}const i_=wl("__proto__,__v_isRef,__isVue"),Hh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gt));function r_(t){Gt(t)||(t=String(t));const e=me(this);return tt(e,"has",t),e.hasOwnProperty(t)}class Wh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?m_:Gh:r?Kh:qh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=K(e);if(!i){let l;if(o&&(l=n_[n]))return l;if(n==="hasOwnProperty")return r_}const a=Reflect.get(e,n,$e(e)?e:s);return(Gt(n)?Hh.has(n):i_(n))||(i||tt(e,"get",n),r)?a:$e(a)?o&&Il(n)?a:a.value:Re(a)?i?Yh(a):ir(a):a}}class jh extends Wh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Hn(r);if(!It(s)&&!Hn(s)&&(r=me(r),s=me(s)),!K(e)&&$e(r)&&!$e(s))return l?!1:(r.value=s,!0)}const o=K(e)&&Il(n)?Number(n)<e.length:we(e,n),a=Reflect.set(e,n,s,$e(e)?e:i);return e===me(i)&&(o?Mn(s,r)&&nn(e,"set",n,s):nn(e,"add",n,s)),a}deleteProperty(e,n){const s=we(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&nn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Gt(n)||!Hh.has(n))&&tt(e,"has",n),s}ownKeys(e){return tt(e,"iterate",K(e)?"length":as),Reflect.ownKeys(e)}}class o_ extends Wh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const a_=new jh,l_=new o_,c_=new jh(!0);const La=t=>t,yr=t=>Reflect.getPrototypeOf(t);function u_(t,e,n){return function(...s){const i=this.__v_raw,r=me(i),o=ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?La:e?$r:Ye;return!e&&tt(r,"iterate",l?Ma:as),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function wr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function d_(t,e){const n={get(i){const r=this.__v_raw,o=me(r),a=me(i);t||(Mn(i,a)&&tt(o,"get",i),tt(o,"get",a));const{has:l}=yr(o),c=e?La:t?$r:Ye;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&tt(me(i),"iterate",as),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=me(r),a=me(i);return t||(Mn(i,a)&&tt(o,"has",i),tt(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=me(a),c=e?La:t?$r:Ye;return!t&&tt(l,"iterate",as),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return Ke(n,t?{add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear")}:{add(i){!e&&!It(i)&&!Hn(i)&&(i=me(i));const r=me(this);return yr(r).has.call(r,i)||(r.add(i),nn(r,"add",i,i)),this},set(i,r){!e&&!It(r)&&!Hn(r)&&(r=me(r));const o=me(this),{has:a,get:l}=yr(o);let c=a.call(o,i);c||(i=me(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Mn(r,u)&&nn(o,"set",i,r):nn(o,"add",i,r),this},delete(i){const r=me(this),{has:o,get:a}=yr(r);let l=o.call(r,i);l||(i=me(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&nn(r,"delete",i,void 0),c},clear(){const i=me(this),r=i.size!==0,o=i.clear();return r&&nn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=u_(i,t,e)}),n}function Nl(t,e){const n=d_(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(we(n,i)&&i in s?n:s,i,r)}const h_={get:Nl(!1,!1)},f_={get:Nl(!1,!0)},p_={get:Nl(!0,!1)};const qh=new WeakMap,Kh=new WeakMap,Gh=new WeakMap,m_=new WeakMap;function g_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function __(t){return t.__v_skip||!Object.isExtensible(t)?0:g_(Vg(t))}function ir(t){return Hn(t)?t:kl(t,!1,a_,h_,qh)}function zh(t){return kl(t,!1,c_,f_,Kh)}function Yh(t){return kl(t,!0,l_,p_,Gh)}function kl(t,e,n,s,i){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=__(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function Ln(t){return Hn(t)?Ln(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function It(t){return!!(t&&t.__v_isShallow)}function Ol(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Dl(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&Ah(t,"__v_skip",!0),t}const Ye=t=>Re(t)?ir(t):t,$r=t=>Re(t)?Yh(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function Ae(t){return Qh(t,!1)}function v_(t){return Qh(t,!0)}function Qh(t,e){return $e(t)?t:new y_(t,e)}class y_{constructor(e,n){this.dep=new Pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:Ye(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||It(e)||Hn(e);e=s?e:me(e),Mn(e,n)&&(this._rawValue=e,this._value=s?e:Ye(e),this.dep.trigger())}}function Me(t){return $e(t)?t.value:t}const w_={get:(t,e,n)=>e==="__v_raw"?t:Me(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return $e(i)&&!$e(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Jh(t){return Ln(t)?t:new Proxy(t,w_)}function E_(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=I_(t,n);return e}class b_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return t_(me(this._object),this._key)}}function I_(t,e,n){const s=t[e];return $e(s)?s:new b_(t,e,n)}class C_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Lh(this,!0),!0}get value(){const e=this.dep.track();return $h(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function T_(t,e,n=!1){let s,i;return te(t)?s=t:(s=t.get,i=t.set),new C_(s,i,n)}const Er={},Br=new WeakMap;let Zn;function S_(t,e=!1,n=Zn){if(n){let s=Br.get(n);s||Br.set(n,s=[]),s.push(t)}}function A_(t,e,n=Se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=b=>i?b:It(b)||i===!1||i===0?sn(b,1):sn(b);let u,d,h,f,g=!1,y=!1;if($e(t)?(d=()=>t.value,g=It(t)):Ln(t)?(d=()=>c(t),g=!0):K(t)?(y=!0,g=t.some(b=>Ln(b)||It(b)),d=()=>t.map(b=>{if($e(b))return b.value;if(Ln(b))return c(b);if(te(b))return l?l(b,2):b()})):te(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){hn();try{h()}finally{fn()}}const b=Zn;Zn=u;try{return l?l(t,3,[f]):t(f)}finally{Zn=b}}:d=jt,e&&i){const b=d,L=i===!0?1/0:i;d=()=>sn(b(),L)}const R=Dh(),E=()=>{u.stop(),R&&R.active&&bl(R.effects,u)};if(r&&e){const b=e;e=(...L)=>{b(...L),E()}}let v=y?new Array(t.length).fill(Er):Er;const P=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const L=u.run();if(i||g||(y?L.some((ne,se)=>Mn(ne,v[se])):Mn(L,v))){h&&h();const ne=Zn;Zn=u;try{const se=[L,v===Er?void 0:y&&v[0]===Er?[]:v,f];v=L,l?l(e,3,se):e(...se)}finally{Zn=ne}}}else u.run()};return a&&a(P),u=new xh(d),u.scheduler=o?()=>o(P,!1):P,f=b=>S_(b,!1,u),h=u.onStop=()=>{const b=Br.get(u);if(b){if(l)l(b,4);else for(const L of b)L();Br.delete(u)}},e?s?P(!0):v=u.run():o?o(P.bind(null,!0),!0):u.run(),E.pause=u.pause.bind(u),E.resume=u.resume.bind(u),E.stop=E,E}function sn(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))sn(t.value,e,n);else if(K(t))for(let s=0;s<t.length;s++)sn(t[s],e,n);else if(zs(t)||ks(t))t.forEach(s=>{sn(s,e,n)});else if(Sh(t)){for(const s in t)sn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&sn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rr(t,e,n,s){try{return s?t(...s):t()}catch(i){Io(i,e,n)}}function Dt(t,e,n,s){if(te(t)){const i=rr(t,e,n,s);return i&&Ch(i)&&i.catch(r=>{Io(r,e,n)}),i}if(K(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Dt(t[r],e,n,s));return i}}function Io(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Se;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){hn(),rr(r,null,10,[t,l,c]),fn();return}}R_(t,n,i,s,o)}function R_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const st=[];let Vt=-1;const Os=[];let Tn=null,Ss=0;const Xh=Promise.resolve();let Vr=null;function Co(t){const e=Vr||Xh;return t?e.then(this?t.bind(this):t):e}function P_(t){let e=Vt+1,n=st.length;for(;e<n;){const s=e+n>>>1,i=st[s],r=xi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function xl(t){if(!(t.flags&1)){const e=xi(t),n=st[st.length-1];!n||!(t.flags&2)&&e>=xi(n)?st.push(t):st.splice(P_(e),0,t),t.flags|=1,Zh()}}function Zh(){Vr||(Vr=Xh.then(tf))}function N_(t){K(t)?Os.push(...t):Tn&&t.id===-1?Tn.splice(Ss+1,0,t):t.flags&1||(Os.push(t),t.flags|=1),Zh()}function Qc(t,e,n=Vt+1){for(;n<st.length;n++){const s=st[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;st.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ef(t){if(Os.length){const e=[...new Set(Os)].sort((n,s)=>xi(n)-xi(s));if(Os.length=0,Tn){Tn.push(...e);return}for(Tn=e,Ss=0;Ss<Tn.length;Ss++){const n=Tn[Ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tn=null,Ss=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tf(t){try{for(Vt=0;Vt<st.length;Vt++){const e=st[Vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vt<st.length;Vt++){const e=st[Vt];e&&(e.flags&=-2)}Vt=-1,st.length=0,ef(),Vr=null,(st.length||Os.length)&&tf()}}let rt=null,nf=null;function Hr(t){const e=rt;return rt=t,nf=t&&t.type.__scopeId||null,e}function is(t,e=rt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&lu(-1);const r=Hr(e);let o;try{o=t(...i)}finally{Hr(r),s._d&&lu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function gt(t,e){if(rt===null)return t;const n=No(rt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Se]=e[i];r&&(te(r)&&(r={mounted:r,updated:r}),r.deep&&sn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Yn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hn(),Dt(l,n,8,[t.el,a,t,e]),fn())}}const k_=Symbol("_vte"),sf=t=>t.__isTeleport,Sn=Symbol("_leaveCb"),br=Symbol("_enterCb");function O_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return or(()=>{t.isMounted=!0}),hf(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],rf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},of=t=>{const e=t.subTree;return e.component?of(e.component):e},D_={name:"BaseTransition",props:rf,setup(t,{slots:e}){const n=Av(),s=O_();return()=>{const i=e.default&&cf(e.default(),!0);if(!i||!i.length)return;const r=af(i),o=me(t),{mode:a}=o;if(s.isLeaving)return oa(r);const l=Jc(r);if(!l)return oa(r);let c=Fa(l,o,s,n,d=>c=d);l.type!==it&&Mi(l,c);let u=n.subTree&&Jc(n.subTree);if(u&&u.type!==it&&!ss(l,u)&&of(n).type!==it){let d=Fa(u,o,s,n);if(Mi(u,d),a==="out-in"&&l.type!==it)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},oa(r);a==="in-out"&&l.type!==it?d.delayLeave=(h,f,g)=>{const y=lf(s,u);y[String(u.key)]=u,h[Sn]=()=>{f(),h[Sn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function af(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const x_=D_;function lf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Fa(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:R,onAppear:E,onAfterAppear:v,onAppearCancelled:P}=e,b=String(t.key),L=lf(n,t),ne=(U,J)=>{U&&Dt(U,s,9,J)},se=(U,J)=>{const ce=J[1];ne(U,J),K(U)?U.every(H=>H.length<=1)&&ce():U.length<=1&&ce()},Z={mode:o,persisted:a,beforeEnter(U){let J=l;if(!n.isMounted)if(r)J=R||l;else return;U[Sn]&&U[Sn](!0);const ce=L[b];ce&&ss(t,ce)&&ce.el[Sn]&&ce.el[Sn](),ne(J,[U])},enter(U){let J=c,ce=u,H=d;if(!n.isMounted)if(r)J=E||c,ce=v||u,H=P||d;else return;let le=!1;const A=U[br]=x=>{le||(le=!0,x?ne(H,[U]):ne(ce,[U]),Z.delayedLeave&&Z.delayedLeave(),U[br]=void 0)};J?se(J,[U,A]):A()},leave(U,J){const ce=String(t.key);if(U[br]&&U[br](!0),n.isUnmounting)return J();ne(h,[U]);let H=!1;const le=U[Sn]=A=>{H||(H=!0,J(),A?ne(y,[U]):ne(g,[U]),U[Sn]=void 0,L[ce]===t&&delete L[ce])};L[ce]=t,f?se(f,[U,le]):le()},clone(U){const J=Fa(U,e,n,s,i);return i&&i(J),J}};return Z}function oa(t){if(To(t))return t=Wn(t),t.children=null,t}function Jc(t){if(!To(t))return sf(t.type)&&t.children?af(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&te(n.default))return n.default()}}function Mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cf(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===mt?(o.patchFlag&128&&i++,s=s.concat(cf(o.children,e,a))):(e||o.type!==it)&&s.push(a!=null?Wn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Rt(t,e){return te(t)?Ke({name:t.name},e,{setup:t}):t}function uf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Wr(t,e,n,s,i=!1){if(K(t)){t.forEach((g,y)=>Wr(g,e&&(K(e)?e[y]:e),n,s,i));return}if(_i(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Wr(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?No(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,d=a.setupState,h=me(d),f=d===Se?()=>!1:g=>we(h,g);if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,f(c)&&(d[c]=null)):$e(c)&&(c.value=null)),te(l))rr(l,a,12,[o,u]);else{const g=Ue(l),y=$e(l);if(g||y){const R=()=>{if(t.f){const E=g?f(l)?d[l]:u[l]:l.value;i?K(E)&&bl(E,r):K(E)?E.includes(r)||E.push(r):g?(u[l]=[r],f(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,f(l)&&(d[l]=o)):y&&(l.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,pt(R,n)):R()}}}Eo().requestIdleCallback;Eo().cancelIdleCallback;const _i=t=>!!t.type.__asyncLoader,To=t=>t.type.__isKeepAlive;function M_(t,e){df(t,"a",e)}function L_(t,e){df(t,"da",e)}function df(t,e,n=qe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(So(e,s,n),n){let i=n.parent;for(;i&&i.parent;)To(i.parent.vnode)&&F_(s,e,n,i),i=i.parent}}function F_(t,e,n,s){const i=So(e,t,s,!0);Ao(()=>{bl(s[e],i)},n)}function So(t,e,n=qe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{hn();const a=ar(n),l=Dt(e,n,t,o);return a(),fn(),l});return s?i.unshift(r):i.push(r),r}}const _n=t=>(e,n=qe)=>{(!Fi||t==="sp")&&So(t,(...s)=>e(...s),n)},U_=_n("bm"),or=_n("m"),$_=_n("bu"),B_=_n("u"),hf=_n("bum"),Ao=_n("um"),V_=_n("sp"),H_=_n("rtg"),W_=_n("rtc");function j_(t,e=qe){So("ec",t,e)}const ff="components";function pf(t,e){return gf(ff,t,!0,e)||t}const mf=Symbol.for("v-ndc");function Xc(t){return Ue(t)?gf(ff,t,!1)||t:t||mf}function gf(t,e,n=!0,s=!1){const i=rt||qe;if(i){const r=i.type;{const a=Ov(r,!1);if(a&&(a===e||a===St(e)||a===wo(St(e))))return r}const o=Zc(i[t]||r[t],e)||Zc(i.appContext[t],e);return!o&&s?r:o}}function Zc(t,e){return t&&(t[e]||t[St(e)]||t[wo(St(e))])}function _f(t,e,n,s){let i;const r=n,o=K(t);if(o||Ue(t)){const a=o&&Ln(t);let l=!1,c=!1;a&&(l=!It(t),c=Hn(t),t=bo(t)),i=new Array(t.length);for(let u=0,d=t.length;u<d;u++)i[u]=e(l?c?$r(Ye(t[u])):Ye(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Re(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Ua=t=>t?Ff(t)?No(t):Ua(t.parent):null,vi=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ua(t.parent),$root:t=>Ua(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yf(t),$forceUpdate:t=>t.f||(t.f=()=>{xl(t.update)}),$nextTick:t=>t.n||(t.n=Co.bind(t.proxy)),$watch:t=>hv.bind(t)}),aa=(t,e)=>t!==Se&&!t.__isScriptSetup&&we(t,e),q_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(aa(s,e))return o[e]=1,s[e];if(i!==Se&&we(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&we(c,e))return o[e]=3,r[e];if(n!==Se&&we(n,e))return o[e]=4,n[e];$a&&(o[e]=0)}}const u=vi[e];let d,h;if(u)return e==="$attrs"&&tt(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Se&&we(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,we(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return aa(i,e)?(i[e]=n,!0):s!==Se&&we(s,e)?(s[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&we(t,o)||aa(e,o)||(a=r[0])&&we(a,o)||we(s,o)||we(vi,o)||we(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function eu(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $a=!0;function K_(t){const e=yf(t),n=t.proxy,s=t.ctx;$a=!1,e.beforeCreate&&tu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:g,activated:y,deactivated:R,beforeDestroy:E,beforeUnmount:v,destroyed:P,unmounted:b,render:L,renderTracked:ne,renderTriggered:se,errorCaptured:Z,serverPrefetch:U,expose:J,inheritAttrs:ce,components:H,directives:le,filters:A}=e;if(c&&G_(c,s,null),o)for(const D in o){const j=o[D];te(j)&&(s[D]=j.bind(n))}if(i){const D=i.call(n,n);Re(D)&&(t.data=ir(D))}if($a=!0,r)for(const D in r){const j=r[D],oe=te(j)?j.bind(n,n):te(j.get)?j.get.bind(n,n):jt,pe=!te(j)&&te(j.set)?j.set.bind(n):jt,ue=de({get:oe,set:pe});Object.defineProperty(s,D,{enumerable:!0,configurable:!0,get:()=>ue.value,set:he=>ue.value=he})}if(a)for(const D in a)vf(a[D],s,n,D);if(l){const D=te(l)?l.call(n):l;Reflect.ownKeys(D).forEach(j=>{Rr(j,D[j])})}u&&tu(u,t,"c");function O(D,j){K(j)?j.forEach(oe=>D(oe.bind(n))):j&&D(j.bind(n))}if(O(U_,d),O(or,h),O($_,f),O(B_,g),O(M_,y),O(L_,R),O(j_,Z),O(W_,ne),O(H_,se),O(hf,v),O(Ao,b),O(V_,U),K(J))if(J.length){const D=t.exposed||(t.exposed={});J.forEach(j=>{Object.defineProperty(D,j,{get:()=>n[j],set:oe=>n[j]=oe})})}else t.exposed||(t.exposed={});L&&t.render===jt&&(t.render=L),ce!=null&&(t.inheritAttrs=ce),H&&(t.components=H),le&&(t.directives=le),U&&uf(t)}function G_(t,e,n=jt){K(t)&&(t=Ba(t));for(const s in t){const i=t[s];let r;Re(i)?"default"in i?r=Ct(i.from||s,i.default,!0):r=Ct(i.from||s):r=Ct(i),$e(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function tu(t,e,n){Dt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vf(t,e,n,s){let i=s.includes(".")?Of(n,s):()=>n[s];if(Ue(t)){const r=e[t];te(r)&&Je(i,r)}else if(te(t))Je(i,t.bind(n));else if(Re(t))if(K(t))t.forEach(r=>vf(r,e,n,s));else{const r=te(t.handler)?t.handler.bind(n):e[t.handler];te(r)&&Je(i,r,t)}}function yf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>jr(l,c,o,!0)),jr(l,e,o)),Re(e)&&r.set(e,l),l}function jr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&jr(t,r,n,!0),i&&i.forEach(o=>jr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const z_={data:nu,props:su,emits:su,methods:di,computed:di,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:di,directives:di,watch:Q_,provide:nu,inject:Y_};function nu(t,e){return e?t?function(){return Ke(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Y_(t,e){return di(Ba(t),Ba(e))}function Ba(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?Ke(Object.create(null),t,e):e}function su(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Ke(Object.create(null),eu(t),eu(e??{})):e}function Q_(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=nt(t[s],e[s]);return n}function wf(){return{app:null,config:{isNativeTag:$g,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J_=0;function X_(t,e){return function(s,i=null){te(s)||(s=Ke({},s)),i!=null&&!Re(i)&&(i=null);const r=wf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:J_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:xv,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...d)):te(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const f=c._ceVNode||xe(s,i);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(f,u,h),l=!0,c._container=u,u.__vue_app__=c,No(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Dt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=ls;ls=c;try{return u()}finally{ls=d}}};return c}}let ls=null;function Rr(t,e){if(qe){let n=qe.provides;const s=qe.parent&&qe.parent.provides;s===n&&(n=qe.provides=Object.create(s)),n[t]=e}}function Ct(t,e,n=!1){const s=qe||rt;if(s||ls){let i=ls?ls._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(s&&s.proxy):e}}function Z_(){return!!(qe||rt||ls)}const Ef={},bf=()=>Object.create(Ef),If=t=>Object.getPrototypeOf(t)===Ef;function ev(t,e,n,s=!1){const i={},r=bf();t.propsDefaults=Object.create(null),Cf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:zh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function tv(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=me(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ro(t.emitsOptions,h))continue;const f=e[h];if(l)if(we(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const g=St(h);i[g]=Va(l,a,g,f,t,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{Cf(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!we(e,d)&&((u=Gn(d))===d||!we(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Va(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!we(e,d))&&(delete r[d],c=!0)}c&&nn(t.attrs,"set","")}function Cf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pi(l))continue;const c=e[l];let u;i&&we(i,u=St(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ro(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=me(n),c=a||Se;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Va(i,l,d,c[d],t,!we(c,d))}}return o}function Va(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=we(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ar(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Gn(n))&&(s=!0))}return s}const nv=new WeakMap;function Tf(t,e,n=!1){const s=n?nv:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!te(t)){const u=d=>{l=!0;const[h,f]=Tf(d,e,!0);Ke(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Re(t)&&s.set(t,Ns),Ns;if(K(r))for(let u=0;u<r.length;u++){const d=St(r[u]);iu(d)&&(o[d]=Se)}else if(r)for(const u in r){const d=St(u);if(iu(d)){const h=r[u],f=o[d]=K(h)||te(h)?{type:h}:Ke({},h),g=f.type;let y=!1,R=!0;if(K(g))for(let E=0;E<g.length;++E){const v=g[E],P=te(v)&&v.name;if(P==="Boolean"){y=!0;break}else P==="String"&&(R=!1)}else y=te(g)&&g.name==="Boolean";f[0]=y,f[1]=R,(y||we(f,"default"))&&a.push(d)}}const c=[o,a];return Re(t)&&s.set(t,c),c}function iu(t){return t[0]!=="$"&&!pi(t)}const Ml=t=>t[0]==="_"||t==="$stable",Ll=t=>K(t)?t.map(Ht):[Ht(t)],sv=(t,e,n)=>{if(e._n)return e;const s=is((...i)=>Ll(e(...i)),n);return s._c=!1,s},Sf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ml(i))continue;const r=t[i];if(te(r))e[i]=sv(i,r,s);else if(r!=null){const o=Ll(r);e[i]=()=>o}}},Af=(t,e)=>{const n=Ll(e);t.slots.default=()=>n},Rf=(t,e,n)=>{for(const s in e)(n||!Ml(s))&&(t[s]=e[s])},iv=(t,e,n)=>{const s=t.slots=bf();if(t.vnode.shapeFlag&32){const i=e._;i?(Rf(s,e,n),n&&Ah(s,"_",i,!0)):Sf(e,s)}else e&&Af(t,e)},rv=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Rf(i,e,n):(r=!e.$stable,Sf(e,i)),o=e}else e&&(Af(t,e),o={default:1});if(r)for(const a in i)!Ml(a)&&o[a]==null&&delete i[a]},pt=yv;function ov(t){return av(t)}function av(t,e){const n=Eo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=jt,insertStaticContent:g}=t,y=(p,m,_,I=null,S=null,C=null,$=void 0,F=null,M=!!m.dynamicChildren)=>{if(p===m)return;p&&!ss(p,m)&&(I=w(p),he(p,S,C,!0),p=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:N,ref:Y,shapeFlag:V}=m;switch(N){case Po:R(p,m,_,I);break;case it:E(p,m,_,I);break;case Pr:p==null&&v(m,_,I,$);break;case mt:H(p,m,_,I,S,C,$,F,M);break;default:V&1?L(p,m,_,I,S,C,$,F,M):V&6?le(p,m,_,I,S,C,$,F,M):(V&64||V&128)&&N.process(p,m,_,I,S,C,$,F,M,q)}Y!=null&&S&&Wr(Y,p&&p.ref,C,m||p,!m)},R=(p,m,_,I)=>{if(p==null)s(m.el=a(m.children),_,I);else{const S=m.el=p.el;m.children!==p.children&&c(S,m.children)}},E=(p,m,_,I)=>{p==null?s(m.el=l(m.children||""),_,I):m.el=p.el},v=(p,m,_,I)=>{[p.el,p.anchor]=g(p.children,m,_,I,p.el,p.anchor)},P=({el:p,anchor:m},_,I)=>{let S;for(;p&&p!==m;)S=h(p),s(p,_,I),p=S;s(m,_,I)},b=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=h(p),i(p),p=_;i(m)},L=(p,m,_,I,S,C,$,F,M)=>{m.type==="svg"?$="svg":m.type==="math"&&($="mathml"),p==null?ne(m,_,I,S,C,$,F,M):U(p,m,S,C,$,F,M)},ne=(p,m,_,I,S,C,$,F)=>{let M,N;const{props:Y,shapeFlag:V,transition:G,dirs:ee}=p;if(M=p.el=o(p.type,C,Y&&Y.is,Y),V&8?u(M,p.children):V&16&&Z(p.children,M,null,I,S,la(p,C),$,F),ee&&Yn(p,null,I,"created"),se(M,p,p.scopeId,$,I),Y){for(const Pe in Y)Pe!=="value"&&!pi(Pe)&&r(M,Pe,null,Y[Pe],C,I);"value"in Y&&r(M,"value",null,Y.value,C),(N=Y.onVnodeBeforeMount)&&Bt(N,I,p)}ee&&Yn(p,null,I,"beforeMount");const fe=lv(S,G);fe&&G.beforeEnter(M),s(M,m,_),((N=Y&&Y.onVnodeMounted)||fe||ee)&&pt(()=>{N&&Bt(N,I,p),fe&&G.enter(M),ee&&Yn(p,null,I,"mounted")},S)},se=(p,m,_,I,S)=>{if(_&&f(p,_),I)for(let C=0;C<I.length;C++)f(p,I[C]);if(S){let C=S.subTree;if(m===C||xf(C.type)&&(C.ssContent===m||C.ssFallback===m)){const $=S.vnode;se(p,$,$.scopeId,$.slotScopeIds,S.parent)}}},Z=(p,m,_,I,S,C,$,F,M=0)=>{for(let N=M;N<p.length;N++){const Y=p[N]=F?An(p[N]):Ht(p[N]);y(null,Y,m,_,I,S,C,$,F)}},U=(p,m,_,I,S,C,$)=>{const F=m.el=p.el;let{patchFlag:M,dynamicChildren:N,dirs:Y}=m;M|=p.patchFlag&16;const V=p.props||Se,G=m.props||Se;let ee;if(_&&Qn(_,!1),(ee=G.onVnodeBeforeUpdate)&&Bt(ee,_,m,p),Y&&Yn(m,p,_,"beforeUpdate"),_&&Qn(_,!0),(V.innerHTML&&G.innerHTML==null||V.textContent&&G.textContent==null)&&u(F,""),N?J(p.dynamicChildren,N,F,_,I,la(m,S),C):$||j(p,m,F,null,_,I,la(m,S),C,!1),M>0){if(M&16)ce(F,V,G,_,S);else if(M&2&&V.class!==G.class&&r(F,"class",null,G.class,S),M&4&&r(F,"style",V.style,G.style,S),M&8){const fe=m.dynamicProps;for(let Pe=0;Pe<fe.length;Pe++){const Ee=fe[Pe],ht=V[Ee],ct=G[Ee];(ct!==ht||Ee==="value")&&r(F,Ee,ht,ct,S,_)}}M&1&&p.children!==m.children&&u(F,m.children)}else!$&&N==null&&ce(F,V,G,_,S);((ee=G.onVnodeUpdated)||Y)&&pt(()=>{ee&&Bt(ee,_,m,p),Y&&Yn(m,p,_,"updated")},I)},J=(p,m,_,I,S,C,$)=>{for(let F=0;F<m.length;F++){const M=p[F],N=m[F],Y=M.el&&(M.type===mt||!ss(M,N)||M.shapeFlag&198)?d(M.el):_;y(M,N,Y,null,I,S,C,$,!0)}},ce=(p,m,_,I,S)=>{if(m!==_){if(m!==Se)for(const C in m)!pi(C)&&!(C in _)&&r(p,C,m[C],null,S,I);for(const C in _){if(pi(C))continue;const $=_[C],F=m[C];$!==F&&C!=="value"&&r(p,C,F,$,S,I)}"value"in _&&r(p,"value",m.value,_.value,S)}},H=(p,m,_,I,S,C,$,F,M)=>{const N=m.el=p?p.el:a(""),Y=m.anchor=p?p.anchor:a("");let{patchFlag:V,dynamicChildren:G,slotScopeIds:ee}=m;ee&&(F=F?F.concat(ee):ee),p==null?(s(N,_,I),s(Y,_,I),Z(m.children||[],_,Y,S,C,$,F,M)):V>0&&V&64&&G&&p.dynamicChildren?(J(p.dynamicChildren,G,_,S,C,$,F),(m.key!=null||S&&m===S.subTree)&&Pf(p,m,!0)):j(p,m,_,Y,S,C,$,F,M)},le=(p,m,_,I,S,C,$,F,M)=>{m.slotScopeIds=F,p==null?m.shapeFlag&512?S.ctx.activate(m,_,I,$,M):A(m,_,I,S,C,$,M):x(p,m,M)},A=(p,m,_,I,S,C,$)=>{const F=p.component=Sv(p,I,S);if(To(p)&&(F.ctx.renderer=q),Rv(F,!1,$),F.asyncDep){if(S&&S.registerDep(F,O,$),!p.el){const M=F.subTree=xe(it);E(null,M,m,_)}}else O(F,p,m,_,S,C,$)},x=(p,m,_)=>{const I=m.component=p.component;if(_v(p,m,_))if(I.asyncDep&&!I.asyncResolved){D(I,m,_);return}else I.next=m,I.update();else m.el=p.el,I.vnode=m},O=(p,m,_,I,S,C,$)=>{const F=()=>{if(p.isMounted){let{next:V,bu:G,u:ee,parent:fe,vnode:Pe}=p;{const Ut=Nf(p);if(Ut){V&&(V.el=Pe.el,D(p,V,$)),Ut.asyncDep.then(()=>{p.isUnmounted||F()});return}}let Ee=V,ht;Qn(p,!1),V?(V.el=Pe.el,D(p,V,$)):V=Pe,G&&Ar(G),(ht=V.props&&V.props.onVnodeBeforeUpdate)&&Bt(ht,fe,V,Pe),Qn(p,!0);const ct=ou(p),Ft=p.subTree;p.subTree=ct,y(Ft,ct,d(Ft.el),w(Ft),p,S,C),V.el=ct.el,Ee===null&&vv(p,ct.el),ee&&pt(ee,S),(ht=V.props&&V.props.onVnodeUpdated)&&pt(()=>Bt(ht,fe,V,Pe),S)}else{let V;const{el:G,props:ee}=m,{bm:fe,m:Pe,parent:Ee,root:ht,type:ct}=p,Ft=_i(m);Qn(p,!1),fe&&Ar(fe),!Ft&&(V=ee&&ee.onVnodeBeforeMount)&&Bt(V,Ee,m),Qn(p,!0);{ht.ce&&ht.ce._injectChildStyle(ct);const Ut=p.subTree=ou(p);y(null,Ut,_,I,p,S,C),m.el=Ut.el}if(Pe&&pt(Pe,S),!Ft&&(V=ee&&ee.onVnodeMounted)){const Ut=m;pt(()=>Bt(V,Ee,Ut),S)}(m.shapeFlag&256||Ee&&_i(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&pt(p.a,S),p.isMounted=!0,m=_=I=null}};p.scope.on();const M=p.effect=new xh(F);p.scope.off();const N=p.update=M.run.bind(M),Y=p.job=M.runIfDirty.bind(M);Y.i=p,Y.id=p.uid,M.scheduler=()=>xl(Y),Qn(p,!0),N()},D=(p,m,_)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,tv(p,m.props,I,_),rv(p,m.children,_),hn(),Qc(p),fn()},j=(p,m,_,I,S,C,$,F,M=!1)=>{const N=p&&p.children,Y=p?p.shapeFlag:0,V=m.children,{patchFlag:G,shapeFlag:ee}=m;if(G>0){if(G&128){pe(N,V,_,I,S,C,$,F,M);return}else if(G&256){oe(N,V,_,I,S,C,$,F,M);return}}ee&8?(Y&16&&ve(N,S,C),V!==N&&u(_,V)):Y&16?ee&16?pe(N,V,_,I,S,C,$,F,M):ve(N,S,C,!0):(Y&8&&u(_,""),ee&16&&Z(V,_,I,S,C,$,F,M))},oe=(p,m,_,I,S,C,$,F,M)=>{p=p||Ns,m=m||Ns;const N=p.length,Y=m.length,V=Math.min(N,Y);let G;for(G=0;G<V;G++){const ee=m[G]=M?An(m[G]):Ht(m[G]);y(p[G],ee,_,null,S,C,$,F,M)}N>Y?ve(p,S,C,!0,!1,V):Z(m,_,I,S,C,$,F,M,V)},pe=(p,m,_,I,S,C,$,F,M)=>{let N=0;const Y=m.length;let V=p.length-1,G=Y-1;for(;N<=V&&N<=G;){const ee=p[N],fe=m[N]=M?An(m[N]):Ht(m[N]);if(ss(ee,fe))y(ee,fe,_,null,S,C,$,F,M);else break;N++}for(;N<=V&&N<=G;){const ee=p[V],fe=m[G]=M?An(m[G]):Ht(m[G]);if(ss(ee,fe))y(ee,fe,_,null,S,C,$,F,M);else break;V--,G--}if(N>V){if(N<=G){const ee=G+1,fe=ee<Y?m[ee].el:I;for(;N<=G;)y(null,m[N]=M?An(m[N]):Ht(m[N]),_,fe,S,C,$,F,M),N++}}else if(N>G)for(;N<=V;)he(p[N],S,C,!0),N++;else{const ee=N,fe=N,Pe=new Map;for(N=fe;N<=G;N++){const ft=m[N]=M?An(m[N]):Ht(m[N]);ft.key!=null&&Pe.set(ft.key,N)}let Ee,ht=0;const ct=G-fe+1;let Ft=!1,Ut=0;const si=new Array(ct);for(N=0;N<ct;N++)si[N]=0;for(N=ee;N<=V;N++){const ft=p[N];if(ht>=ct){he(ft,S,C,!0);continue}let $t;if(ft.key!=null)$t=Pe.get(ft.key);else for(Ee=fe;Ee<=G;Ee++)if(si[Ee-fe]===0&&ss(ft,m[Ee])){$t=Ee;break}$t===void 0?he(ft,S,C,!0):(si[$t-fe]=N+1,$t>=Ut?Ut=$t:Ft=!0,y(ft,m[$t],_,null,S,C,$,F,M),ht++)}const jc=Ft?cv(si):Ns;for(Ee=jc.length-1,N=ct-1;N>=0;N--){const ft=fe+N,$t=m[ft],qc=ft+1<Y?m[ft+1].el:I;si[N]===0?y(null,$t,_,qc,S,C,$,F,M):Ft&&(Ee<0||N!==jc[Ee]?ue($t,_,qc,2):Ee--)}}},ue=(p,m,_,I,S=null)=>{const{el:C,type:$,transition:F,children:M,shapeFlag:N}=p;if(N&6){ue(p.component.subTree,m,_,I);return}if(N&128){p.suspense.move(m,_,I);return}if(N&64){$.move(p,m,_,q);return}if($===mt){s(C,m,_);for(let V=0;V<M.length;V++)ue(M[V],m,_,I);s(p.anchor,m,_);return}if($===Pr){P(p,m,_);return}if(I!==2&&N&1&&F)if(I===0)F.beforeEnter(C),s(C,m,_),pt(()=>F.enter(C),S);else{const{leave:V,delayLeave:G,afterLeave:ee}=F,fe=()=>{p.ctx.isUnmounted?i(C):s(C,m,_)},Pe=()=>{V(C,()=>{fe(),ee&&ee()})};G?G(C,fe,Pe):Pe()}else s(C,m,_)},he=(p,m,_,I=!1,S=!1)=>{const{type:C,props:$,ref:F,children:M,dynamicChildren:N,shapeFlag:Y,patchFlag:V,dirs:G,cacheIndex:ee}=p;if(V===-2&&(S=!1),F!=null&&(hn(),Wr(F,null,_,p,!0),fn()),ee!=null&&(m.renderCache[ee]=void 0),Y&256){m.ctx.deactivate(p);return}const fe=Y&1&&G,Pe=!_i(p);let Ee;if(Pe&&(Ee=$&&$.onVnodeBeforeUnmount)&&Bt(Ee,m,p),Y&6)Ze(p.component,_,I);else{if(Y&128){p.suspense.unmount(_,I);return}fe&&Yn(p,null,m,"beforeUnmount"),Y&64?p.type.remove(p,m,_,q,I):N&&!N.hasOnce&&(C!==mt||V>0&&V&64)?ve(N,m,_,!1,!0):(C===mt&&V&384||!S&&Y&16)&&ve(M,m,_),I&&z(p)}(Pe&&(Ee=$&&$.onVnodeUnmounted)||fe)&&pt(()=>{Ee&&Bt(Ee,m,p),fe&&Yn(p,null,m,"unmounted")},_)},z=p=>{const{type:m,el:_,anchor:I,transition:S}=p;if(m===mt){Ce(_,I);return}if(m===Pr){b(p);return}const C=()=>{i(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:$,delayLeave:F}=S,M=()=>$(_,C);F?F(p.el,C,M):M()}else C()},Ce=(p,m)=>{let _;for(;p!==m;)_=h(p),i(p),p=_;i(m)},Ze=(p,m,_)=>{const{bum:I,scope:S,job:C,subTree:$,um:F,m:M,a:N,parent:Y,slots:{__:V}}=p;ru(M),ru(N),I&&Ar(I),Y&&K(V)&&V.forEach(G=>{Y.renderCache[G]=void 0}),S.stop(),C&&(C.flags|=8,he($,p,m,_)),F&&pt(F,m),pt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ve=(p,m,_,I=!1,S=!1,C=0)=>{for(let $=C;$<p.length;$++)he(p[$],m,_,I,S)},w=p=>{if(p.shapeFlag&6)return w(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=h(p.anchor||p.el),_=m&&m[k_];return _?h(_):m};let W=!1;const B=(p,m,_)=>{p==null?m._vnode&&he(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),m._vnode=p,W||(W=!0,Qc(),ef(),W=!1)},q={p:y,um:he,m:ue,r:z,mt:A,mc:Z,pc:j,pbc:J,n:w,o:t};return{render:B,hydrate:void 0,createApp:X_(B)}}function la({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pf(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=An(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Pf(o,a)),a.type===Po&&(a.el=o.el),a.type===it&&!a.el&&(a.el=o.el)}}function cv(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Nf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nf(e)}function ru(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const uv=Symbol.for("v-scx"),dv=()=>Ct(uv);function Je(t,e,n){return kf(t,e,n)}function kf(t,e,n=Se){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ke({},n),l=e&&s||!e&&r!=="post";let c;if(Fi){if(r==="sync"){const f=dv();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=jt,f.resume=jt,f.pause=jt,f}}const u=qe;a.call=(f,g,y)=>Dt(f,u,g,y);let d=!1;r==="post"?a.scheduler=f=>{pt(f,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(f,g)=>{g?f():xl(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const h=A_(t,e,a);return Fi&&(c?c.push(h):l&&h()),h}function hv(t,e,n){const s=this.proxy,i=Ue(t)?t.includes(".")?Of(s,t):()=>s[t]:t.bind(s,s);let r;te(e)?r=e:(r=e.handler,n=e);const o=ar(this),a=kf(i,r.bind(s),n);return o(),a}function Of(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const fv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${Gn(e)}Modifiers`];function pv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&fv(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Ue(u)?u.trim():u)),o.number&&(i=n.map(Fr)));let a,l=s[a=ta(e)]||s[a=ta(St(e))];!l&&r&&(l=s[a=ta(Gn(e))]),l&&Dt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(c,t,6,i)}}function Df(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!te(t)){const l=c=>{const u=Df(c,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Re(t)&&s.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):Ke(o,r),Re(t)&&s.set(t,o),o)}function Ro(t,e){return!t||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Gn(e))||we(t,e))}function ou(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:f,ctx:g,inheritAttrs:y}=t,R=Hr(t);let E,v;try{if(n.shapeFlag&4){const b=i||s,L=b;E=Ht(c.call(L,b,u,d,f,h,g)),v=a}else{const b=e;E=Ht(b.length>1?b(d,{attrs:a,slots:o,emit:l}):b(d,null)),v=e.props?a:mv(a)}}catch(b){yi.length=0,Io(b,t,1),E=xe(it)}let P=E;if(v&&y!==!1){const b=Object.keys(v),{shapeFlag:L}=P;b.length&&L&7&&(r&&b.some(El)&&(v=gv(v,r)),P=Wn(P,v,!1,!0))}return n.dirs&&(P=Wn(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&Mi(P,n.transition),E=P,Hr(R),E}const mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||vo(n))&&((e||(e={}))[n]=t[n]);return e},gv=(t,e)=>{const n={};for(const s in t)(!El(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _v(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?au(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Ro(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?au(s,o,c):!0:!!o;return!1}function au(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ro(n,r))return!0}return!1}function vv({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const xf=t=>t.__isSuspense;function yv(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):N_(t)}const mt=Symbol.for("v-fgt"),Po=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Pr=Symbol.for("v-stc"),yi=[];let _t=null;function ge(t=!1){yi.push(_t=t?null:[])}function wv(){yi.pop(),_t=yi[yi.length-1]||null}let Li=1;function lu(t,e=!1){Li+=t,t<0&&_t&&e&&(_t.hasOnce=!0)}function Mf(t){return t.dynamicChildren=Li>0?_t||Ns:null,wv(),Li>0&&_t&&_t.push(t),t}function De(t,e,n,s,i,r){return Mf(T(t,e,n,s,i,r,!0))}function cs(t,e,n,s,i){return Mf(xe(t,e,n,s,i,!0))}function qr(t){return t?t.__v_isVNode===!0:!1}function ss(t,e){return t.type===e.type&&t.key===e.key}const Lf=({key:t})=>t??null,Nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||$e(t)||te(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,s=0,i=null,r=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lf(e),ref:e&&Nr(e),scopeId:nf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:rt};return a?(Fl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),Li>0&&!o&&_t&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_t.push(l),l}const xe=Ev;function Ev(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===mf)&&(t=it),qr(t)){const a=Wn(t,e,!0);return n&&Fl(a,n),Li>0&&!r&&_t&&(a.shapeFlag&6?_t[_t.indexOf(t)]=a:_t.push(a)),a.patchFlag=-2,a}if(Dv(t)&&(t=t.__vccOpts),e){e=bv(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=ki(a)),Re(l)&&(Ol(l)&&!K(l)&&(l=Ke({},l)),e.style=Cl(l))}const o=Ue(t)?1:xf(t)?128:sf(t)?64:Re(t)?4:te(t)?2:0;return T(t,e,n,s,i,o,r,!0)}function bv(t){return t?Ol(t)||If(t)?Ke({},t):t:null}function Wn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Iv(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Lf(c),ref:e&&e.ref?n&&r?K(r)?r.concat(Nr(e)):[r,Nr(e)]:Nr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Mi(u,l.clone(u)),u}function us(t=" ",e=0){return xe(Po,null,t,e)}function cu(t,e){const n=xe(Pr,null,t);return n.staticCount=e,n}function Et(t="",e=!1){return e?(ge(),cs(it,null,t)):xe(it,null,t)}function Ht(t){return t==null||typeof t=="boolean"?xe(it):K(t)?xe(mt,null,t.slice()):qr(t)?An(t):xe(Po,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wn(t)}function Fl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Fl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!If(e)?e._ctx=rt:i===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),s&64?(n=16,e=[us(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ki([e.class,s.class]));else if(i==="style")e.style=Cl([e.style,s.style]);else if(vo(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Bt(t,e,n,s=null){Dt(t,e,7,[n,s])}const Cv=wf();let Tv=0;function Sv(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Cv,r={uid:Tv++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tf(s,i),emitsOptions:Df(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=pv.bind(null,r),t.ce&&t.ce(r),r}let qe=null;const Av=()=>qe||rt;let Kr,Ha;{const t=Eo(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Kr=e("__VUE_INSTANCE_SETTERS__",n=>qe=n),Ha=e("__VUE_SSR_SETTERS__",n=>Fi=n)}const ar=t=>{const e=qe;return Kr(t),t.scope.on(),()=>{t.scope.off(),Kr(e)}},uu=()=>{qe&&qe.scope.off(),Kr(null)};function Ff(t){return t.vnode.shapeFlag&4}let Fi=!1;function Rv(t,e=!1,n=!1){e&&Ha(e);const{props:s,children:i}=t.vnode,r=Ff(t);ev(t,s,r,e),iv(t,i,n||e);const o=r?Pv(t,e):void 0;return e&&Ha(!1),o}function Pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,q_);const{setup:s}=n;if(s){hn();const i=t.setupContext=s.length>1?kv(t):null,r=ar(t),o=rr(s,t,0,[t.props,i]),a=Ch(o);if(fn(),r(),(a||t.sp)&&!_i(t)&&uf(t),a){if(o.then(uu,uu),e)return o.then(l=>{du(t,l)}).catch(l=>{Io(l,t,0)});t.asyncDep=o}else du(t,o)}else Uf(t)}function du(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Jh(e)),Uf(t)}function Uf(t,e,n){const s=t.type;t.render||(t.render=s.render||jt);{const i=ar(t);hn();try{K_(t)}finally{fn(),i()}}}const Nv={get(t,e){return tt(t,"get",""),t[e]}};function kv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Nv),slots:t.slots,emit:t.emit,expose:e}}function No(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jh(Dl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}})):t.proxy}function Ov(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function Dv(t){return te(t)&&"__vccOpts"in t}const de=(t,e)=>T_(t,e,Fi);function Ul(t,e,n){const s=arguments.length;return s===2?Re(e)&&!K(e)?qr(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qr(n)&&(n=[n]),xe(t,e,n))}const xv="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wa;const hu=typeof window<"u"&&window.trustedTypes;if(hu)try{Wa=hu.createPolicy("vue",{createHTML:t=>t})}catch{}const $f=Wa?t=>Wa.createHTML(t):t=>t,Mv="http://www.w3.org/2000/svg",Lv="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,fu=tn&&tn.createElement("template"),Fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?tn.createElementNS(Mv,t):e==="mathml"?tn.createElementNS(Lv,t):n?tn.createElement(t,{is:n}):tn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>tn.createTextNode(t),createComment:t=>tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{fu.innerHTML=$f(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=fu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wn="transition",ri="animation",Ui=Symbol("_vtc"),Bf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Uv=Ke({},rf,Bf),$v=t=>(t.displayName="Transition",t.props=Uv,t),ja=$v((t,{slots:e})=>Ul(x_,Bv(t),e)),Jn=(t,e=[])=>{K(t)?t.forEach(n=>n(...e)):t&&t(...e)},pu=t=>t?K(t)?t.some(e=>e.length>1):t.length>1:!1;function Bv(t){const e={};for(const H in t)H in Bf||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=Vv(i),y=g&&g[0],R=g&&g[1],{onBeforeEnter:E,onEnter:v,onEnterCancelled:P,onLeave:b,onLeaveCancelled:L,onBeforeAppear:ne=E,onAppear:se=v,onAppearCancelled:Z=P}=e,U=(H,le,A,x)=>{H._enterCancelled=x,Xn(H,le?u:a),Xn(H,le?c:o),A&&A()},J=(H,le)=>{H._isLeaving=!1,Xn(H,d),Xn(H,f),Xn(H,h),le&&le()},ce=H=>(le,A)=>{const x=H?se:v,O=()=>U(le,H,A);Jn(x,[le,O]),mu(()=>{Xn(le,H?l:r),Xt(le,H?u:a),pu(x)||gu(le,s,y,O)})};return Ke(e,{onBeforeEnter(H){Jn(E,[H]),Xt(H,r),Xt(H,o)},onBeforeAppear(H){Jn(ne,[H]),Xt(H,l),Xt(H,c)},onEnter:ce(!1),onAppear:ce(!0),onLeave(H,le){H._isLeaving=!0;const A=()=>J(H,le);Xt(H,d),H._enterCancelled?(Xt(H,h),yu()):(yu(),Xt(H,h)),mu(()=>{H._isLeaving&&(Xn(H,d),Xt(H,f),pu(b)||gu(H,s,R,A))}),Jn(b,[H,A])},onEnterCancelled(H){U(H,!1,void 0,!0),Jn(P,[H])},onAppearCancelled(H){U(H,!0,void 0,!0),Jn(Z,[H])},onLeaveCancelled(H){J(H),Jn(L,[H])}})}function Vv(t){if(t==null)return null;if(Re(t))return[ca(t.enter),ca(t.leave)];{const e=ca(t);return[e,e]}}function ca(t){return jg(t)}function Xt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ui]||(t[Ui]=new Set)).add(e)}function Xn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Ui];n&&(n.delete(e),n.size||(t[Ui]=void 0))}function mu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Hv=0;function gu(t,e,n,s){const i=t._endId=++Hv,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Wv(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=f=>{f.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Wv(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),i=s(`${wn}Delay`),r=s(`${wn}Duration`),o=_u(i,r),a=s(`${ri}Delay`),l=s(`${ri}Duration`),c=_u(a,l);let u=null,d=0,h=0;e===wn?o>0&&(u=wn,d=o,h=r.length):e===ri?c>0&&(u=ri,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?wn:ri:null,h=u?u===wn?r.length:l.length:0);const f=u===wn&&/\b(transform|all)(,|$)/.test(s(`${wn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function _u(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>vu(n)+vu(t[s])))}function vu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yu(){return document.body.offsetHeight}function jv(t,e,n){const s=t[Ui];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wu=Symbol("_vod"),qv=Symbol("_vsh"),Kv=Symbol(""),Gv=/(^|;)\s*display\s*:/;function zv(t,e,n){const s=t.style,i=Ue(n);let r=!1;if(n&&!i){if(e)if(Ue(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&kr(s,a,"")}else for(const o in e)n[o]==null&&kr(s,o,"");for(const o in n)o==="display"&&(r=!0),kr(s,o,n[o])}else if(i){if(e!==n){const o=s[Kv];o&&(n+=";"+o),s.cssText=n,r=Gv.test(n)}}else e&&t.removeAttribute("style");wu in t&&(t[wu]=r?s.display:"",t[qv]&&(s.display="none"))}const Eu=/\s*!important$/;function kr(t,e,n){if(K(n))n.forEach(s=>kr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Yv(t,e);Eu.test(n)?t.setProperty(Gn(s),n.replace(Eu,""),"important"):t[s]=n}}const bu=["Webkit","Moz","ms"],ua={};function Yv(t,e){const n=ua[e];if(n)return n;let s=St(e);if(s!=="filter"&&s in t)return ua[e]=s;s=wo(s);for(let i=0;i<bu.length;i++){const r=bu[i]+s;if(r in t)return ua[e]=r}return e}const Iu="http://www.w3.org/1999/xlink";function Cu(t,e,n,s,i,r=Qg(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Iu,e.slice(6,e.length)):t.setAttributeNS(Iu,e,n):n==null||r&&!Rh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Gt(n)?String(n):n)}function Tu(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$f(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Rh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Pn(t,e,n,s){t.addEventListener(e,n,s)}function Qv(t,e,n,s){t.removeEventListener(e,n,s)}const Su=Symbol("_vei");function Jv(t,e,n,s,i=null){const r=t[Su]||(t[Su]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Xv(e);if(s){const c=r[e]=ty(s,i);Pn(t,a,c,l)}else o&&(Qv(t,a,o,l),r[e]=void 0)}}const Au=/(?:Once|Passive|Capture)$/;function Xv(t){let e;if(Au.test(t)){e={};let s;for(;s=t.match(Au);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gn(t.slice(2)),e]}let da=0;const Zv=Promise.resolve(),ey=()=>da||(Zv.then(()=>da=0),da=Date.now());function ty(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Dt(ny(s,n.value),e,5,[s])};return n.value=t,n.attached=ey(),n}function ny(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ru=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sy=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?jv(t,s,o):e==="style"?zv(t,n,s):vo(e)?El(e)||Jv(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iy(t,e,s,o))?(Tu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cu(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(s))?Tu(t,St(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cu(t,e,s,o))};function iy(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ru(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ru(e)&&Ue(n)?!1:e in t}const Us=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Ar(e,n):e};function ry(t){t.target.composing=!0}function Pu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const un=Symbol("_assign"),Wt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[un]=Us(i);const r=s||i.props&&i.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Fr(a)),t[un](a)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",ry),Pn(t,"compositionend",Pu),Pn(t,"change",Pu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[un]=Us(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Fr(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},oy={deep:!0,created(t,e,n){t[un]=Us(n),Pn(t,"change",()=>{const s=t._modelValue,i=$i(t),r=t.checked,o=t[un];if(K(s)){const a=Tl(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(zs(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Vf(t,r))})},mounted:Nu,beforeUpdate(t,e,n){t[un]=Us(n),Nu(t,e,n)}};function Nu(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(K(e))i=Tl(e,s.props.value)>-1;else if(zs(e))i=e.has(s.props.value);else{if(e===n)return;i=sr(e,Vf(t,!0))}t.checked!==i&&(t.checked=i)}const ku={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=zs(e);Pn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fr($i(o)):$i(o));t[un](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Co(()=>{t._assigning=!1})}),t[un]=Us(s)},mounted(t,{value:e}){Ou(t,e)},beforeUpdate(t,e,n){t[un]=Us(n)},updated(t,{value:e}){t._assigning||Ou(t,e)}};function Ou(t,e){const n=t.multiple,s=K(e);if(!(n&&!s&&!zs(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=$i(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Tl(e,a)>-1}else o.selected=e.has(a);else if(sr($i(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $i(t){return"_value"in t?t._value:t.value}function Vf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ay=["ctrl","shift","alt","meta"],ly={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ay.some(n=>t[`${n}Key`]&&!e.includes(n))},cy=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=ly[e[o]];if(a&&a(i,e))return}return t(i,...r)})},uy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},YP=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Gn(i.key);if(e.some(o=>o===r||uy[o]===r))return t(i)})},dy=Ke({patchProp:sy},Fv);let Du;function hy(){return Du||(Du=ov(dy))}const fy=(...t)=>{const e=hy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=my(s);if(!i)return;const r=e._component;!te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,py(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function py(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function my(t){return Ue(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Hf;const ko=t=>Hf=t,Wf=Symbol();function qa(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wi||(wi={}));function gy(){const t=Oh(!0),e=t.run(()=>Ae({}));let n=[],s=[];const i=Dl({install(r){ko(i),i._a=r,r.provide(Wf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const jf=()=>{};function xu(t,e,n,s=jf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Dh()&&Xg(i),i}function Is(t,...e){t.slice().forEach(n=>{n(...e)})}const _y=t=>t(),Mu=Symbol(),ha=Symbol();function Ka(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];qa(i)&&qa(s)&&t.hasOwnProperty(n)&&!$e(s)&&!Ln(s)?t[n]=Ka(i,s):t[n]=s}return t}const vy=Symbol();function yy(t){return!qa(t)||!t.hasOwnProperty(vy)}const{assign:Cn}=Object;function wy(t){return!!($e(t)&&t.effect)}function Ey(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=E_(n.state.value[t]);return Cn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Dl(de(()=>{ko(n);const f=n._s.get(t);return o[h].call(f,f)})),d),{}))}return l=qf(t,c,e,n,s,!0),l}function qf(t,e,n={},s,i,r){let o;const a=Cn({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],f;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),Ae({});let y;function R(Z){let U;c=u=!1,typeof Z=="function"?(Z(s.state.value[t]),U={type:wi.patchFunction,storeId:t,events:f}):(Ka(s.state.value[t],Z),U={type:wi.patchObject,payload:Z,storeId:t,events:f});const J=y=Symbol();Co().then(()=>{y===J&&(c=!0)}),u=!0,Is(d,U,s.state.value[t])}const E=r?function(){const{state:U}=n,J=U?U():{};this.$patch(ce=>{Cn(ce,J)})}:jf;function v(){o.stop(),d=[],h=[],s._s.delete(t)}const P=(Z,U="")=>{if(Mu in Z)return Z[ha]=U,Z;const J=function(){ko(s);const ce=Array.from(arguments),H=[],le=[];function A(D){H.push(D)}function x(D){le.push(D)}Is(h,{args:ce,name:J[ha],store:L,after:A,onError:x});let O;try{O=Z.apply(this&&this.$id===t?this:L,ce)}catch(D){throw Is(le,D),D}return O instanceof Promise?O.then(D=>(Is(H,D),D)).catch(D=>(Is(le,D),Promise.reject(D))):(Is(H,O),O)};return J[Mu]=!0,J[ha]=U,J},b={_p:s,$id:t,$onAction:xu.bind(null,h),$patch:R,$reset:E,$subscribe(Z,U={}){const J=xu(d,Z,U.detached,()=>ce()),ce=o.run(()=>Je(()=>s.state.value[t],H=>{(U.flush==="sync"?u:c)&&Z({storeId:t,type:wi.direct,events:f},H)},Cn({},l,U)));return J},$dispose:v},L=ir(b);s._s.set(t,L);const se=(s._a&&s._a.runWithContext||_y)(()=>s._e.run(()=>(o=Oh()).run(()=>e({action:P}))));for(const Z in se){const U=se[Z];if($e(U)&&!wy(U)||Ln(U))r||(g&&yy(U)&&($e(U)?U.value=g[Z]:Ka(U,g[Z])),s.state.value[t][Z]=U);else if(typeof U=="function"){const J=P(U,Z);se[Z]=J,a.actions[Z]=U}}return Cn(L,se),Cn(me(L),se),Object.defineProperty(L,"$state",{get:()=>s.state.value[t],set:Z=>{R(U=>{Cn(U,Z)})}}),s._p.forEach(Z=>{Cn(L,o.run(()=>Z({store:L,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(L.$state,g),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function $l(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Z_();return a=a||(c?Ct(Wf,null):null),a&&ko(a),a=Hf,a._s.has(s)||(r?qf(s,e,i,a):Ey(s,i,a)),a._s.get(s)}return o.$id=s,o}var Lu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw Ys(e)},Ys=function(t){return new Error("Firebase Database ("+Kf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},by=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):by(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Iy;const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Iy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zf=function(t){const e=Gf(t);return Bl.encodeByteArray(e,!0)},Gr=function(t){return zf(t).replace(/\./g,"")},zr=function(t){try{return Bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){return Yf(void 0,t)}function Yf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ty(n)||(t[n]=Yf(t[n],e[n]));return t}function Ty(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=()=>Sy().__FIREBASE_DEFAULTS__,Ry=()=>{if(typeof process>"u"||typeof Lu>"u")return;const t=Lu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Py=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zr(t[1]);return e&&JSON.parse(e)},Vl=()=>{try{return Ay()||Ry()||Py()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qf=t=>{var e,n;return(n=(e=Vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ny=t=>{const e=Qf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jf=()=>{var t;return(t=Vl())===null||t===void 0?void 0:t.config},Xf=t=>{var e;return(e=Vl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Gr(JSON.stringify(n)),Gr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Oy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dy(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xy(){return Kf.NODE_ADMIN===!0}function tp(){try{return typeof indexedDB=="object"}catch{return!1}}function np(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function My(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ly,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Fy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,s)}}function Fy(t,e){return t.replace(Uy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Uy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return JSON.parse(t)}function He(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Bi(zr(r[0])||""),n=Bi(zr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},$y=function(t){const e=sp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},By=function(t){const e=sp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ga(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fu(r)&&Fu(o)){if(!Vi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Hy(t,e){const n=new Wy(t,e);return n.subscribe.bind(n)}class Wy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=fa),i.error===void 0&&(i.error=fa),i.complete===void 0&&(i.complete=fa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fa(){}function Oo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,k(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Do=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1e3,Gy=2,zy=4*60*60*1e3,Yy=.5;function Uu(t,e=Ky,n=Gy){const s=e*Math.pow(n,t),i=Math.round(Yy*s*(Math.random()-.5)*2);return Math.min(zy,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new lr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xy(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jy(t){return t===es?void 0:t}function Xy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const ew={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},tw=be.INFO,nw={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},sw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=nw[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xo{constructor(e){this.name=e,this._logLevel=tw,this._logHandler=sw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ew[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const iw=(t,e)=>e.some(n=>t instanceof n);let $u,Bu;function rw(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ow(){return Bu||(Bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,za=new WeakMap,rp=new WeakMap,pa=new WeakMap,Wl=new WeakMap;function aw(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Fn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ip.set(n,t)}).catch(()=>{}),Wl.set(e,t),e}function lw(t){if(za.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});za.set(t,e)}let Ya={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return za.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cw(t){Ya=t(Ya)}function uw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ma(this),e,...n);return rp.set(s,e.sort?e.sort():[e]),Fn(s)}:ow().includes(t)?function(...e){return t.apply(ma(this),e),Fn(ip.get(this))}:function(...e){return Fn(t.apply(ma(this),e))}}function dw(t){return typeof t=="function"?uw(t):(t instanceof IDBTransaction&&lw(t),iw(t,rw())?new Proxy(t,Ya):t)}function Fn(t){if(t instanceof IDBRequest)return aw(t);if(pa.has(t))return pa.get(t);const e=dw(t);return e!==t&&(pa.set(t,e),Wl.set(e,t)),e}const ma=t=>Wl.get(t);function op(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Fn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hw=["get","getKey","getAll","getAllKeys","count"],fw=["put","add","delete","clear"],ga=new Map;function Vu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hw.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ga.set(e,r),r}cw(t=>({...t,get:(e,n,s)=>Vu(e,n)||t.get(e,n,s),has:(e,n)=>!!Vu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qa="@firebase/app",Hu="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new xo("@firebase/app"),gw="@firebase/app-compat",_w="@firebase/analytics-compat",vw="@firebase/analytics",yw="@firebase/app-check-compat",ww="@firebase/app-check",Ew="@firebase/auth",bw="@firebase/auth-compat",Iw="@firebase/database",Cw="@firebase/data-connect",Tw="@firebase/database-compat",Sw="@firebase/functions",Aw="@firebase/functions-compat",Rw="@firebase/installations",Pw="@firebase/installations-compat",Nw="@firebase/messaging",kw="@firebase/messaging-compat",Ow="@firebase/performance",Dw="@firebase/performance-compat",xw="@firebase/remote-config",Mw="@firebase/remote-config-compat",Lw="@firebase/storage",Fw="@firebase/storage-compat",Uw="@firebase/firestore",$w="@firebase/vertexai-preview",Bw="@firebase/firestore-compat",Vw="firebase",Hw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",Ww={[Qa]:"fire-core",[gw]:"fire-core-compat",[vw]:"fire-analytics",[_w]:"fire-analytics-compat",[ww]:"fire-app-check",[yw]:"fire-app-check-compat",[Ew]:"fire-auth",[bw]:"fire-auth-compat",[Iw]:"fire-rtdb",[Cw]:"fire-data-connect",[Tw]:"fire-rtdb-compat",[Sw]:"fire-fn",[Aw]:"fire-fn-compat",[Rw]:"fire-iid",[Pw]:"fire-iid-compat",[Nw]:"fire-fcm",[kw]:"fire-fcm-compat",[Ow]:"fire-perf",[Dw]:"fire-perf-compat",[xw]:"fire-rc",[Mw]:"fire-rc-compat",[Lw]:"fire-gcs",[Fw]:"fire-gcs-compat",[Uw]:"fire-fst",[Bw]:"fire-fst-compat",[$w]:"fire-vertex","fire-js":"fire-js",[Vw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Map,jw=new Map,Xa=new Map;function Wu(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(Xa.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,t);for(const n of Qr.values())Wu(n,t);for(const n of jw.values())Wu(n,t);return!0}function vs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new _s("app","Firebase",qw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=Hw;function ap(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(n||(n=Jf()),!n)throw Un.create("no-options");const r=Qr.get(i);if(r){if(Vi(n,r.options)&&Vi(s,r.config))return r;throw Un.create("duplicate-app",{appName:i})}const o=new Zy(i);for(const l of Xa.values())o.addComponent(l);const a=new Kw(n,s,o);return Qr.set(i,a),a}function jl(t=Ja){const e=Qr.get(t);if(!e&&t===Ja&&Jf())return ap();if(!e)throw Un.create("no-app",{appName:t});return e}function Tt(t,e,n){var s;let i=(s=Ww[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}zt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="firebase-heartbeat-database",zw=1,Hi="firebase-heartbeat-store";let _a=null;function lp(){return _a||(_a=op(Gw,zw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),_a}async function Yw(t){try{const n=(await lp()).transaction(Hi),s=await n.objectStore(Hi).get(cp(t));return await n.done,s}catch(e){if(e instanceof Yt)pn.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function ju(t,e){try{const s=(await lp()).transaction(Hi,"readwrite");await s.objectStore(Hi).put(e,cp(t)),await s.done}catch(n){if(n instanceof Yt)pn.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(s.message)}}}function cp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1024,Jw=30*24*60*60*1e3;class Xw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Jw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){pn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qu(),{heartbeatsToSend:s,unsentEntries:i}=Zw(this._heartbeatsCache.heartbeats),r=Gr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return pn.warn(n),""}}}function qu(){return new Date().toISOString().substring(0,10)}function Zw(t,e=Qw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ku(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ku(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tp()?np().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ju(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ku(t){return Gr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){zt(new xt("platform-logger",e=>new pw(e),"PRIVATE")),zt(new xt("heartbeat",e=>new Xw(e),"PRIVATE")),Tt(Qa,Hu,t),Tt(Qa,Hu,"esm2017"),Tt("fire-js","")}tE("");var nE="firebase",sE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(nE,sE,"app");function ql(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function up(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iE=up,dp=new _s("auth","Firebase",up());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new xo("@firebase/auth");function rE(t,...e){Jr.logLevel<=be.WARN&&Jr.warn(`Auth (${Js}): ${t}`,...e)}function Or(t,...e){Jr.logLevel<=be.ERROR&&Jr.error(`Auth (${Js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw Kl(t,...e)}function qt(t,...e){return Kl(t,...e)}function hp(t,e,n){const s=Object.assign(Object.assign({},iE()),{[e]:n});return new _s("auth","Firebase",s).create(e,{appName:t.name})}function $n(t){return hp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return dp.create(t,...e)}function X(t,e,...n){if(!t)throw Kl(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Or(e),new Error(e)}function mn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oE(){return Gu()==="http:"||Gu()==="https:"}function Gu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oE()||Zf()||"connection"in navigator)?navigator.onLine:!0}function lE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Hl()||ep()}get(){return aE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new cr(3e4,6e4);function ys(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zn(t,e,n,s,i={}){return pp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Oy()||(c.referrerPolicy="no-referrer"),fp.fetch()(mp(t,t.config.apiHost,n,a),c)})}async function pp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},cE),e);try{const i=new hE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ir(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ir(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ir(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ir(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hp(t,u,c);Mt(t,u)}}catch(i){if(i instanceof Yt)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function Mo(t,e,n,s,i={}){const r=await zn(t,e,n,s,i);return"mfaPendingCredential"in r&&Mt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function mp(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Gl(t.config,i):`${t.config.apiScheme}://${i}`}function dE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),uE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ir(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=qt(t,e,s);return i.customData._tokenResponse=n,i}function zu(t){return t!==void 0&&t.enterprise!==void 0}class fE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pE(t,e){return zn(t,"GET","/v2/recaptchaConfig",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function gp(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gE(t,e=!1){const n=Ge(t),s=await n.getIdToken(e),i=zl(s);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ei(va(i.auth_time)),issuedAtTime:Ei(va(i.iat)),expirationTime:Ei(va(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function zl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const i=zr(n);return i?JSON.parse(i):(Or("Failed to decode base64 JWT payload"),null)}catch(i){return Or("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yu(t){const e=zl(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&_E(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function _E({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wi(t,gp(n,{idToken:s}));X(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?_p(r.providerUserInfo):[],a=wE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new el(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function yE(t){const e=Ge(t);await Xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function _p(t){return t.map(e=>{var{providerId:n}=e,s=ql(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(t,e){const n=await pp(t,{},async()=>{const s=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=mp(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bE(t,e){return zn(t,"POST","/v2/accounts:revokeToken",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Yu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await EE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ds;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(X(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ql(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new el(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gE(this,e)}reload(){return yE(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Wi(this,mE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:b,isAnonymous:L,providerData:ne,stsTokenManager:se}=n;X(P&&se,e,"internal-error");const Z=Ds.fromJSON(this.name,se);X(typeof P=="string",e,"internal-error"),En(d,e.name),En(h,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof L=="boolean",e,"internal-error"),En(f,e.name),En(g,e.name),En(y,e.name),En(R,e.name),En(E,e.name),En(v,e.name);const U=new an({uid:P,auth:e,email:h,emailVerified:b,displayName:d,isAnonymous:L,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:Z,createdAt:E,lastLoginAt:v});return ne&&Array.isArray(ne)&&(U.providerData=ne.map(J=>Object.assign({},J))),R&&(U._redirectEventId=R),U}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ds;i.updateFromServerResponse(n);const r=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Xr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];X(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?_p(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Ds;a.updateFromIdToken(s);const l=new an({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new el(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map;function ln(t){mn(t instanceof Function,"Expected a class definition");let e=Qu.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vp.type="NONE";const Ju=vp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Dr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Dr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(ln(Ju),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ln(Ju);const o=Dr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=an._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new xs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cp(e))return"Blackberry";if(Tp(e))return"Webos";if(wp(e))return"Safari";if((e.includes("chrome/")||Ep(e))&&!e.includes("edge/"))return"Chrome";if(Ip(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function yp(t=lt()){return/firefox\//i.test(t)}function wp(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ep(t=lt()){return/crios\//i.test(t)}function bp(t=lt()){return/iemobile/i.test(t)}function Ip(t=lt()){return/android/i.test(t)}function Cp(t=lt()){return/blackberry/i.test(t)}function Tp(t=lt()){return/webos/i.test(t)}function Yl(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IE(t=lt()){var e;return Yl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CE(){return Dy()&&document.documentMode===10}function Sp(t=lt()){return Yl(t)||Ip(t)||Tp(t)||Cp(t)||/windows phone/i.test(t)||bp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e=[]){let n;switch(t){case"Browser":n=Xu(lt());break;case"Worker":n=`${Xu(lt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t,e={}){return zn(t,"GET","/v2/passwordPolicy",ys(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=6;class RE{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zu(this),this.idTokenSubscription=new Zu(this),this.beforeStateQueue=new TE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gp(this,{idToken:e}),s=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject($n(this));const n=e?Ge(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SE(this),n=new RE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xs(t){return Ge(t)}class Zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hy(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NE(t){Lo=t}function Rp(t){return Lo.loadJS(t)}function kE(){return Lo.recaptchaEnterpriseScript}function OE(){return Lo.gapiScript}function DE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xE="recaptcha-enterprise",ME="NO_RECAPTCHA";class LE{constructor(e){this.type=xE,this.auth=Xs(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{pE(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new fE(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;zu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(ME)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&zu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kE();l.length!==0&&(l+=a),Rp(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ed(t,e,n,s=!1){const i=new LE(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function td(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await ed(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ed(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e){const n=vs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Vi(r,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function UE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function $E(t,e,n){const s=Xs(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Pp(e),{host:o,port:a}=BE(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),VE()}function Pp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BE(t){const e=Pp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:nd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:nd(o)}}}function nd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function HE(t,e){return zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e){return Mo(t,"POST","/v1/accounts:signInWithPassword",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}async function qE(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Ql{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ji(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return td(e,n,"signInWithPassword",WE);case"emailLink":return jE(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return td(e,s,"signUpPassword",HE);case"emailLink":return qE(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return Mo(t,"POST","/v1/accounts:signInWithIdp",ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="http://localhost";class ds extends Ql{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ql(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ds(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:KE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zE(t){const e=hi(fi(t)).link,n=e?hi(fi(e)).deep_link_id:null,s=hi(fi(t)).deep_link_id;return(s?hi(fi(s)).link:null)||s||n||e||t}class Jl{constructor(e){var n,s,i,r,o,a;const l=hi(fi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=GE((i=l.mode)!==null&&i!==void 0?i:null);X(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zE(e);try{return new Jl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Jl.parseLink(n);return X(s,"argument-error"),ji._fromEmailAndCode(e,s.code,s.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Np{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ur{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return kn.credential(n,s)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends ur{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ur{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Dn.credential(n,s)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await an._fromIdTokenResponse(e,s,i),o=sd(s);return new Bs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=sd(s);return new Bs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function sd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Yt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Zr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Zr(e,n,s,i)}}function kp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Zr._fromErrorAndOperation(t,r,e,s):r})}async function YE(t,e,n=!1){const s=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e,n=!1){const{auth:s}=t;if(rn(s.app))return Promise.reject($n(s));const i="reauthenticate";try{const r=await Wi(t,kp(s,i,e,t),n);X(r.idToken,s,"internal-error");const o=zl(r.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),Bs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Mt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(t,e,n=!1){if(rn(t.app))return Promise.reject($n(t));const s="signIn",i=await kp(t,s,e),r=await Bs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function JE(t,e){return Op(Xs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(t){const e=Xs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ZE(t,e,n){return rn(t.app)?Promise.reject($n(t)):JE(Ge(t),Zs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&XE(t),s})}function eb(t,e,n,s){return Ge(t).onIdTokenChanged(e,n,s)}function tb(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function Dp(t,e,n,s){return Ge(t).onAuthStateChanged(e,n,s)}function nb(t){return Ge(t).signOut()}const eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=1e3,ib=10;class Mp extends xp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);CE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ib):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mp.type="LOCAL";const rb=Mp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends xp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lp.type="SESSION";const Fp=Lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Fo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await ob(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Xl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function lb(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function cb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ub(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function db(){return Up()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="firebaseLocalStorageDb",hb=1,to="firebaseLocalStorage",Bp="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uo(t,e){return t.transaction([to],e?"readwrite":"readonly").objectStore(to)}function fb(){const t=indexedDB.deleteDatabase($p);return new dr(t).toPromise()}function tl(){const t=indexedDB.open($p,hb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(to,{keyPath:Bp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(to)?e(s):(s.close(),await fb(),e(await tl()))})})}async function id(t,e,n){const s=Uo(t,!0).put({[Bp]:e,value:n});return new dr(s).toPromise()}async function pb(t,e){const n=Uo(t,!1).get(e),s=await new dr(n).toPromise();return s===void 0?null:s.value}function rd(t,e){const n=Uo(t,!0).delete(e);return new dr(n).toPromise()}const mb=800,gb=3;class Vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>gb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fo._getInstance(db()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cb(),!this.activeServiceWorker)return;this.sender=new ab(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ub()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await id(e,eo,"1"),await rd(e,eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>id(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>pb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Uo(i,!1).getAll();return new dr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vp.type="LOCAL";const _b=Vp;new cr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t,e){return e?ln(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends Ql{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yb(t){return Op(t.auth,new Zl(t),t.bypassAuthState)}function wb(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),QE(n,new Zl(t),t.bypassAuthState)}async function Eb(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),YE(n,new Zl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yb;case"linkViaPopup":case"linkViaRedirect":return Eb;case"reauthViaPopup":case"reauthViaRedirect":return wb;default:Mt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new cr(2e3,1e4);class Rs extends Hp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bb.get())};e()}}Rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="pendingRedirect",xr=new Map;class Cb extends Hp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=xr.get(this.auth._key());if(!e){try{const s=await Tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}xr.set(this.auth._key(),e)}return this.bypassAuthState||xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tb(t,e){const n=Rb(e),s=Ab(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Sb(t,e){xr.set(t._key(),e)}function Ab(t){return ln(t._redirectPersistence)}function Rb(t){return Dr(Ib,t.config.apiKey,t.name)}async function Pb(t,e,n=!1){if(rn(t.app))return Promise.reject($n(t));const s=Xs(t),i=vb(s,e),o=await new Cb(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=10*60*1e3;class kb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ob(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Wp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nb&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ob(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Db(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mb=/^https?/;async function Lb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Db(t);for(const n of e)try{if(Fb(n))return}catch{}Mt(t,"unauthorized-domain")}function Fb(t){const e=Za(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Mb.test(n))return!1;if(xb.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new cr(3e4,6e4);function ad(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $b(t){return new Promise((e,n)=>{var s,i,r;function o(){ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ad(),n(qt(t,"network-request-failed"))},timeout:Ub.get()})}if(!((i=(s=Kt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Kt().gapi)===null||r===void 0)&&r.load)o();else{const a=DE("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},Rp(`${OE()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Mr=null,e})}let Mr=null;function Bb(t){return Mr=Mr||$b(t),Mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new cr(5e3,15e3),Hb="__/auth/iframe",Wb="emulator/auth/iframe",jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kb(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gl(e,Wb):`https://${t.config.authDomain}/${Hb}`,s={apiKey:e.apiKey,appName:t.name,v:Js},i=qb.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Qs(s).slice(1)}`}async function Gb(t){const e=await Bb(t),n=Kt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:Kb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jb,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Kt().setTimeout(()=>{r(o)},Vb.get());function l(){Kt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yb=500,Qb=600,Jb="_blank",Xb="http://localhost";class ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zb(t,e,n,s=Yb,i=Qb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zb),{width:s.toString(),height:i.toString(),top:r,left:o}),c=lt().toLowerCase();n&&(a=Ep(c)?Jb:n),yp(c)&&(e=e||Xb,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(IE(c)&&a!=="_self")return eI(e||"",a),new ld(null);const d=window.open(e||"",a,u);X(d,t,"popup-blocked");try{d.focus()}catch{}return new ld(d)}function eI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="__/auth/handler",nI="emulator/auth/handler",sI=encodeURIComponent("fac");async function cd(t,e,n,s,i,r){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Js,eventId:i};if(e instanceof Np){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ga(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof ur){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${sI}=${encodeURIComponent(l)}`:"";return`${iI(t)}?${Qs(a).slice(1)}${c}`}function iI({config:t}){return t.emulator?Gl(t,nI):`https://${t.authDomain}/${tI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="webStorageSupport";class rI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=Pb,this._overrideRedirectResult=Sb}async _openPopup(e,n,s,i){var r;mn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await cd(e,n,s,Za(),i);return Zb(e,o,Xl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await cd(e,n,s,Za(),i);return lb(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(mn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Gb(e),s=new kb(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ya,{type:ya},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ya];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sp()||wp()||Yl()}}const oI=rI;var ud="@firebase/auth",dd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cI(t){zt(new xt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ap(t)},c=new PE(s,i,r,l);return UE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zt(new xt("auth-internal",e=>{const n=Xs(e.getProvider("auth").getImmediate());return(s=>new aI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(ud,dd,lI(t)),Tt(ud,dd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=5*60,dI=Xf("authIdTokenMaxAge")||uI;let hd=null;const hI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>dI)return;const i=n==null?void 0:n.token;hd!==i&&(hd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fI(t=jl()){const e=vs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FE(t,{popupRedirectResolver:oI,persistence:[_b,rb,Fp]}),s=Xf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=hI(r.toString());tb(n,o,()=>o(n.currentUser)),eb(n,a=>o(a))}}const i=Qf("auth");return i&&$E(n,`http://${i}`),n}function pI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NE({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=qt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",pI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cI("Browser");var fd={};const pd="@firebase/database",md="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jp="";function mI(t){jp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gI(e)}}catch{}return new _I},rs=qp("localStorage"),vI=qp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new xo("@firebase/database"),yI=function(){let t=1;return function(){return t++}}(),Kp=function(t){const e=qy(t),n=new Vy;n.update(e);const s=n.digest();return Bl.encodeByteArray(s)},hr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=hr.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let bi=null,gd=!0;const wI=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Ls.logLevel=be.VERBOSE,bi=Ls.log.bind(Ls)},Qe=function(...t){if(gd===!0&&(gd=!1,bi===null&&vI.get("logging_enabled")===!0&&wI()),bi){const e=hr.apply(null,t);bi(e)}},fr=function(t){return function(...e){Qe(t,...e)}},nl=function(...t){const e="FIREBASE INTERNAL ERROR: "+hr(...t);Ls.error(e)},gn=function(...t){const e=`FIREBASE FATAL ERROR: ${hr(...t)}`;throw Ls.error(e),new Error(e)},at=function(...t){const e="FIREBASE WARNING: "+hr(...t);Ls.warn(e)},EI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ec=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vs="[MIN_NAME]",hs="[MAX_NAME]",ws=function(t,e){if(t===e)return 0;if(t===Vs||e===hs)return-1;if(e===Vs||t===hs)return 1;{const n=_d(t),s=_d(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},II=function(t,e){return t===e?0:t<e?-1:1},oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+He(e))},tc=function(t){if(typeof t!="object"||t===null)return He(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=tc(t[e[s]]);return n+="}",n},Gp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zp=function(t){k(!ec(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},CI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function SI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const AI=new RegExp("^-?(0*)\\d{1,10}$"),RI=-2147483648,PI=2147483647,_d=function(t){if(AI.test(t)){const e=Number(t);if(e>=RI&&e<=PI)return e}return null},ei=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},NI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ii=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class Lr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="5",Yp="v",Qp="s",Jp="r",Xp="f",Zp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,em="ls",tm="p",sl="ac",nm="websocket",sm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function rm(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let s;if(e===nm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DI(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Cy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={},Ea={};function sc(t){const e=t.toString();return wa[e]||(wa[e]=new xI),wa[e]}function MI(t,e){const n=t.toString();return Ea[n]||(Ea[n]=e()),Ea[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ei(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="start",FI="close",UI="pLPCommand",$I="pRTLPCB",om="id",am="pw",lm="ser",BI="cb",VI="seg",HI="ts",WI="d",jI="dframe",cm=1870,um=30,qI=cm-um,KI=25e3,GI=3e4;class Ps{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fr(e),this.stats_=sc(n),this.urlFn=l=>(this.appCheckToken&&(l[sl]=this.appCheckToken),rm(n,sm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GI)),bI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ic((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vd)this.id=a,this.password=l;else if(o===FI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[vd]="t",s[lm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[BI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Yp]=nc,this.transportSessionId&&(s[Qp]=this.transportSessionId),this.lastSessionId&&(s[em]=this.lastSessionId),this.applicationId&&(s[tm]=this.applicationId),this.appCheckToken&&(s[sl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zp.test(location.hostname)&&(s[Jp]=Xp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ps.forceAllow_=!0}static forceDisallow(){Ps.forceDisallow_=!0}static isAvailable(){return Ps.forceAllow_?!0:!Ps.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CI()&&!TI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zf(n),i=Gp(s,qI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jI]="t",s[om]=e,s[am]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ic{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yI(),window[UI+this.uniqueCallbackIdentifier]=e,window[$I+this.uniqueCallbackIdentifier]=n,this.myIFrame=ic.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[om]=this.myID,e[am]=this.myPW,e[lm]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+um+s.length<=cm;){const o=this.pendingSegs.shift();s=s+"&"+VI+i+"="+o.seg+"&"+HI+i+"="+o.ts+"&"+WI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(KI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=16384,YI=45e3;let no=null;typeof MozWebSocket<"u"?no=MozWebSocket:typeof WebSocket<"u"&&(no=WebSocket);class Pt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fr(this.connId),this.stats_=sc(n),this.connURL=Pt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Yp]=nc,typeof location<"u"&&location.hostname&&Zp.test(location.hostname)&&(o[Jp]=Xp),n&&(o[Qp]=n),s&&(o[em]=s),i&&(o[sl]=i),r&&(o[tm]=r),rm(e,nm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rs.set("previous_websocket_failure",!0);try{let s;xy(),this.mySock=new no(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&no!==null&&!Pt.forceDisallow_}static previouslyFailed(){return rs.isInMemoryStorage||rs.get("previous_websocket_failure")===!0}markConnectionHealthy(){rs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Gp(n,zI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pt.responsesRequiredToBeHealthy=2;Pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ps,Pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Pt&&Pt.isAvailable();let s=n&&!Pt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pt];else{const i=this.transports_=[];for(const r of qi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=6e4,JI=5e3,XI=10*1024,ZI=100*1024,ba="t",yd="d",eC="s",wd="r",tC="e",Ed="o",bd="a",Id="n",Cd="p",nC="h";class sC{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fr("c:"+this.id+":"),this.transportManager_=new qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ii(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ba in e){const n=e[ba];n===bd?this.upgradeIfSecondaryHealthy_():n===wd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ed&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oi("t",e),s=oi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Id,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oi("t",e),s=oi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oi(ba,e);if(yd in e){const s=e[yd];if(n===nC){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Id){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eC?this.onConnectionShutdown_(s):n===wd?this.onReset_(s):n===tC?nl("Server Error: "+s):n===Ed?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),nc!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ii(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ii(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends hm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new so}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=32,Sd=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ie("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jn(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function rc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ki(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function Le(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ie(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return ot(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rC(t,e){const n=Ki(t,0),s=Ki(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=ws(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function oc(t,e){if(jn(t)!==jn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function bt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(jn(t)>jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class oC{constructor(e,n){this.errorPrefix_=n,this.parts_=Ki(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Do(this.parts_[s]);pm(this)}}function aC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Do(e),pm(t)}function lC(t){const e=t.parts_.pop();t.byteLength_-=Do(e),t.parts_.length>0&&(t.byteLength_-=1)}function pm(t){if(t.byteLength_>Sd)throw new Error(t.errorPrefix_+"has a key path longer than "+Sd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Td)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Td+") or object contains a cycle "+ts(t))}function ts(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends hm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ac}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=1e3,cC=60*5*1e3,Ad=30*1e3,uC=1.3,dC=3e4,hC="server_kill",Rd=3;class dn extends dm{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dn.nextPersistentConnectionId_++,this.log_=fr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ai,this.maxReconnectDelay_=cC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ac.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&so.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(He(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new lr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;dn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const s=$s(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||By(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ad)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$y(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):nl("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dC&&(this.reconnectDelay_=ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new sC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{at(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(hC)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&at(d),l())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ga(this.interruptReasons_)&&(this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>tc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rd&&(this.reconnectDelay_=Ad,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+jp.replace(/\./g,"-")]=1,Hl()?e["framework.cordova"]=1:ep()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=so.getInstance().currentlyOnline();return Ga(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new re(Vs,e),i=new re(Vs,n);return this.compare(s,i)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;class mm extends $o{static get __EMPTY_NODE(){return Cr}static set __EMPTY_NODE(e){Cr=e}compare(e,n){return ws(e.name,n.name)}isDefinedOn(e){throw Ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(hs,Cr)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Cr)}toString(){return".key"}}const Fs=new mm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??je.RED,this.left=i??ut.EMPTY_NODE,this.right=r??ut.EMPTY_NODE}copy(e,n,s,i,r){return new je(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ut.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0;je.BLACK=!1;class fC{copy(e,n,s,i,r){return this}insert(e,n,s){return new je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ut{constructor(e,n=ut.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ut(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new ut(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tr(this.root_,null,this.comparator_,!0,e)}}ut.EMPTY_NODE=new fC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){return ws(t.name,e.name)}function lc(t,e){return ws(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il;function mC(t){il=t}const gm=function(t){return typeof t=="number"?"number:"+zp(t):"string:"+t},_m=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else k(t===il||t.isEmpty(),"priority of unexpected type.");k(t===il||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;class We{constructor(e,n=We.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_m(this.priorityNode_)}static set __childrenNodeConstructor(e){Pd=e}static get __childrenNodeConstructor(){return Pd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new We(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ie(e)===".priority"?this.priorityNode_:We.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:We.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(k(s!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,We.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zp(this.value_):e+=this.value_,this.lazyHash_=Kp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===We.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof We.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=We.VALUE_TYPE_ORDER.indexOf(n),r=We.VALUE_TYPE_ORDER.indexOf(s);return k(i>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}We.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vm,ym;function gC(t){vm=t}function _C(t){ym=t}class vC extends $o{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ws(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(hs,new We("[PRIORITY-POST]",ym))}makePost(e,n){const s=vm(e);return new re(n,new We("[PRIORITY-POST]",s))}toString(){return".priority"}}const Fe=new vC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=Math.log(2);class wC{constructor(e){const n=r=>parseInt(Math.log(r)/yC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const io=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new je(h,d.node,je.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=i(l,f),y=i(f+1,c);return d=t[f],h=n?n(d):d,new je(h,d.node,je.BLACK,g,y)}},r=function(l){let c=null,u=null,d=t.length;const h=function(g,y){const R=d-g,E=d;d-=g;const v=i(R+1,E),P=t[R],b=n?n(P):P;f(new je(b,P.node,y,null,v))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),R=Math.pow(2,l.count-(g+1));y?h(R,je.BLACK):(h(R,je.BLACK),h(R,je.RED))}return u},o=new wC(t.length),a=r(o);return new ut(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia;const Cs={};class cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Cs&&Fe,"ChildrenNode.ts has not been loaded"),Ia=Ia||new cn({".priority":Cs},{".priority":Fe}),Ia}get(e){const n=$s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ut?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(re.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=io(s,e.getCompare()):a=Cs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new cn(u,c)}addToIndexes(e,n){const s=Yr(this.indexes_,(i,r)=>{const o=$s(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),i===Cs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(re.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),io(a,o.getCompare())}else return Cs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Yr(this.indexes_,i=>{if(i===Cs)return i;{const r=n.get(e.name);return r?i.remove(new re(e.name,r)):i}});return new cn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class Q{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_m(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return li||(li=new Q(new ut(lc),null,cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?li:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new re(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?li:this.priorityNode_;return new Q(i,o,r)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{k(ie(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Fe,(o,a)=>{n[o]=a.val(e),s++,r&&Q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gm(this.getPriority().val())+":"),this.forEachChild(Fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Kp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new re(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pr?-1:0}withIndex(e){if(e===Fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Fe),i=n.getIterator(Fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fs?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EC extends Q{constructor(){super(new ut(lc),Q.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const pr=new EC;Object.defineProperties(re,{MIN:{value:new re(Vs,Q.EMPTY_NODE)},MAX:{value:new re(hs,pr)}});mm.__EMPTY_NODE=Q.EMPTY_NODE;We.__childrenNodeConstructor=Q;mC(pr);_C(pr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=!0;function Ve(t,e=null){if(t===null)return Q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new We(n,Ve(e))}if(!(t instanceof Array)&&bC){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ve(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new re(o,l)))}}),n.length===0)return Q.EMPTY_NODE;const r=io(n,pC,o=>o.name,lc);if(s){const o=io(n,Fe.getCompare());return new Q(r,Ve(e),new cn({".priority":o},{".priority":Fe}))}else return new Q(r,Ve(e),cn.Default)}else{let n=Q.EMPTY_NODE;return Xe(t,(s,i)=>{if(Qt(t,s)&&s.substring(0,1)!=="."){const r=Ve(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ve(e))}}gC(Ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC extends $o{constructor(e){super(),this.indexPath_=e,k(!ae(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ws(e.name,n.name):r}makePost(e,n){const s=Ve(e),i=Q.EMPTY_NODE.updateChild(this.indexPath_,s);return new re(n,i)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,pr);return new re(hs,e)}toString(){return Ki(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC extends $o{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ws(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const s=Ve(e);return new re(n,s)}toString(){return".value"}}const TC=new CC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){return{type:"value",snapshotNode:t}}function Hs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Gi(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Hs(n,s)):o.trackChildChange(zi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Gi(i,r))}),n.isLeafNode()||n.forEachChild(Fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(zi(i,r,o))}else s.trackChildChange(Hs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.indexedFilter_=new cc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yi.getStartPost_(e),this.endPost_=Yi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new re(n,s))||(s=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Q.EMPTY_NODE);const r=this;return n.forEachChild(Fe,(o,a)=>{r.matches(new re(o,a))||(i=i.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Yi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new re(n,s))||(s=Q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new re(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(zi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Gi(n,d));const y=a.updateImmediateChild(n,Q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Hs(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Gi(c.name,c.node)),r.trackChildChange(Hs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,Q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vs}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new uc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RC(t){return t.loadsAllData()?new cc(t.getIndex()):t.hasLimit()?new AC(t):new Yi(t)}function Nd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===TC?n="$value":t.index_===Fs?n="$key":(k(t.index_ instanceof IC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=He(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=He(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+He(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=He(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+He(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends dm{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=fr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ro.getListenId_(e,s),a={};this.listens_[o]=a;const l=Nd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),$s(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=ro.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Nd(e._queryParams),s=e._path.toString(),i=new lr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bi(a.responseText)}catch{at("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&at("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){return{value:null,children:new Map}}function Em(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,oo());const i=t.children.get(s);e=Oe(e),Em(i,e,n)}}function rl(t,e,n){t.value!==null?n(e,t.value):NC(t,(s,i)=>{const r=new Ie(e.toString()+"/"+s);rl(i,r,n)})}function NC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=10*1e3,OC=30*1e3,DC=5*60*1e3;class xC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kC(e);const s=Od+(OC-Od)*Math.random();Ii(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&Qt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ii(this.reportStats_.bind(this),Math.floor(Math.random()*2*DC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function dc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Nt.ACK_USER_WRITE,this.source=dc()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new ao(_e(),n,this.revert)}}else return k(ie(this.path)===e,"operationForChild called for unrelated child."),new ao(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.source=e,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Qi(this.source,_e()):new Qi(this.source,Oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Nt.OVERWRITE}operationForChild(e){return ae(this.path)?new fs(this.source,_e(),this.snap.getImmediateChild(e)):new fs(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Nt.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new fs(this.source,_e(),n.value):new Ws(this.source,_e(),n)}else return k(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ws(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(SC(o.childName,o.snapshotNode))}),ci(t,i,"child_removed",e,s,n),ci(t,i,"child_added",e,s,n),ci(t,i,"child_moved",r,s,n),ci(t,i,"child_changed",e,s,n),ci(t,i,"value",e,s,n),i}function ci(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>UC(t,a,l)),o.forEach(a=>{const l=FC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function FC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function UC(t,e,n){if(e.childName==null||n.childName==null)throw Ys("Should only compare child_ events.");const s=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e){return{eventCache:t,serverCache:e}}function Ci(t,e,n,s){return Bo(new qn(e,n,s),t.serverCache)}function bm(t,e,n,s){return Bo(t.eventCache,new qn(e,n,s))}function lo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ps(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca;const $C=()=>(Ca||(Ca=new ut(II)),Ca);class ke{constructor(e,n=$C()){this.value=e,this.children=n}static fromObject(e){let n=new ke(null);return Xe(e,(s,i)=>{n=n.set(new Ie(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(ae(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Oe(e),n);return r!=null?{path:Le(new Ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new ke(null)}}set(e,n){if(ae(e))return new ke(n,this.children);{const s=ie(e),r=(this.children.get(s)||new ke(null)).set(Oe(e),n),o=this.children.insert(s,r);return new ke(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const i=s.remove(Oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ke(null):new ke(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(ae(e))return n;{const s=ie(e),r=(this.children.get(s)||new ke(null)).setTree(Oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ke(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Le(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(Oe(e),Le(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(Oe(e),Le(n,i),s):new ke(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new ke(null))}}function Ti(t,e,n){if(ae(e))return new Ot(new ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ot(i,e);return r=r.updateChild(o,n),new Ot(t.writeTree_.set(i,r))}else{const i=new ke(n),r=t.writeTree_.setTree(e,i);return new Ot(r)}}}function ol(t,e,n){let s=t;return Xe(n,(i,r)=>{s=Ti(s,Le(e,i),r)}),s}function Dd(t,e){if(ae(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new Ot(n)}}function al(t,e){return Es(t,e)!=null}function Es(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function xd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(s,i)=>{e.push(new re(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new re(s,i.value))}),e}function Bn(t,e){if(ae(e))return t;{const n=Es(t,e);return n!=null?new Ot(new ke(n)):new Ot(t.writeTree_.subtree(e))}}function ll(t){return t.writeTree_.isEmpty()}function js(t,e){return Im(_e(),t.writeTree_,e)}function Im(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Im(Le(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Le(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e){return Am(e,t)}function BC(t,e,n,s,i){k(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ti(t.visibleWrites,e,n)),t.lastWriteId=s}function VC(t,e,n,s){k(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=ol(t.visibleWrites,e,n),t.lastWriteId=s}function HC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function WC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jC(a,s.path)?i=!1:bt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return qC(t),!0;if(s.snap)t.visibleWrites=Dd(t.visibleWrites,s.path);else{const a=s.children;Xe(a,l=>{t.visibleWrites=Dd(t.visibleWrites,Le(s.path,l))})}return!0}else return!1}function jC(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(Le(t.path,n),e))return!0;return!1}function qC(t){t.visibleWrites=Cm(t.allWrites,KC,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function KC(t){return t.visible}function Cm(t,e,n){let s=Ot.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)bt(n,o)?(a=ot(n,o),s=Ti(s,a,r.snap)):bt(o,n)&&(a=ot(o,n),s=Ti(s,_e(),r.snap.getChild(a)));else if(r.children){if(bt(n,o))a=ot(n,o),s=ol(s,a,r.children);else if(bt(o,n))if(a=ot(o,n),ae(a))s=ol(s,_e(),r.children);else{const l=$s(r.children,ie(a));if(l){const c=l.getChild(Oe(a));s=Ti(s,_e(),c)}}}else throw Ys("WriteRecord should have .snap or .children")}}return s}function Tm(t,e,n,s,i){if(!s&&!i){const r=Es(t.visibleWrites,e);if(r!=null)return r;{const o=Bn(t.visibleWrites,e);if(ll(o))return n;if(n==null&&!al(o,_e()))return null;{const a=n||Q.EMPTY_NODE;return js(o,a)}}}else{const r=Bn(t.visibleWrites,e);if(!i&&ll(r))return n;if(!i&&n==null&&!al(r,_e()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(bt(c.path,e)||bt(e,c.path))},a=Cm(t.allWrites,o,e),l=n||Q.EMPTY_NODE;return js(a,l)}}}function GC(t,e,n){let s=Q.EMPTY_NODE;const i=Es(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Bn(t.visibleWrites,e);return n.forEachChild(Fe,(o,a)=>{const l=js(Bn(r,new Ie(o)),a);s=s.updateImmediateChild(o,l)}),xd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bn(t.visibleWrites,e);return xd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zC(t,e,n,s,i){k(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Le(e,n);if(al(t.visibleWrites,r))return null;{const o=Bn(t.visibleWrites,r);return ll(o)?i.getChild(n):js(o,i.getChild(n))}}function YC(t,e,n,s){const i=Le(e,n),r=Es(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Bn(t.visibleWrites,i);return js(o,s.getNode().getImmediateChild(n))}else return null}function QC(t,e){return Es(t.visibleWrites,e)}function JC(t,e,n,s,i,r,o){let a;const l=Bn(t.visibleWrites,e),c=Es(l,_e());if(c!=null)a=c;else if(n!=null)a=js(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=h.getNext();for(;f&&u.length<i;)d(f,s)!==0&&u.push(f),f=h.getNext();return u}else return[]}function XC(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function co(t,e,n,s){return Tm(t.writeTree,t.treePath,e,n,s)}function pc(t,e){return GC(t.writeTree,t.treePath,e)}function Md(t,e,n,s){return zC(t.writeTree,t.treePath,e,n,s)}function uo(t,e){return QC(t.writeTree,Le(t.treePath,e))}function ZC(t,e,n,s,i,r){return JC(t.writeTree,t.treePath,e,n,s,i,r)}function mc(t,e,n){return YC(t.writeTree,t.treePath,e,n)}function Sm(t,e){return Am(Le(t.treePath,e),t.writeTree)}function Am(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Gi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Hs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zi(s,e.snapshotNode,i.oldSnap));else throw Ys("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Rm=new tT;class gc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ps(this.viewCache_),r=ZC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){return{filter:t}}function sT(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iT(t,e,n,s,i){const r=new eT;let o,a;if(n.type===Nt.OVERWRITE){const c=n;c.source.fromUser?o=cl(t,e,c.path,c.snap,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=ho(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Nt.MERGE){const c=n;c.source.fromUser?o=oT(t,e,c.path,c.children,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ul(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Nt.ACK_USER_WRITE){const c=n;c.revert?o=cT(t,e,c.path,s,i,r):o=aT(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Nt.LISTEN_COMPLETE)o=lT(t,e,n.path,s,r);else throw Ys("Unknown operation type: "+n.type);const l=r.getChanges();return rT(e,o,l),{viewCache:o,changes:l}}function rT(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=lo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(wm(lo(e)))}}function Pm(t,e,n,s,i,r){const o=e.eventCache;if(uo(s,n)!=null)return e;{let a,l;if(ae(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ps(e),u=c instanceof Q?c:Q.EMPTY_NODE,d=pc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=co(s,ps(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ie(n);if(c===".priority"){k(jn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Md(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Oe(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Md(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=mc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ci(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function ho(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=ie(n);if(!l.isCompleteForPath(n)&&jn(n)>1)return e;const g=Oe(n),R=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),f,R,g,Rm,null)}const d=bm(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),h=new gc(i,d,r);return Pm(t,d,n,i,h,a)}function cl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new gc(i,e,r);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ci(e,c,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ci(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Oe(n),f=a.getNode().getImmediateChild(d);let g;if(ae(h))g=s;else{const y=u.getCompleteChild(d);y!=null?rc(h)===".priority"&&y.getChild(fm(h)).isEmpty()?g=y:g=y.updateChild(h,s):g=Q.EMPTY_NODE}if(f.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),d,g,h,u,o);l=Ci(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ld(t,e){return t.eventCache.isCompleteForChild(e)}function oT(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Le(n,l);Ld(e,ie(u))&&(a=cl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Le(n,l);Ld(e,ie(u))||(a=cl(t,a,u,c,i,r,o))}),a}function Fd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ul(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new ke(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),g=Fd(t,f,h);l=ho(t,l,new Ie(d),g,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const g=e.serverCache.getNode().getImmediateChild(d),y=Fd(t,g,h);l=ho(t,l,new Ie(d),y,i,r,o,a)}}),l}function aT(t,e,n,s,i,r,o){if(uo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ho(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ae(n)){let c=new ke(null);return l.getNode().forEachChild(Fs,(u,d)=>{c=c.set(new Ie(u),d)}),ul(t,e,n,c,i,r,a,o)}else return e}else{let c=new ke(null);return s.foreach((u,d)=>{const h=Le(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ul(t,e,n,c,i,r,a,o)}}function lT(t,e,n,s,i){const r=e.serverCache,o=bm(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return Pm(t,o,n,s,Rm,i)}function cT(t,e,n,s,i,r){let o;if(uo(s,n)!=null)return e;{const a=new gc(s,e,i),l=e.eventCache.getNode();let c;if(ae(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=co(s,ps(e));else{const d=e.serverCache.getNode();k(d instanceof Q,"serverChildren would be complete if leaf node"),u=pc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ie(n);let d=mc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Oe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Q.EMPTY_NODE,Oe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=co(s,ps(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||uo(s,_e())!=null,Ci(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new cc(s.getIndex()),r=RC(s);this.processor_=nT(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),u=new qn(l,o.isFullyInitialized(),i.filtersNodes()),d=new qn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Bo(d,u),this.eventGenerator_=new MC(this.query_)}get query(){return this.query_}}function dT(t){return t.viewCache_.serverCache.getNode()}function hT(t){return lo(t.viewCache_)}function fT(t,e){const n=ps(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Ud(t){return t.eventRegistrations_.length===0}function pT(t,e){t.eventRegistrations_.push(e)}function $d(t,e,n){const s=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Bd(t,e,n,s){e.type===Nt.MERGE&&e.source.queryId!==null&&(k(ps(t.viewCache_),"We should always have a full cache before handling merges"),k(lo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=iT(t.processor_,i,e,n,s);return sT(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Nm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function mT(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(r,o)=>{s.push(Hs(r,o))}),n.isFullyInitialized()&&s.push(wm(n.getNode())),Nm(t,s,n.getNode(),e)}function Nm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return LC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class km{constructor(){this.views=new Map}}function gT(t){k(!fo,"__referenceConstructor has already been defined"),fo=t}function _T(){return k(fo,"Reference.ts has not been loaded"),fo}function vT(t){return t.views.size===0}function _c(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return k(r!=null,"SyncTree gave us an op for an invalid query."),Bd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Bd(o,e,n,s));return r}}function Om(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=co(n,i?s:null),l=!1;a?l=!0:s instanceof Q?(a=pc(n,s),l=!1):(a=Q.EMPTY_NODE,l=!1);const c=Bo(new qn(a,l,!1),new qn(s,i,!1));return new uT(e,c)}return o}function yT(t,e,n,s,i,r){const o=Om(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),pT(o,n),mT(o,n)}function wT(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Kn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat($d(c,n,s)),Ud(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat($d(l,n,s)),Ud(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Kn(t)&&r.push(new(_T())(e._repo,e._path)),{removed:r,events:o}}function Dm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vn(t,e){let n=null;for(const s of t.views.values())n=n||fT(s,e);return n}function xm(t,e){if(e._queryParams.loadsAllData())return Ho(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Mm(t,e){return xm(t,e)!=null}function Kn(t){return Ho(t)!=null}function Ho(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;function ET(t){k(!po,"__referenceConstructor has already been defined"),po=t}function bT(){return k(po,"Reference.ts has not been loaded"),po}let IT=1;class Vd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=XC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lm(t,e,n,s,i){return BC(t.pendingWriteTree_,e,n,s,i),i?ti(t,new fs(dc(),e,n)):[]}function CT(t,e,n,s){VC(t.pendingWriteTree_,e,n,s);const i=ke.fromObject(n);return ti(t,new Ws(dc(),e,i))}function xn(t,e,n=!1){const s=HC(t.pendingWriteTree_,e);if(WC(t.pendingWriteTree_,e)){let r=new ke(null);return s.snap!=null?r=r.set(_e(),!0):Xe(s.children,o=>{r=r.set(new Ie(o),!0)}),ti(t,new ao(s.path,r,n))}else return[]}function mr(t,e,n){return ti(t,new fs(hc(),e,n))}function TT(t,e,n){const s=ke.fromObject(n);return ti(t,new Ws(hc(),e,s))}function ST(t,e){return ti(t,new Qi(hc(),e))}function AT(t,e,n){const s=yc(t,n);if(s){const i=wc(s),r=i.path,o=i.queryId,a=ot(r,e),l=new Qi(fc(o),a);return Ec(t,r,l)}else return[]}function mo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Mm(o,e))){const l=wT(o,e,n,s);vT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>Kn(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=NT(h);for(let g=0;g<f.length;++g){const y=f[g],R=y.query,E=Bm(t,y);t.listenProvider_.startListening(Si(R),Ji(t,R),E.hashFn,E.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Si(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(Wo(h));t.listenProvider_.stopListening(Si(h),f)}))}kT(t,c)}return a}function Fm(t,e,n,s){const i=yc(t,s);if(i!=null){const r=wc(i),o=r.path,a=r.queryId,l=ot(o,e),c=new fs(fc(a),l,n);return Ec(t,o,c)}else return[]}function RT(t,e,n,s){const i=yc(t,s);if(i){const r=wc(i),o=r.path,a=r.queryId,l=ot(o,e),c=ke.fromObject(n),u=new Ws(fc(a),l,c);return Ec(t,o,u)}else return[]}function dl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const g=ot(h,i);r=r||Vn(f,g),o=o||Kn(f)});let a=t.syncPointTree_.get(i);a?(o=o||Kn(a),r=r||Vn(a,_e())):(a=new km,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=Q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,g)=>{const y=Vn(g,_e());y&&(r=r.updateImmediateChild(f,y))}));const c=Mm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Wo(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=OT();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=Vo(t.pendingWriteTree_,i);let d=yT(a,e,n,u,r,l);if(!c&&!o&&!s){const h=xm(a,e);d=d.concat(DT(t,e,h))}return d}function vc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),c=Vn(a,l);if(c)return c});return Tm(i,e,r,n,!0)}function PT(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ot(c,n);s=s||Vn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||Vn(i,_e()):(i=new km,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new qn(s,!0,!1):null,a=Vo(t.pendingWriteTree_,e._path),l=Om(i,e,a,r?o.getNode():Q.EMPTY_NODE,r);return hT(l)}function ti(t,e){return Um(e,t.syncPointTree_,null,Vo(t.pendingWriteTree_,_e()))}function Um(t,e,n,s){if(ae(t.path))return $m(t,e,n,s);{const i=e.get(_e());n==null&&i!=null&&(n=Vn(i,_e()));let r=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Sm(s,o);r=r.concat(Um(a,l,c,u))}return i&&(r=r.concat(_c(i,t,s,n))),r}}function $m(t,e,n,s){const i=e.get(_e());n==null&&i!=null&&(n=Vn(i,_e()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Sm(s,o),u=t.operationForChild(o);u&&(r=r.concat($m(u,a,l,c)))}),i&&(r=r.concat(_c(i,t,s,n))),r}function Bm(t,e){const n=e.query,s=Ji(t,n);return{hashFn:()=>(dT(e)||Q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?AT(t,n._path,s):ST(t,n._path);{const r=SI(i,n);return mo(t,n,null,r)}}}}function Ji(t,e){const n=Wo(e);return t.queryToTagMap.get(n)}function Wo(t){return t._path.toString()+"$"+t._queryIdentifier}function yc(t,e){return t.tagToQueryMap.get(e)}function wc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function Ec(t,e,n){const s=t.syncPointTree_.get(e);k(s,"Missing sync point for query tag that we're tracking");const i=Vo(t.pendingWriteTree_,e);return _c(s,n,i,null)}function NT(t){return t.fold((e,n,s)=>{if(n&&Kn(n))return[Ho(n)];{let i=[];return n&&(i=Dm(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Si(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bT())(t._repo,t._path):t}function kT(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Wo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function OT(){return IT++}function DT(t,e,n){const s=e._path,i=Ji(t,e),r=Bm(t,n),o=t.listenProvider_.startListening(Si(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)k(!Kn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ae(c)&&u&&Kn(u))return[Ho(u).query];{let h=[];return u&&(h=h.concat(Dm(u).map(f=>f.query))),Xe(d,(f,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Si(u),Ji(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bc(n)}node(){return this.node_}}class Ic{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new Ic(this.syncTree_,n)}node(){return vc(this.syncTree_,this.path_)}}const xT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hd=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return MT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return LT(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},MT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},LT=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&k(!1,"Unexpected increment value: "+s);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Vm=function(t,e,n,s){return Cc(e,new Ic(n,t),s)},Hm=function(t,e,n){return Cc(t,new bc(e),n)};function Cc(t,e,n){const s=t.getPriority().val(),i=Hd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Hd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new We(a,Ve(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new We(i))),o.forEachChild(Fe,(a,l)=>{const c=Cc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Sc(t,e){let n=e instanceof Ie?e:new Ie(e),s=t,i=ie(n);for(;i!==null;){const r=$s(s.node.children,i)||{children:{},childCount:0};s=new Tc(i,s,r),n=Oe(n),i=ie(n)}return s}function ni(t){return t.node.value}function Wm(t,e){t.node.value=e,hl(t)}function jm(t){return t.node.childCount>0}function FT(t){return ni(t)===void 0&&!jm(t)}function jo(t,e){Xe(t.node.children,(n,s)=>{e(new Tc(n,t,s))})}function qm(t,e,n,s){n&&e(t),jo(t,i=>{qm(i,e,!0)})}function UT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function gr(t){return new Ie(t.parent===null?t.name:gr(t.parent)+"/"+t.name)}function hl(t){t.parent!==null&&$T(t.parent,t.name,t)}function $T(t,e,n){const s=FT(n),i=Qt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,hl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,hl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=/[\[\].#$\/\u0000-\u001F\u007F]/,VT=/[\[\].#$\u0000-\u001F\u007F]/,Ta=10*1024*1024,Ac=function(t){return typeof t=="string"&&t.length!==0&&!BT.test(t)},Km=function(t){return typeof t=="string"&&t.length!==0&&!VT.test(t)},HT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Km(t)},WT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ec(t)||t&&typeof t=="object"&&Qt(t,".sv")},Gm=function(t,e,n,s){s&&e===void 0||qo(Oo(t,"value"),e,n)},qo=function(t,e,n){const s=n instanceof Ie?new oC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ts(s));if(typeof e=="function")throw new Error(t+"contains a function "+ts(s)+" with contents = "+e.toString());if(ec(e))throw new Error(t+"contains "+e.toString()+" "+ts(s));if(typeof e=="string"&&e.length>Ta/3&&Do(e)>Ta)throw new Error(t+"contains a string greater than "+Ta+" utf8 bytes "+ts(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ac(o)))throw new Error(t+" contains an invalid key ("+o+") "+ts(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aC(s,o),qo(t,a,s),lC(s)}),i&&r)throw new Error(t+' contains ".value" child '+ts(s)+" in addition to actual children.")}},jT=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ki(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ac(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rC);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&bt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},qT=function(t,e,n,s){const i=Oo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Xe(e,(o,a)=>{const l=new Ie(o);if(qo(i,a,Le(n,l)),rc(l)===".priority"&&!WT(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),jT(i,r)},zm=function(t,e,n,s){if(!Km(n))throw new Error(Oo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},KT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zm(t,e,n)},Rc=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},GT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ac(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HT(n))throw new Error(Oo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ko(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!oc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ym(t,e,n){Ko(t,n),Qm(t,s=>oc(s,e))}function At(t,e,n){Ko(t,n),Qm(t,s=>bt(s,e)||bt(e,s))}function Qm(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(YT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();bi&&Qe("event: "+n.toString()),ei(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="repo_interrupt",JT=25;class XT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=oo(),this.transactionQueueTree_=new Tc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ZT(t,e,n){if(t.stats_=sc(t.repoInfo_),t.forceRestClient_||NI())t.server_=new ro(t.repoInfo_,(s,i,r,o)=>{Wd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dn(t.repoInfo_,e,(s,i,r,o)=>{Wd(t,s,i,r,o)},s=>{jd(t,s)},s=>{eS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=MI(t.repoInfo_,()=>new xC(t.stats_,t.server_)),t.infoData_=new PC,t.infoSyncTree_=new Vd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=mr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pc(t,"connected",!1),t.serverSyncTree_=new Vd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);At(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Jm(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Go(t){return xT({timestamp:Jm(t)})}function Wd(t,e,n,s,i){t.dataUpdateCount++;const r=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Yr(n,c=>Ve(c));o=RT(t.serverSyncTree_,r,l,i)}else{const l=Ve(n);o=Fm(t.serverSyncTree_,r,l,i)}else if(s){const l=Yr(n,c=>Ve(c));o=TT(t.serverSyncTree_,r,l)}else{const l=Ve(n);o=mr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=qs(t,r)),At(t.eventQueue_,a,o)}function jd(t,e){Pc(t,"connected",e),e===!1&&iS(t)}function eS(t,e){Xe(e,(n,s)=>{Pc(t,n,s)})}function Pc(t,e,n){const s=new Ie("/.info/"+e),i=Ve(n);t.infoData_.updateSnapshot(s,i);const r=mr(t.infoSyncTree_,s,i);At(t.eventQueue_,s,r)}function Nc(t){return t.nextWriteId_++}function tS(t,e,n){const s=PT(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ve(i).withIndex(e._queryParams.getIndex());dl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=mr(t.serverSyncTree_,e._path,r);else{const a=Ji(t.serverSyncTree_,e);o=Fm(t.serverSyncTree_,e._path,r,a)}return At(t.eventQueue_,e._path,o),mo(t.serverSyncTree_,e,n,null,!0),r},i=>(_r(t,"get for query "+He(e)+" failed: "+i),Promise.reject(new Error(i))))}function nS(t,e,n,s,i){_r(t,"set",{path:e.toString(),value:n,priority:s});const r=Go(t),o=Ve(n,s),a=vc(t.serverSyncTree_,e),l=Hm(o,a,r),c=Nc(t),u=Lm(t.serverSyncTree_,e,l,c,!0);Ko(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const g=h==="ok";g||at("set at "+e+" failed: "+h);const y=xn(t.serverSyncTree_,c,!g);At(t.eventQueue_,e,y),fl(t,i,h,f)});const d=Oc(t,e);qs(t,d),At(t.eventQueue_,d,[])}function sS(t,e,n,s){_r(t,"update",{path:e.toString(),value:n});let i=!0;const r=Go(t),o={};if(Xe(n,(a,l)=>{i=!1,o[a]=Vm(Le(e,a),Ve(l),t.serverSyncTree_,r)}),i)Qe("update() called with empty data.  Don't do anything."),fl(t,s,"ok",void 0);else{const a=Nc(t),l=CT(t.serverSyncTree_,e,o,a);Ko(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||at("update at "+e+" failed: "+c);const h=xn(t.serverSyncTree_,a,!d),f=h.length>0?qs(t,e):e;At(t.eventQueue_,f,h),fl(t,s,c,u)}),Xe(n,c=>{const u=Oc(t,Le(e,c));qs(t,u)}),At(t.eventQueue_,e,[])}}function iS(t){_r(t,"onDisconnectEvents");const e=Go(t),n=oo();rl(t.onDisconnect_,_e(),(i,r)=>{const o=Vm(i,r,t.serverSyncTree_,e);Em(n,i,o)});let s=[];rl(n,_e(),(i,r)=>{s=s.concat(mr(t.serverSyncTree_,i,r));const o=Oc(t,i);qs(t,o)}),t.onDisconnect_=oo(),At(t.eventQueue_,_e(),s)}function rS(t,e,n){let s;ie(e._path)===".info"?s=dl(t.infoSyncTree_,e,n):s=dl(t.serverSyncTree_,e,n),Ym(t.eventQueue_,e._path,s)}function qd(t,e,n){let s;ie(e._path)===".info"?s=mo(t.infoSyncTree_,e,n):s=mo(t.serverSyncTree_,e,n),Ym(t.eventQueue_,e._path,s)}function oS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QT)}function _r(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function fl(t,e,n,s){e&&ei(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Xm(t,e,n){return vc(t.serverSyncTree_,e,n)||Q.EMPTY_NODE}function kc(t,e=t.transactionQueueTree_){if(e||zo(t,e),ni(e)){const n=eg(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&aS(t,gr(e),n)}else jm(e)&&jo(e,n=>{kc(t,n)})}function aS(t,e,n){const s=n.map(c=>c.currentWriteId),i=Xm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ot(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{_r(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();zo(t,Sc(t.transactionQueueTree_,e)),kc(t,t.transactionQueueTree_),At(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ei(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{at("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}qs(t,e)}},o)}function qs(t,e){const n=Zm(t,e),s=gr(n),i=eg(t,n);return lS(t,i,s),s}function lS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ot(n,l.path);let u=!1,d;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(xn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=JT)u=!0,d="maxretry",i=i.concat(xn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Xm(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){qo("transaction failed: Data returned ",f,l.path);let g=Ve(f);typeof f=="object"&&f!=null&&Qt(f,".priority")||(g=g.updatePriority(h.getPriority()));const R=l.currentWriteId,E=Go(t),v=Hm(g,h,E);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=v,l.currentWriteId=Nc(t),o.splice(o.indexOf(R),1),i=i.concat(Lm(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),i=i.concat(xn(t.serverSyncTree_,R,!0))}else u=!0,d="nodata",i=i.concat(xn(t.serverSyncTree_,l.currentWriteId,!0))}At(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}zo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ei(s[a]);kc(t,t.transactionQueueTree_)}function Zm(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&ni(s)===void 0;)s=Sc(s,n),e=Oe(e),n=ie(e);return s}function eg(t,e){const n=[];return tg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function tg(t,e,n){const s=ni(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);jo(e,i=>{tg(t,i,n)})}function zo(t,e){const n=ni(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Wm(e,n.length>0?n:void 0)}jo(e,s=>{zo(t,s)})}function Oc(t,e){const n=gr(Zm(t,e)),s=Sc(t.transactionQueueTree_,e);return UT(s,i=>{Sa(t,i)}),Sa(t,s),qm(s,i=>{Sa(t,i)}),n}function Sa(t,e){const n=ni(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Wm(e,void 0):n.length=r+1,At(t.eventQueue_,gr(e),i);for(let o=0;o<s.length;o++)ei(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kd=function(t,e){const n=dS(t),s=n.namespace;n.domain==="firebase.com"&&gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new im(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ie(n.pathString)}},dS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=cS(t.substring(u,d)));const h=uS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Gd.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Gd.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class pS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:rc(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=kd(this._queryParams),n=tc(e);return n==="{}"?"default":n}get _queryObject(){return kd(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof Dc))return!1;const n=this._repo===e._repo,s=oc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iC(this._path)}}class vn extends Dc{constructor(e,n){super(e,n,new uc,!1)}get parent(){const e=fm(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),s=Zi(this.ref,e);return new Xi(this._node.getChild(n),s,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xi(i,Zi(this.ref,s),Fe)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ts(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?Zi(t._root,e):t._root}function Zi(t,e){return t=Ge(t),ie(t._path)===null?KT("child","path",e):zm("child","path",e),new vn(t._repo,Le(t._path,e))}function mS(t,e){t=Ge(t),Rc("push",t._path),Gm("push",e,t._path,!0);const n=Jm(t._repo),s=hS(n),i=Zi(t,s),r=Zi(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function gS(t){return Rc("remove",t._path),pl(t,null)}function pl(t,e){t=Ge(t),Rc("set",t._path),Gm("set",e,t._path,!1);const n=new lr;return nS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _S(t,e){qT("update",e,t._path);const n=new lr;return sS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function vS(t){t=Ge(t);const e=new ng(()=>{}),n=new Yo(e);return tS(t._repo,t,n).then(s=>new Xi(s,new vn(t._repo,t._path),t._queryParams.getIndex()))}class Yo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fS("value",this,new Xi(e.snapshotNode,new vn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pS(this,e,n):null}matches(e){return e instanceof Yo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function yS(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,d)=>{qd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ng(n,r||void 0),a=new Yo(o);return rS(t._repo,t,a),()=>qd(t._repo,t,a)}function wS(t,e,n,s){return yS(t,"value",e,n,s)}gT(vn);ET(vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="FIREBASE_DATABASE_EMULATOR_HOST",ml={};let bS=!1;function IS(t,e,n,s){t.repoInfo_=new im(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function CS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kd(r,i),a=o.repoInfo,l;typeof process<"u"&&fd&&(l=fd[ES]),l?(r=`http://${l}?ns=${a.namespace}`,o=Kd(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new OI(t.name,t.options,e);GT("Invalid Firebase Database URL",o),ae(o.path)||gn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=SS(a,t,c,new kI(t.name,n));return new AS(u,t)}function TS(t,e){const n=ml[e];(!n||n[t.key]!==t)&&gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),oS(t),delete n[t.key]}function SS(t,e,n,s){let i=ml[e.name];i||(i={},ml[e.name]=i);let r=i[t.toURLString()];return r&&gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new XT(t,bS,n,s),i[t.toURLString()]=r,r}class AS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ZT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gn("Cannot call "+e+" on a deleted database.")}}function RS(t=jl(),e){const n=vs(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ny("database");s&&PS(n,...s)}return n}function PS(t,e,n,s={}){t=Ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&gn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Lr(Lr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ky(s.mockUserToken,t.app.options.projectId);r=new Lr(o)}IS(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){mI(Js),zt(new xt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return CS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Tt(pd,md,t),Tt(pd,md,"esm2017")}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NS();const sg="@firebase/installations",xc="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=1e4,rg=`w:${xc}`,og="FIS_v2",kS="https://firebaseinstallations.googleapis.com/v1",OS=60*60*1e3,DS="installations",xS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ms=new _s(DS,xS,MS);function ag(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg({projectId:t}){return`${kS}/projects/${t}/installations`}function cg(t){return{token:t.token,requestStatus:2,expiresIn:FS(t.expiresIn),creationTime:Date.now()}}async function ug(t,e){const s=(await e.json()).error;return ms.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function dg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function LS(t,{refreshToken:e}){const n=dg(t);return n.append("Authorization",US(e)),n}async function hg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FS(t){return Number(t.replace("s","000"))}function US(t){return`${og} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=lg(t),i=dg(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:og,appId:t.appId,sdkVersion:rg},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await hg(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:cg(c.authToken)}}else throw await ug("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=/^[cdef][\w-]{21}$/,gl="";function HS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=WS(t);return VS.test(n)?n:gl}catch{return gl}}function WS(t){return BS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Map;function mg(t,e){const n=Qo(t);gg(n,e),jS(n,e)}function gg(t,e){const n=pg.get(t);if(n)for(const s of n)s(e)}function jS(t,e){const n=qS();n&&n.postMessage({key:t,fid:e}),KS()}let os=null;function qS(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=t=>{gg(t.data.key,t.data.fid)}),os}function KS(){pg.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebase-installations-database",zS=1,gs="firebase-installations-store";let Aa=null;function Mc(){return Aa||(Aa=op(GS,zS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}})),Aa}async function go(t,e){const n=Qo(t),i=(await Mc()).transaction(gs,"readwrite"),r=i.objectStore(gs),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mg(t,e.fid),e}async function _g(t){const e=Qo(t),s=(await Mc()).transaction(gs,"readwrite");await s.objectStore(gs).delete(e),await s.done}async function Jo(t,e){const n=Qo(t),i=(await Mc()).transaction(gs,"readwrite"),r=i.objectStore(gs),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&mg(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(t){let e;const n=await Jo(t.appConfig,s=>{const i=YS(s),r=QS(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===gl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function YS(t){const e=t||{fid:HS(),registrationStatus:0};return vg(e)}function QS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ms.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=JS(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XS(t)}:{installationEntry:e}}async function JS(t,e){try{const n=await $S(t,e);return go(t.appConfig,n)}catch(n){throw ag(n)&&n.customData.serverCode===409?await _g(t.appConfig):await go(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function XS(t){let e=await zd(t.appConfig);for(;e.registrationStatus===1;)await fg(100),e=await zd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Lc(t);return s||n}return e}function zd(t){return Jo(t,e=>{if(!e)throw ms.create("installation-not-found");return vg(e)})}function vg(t){return ZS(t)?{fid:t.fid,registrationStatus:0}:t}function ZS(t){return t.registrationStatus===1&&t.registrationTime+ig<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0({appConfig:t,heartbeatServiceProvider:e},n){const s=t0(t,n),i=LS(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:rg,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await hg(()=>fetch(s,a));if(l.ok){const c=await l.json();return cg(c)}else throw await ug("Generate Auth Token",l)}function t0(t,{fid:e}){return`${lg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(t,e=!1){let n;const s=await Jo(t.appConfig,r=>{if(!yg(r))throw ms.create("not-registered");const o=r.authToken;if(!e&&i0(o))return r;if(o.requestStatus===1)return n=n0(t,e),r;{if(!navigator.onLine)throw ms.create("app-offline");const a=o0(r);return n=s0(t,a),a}});return n?await n:s.authToken}async function n0(t,e){let n=await Yd(t.appConfig);for(;n.authToken.requestStatus===1;)await fg(100),n=await Yd(t.appConfig);const s=n.authToken;return s.requestStatus===0?Fc(t,e):s}function Yd(t){return Jo(t,e=>{if(!yg(e))throw ms.create("not-registered");const n=e.authToken;return a0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function s0(t,e){try{const n=await e0(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await go(t.appConfig,s),n}catch(n){if(ag(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _g(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await go(t.appConfig,s)}throw n}}function yg(t){return t!==void 0&&t.registrationStatus===2}function i0(t){return t.requestStatus===2&&!r0(t)}function r0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+OS}function o0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function a0(t){return t.requestStatus===1&&t.requestTime+ig<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t){const e=t,{installationEntry:n,registrationPromise:s}=await Lc(e);return s?s.catch(console.error):Fc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t,e=!1){const n=t;return await u0(n),(await Fc(n,e)).token}async function u0(t){const{registrationPromise:e}=await Lc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){if(!t||!t.options)throw Ra("App Configuration");if(!t.name)throw Ra("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ra(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ra(t){return ms.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="installations",h0="installations-internal",f0=t=>{const e=t.getProvider("app").getImmediate(),n=d0(e),s=vs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},p0=t=>{const e=t.getProvider("app").getImmediate(),n=vs(e,wg).getImmediate();return{getId:()=>l0(n),getToken:i=>c0(n,i)}};function m0(){zt(new xt(wg,f0,"PUBLIC")),zt(new xt(h0,p0,"PRIVATE"))}m0();Tt(sg,xc);Tt(sg,xc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="analytics",g0="firebase_id",_0="origin",v0=60*1e3,y0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Uc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new xo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new _s("analytics","Analytics",w0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){if(!t.startsWith(Uc)){const e=vt.create("invalid-gtag-resource",{gtagURL:t});return dt.warn(e.message),""}return t}function Eg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function b0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function I0(t,e){const n=b0("firebase-js-sdk-policy",{createScriptURL:E0}),s=document.createElement("script"),i=`${Uc}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function C0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function T0(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Eg(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){dt.error(a)}t("config",i,r)}async function S0(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Eg(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){dt.error(r)}}function A0(t,e,n,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await S0(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await T0(t,e,n,s,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){dt.error(a)}}return i}function R0(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=A0(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function P0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Uc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=30,k0=1e3;class O0{constructor(e={},n=k0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bg=new O0;function D0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function x0(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:D0(s)},r=y0.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function M0(t,e=bg,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw vt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw vt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new U0;return setTimeout(async()=>{a.abort()},v0),Ig({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Ig(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=bg){var r;const{appId:o,measurementId:a}=t;try{await L0(s,e)}catch(l){if(a)return dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await x0(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!F0(c)){if(i.deleteThrottleMetadata(o),a)return dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Uu(n,i.intervalMillis,N0):Uu(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),dt.debug(`Calling attemptFetch again in ${u} millis`),Ig(t,d,s,i)}}function L0(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function F0(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class U0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $0(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(){if(tp())try{await np()}catch(t){return dt.warn(vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return dt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function V0(t,e,n,s,i,r,o){var a;const l=M0(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>dt.error(f)),e.push(l);const c=B0().then(f=>{if(f)return s.getId()}),[u,d]=await Promise.all([l,c]);P0(r)||I0(r,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[_0]="firebase",h.update=!0,d!=null&&(h[g0]=d),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.app=e}_delete(){return delete Ai[this.app.options.appId],Promise.resolve()}}let Ai={},Qd=[];const Jd={};let Pa="dataLayer",W0="gtag",Xd,Cg,Zd=!1;function j0(){const t=[];if(Zf()&&t.push("This is a browser extension environment."),My()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=vt.create("invalid-analytics-context",{errorInfo:e});dt.warn(n.message)}}function q0(t,e,n){j0();const s=t.options.appId;if(!s)throw vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(Ai[s]!=null)throw vt.create("already-exists",{id:s});if(!Zd){C0(Pa);const{wrappedGtag:r,gtagCore:o}=R0(Ai,Qd,Jd,Pa,W0);Cg=r,Xd=o,Zd=!0}return Ai[s]=V0(t,Qd,Jd,e,Xd,Pa,n),new H0(t)}function K0(t=jl()){t=Ge(t);const e=vs(t,_o);return e.isInitialized()?e.getImmediate():G0(t)}function G0(t,e={}){const n=vs(t,_o);if(n.isInitialized()){const i=n.getImmediate();if(Vi(e,n.getOptions()))return i;throw vt.create("already-initialized")}return n.initialize({options:e})}function z0(t,e,n,s){t=Ge(t),$0(Cg,Ai[t.app.options.appId],e,n,s).catch(i=>dt.error(i))}const eh="@firebase/analytics",th="0.10.8";function Y0(){zt(new xt(_o,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return q0(s,i,n)},"PUBLIC")),zt(new xt("analytics-internal",t,"PRIVATE")),Tt(eh,th),Tt(eh,th,"esm2017");function t(e){try{const n=e.getProvider(_o).getImmediate();return{logEvent:(s,i,r)=>z0(n,s,i,r)}}catch(n){throw vt.create("interop-component-reg-failed",{reason:n})}}}Y0();const nh={apiKey:"AIzaSyCvmM4YI4sr9mv_-UTSFWuabaw_8D1BBKM",authDomain:"alfaree-615b6.firebaseapp.com",databaseURL:"https://alfaree-615b6-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"alfaree-615b6",storageBucket:"alfaree-615b6.firebasestorage.app",messagingSenderId:"935148742009",appId:"1:935148742009:web:79b7b2f675b07b2ef2fba8",measurementId:"G-0TJ606H9YS"};let Sr,Ri,ns,Q0;try{Sr=ap(nh),Ri=fI(Sr),ns=RS(Sr),nh.measurementId&&(Q0=K0(Sr)),console.log("Firebase initialized successfully")}catch(t){throw console.error("Error initializing Firebase:",t),t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function Tg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function J0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Tg(t.default)}const ye=Object.assign;function Na(t,e){const n={};for(const s in e){const i=e[s];n[s]=Lt(i)?i.map(t):t(i)}return n}const Pi=()=>{},Lt=Array.isArray,Sg=/#/g,X0=/&/g,Z0=/\//g,eA=/=/g,tA=/\?/g,Ag=/\+/g,nA=/%5B/g,sA=/%5D/g,Rg=/%5E/g,iA=/%60/g,Pg=/%7B/g,rA=/%7C/g,Ng=/%7D/g,oA=/%20/g;function $c(t){return encodeURI(""+t).replace(rA,"|").replace(nA,"[").replace(sA,"]")}function aA(t){return $c(t).replace(Pg,"{").replace(Ng,"}").replace(Rg,"^")}function _l(t){return $c(t).replace(Ag,"%2B").replace(oA,"+").replace(Sg,"%23").replace(X0,"%26").replace(iA,"`").replace(Pg,"{").replace(Ng,"}").replace(Rg,"^")}function lA(t){return _l(t).replace(eA,"%3D")}function cA(t){return $c(t).replace(Sg,"%23").replace(tA,"%3F")}function uA(t){return t==null?"":cA(t).replace(Z0,"%2F")}function er(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const dA=/\/$/,hA=t=>t.replace(dA,"");function ka(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=gA(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:er(o)}}function fA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pA(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ks(e.matched[s],n.matched[i])&&kg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function kg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mA(t[n],e[n]))return!1;return!0}function mA(t,e){return Lt(t)?ih(t,e):Lt(e)?ih(e,t):t===e}function ih(t,e){return Lt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function gA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var tr;(function(t){t.pop="pop",t.push="push"})(tr||(tr={}));var Ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ni||(Ni={}));function _A(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hA(t)}const vA=/^[^#]+#/;function yA(t,e){return t.replace(vA,"#")+e}function wA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Xo=()=>({left:window.scrollX,top:window.scrollY});function EA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=wA(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rh(t,e){return(history.state?history.state.position-e:-1)+t}const vl=new Map;function bA(t,e){vl.set(t,e)}function IA(t){const e=vl.get(t);return vl.delete(t),e}let CA=()=>location.protocol+"//"+location.host;function Og(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),sh(l,"")}return sh(n,t)+s+i}function TA(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const f=Og(t,location),g=n.value,y=e.value;let R=0;if(h){if(n.value=f,e.value=h,o&&o===g){o=null;return}R=y?h.position-y.position:0}else s(f);i.forEach(E=>{E(n.value,g,{delta:R,type:tr.pop,direction:R?R>0?Ni.forward:Ni.back:Ni.unknown})})};function l(){o=n.value}function c(h){i.push(h);const f=()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){const{history:h}=window;h.state&&h.replaceState(ye({},h.state,{scroll:Xo()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function oh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Xo():null}}function SA(t){const{history:e,location:n}=window,s={value:Og(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:CA()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](h)}}function o(l,c){const u=ye({},e.state,oh(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ye({},i.value,e.state,{forward:l,scroll:Xo()});r(u.current,u,!0);const d=ye({},oh(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function AA(t){t=_A(t);const e=SA(t),n=TA(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ye({location:"",base:t,go:s,createHref:yA.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function RA(t){return typeof t=="string"||t&&typeof t=="object"}function Dg(t){return typeof t=="string"||typeof t=="symbol"}const xg=Symbol("");var ah;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ah||(ah={}));function Gs(t,e){return ye(new Error,{type:t,[xg]:!0},e)}function Zt(t,e){return t instanceof Error&&xg in t&&(e==null||!!(t.type&e))}const lh="[^/]+?",PA={sensitive:!1,strict:!1,start:!0,end:!0},NA=/[.+*?^${}()[\]/\\]/g;function kA(t,e){const n=ye({},PA,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let f=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(NA,"\\$&"),f+=40;else if(h.type===1){const{value:g,repeatable:y,optional:R,regexp:E}=h;r.push({name:g,repeatable:y,optional:R});const v=E||lh;if(v!==lh){f+=10;try{new RegExp(`(${v})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+b.message)}}let P=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(P=R&&c.length<2?`(?:/${P})`:"/"+P),R&&(P+="?"),i+=P,f+=20,R&&(f+=-8),y&&(f+=-20),v===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",g=r[h-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:R}=f,E=g in c?c[g]:"";if(Lt(E)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=Lt(E)?E.join("/"):E;if(!v)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function OA(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Mg(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=OA(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(ch(s))return 1;if(ch(i))return-1}return i.length-s.length}function ch(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DA={type:0,value:""},xA=/[a-zA-Z0-9_]/;function MA(t){if(!t)return[[]];if(t==="/")return[[DA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:xA.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function LA(t,e,n){const s=kA(MA(t.path),n),i=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function FA(t,e){const n=[],s=new Map;e=fh({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,h,f){const g=!f,y=dh(d);y.aliasOf=f&&f.record;const R=fh(e,d),E=[y];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of b)E.push(dh(ye({},y,{components:f?f.record.components:y.components,path:L,aliasOf:f?f.record:y})))}let v,P;for(const b of E){const{path:L}=b;if(h&&L[0]!=="/"){const ne=h.record.path,se=ne[ne.length-1]==="/"?"":"/";b.path=h.record.path+(L&&se+L)}if(v=LA(b,h,R),f?f.alias.push(v):(P=P||v,P!==v&&P.alias.push(v),g&&d.name&&!hh(v)&&o(d.name)),Lg(v)&&l(v),y.children){const ne=y.children;for(let se=0;se<ne.length;se++)r(ne[se],v,f&&f.children[se])}f=f||v}return P?()=>{o(P)}:Pi}function o(d){if(Dg(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=BA(d,n);n.splice(h,0,d),d.record.name&&!hh(d)&&s.set(d.record.name,d)}function c(d,h){let f,g={},y,R;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw Gs(1,{location:d});R=f.record.name,g=ye(uh(h.params,f.keys.filter(P=>!P.optional).concat(f.parent?f.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),d.params&&uh(d.params,f.keys.map(P=>P.name))),y=f.stringify(g)}else if(d.path!=null)y=d.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),R=f.record.name);else{if(f=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw Gs(1,{location:d,currentLocation:h});R=f.record.name,g=ye({},h.params,d.params),y=f.stringify(g)}const E=[];let v=f;for(;v;)E.unshift(v.record),v=v.parent;return{name:R,path:y,params:g,matched:E,meta:$A(E)}}t.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function uh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function dh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:UA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function UA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function hh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $A(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function fh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function BA(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Mg(t,e[r])<0?s=r:n=r+1}const i=VA(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function VA(t){let e=t;for(;e=e.parent;)if(Lg(e)&&Mg(t,e)===0)return e}function Lg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function HA(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Ag," "),o=r.indexOf("="),a=er(o<0?r:r.slice(0,o)),l=o<0?null:er(r.slice(o+1));if(a in e){let c=e[a];Lt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ph(t){let e="";for(let n in t){const s=t[n];if(n=lA(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(s)?s.map(r=>r&&_l(r)):[s&&_l(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function WA(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Lt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const jA=Symbol(""),mh=Symbol(""),Zo=Symbol(""),Bc=Symbol(""),yl=Symbol("");function ui(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Gs(4,{from:n,to:e})):h instanceof Error?l(h):RA(h)?l(Gs(2,{from:e,to:h})):(o&&s.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function Oa(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Tg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Rn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=J0(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Rn(f,n,s,o,a,i)()}))}}return r}function gh(t){const e=Ct(Zo),n=Ct(Bc),s=de(()=>{const l=Me(t.to);return e.resolve(l)}),i=de(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ks.bind(null,u));if(h>-1)return h;const f=_h(l[c-2]);return c>1&&_h(u)===f&&d[d.length-1].path!==f?d.findIndex(Ks.bind(null,l[c-2])):h}),r=de(()=>i.value>-1&&YA(n.params,s.value.params)),o=de(()=>i.value>-1&&i.value===n.matched.length-1&&kg(n.params,s.value.params));function a(l={}){if(zA(l)){const c=e[Me(t.replace)?"replace":"push"](Me(t.to)).catch(Pi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:de(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function qA(t){return t.length===1?t[0]:t}const KA=Rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gh,setup(t,{slots:e}){const n=ir(gh(t)),{options:s}=Ct(Zo),i=de(()=>({[vh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[vh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&qA(e.default(n));return t.custom?r:Ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),GA=KA;function zA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YA(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Lt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function _h(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vh=(t,e,n)=>t??e??n,QA=Rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ct(yl),i=de(()=>t.route||s.value),r=Ct(mh,0),o=de(()=>{let c=Me(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=de(()=>i.value.matched[o.value]);Rr(mh,de(()=>o.value+1)),Rr(jA,a),Rr(yl,i);const l=Ae();return Je(()=>[l.value,a.value,t.name],([c,u,d],[h,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ks(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return yh(n.default,{Component:h,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,R=Ul(h,ye({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return yh(n.default,{Component:R,route:c})||R}}});function yh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const JA=QA;function XA(t){const e=FA(t.routes,t),n=t.parseQuery||HA,s=t.stringifyQuery||ph,i=t.history,r=ui(),o=ui(),a=ui(),l=v_(bn);let c=bn;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,w=>""+w),d=Na.bind(null,uA),h=Na.bind(null,er);function f(w,W){let B,q;return Dg(w)?(B=e.getRecordMatcher(w),q=W):q=w,e.addRoute(q,B)}function g(w){const W=e.getRecordMatcher(w);W&&e.removeRoute(W)}function y(){return e.getRoutes().map(w=>w.record)}function R(w){return!!e.getRecordMatcher(w)}function E(w,W){if(W=ye({},W||l.value),typeof w=="string"){const _=ka(n,w,W.path),I=e.resolve({path:_.path},W),S=i.createHref(_.fullPath);return ye(_,I,{params:h(I.params),hash:er(_.hash),redirectedFrom:void 0,href:S})}let B;if(w.path!=null)B=ye({},w,{path:ka(n,w.path,W.path).path});else{const _=ye({},w.params);for(const I in _)_[I]==null&&delete _[I];B=ye({},w,{params:d(_)}),W.params=d(W.params)}const q=e.resolve(B,W),Te=w.hash||"";q.params=u(h(q.params));const p=fA(s,ye({},w,{hash:aA(Te),path:q.path})),m=i.createHref(p);return ye({fullPath:p,hash:Te,query:s===ph?WA(w.query):w.query||{}},q,{redirectedFrom:void 0,href:m})}function v(w){return typeof w=="string"?ka(n,w,l.value.path):ye({},w)}function P(w,W){if(c!==w)return Gs(8,{from:W,to:w})}function b(w){return se(w)}function L(w){return b(ye(v(w),{replace:!0}))}function ne(w){const W=w.matched[w.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let q=typeof B=="function"?B(w):B;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=v(q):{path:q},q.params={}),ye({query:w.query,hash:w.hash,params:q.path!=null?{}:w.params},q)}}function se(w,W){const B=c=E(w),q=l.value,Te=w.state,p=w.force,m=w.replace===!0,_=ne(B);if(_)return se(ye(v(_),{state:typeof _=="object"?ye({},Te,_.state):Te,force:p,replace:m}),W||B);const I=B;I.redirectedFrom=W;let S;return!p&&pA(s,q,B)&&(S=Gs(16,{to:I,from:q}),ue(q,q,!0,!1)),(S?Promise.resolve(S):J(I,q)).catch(C=>Zt(C)?Zt(C,2)?C:pe(C):j(C,I,q)).then(C=>{if(C){if(Zt(C,2))return se(ye({replace:m},v(C.to),{state:typeof C.to=="object"?ye({},Te,C.to.state):Te,force:p}),W||I)}else C=H(I,q,!0,m,Te);return ce(I,q,C),C})}function Z(w,W){const B=P(w,W);return B?Promise.reject(B):Promise.resolve()}function U(w){const W=Ce.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(w):w()}function J(w,W){let B;const[q,Te,p]=ZA(w,W);B=Oa(q.reverse(),"beforeRouteLeave",w,W);for(const _ of q)_.leaveGuards.forEach(I=>{B.push(Rn(I,w,W))});const m=Z.bind(null,w,W);return B.push(m),ve(B).then(()=>{B=[];for(const _ of r.list())B.push(Rn(_,w,W));return B.push(m),ve(B)}).then(()=>{B=Oa(Te,"beforeRouteUpdate",w,W);for(const _ of Te)_.updateGuards.forEach(I=>{B.push(Rn(I,w,W))});return B.push(m),ve(B)}).then(()=>{B=[];for(const _ of p)if(_.beforeEnter)if(Lt(_.beforeEnter))for(const I of _.beforeEnter)B.push(Rn(I,w,W));else B.push(Rn(_.beforeEnter,w,W));return B.push(m),ve(B)}).then(()=>(w.matched.forEach(_=>_.enterCallbacks={}),B=Oa(p,"beforeRouteEnter",w,W,U),B.push(m),ve(B))).then(()=>{B=[];for(const _ of o.list())B.push(Rn(_,w,W));return B.push(m),ve(B)}).catch(_=>Zt(_,8)?_:Promise.reject(_))}function ce(w,W,B){a.list().forEach(q=>U(()=>q(w,W,B)))}function H(w,W,B,q,Te){const p=P(w,W);if(p)return p;const m=W===bn,_=As?history.state:{};B&&(q||m?i.replace(w.fullPath,ye({scroll:m&&_&&_.scroll},Te)):i.push(w.fullPath,Te)),l.value=w,ue(w,W,B,m),pe()}let le;function A(){le||(le=i.listen((w,W,B)=>{if(!Ze.listening)return;const q=E(w),Te=ne(q);if(Te){se(ye(Te,{replace:!0,force:!0}),q).catch(Pi);return}c=q;const p=l.value;As&&bA(rh(p.fullPath,B.delta),Xo()),J(q,p).catch(m=>Zt(m,12)?m:Zt(m,2)?(se(ye(v(m.to),{force:!0}),q).then(_=>{Zt(_,20)&&!B.delta&&B.type===tr.pop&&i.go(-1,!1)}).catch(Pi),Promise.reject()):(B.delta&&i.go(-B.delta,!1),j(m,q,p))).then(m=>{m=m||H(q,p,!1),m&&(B.delta&&!Zt(m,8)?i.go(-B.delta,!1):B.type===tr.pop&&Zt(m,20)&&i.go(-1,!1)),ce(q,p,m)}).catch(Pi)}))}let x=ui(),O=ui(),D;function j(w,W,B){pe(w);const q=O.list();return q.length?q.forEach(Te=>Te(w,W,B)):console.error(w),Promise.reject(w)}function oe(){return D&&l.value!==bn?Promise.resolve():new Promise((w,W)=>{x.add([w,W])})}function pe(w){return D||(D=!w,A(),x.list().forEach(([W,B])=>w?B(w):W()),x.reset()),w}function ue(w,W,B,q){const{scrollBehavior:Te}=t;if(!As||!Te)return Promise.resolve();const p=!B&&IA(rh(w.fullPath,0))||(q||!B)&&history.state&&history.state.scroll||null;return Co().then(()=>Te(w,W,p)).then(m=>m&&EA(m)).catch(m=>j(m,w,W))}const he=w=>i.go(w);let z;const Ce=new Set,Ze={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:R,getRoutes:y,resolve:E,options:t,push:b,replace:L,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:oe,install(w){const W=this;w.component("RouterLink",GA),w.component("RouterView",JA),w.config.globalProperties.$router=W,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Me(l)}),As&&!z&&l.value===bn&&(z=!0,b(i.location).catch(Te=>{}));const B={};for(const Te in bn)Object.defineProperty(B,Te,{get:()=>l.value[Te],enumerable:!0});w.provide(Zo,W),w.provide(Bc,zh(B)),w.provide(yl,l);const q=w.unmount;Ce.add(w),w.unmount=function(){Ce.delete(w),Ce.size<1&&(c=bn,le&&le(),le=null,l.value=bn,z=!1,D=!1),q()}}};function ve(w){return w.reduce((W,B)=>W.then(()=>U(B)),Promise.resolve())}return Ze}function ZA(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ks(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ks(c,l))||i.push(l))}return[n,s,i]}function ea(){return Ct(Zo)}function eR(t){return Ct(Bc)}function tR(t){switch(t){case"auth/user-not-found":case"auth/wrong-password":return"البريد الإلكتروني أو كلمة المرور غير صحيحة.";case"auth/invalid-email":return"البريد الإلكتروني غير صالح.";default:return"حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى."}}const vr=$l("auth",()=>{const t=Ae(null),e=Ae(!1),n=Ae(null),s=ea(),i=de(()=>!!t.value),r=de(()=>{var d;return(d=t.value)==null?void 0:d.uid}),o=async(d,h)=>{e.value=!0,n.value=null;try{const f=await ZE(Ri,d,h);t.value=f.user,s.push("/")}catch(f){n.value=tR(f.code),t.value=null}finally{e.value=!1}},a=async()=>{e.value=!0;try{await nb(Ri),t.value=null,s.push("/login")}catch{n.value="حدث خطأ أثناء تسجيل الخروج."}finally{e.value=!1}},l=Dp(Ri,d=>{t.value=d,!e.value&&!d&&s.currentRoute.value.name!=="Login"&&s.push("/login").catch(h=>{h.name!=="NavigationDuplicated"&&console.error(h)})});return Ao(()=>{l()}),{user:t,loading:e,error:n,isAuthenticated:i,userId:r,login:o,logout:a,setUser:d=>{t.value=d},clearError:()=>{n.value=null}}}),nR=$l("ui",()=>{const t=Ae("ar"),e=de(()=>t.value==="ar"?"rtl":"ltr");function n(s){t.value=s,document.documentElement&&(document.documentElement.lang=s,document.documentElement.dir=e.value)}return document.documentElement&&(document.documentElement.lang="ar",document.documentElement.dir="rtl"),{language:t,direction:e,setLanguage:n}}),sR={class:"app-header",dir:"rtl"},iR={class:"header-content"},rR={class:"user-info"},oR={key:0},aR=Rt({__name:"AppHeader",props:{userEmail:{}},emits:["logout"],setup(t){return(e,n)=>(ge(),De("header",sR,[T("div",iR,[n[1]||(n[1]=T("div",{class:"logo-title"},[T("h1",null,"نظام إدارة الأضاحي")],-1)),n[2]||(n[2]=T("nav",{class:"main-nav"},null,-1)),T("div",rR,[e.userEmail?(ge(),De("span",oR,Be(e.userEmail),1)):Et("",!0),T("button",{onClick:n[0]||(n[0]=s=>e.$emit("logout")),class:"btn btn-logout"},"تسجيل الخروج")])])]))}}),yn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},lR=yn(aR,[["__scopeId","data-v-cd82d03d"]]),cR={key:0,class:"loading-spinner-overlay"},uR=Rt({__name:"LoadingSpinner",props:{loading:{type:Boolean,default:!1}},setup(t){return(e,n)=>t.loading?(ge(),De("div",cR,n[0]||(n[0]=[T("div",{class:"loading-spinner"},null,-1)]))):Et("",!0)}}),Vc=yn(uR,[["__scopeId","data-v-809e06c2"]]),dR=["dir"],hR={class:"main-container"},fR={key:1,class:"loading-full-page"},pR=Rt({__name:"App",setup(t){const e=vr(),n=nR(),s=de(()=>n.direction);return(i,r)=>{var a;const o=pf("router-view");return ge(),De("div",{id:"vue-app-root",dir:s.value},[Me(e).isAuthenticated?(ge(),De(mt,{key:0},[xe(lR,{userEmail:((a=Me(e).user)==null?void 0:a.email)||"",onLogout:Me(e).logout},null,8,["userEmail","onLogout"]),T("main",hR,[xe(o,null,{default:is(({Component:l})=>[xe(ja,{name:"fade",mode:"out-in"},{default:is(()=>[(ge(),cs(Xc(l)))]),_:2},1024)]),_:1})])],64)):Me(e).loading&&!Me(e).user?(ge(),De("div",fR,[xe(Vc),r[0]||(r[0]=T("p",null,"جاري التحميل...",-1))])):(ge(),cs(o,{key:2},{default:is(({Component:l})=>[xe(ja,{name:"fade",mode:"out-in"},{default:is(()=>[(ge(),cs(Xc(l)))]),_:2},1024)]),_:1}))],8,dR)}}}),mR="modulepreload",gR=function(t){return"/adahy-vue/"+t},wh={},In=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(n.map(c=>{if(c=gR(c),c in wh)return;wh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":mR,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function _R(t,e){const n=Ae(null),s=Ae(!1),i=Ae(null),r=vr();let o=null;const a=g=>{if(!r.userId)return console.warn("useFirebaseDB: User not authenticated."),null;let y=`users/${r.userId}/${t}`;return g&&(y+=`/${g}`),y},l=(g,y=!1)=>{const R=a(g);if(!R)return;const E=Ts(ns,R);s.value=!0,i.value=null,o=wS(E,v=>{if(v.exists()){const P=v.val();let b;y?b=P:b=Object.keys(P).map(L=>({id:L,...P[L]})),n.value=b}else n.value=y?null:[];s.value=!1},v=>{console.error(`useFirebaseDB Error (${R}):`,v),i.value=v,s.value=!1})},c=async(g,y=!1)=>{const R=a(g);if(!R)return null;s.value=!0,i.value=null;try{const E=await vS(Ts(ns,R));if(E.exists()){const v=E.val();let P;return y?P=e!=null&&e.transform?e.transform(v):v:P=Object.keys(v).map(b=>({id:b,...e!=null&&e.transform?e.transform(v[b]):v[b]})),n.value=P,P}else return n.value=y?null:[],n.value}catch(E){return i.value=E,null}finally{s.value=!1}},u=async(g,y)=>{const R=a(y);if(!R)throw new Error("User not authenticated or path error.");const E=Ts(ns,R),v=mS(E);return await pl(v,{...g,createdAt:Date.now()}),v.key},d=async(g,y,R)=>{const E=a(R?`${R}/${g}`:g);if(!E)throw new Error("User not authenticated or path error.");await _S(Ts(ns,E),{...y,updatedAt:Date.now()})},h=async(g,y,R)=>{const E=a(R?`${R}/${g}`:g);if(!E)throw new Error("User not authenticated or path error.");await pl(Ts(ns,E),y)},f=async(g,y)=>{const R=a(y?`${y}/${g}`:g);if(!R)throw new Error("User not authenticated or path error.");await gS(Ts(ns,R))};return Ao(()=>{o&&o()}),{data:n,loading:s,error:i,subscribe:l,fetchData:c,addData:u,updateData:d,setData:h,removeData:f}}function wt(t,e){const n=e||0,s=n>0,i=Math.min(n,t),r=Math.max(0,t-i);return{totalAmountBeforeDiscount:t,finalTotalAmount:r,discount:n,effectiveDiscount:i,hasDiscount:s}}function en(t,e,n){const{finalTotalAmount:s}=wt(t,n);return s-e}function vR(t,e){return e<=0||t<=0?0:Math.round(t/e*100)}function QP(t){return!!(t&&t>0)}function yR(t,e){return Math.max(0,t-e)}const Hc=$l("customers",()=>{const t=Ae([]),e=Ae(!1),n=Ae(null),s=Ae(0),i=vr(),{data:r,loading:o,error:a,subscribe:l,addData:c,updateData:u,removeData:d}=_R("customers");Je(r,A=>{t.value=A?Array.isArray(A)?A:[A]:[]},{deep:!0,immediate:!0}),Je(o,A=>{e.value=A},{immediate:!0}),Je(a,A=>{n.value=A?A.message:null},{immediate:!0});const h=A=>A.reduce((x,O)=>O.currency==="NIS"?x+(O.amount||0):x+(O.nisEquivalent||0),0),f=A=>A.reduce((x,O)=>x+(O.totalTransactionNIS||0),0);Je(()=>i.userId,A=>{A?l():(t.value=[],n.value=null)},{immediate:!0});const g=async A=>{if(!i.userId)throw n.value="User not authenticated. Cannot add customer.",new Error("User not authenticated");try{let x=0;const O=A.animals.map(z=>{const Ce=(z.weight||0)*(z.pricePerUnit||0);return x+=Ce,{type:z.type,number:z.number||`${Date.now()}`,count:z.count,weight:z.weight,pricePerUnit:z.pricePerUnit,id:z.id||crypto.randomUUID(),total:Ce,compositeKey:`${z.type}_${z.number||Date.now()}`,status:z.status||"حي",createdAt:Date.now()}}),D=(A.payments||[]).map(z=>{const Ce=z.parts.map(ve=>({...ve,id:ve.id||crypto.randomUUID()})),Ze=h(Ce);return{...z,id:z.id||crypto.randomUUID(),parts:Ce,totalTransactionNIS:Ze,paymentDate:z.paymentDate||Date.now()}}),j=f(D),oe=wt(x,A.discount),pe=en(x,j,A.discount),ue={...A,animals:O,payments:D,totalAmount:x,totalAmountBeforeDiscount:oe.totalAmountBeforeDiscount,finalTotalAmount:oe.finalTotalAmount,totalPaidNIS:j,balance:pe,createdAt:Date.now(),updatedAt:Date.now()};return await c(ue)}catch(x){throw x}},y=async A=>{if(!i.userId)throw n.value="User not authenticated. Cannot update customer.",new Error("User not authenticated");try{const x=t.value.find(Ze=>Ze.id===A.id);if(!x)throw new Error("Customer not found for update.");let O=x.animals,D=x.totalAmount;if(A.animals&&Array.isArray(A.animals)){let Ze=0;O=A.animals.map(ve=>{const w=(ve.weight||0)*(ve.pricePerUnit||0);return Ze+=w,{id:ve.id||crypto.randomUUID(),type:ve.type,number:ve.number||`${Date.now()}`,count:ve.count,weight:ve.weight,pricePerUnit:ve.pricePerUnit,status:ve.status||"حي",total:w,compositeKey:`${ve.type}_${ve.number||Date.now()}`,createdAt:Date.now()}}),D=Ze}let j=x.payments||[];A.payments&&Array.isArray(A.payments)&&(j=A.payments.map(Ze=>{const ve=Ze.parts.map(W=>({...W,id:W.id||crypto.randomUUID()})),w=h(ve);return{...Ze,id:Ze.id||crypto.randomUUID(),parts:ve,totalTransactionNIS:w,paymentDate:Ze.paymentDate||Date.now()}}));const oe=f(j),pe=A.totalAmount!==void 0?A.totalAmount:D,ue=A.discount!==void 0?A.discount:x.discount,he=wt(pe,ue),z=en(pe,oe,ue),Ce={...A};delete Ce.id,A.animals&&Array.isArray(A.animals)&&(Ce.animals=O),A.payments&&Array.isArray(A.payments)&&(Ce.payments=j),Ce.totalAmount=pe,Ce.totalAmountBeforeDiscount=he.totalAmountBeforeDiscount,Ce.finalTotalAmount=he.finalTotalAmount,Ce.totalPaidNIS=oe,Ce.balance=z,Ce.updatedAt=Date.now(),await u(A.id,Ce)}catch(x){throw x}},R=async A=>{if(!i.userId)throw n.value="User not authenticated. Cannot delete customer.",new Error("User not authenticated");try{await d(A)}catch(x){throw x}},E=A=>{n.value=A},v=()=>{E(null)},P=de(()=>A=>t.value.find(x=>x.id===A)||null),b=async()=>{if(!i.userId){E("User not authenticated. Cannot fetch customers.");return}try{l(),s.value=Date.now()}catch(A){E(`Failed to fetch customers: ${A.message}`)}},L=async(A,x)=>{if(!i.userId)throw n.value="User not authenticated. Cannot add animal to customer.",new Error("User not authenticated");try{const O=t.value.find(ue=>ue.id===A);if(!O)throw new Error("Customer not found");const D=[...O.animals,x],j=D.reduce((ue,he)=>ue+he.total,0),oe=wt(j,O.discount),pe=en(j,O.totalPaidNIS,O.discount);await u(A,{animals:D,totalAmount:j,totalAmountBeforeDiscount:oe.totalAmountBeforeDiscount,finalTotalAmount:oe.finalTotalAmount,balance:pe,updatedAt:Date.now()})}catch(O){throw O}},ne=async(A,x,O)=>{if(!i.userId)throw n.value="User not authenticated. Cannot update animal.",new Error("User not authenticated");try{const D=t.value.find(z=>z.id===A);if(!D)throw new Error("Customer not found");const j=D.animals.map(z=>z.id===x?{...z,...O}:z),oe=j.findIndex(z=>z.id===x);if(oe!==-1&&(O.weight!==void 0||O.pricePerUnit!==void 0)){const z=j[oe];z.total=z.weight*z.pricePerUnit}const pe=j.reduce((z,Ce)=>z+Ce.total,0),ue=wt(pe,D.discount),he=en(pe,D.totalPaidNIS,D.discount);await u(A,{animals:j,totalAmount:pe,totalAmountBeforeDiscount:ue.totalAmountBeforeDiscount,finalTotalAmount:ue.finalTotalAmount,balance:he,updatedAt:Date.now()})}catch(D){throw D}},se=async(A,x)=>{if(!i.userId)throw n.value="User not authenticated. Cannot remove animal.",new Error("User not authenticated");try{const O=t.value.find(ue=>ue.id===A);if(!O)throw new Error("Customer not found");const D=O.animals.filter(ue=>ue.id!==x),j=D.reduce((ue,he)=>ue+he.total,0),oe=wt(j,O.discount),pe=en(j,O.totalPaidNIS,O.discount);await u(A,{animals:D,totalAmount:j,totalAmountBeforeDiscount:oe.totalAmountBeforeDiscount,finalTotalAmount:oe.finalTotalAmount,balance:pe,updatedAt:Date.now()})}catch(O){throw O}},Z=async(A,x,O)=>{if(!i.userId)throw n.value="User not authenticated. Cannot update animals.",new Error("User not authenticated");try{const D=t.value.find(he=>he.id===A);if(!D)throw new Error("Customer not found");const j=D.animals.map(he=>{if(x.includes(he.id)){const z={...he,...O};return(O.weight!==void 0||O.pricePerUnit!==void 0)&&(z.total=z.weight*z.pricePerUnit),z}return he}),oe=j.reduce((he,z)=>he+z.total,0),pe=wt(oe,D.discount),ue=en(oe,D.totalPaidNIS,D.discount);await u(A,{animals:j,totalAmount:oe,totalAmountBeforeDiscount:pe.totalAmountBeforeDiscount,finalTotalAmount:pe.finalTotalAmount,balance:ue,updatedAt:Date.now()})}catch(D){throw D}},U=async A=>{if(!i.userId)throw n.value="User not authenticated. Cannot update animal details.",new Error("User not authenticated");try{const x=t.value.find(z=>z.id===A.customerId);if(!x)throw new Error("Customer not found");const O=x.animals.findIndex(z=>z.id===A.animalId);if(O===-1)throw new Error("Animal not found");const D=x.animals[O];if(A.updates.status==="ملغي"&&D.status!=="حي")throw new Error('لا يمكن إلغاء الأضحية إلا إذا كانت حالتها "حي"');const j={...A.updates,notes:A.updates.notes||""},oe=[...x.animals];oe[O]=j;const pe=oe.reduce((z,Ce)=>z+Ce.total,0),ue=wt(pe,x.discount),he=en(pe,x.totalPaidNIS,x.discount);await u(A.customerId,{animals:oe,totalAmount:pe,totalAmountBeforeDiscount:ue.totalAmountBeforeDiscount,finalTotalAmount:ue.finalTotalAmount,balance:he,updatedAt:Date.now()})}catch(x){throw x}},J=de(()=>A=>{if(!A.trim())return t.value;const x=A.toLowerCase().trim();return t.value.filter(O=>O.name.toLowerCase().includes(x)||O.phone&&O.phone.includes(x))}),ce=async(A,x,O,D)=>{if(!i.userId)throw n.value="User not authenticated. Cannot apply discount.",new Error("User not authenticated");try{const j=t.value.find(ue=>ue.id===A);if(!j)throw new Error("Customer not found");if(x<0)throw new Error("Discount amount cannot be negative");if(x>j.totalAmount)throw new Error("Discount cannot exceed total amount");const oe=wt(j.totalAmount,x),pe=en(j.totalAmount,j.totalPaidNIS,x);await u(A,{discount:x,discountReason:O,discountAppliedBy:D,discountAppliedAt:Date.now(),totalAmountBeforeDiscount:oe.totalAmountBeforeDiscount,finalTotalAmount:oe.finalTotalAmount,balance:pe,updatedAt:Date.now()})}catch(j){throw j}},H=async(A,x,O)=>{if(!i.userId)throw n.value="User not authenticated. Cannot remove discount.",new Error("User not authenticated");try{const D=t.value.find(pe=>pe.id===A);if(!D)throw new Error("Customer not found");const j=wt(D.totalAmount,0),oe=en(D.totalAmount,D.totalPaidNIS,0);await u(A,{discount:0,discountReason:`إزالة الخصم: ${x}`,discountAppliedBy:O,discountAppliedAt:Date.now(),totalAmountBeforeDiscount:j.totalAmountBeforeDiscount,finalTotalAmount:j.finalTotalAmount,balance:oe,updatedAt:Date.now()})}catch(D){throw D}},le=de(()=>{const A=[];return t.value.forEach(x=>{var O;(O=x.animals)==null||O.forEach(D=>{A.push({...D,customerName:x.name,customerId:x.id})})}),A.sort((x,O)=>x.type!==O.type?x.type.localeCompare(O.type,"ar"):x.compositeKey.localeCompare(O.compositeKey,"ar"))});return{customers:de(()=>t.value),loading:de(()=>e.value),error:de(()=>n.value),lastFetchTimestamp:de(()=>s.value),allAnimals:le,addCustomer:g,updateCustomer:y,deleteCustomer:R,getCustomerById:P,setError:E,clearError:v,fetchCustomers:b,addAnimalToCustomer:L,updateCustomerAnimal:ne,removeAnimalFromCustomer:se,bulkUpdateCustomerAnimals:Z,updateAnimalDetails:U,searchCustomers:J,applyCustomerDiscount:ce,removeCustomerDiscount:H,fetchCustomerById:async A=>{if(!i.userId)return E("User not authenticated. Cannot fetch customer."),null;const x=t.value.find(O=>O.id===A);return x||(console.warn(`Customer with ID ${A} not found in local store. Ensure data is fetched.`),null)}}}),wR={class:"animal-form-fields",dir:"rtl"},ER={class:"form-row"},bR={class:"form-group"},IR=["for"],CR=["id"],TR={class:"form-group"},SR=["for"],AR=["id"],RR={class:"form-row"},PR={class:"form-group"},NR=["for"],kR=["id"],OR={class:"form-group"},DR=["for"],xR=["id"],MR={class:"form-row"},LR={class:"form-group"},FR=["for"],UR=["id","value"],$R={class:"form-group"},BR=["for"],VR=["id"],HR=Rt({__name:"AnimalForm",props:{modelValue:{type:Object,required:!0},animalIndex:{type:Number,required:!0}},emits:["update:modelValue","remove-animal"],setup(t,{emit:e}){const n=t,s=e,i=Ae({...n.modelValue});Je(()=>n.modelValue,o=>{i.value={...o},r()},{deep:!0}),Je(i,o=>{s("update:modelValue",o)},{deep:!0});const r=()=>{const o=i.value.weight||0,a=i.value.pricePerUnit||0;i.value.total=parseFloat((o*a).toFixed(2))};return or(()=>{r()}),Je(()=>[i.value.weight,i.value.pricePerUnit],()=>{r()}),(o,a)=>(ge(),De("div",wR,[T("h4",null,"أضحية "+Be(t.animalIndex+1),1),T("div",ER,[T("div",bR,[T("label",{for:`animalType-${t.animalIndex}`},"النوع",8,IR),gt(T("select",{id:`animalType-${t.animalIndex}`,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value.type=l),required:""},a[6]||(a[6]=[cu('<option value="" disabled data-v-2b198579>اختر النوع</option><option value="خروف" data-v-2b198579>خروف</option><option value="ماعز" data-v-2b198579>ماعز</option><option value="عجل" data-v-2b198579>عجل</option><option value="جمل" data-v-2b198579>جمل</option><option value="تيس" data-v-2b198579>تيس</option><option value="بقرة" data-v-2b198579>بقرة</option>',7)]),8,CR),[[ku,i.value.type]])]),T("div",TR,[T("label",{for:`animalNumber-${t.animalIndex}`},"رقم الأضحية/التعريف",8,SR),gt(T("input",{type:"text",id:`animalNumber-${t.animalIndex}`,"onUpdate:modelValue":a[1]||(a[1]=l=>i.value.number=l),placeholder:"مثال: A101 أو اسم مميز"},null,8,AR),[[Wt,i.value.number]])])]),T("div",RR,[T("div",PR,[T("label",{for:`animalWeight-${t.animalIndex}`},"الوزن (كجم)",8,NR),gt(T("input",{type:"number",step:"0.01",id:`animalWeight-${t.animalIndex}`,"onUpdate:modelValue":a[2]||(a[2]=l=>i.value.weight=l),onInput:r,placeholder:"0.00"},null,40,kR),[[Wt,i.value.weight,void 0,{number:!0}]])]),T("div",OR,[T("label",{for:`animalPrice-${t.animalIndex}`},"سعر الكيلو / السعر الإجمالي",8,DR),gt(T("input",{type:"number",step:"0.01",id:`animalPrice-${t.animalIndex}`,"onUpdate:modelValue":a[3]||(a[3]=l=>i.value.pricePerUnit=l),onInput:r,placeholder:"0.00"},null,40,xR),[[Wt,i.value.pricePerUnit,void 0,{number:!0}]])])]),T("div",MR,[T("div",LR,[T("label",{for:`animalTotal-${t.animalIndex}`},"المجموع",8,FR),T("input",{type:"number",id:`animalTotal-${t.animalIndex}`,value:i.value.total,readonly:""},null,8,UR)]),T("div",$R,[T("label",{for:`animalStatus-${t.animalIndex}`},"الحالة",8,BR),gt(T("select",{id:`animalStatus-${t.animalIndex}`,"onUpdate:modelValue":a[4]||(a[4]=l=>i.value.status=l)},a[7]||(a[7]=[cu('<option value="حي" data-v-2b198579>حي</option><option value="محجوز" data-v-2b198579>محجوز</option><option value="جاهز للذبح" data-v-2b198579>جاهز للذبح</option><option value="مذبوح" data-v-2b198579>مذبوح</option><option value="تم التسليم" data-v-2b198579>تم التسليم</option><option value="ملغي" data-v-2b198579>ملغي</option>',6)]),8,VR),[[ku,i.value.status]])])]),T("button",{type:"button",onClick:a[5]||(a[5]=l=>o.$emit("remove-animal")),class:"btn btn-danger btn-sm"},a[8]||(a[8]=[T("i",{class:"fas fa-trash-alt"},null,-1),us(" إزالة الأضحية ")]))]))}}),WR=yn(HR,[["__scopeId","data-v-2b198579"]]),jR={class:"discount-input"},qR={class:"discount-header"},KR={class:"discount-toggle"},GR={class:"toggle-label"},zR={key:0,class:"discount-form"},YR={class:"discount-amount-section"},QR=["max"],JR={key:0,class:"error-message"},XR={class:"discount-reason-section"},ZR={key:0,class:"error-message"},eP={class:"discount-calculation"},tP={class:"calculation-row"},nP={class:"calc-value"},sP={class:"calculation-row discount-row"},iP={class:"calc-value discount-amount"},rP={class:"calculation-row total-row"},oP={class:"calc-value final-total"},aP={key:0,class:"savings-info"},lP={class:"savings-text"},cP=Rt({__name:"DiscountInput",props:{modelValue:{default:null},totalAmount:{},disabled:{type:Boolean,default:!1},appliedBy:{default:"مستخدم النظام"}},emits:["update:modelValue","change"],setup(t,{emit:e}){const n=t,s=e,i=Ae(!1),r=Ae({amount:0,reason:"",appliedBy:n.appliedBy}),o=Ae(null),a=Ae(null),l=de(()=>n.totalAmount),c=de(()=>!i.value||r.value.amount<=0?wt(n.totalAmount,0):wt(n.totalAmount,r.value.amount)),u=de(()=>n.totalAmount),d=de(()=>c.value.effectiveDiscount),h=de(()=>c.value.finalTotalAmount),f=de(()=>yR(u.value,h.value)),g=de(()=>vR(d.value,u.value)),y=b=>`${b.toLocaleString()} ش.ج`,R=b=>b<0?"مبلغ الخصم لا يمكن أن يكون سالب":b>n.totalAmount?"مبلغ الخصم لا يمكن أن يكون أكبر من المجموع الإجمالي":null,E=()=>{i.value?v():(r.value={amount:0,reason:"",appliedBy:n.appliedBy},o.value=null,a.value=null,s("update:modelValue",null),s("change",null))},v=()=>{if(o.value=R(r.value.amount),!o.value&&i.value){const b={...r.value,appliedBy:n.appliedBy,appliedAt:Date.now()};s("update:modelValue",b),s("change",b)}},P=()=>{if(r.value.reason&&r.value.reason.length>200?a.value="سبب الخصم لا يمكن أن يكون أكثر من 200 حرف":a.value=null,!a.value&&i.value&&!o.value){const b={...r.value,appliedBy:n.appliedBy,appliedAt:Date.now()};s("update:modelValue",b),s("change",b)}};return Je(()=>n.modelValue,b=>{b?(i.value=!0,r.value={...b}):(i.value=!1,r.value={amount:0,reason:"",appliedBy:n.appliedBy})},{immediate:!0}),Je(()=>n.totalAmount,(b,L)=>{var ne;i.value&&b!==L&&(o.value=R(r.value.amount),r.value.amount>b&&b>=0&&(r.value.amount=b,r.value.amount!==(((ne=n.modelValue)==null?void 0:ne.amount)||0)&&v()))}),or(()=>{n.modelValue&&(i.value=!0,r.value={...n.modelValue})}),(b,L)=>(ge(),De("div",jR,[T("div",qR,[L[4]||(L[4]=T("h4",{class:"discount-title"},"خصم العميل",-1)),T("div",KR,[T("label",GR,[gt(T("input",{type:"checkbox","onUpdate:modelValue":L[0]||(L[0]=ne=>i.value=ne),onChange:E,class:"toggle-checkbox"},null,544),[[oy,i.value]]),L[3]||(L[3]=T("span",{class:"toggle-text"},"تفعيل الخصم",-1))])])]),xe(ja,{name:"discount-fade"},{default:is(()=>[i.value?(ge(),De("div",zR,[T("div",YR,[L[5]||(L[5]=T("label",{for:"discountAmount",class:"form-label"},"مبلغ الخصم (ش.ج)",-1)),gt(T("input",{id:"discountAmount",type:"number","onUpdate:modelValue":L[1]||(L[1]=ne=>r.value.amount=ne),onInput:v,max:l.value,min:"0",step:"0.01",class:ki(["form-input",{error:o.value}]),placeholder:"أدخل مبلغ الخصم"},null,42,QR),[[Wt,r.value.amount,void 0,{number:!0}]]),o.value?(ge(),De("div",JR,Be(o.value),1)):Et("",!0)]),T("div",XR,[L[6]||(L[6]=T("label",{for:"discountReason",class:"form-label"},"سبب الخصم",-1)),gt(T("input",{id:"discountReason",type:"text","onUpdate:modelValue":L[2]||(L[2]=ne=>r.value.reason=ne),onInput:P,class:ki(["form-input",{error:a.value}]),placeholder:"أدخل سبب الخصم (اختياري)",maxlength:"200"},null,34),[[Wt,r.value.reason]]),a.value?(ge(),De("div",ZR,Be(a.value),1)):Et("",!0)]),T("div",eP,[T("div",tP,[L[7]||(L[7]=T("span",{class:"calc-label"},"المجموع قبل الخصم:",-1)),T("span",nP,Be(y(u.value)),1)]),T("div",sP,[L[8]||(L[8]=T("span",{class:"calc-label"},"مبلغ الخصم:",-1)),T("span",iP,"- "+Be(y(d.value)),1)]),T("div",rP,[L[9]||(L[9]=T("span",{class:"calc-label"},"المجموع النهائي:",-1)),T("span",oP,Be(y(h.value)),1)]),f.value>0?(ge(),De("div",aP,[T("span",lP,"توفير: "+Be(y(f.value))+" ("+Be(g.value)+"%)",1)])):Et("",!0)])])):Et("",!0)]),_:1})]))}}),uP=yn(cP,[["__scopeId","data-v-22b7c5ae"]]),dP={key:0,class:"error-message",dir:"rtl"},hP=Rt({__name:"ErrorMessage",props:{message:{}},setup(t){return(e,n)=>e.message?(ge(),De("div",dP,Be(e.message),1)):Et("",!0)}}),Fg=yn(hP,[["__scopeId","data-v-461d17dd"]]),ze=[];for(let t=0;t<256;++t)ze.push((t+256).toString(16).slice(1));function fP(t,e=0){return(ze[t[e+0]]+ze[t[e+1]]+ze[t[e+2]]+ze[t[e+3]]+"-"+ze[t[e+4]]+ze[t[e+5]]+"-"+ze[t[e+6]]+ze[t[e+7]]+"-"+ze[t[e+8]]+ze[t[e+9]]+"-"+ze[t[e+10]]+ze[t[e+11]]+ze[t[e+12]]+ze[t[e+13]]+ze[t[e+14]]+ze[t[e+15]]).toLowerCase()}let Da;const pP=new Uint8Array(16);function mP(){if(!Da){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Da=crypto.getRandomValues.bind(crypto)}return Da(pP)}const gP=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Eh={randomUUID:gP};function bh(t,e,n){var i;if(Eh.randomUUID&&!t)return Eh.randomUUID();t=t||{};const s=t.random??((i=t.rng)==null?void 0:i.call(t))??mP();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,fP(s)}const _P={class:"customer-form-container card-style",dir:"rtl"},vP={class:"form-row"},yP={class:"form-group"},wP={class:"form-group"},EP={class:"form-group"},bP={class:"form-group"},IP={class:"form-actions"},CP=["disabled"],TP=Rt({__name:"CustomerForm",props:{customerToEdit:{type:Object,default:null}},emits:["customer-saved"],setup(t,{emit:e}){const n=t,s=e,i=Hc(),r=vr(),o=Ae(!1),a=de(()=>{var E,v;return((E=r.user)==null?void 0:E.displayName)||((v=r.user)==null?void 0:v.email)||"مستخدم النظام"}),l=()=>({id:bh(),type:"",number:"",count:1,weight:0,pricePerUnit:0,total:0,status:"حي",compositeKey:"",createdAt:Date.now()}),c=()=>({name:"",phone:"",address:"",notes:"",animals:[l()],discount:null}),u=Ae(c()),d=de(()=>u.value.animals.reduce((E,v)=>E+(v.weight||0)*(v.pricePerUnit||0),0)),h=()=>{u.value=c()};Je(()=>n.customerToEdit,E=>{E?(o.value=!0,u.value={name:E.name,phone:E.phone||"",address:E.address||"",notes:E.notes||"",animals:E.animals&&E.animals.length>0?E.animals.map(v=>({...v,id:v.id||bh()})):[l()],discount:E.discount&&E.discount>0?{amount:E.discount,reason:E.discountReason,appliedBy:E.discountAppliedBy,appliedAt:E.discountAppliedAt}:null}):(h(),o.value=!1)},{immediate:!0});const f=()=>{u.value.animals.push(l())},g=E=>{u.value.animals.length>1&&u.value.animals.splice(E,1)},y=async()=>{var P;if(!u.value.name.trim()){i.setError("اسم العميل مطلوب.");return}const E=u.value.animals.map(b=>({...b,total:parseFloat(((b.weight||0)*(b.pricePerUnit||0)).toFixed(2)),compositeKey:`${b.type}_${b.number}`,createdAt:b.createdAt||Date.now()})),v={...u.value,animals:E,payments:[],...u.value.discount?{discount:u.value.discount.amount,discountReason:u.value.discount.reason,discountAppliedBy:u.value.discount.appliedBy,discountAppliedAt:u.value.discount.appliedAt}:{}};try{o.value&&((P=n.customerToEdit)!=null&&P.id)?await i.updateCustomer({...v,id:n.customerToEdit.id}):await i.addCustomer(v),s("customer-saved")}catch(b){console.error("Failed to save customer:",b)}},R=()=>{s("customer-saved")};return(E,v)=>(ge(),De("div",_P,[T("h3",null,Be(o.value?"تعديل بيانات العميل":"إضافة عميل جديد"),1),T("form",{onSubmit:cy(y,["prevent"])},[xe(Vc,{loading:Me(i).loading},null,8,["loading"]),Me(i).error?(ge(),cs(Fg,{key:0,message:Me(i).error},null,8,["message"])):Et("",!0),T("fieldset",null,[v[9]||(v[9]=T("legend",null,"بيانات العميل",-1)),T("div",vP,[T("div",yP,[v[5]||(v[5]=T("label",{for:"customerName"},"اسم العميل *",-1)),gt(T("input",{type:"text",id:"customerName","onUpdate:modelValue":v[0]||(v[0]=P=>u.value.name=P),required:""},null,512),[[Wt,u.value.name]])]),T("div",wP,[v[6]||(v[6]=T("label",{for:"customerPhone"},"رقم الهاتف",-1)),gt(T("input",{type:"tel",id:"customerPhone","onUpdate:modelValue":v[1]||(v[1]=P=>u.value.phone=P)},null,512),[[Wt,u.value.phone]])])]),T("div",EP,[v[7]||(v[7]=T("label",{for:"customerAddress"},"العنوان (اختياري)",-1)),gt(T("input",{type:"text",id:"customerAddress","onUpdate:modelValue":v[2]||(v[2]=P=>u.value.address=P)},null,512),[[Wt,u.value.address]])]),T("div",bP,[v[8]||(v[8]=T("label",{for:"customerNotes"},"ملاحظات (اختياري)",-1)),gt(T("textarea",{id:"customerNotes","onUpdate:modelValue":v[3]||(v[3]=P=>u.value.notes=P),rows:"3"},null,512),[[Wt,u.value.notes]])])]),T("fieldset",null,[v[11]||(v[11]=T("legend",null,"الأضاحي",-1)),(ge(!0),De(mt,null,_f(u.value.animals,(P,b)=>(ge(),De("div",{key:P.id||b,class:"animal-entry"},[xe(WR,{modelValue:u.value.animals[b],"onUpdate:modelValue":L=>u.value.animals[b]=L,"animal-index":b,onRemoveAnimal:L=>g(b)},null,8,["modelValue","onUpdate:modelValue","animal-index","onRemoveAnimal"])]))),128)),T("button",{type:"button",onClick:f,class:"btn btn-secondary btn-add-animal"},v[10]||(v[10]=[T("i",{class:"fas fa-plus"},null,-1),us(" إضافة أضحية ")]))]),T("fieldset",null,[v[12]||(v[12]=T("legend",null,"خصم العميل",-1)),xe(uP,{modelValue:u.value.discount,"onUpdate:modelValue":v[4]||(v[4]=P=>u.value.discount=P),"total-amount":d.value,"applied-by":a.value||"مستخدم النظام"},null,8,["modelValue","total-amount","applied-by"])]),T("div",IP,[T("button",{type:"submit",class:"btn btn-primary",disabled:Me(i).loading},Be(o.value?"تحديث البيانات":"حفظ العميل"),9,CP),o.value?(ge(),De("button",{key:0,type:"button",onClick:R,class:"btn btn-outline"}," إلغاء التعديل ")):Et("",!0)])],32)]))}}),SP=yn(TP,[["__scopeId","data-v-5a67cbe3"]]),AP={class:"add-customer-page",dir:"rtl"},RP=Rt({__name:"AddCustomerPage",setup(t){const e=eR(),n=ea(),s=Hc(),i=Ae(0),r=Ae(null),o=Ae(null),a=de(()=>!!o.value),l=de(()=>a.value?"Edit Customer":"Add New Customer");Je(()=>e.params.id,async u=>{const d=u;if(d){if(d!==o.value){o.value=d;const h=await s.fetchCustomerById(d);h?(r.value=h,window.scrollTo({top:0,behavior:"smooth"})):(console.error(`Customer with ID ${d} not found or failed to fetch.`),r.value=null)}}else o.value=null,r.value=null,i.value++},{immediate:!0});const c=()=>{i.value++,n.push({name:"CustomerList"})};return(u,d)=>(ge(),De("div",AP,[T("h2",null,Be(l.value),1),(ge(),cs(SP,{key:i.value,onCustomerSaved:c,"customer-to-edit":r.value},null,8,["customer-to-edit"]))]))}}),Ih=yn(RP,[["__scopeId","data-v-110717d7"]]);function PP(t,e=300){const n=Ae(t.value);let s;return Je(t,i=>{clearTimeout(s),s=setTimeout(()=>{n.value=i},e)}),n}const NP={class:"customer-list-container card-style",dir:"rtl"},kP={class:"toolbar"},OP={class:"search-section"},DP=["disabled"],xP={key:1,class:"empty-state"},MP={key:2,class:"table-responsive"},LP={class:"customer-table"},FP={class:"notes-cell"},UP=["title"],$P={key:1},BP=["onClick"],VP=Rt({__name:"CustomerList",setup(t,{expose:e}){const n=Hc(),s=ea(),i=Ae(""),r=PP(i,300),o=de(()=>{let c=n.customers;if(r.value){const u=r.value.toLowerCase();c=c.filter(d=>d.name.toLowerCase().includes(u)||d.phone&&d.phone.includes(u)||d.notes&&d.notes.toLowerCase().includes(u))}return c}),a=async()=>{await n.fetchCustomers()},l=c=>{s.push({name:"CustomerRelationships",query:{customerId:c}})};return or(()=>{(!n.customers.length||n.lastFetchTimestamp===0)&&a()}),e({fetchCustomers:a}),(c,u)=>(ge(),De("div",NP,[u[6]||(u[6]=T("h3",null,[T("i",{class:"fas fa-users"}),us(" قائمة العملاء")],-1)),T("div",kP,[T("div",OP,[gt(T("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=d=>i.value=d),placeholder:"البحث عن عميل...",class:"search-input"},null,512),[[Wt,i.value]]),u[1]||(u[1]=T("i",{class:"fas fa-search search-icon"},null,-1))]),T("button",{onClick:a,class:"btn btn-secondary",disabled:Me(n).loading},u[2]||(u[2]=[T("i",{class:"fas fa-sync-alt"},null,-1),us(" تحديث القائمة ")]),8,DP)]),xe(Vc,{loading:Me(n).loading&&!Me(n).customers.length},null,8,["loading"]),Me(n).error?(ge(),cs(Fg,{key:0,message:Me(n).error},null,8,["message"])):Et("",!0),!Me(n).loading&&!Me(n).customers.length&&!Me(n).error?(ge(),De("div",xP,u[3]||(u[3]=[T("p",null,"لا يوجد عملاء لعرضهم حالياً. قم بإضافة عميل جديد.",-1)]))):Et("",!0),o.value.length?(ge(),De("div",MP,[T("table",LP,[u[5]||(u[5]=T("thead",null,[T("tr",null,[T("th",null,"الاسم"),T("th",null,"الهاتف"),T("th",null,"عدد الأضاحي"),T("th",null,"ملاحظات"),T("th",null,"إجراءات")])],-1)),T("tbody",null,[(ge(!0),De(mt,null,_f(o.value,d=>{var h;return ge(),De("tr",{key:d.id},[T("td",null,Be(d.name),1),T("td",null,Be(d.phone||"-"),1),T("td",null,Be(((h=d.animals)==null?void 0:h.length)||0),1),T("td",FP,[d.notes?(ge(),De("span",{key:0,title:d.notes},Be(d.notes.substring(0,50))+Be(d.notes.length>50?"...":""),9,UP)):(ge(),De("span",$P,"-"))]),T("td",null,[T("button",{onClick:f=>l(d.id),class:"btn btn-info btn-sm"},u[4]||(u[4]=[T("i",{class:"fas fa-info-circle"},null,-1),us(" تفاصيل ")]),8,BP)])])}),128))])])])):Et("",!0)]))}}),HP=yn(VP,[["__scopeId","data-v-b8dea143"]]),WP={class:"customer-list-page",dir:"rtl"},jP={class:"actions"},qP=Rt({__name:"CustomerListPage",setup(t){const e=Ae(null),n=ea(),s=i=>{i.id?n.push({name:"EditCustomer",params:{id:i.id}}):console.error("Customer ID is missing, cannot navigate to edit page.")};return(i,r)=>{const o=pf("router-link");return ge(),De("div",WP,[T("div",jP,[xe(o,{to:"/add-customer",class:"add-button"},{default:is(()=>r[0]||(r[0]=[us("Add New Customer")])),_:1,__:[0]})]),xe(HP,{ref_key:"customerListRef",ref:e,onEditCustomer:s},null,512)])}}}),KP=yn(qP,[["__scopeId","data-v-a96dc778"]]),GP=[{path:"/login",name:"Login",component:()=>In(()=>import("./LoginPage-CJBUhJDz.js"),__vite__mapDeps([0,1])),meta:{requiresGuest:!0}},{path:"/",component:()=>In(()=>import("./DashboardPage--HjMLutp.js"),__vite__mapDeps([2,3])),redirect:"/customer-list",meta:{requiresAuth:!0},children:[{path:"add-customer",name:"AddCustomer",component:Ih,meta:{requiresAuth:!0}},{path:"edit-customer/:id",name:"EditCustomer",component:Ih,meta:{requiresAuth:!0},props:!0},{path:"customer-list",name:"CustomerList",component:KP,meta:{requiresAuth:!0}},{path:"customer-relationships",name:"CustomerRelationships",component:()=>In(()=>import("./CustomerAnimalRelationshipPage-6MgfbhPb.js"),__vite__mapDeps([4,5])),meta:{requiresAuth:!0}},{path:"animals-list",name:"AnimalsList",component:()=>In(()=>import("./AnimalsListPage-BAGIsdbH.js"),__vite__mapDeps([6,7])),meta:{requiresAuth:!0}},{path:"payments",redirect:{name:"PaymentList"}},{path:"payments/list",name:"PaymentList",component:()=>In(()=>import("./PaymentListPage-DkA3AGZb.js"),__vite__mapDeps([8,9,10]))},{path:"payments/add",name:"PaymentForm",component:()=>In(()=>import("./PaymentFormPage-CdENUJTN.js"),__vite__mapDeps([11,9,12]))},{path:"reports",name:"Reports",component:()=>In(()=>import("./ReportsPage-Cd7tUIAG.js"),__vite__mapDeps([13,9,14]))}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>In(()=>import("./NotFoundPage-s7TOrDHM.js"),__vite__mapDeps([15,16]))}],Ug=XA({history:AA("/adahy-vue/"),routes:GP});Ug.beforeEach(async(t,e,n)=>{const s=vr();await new Promise(i=>{const r=Dp(Ri,o=>{!s.user&&o&&s.setUser(o),r(),i()},()=>{r(),i()})}),t.meta.requiresAuth&&!s.isAuthenticated?n({name:"Login",query:{redirect:t.fullPath}}):t.meta.requiresGuest&&s.isAuthenticated?n({name:"CustomerList"}):n()});const zP=gy(),Wc=fy(pR);Wc.use(zP);Wc.use(Ug);Wc.mount("#app");export{ku as A,cu as B,QP as C,YP as D,Fg as E,mt as F,uP as G,eR as H,ea as I,Cl as J,$l as K,Vc as L,_R as M,ja as T,yn as _,T as a,xe as b,De as c,Rt as d,Me as e,gt as f,cs as g,ge as h,_f as i,is as j,Xc as k,pf as l,us as m,ki as n,or as o,Hc as p,de as q,Ae as r,Je as s,Be as t,vr as u,Wt as v,cy as w,Ao as x,Et as y,Co as z};
