import{s as Na,e as Ce,b as Wn,d as Re,f as nn,j as Xn,i as Yt,q as me,k as ue,l as hn,n as bl,v as Ua,a7 as Fa,w as Nr,U as wu,T as Ne,t as ci,h as hi,m as ui,p as cs,z as Tu,V as Gs,a0 as wl,r as Au,o as Cu,W as Tl}from"./scheduler.CADPIT6g.js";import{S as Oa,i as Ba,t as As,g as Ru,a as Ur,e as Pu,c as gh,b as _h,m as vh,d as xh}from"./index.COgAH3-s.js";import{e as Al,a as Mh,P as Iu}from"./public.DtzDeWYT.js";import{g as Lu,a as Du}from"./obr-host.OrMP9rF4.js";import{l as Nu,w as Uu,x as Fu,y as Ou}from"./dice-settings.64MJOnwz.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="185",Bu=0,Cl=1,zu=2,Ar=1,yh=2,bs=3,mi=0,Ze=1,ln=2,Yn=0,pi=1,Cs=2,Rl=3,Pl=4,Vu=5,wi=100,Gu=101,ku=102,Hu=103,Wu=104,Xu=200,qu=201,Yu=202,Ku=203,Vo=204,Go=205,Zu=206,$u=207,Ju=208,Qu=209,ju=210,td=211,ed=212,nd=213,id=214,ko=0,Ho=1,Wo=2,ns=3,Xo=4,qo=5,Yo=6,Ko=7,Sh=0,sd=1,rd=2,Pn=0,Eh=1,bh=2,wh=3,Va=4,Th=5,Ah=6,Ch=7,Rh=300,Pi=301,is=302,$r=303,Jr=304,Xr=306,Zo=1e3,qn=1001,$o=1002,Fe=1003,od=1004,ks=1005,we=1006,Qr=1007,mn=1008,en=1009,Ph=1010,Ih=1011,Is=1012,Ga=1013,Ln=1014,Cn=1015,Zn=1016,ka=1017,Ha=1018,Ls=1020,Lh=35902,Dh=35899,Nh=1021,Uh=1022,gn=1023,$n=1026,Ci=1027,Fh=1028,Wa=1029,Ii=1030,Xa=1031,qa=1033,Cr=33776,Rr=33777,Pr=33778,Ir=33779,Jo=35840,Qo=35841,jo=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37488,ra=37489,Fr=37490,oa=37491,aa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,Ma=37821,ya=36492,Sa=36494,Ea=36495,ba=36283,wa=36284,Or=36285,Ta=36286,ad=3200,Aa=0,ld=1,li="",je="srgb",Br="srgb-linear",zr="linear",ie="srgb",Ui=7680,Il=519,cd=512,hd=513,ud=514,Ya=515,dd=516,fd=517,Ka=518,pd=519,Ll=35044,Dl="300 es",Rn=2e3,Ds=2001;function md(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Vr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gd(){const r=Vr("canvas");return r.style.display="block",r}const Nl={};function Ul(...r){const t="THREE."+r.shift();console.log(t,...r)}function Oh(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Bt(...r){r=Oh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function jt(...r){r=Oh(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ts(...r){const t=r.join(" ");t in Nl||(Nl[t]=!0,Bt(...r))}function _d(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const vd={[ko]:Ho,[Wo]:Yo,[Xo]:Ko,[ns]:qo,[Ho]:ko,[Yo]:Wo,[Ko]:Xo,[qo]:ns};class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,Ca=180/Math.PI;function Ns(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function $t(r,t,e){return Math.max(t,Math.min(e,r))}function xd(r,t){return(r%t+t)%t}function jr(r,t,e){return(1-e)*r+e*t}function ds(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hl=class hl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hl.prototype.isVector2=!0;let Kt=hl,Xe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(d!==v||c!==h||l!==p||u!==g){let f=c*h+l*p+u*g+d*v;f<0&&(h=-h,p=-p,g=-g,v=-v,f=-f);let m=1-a;if(f<.9995){const _=Math.acos(f),y=Math.sin(_);m=Math.sin(m*_)/y,a=Math.sin(a*_)/y,c=c*m+h*a,l=l*m+p*a,u=u*m+g*a,d=d*m+v*a}else{c=c*m+h*a,l=l*m+p*a,u=u*m+g*a,d=d*m+v*a;const _=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=_,l*=_,u*=_,d*=_}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*p-l*h,t[e+1]=c*g+u*h+l*d-a*p,t[e+2]=l*g+u*p+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(s/2),h=c(n/2),p=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d+h*p*g;break;case"YZX":this._x=h*u*d+l*p*g,this._y=l*p*d+h*u*g,this._z=l*u*g-h*p*d,this._w=l*u*d-h*p*g;break;case"XZY":this._x=h*u*d-l*p*g,this._y=l*p*d-h*u*g,this._z=l*u*g+h*p*d,this._w=l*u*d+h*p*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};const ul=class ul{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=i+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ul.prototype.isVector3=!0;let F=ul;const to=new F,Fl=new Xe,dl=class dl{constructor(t,e,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],v=i[0],f=i[3],m=i[6],_=i[1],y=i[4],x=i[7],b=i[2],E=i[5],C=i[8];return s[0]=o*v+a*_+c*b,s[3]=o*f+a*y+c*E,s[6]=o*m+a*x+c*C,s[1]=l*v+u*_+d*b,s[4]=l*f+u*y+d*E,s[7]=l*m+u*x+d*C,s[2]=h*v+p*_+g*b,s[5]=h*f+p*y+g*E,s[8]=h*m+p*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=e*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*l-u*n)*v,t[2]=(a*n-i*o)*v,t[3]=h*v,t[4]=(u*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eo.makeScale(t,e)),this}rotate(t){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dl.prototype.isMatrix3=!0;let Gt=dl;const eo=new Gt,Ol=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Md(){const r={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?zr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Br]:{primaries:t,whitePoint:n,transfer:zr,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),r}const Zt=Md();function Kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fi;class yd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=Vr("canvas")),Fi.width=t.width,Fi.height=t.height;const i=Fi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sd=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(no(i[o].image)):s.push(no(i[o]))}else s=no(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Ed=0;const io=new F;class ke extends Li{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=qn,i=qn,s=we,o=mn,a=gn,c=en,l=ke.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ns(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Rh;ke.DEFAULT_ANISOTROPY=1;const fl=class fl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],g=c[9],v=c[2],f=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(p+1)/2,b=(m+1)/2,E=(u+h)/4,C=(d+v)/4,M=(g+f)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=C/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=M/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=M/s),this.set(n,i,s,e),this}let _=Math.sqrt((f-g)*(f-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;let _e=fl;class bd extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new ke(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Za(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends bd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bh extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wr=class Wr{constructor(t,e,n,i,s,o,a,c,l,u,d,h,p,g,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,u,d,h,p,g,v,f)}set(t,e,n,i,s,o,a,c,l,u,d,h,p,g,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),s=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,p=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,p=c*d,g=l*u,v=l*d;e[0]=h+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,p=c*d,g=l*u,v=l*d;e[0]=h-v*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,p=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,Ad)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ei.crossVectors(n,Je),ei.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ei.crossVectors(n,Je)),ei.normalize(),Hs.crossVectors(Je,ei),i[0]=ei.x,i[4]=Hs.x,i[8]=Je.x,i[1]=ei.y,i[5]=Hs.y,i[9]=Je.y,i[2]=ei.z,i[6]=Hs.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],_=n[3],y=n[7],x=n[11],b=n[15],E=i[0],C=i[4],M=i[8],w=i[12],P=i[1],R=i[5],D=i[9],N=i[13],O=i[2],L=i[6],U=i[10],k=i[14],W=i[3],Y=i[7],ot=i[11],at=i[15];return s[0]=o*E+a*P+c*O+l*W,s[4]=o*C+a*R+c*L+l*Y,s[8]=o*M+a*D+c*U+l*ot,s[12]=o*w+a*N+c*k+l*at,s[1]=u*E+d*P+h*O+p*W,s[5]=u*C+d*R+h*L+p*Y,s[9]=u*M+d*D+h*U+p*ot,s[13]=u*w+d*N+h*k+p*at,s[2]=g*E+v*P+f*O+m*W,s[6]=g*C+v*R+f*L+m*Y,s[10]=g*M+v*D+f*U+m*ot,s[14]=g*w+v*N+f*k+m*at,s[3]=_*E+y*P+x*O+b*W,s[7]=_*C+y*R+x*L+b*Y,s[11]=_*M+y*D+x*U+b*ot,s[15]=_*w+y*N+x*k+b*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],g=t[3],v=t[7],f=t[11],m=t[15],_=c*p-l*h,y=a*p-l*d,x=a*h-c*d,b=o*p-l*u,E=o*h-c*u,C=o*d-a*u;return e*(v*_-f*y+m*x)-n*(g*_-f*b+m*E)+i*(g*y-v*b+m*C)-s*(g*x-v*E+f*C)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(s*u-a*c)+i*(s*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],g=t[12],v=t[13],f=t[14],m=t[15],_=e*a-n*o,y=e*c-i*o,x=e*l-s*o,b=n*c-i*a,E=n*l-s*a,C=i*l-s*c,M=u*v-d*g,w=u*f-h*g,P=u*m-p*g,R=d*f-h*v,D=d*m-p*v,N=h*m-p*f,O=_*N-y*D+x*R+b*P-E*w+C*M;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/O;return t[0]=(a*N-c*D+l*R)*L,t[1]=(i*D-n*N-s*R)*L,t[2]=(v*C-f*E+m*b)*L,t[3]=(h*E-d*C-p*b)*L,t[4]=(c*P-o*N-l*w)*L,t[5]=(e*N-i*P+s*w)*L,t[6]=(f*x-g*C-m*y)*L,t[7]=(u*C-h*x+p*y)*L,t[8]=(o*D-a*P+l*M)*L,t[9]=(n*P-e*D-s*M)*L,t[10]=(g*E-v*x+m*_)*L,t[11]=(d*x-u*E-p*_)*L,t[12]=(a*w-o*R-c*M)*L,t[13]=(e*R-n*w+i*M)*L,t[14]=(v*y-g*b-f*_)*L,t[15]=(u*b-d*y+h*_)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,p=s*u,g=s*d,v=o*u,f=o*d,m=a*d,_=c*l,y=c*u,x=c*d,b=n.x,E=n.y,C=n.z;return i[0]=(1-(v+m))*b,i[1]=(p+x)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(h+m))*E,i[6]=(f+_)*E,i[7]=0,i[8]=(g+y)*C,i[9]=(f-_)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Oi.set(i[0],i[1],i[2]).length();const a=Oi.set(i[4],i[5],i[6]).length(),c=Oi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),un.copy(this);const l=1/o,u=1/a,d=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,o,a=Rn,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),p=(n+i)/(n-i);let g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===Rn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ds)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Rn,c=!1){const l=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),p=-(n+i)/(n-i);let g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===Rn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Ds)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Wr.prototype.isMatrix4=!0;let ge=Wr;const Oi=new F,un=new ge,Td=new F(0,0,0),Ad=new F(1,1,1),ei=new F,Hs=new F,Je=new F,zl=new ge,Vl=new Xe;class Jn{constructor(t=0,e=0,n=0,i=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cd=0;const Gl=new F,Bi=new Xe,Nn=new ge,Ws=new F,fs=new F,Rd=new F,Pd=new Xe,kl=new F(1,0,0),Hl=new F(0,1,0),Wl=new F(0,0,1),Xl={type:"added"},Id={type:"removed"},zi={type:"childadded",child:null},so={type:"childremoved",child:null};class Ue extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new F,e=new Jn,n=new Xe,i=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Gt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(fs,Ws,this.up):Nn.lookAt(Ws,fs,this.up),this.quaternion.setFromRotationMatrix(Nn),i&&(Nn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),zi.child=t,this.dispatchEvent(zi),zi.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ue.DEFAULT_UP=new F(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xs extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ld={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(l,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ld)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},qs={h:0,s:0,l:0};function oo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=xd(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=oo(o,s,t+1/3),this.g=oo(o,s,t),this.b=oo(o,s,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=je){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Zt.workingToColorSpace(Ge.copy(this),t),Math.round($t(Ge.r*255,0,255))*65536+Math.round($t(Ge.g*255,0,255))*256+Math.round($t(Ge.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,i=Ge.g,s=Ge.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=je){Zt.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,i=Ge.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(qs);const n=jr(ni.h,qs.h,e),i=jr(ni.s,qs.s,e),s=jr(ni.l,qs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new zt;zt.NAMES=Vh;class Dd extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const dn=new F,Un=new F,ao=new F,Fn=new F,Vi=new F,Gi=new F,ql=new F,lo=new F,co=new F,ho=new F,uo=new _e,fo=new _e,po=new _e;class cn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),Un.subVectors(n,e),ao.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(Un),c=dn.dot(ao),l=Un.dot(Un),u=Un.dot(ao),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return uo.setScalar(0),fo.setScalar(0),po.setScalar(0),uo.fromBufferAttribute(t,e),fo.fromBufferAttribute(t,n),po.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(uo,s.x),o.addScaledVector(fo,s.y),o.addScaledVector(po,s.z),o}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Un.subVectors(t,e),dn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Vi.subVectors(i,n),Gi.subVectors(s,n),lo.subVectors(t,n);const c=Vi.dot(lo),l=Gi.dot(lo);if(c<=0&&l<=0)return e.copy(n);co.subVectors(t,i);const u=Vi.dot(co),d=Gi.dot(co);if(u>=0&&d<=u)return e.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Vi,o);ho.subVectors(t,s);const p=Vi.dot(ho),g=Gi.dot(ho);if(g>=0&&p<=g)return e.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Gi,a);const f=u*g-p*d;if(f<=0&&d-u>=0&&p-g>=0)return ql.subVectors(s,i),a=(d-u)/(d-u+(p-g)),e.copy(i).addScaledVector(ql,a);const m=1/(f+v+h);return o=v*m,a=h*m,e.copy(n).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Us{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Ks.subVectors(this.max,ps),ki.subVectors(t.a,ps),Hi.subVectors(t.b,ps),Wi.subVectors(t.c,ps),ii.subVectors(Hi,ki),si.subVectors(Wi,Hi),xi.subVectors(ki,Wi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-xi.z,xi.y,ii.z,0,-ii.x,si.z,0,-si.x,xi.z,0,-xi.x,-ii.y,ii.x,0,-si.y,si.x,0,-xi.y,xi.x,0];return!mo(e,ki,Hi,Wi,Ks)||(e=[1,0,0,0,1,0,0,0,1],!mo(e,ki,Hi,Wi,Ks))?!1:(Zs.crossVectors(ii,si),e=[Zs.x,Zs.y,Zs.z],mo(e,ki,Hi,Wi,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new F,new F,new F,new F,new F,new F,new F,new F],fn=new F,Ys=new Us,ki=new F,Hi=new F,Wi=new F,ii=new F,si=new F,xi=new F,ps=new F,Ks=new F,Zs=new F,Mi=new F;function mo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mi.fromArray(r,s);const a=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ee=new F,$s=new Kt;let Nd=0;class sn extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Gh extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kh extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ud=new Us,ms=new F,go=new F;class Fs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(go)),this.expandByPoint(ms.copy(t.center).sub(go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Fd=0;const an=new ge,_o=new Ue,Xi=new F,Qe=new Us,gs=new Us,Le=new F;class Oe extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(md(t)?kh:Gh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Qe.min,gs.min),Qe.expandByPoint(Le),Le.addVectors(Qe.max,gs.max),Qe.expandByPoint(Le)):(Qe.expandByPoint(gs.min),Qe.expandByPoint(gs.max))}Qe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Le.fromBufferAttribute(a,l),c&&(Xi.fromBufferAttribute(t,l),Le.add(Xi)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new F,c[M]=new F;const l=new F,u=new F,d=new F,h=new Kt,p=new Kt,g=new Kt,v=new F,f=new F;function m(M,w,P){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,P),h.fromBufferAttribute(s,M),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,P),u.sub(l),d.sub(l),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),f.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[M].add(v),a[w].add(v),a[P].add(v),c[M].add(f),c[w].add(f),c[P].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let M=0,w=_.length;M<w;++M){const P=_[M],R=P.start,D=P.count;for(let N=R,O=R+D;N<O;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new F,x=new F,b=new F,E=new F;function C(M){b.fromBufferAttribute(i,M),E.copy(b);const w=a[M];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(E,w);const R=x.dot(c[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,R)}for(let M=0,w=_.length;M<w;++M){const P=_[M],R=P.start,D=P.count;for(let N=R,O=R+D;N<O;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,d=new F;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),v=t.getX(h+1),f=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,f),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,f=c.length;v<f;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let m=0;m<u;m++)h[g++]=l[p++]}return new sn(h,u,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Od=0,_i=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=pi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Go,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Bn=new F,vo=new F,Js=new F,ri=new F,xo=new F,Qs=new F,Mo=new F;let $a=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vo.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(vo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Js),a=ri.dot(this.direction),c=-ri.dot(Js),l=ri.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(vo).addScaledVector(Js,h),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,s){xo.subVectors(e,t),Qs.subVectors(n,t),Mo.crossVectors(xo,Qs);let o=this.direction.dot(Mo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);const c=a*this.direction.dot(Qs.crossVectors(ri,Qs));if(c<0)return null;const l=a*this.direction.dot(xo.cross(ri));if(l<0||c+l>o)return null;const u=-a*ri.dot(Mo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Rs extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yl=new ge,yi=new $a,js=new Fs,Kl=new F,tr=new F,er=new F,nr=new F,yo=new F,ir=new F,Zl=new F,sr=new F;class qe extends Ue{constructor(t=new Oe,e=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ir.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(yo.fromBufferAttribute(d,t),o?ir.addScaledVector(yo,u):ir.addScaledVector(yo.sub(e),u))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),yi.copy(t.ray).recast(t.near),!(js.containsPoint(yi.origin)===!1&&(yi.intersectSphere(js,Kl)===null||yi.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Yl.copy(s).invert(),yi.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const f=h[g],m=o[f.materialIndex],_=Math.max(f.start,p.start),y=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const E=a.getX(x),C=a.getX(x+1),M=a.getX(x+2);i=rr(this,m,t,n,l,u,d,E,C,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const _=a.getX(f),y=a.getX(f+1),x=a.getX(f+2);i=rr(this,o,t,n,l,u,d,_,y,x),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const f=h[g],m=o[f.materialIndex],_=Math.max(f.start,p.start),y=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const E=x,C=x+1,M=x+2;i=rr(this,m,t,n,l,u,d,E,C,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){const _=f,y=f+1,x=f+2;i=rr(this,o,t,n,l,u,d,_,y,x),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function Bd(r,t,e,n,i,s,o,a){let c;if(t.side===Ze?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===mi,a),c===null)return null;sr.copy(a),sr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(sr);return l<e.near||l>e.far?null:{distance:l,point:sr.clone(),object:r}}function rr(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,tr),r.getVertexPosition(c,er),r.getVertexPosition(l,nr);const u=Bd(r,t,e,n,tr,er,nr,Zl);if(u){const d=new F;cn.getBarycoord(Zl,tr,er,nr,d),i&&(u.uv=cn.getInterpolatedAttribute(i,a,c,l,d,new Kt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,a,c,l,d,new Kt)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,c,l,d,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new F,materialIndex:0};cn.getNormal(tr,er,nr,h.normal),u.face=h,u.barycoord=d}return u}class zd extends ke{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Fe,u=Fe,d,h){super(null,o,a,c,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const So=new F,Vd=new F,Gd=new Gt;let bi=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=So.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(So),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gd.getNormalMatrix(t),i=this.coplanarPoint(So).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Si=new Fs,kd=new Kt(.5,.5),or=new F;class Ja{constructor(t=new bi,e=new bi,n=new bi,i=new bi,s=new bi,o=new bi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],v=s[9],f=s[10],m=s[11],_=s[12],y=s[13],x=s[14],b=s[15];if(i[0].setComponents(l-o,p-u,m-g,b-_).normalize(),i[1].setComponents(l+o,p+u,m+g,b+_).normalize(),i[2].setComponents(l+a,p+d,m+v,b+y).normalize(),i[3].setComponents(l-a,p-d,m-v,b-y).normalize(),n)i[4].setComponents(c,h,f,x).normalize(),i[5].setComponents(l-c,p-h,m-f,b-x).normalize();else if(i[4].setComponents(l-c,p-h,m-f,b-x).normalize(),e===Rn)i[5].setComponents(l+c,p+h,m+f,b+x).normalize();else if(e===Ds)i[5].setComponents(c,h,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){Si.center.set(0,0,0);const e=kd.distanceTo(t.center);return Si.radius=.7071067811865476+e,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(or.x=i.normal.x>0?t.max.x:t.min.x,or.y=i.normal.y>0?t.max.y:t.min.y,or.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hh extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gr=new F,kr=new F,$l=new ge,_s=new $a,ar=new Fs,Eo=new F,Jl=new F;class Hd extends Ue{constructor(t=new Oe,e=new Hh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Gr.fromBufferAttribute(e,i-1),kr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gr.distanceTo(kr);t.setAttribute("lineDistance",new ve(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(i),ar.radius+=s,t.ray.intersectsSphere(ar)===!1)return;$l.copy(i).invert(),_s.copy(t.ray).applyMatrix4($l);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,f=g-1;v<f;v+=l){const m=u.getX(v),_=u.getX(v+1),y=lr(this,t,_s,c,m,_,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(p),m=lr(this,t,_s,c,v,f,g-1);m&&e.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,f=g-1;v<f;v+=l){const m=lr(this,t,_s,c,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=lr(this,t,_s,c,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lr(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(Gr.fromBufferAttribute(a,i),kr.fromBufferAttribute(a,s),e.distanceSqToSegment(Gr,kr,Eo,Jl)>n)return;Eo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Eo);if(!(l<t.near||l>t.far))return{distance:l,point:Jl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Ql=new F,jl=new F;class Wd extends Hd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Ql.fromBufferAttribute(e,i),jl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ql.distanceTo(jl);t.setAttribute("lineDistance",new ve(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ra extends _i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new ge,Pa=new $a,cr=new Fs,hr=new F;class ec extends Ue{constructor(t=new Oe,e=new Ra){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=s,t.ray.intersectsSphere(cr)===!1)return;tc.copy(i).invert(),Pa.copy(t.ray).applyMatrix4(tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=h,v=p;g<v;g++){const f=l.getX(g);hr.fromBufferAttribute(d,f),nc(hr,f,c,i,t,e,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,v=p;g<v;g++)hr.fromBufferAttribute(d,g),nc(hr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nc(r,t,e,n,i,s,o){const a=Pa.distanceSqToPoint(r);if(a<e){const c=new F;Pa.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Wh extends ke{constructor(t=[],e=Pi,n,i,s,o,a,c,l,u){super(t,e,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class We extends ke{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ss extends ke{constructor(t,e,n=Ln,i,s,o,a=Fe,c=Fe,l,u=$n,d=1){if(u!==$n&&u!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xd extends ss{constructor(t,e=Ln,n=Pi,i,s,o=Fe,a=Fe,c,l=$n){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xh extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hs extends Oe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2));function g(v,f,m,_,y,x,b,E,C,M,w){const P=x/C,R=b/M,D=x/2,N=b/2,O=E/2,L=C+1,U=M+1;let k=0,W=0;const Y=new F;for(let ot=0;ot<U;ot++){const at=ot*R-N;for(let Q=0;Q<L;Q++){const Dt=Q*P-D;Y[v]=Dt*_,Y[f]=at*y,Y[m]=O,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[f]=0,Y[m]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Q/C),d.push(1-ot/M),k+=1}}for(let ot=0;ot<M;ot++)for(let at=0;at<C;at++){const Q=h+at+L*ot,Dt=h+at+L*(ot+1),kt=h+(at+1)+L*(ot+1),Ot=h+(at+1)+L*ot;c.push(Q,Dt,Ot),c.push(Dt,kt,Ot),W+=6}a.addGroup(p,W,w),p+=W,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Os extends Oe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(s.slice(),3)),this.setAttribute("uv",new ve(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new F,x=new F,b=new F;for(let E=0;E<e.length;E+=3)p(e[E+0],y),p(e[E+1],x),p(e[E+2],b),c(y,x,b,_)}function c(_,y,x,b){const E=b+1,C=[];for(let M=0;M<=E;M++){C[M]=[];const w=_.clone().lerp(x,M/E),P=y.clone().lerp(x,M/E),R=E-M;for(let D=0;D<=R;D++)D===0&&M===E?C[M][D]=w:C[M][D]=w.clone().lerp(P,D/R)}for(let M=0;M<E;M++)for(let w=0;w<2*(E-M)-1;w++){const P=Math.floor(w/2);w%2===0?(h(C[M][P+1]),h(C[M+1][P]),h(C[M][P])):(h(C[M][P+1]),h(C[M+1][P+1]),h(C[M+1][P]))}}function l(_){const y=new F;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(_),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const _=new F;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const x=f(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;o.push(x,1-b)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],b=o[_+4],E=Math.max(y,x,b),C=Math.min(y,x,b);E>.9&&C<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const _=new F,y=new F,x=new F,b=new F,E=new Kt,C=new Kt,M=new Kt;for(let w=0,P=0;w<s.length;w+=9,P+=6){_.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),x.set(s[w+6],s[w+7],s[w+8]),E.set(o[P+0],o[P+1]),C.set(o[P+2],o[P+3]),M.set(o[P+4],o[P+5]),b.copy(_).add(y).add(x).divideScalar(3);const R=f(b);v(E,P+0,_,R),v(C,P+2,y,R),v(M,P+4,x,R)}}function v(_,y,x,b){b<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=b/2/Math.PI+.5)}function f(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.vertices,t.indices,t.radius,t.detail)}}class Qa extends Os{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qa(t.radius,t.detail)}}const ur=new F,dr=new F,bo=new F,fr=new cn;class qd extends Oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Lr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:f,c:m}=fr;if(v.fromBufferAttribute(a,l[0]),f.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),fr.getNormal(bo),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const y=(_+1)%3,x=d[_],b=d[y],E=fr[u[_]],C=fr[u[y]],M=`${x}_${b}`,w=`${b}_${x}`;w in h&&h[w]?(bo.dot(h[w].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(C.x,C.y,C.z)),h[w]=null):M in h||(h[M]={index0:l[_],index1:l[y],normal:bo.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:f}=h[g];ur.fromBufferAttribute(a,v),dr.fromBufferAttribute(a,f),p.push(ur.x,ur.y,ur.z),p.push(dr.x,dr.y,dr.z)}this.setAttribute("position",new ve(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ja extends Os{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ja(t.radius,t.detail)}}class tl extends Os{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class di extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=t/a,h=e/c,p=[],g=[],v=[],f=[];for(let m=0;m<u;m++){const _=m*h-o;for(let y=0;y<l;y++){const x=y*d-s;g.push(x,-_,0),v.push(0,0,1),f.push(y/a),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){const y=_+l*m,x=_+l*(m+1),b=_+1+l*(m+1),E=_+1+l*m;p.push(y,x,E),p.push(x,b,E)}this.setIndex(p),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yd extends _i{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new zt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function rs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];if(ic(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ic(i[0])){const s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function He(r){const t={};for(let e=0;e<r.length;e++){const n=rs(r[e]);for(const i in n)t[i]=n[i]}return t}function ic(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Kd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function qh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Zd={clone:rs,merge:He};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ge().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Qd extends Dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jd extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tf extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ef extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class el extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const wo=new ge,sc=new F,rc=new F;class Yh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(sc),rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rc),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ds||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pr=new F,mr=new Xe,yn=new F;class Kh extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pr,mr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(pr,mr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pr,mr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new F,oc=new Kt,ac=new Kt;class tn extends Kh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,oc,ac),e.subVectors(ac,oc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class nf extends Yh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class lc extends el{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class nl extends Kh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sf extends Yh{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cc extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new sf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class rf extends el{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const qi=-90,Yi=1;class of extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(qi,Yi,t,e);i.layers=this.layers,this.add(i);const s=new tn(qi,Yi,t,e);s.layers=this.layers,this.add(s);const o=new tn(qi,Yi,t,e);o.layers=this.layers,this.add(o);const a=new tn(qi,Yi,t,e);a.layers=this.layers,this.add(a);const c=new tn(qi,Yi,t,e);c.layers=this.layers,this.add(c);const l=new tn(qi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class af extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const pl=class pl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};pl.prototype.isMatrix2=!0;let hc=pl;function uc(r,t,e,n){const i=lf(n);switch(e){case Nh:return r*t;case Fh:return r*t/i.components*i.byteLength;case Wa:return r*t/i.components*i.byteLength;case Ii:return r*t*2/i.components*i.byteLength;case Xa:return r*t*2/i.components*i.byteLength;case Uh:return r*t*3/i.components*i.byteLength;case gn:return r*t*4/i.components*i.byteLength;case qa:return r*t*4/i.components*i.byteLength;case Cr:case Rr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ir:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ta:return Math.max(r,16)*Math.max(t,8)/4;case Jo:case jo:return Math.max(r,8)*Math.max(t,8)/2;case ea:case na:case sa:case ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ia:case Fr:case oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ca:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ha:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ua:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case da:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case fa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case pa:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ma:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ga:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case va:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ya:case Sa:case Ea:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ba:case wa:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Or:case Ta:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lf(r){switch(r){case en:case Ph:return{byteLength:1,components:1};case Is:case Ih:case Zn:return{byteLength:2,components:1};case ka:case Ha:return{byteLength:2,components:4};case Ln:case Ga:case Cn:return{byteLength:4,components:1};case Lh:case Dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function cf(r){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];r.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Um=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:vf,batching_vertex:xf,begin_vertex:Mf,beginnormal_vertex:yf,bsdfs:Sf,iridescence_fragment:Ef,bumpmap_pars_fragment:bf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Cf,color_fragment:Rf,color_pars_fragment:Pf,color_pars_vertex:If,color_vertex:Lf,common:Df,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Of,emissivemap_fragment:Bf,emissivemap_pars_fragment:zf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:kf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:np,envmap_vertex:qf,fog_vertex:Yf,fog_pars_vertex:Kf,fog_fragment:Zf,fog_pars_fragment:$f,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,lightprobes_pars_fragment:dp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:Mp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Ep,morphcolor_vertex:bp,morphnormal_vertex:wp,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:Cp,normal_fragment_maps:Rp,normal_pars_fragment:Pp,normal_pars_vertex:Ip,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:Vp,project_vertex:Gp,dithering_fragment:kp,dithering_pars_fragment:Hp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Zp,skinbase_vertex:$p,skinning_pars_vertex:Jp,skinning_vertex:Qp,skinnormal_vertex:jp,specularmap_fragment:tm,specularmap_pars_fragment:em,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:sm,transmission_pars_fragment:rm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:dm,backgroundCube_frag:fm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distance_vert:vm,distance_frag:xm,equirect_vert:Mm,equirect_frag:ym,linedashed_vert:Sm,linedashed_frag:Em,meshbasic_vert:bm,meshbasic_frag:wm,meshlambert_vert:Tm,meshlambert_frag:Am,meshmatcap_vert:Cm,meshmatcap_frag:Rm,meshnormal_vert:Pm,meshnormal_frag:Im,meshphong_vert:Lm,meshphong_frag:Dm,meshphysical_vert:Nm,meshphysical_frag:Um,meshtoon_vert:Fm,meshtoon_frag:Om,points_vert:Bm,points_frag:zm,shadow_vert:Vm,shadow_frag:Gm,sprite_vert:km,sprite_frag:Hm},xt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Tn={basic:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:He([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:He([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:He([xt.points,xt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:He([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:He([xt.common,xt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:He([xt.sprite,xt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:He([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:He([xt.lights,xt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Tn.physical={uniforms:He([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const gr={r:0,b:0,g:0},Wm=new ge,$h=new Gt;$h.set(-1,0,0,0,1,0,0,0,1);function Xm(r,t,e,n,i,s){const o=new zt(0);let a=i===!0?0:1,c,l,u=null,d=0,h=null;function p(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const x=_.backgroundBlurriness>0;y=t.get(y,x)}return y}function g(_){let y=!1;const x=p(_);x===null?f(o,a):x&&x.isColor&&(f(x,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(_,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===Xr)?(l===void 0&&(l=new qe(new hs(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:rs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($h),l.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ie,(u!==x||d!==x.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new qe(new di(2,2),new Dn({name:"BackgroundMaterial",uniforms:rs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,y){_.getRGB(gr,qh(r)),e.buffers.color.setClear(gr.r,gr.g,gr.b,y,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,f(o,a)},render:g,addToRenderList:v,dispose:m}}function qm(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(R,D,N,O,L){let U=!1;const k=d(R,O,N,D);s!==k&&(s=k,l(s.object)),U=p(R,O,N,L),U&&g(R,O,N,L),L!==null&&t.update(L,r.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(R,D,N,O),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return r.createVertexArray()}function l(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function d(R,D,N,O){const L=O.wireframe===!0;let U=n[D.id];U===void 0&&(U={},n[D.id]=U);const k=R.isInstancedMesh===!0?R.id:0;let W=U[k];W===void 0&&(W={},U[k]=W);let Y=W[N.id];Y===void 0&&(Y={},W[N.id]=Y);let ot=Y[L];return ot===void 0&&(ot=h(c()),Y[L]=ot),ot}function h(R){const D=[],N=[],O=[];for(let L=0;L<e;L++)D[L]=0,N[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:O,object:R,attributes:{},index:null}}function p(R,D,N,O){const L=s.attributes,U=D.attributes;let k=0;const W=N.getAttributes();for(const Y in W)if(W[Y].location>=0){const at=L[Y];let Q=U[Y];if(Q===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),at===void 0||at.attribute!==Q||Q&&at.data!==Q.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function g(R,D,N,O){const L={},U=D.attributes;let k=0;const W=N.getAttributes();for(const Y in W)if(W[Y].location>=0){let at=U[Y];at===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(at=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(at=R.instanceColor));const Q={};Q.attribute=at,at&&at.data&&(Q.data=at.data),L[Y]=Q,k++}s.attributes=L,s.attributesNum=k,s.index=O}function v(){const R=s.newAttributes;for(let D=0,N=R.length;D<N;D++)R[D]=0}function f(R){m(R,0)}function m(R,D){const N=s.newAttributes,O=s.enabledAttributes,L=s.attributeDivisors;N[R]=1,O[R]===0&&(r.enableVertexAttribArray(R),O[R]=1),L[R]!==D&&(r.vertexAttribDivisor(R,D),L[R]=D)}function _(){const R=s.newAttributes,D=s.enabledAttributes;for(let N=0,O=D.length;N<O;N++)D[N]!==R[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function y(R,D,N,O,L,U,k){k===!0?r.vertexAttribIPointer(R,D,N,L,U):r.vertexAttribPointer(R,D,N,O,L,U)}function x(R,D,N,O){v();const L=O.attributes,U=N.getAttributes(),k=D.defaultAttributeValues;for(const W in U){const Y=U[W];if(Y.location>=0){let ot=L[W];if(ot===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor)),ot!==void 0){const at=ot.normalized,Q=ot.itemSize,Dt=t.get(ot);if(Dt===void 0)continue;const kt=Dt.buffer,Ot=Dt.type,z=Dt.bytesPerElement,j=Ot===r.INT||Ot===r.UNSIGNED_INT||ot.gpuType===Ga;if(ot.isInterleavedBufferAttribute){const it=ot.data,gt=it.stride,dt=ot.offset;if(it.isInstancedInterleavedBuffer){for(let _t=0;_t<Y.locationSize;_t++)m(Y.location+_t,it.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let _t=0;_t<Y.locationSize;_t++)f(Y.location+_t);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let _t=0;_t<Y.locationSize;_t++)y(Y.location+_t,Q/Y.locationSize,Ot,at,gt*z,(dt+Q/Y.locationSize*_t)*z,j)}else{if(ot.isInstancedBufferAttribute){for(let it=0;it<Y.locationSize;it++)m(Y.location+it,ot.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let it=0;it<Y.locationSize;it++)f(Y.location+it);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let it=0;it<Y.locationSize;it++)y(Y.location+it,Q/Y.locationSize,Ot,at,Q*z,Q/Y.locationSize*it*z,j)}}else if(k!==void 0){const at=k[W];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(Y.location,at);break;case 3:r.vertexAttrib3fv(Y.location,at);break;case 4:r.vertexAttrib4fv(Y.location,at);break;default:r.vertexAttrib1fv(Y.location,at)}}}}_()}function b(){w();for(const R in n){const D=n[R];for(const N in D){const O=D[N];for(const L in O){const U=O[L];for(const k in U)u(U[k].object),delete U[k];delete O[L]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;const D=n[R.id];for(const N in D){const O=D[N];for(const L in O){const U=O[L];for(const k in U)u(U[k].object),delete U[k];delete O[L]}}delete n[R.id]}function C(R){for(const D in n){const N=n[D];for(const O in N){const L=N[O];if(L[R.id]===void 0)continue;const U=L[R.id];for(const k in U)u(U[k].object),delete U[k];delete L[R.id]}}}function M(R){for(const D in n){const N=n[D],O=R.isInstancedMesh===!0?R.id:0,L=N[O];if(L!==void 0){for(const U in L){const k=L[U];for(const W in k)u(k[W].object),delete k[W];delete L[U]}delete N[O],Object.keys(N).length===0&&delete n[D]}}}function w(){P(),o=!0,s!==i&&(s=i,l(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:f,disableUnusedAttributes:_}}function Ym(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let p=0;p<u;p++)h+=l[p];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Km(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==gn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const M=C===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==en&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!M)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Bt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,maxSamples:b,samples:E}}function Zm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new bi,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,f=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!f)s?u(null):l();else{const _=s?0:n,y=_*4;let x=m.clippingState||null;c.value=x,x=u(g,h,y,p);for(let b=0;b!==y;++b)x[b]=e[b];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const m=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(f===null||f.length<m)&&(f=new Float32Array(m));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(f,x),f[x+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}const fi=4,dc=[.125,.215,.35,.446,.526,.582],Ti=20,$m=256,vs=new nl,fc=new zt;let To=null,Ao=0,Co=0,Ro=!1;const Jm=new F;class pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=Jm}=s;To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Ao,Co),this._renderer.xr.enabled=Ro,t.scissorTest=!1,Ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:Zn,format:gn,colorSpace:Br,depthBuffer:!1},i=mc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qm(s)),this._blurMaterial=t0(s,t,e),this._ggxMaterial=jm(s,t,e)}return i}_compileMaterial(t){const e=new qe(new Oe,t);this._renderer.compile(e,vs)}_sceneToCubeUV(t,e,n,i,s){const c=new tn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(fc),d.toneMapping=Pn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new hs,new Rs({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,f=v.material;let m=!1;const _=t.background;_?_.isColor&&(f.color.copy(_),t.background=null,m=!0):(f.color.copy(fc),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;Ki(i,x*b,y>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(v,c),d.render(t,c)}d.toneMapping=p,d.autoClear=h,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ki(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,p=d*h,{_lodMax:g}=this,v=this._sizeLods[n],f=3*v*(n>g-fi?n-g+fi:0),m=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,Ki(s,f,m,3*v,2*v),i.setRenderTarget(s),i.render(a,vs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ki(t,f,m,3*v,2*v),i.setRenderTarget(t),i.render(a,vs)}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=l;const h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),v=s/g,f=isFinite(s)?1+Math.floor(u*v):Ti;f>Ti&&Bt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ti}`);const m=[];let _=0;for(let C=0;C<Ti;++C){const M=C/v,w=Math.exp(-M*M/2);m.push(w),C===0?_+=w:C<f&&(_+=2*w)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-fi?i-y+fi:0),E=4*(this._cubeSize-x);Ki(e,b,E,3*x,2*x),c.setRenderTarget(e),c.render(d,vs)}}function Qm(r){const t=[],e=[],n=[];let i=r;const s=r-fi+1+dc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-fi?c=dc[o-r+fi-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,f=2,m=1,_=new Float32Array(v*g*p),y=new Float32Array(f*g*p),x=new Float32Array(m*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,M=E>2?0:-1,w=[C,M,0,C+2/3,M,0,C+2/3,M+1,0,C,M,0,C+2/3,M+1,0,C,M+1,0];_.set(w,v*g*E),y.set(h,f*g*E);const P=[E,E,E,E,E,E];x.set(P,m*g*E)}const b=new Oe;b.setAttribute("position",new sn(_,v)),b.setAttribute("uv",new sn(y,f)),b.setAttribute("faceIndex",new sn(x,m)),n.push(new qe(b,null)),i>fi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function mc(r,t,e){const n=new In(r,t,e);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function jm(r,t,e){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function t0(r,t,e){const n=new Float32Array(Ti),i=new F(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function gc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function _c(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function qr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jh extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hs(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Yn});s.uniforms.tEquirect.value=e;const o=new qe(i,s),a=e.minFilter;return e.minFilter===mn&&(e.minFilter=we),new of(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}function e0(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===$r||p===Jr)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Jh(g.height);return v.fromEquirectangularTexture(r,h),t.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,g=p===$r||p===Jr,v=p===Pi||p===is;if(g||v){let f=e.get(h);const m=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new pc(r)),f=g?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{const _=h.image;return g&&_&&_.height>0||v&&_&&c(_)?(n===null&&(n=new pc(r)),f=g?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function a(h,p){return p===$r?h.mapping=Pi:p===Jr&&(h.mapping=is),h}function c(h){let p=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function l(h){const p=h.target;p.removeEventListener("dispose",l);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function n0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ts("WebGLRenderer: "+n+" extension not supported."),i}}}function i0(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)t.update(h[p],r.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],E=_[y+1],C=_[y+2];h.push(b,E,E,C,C,b)}}else{const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,E=y+1,C=y+2;h.push(b,E,E,C,C,b)}}const f=new(g.count>=65535?kh:Gh)(h,1);f.version=v;const m=s.get(d);m&&t.remove(m),s.set(d,f)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function s0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*o),e.update(h,n,1)}function l(d,h,p){p!==0&&(r.drawElementsInstanced(n,h,s,d*o,p),e.update(h,n,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,p);let v=0;for(let f=0;f<p;f++)v+=h[f];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function r0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o0(r,t,e){const n=new WeakMap,i=new _e;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const E=new Float32Array(x*b*4*d),C=new Bh(E,x,b,d);C.type=Cn,C.needsUpdate=!0;const M=y*4;for(let P=0;P<d;P++){const R=f[P],D=m[P],N=_[P],O=x*b*4*P;for(let L=0;L<R.count;L++){const U=L*M;p===!0&&(i.fromBufferAttribute(R,L),E[O+U+0]=i.x,E[O+U+1]=i.y,E[O+U+2]=i.z,E[O+U+3]=0),g===!0&&(i.fromBufferAttribute(D,L),E[O+U+4]=i.x,E[O+U+5]=i.y,E[O+U+6]=i.z,E[O+U+7]=0),v===!0&&(i.fromBufferAttribute(N,L),E[O+U+8]=i.x,E[O+U+9]=i.y,E[O+U+10]=i.z,E[O+U+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:C,size:new Kt(x,b)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function a0(r,t,e,n,i){let s=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const l0={[Eh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[Va]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Ch]:"NEUTRAL_TONE_MAPPING",[Th]:"CUSTOM_TONE_MAPPING"};function c0(r,t,e,n,i,s){const o=new In(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new ss(t,e):void 0}),a=new In(t,e,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),c=new Oe;c.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ve([0,2,0,0,2,0],2));const l=new Qd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qe(c,l),d=new nl(-1,1,1,-1,0,1);let h=null,p=null,g=!1,v,f=null,m=[],_=!1;this.setSize=function(y,x){o.setSize(y,x),a.setSize(y,x);for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(y,x)}},this.setEffects=function(y){m=y,_=m.length>0&&m[0].isRenderPass===!0;const x=o.width,b=o.height;for(let E=0;E<m.length;E++){const C=m[E];C.setSize&&C.setSize(x,b)}},this.begin=function(y,x){if(g||y.toneMapping===Pn&&m.length===0)return!1;if(f=x,x!==null){const b=x.width,E=x.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return _===!1&&y.setRenderTarget(o),v=y.toneMapping,y.toneMapping=Pn,!0},this.hasRenderPass=function(){return _},this.end=function(y,x){y.toneMapping=v,g=!0;let b=o,E=a;for(let C=0;C<m.length;C++){const M=m[C];if(M.enabled!==!1&&(M.render(y,E,b,x),M.needsSwap!==!1)){const w=b;b=E,E=w}}if(h!==y.outputColorSpace||p!==y.toneMapping){h=y.outputColorSpace,p=y.toneMapping,l.defines={},Zt.getTransfer(h)===ie&&(l.defines.SRGB_TRANSFER="");const C=l0[p];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(u,d),f=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const Qh=new ke,Ia=new ss(1,1),jh=new Bh,tu=new wd,eu=new Wh,vc=[],xc=[],Mc=new Float32Array(16),yc=new Float32Array(9),Sc=new Float32Array(4);function us(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=vc[i];if(s===void 0&&(s=new Float32Array(i),vc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Yr(r,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function h0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function u0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function d0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function f0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function p0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Sc.set(n),r.uniformMatrix2fv(this.addr,!1,Sc),Ie(e,n)}}function m0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;yc.set(n),r.uniformMatrix3fv(this.addr,!1,yc),Ie(e,n)}}function g0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Mc.set(n),r.uniformMatrix4fv(this.addr,!1,Mc),Ie(e,n)}}function _0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function v0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function x0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function M0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function y0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function S0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function E0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function b0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function w0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ia.compareFunction=e.isReversedDepthBuffer()?Ka:Ya,s=Ia):s=Qh,e.setTexture2D(t||s,i)}function T0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||tu,i)}function A0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||eu,i)}function C0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jh,i)}function R0(r){switch(r){case 5126:return h0;case 35664:return u0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return x0;case 35669:case 35673:return M0;case 5125:return y0;case 36294:return S0;case 36295:return E0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return C0}}function P0(r,t){r.uniform1fv(this.addr,t)}function I0(r,t){const e=us(t,this.size,2);r.uniform2fv(this.addr,e)}function L0(r,t){const e=us(t,this.size,3);r.uniform3fv(this.addr,e)}function D0(r,t){const e=us(t,this.size,4);r.uniform4fv(this.addr,e)}function N0(r,t){const e=us(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function U0(r,t){const e=us(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function F0(r,t){const e=us(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function O0(r,t){r.uniform1iv(this.addr,t)}function B0(r,t){r.uniform2iv(this.addr,t)}function z0(r,t){r.uniform3iv(this.addr,t)}function V0(r,t){r.uniform4iv(this.addr,t)}function G0(r,t){r.uniform1uiv(this.addr,t)}function k0(r,t){r.uniform2uiv(this.addr,t)}function H0(r,t){r.uniform3uiv(this.addr,t)}function W0(r,t){r.uniform4uiv(this.addr,t)}function X0(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Ia:o=Qh;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function q0(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||tu,s[o])}function Y0(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||eu,s[o])}function K0(r,t,e){const n=this.cache,i=t.length,s=Yr(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||jh,s[o])}function Z0(r){switch(r){case 5126:return P0;case 35664:return I0;case 35665:return L0;case 35666:return D0;case 35674:return N0;case 35675:return U0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return k0;case 36295:return H0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return K0}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R0(e.type)}}class J0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}}class Q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function Ec(r,t){r.seq.push(t),r.map[t.id]=t}function j0(r,t,e){const n=r.name,i=n.length;for(Po.lastIndex=0;;){const s=Po.exec(n),o=Po.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ec(e,l===void 0?new $0(a,r,t):new J0(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Q0(a),Ec(e,d)),e=d}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);j0(a,c,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function bc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const tg=37297;let eg=0;function ng(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const wc=new Gt;function ig(r){Zt._getMatrix(wc,Zt.workingColorSpace,r);const t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(r)){case zr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Tc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ng(r.getShaderSource(t),a)}else return s}function sg(r,t){const e=ig(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const rg={[Eh]:"Linear",[bh]:"Reinhard",[wh]:"Cineon",[Va]:"ACESFilmic",[Ah]:"AgX",[Ch]:"Neutral",[Th]:"Custom"};function og(r,t){const e=rg[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _r=new F;function ag(){Zt.getLuminanceCoefficients(_r);const r=_r.x.toFixed(4),t=_r.y.toFixed(4),e=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function cg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ws(r){return r!==""}function Ac(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(r){return r.replace(ug,fg)}const dg=new Map;function fg(r,t){let e=Xt[t];if(e===void 0){const n=dg.get(t);if(n!==void 0)e=Xt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return La(e)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(r){return r.replace(pg,mg)}function mg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gg={[Ar]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function _g(r){return gg[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vg={[Pi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE_UV"};function xg(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vg[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mg={[is]:"ENVMAP_MODE_REFRACTION"};function yg(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Mg[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sg={[Sh]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[rd]:"ENVMAP_BLENDING_ADD"};function Eg(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Sg[r.combine]||"ENVMAP_BLENDING_NONE"}function bg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=_g(e),l=xg(e),u=yg(e),d=Eg(e),h=bg(e),p=lg(e),g=cg(s),v=i.createProgram();let f,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`)):(f=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),m=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),ag(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=La(o),o=Ac(o,e),o=Cc(o,e),a=La(a),a=Ac(a,e),a=Cc(a,e),o=Rc(o),a=Rc(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+f+o,x=_+m+a,b=bc(i,i.VERTEX_SHADER,y),E=bc(i,i.FRAGMENT_SHADER,x);i.attachShader(v,b),i.attachShader(v,E),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(R){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(v)||"",N=i.getShaderInfoLog(b)||"",O=i.getShaderInfoLog(E)||"",L=D.trim(),U=N.trim(),k=O.trim();let W=!0,Y=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,b,E);else{const ot=Tc(i,b,"vertex"),at=Tc(i,E,"fragment");jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+ot+`
`+at)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(U===""||k==="")&&(Y=!1);Y&&(R.diagnostics={runnable:W,programLog:L,vertexShader:{log:U,prefix:f},fragmentShader:{log:k,prefix:m}})}i.deleteShader(b),i.deleteShader(E),M=new Dr(i,v),w=hg(i,v)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(v,tg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}let Tg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cg(t),e.set(t,n)),n}}class Cg{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}}function Rg(r){return r===Ii||r===Fr||r===Or}function Pg(r,t,e,n,i,s){const o=new zh,a=new Ag,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,w,P,R,D,N){const O=R.fog,L=D.geometry,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?R.environment:null,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,W=t.get(M.envMap||U,k),Y=W&&W.mapping===Xr?W.image.height:null,ot=p[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Bt("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const at=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=at!==void 0?at.length:0;let Dt=0;L.morphAttributes.position!==void 0&&(Dt=1),L.morphAttributes.normal!==void 0&&(Dt=2),L.morphAttributes.color!==void 0&&(Dt=3);let kt,Ot,z,j;if(ot){const wt=Tn[ot];kt=wt.vertexShader,Ot=wt.fragmentShader}else{kt=M.vertexShader,Ot=M.fragmentShader;const wt=a.getVertexShaderStage(M),pe=a.getFragmentShaderStage(M);a.update(M,wt,pe),z=wt.id,j=pe.id}const it=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),dt=D.isInstancedMesh===!0,_t=D.isBatchedMesh===!0,Wt=!!M.map,Ut=!!M.matcap,Nt=!!W,Ft=!!M.aoMap,Vt=!!M.lightMap,Jt=!!M.bumpMap&&M.wireframe===!1,se=!!M.normalMap,ee=!!M.displacementMap,Te=!!M.emissiveMap,oe=!!M.metalnessMap,fe=!!M.roughnessMap,G=M.anisotropy>0,Be=M.clearcoat>0,te=M.dispersion>0,I=M.iridescence>0,S=M.sheen>0,V=M.transmission>0,X=G&&!!M.anisotropyMap,$=Be&&!!M.clearcoatMap,lt=Be&&!!M.clearcoatNormalMap,ft=Be&&!!M.clearcoatRoughnessMap,J=I&&!!M.iridescenceMap,nt=I&&!!M.iridescenceThicknessMap,et=S&&!!M.sheenColorMap,ct=S&&!!M.sheenRoughnessMap,rt=!!M.specularMap,ht=!!M.specularColorMap,vt=!!M.specularIntensityMap,St=V&&!!M.transmissionMap,Et=V&&!!M.thicknessMap,B=!!M.gradientMap,ut=!!M.alphaMap,tt=M.alphaTest>0,pt=!!M.alphaHash,mt=!!M.extensions;let st=Pn;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(st=r.toneMapping);const Ct={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:Ot,defines:M.defines,customVertexShaderID:z,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:_t,batchingColor:_t&&D._colorsTexture!==null,instancing:dt,instancingColor:dt&&D.instanceColor!==null,instancingMorph:dt&&D.morphTexture!==null,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:Ut,envMap:Nt,envMapMode:Nt&&W.mapping,envMapCubeUVHeight:Y,aoMap:Ft,lightMap:Vt,bumpMap:Jt,normalMap:se,displacementMap:ee,emissiveMap:Te,normalMapObjectSpace:se&&M.normalMapType===ld,normalMapTangentSpace:se&&M.normalMapType===Aa,packedNormalMap:se&&M.normalMapType===Aa&&Rg(M.normalMap.format),metalnessMap:oe,roughnessMap:fe,anisotropy:G,anisotropyMap:X,clearcoat:Be,clearcoatMap:$,clearcoatNormalMap:lt,clearcoatRoughnessMap:ft,dispersion:te,iridescence:I,iridescenceMap:J,iridescenceThicknessMap:nt,sheen:S,sheenColorMap:et,sheenRoughnessMap:ct,specularMap:rt,specularColorMap:ht,specularIntensityMap:vt,transmission:V,transmissionMap:St,thicknessMap:Et,gradientMap:B,opaque:M.transparent===!1&&M.blending===pi&&M.alphaToCoverage===!1,alphaMap:ut,alphaTest:tt,alphaHash:pt,combine:M.combine,mapUv:Wt&&g(M.map.channel),aoMapUv:Ft&&g(M.aoMap.channel),lightMapUv:Vt&&g(M.lightMap.channel),bumpMapUv:Jt&&g(M.bumpMap.channel),normalMapUv:se&&g(M.normalMap.channel),displacementMapUv:ee&&g(M.displacementMap.channel),emissiveMapUv:Te&&g(M.emissiveMap.channel),metalnessMapUv:oe&&g(M.metalnessMap.channel),roughnessMapUv:fe&&g(M.roughnessMap.channel),anisotropyMapUv:X&&g(M.anisotropyMap.channel),clearcoatMapUv:$&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:et&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ct&&g(M.sheenRoughnessMap.channel),specularMapUv:rt&&g(M.specularMap.channel),specularColorMapUv:ht&&g(M.specularColorMap.channel),specularIntensityMapUv:vt&&g(M.specularIntensityMap.channel),transmissionMapUv:St&&g(M.transmissionMap.channel),thicknessMapUv:Et&&g(M.thicknessMap.channel),alphaMapUv:ut&&g(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(se||G),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Wt||ut),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&se===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Dt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:Te&&M.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Ze,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:mt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&M.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)w.push(P),w.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(m(w,M),_(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function m(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){const w=p[M.type];let P;if(w){const R=Tn[w];P=Zd.clone(R.uniforms)}else P=M.uniforms;return P}function x(M,w){let P=u.get(w);return P!==void 0?++P.usedTimes:(P=new wg(r,w,M,i),l.push(P),u.set(w,P)),P}function b(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:y,acquireProgram:x,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function Ig(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Lg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Ic(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Lc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,v,f,m){let _=r[t];return _===void 0?(_={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:f,group:m},r[t]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=g,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=f,_.group=m),t++,_}function c(h,p,g,v,f,m){const _=a(h,p,g,v,f,m);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):e.push(_)}function l(h,p,g,v,f,m){const _=a(h,p,g,v,f,m);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):e.unshift(_)}function u(h,p,g){e.length>1&&e.sort(h||Lg),n.length>1&&n.sort(p||Ic),i.length>1&&i.sort(p||Ic),g&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let h=t,p=r.length;h<p;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:u}}function Dg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Lc,r.set(n,[o])):i>=s.length?(o=new Lc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ng(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new zt};break;case"SpotLight":e={position:new F,direction:new F,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function Ug(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Fg=0;function Og(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Bg(r){const t=new Ng,e=Ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const i=new F,s=new ge,o=new ge;function a(l){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,_=0,y=0,x=0,b=0,E=0,C=0;l.sort(Og);for(let w=0,P=l.length;w<P;w++){const R=l[w],D=R.color,N=R.intensity,O=R.distance;let L=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ii?L=R.shadow.map.texture:L=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*N,d+=D.g*N,h+=D.b*N;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],N);C++}else if(R.isDirectionalLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,W=e.get(R);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=L,n.directionalShadowMatrix[p]=R.shadow.matrix,_++}n.directional[p]=U,p++}else if(R.isSpotLight){const U=t.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(D).multiplyScalar(N),U.distance=O,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[v]=U;const k=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,k.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[v]=k.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=L,x++}v++}else if(R.isRectAreaLight){const U=t.get(R);U.color.copy(D).multiplyScalar(N),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=U,f++}else if(R.isPointLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const k=R.shadow,W=e.get(R);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=U,g++}else if(R.isHemisphereLight){const U=t.get(R);U.skyColor.copy(R.color).multiplyScalar(N),U.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[m]=U,m++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const M=n.hash;(M.directionalLength!==p||M.pointLength!==g||M.spotLength!==v||M.rectAreaLength!==f||M.hemiLength!==m||M.numDirectionalShadows!==_||M.numPointShadows!==y||M.numSpotShadows!==x||M.numSpotMaps!==b||M.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,M.directionalLength=p,M.pointLength=g,M.spotLength=v,M.rectAreaLength=f,M.hemiLength=m,M.numDirectionalShadows=_,M.numPointShadows=y,M.numSpotShadows=x,M.numSpotMaps=b,M.numLightProbes=C,n.version=Fg++)}function c(l,u){let d=0,h=0,p=0,g=0,v=0;const f=u.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){const y=l[m];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),d++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),o.identity(),s.copy(y.matrixWorld),s.premultiply(f),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(f),v++}}}return{setup:a,setupView:c,state:n}}function Dc(r){const t=new Bg(r),e=[],n=[],i=[];function s(h){d.camera=h,e.length=0,n.length=0,i.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){i.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function zg(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Dc(r),t.set(i,[a])):s>=o.length?(a=new Dc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kg=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Hg=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Nc=new ge,xs=new F,Io=new F;function Wg(r,t,e){let n=new Ja;const i=new Kt,s=new Kt,o=new _e,a=new tf,c=new ef,l={},u=e.maxTextureSize,d={[mi]:Ze,[Ze]:mi,[ln]:ln},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Vg,fragmentShader:Gg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qe(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let m=this.type;this.render=function(E,C,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===yh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ar);const w=r.getRenderTarget(),P=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Yn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=m!==this.type;N&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=E.length;O<L;O++){const U=E[O],k=U.shadow;if(k===void 0){Bt("WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const W=k.getFrameExtents();i.multiply(W),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,k.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===bs){if(U.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new In(i.x,i.y,{format:Ii,type:Zn,minFilter:we,magFilter:we,generateMipmaps:!1}),k.map.texture.name=U.name+".shadowMap",k.map.depthTexture=new ss(i.x,i.y,Cn),k.map.depthTexture.name=U.name+".shadowMapDepth",k.map.depthTexture.format=$n,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fe,k.map.depthTexture.magFilter=Fe}else U.isPointLight?(k.map=new Jh(i.x),k.map.depthTexture=new Xd(i.x,Ln)):(k.map=new In(i.x,i.y),k.map.depthTexture=new ss(i.x,i.y,Ln)),k.map.depthTexture.name=U.name+".shadowMap",k.map.depthTexture.format=$n,this.type===Ar?(k.map.depthTexture.compareFunction=Y?Ka:Ya,k.map.depthTexture.minFilter=we,k.map.depthTexture.magFilter=we):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fe,k.map.depthTexture.magFilter=Fe);k.camera.updateProjectionMatrix()}const ot=k.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<ot;at++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,at),r.clear();else{at===0&&(r.setRenderTarget(k.map),r.clear());const Q=k.getViewport(at);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),D.viewport(o)}if(U.isPointLight){const Q=k.camera,Dt=k.matrix,kt=U.distance||Q.far;kt!==Q.far&&(Q.far=kt,Q.updateProjectionMatrix()),xs.setFromMatrixPosition(U.matrixWorld),Q.position.copy(xs),Io.copy(Q.position),Io.add(kg[at]),Q.up.copy(Hg[at]),Q.lookAt(Io),Q.updateMatrixWorld(),Dt.makeTranslation(-xs.x,-xs.y,-xs.z),Nc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Nc,Q.coordinateSystem,Q.reversedDepth)}else k.updateMatrices(U);n=k.getFrustum(),x(C,M,k.camera,U,this.type)}k.isPointLightShadow!==!0&&this.type===bs&&_(k,M),k.needsUpdate=!1}m=this.type,f.needsUpdate=!1,r.setRenderTarget(w,P,R)};function _(E,C){const M=t.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new In(i.x,i.y,{format:Ii,type:Zn})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,M,h,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,M,p,v,null)}function y(E,C,M,w){let P=null;const R=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)P=R;else if(P=M.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,N=C.uuid;let O=l[D];O===void 0&&(O={},l[D]=O);let L=O[N];L===void 0&&(L=P.clone(),O[N]=L,C.addEventListener("dispose",b)),P=L}if(P.visible=C.visible,P.wireframe=C.wireframe,w===bs?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=r.properties.get(P);D.light=M}return P}function x(E,C,M,w,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===bs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const N=t.update(E),O=E.material;if(Array.isArray(O)){const L=N.groups;for(let U=0,k=L.length;U<k;U++){const W=L[U],Y=O[W.materialIndex];if(Y&&Y.visible){const ot=y(E,Y,w,P);E.onBeforeShadow(r,E,C,M,N,ot,W),r.renderBufferDirect(M,null,N,ot,E,W),E.onAfterShadow(r,E,C,M,N,ot,W)}}}else if(O.visible){const L=y(E,O,w,P);E.onBeforeShadow(r,E,C,M,N,L,null),r.renderBufferDirect(M,null,N,L,E,null),E.onAfterShadow(r,E,C,M,N,L,null)}}const D=E.children;for(let N=0,O=D.length;N<O;N++)x(D[N],C,M,w,P)}function b(E){E.target.removeEventListener("dispose",b);for(const M in l){const w=l[M],P=E.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function Xg(r,t){function e(){let B=!1;const ut=new _e;let tt=null;const pt=new _e(0,0,0,0);return{setMask:function(mt){tt!==mt&&!B&&(r.colorMask(mt,mt,mt,mt),tt=mt)},setLocked:function(mt){B=mt},setClear:function(mt,st,Ct,wt,pe){pe===!0&&(mt*=wt,st*=wt,Ct*=wt),ut.set(mt,st,Ct,wt),pt.equals(ut)===!1&&(r.clearColor(mt,st,Ct,wt),pt.copy(ut))},reset:function(){B=!1,tt=null,pt.set(-1,0,0,0)}}}function n(){let B=!1,ut=!1,tt=null,pt=null,mt=null;return{setReversed:function(st){if(ut!==st){const Ct=t.get("EXT_clip_control");st?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ut=st;const wt=mt;mt=null,this.setClear(wt)}},getReversed:function(){return ut},setTest:function(st){st?it(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(st){tt!==st&&!B&&(r.depthMask(st),tt=st)},setFunc:function(st){if(ut&&(st=vd[st]),pt!==st){switch(st){case ko:r.depthFunc(r.NEVER);break;case Ho:r.depthFunc(r.ALWAYS);break;case Wo:r.depthFunc(r.LESS);break;case ns:r.depthFunc(r.LEQUAL);break;case Xo:r.depthFunc(r.EQUAL);break;case qo:r.depthFunc(r.GEQUAL);break;case Yo:r.depthFunc(r.GREATER);break;case Ko:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=st}},setLocked:function(st){B=st},setClear:function(st){mt!==st&&(mt=st,ut&&(st=1-st),r.clearDepth(st))},reset:function(){B=!1,tt=null,pt=null,mt=null,ut=!1}}}function i(){let B=!1,ut=null,tt=null,pt=null,mt=null,st=null,Ct=null,wt=null,pe=null;return{setTest:function(ce){B||(ce?it(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!B&&(r.stencilMask(ce),ut=ce)},setFunc:function(ce,vn,xn){(tt!==ce||pt!==vn||mt!==xn)&&(r.stencilFunc(ce,vn,xn),tt=ce,pt=vn,mt=xn)},setOp:function(ce,vn,xn){(st!==ce||Ct!==vn||wt!==xn)&&(r.stencilOp(ce,vn,xn),st=ce,Ct=vn,wt=xn)},setLocked:function(ce){B=ce},setClear:function(ce){pe!==ce&&(r.clearStencil(ce),pe=ce)},reset:function(){B=!1,ut=null,tt=null,pt=null,mt=null,st=null,Ct=null,wt=null,pe=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},d={},h={},p=new WeakMap,g=[],v=null,f=!1,m=null,_=null,y=null,x=null,b=null,E=null,C=null,M=new zt(0,0,0),w=0,P=!1,R=null,D=null,N=null,O=null,L=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=W>=2);let ot=null,at={};const Q=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),kt=new _e().fromArray(Q),Ot=new _e().fromArray(Dt);function z(B,ut,tt,pt){const mt=new Uint8Array(4),st=r.createTexture();r.bindTexture(B,st),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<tt;Ct++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(ut+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return st}const j={};j[r.TEXTURE_2D]=z(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(r.DEPTH_TEST),o.setFunc(ns),Jt(!1),se(Cl),it(r.CULL_FACE),Ft(Yn);function it(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function gt(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function dt(B,ut){return h[B]!==ut?(r.bindFramebuffer(B,ut),h[B]=ut,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ut),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function _t(B,ut){let tt=g,pt=!1;if(B){tt=p.get(ut),tt===void 0&&(tt=[],p.set(ut,tt));const mt=B.textures;if(tt.length!==mt.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let st=0,Ct=mt.length;st<Ct;st++)tt[st]=r.COLOR_ATTACHMENT0+st;tt.length=mt.length,pt=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,pt=!0);pt&&r.drawBuffers(tt)}function Wt(B){return v!==B?(r.useProgram(B),v=B,!0):!1}const Ut={[wi]:r.FUNC_ADD,[Gu]:r.FUNC_SUBTRACT,[ku]:r.FUNC_REVERSE_SUBTRACT};Ut[Hu]=r.MIN,Ut[Wu]=r.MAX;const Nt={[Xu]:r.ZERO,[qu]:r.ONE,[Yu]:r.SRC_COLOR,[Vo]:r.SRC_ALPHA,[ju]:r.SRC_ALPHA_SATURATE,[Ju]:r.DST_COLOR,[Zu]:r.DST_ALPHA,[Ku]:r.ONE_MINUS_SRC_COLOR,[Go]:r.ONE_MINUS_SRC_ALPHA,[Qu]:r.ONE_MINUS_DST_COLOR,[$u]:r.ONE_MINUS_DST_ALPHA,[td]:r.CONSTANT_COLOR,[ed]:r.ONE_MINUS_CONSTANT_COLOR,[nd]:r.CONSTANT_ALPHA,[id]:r.ONE_MINUS_CONSTANT_ALPHA};function Ft(B,ut,tt,pt,mt,st,Ct,wt,pe,ce){if(B===Yn){f===!0&&(gt(r.BLEND),f=!1);return}if(f===!1&&(it(r.BLEND),f=!0),B!==Vu){if(B!==m||ce!==P){if((_!==wi||b!==wi)&&(r.blendEquation(r.FUNC_ADD),_=wi,b=wi),ce)switch(B){case pi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cs:r.blendFunc(r.ONE,r.ONE);break;case Rl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:jt("WebGLState: Invalid blending: ",B);break}else switch(B){case pi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Rl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",B);break}y=null,x=null,E=null,C=null,M.set(0,0,0),w=0,m=B,P=ce}return}mt=mt||ut,st=st||tt,Ct=Ct||pt,(ut!==_||mt!==b)&&(r.blendEquationSeparate(Ut[ut],Ut[mt]),_=ut,b=mt),(tt!==y||pt!==x||st!==E||Ct!==C)&&(r.blendFuncSeparate(Nt[tt],Nt[pt],Nt[st],Nt[Ct]),y=tt,x=pt,E=st,C=Ct),(wt.equals(M)===!1||pe!==w)&&(r.blendColor(wt.r,wt.g,wt.b,pe),M.copy(wt),w=pe),m=B,P=!1}function Vt(B,ut){B.side===ln?gt(r.CULL_FACE):it(r.CULL_FACE);let tt=B.side===Ze;ut&&(tt=!tt),Jt(tt),B.blending===pi&&B.transparent===!1?Ft(Yn):Ft(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const pt=B.stencilWrite;a.setTest(pt),pt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Te(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(B){R!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),R=B)}function se(B){B!==Bu?(it(r.CULL_FACE),B!==D&&(B===Cl?r.cullFace(r.BACK):B===zu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),D=B}function ee(B){B!==N&&(k&&r.lineWidth(B),N=B)}function Te(B,ut,tt){B?(it(r.POLYGON_OFFSET_FILL),(O!==ut||L!==tt)&&(O=ut,L=tt,o.getReversed()&&(ut=-ut),r.polygonOffset(ut,tt))):gt(r.POLYGON_OFFSET_FILL)}function oe(B){B?it(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function fe(B){B===void 0&&(B=r.TEXTURE0+U-1),ot!==B&&(r.activeTexture(B),ot=B)}function G(B,ut,tt){tt===void 0&&(ot===null?tt=r.TEXTURE0+U-1:tt=ot);let pt=at[tt];pt===void 0&&(pt={type:void 0,texture:void 0},at[tt]=pt),(pt.type!==B||pt.texture!==ut)&&(ot!==tt&&(r.activeTexture(tt),ot=tt),r.bindTexture(B,ut||j[B]),pt.type=B,pt.texture=ut)}function Be(){const B=at[ot];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function te(){try{r.compressedTexImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function S(){try{r.texSubImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function V(){try{r.texSubImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function lt(){try{r.texStorage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function ft(){try{r.texStorage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function J(){try{r.texImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function nt(){try{r.texImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function et(B){return d[B]!==void 0?d[B]:r.getParameter(B)}function ct(B,ut){d[B]!==ut&&(r.pixelStorei(B,ut),d[B]=ut)}function rt(B){kt.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),kt.copy(B))}function ht(B){Ot.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Ot.copy(B))}function vt(B,ut){let tt=l.get(ut);tt===void 0&&(tt=new WeakMap,l.set(ut,tt));let pt=tt.get(B);pt===void 0&&(pt=r.getUniformBlockIndex(ut,B.name),tt.set(B,pt))}function St(B,ut){const pt=l.get(ut).get(B);c.get(ut)!==pt&&(r.uniformBlockBinding(ut,pt,B.__bindingPointIndex),c.set(ut,pt))}function Et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},ot=null,at={},h={},p=new WeakMap,g=[],v=null,f=!1,m=null,_=null,y=null,x=null,b=null,E=null,C=null,M=new zt(0,0,0),w=0,P=!1,R=null,D=null,N=null,O=null,L=null,kt.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:gt,bindFramebuffer:dt,drawBuffers:_t,useProgram:Wt,setBlending:Ft,setMaterial:Vt,setFlipSided:Jt,setCullFace:se,setLineWidth:ee,setPolygonOffset:Te,setScissorTest:oe,activeTexture:fe,bindTexture:G,unbindTexture:Be,compressedTexImage2D:te,compressedTexImage3D:I,texImage2D:J,texImage3D:nt,pixelStorei:ct,getParameter:et,updateUBOMapping:vt,uniformBlockBinding:St,texStorage2D:lt,texStorage3D:ft,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:rt,viewport:ht,reset:Et}}function qg(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,S){return g?new OffscreenCanvas(I,S):Vr("canvas")}function f(I,S,V){let X=1;const $=te(I);if(($.width>V||$.height>V)&&(X=V/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const lt=Math.floor(X*$.width),ft=Math.floor(X*$.height);h===void 0&&(h=v(lt,ft));const J=S?v(lt,ft):h;return J.width=lt,J.height=ft,J.getContext("2d").drawImage(I,0,0,lt,ft),Bt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+lt+"x"+ft+")."),J}else return"data"in I&&Bt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function m(I){return I.generateMipmaps}function _(I){r.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(I,S,V,X,$,lt=!1){if(I!==null){if(r[I]!==void 0)return r[I];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ft;X&&(ft=t.get("EXT_texture_norm16"),ft||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===r.RED&&(V===r.FLOAT&&(J=r.R32F),V===r.HALF_FLOAT&&(J=r.R16F),V===r.UNSIGNED_BYTE&&(J=r.R8),V===r.UNSIGNED_SHORT&&ft&&(J=ft.R16_EXT),V===r.SHORT&&ft&&(J=ft.R16_SNORM_EXT)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(J=r.R8UI),V===r.UNSIGNED_SHORT&&(J=r.R16UI),V===r.UNSIGNED_INT&&(J=r.R32UI),V===r.BYTE&&(J=r.R8I),V===r.SHORT&&(J=r.R16I),V===r.INT&&(J=r.R32I)),S===r.RG&&(V===r.FLOAT&&(J=r.RG32F),V===r.HALF_FLOAT&&(J=r.RG16F),V===r.UNSIGNED_BYTE&&(J=r.RG8),V===r.UNSIGNED_SHORT&&ft&&(J=ft.RG16_EXT),V===r.SHORT&&ft&&(J=ft.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(J=r.RG8UI),V===r.UNSIGNED_SHORT&&(J=r.RG16UI),V===r.UNSIGNED_INT&&(J=r.RG32UI),V===r.BYTE&&(J=r.RG8I),V===r.SHORT&&(J=r.RG16I),V===r.INT&&(J=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(J=r.RGB8UI),V===r.UNSIGNED_SHORT&&(J=r.RGB16UI),V===r.UNSIGNED_INT&&(J=r.RGB32UI),V===r.BYTE&&(J=r.RGB8I),V===r.SHORT&&(J=r.RGB16I),V===r.INT&&(J=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),V===r.UNSIGNED_INT&&(J=r.RGBA32UI),V===r.BYTE&&(J=r.RGBA8I),V===r.SHORT&&(J=r.RGBA16I),V===r.INT&&(J=r.RGBA32I)),S===r.RGB&&(V===r.UNSIGNED_SHORT&&ft&&(J=ft.RGB16_EXT),V===r.SHORT&&ft&&(J=ft.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),S===r.RGBA){const nt=lt?zr:Zt.getTransfer($);V===r.FLOAT&&(J=r.RGBA32F),V===r.HALF_FLOAT&&(J=r.RGBA16F),V===r.UNSIGNED_BYTE&&(J=nt===ie?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ft&&(J=ft.RGBA16_EXT),V===r.SHORT&&ft&&(J=ft.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(I,S){let V;return I?S===null||S===Ln||S===Ls?V=r.DEPTH24_STENCIL8:S===Cn?V=r.DEPTH32F_STENCIL8:S===Is&&(V=r.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ln||S===Ls?V=r.DEPTH_COMPONENT24:S===Cn?V=r.DEPTH_COMPONENT32F:S===Is&&(V=r.DEPTH_COMPONENT16),V}function E(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fe&&I.minFilter!==we?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function C(I){const S=I.target;S.removeEventListener("dispose",C),w(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function M(I){const S=I.target;S.removeEventListener("dispose",M),R(S)}function w(I){const S=n.get(I);if(S.__webglInit===void 0)return;const V=I.source,X=p.get(V);if(X){const $=X[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(I),Object.keys(X).length===0&&p.delete(V)}n.remove(I)}function P(I){const S=n.get(I);r.deleteTexture(S.__webglTexture);const V=I.source,X=p.get(V);delete X[S.__cacheKey],o.memory.textures--}function R(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let $=0;$<S.__webglFramebuffer[X].length;$++)r.deleteFramebuffer(S.__webglFramebuffer[X][$]);else r.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)r.deleteFramebuffer(S.__webglFramebuffer[X]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=I.textures;for(let X=0,$=V.length;X<$;X++){const lt=n.get(V[X]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(V[X])}n.remove(I)}let D=0;function N(){D=0}function O(){return D}function L(I){D=I}function U(){const I=D;return I>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),D+=1,I}function k(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function W(I,S){const V=n.get(I);if(I.isVideoTexture&&G(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){const X=I.image;if(X===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(V,I,S);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function Y(I,S){const V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){gt(V,I,S);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function ot(I,S){const V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){gt(V,I,S);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function at(I,S){const V=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){dt(V,I,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const Q={[Zo]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[$o]:r.MIRRORED_REPEAT},Dt={[Fe]:r.NEAREST,[od]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[we]:r.LINEAR,[Qr]:r.LINEAR_MIPMAP_NEAREST,[mn]:r.LINEAR_MIPMAP_LINEAR},kt={[cd]:r.NEVER,[pd]:r.ALWAYS,[hd]:r.LESS,[Ya]:r.LEQUAL,[ud]:r.EQUAL,[Ka]:r.GEQUAL,[dd]:r.GREATER,[fd]:r.NOTEQUAL};function Ot(I,S){if(S.type===Cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===we||S.magFilter===Qr||S.magFilter===ks||S.magFilter===mn||S.minFilter===we||S.minFilter===Qr||S.minFilter===ks||S.minFilter===mn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Q[S.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Q[S.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Q[S.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Dt[S.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Dt[S.minFilter]),S.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,kt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fe||S.minFilter!==ks&&S.minFilter!==mn||S.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function z(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",C));const X=S.source;let $=p.get(X);$===void 0&&($={},p.set(X,$));const lt=k(S);if(lt!==I.__cacheKey){$[lt]===void 0&&($[lt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),$[lt].usedTimes++;const ft=$[I.__cacheKey];ft!==void 0&&($[I.__cacheKey].usedTimes--,ft.usedTimes===0&&P(S)),I.__cacheKey=lt,I.__webglTexture=$[lt].texture}return V}function j(I,S,V){return Math.floor(Math.floor(I/V)/S)}function it(I,S,V,X){const lt=I.updateRanges;if(lt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,X,S.data);else{lt.sort((ct,rt)=>ct.start-rt.start);let ft=0;for(let ct=1;ct<lt.length;ct++){const rt=lt[ft],ht=lt[ct],vt=rt.start+rt.count,St=j(ht.start,S.width,4),Et=j(rt.start,S.width,4);ht.start<=vt+1&&St===Et&&j(ht.start+ht.count-1,S.width,4)===St?rt.count=Math.max(rt.count,ht.start+ht.count-rt.start):(++ft,lt[ft]=ht)}lt.length=ft+1;const J=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),et=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ct=0,rt=lt.length;ct<rt;ct++){const ht=lt[ct],vt=Math.floor(ht.start/4),St=Math.ceil(ht.count/4),Et=vt%S.width,B=Math.floor(vt/S.width),ut=St,tt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(r.UNPACK_SKIP_ROWS,B),e.texSubImage2D(r.TEXTURE_2D,0,Et,B,ut,tt,V,X,S.data)}I.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,J),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function gt(I,S,V){let X=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=r.TEXTURE_3D);const $=z(I,S),lt=S.source;e.bindTexture(X,I.__webglTexture,r.TEXTURE0+V);const ft=n.get(lt);if(lt.version!==ft.__version||$===!0){if(e.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const tt=Zt.getPrimaries(Zt.workingColorSpace),pt=S.colorSpace===li?null:Zt.getPrimaries(S.colorSpace),mt=S.colorSpace===li||tt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let nt=f(S.image,!1,i.maxTextureSize);nt=Be(S,nt);const et=s.convert(S.format,S.colorSpace),ct=s.convert(S.type);let rt=x(S.internalFormat,et,ct,S.normalized,S.colorSpace,S.isVideoTexture);Ot(X,S);let ht;const vt=S.mipmaps,St=S.isVideoTexture!==!0,Et=ft.__version===void 0||$===!0,B=lt.dataReady,ut=E(S,nt);if(S.isDepthTexture)rt=b(S.format===Ci,S.type),Et&&(St?e.texStorage2D(r.TEXTURE_2D,1,rt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,rt,nt.width,nt.height,0,et,ct,null));else if(S.isDataTexture)if(vt.length>0){St&&Et&&e.texStorage2D(r.TEXTURE_2D,ut,rt,vt[0].width,vt[0].height);for(let tt=0,pt=vt.length;tt<pt;tt++)ht=vt[tt],St?B&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ht.width,ht.height,et,ct,ht.data):e.texImage2D(r.TEXTURE_2D,tt,rt,ht.width,ht.height,0,et,ct,ht.data);S.generateMipmaps=!1}else St?(Et&&e.texStorage2D(r.TEXTURE_2D,ut,rt,nt.width,nt.height),B&&it(S,nt,et,ct)):e.texImage2D(r.TEXTURE_2D,0,rt,nt.width,nt.height,0,et,ct,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){St&&Et&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,rt,vt[0].width,vt[0].height,nt.depth);for(let tt=0,pt=vt.length;tt<pt;tt++)if(ht=vt[tt],S.format!==gn)if(et!==null)if(St){if(B)if(S.layerUpdates.size>0){const mt=uc(ht.width,ht.height,S.format,S.type);for(const st of S.layerUpdates){const Ct=ht.data.subarray(st*mt/ht.data.BYTES_PER_ELEMENT,(st+1)*mt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,st,ht.width,ht.height,1,et,Ct)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,nt.depth,et,ht.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,rt,ht.width,ht.height,nt.depth,0,ht.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?B&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,nt.depth,et,ct,ht.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,rt,ht.width,ht.height,nt.depth,0,et,ct,ht.data)}else{St&&Et&&e.texStorage2D(r.TEXTURE_2D,ut,rt,vt[0].width,vt[0].height);for(let tt=0,pt=vt.length;tt<pt;tt++)ht=vt[tt],S.format!==gn?et!==null?St?B&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,ht.width,ht.height,et,ht.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,rt,ht.width,ht.height,0,ht.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?B&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ht.width,ht.height,et,ct,ht.data):e.texImage2D(r.TEXTURE_2D,tt,rt,ht.width,ht.height,0,et,ct,ht.data)}else if(S.isDataArrayTexture)if(St){if(Et&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,rt,nt.width,nt.height,nt.depth),B)if(S.layerUpdates.size>0){const tt=uc(nt.width,nt.height,S.format,S.type);for(const pt of S.layerUpdates){const mt=nt.data.subarray(pt*tt/nt.data.BYTES_PER_ELEMENT,(pt+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,nt.width,nt.height,1,et,ct,mt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,et,ct,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,rt,nt.width,nt.height,nt.depth,0,et,ct,nt.data);else if(S.isData3DTexture)St?(Et&&e.texStorage3D(r.TEXTURE_3D,ut,rt,nt.width,nt.height,nt.depth),B&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,et,ct,nt.data)):e.texImage3D(r.TEXTURE_3D,0,rt,nt.width,nt.height,nt.depth,0,et,ct,nt.data);else if(S.isFramebufferTexture){if(Et)if(St)e.texStorage2D(r.TEXTURE_2D,ut,rt,nt.width,nt.height);else{let tt=nt.width,pt=nt.height;for(let mt=0;mt<ut;mt++)e.texImage2D(r.TEXTURE_2D,mt,rt,tt,pt,0,et,ct,null),tt>>=1,pt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const tt=r.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),d.add(S),tt.onpaint=pt=>{const mt=pt.changedElements;for(const st of d)mt.includes(st.image)&&(st.needsUpdate=!0)},tt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{const mt=r.RGBA,st=r.RGBA,Ct=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,mt,st,Ct,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(vt.length>0){if(St&&Et){const tt=te(vt[0]);e.texStorage2D(r.TEXTURE_2D,ut,rt,tt.width,tt.height)}for(let tt=0,pt=vt.length;tt<pt;tt++)ht=vt[tt],St?B&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,et,ct,ht):e.texImage2D(r.TEXTURE_2D,tt,rt,et,ct,ht);S.generateMipmaps=!1}else if(St){if(Et){const tt=te(nt);e.texStorage2D(r.TEXTURE_2D,ut,rt,tt.width,tt.height)}B&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,et,ct,nt)}else e.texImage2D(r.TEXTURE_2D,0,rt,et,ct,nt);m(S)&&_(X),ft.__version=lt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function dt(I,S,V){if(S.image.length!==6)return;const X=z(I,S),$=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+V);const lt=n.get($);if($.version!==lt.__version||X===!0){e.activeTexture(r.TEXTURE0+V);const ft=Zt.getPrimaries(Zt.workingColorSpace),J=S.colorSpace===li?null:Zt.getPrimaries(S.colorSpace),nt=S.colorSpace===li||ft===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const et=S.isCompressedTexture||S.image[0].isCompressedTexture,ct=S.image[0]&&S.image[0].isDataTexture,rt=[];for(let st=0;st<6;st++)!et&&!ct?rt[st]=f(S.image[st],!0,i.maxCubemapSize):rt[st]=ct?S.image[st].image:S.image[st],rt[st]=Be(S,rt[st]);const ht=rt[0],vt=s.convert(S.format,S.colorSpace),St=s.convert(S.type),Et=x(S.internalFormat,vt,St,S.normalized,S.colorSpace),B=S.isVideoTexture!==!0,ut=lt.__version===void 0||X===!0,tt=$.dataReady;let pt=E(S,ht);Ot(r.TEXTURE_CUBE_MAP,S);let mt;if(et){B&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Et,ht.width,ht.height);for(let st=0;st<6;st++){mt=rt[st].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const wt=mt[Ct];S.format!==gn?vt!==null?B?tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,wt.width,wt.height,vt,wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,Et,wt.width,wt.height,0,wt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,wt.width,wt.height,vt,St,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,Et,wt.width,wt.height,0,vt,St,wt.data)}}}else{if(mt=S.mipmaps,B&&ut){mt.length>0&&pt++;const st=te(rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Et,st.width,st.height)}for(let st=0;st<6;st++)if(ct){B?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,rt[st].width,rt[st].height,vt,St,rt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Et,rt[st].width,rt[st].height,0,vt,St,rt[st].data);for(let Ct=0;Ct<mt.length;Ct++){const pe=mt[Ct].image[st].image;B?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,pe.width,pe.height,vt,St,pe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,Et,pe.width,pe.height,0,vt,St,pe.data)}}else{B?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt,St,rt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Et,vt,St,rt[st]);for(let Ct=0;Ct<mt.length;Ct++){const wt=mt[Ct];B?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,vt,St,wt.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,Et,vt,St,wt.image[st])}}}m(S)&&_(r.TEXTURE_CUBE_MAP),lt.__version=$.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function _t(I,S,V,X,$,lt){const ft=s.convert(V.format,V.colorSpace),J=s.convert(V.type),nt=x(V.internalFormat,ft,J,V.normalized,V.colorSpace),et=n.get(S),ct=n.get(V);if(ct.__renderTarget=S,!et.__hasExternalTextures){const rt=Math.max(1,S.width>>lt),ht=Math.max(1,S.height>>lt);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,lt,nt,rt,ht,S.depth,0,ft,J,null):e.texImage2D($,lt,nt,rt,ht,0,ft,J,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),fe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,$,ct.__webglTexture,0,oe(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,$,ct.__webglTexture,lt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(I,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,I),S.depthBuffer){const X=S.depthTexture,$=X&&X.isDepthTexture?X.type:null,lt=b(S.stencilBuffer,$),ft=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(S),lt,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(S),lt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,lt,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,I)}else{const X=S.textures;for(let $=0;$<X.length;$++){const lt=X[$],ft=s.convert(lt.format,lt.colorSpace),J=s.convert(lt.type),nt=x(lt.internalFormat,ft,J,lt.normalized,lt.colorSpace);fe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe(S),nt,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe(S),nt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,nt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(I,S,V){const X=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,S.depthTexture);const et=s.convert(S.depthTexture.format),ct=s.convert(S.depthTexture.type);let rt;S.depthTexture.format===$n?rt=r.DEPTH_COMPONENT24:S.depthTexture.format===Ci&&(rt=r.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,rt,S.width,S.height,0,et,ct,null)}}else W(S.depthTexture,0);const lt=$.__webglTexture,ft=oe(S),J=X?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,nt=S.depthTexture.format===Ci?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===$n)fe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,J,lt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,nt,J,lt,0);else if(S.depthTexture.format===Ci)fe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,J,lt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,nt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(I){const S=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const X=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=X}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)Ut(S.__webglFramebuffer[X],I,X);else{const X=I.texture.mipmaps;X&&X.length>0?Ut(S.__webglFramebuffer[0],I,0):Ut(S.__webglFramebuffer,I,0)}else if(V){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=r.createRenderbuffer(),Wt(S.__webglDepthbuffer[X],I,!1);else{const $=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,lt)}}else{const X=I.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Wt(S.__webglDepthbuffer,I,!1);else{const $=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,lt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(I,S,V){const X=n.get(I);S!==void 0&&_t(X.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Nt(I)}function Vt(I){const S=I.texture,V=n.get(I),X=n.get(S);I.addEventListener("dispose",M);const $=I.textures,lt=I.isWebGLCubeRenderTarget===!0,ft=$.length>1;if(ft||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=S.version,o.memory.textures++),lt){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let nt=0;nt<S.mipmaps.length;nt++)V.__webglFramebuffer[J][nt]=r.createFramebuffer()}else V.__webglFramebuffer[J]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)V.__webglFramebuffer[J]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ft)for(let J=0,nt=$.length;J<nt;J++){const et=n.get($[J]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&fe(I)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const nt=$[J];V.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[J]);const et=s.convert(nt.format,nt.colorSpace),ct=s.convert(nt.type),rt=x(nt.internalFormat,et,ct,nt.normalized,nt.colorSpace,I.isXRRenderTarget===!0),ht=oe(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,rt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,V.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Wt(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)_t(V.__webglFramebuffer[J][nt],I,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else _t(V.__webglFramebuffer[J],I,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(S)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let J=0,nt=$.length;J<nt;J++){const et=$[J],ct=n.get(et);let rt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,ct.__webglTexture),Ot(rt,et),_t(V.__webglFramebuffer,I,et,r.COLOR_ATTACHMENT0+J,rt,0),m(et)&&_(rt)}e.unbindTexture()}else{let J=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,X.__webglTexture),Ot(J,S),S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)_t(V.__webglFramebuffer[nt],I,S,r.COLOR_ATTACHMENT0,J,nt);else _t(V.__webglFramebuffer,I,S,r.COLOR_ATTACHMENT0,J,0);m(S)&&_(J),e.unbindTexture()}I.depthBuffer&&Nt(I)}function Jt(I){const S=I.textures;for(let V=0,X=S.length;V<X;V++){const $=S[V];if(m($)){const lt=y(I),ft=n.get($).__webglTexture;e.bindTexture(lt,ft),_(lt),e.unbindTexture()}}}const se=[],ee=[];function Te(I){if(I.samples>0){if(fe(I)===!1){const S=I.textures,V=I.width,X=I.height;let $=r.COLOR_BUFFER_BIT;const lt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=n.get(I),J=S.length>1;if(J)for(let et=0;et<S.length;et++)e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const nt=I.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let et=0;et<S.length;et++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ft.__webglColorRenderbuffer[et]);const ct=n.get(S[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,V,X,0,0,V,X,$,r.NEAREST),c===!0&&(se.length=0,ee.length=0,se.push(r.COLOR_ATTACHMENT0+et),I.depthBuffer&&I.resolveDepthBuffer===!1&&(se.push(lt),ee.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let et=0;et<S.length;et++){e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,ft.__webglColorRenderbuffer[et]);const ct=n.get(S[et]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,ct,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const S=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function oe(I){return Math.min(i.maxSamples,I.samples)}function fe(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(I){const S=o.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Be(I,S){const V=I.colorSpace,X=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Br&&V!==li&&(Zt.getTransfer(V)===ie?(X!==gn||$!==en)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",V)),S}function te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=ot,this.setTextureCube=at,this.rebindTextures=Ft,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Yg(r,t){function e(n,i=li){let s;const o=Zt.getTransfer(i);if(n===en)return r.UNSIGNED_BYTE;if(n===ka)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return r.BYTE;if(n===Ih)return r.SHORT;if(n===Is)return r.UNSIGNED_SHORT;if(n===Ga)return r.INT;if(n===Ln)return r.UNSIGNED_INT;if(n===Cn)return r.FLOAT;if(n===Zn)return r.HALF_FLOAT;if(n===Nh)return r.ALPHA;if(n===Uh)return r.RGB;if(n===gn)return r.RGBA;if(n===$n)return r.DEPTH_COMPONENT;if(n===Ci)return r.DEPTH_STENCIL;if(n===Fh)return r.RED;if(n===Wa)return r.RED_INTEGER;if(n===Ii)return r.RG;if(n===Xa)return r.RG_INTEGER;if(n===qa)return r.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Ir)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Qo||n===jo||n===ta)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===Fr||n===oa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ea||n===na)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ia)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===sa)return s.COMPRESSED_R11_EAC;if(n===ra)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return s.COMPRESSED_RG11_EAC;if(n===oa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===aa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===la)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ca)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ga)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_a)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Sa||n===Ea)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ya)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===wa||n===Or||n===Ta)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:Kg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qe(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jg extends Li{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",f=new $g,m={},_=e.getContextAttributes();let y=null,x=null;const b=[],E=[],C=new Kt;let M=null;const w=new tn;w.viewport=new _e;const P=new tn;P.viewport=new _e;const R=[w,P],D=new af;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=b[z];return j===void 0&&(j=new ro,b[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=b[z];return j===void 0&&(j=new ro,b[z]=j),j.getGripSpace()},this.getHand=function(z){let j=b[z];return j===void 0&&(j=new ro,b[z]=j),j.getHandSpace()};function L(z){const j=E.indexOf(z.inputSource);if(j===-1)return;const it=b[j];it!==void 0&&(it.update(z.inputSource,z.frame,l||o),it.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",k);for(let z=0;z<b.length;z++){const j=E[z];j!==null&&(E[z]=null,b[z].disconnect(j))}N=null,O=null,f.reset();for(const z in m)delete m[z];t.setRenderTarget(y),p=null,h=null,d=null,i=null,x=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",U),i.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,gt=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?Ci:$n,gt=_.stencil?Ls:Ln);const _t={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(_t),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new In(h.textureWidth,h.textureHeight,{format:gn,type:en,depthTexture:new ss(h.textureWidth,h.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const it={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new In(p.framebufferWidth,p.framebufferHeight,{format:gn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function k(z){for(let j=0;j<z.removed.length;j++){const it=z.removed[j],gt=E.indexOf(it);gt>=0&&(E[gt]=null,b[gt].disconnect(it))}for(let j=0;j<z.added.length;j++){const it=z.added[j];let gt=E.indexOf(it);if(gt===-1){for(let _t=0;_t<b.length;_t++)if(_t>=E.length){E.push(it),gt=_t;break}else if(E[_t]===null){E[_t]=it,gt=_t;break}if(gt===-1)break}const dt=b[gt];dt&&dt.connect(it)}}const W=new F,Y=new F;function ot(z,j,it){W.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(it.matrixWorld);const gt=W.distanceTo(Y),dt=j.projectionMatrix.elements,_t=it.projectionMatrix.elements,Wt=dt[14]/(dt[10]-1),Ut=dt[14]/(dt[10]+1),Nt=(dt[9]+1)/dt[5],Ft=(dt[9]-1)/dt[5],Vt=(dt[8]-1)/dt[0],Jt=(_t[8]+1)/_t[0],se=Wt*Vt,ee=Wt*Jt,Te=gt/(-Vt+Jt),oe=Te*-Vt;if(j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(oe),z.translateZ(Te),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),dt[10]===-1)z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const fe=Wt+Te,G=Ut+Te,Be=se-oe,te=ee+(gt-oe),I=Nt*Ut/G*fe,S=Ft*Ut/G*fe;z.projectionMatrix.makePerspective(Be,te,I,S,fe,G),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function at(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let j=z.near,it=z.far;f.texture!==null&&(f.depthNear>0&&(j=f.depthNear),f.depthFar>0&&(it=f.depthFar)),D.near=P.near=w.near=j,D.far=P.far=w.far=it,(N!==D.near||O!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,O=D.far),D.layers.mask=z.layers.mask|6,w.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const gt=z.parent,dt=D.cameras;at(D,gt);for(let _t=0;_t<dt.length;_t++)at(dt[_t],gt);dt.length===2?ot(D,w,P):D.projectionMatrix.copy(w.projectionMatrix),Q(z,D,gt)};function Q(z,j,it){it===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(it.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ca*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(z){c=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(D)},this.getCameraTexture=function(z){return m[z]};let Dt=null;function kt(z,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const it=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let gt=!1;it.length!==D.cameras.length&&(D.cameras.length=0,gt=!0);for(let Ut=0;Ut<it.length;Ut++){const Nt=it[Ut];let Ft=null;if(p!==null)Ft=p.getViewport(Nt);else{const Jt=d.getViewSubImage(h,Nt);Ft=Jt.viewport,Ut===0&&(t.setRenderTargetTextures(x,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(x))}let Vt=R[Ut];Vt===void 0&&(Vt=new tn,Vt.layers.enable(Ut),Vt.viewport=new _e,R[Ut]=Vt),Vt.matrix.fromArray(Nt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Nt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Ut===0&&(D.matrix.copy(Vt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),gt===!0&&D.cameras.push(Vt)}const dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Ut=d.getDepthInformation(it[0]);Ut&&Ut.isValid&&Ut.texture&&f.init(Ut,i.renderState)}if(dt&&dt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Ut=0;Ut<it.length;Ut++){const Nt=it[Ut].camera;if(Nt){let Ft=m[Nt];Ft||(Ft=new Xh,m[Nt]=Ft);const Vt=d.getCameraImage(Nt);Ft.sourceTexture=Vt}}}}for(let it=0;it<b.length;it++){const gt=E[it],dt=b[it];gt!==null&&dt!==void 0&&dt.update(gt,j,l||o)}Dt&&Dt(z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ot=new Zh;Ot.setAnimationLoop(kt),this.setAnimationLoop=function(z){Dt=z},this.dispose=function(){}}}const Qg=new ge,nu=new Gt;nu.set(-1,0,0,0,1,0,0,0,1);function jg(r,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,qh(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function i(f,m,_,y,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(f,m):m.isMeshLambertMaterial?(s(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(f,m),d(f,m)):m.isMeshPhongMaterial?(s(f,m),u(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,x)):m.isMeshMatcapMaterial?(s(f,m),g(f,m)):m.isMeshDepthMaterial?s(f,m):m.isMeshDistanceMaterial?(s(f,m),v(f,m)):m.isMeshNormalMaterial?s(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?c(f,m,_,y):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ze&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ze&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const _=t.get(m),y=_.envMap,x=_.envMapRotation;y&&(f.envMap.value=y,f.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(nu),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,_,y){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=y*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const _=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function t_(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const E=b.program;n.uniformBlockBinding(x,E)}function l(x,b){let E=i[x.id];E===void 0&&(f(x),E=u(x),i[x.id]=E,x.addEventListener("dispose",_));const C=b.program;n.updateUBOMapping(x,C);const M=t.render.frame;s[x.id]!==M&&(h(x),s[x.id]=M)}function u(x){const b=d();x.__bindingPointIndex=b;const E=r.createBuffer(),C=x.__size,M=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=i[x.id],E=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let M=0,w=E.length;M<w;M++){const P=E[M];if(Array.isArray(P))for(let R=0,D=P.length;R<D;R++)p(P[R],M,R,C);else p(P,M,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,b,E,C){if(v(x,b,E,C)===!0){const M=x.__offset,w=x.value;if(Array.isArray(w)){let P=0;for(let R=0;R<w.length;R++){const D=w[R],N=m(D);g(D,x.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,M,x.__data)}}function g(x,b,E){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,E)}function v(x,b,E,C){const M=x.value,w=b+"_"+E;if(C[w]===void 0)return typeof M=="number"||typeof M=="boolean"?C[w]=M:ArrayBuffer.isView(M)?C[w]=M.slice():C[w]=M.clone(),!0;{const P=C[w];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return C[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(P.equals(M)===!1)return P.copy(M),!0}}return!1}function f(x){const b=x.uniforms;let E=0;const C=16;for(let w=0,P=b.length;w<P;w++){const R=Array.isArray(b[w])?b[w]:[b[w]];for(let D=0,N=R.length;D<N;D++){const O=R[D],L=Array.isArray(O.value)?O.value:[O.value];for(let U=0,k=L.length;U<k;U++){const W=L[U],Y=m(W),ot=E%C,at=ot%Y.boundary,Q=ot+at;E+=at,Q!==0&&C-Q<Y.storage&&(E+=C-Q),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=Y.storage}}}const M=E%C;return M>0&&(E+=C-M),x.__size=E,x.__cache={},this}function m(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",x),b}function _(x){const b=x.target;b.removeEventListener("dispose",_);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function y(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:y}}const e_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function n_(){return Sn===null&&(Sn=new zd(e_,16,16,Ii,Zn),Sn.name="DFG_LUT",Sn.minFilter=we,Sn.magFilter=we,Sn.wrapS=qn,Sn.wrapT=qn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class i_{constructor(t={}){const{canvas:e=gd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=en}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=p,f=new Set([qa,Xa,Wa]),m=new Set([en,Ln,Is,Ls,ka,Ha]),_=new Uint32Array(4),y=new Int32Array(4),x=new F;let b=null,E=null;const C=[],M=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,D=null,N=null,O=null,L=null;this._outputColorSpace=je;let U=0,k=0,W=null,Y=-1,ot=null;const at=new _e,Q=new _e;let Dt=null;const kt=new zt(0);let Ot=0,z=e.width,j=e.height,it=1,gt=null,dt=null;const _t=new _e(0,0,z,j),Wt=new _e(0,0,z,j);let Ut=!1;const Nt=new Ja;let Ft=!1,Vt=!1;const Jt=new ge,se=new F,ee=new _e,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function fe(){return W===null?it:1}let G=n;function Be(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${za}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",vn,!1),G===null){const H="webgl2";if(G=Be(H,A),G===null)throw Be(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw jt("WebGLRenderer: "+A.message),A}let te,I,S,V,X,$,lt,ft,J,nt,et,ct,rt,ht,vt,St,Et,B,ut,tt,pt,mt,st;function Ct(){te=new n0(G),te.init(),pt=new Yg(G,te),I=new Km(G,te,t,pt),S=new Xg(G,te),I.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),N=G.createFramebuffer(),O=G.createFramebuffer(),L=G.createFramebuffer(),V=new r0(G),X=new Ig,$=new qg(G,te,S,X,I,pt,V),lt=new e0(P),ft=new cf(G),mt=new qm(G,ft),J=new i0(G,ft,V,mt),nt=new a0(G,J,ft,mt,V),B=new o0(G,I,$),vt=new Zm(X),et=new Pg(P,lt,te,I,mt,vt),ct=new jg(P,X),rt=new Dg,ht=new zg(te),Et=new Xm(P,lt,S,nt,g,c),St=new Wg(P,nt,I),st=new t_(G,V,I,S),ut=new Ym(G,te,V),tt=new s0(G,te,V),V.programs=et.programs,P.capabilities=I,P.extensions=te,P.properties=X,P.renderLists=rt,P.shadowMap=St,P.state=S,P.info=V}Ct(),v!==en&&(w=new c0(v,e.width,e.height,a,i,s));const wt=new Jg(P,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(z,j,!1))},this.getSize=function(A){return A.set(z,j)},this.setSize=function(A,H,Z=!0){if(wt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,j=H,e.width=Math.floor(A*it),e.height=Math.floor(H*it),Z===!0&&(e.style.width=A+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(z*it,j*it).floor()},this.setDrawingBufferSize=function(A,H,Z){z=A,j=H,it=Z,e.width=Math.floor(A*Z),e.height=Math.floor(H*Z),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(v===en){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(at)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,H,Z,q){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,H,Z,q),S.viewport(at.copy(_t).multiplyScalar(it).round())},this.getScissor=function(A){return A.copy(Wt)},this.setScissor=function(A,H,Z,q){A.isVector4?Wt.set(A.x,A.y,A.z,A.w):Wt.set(A,H,Z,q),S.scissor(Q.copy(Wt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){S.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){dt=A},this.getClearColor=function(A){return A.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Z=!0){let q=0;if(A){let K=!1;if(W!==null){const yt=W.texture.format;K=f.has(yt)}if(K){const yt=W.texture.type,Tt=m.has(yt),Mt=Et.getClearColor(),Pt=Et.getClearAlpha(),It=Mt.r,Ht=Mt.g,qt=Mt.b;Tt?(_[0]=It,_[1]=Ht,_[2]=qt,_[3]=Pt,G.clearBufferuiv(G.COLOR,0,_)):(y[0]=It,y[1]=Ht,y[2]=qt,y[3]=Pt,G.clearBufferiv(G.COLOR,0,y))}else q|=G.COLOR_BUFFER_BIT}H&&(q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),Et.dispose(),rt.dispose(),ht.dispose(),X.dispose(),lt.dispose(),nt.dispose(),mt.dispose(),st.dispose(),et.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",gl),wt.removeEventListener("sessionend",_l),vi.stop()};function pe(A){A.preventDefault(),Ul("WebGLRenderer: Context Lost."),R=!0}function ce(){Ul("WebGLRenderer: Context Restored."),R=!1;const A=V.autoReset,H=St.enabled,Z=St.autoUpdate,q=St.needsUpdate,K=St.type;Ct(),V.autoReset=A,St.enabled=H,St.autoUpdate=Z,St.needsUpdate=q,St.type=K}function vn(A){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xn(A){const H=A.target;H.removeEventListener("dispose",xn),vu(H)}function vu(A){xu(A),X.remove(A)}function xu(A){const H=X.get(A).programs;H!==void 0&&(H.forEach(function(Z){et.releaseProgram(Z)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Z,q,K,yt){H===null&&(H=Te);const Tt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Mt=Su(A,H,Z,q,K);S.setMaterial(q,Tt);let Pt=Z.index,It=1;if(q.wireframe===!0){if(Pt=J.getWireframeAttribute(Z),Pt===void 0)return;It=2}const Ht=Z.drawRange,qt=Z.attributes.position;let Lt=Ht.start*It,re=(Ht.start+Ht.count)*It;yt!==null&&(Lt=Math.max(Lt,yt.start*It),re=Math.min(re,(yt.start+yt.count)*It)),Pt!==null?(Lt=Math.max(Lt,0),re=Math.min(re,Pt.count)):qt!=null&&(Lt=Math.max(Lt,0),re=Math.min(re,qt.count));const Me=re-Lt;if(Me<0||Me===1/0)return;mt.setup(K,q,Mt,Z,Pt);let xe,ae=ut;if(Pt!==null&&(xe=ft.get(Pt),ae=tt,ae.setIndex(xe)),K.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*fe()),ae.setMode(G.LINES)):ae.setMode(G.TRIANGLES);else if(K.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),S.setLineWidth(ze*fe()),K.isLineSegments?ae.setMode(G.LINES):K.isLineLoop?ae.setMode(G.LINE_LOOP):ae.setMode(G.LINE_STRIP)}else K.isPoints?ae.setMode(G.POINTS):K.isSprite&&ae.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ze=K._multiDrawStarts,bt=K._multiDrawCounts,$e=K._multiDrawCount,Qt=Pt?ft.get(Pt).bytesPerElement:1,on=X.get(q).currentProgram.getUniforms();for(let Mn=0;Mn<$e;Mn++)on.setValue(G,"_gl_DrawID",Mn),ae.render(ze[Mn]/Qt,bt[Mn])}else if(K.isInstancedMesh)ae.renderInstances(Lt,Me,K.count);else if(Z.isInstancedBufferGeometry){const ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,bt=Math.min(Z.instanceCount,ze);ae.renderInstances(Lt,Me,bt)}else ae.render(Lt,Me)};function ml(A,H,Z){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,Vs(A,H,Z),A.side=mi,A.needsUpdate=!0,Vs(A,H,Z),A.side=ln):Vs(A,H,Z)}this.compile=function(A,H,Z=null){Z===null&&(Z=A),E=ht.get(Z),E.init(H),M.push(E),Z.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),A!==Z&&A.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights();const q=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const yt=K.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){const Mt=yt[Tt];ml(Mt,Z,K),q.add(Mt)}else ml(yt,Z,K),q.add(yt)}),E=M.pop(),q},this.compileAsync=function(A,H,Z=null){const q=this.compile(A,H,Z);return new Promise(K=>{function yt(){if(q.forEach(function(Tt){X.get(Tt).currentProgram.isReady()&&q.delete(Tt)}),q.size===0){K(A);return}setTimeout(yt,10)}te.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Kr=null;function Mu(A){Kr&&Kr(A)}function gl(){vi.stop()}function _l(){vi.start()}const vi=new Zh;vi.setAnimationLoop(Mu),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(A){Kr=A,wt.setAnimationLoop(A),A===null?vi.stop():vi.start()},wt.addEventListener("sessionstart",gl),wt.addEventListener("sessionend",_l),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(A,H);const Z=wt.enabled===!0&&wt.isPresenting===!0,q=w!==null&&(W===null||Z)&&w.begin(P,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(H),H=wt.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,H,W),E=ht.get(A,M.length),E.init(H),E.state.textureUnits=$.getTextureUnits(),M.push(E),Jt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Nt.setFromProjectionMatrix(Jt,Rn,H.reversedDepth),Vt=this.localClippingEnabled,Ft=vt.init(this.clippingPlanes,Vt),b=rt.get(A,C.length),b.init(),C.push(b),wt.enabled===!0&&wt.isPresenting===!0){const Tt=P.xr.getDepthSensingMesh();Tt!==null&&Zr(Tt,H,-1/0,P.sortObjects)}Zr(A,H,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(gt,dt,H.reversedDepth),oe=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,oe&&Et.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ft===!0&&vt.beginShadows();const K=E.state.shadowsArray;if(St.render(K,A,H),Ft===!0&&vt.endShadows(),(q&&w.hasRenderPass())===!1){const Tt=b.opaque,Mt=b.transmissive;if(E.setupLights(),H.isArrayCamera){const Pt=H.cameras;if(Mt.length>0)for(let It=0,Ht=Pt.length;It<Ht;It++){const qt=Pt[It];xl(Tt,Mt,A,qt)}oe&&Et.render(A);for(let It=0,Ht=Pt.length;It<Ht;It++){const qt=Pt[It];vl(b,A,qt,qt.viewport)}}else Mt.length>0&&xl(Tt,Mt,A,H),oe&&Et.render(A),vl(b,A,H)}W!==null&&k===0&&($.updateMultisampleRenderTarget(W),$.updateRenderTargetMipmap(W)),q&&w.end(P),A.isScene===!0&&A.onAfterRender(P,A,H),mt.resetDefaultState(),Y=-1,ot=null,M.pop(),M.length>0?(E=M[M.length-1],$.setTextureUnits(E.state.textureUnits),Ft===!0&&vt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,D!==null&&D.renderEnd()};function Zr(A,H,Z,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Nt.intersectsSprite(A)){q&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Jt);const Tt=nt.update(A),Mt=A.material;Mt.visible&&b.push(A,Tt,Mt,Z,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Nt.intersectsObject(A))){const Tt=nt.update(A),Mt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ee.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ee.copy(Tt.boundingSphere.center)),ee.applyMatrix4(A.matrixWorld).applyMatrix4(Jt)),Array.isArray(Mt)){const Pt=Tt.groups;for(let It=0,Ht=Pt.length;It<Ht;It++){const qt=Pt[It],Lt=Mt[qt.materialIndex];Lt&&Lt.visible&&b.push(A,Tt,Lt,Z,ee.z,qt)}}else Mt.visible&&b.push(A,Tt,Mt,Z,ee.z,null)}}const yt=A.children;for(let Tt=0,Mt=yt.length;Tt<Mt;Tt++)Zr(yt[Tt],H,Z,q)}function vl(A,H,Z,q){const{opaque:K,transmissive:yt,transparent:Tt}=A;E.setupLightsView(Z),Ft===!0&&vt.setGlobalState(P.clippingPlanes,Z),q&&S.viewport(at.copy(q)),K.length>0&&zs(K,H,Z),yt.length>0&&zs(yt,H,Z),Tt.length>0&&zs(Tt,H,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function xl(A,H,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){const Lt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new In(1,1,{generateMipmaps:!0,type:Lt?Zn:en,minFilter:mn,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const yt=E.state.transmissionRenderTarget[q.id],Tt=q.viewport||at;yt.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);const Mt=P.getRenderTarget(),Pt=P.getActiveCubeFace(),It=P.getActiveMipmapLevel();P.setRenderTarget(yt),P.getClearColor(kt),Ot=P.getClearAlpha(),Ot<1&&P.setClearColor(16777215,.5),P.clear(),oe&&Et.render(Z);const Ht=P.toneMapping;P.toneMapping=Pn;const qt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),Ft===!0&&vt.setGlobalState(P.clippingPlanes,q),zs(A,Z,q),$.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let re=0,Me=H.length;re<Me;re++){const xe=H[re],{object:ae,geometry:ze,material:bt,group:$e}=xe;if(bt.side===ln&&ae.layers.test(q.layers)){const Qt=bt.side;bt.side=Ze,bt.needsUpdate=!0,Ml(ae,Z,q,ze,bt,$e),bt.side=Qt,bt.needsUpdate=!0,Lt=!0}}Lt===!0&&($.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt))}P.setRenderTarget(Mt,Pt,It),P.setClearColor(kt,Ot),qt!==void 0&&(q.viewport=qt),P.toneMapping=Ht}function zs(A,H,Z){const q=H.isScene===!0?H.overrideMaterial:null;for(let K=0,yt=A.length;K<yt;K++){const Tt=A[K],{object:Mt,geometry:Pt,group:It}=Tt;let Ht=Tt.material;Ht.allowOverride===!0&&q!==null&&(Ht=q),Mt.layers.test(Z.layers)&&Ml(Mt,H,Z,Pt,Ht,It)}}function Ml(A,H,Z,q,K,yt){A.onBeforeRender(P,H,Z,q,K,yt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(P,H,Z,q,A,yt),K.transparent===!0&&K.side===ln&&K.forceSinglePass===!1?(K.side=Ze,K.needsUpdate=!0,P.renderBufferDirect(Z,H,q,K,A,yt),K.side=mi,K.needsUpdate=!0,P.renderBufferDirect(Z,H,q,K,A,yt),K.side=ln):P.renderBufferDirect(Z,H,q,K,A,yt),A.onAfterRender(P,H,Z,q,K,yt)}function Vs(A,H,Z){H.isScene!==!0&&(H=Te);const q=X.get(A),K=E.state.lights,yt=E.state.shadowsArray,Tt=K.state.version,Mt=et.getParameters(A,K.state,yt,H,Z,E.state.lightProbeGridArray),Pt=et.getProgramCacheKey(Mt);let It=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const Ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=lt.get(A.envMap||q.environment,Ht),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,It===void 0&&(A.addEventListener("dispose",xn),It=new Map,q.programs=It);let qt=It.get(Pt);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===Tt)return Sl(A,Mt),qt}else Mt.uniforms=et.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Z,Mt),A.onBeforeCompile(Mt,P),qt=et.acquireProgram(Mt,Pt),It.set(Pt,qt),q.uniforms=Mt.uniforms;const Lt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=vt.uniform),Sl(A,Mt),q.needsLights=bu(A),q.lightsStateVersion=Tt,q.needsLights&&(Lt.ambientLightColor.value=K.state.ambient,Lt.lightProbe.value=K.state.probe,Lt.directionalLights.value=K.state.directional,Lt.directionalLightShadows.value=K.state.directionalShadow,Lt.spotLights.value=K.state.spot,Lt.spotLightShadows.value=K.state.spotShadow,Lt.rectAreaLights.value=K.state.rectArea,Lt.ltc_1.value=K.state.rectAreaLTC1,Lt.ltc_2.value=K.state.rectAreaLTC2,Lt.pointLights.value=K.state.point,Lt.pointLightShadows.value=K.state.pointShadow,Lt.hemisphereLights.value=K.state.hemi,Lt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Lt.spotLightMatrix.value=K.state.spotLightMatrix,Lt.spotLightMap.value=K.state.spotLightMap,Lt.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=qt,q.uniformsList=null,qt}function yl(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Dr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Sl(A,H){const Z=X.get(A);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function yu(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(H.matrixWorld);for(let Z=0,q=A.length;Z<q;Z++){const K=A[Z];if(K.texture!==null&&K.boundingBox.containsPoint(x))return K}return null}function Su(A,H,Z,q,K){H.isScene!==!0&&(H=Te),$.resetTextureUnits();const yt=H.fog,Tt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Mt=W===null?P.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Zt.workingColorSpace,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,It=lt.get(q.envMap||Tt,Pt),Ht=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!Z.morphAttributes.position,re=!!Z.morphAttributes.normal,Me=!!Z.morphAttributes.color;let xe=Pn;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(xe=P.toneMapping);const ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ze=ae!==void 0?ae.length:0,bt=X.get(q),$e=E.state.lights;if(Ft===!0&&(Vt===!0||A!==ot)){const he=A===ot&&q.id===Y;vt.setState(q,A,he)}let Qt=!1;q.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==$e.state.version||bt.outputColorSpace!==Mt||K.isBatchedMesh&&bt.batching===!1||!K.isBatchedMesh&&bt.batching===!0||K.isBatchedMesh&&bt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&bt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&bt.instancing===!1||!K.isInstancedMesh&&bt.instancing===!0||K.isSkinnedMesh&&bt.skinning===!1||!K.isSkinnedMesh&&bt.skinning===!0||K.isInstancedMesh&&bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&bt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&bt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&bt.instancingMorph===!1&&K.morphTexture!==null||bt.envMap!==It||q.fog===!0&&bt.fog!==yt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==vt.numPlanes||bt.numIntersection!==vt.numIntersection)||bt.vertexAlphas!==Ht||bt.vertexTangents!==qt||bt.morphTargets!==Lt||bt.morphNormals!==re||bt.morphColors!==Me||bt.toneMapping!==xe||bt.morphTargetsCount!==ze||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,bt.__version=q.version);let on=bt.currentProgram;Qt===!0&&(on=Vs(q,H,K),D&&q.isNodeMaterial&&D.onUpdateProgram(q,on,bt));let Mn=!1,Qn=!1,Di=!1;const le=on.getUniforms(),ye=bt.uniforms;if(S.useProgram(on.program)&&(Mn=!0,Qn=!0,Di=!0),q.id!==Y&&(Y=q.id,Qn=!0),bt.needsLights){const he=yu(E.state.lightProbeGridArray,K);bt.lightProbeGrid!==he&&(bt.lightProbeGrid=he,Qn=!0)}if(Mn||ot!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),le.setValue(G,"projectionMatrix",A.projectionMatrix),le.setValue(G,"viewMatrix",A.matrixWorldInverse);const ti=le.map.cameraPosition;ti!==void 0&&ti.setValue(G,se.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&le.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&le.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ot!==A&&(ot=A,Qn=!0,Di=!0)}if(bt.needsLights&&($e.state.directionalShadowMap.length>0&&le.setValue(G,"directionalShadowMap",$e.state.directionalShadowMap,$),$e.state.spotShadowMap.length>0&&le.setValue(G,"spotShadowMap",$e.state.spotShadowMap,$),$e.state.pointShadowMap.length>0&&le.setValue(G,"pointShadowMap",$e.state.pointShadowMap,$)),K.isSkinnedMesh){le.setOptional(G,K,"bindMatrix"),le.setOptional(G,K,"bindMatrixInverse");const he=K.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),le.setValue(G,"boneTexture",he.boneTexture,$))}K.isBatchedMesh&&(le.setOptional(G,K,"batchingTexture"),le.setValue(G,"batchingTexture",K._matricesTexture,$),le.setOptional(G,K,"batchingIdTexture"),le.setValue(G,"batchingIdTexture",K._indirectTexture,$),le.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&le.setValue(G,"batchingColorTexture",K._colorsTexture,$));const jn=Z.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&B.update(K,Z,on),(Qn||bt.receiveShadow!==K.receiveShadow)&&(bt.receiveShadow=K.receiveShadow,le.setValue(G,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(ye.envMapIntensity.value=H.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=n_()),Qn){if(le.setValue(G,"toneMappingExposure",P.toneMappingExposure),bt.needsLights&&Eu(ye,Di),yt&&q.fog===!0&&ct.refreshFogUniforms(ye,yt),ct.refreshMaterialUniforms(ye,q,it,j,E.state.transmissionRenderTarget[A.id]),bt.needsLights&&bt.lightProbeGrid){const he=bt.lightProbeGrid;ye.probesSH.value=he.texture,ye.probesMin.value.copy(he.boundingBox.min),ye.probesMax.value.copy(he.boundingBox.max),ye.probesResolution.value.copy(he.resolution)}Dr.upload(G,yl(bt),ye,$)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Dr.upload(G,yl(bt),ye,$),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&le.setValue(G,"center",K.center),le.setValue(G,"modelViewMatrix",K.modelViewMatrix),le.setValue(G,"normalMatrix",K.normalMatrix),le.setValue(G,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const he=q.uniformsGroups;for(let ti=0,Ni=he.length;ti<Ni;ti++){const El=he[ti];st.update(El,on),st.bind(El,on)}}return on}function Eu(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function bu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,H,Z){const q=X.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=H,X.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const Z=X.get(A);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Z=0){W=A,U=H,k=Z;let q=null,K=!1,yt=!1;if(A){const Mt=X.get(A);if(Mt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(G.FRAMEBUFFER,Mt.__webglFramebuffer),at.copy(A.viewport),Q.copy(A.scissor),Dt=A.scissorTest,S.viewport(at),S.scissor(Q),S.setScissorTest(Dt),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(Mt.__hasExternalTextures)$.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ht=A.depthTexture;if(Mt.__boundDepthTexture!==Ht){if(Ht!==null&&X.has(Ht)&&(A.width!==Ht.image.width||A.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}const Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(yt=!0);const It=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(It[H])?q=It[H][Z]:q=It[H],K=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?q=X.get(A).__webglMultisampledFramebuffer:Array.isArray(It)?q=It[Z]:q=It,at.copy(A.viewport),Q.copy(A.scissor),Dt=A.scissorTest}else at.copy(_t).multiplyScalar(it).floor(),Q.copy(Wt).multiplyScalar(it).floor(),Dt=Ut;if(Z!==0&&(q=N),S.bindFramebuffer(G.FRAMEBUFFER,q)&&S.drawBuffers(A,q),S.viewport(at),S.scissor(Q),S.setScissorTest(Dt),K){const Mt=X.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,Mt.__webglTexture,Z)}else if(yt){const Mt=H;for(let Pt=0;Pt<A.textures.length;Pt++){const It=X.get(A.textures[Pt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Pt,It.__webglTexture,Z,Mt)}}else if(A!==null&&Z!==0){const Mt=X.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mt.__webglTexture,Z)}Y=-1},this.readRenderTargetPixels=function(A,H,Z,q,K,yt,Tt,Mt=0){if(!(A&&A.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){S.bindFramebuffer(G.FRAMEBUFFER,Pt);try{const It=A.textures[Mt],Ht=It.format,qt=It.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Mt),!I.textureFormatReadable(Ht)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(qt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&Z>=0&&Z<=A.height-K&&G.readPixels(H,Z,q,K,pt.convert(Ht),pt.convert(qt),yt)}finally{const It=W!==null?X.get(W).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,H,Z,q,K,yt,Tt,Mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(H>=0&&H<=A.width-q&&Z>=0&&Z<=A.height-K){S.bindFramebuffer(G.FRAMEBUFFER,Pt);const It=A.textures[Mt],Ht=It.format,qt=It.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Mt),!I.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Lt),G.bufferData(G.PIXEL_PACK_BUFFER,yt.byteLength,G.STREAM_READ),G.readPixels(H,Z,q,K,pt.convert(Ht),pt.convert(qt),0);const re=W!==null?X.get(W).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,re);const Me=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await _d(G,Me,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Lt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,yt),G.deleteBuffer(Lt),G.deleteSync(Me),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Z=0){const q=Math.pow(2,-Z),K=Math.floor(A.image.width*q),yt=Math.floor(A.image.height*q),Tt=H!==null?H.x:0,Mt=H!==null?H.y:0;$.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,Tt,Mt,K,yt),S.unbindTexture()},this.copyTextureToTexture=function(A,H,Z=null,q=null,K=0,yt=0){let Tt,Mt,Pt,It,Ht,qt,Lt,re,Me;const xe=A.isCompressedTexture?A.mipmaps[yt]:A.image;if(Z!==null)Tt=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,Pt=Z.isBox3?Z.max.z-Z.min.z:1,It=Z.min.x,Ht=Z.min.y,qt=Z.isBox3?Z.min.z:0;else{const ye=Math.pow(2,-K);Tt=Math.floor(xe.width*ye),Mt=Math.floor(xe.height*ye),A.isDataArrayTexture?Pt=xe.depth:A.isData3DTexture?Pt=Math.floor(xe.depth*ye):Pt=1,It=0,Ht=0,qt=0}q!==null?(Lt=q.x,re=q.y,Me=q.z):(Lt=0,re=0,Me=0);const ae=pt.convert(H.format),ze=pt.convert(H.type);let bt;H.isData3DTexture?($.setTexture3D(H,0),bt=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?($.setTexture2DArray(H,0),bt=G.TEXTURE_2D_ARRAY):($.setTexture2D(H,0),bt=G.TEXTURE_2D),S.activeTexture(G.TEXTURE0),S.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);const $e=S.getParameter(G.UNPACK_ROW_LENGTH),Qt=S.getParameter(G.UNPACK_IMAGE_HEIGHT),on=S.getParameter(G.UNPACK_SKIP_PIXELS),Mn=S.getParameter(G.UNPACK_SKIP_ROWS),Qn=S.getParameter(G.UNPACK_SKIP_IMAGES);S.pixelStorei(G.UNPACK_ROW_LENGTH,xe.width),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe.height),S.pixelStorei(G.UNPACK_SKIP_PIXELS,It),S.pixelStorei(G.UNPACK_SKIP_ROWS,Ht),S.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const Di=A.isDataArrayTexture||A.isData3DTexture,le=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const ye=X.get(A),jn=X.get(H),he=X.get(ye.__renderTarget),ti=X.get(jn.__renderTarget);S.bindFramebuffer(G.READ_FRAMEBUFFER,he.__webglFramebuffer),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Ni=0;Ni<Pt;Ni++)Di&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,X.get(A).__webglTexture,K,qt+Ni),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,X.get(H).__webglTexture,yt,Me+Ni)),G.blitFramebuffer(It,Ht,Tt,Mt,Lt,re,Tt,Mt,G.DEPTH_BUFFER_BIT,G.NEAREST);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||X.has(A)){const ye=X.get(A),jn=X.get(H);S.bindFramebuffer(G.READ_FRAMEBUFFER,O),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,L);for(let he=0;he<Pt;he++)Di?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ye.__webglTexture,K,qt+he):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ye.__webglTexture,K),le?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,jn.__webglTexture,yt,Me+he):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,jn.__webglTexture,yt),K!==0?G.blitFramebuffer(It,Ht,Tt,Mt,Lt,re,Tt,Mt,G.COLOR_BUFFER_BIT,G.NEAREST):le?G.copyTexSubImage3D(bt,yt,Lt,re,Me+he,It,Ht,Tt,Mt):G.copyTexSubImage2D(bt,yt,Lt,re,It,Ht,Tt,Mt);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else le?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(bt,yt,Lt,re,Me,Tt,Mt,Pt,ae,ze,xe.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(bt,yt,Lt,re,Me,Tt,Mt,Pt,ae,xe.data):G.texSubImage3D(bt,yt,Lt,re,Me,Tt,Mt,Pt,ae,ze,xe):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,yt,Lt,re,Tt,Mt,ae,ze,xe.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,yt,Lt,re,xe.width,xe.height,ae,xe.data):G.texSubImage2D(G.TEXTURE_2D,yt,Lt,re,Tt,Mt,ae,ze,xe);S.pixelStorei(G.UNPACK_ROW_LENGTH,$e),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Qt),S.pixelStorei(G.UNPACK_SKIP_PIXELS,on),S.pixelStorei(G.UNPACK_SKIP_ROWS,Mn),S.pixelStorei(G.UNPACK_SKIP_IMAGES,Qn),yt===0&&H.generateMipmaps&&G.generateMipmap(bt),S.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){U=0,k=0,W=null,S.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const s_=[4,6,8,10,12,20];function iu(r){return s_.includes(r)}function il(r){const t=r.attributes.position,e=[],n=new F,i=new F,s=new F,o=new F,a=new F,c=t.count/3;for(let l=0;l<c;l++)n.fromBufferAttribute(t,l*3),i.fromBufferAttribute(t,l*3+1),s.fromBufferAttribute(t,l*3+2),o.subVectors(s,i),a.subVectors(n,i),o.cross(a).normalize(),e.push(o.clone());return e}function sl(r,t,e,n=.1){const i=r.attributes.position,s=i.count/3,o=[],a=new F,c=new F,l=new F,u=new F,d=new F,h=new F,p=new F,g=new F,v=new F;for(let f=0;f<s;f++){a.fromBufferAttribute(i,f*3),c.fromBufferAttribute(i,f*3+1),l.fromBufferAttribute(i,f*3+2),u.set(0,0,0).add(a).add(c).add(l).divideScalar(3),h.subVectors(c,a),p.subVectors(l,a),d.crossVectors(h,p).normalize();const m=new F().addVectors(c,l).multiplyScalar(.5);g.subVectors(a,m).normalize(),v.crossVectors(g,d).normalize();const y=[a,c,l].map(D=>{const N=new F().subVectors(D,u);return{x:N.dot(v),y:N.dot(g)}}),x=Math.max(...y.map(D=>Math.sqrt(D.x*D.x+D.y*D.y))),b=(.5-n)/(x||1),E=f%t,C=Math.floor(f/t),M=(E+.5)/t,w=1-(C+.5)/e,P=1/t,R=1/e;for(const D of y){const N=M+D.x*b*P*2,O=w+D.y*b*R*2;o.push(N,O)}}return o}const os=[[3,4,2],[1,4,3],[1,2,4],[1,3,2]];function r_(r=1){const t=r/Math.sqrt(3),e=new F(t,t,t),n=new F(-t,-t,t),i=new F(-t,t,-t),s=new F(t,-t,-t),o=new Float32Array([i.x,i.y,i.z,s.x,s.y,s.z,n.x,n.y,n.z,e.x,e.y,e.z,s.x,s.y,s.z,i.x,i.y,i.z,e.x,e.y,e.z,n.x,n.y,n.z,s.x,s.y,s.z,e.x,e.y,e.z,i.x,i.y,i.z,n.x,n.y,n.z]),a=new Oe;a.setAttribute("position",new sn(o,3));const u=sl(a,2,2,.08);a.setAttribute("uv",new ve(u,2)),a.computeVertexNormals();const d=new Map;return d.set(1,e.clone().normalize()),d.set(2,n.clone().normalize()),d.set(3,i.clone().normalize()),d.set(4,s.clone().normalize()),{sides:4,radius:r,geometry:a,faceNormals:d,faceValues:[1,2,3,4]}}function o_(r=1){const t=[1,6,2,5,3,4],e=new hs(r,r,r),n=e.index?e.toNonIndexed():e,i=[],s=3,o=2;for(let l=0;l<6;l++){const u=l%s,d=Math.floor(l/s),h=u/s,p=(u+1)/s,g=1-(d+1)/o,v=1-d/o;i.push(h,v,h,g,p,v,h,g,p,g,p,v)}n.setAttribute("uv",new ve(i,2)),n.computeVertexNormals();const a=il(n),c=new Map;for(let l=0;l<6;l++){const u=t[l];c.set(u,a[l*2])}return{sides:6,radius:r*.5,geometry:n,faceNormals:c,faceValues:t}}function a_(r=1){const t=new tl(r,0),e=t.index?t.toNonIndexed():t,n=e.attributes.position.count/3,i=Array.from({length:8},(u,d)=>d+1),a=sl(e,4,2,.08);e.setAttribute("uv",new ve(a,2)),e.computeVertexNormals();const c=il(e),l=new Map;for(let u=0;u<n;u++){const d=i[u];l.set(d,c[u])}return{sides:8,radius:r,geometry:e,faceNormals:l,faceValues:i}}function l_(r=1){const t=Array.from({length:10},(f,m)=>m+1),e=5,n=2,i=r*1.08,s=r*.9,o=i/(5+2*Math.sqrt(5)),a=new F(0,i,0),c=new F(0,-i,0),l=[];for(let f=0;f<10;f++){const m=f/10*Math.PI*2,_=f%2===0?o:-o;l.push(new F(Math.cos(m)*s,_,Math.sin(m)*s))}const u=[],d=[],h=[],p=new Map;function g(f,m,_,y,x,b,E,C,M,w,P,R){const D=new F().subVectors(m,f),N=new F().subVectors(_,f),O=new F().crossVectors(D,N),L=new F().add(f).add(m).add(_).divideScalar(3);let U=f,k=m,W=_;O.dot(L)<0&&(k=_,W=m);for(const Y of[U,k,W]){u.push(Y.x,Y.y,Y.z),d.push(y.x,y.y,y.z);const ot=new F().subVectors(Y,x),at=M+ot.dot(b)*C*P*2,Q=w+ot.dot(E)*C*R*2;h.push(at,Q)}}for(let f=0;f<10;f++){const m=f%e,_=Math.floor(f/e),y=(m+.5)/e,x=1-(_+.5)/n,b=1/e,E=1/n;if(f<5){const C=f*2,M=a,w=l[C],P=l[(C+1)%10],R=l[(C+2)%10],D=new F().add(M).add(w).add(P).add(R).multiplyScalar(.25),N=new F().subVectors(P,M),O=new F().subVectors(R,w),L=new F().crossVectors(O,N).normalize();L.dot(D)<0&&L.negate();const U=new F().subVectors(M,D).normalize(),k=new F().crossVectors(U,L).normalize(),Y=.38/(Math.max(...[M,w,P,R].map(ot=>{const at=new F().subVectors(ot,D);return Math.sqrt(Math.pow(at.dot(k),2)+Math.pow(at.dot(U),2))}))||1);g(M,w,P,L,D,k,U,Y,y,x,b,E),g(M,P,R,L,D,k,U,Y,y,x,b,E),p.set(t[f],L)}else{const C=(f-5)*2+1,M=c,w=l[C],P=l[(C+1)%10],R=l[(C+2)%10],D=new F().add(M).add(w).add(P).add(R).multiplyScalar(.25),N=new F().subVectors(P,M),O=new F().subVectors(w,R),L=new F().crossVectors(O,N).normalize();L.dot(D)<0&&L.negate();const U=new F().subVectors(P,D).normalize(),k=new F().crossVectors(U,L).normalize(),Y=.38/(Math.max(...[M,w,P,R].map(ot=>{const at=new F().subVectors(ot,D);return Math.sqrt(Math.pow(at.dot(k),2)+Math.pow(at.dot(U),2))}))||1);g(M,R,P,L,D,k,U,Y,y,x,b,E),g(M,P,w,L,D,k,U,Y,y,x,b,E),p.set(t[f],L)}}const v=new Oe;return v.setAttribute("position",new ve(u,3)),v.setAttribute("normal",new ve(d,3)),v.setAttribute("uv",new ve(h,2)),{sides:10,radius:r,geometry:v,faceNormals:p,faceValues:t}}function c_(r=1){const t=new Qa(r,0),e=t.index?t.toNonIndexed():t,n=e.attributes.position,i=Array.from({length:12},(d,h)=>h+1),s=4,o=3,a=[],c=new Map,l=new F,u=12;for(let d=0;d<u;d++){const h=new F,p=[];for(let P=0;P<9;P++)l.fromBufferAttribute(n,d*9+P),p.push(l.clone()),h.add(l);h.divideScalar(9);const g=h.clone().normalize(),v=p[0],f=new F().subVectors(v,h).normalize(),m=new F().crossVectors(f,g).normalize(),_=d%s,y=Math.floor(d/s),x=(_+.5)/s,b=1-(y+.5)/o,E=1/s,C=1/o,w=.4/(Math.max(...p.map(P=>{const R=new F().subVectors(P,h);return Math.sqrt(Math.pow(R.dot(m),2)+Math.pow(R.dot(f),2))}))||1);for(const P of p){const R=new F().subVectors(P,h),D=x+R.dot(m)*w*E*2,N=b+R.dot(f)*w*C*2;a.push(D,N)}c.set(i[d],g)}return e.setAttribute("uv",new ve(a,2)),e.computeVertexNormals(),{sides:12,radius:r,geometry:e,faceNormals:c,faceValues:i}}function h_(r=1){const t=new ja(r,0),e=t.index?t.toNonIndexed():t,n=e.attributes.position.count/3,i=Array.from({length:20},(u,d)=>d+1),a=sl(e,5,4,.08);e.setAttribute("uv",new ve(a,2)),e.computeVertexNormals();const c=il(e),l=new Map;for(let u=0;u<n;u++){const d=i[u];l.set(d,c[u])}return{sides:20,radius:r,geometry:e,faceNormals:l,faceValues:i}}function Da(r,t=1){switch(r){case 4:return r_(t*1.22);case 6:return o_(t*1.4);case 8:return a_(t*1.12);case 10:return l_(t*.95);case 12:return c_(t*.95);case 20:return h_(t*1);default:return null}}const gi={backgroundColor:"#1c192b",textColor:"#ffffff",borderColor:"#4d3d75",accentColor:"#ffd700",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},Uc=new Map,Fc=new Map;function u_(r,t){if(!r&&!t)return gi;let e=265,n=65,i=18;if(t&&/^#[0-9a-fA-F]{6}$/.test(t)){const s=parseInt(t.slice(1,3),16)/255,o=parseInt(t.slice(3,5),16)/255,a=parseInt(t.slice(5,7),16)/255,c=Math.max(s,o,a),l=Math.min(s,o,a),u=c-l,d=(c+l)/2;if(u===0)e=0,n=0,i=Math.round(d*100);else{const h=d>.5?u/(2-c-l):u/(c+l);switch(c){case s:e=(o-a)/u+(o<a?6:0);break;case o:e=(a-s)/u+2;break;case a:e=(s-o)/u+4;break}e=Math.round(e*60),n=Math.round(h*100),i=Math.round(d*100)}n<5?(n=0,i=Math.max(4,Math.min(95,i))):i=Math.max(6,Math.min(94,i))}else if(r){let s=0;for(let o=0;o<r.length;o++)s=(s<<5)-s+r.charCodeAt(o),s|=0;e=Math.abs(s)%360,n=65,i=18}return{backgroundColor:`hsl(${e}, ${n}%, ${i}%)`,textColor:"#ffffff",borderColor:`hsl(${e}, ${n}%, ${Math.min(90,Math.max(10,i>50?i-20:i+20))}%)`,accentColor:"#ffd700"}}function su(r){const t=r.match(/hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/);return t?{h:parseInt(t[1],10),s:parseInt(t[2],10),l:parseInt(t[3],10)}:{h:265,s:65,l:18}}const Ps=new Uint8Array(512),d_=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];for(let r=0;r<256;r++)Ps[r]=r*151+73&255,Ps[r+256]=Ps[r];function vr(r,t,e,n){const i=Ps[Ps[r&255]+t&255]&7,[s,o]=d_[i],a=e-r,c=n-t;return a*s+c*o}function Oc(r){return r*r*(3-2*r)}function Ts(r,t){const e=Math.floor(r),n=e+1,i=Math.floor(t),s=i+1,o=Oc(r-e),a=Oc(t-i),c=vr(e,i,r,t),l=vr(n,i,r,t),u=c+o*(l-c),d=vr(e,s,r,t),h=vr(n,s,r,t),p=d+o*(h-d);return u+a*(p-u)}function f_(r,t){let e=0,n=1,i=1;for(let s=0;s<3;s++)e+=n*Math.abs(Ts(r*i,t*i)),i*=2,n*=.5;return e}function An(r,t,e){let n=Math.imul(r^e,668265261)^Math.imul(t^e*31,374761393);return n=Math.imul(n^n>>>15,2246822507),n=Math.imul(n^n>>>13,3266489909),((n^n>>>16)>>>0)/4294967296}function p_(r,t,e){const n=(Ts(r*1.6+e,t*1.6)*.6+Ts(r*3.2,t*3.2+e)*.4)*4.5,i=Ts(r*1.2+e*1.7,t*1.2)*.85,s=Ts(r*1.2+31.4,t*1.2+e*2.3)*.85,o=r+i,a=t+s,c=2.4,l=Math.floor(o*c),u=Math.floor(a*c);let d=0;for(let h=-1;h<=1;h++)for(let p=-1;p<=1;p++){const g=l+h,v=u+p;if(An(g,v,e+101)>.2)continue;const m=g+.15+An(g,v,e+202)*.7,_=v+.15+An(g,v,e+303)*.7,y=o*c-m,x=a*c-_,b=Math.hypot(y,x),E=.08+An(g,v,e+404)*.16,C=16+An(g,v,e+505)*20;if(b<E){const w=Math.pow(1-b/E,1.8)*C;w>d&&(d=w)}}return n-d}function De(r,t,e){if(r=r%360/360,t=t/100,e=e/100,t===0){const o=Math.round(e*255);return[o,o,o]}const n=e<.5?e*(1+t):e+t-e*t,i=2*e-n,s=o=>(o<0&&(o+=1),o>1&&(o-=1),o<1/6?i+(n-i)*6*o:o<1/2?n:o<2/3?i+(n-i)*(2/3-o)*6:i);return[Math.round(s(r+1/3)*255),Math.round(s(r)*255),Math.round(s(r-1/3)*255)]}function xr(r,t,e,n,i,s,o=0,a=!1){if(r.save(),r.translate(e,n),o!==0&&r.rotate(o),r.font=`900 ${i}px ${s}`,r.textAlign="center",r.textBaseline="middle",r.save(),r.lineJoin="round",r.miterLimit=2,r.lineWidth=Math.max(4,i*.14),r.strokeStyle="rgb(0, 0, 255)",r.strokeText(t,0,1),r.restore(),r.fillStyle="rgb(0, 255, 0)",r.fillText(t,0,0),a){const c=i*.42,l=Math.max(3,i*.1),u=i*.36,d=-c/2;r.save(),r.fillStyle="rgb(0, 0, 255)",r.fillRect(d-2,u-1,c+4,l+3),r.restore(),r.fillStyle="rgb(0, 255, 0)",r.fillRect(d,u,c,l)}r.restore()}function Zi(r,t,e,n="Inter, sans-serif",i=256,s){if(typeof document>"u")return new We({});const o=document.createElement("canvas");o.width=t*i,o.height=e*i;const a=o.getContext("2d");if(!a)throw new Error("Failed to create 2D canvas context for dice texture");const c=64,l=document.createElement("canvas");l.width=c,l.height=c;const u=l.getContext("2d"),d=u.createImageData(c,c),h=d.data;for(let g=0;g<r.length;g++){const v=r[g],f=g%t,m=Math.floor(g/t),_=f*i,y=m*i,x=_+i/2,b=y+i/2,E=g*1.618%(Math.PI*2),C=Math.cos(E),M=Math.sin(E),w=g*13.7;for(let P=0;P<c;P++){const R=(P-c/2)/(c*.5);for(let D=0;D<c;D++){const N=(D-c/2)/(c*.5),O=(N*C-R*M)*2.2+w,L=(N*M+R*C)*2.2+w,U=f_(O,L),W=(Math.sin(O*1.8+L*.6+3*U)+1)*.5,Y=Math.pow(W,3.8),ot=Math.sqrt(N*N+R*R),at=Math.max(0,1-Math.pow(ot*.9,3)),Q=Math.min(255,Math.max(0,Math.round(W*255*(.6+.4*at)))),Dt=Math.min(255,Math.max(0,Math.round(Y*255))),kt=(P*c+D)*4;h[kt]=Q,h[kt+1]=0,h[kt+2]=0,h[kt+3]=Dt}}if(u.putImageData(d,0,0),a.imageSmoothingEnabled=!0,a.drawImage(l,_,y,i,i),s===4&&g<os.length){const[P,R,D]=os[g],N=Math.floor(i*.3);xr(a,P.toString(),x,b-i*.3,N,n,0),xr(a,R.toString(),x-i*.26,b+i*.15,N,n,-2*Math.PI/3),xr(a,D.toString(),x+i*.26,b+i*.15,N,n,2*Math.PI/3)}else{const P=v.toString(),R=Math.floor(i*(P.length>2?.36:.46));xr(a,P,x,b,R,n,0,v===6||v===9)}}const p=new We(o);return p.generateMipmaps=!0,p.minFilter=mn,p.magFilter=we,p.anisotropy=8,p}function Mr(r,t,e,n,i,s=0,o=!1){if(r.save(),r.translate(e,n),s!==0&&r.rotate(s),r.font=`900 ${i}px Inter, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.save(),r.lineJoin="round",r.lineWidth=Math.max(4,i*.12),r.strokeStyle="rgba(15, 15, 15, 0.90)",r.strokeText(t,0,1),r.fillStyle="rgba(25, 25, 25, 0.95)",r.fillText(t,0,1),r.restore(),o){const a=i*.42,c=Math.max(4,i*.1),l=i*.36,u=-a/2;r.fillStyle="rgba(25, 25, 25, 0.95)",r.fillRect(u-2,l-1,a+4,c+2)}r.restore()}function $i(r,t,e,n=256,i){if(typeof document>"u")return new We({});const s=t*n,o=e*n,a=document.createElement("canvas");a.width=s,a.height=o;const c=a.getContext("2d");if(!c)throw new Error("Failed to create heightmap canvas context");c.fillStyle="#808080",c.fillRect(0,0,s,o);for(let f=0;f<r.length;f++){const m=f%t,_=Math.floor(f/t),y=m*n,x=_*n,b=f*23.3,E=c.createImageData(n,n),C=E.data;for(let w=0;w<n;w++){const P=(w-n/2)/(n*.5);for(let R=0;R<n;R++){const N=(R-n/2)/(n*.5)*4.5+b,O=P*4.5+b,U=128+p_(N,O,f*17),k=(w*n+R)*4;C[k]=Math.min(255,Math.max(0,U)),C[k+1]=Math.min(255,Math.max(0,U)),C[k+2]=Math.min(255,Math.max(0,U)),C[k+3]=255}}c.putImageData(E,y,x),c.save(),c.lineCap="round";const M=14;for(let w=0;w<M;w++){const P=y+15+An(w,f,11)*(n-30),R=x+15+An(w,f,22)*(n-30),D=An(w,f,33)*Math.PI*2,N=6+An(w,f,44)*20,O=An(w,f,55)<.2;c.beginPath(),c.moveTo(P,R),c.lineTo(P+Math.cos(D)*N,R+Math.sin(D)*N),c.lineWidth=O?1.8:1.1,c.strokeStyle=O?"rgba(25, 25, 25, 0.70)":"rgba(45, 45, 45, 0.45)",c.stroke()}c.restore()}for(let f=0;f<r.length;f++){const m=r[f],_=f%t,y=Math.floor(f/t),x=_*n+n/2,b=y*n+n/2;if(i===4&&f<os.length){const[E,C,M]=os[f],w=Math.floor(n*.3);Mr(c,E.toString(),x,b-n*.3,w,0),Mr(c,C.toString(),x-n*.26,b+n*.15,w,-2*Math.PI/3),Mr(c,M.toString(),x+n*.26,b+n*.15,w,2*Math.PI/3)}else{const E=m.toString(),C=Math.floor(n*(E.length>2?.36:.46));Mr(c,E,x,b,C,0,m===6||m===9)}}const l=c.getImageData(0,0,s,o).data,u=document.createElement("canvas");u.width=s,u.height=o;const d=u.getContext("2d"),h=d.createImageData(s,o),p=h.data,g=2.4;for(let f=0;f<o;f++){const m=Math.max(0,f-1),_=Math.min(o-1,f+1);for(let y=0;y<s;y++){const x=Math.max(0,y-1),b=Math.min(s-1,y+1),E=l[(f*s+x)*4]/255,C=l[(f*s+b)*4]/255,M=l[(m*s+y)*4]/255,w=l[(_*s+y)*4]/255,P=(C-E)*g,R=(w-M)*g;let D=-P,N=-R,O=1;const L=Math.sqrt(D*D+N*N+O*O);D/=L,N/=L,O/=L;const U=(f*s+y)*4;p[U]=Math.round((D*.5+.5)*255),p[U+1]=Math.round((N*.5+.5)*255),p[U+2]=Math.round((O*.5+.5)*255),p[U+3]=255}}d.putImageData(h,0,0);const v=new We(u);return v.generateMipmaps=!0,v.minFilter=mn,v.magFilter=we,v.anisotropy=8,v}function ru(r,t){const e=Fc.get(r);if(e)return e;let n;switch(r){case 4:n=$i(t,2,2,256,4);break;case 6:n=$i(t,3,2);break;case 8:n=$i(t,4,2);break;case 10:n=$i(t,5,2);break;case 12:n=$i(t,4,3);break;case 20:default:n=$i(t,5,4);break}return Fc.set(r,n),n}function ou(r,t,e="Inter, sans-serif"){const n=`${r}_${e}`,i=Uc.get(n);if(i)return i;let s;switch(r){case 4:s=Zi(t,2,2,e,256,4);break;case 6:s=Zi(t,3,2,e);break;case 8:s=Zi(t,4,2,e);break;case 10:s=Zi(t,5,2,e);break;case 12:s=Zi(t,4,3,e);break;case 20:default:s=Zi(t,5,4,e);break}return Uc.set(n,s),s}function m_(r,t,e){let n,i,s,o,a,c;if(t<8)e>55?([n,i,s]=De(230,25,12),[o,a,c]=De(230,20,4)):([n,i,s]=De(46,90,78),[o,a,c]=De(0,0,2));else if(e>52){const l=(r+180)%360,u=Math.max(45,Math.min(75,t));[n,i,s]=De(l,u,13),[o,a,c]=De(l,u,4)}else{let l=45;r>=330||r<=35?l=48:r>=85&&r<=175?l=42:r>175&&r<330?l=46:l=45,[n,i,s]=De(l,90,80),[o,a,c]=De(r,Math.max(0,t-15),3)}return{numeralColor:new zt(n/255,i/255,s/255),trenchColor:new zt(o/255,a/255,c/255)}}function g_(r=gi){if(r.borderColor)return new zt(r.borderColor);const{h:t,s:e,l:n}=su(r.backgroundColor);if(e<10)if(n>50){const[c,l,u]=De(230,30,10);return new zt(c/255,l/255,u/255)}else{const[c,l,u]=De(46,95,80);return new zt(c/255,l/255,u/255)}if(n>50){const c=(t+180)%360,l=Math.max(45,Math.min(80,e)),[u,d,h]=De(c,l,11);return new zt(u/255,d/255,h/255)}let i=45;t>=330||t<=35?i=48:t>=85&&t<=175?i=42:t>175&&t<330?i=46:i=45;const[s,o,a]=De(i,95,80);return new zt(s/255,o/255,a/255)}function Bc(r,t,e=gi){const n=e.fontFamily??gi.fontFamily??"Inter, sans-serif",i=ou(r,t,n),s=ru(r,t),o=au(r,t,n),{h:a,s:c,l}=su(e.backgroundColor);let u,d,h,p,g,v,f,m,_;const y=l>50;if(c===0){const R=y?Math.max(5,l-12):Math.min(95,l+8),D=y?Math.max(5,l-28):Math.min(95,l+16);[u,d,h]=De(0,0,l),[p,g,v]=De(0,0,R),[f,m,_]=De(220,10,D)}else{const R=y?Math.max(5,l-12):Math.min(95,l+8),D=y?Math.max(5,l-25):Math.min(95,l+16),N=(a+(y?-18:14)+360)%360,O=y?Math.min(100,c+25):Math.min(100,c+8);[u,d,h]=De(a,c,l),[p,g,v]=De(a,Math.max(0,c-6),R),[f,m,_]=De(N,O,D)}const x=new zt(u/255,d/255,h/255),b=new zt(p/255,g/255,v/255),E=new zt(f/255,m/255,_/255),{numeralColor:C,trenchColor:M}=m_(a,c,l),w=y?1.65:.9,P=new jd({map:i,normalMap:s,normalScale:new Kt(w,w),roughness:y?.22:.18,metalness:.05,transparent:!0,opacity:1,emissiveMap:o,emissive:new zt(16766287),emissiveIntensity:0});return P.onBeforeCompile=R=>{R.uniforms.uBodyColor={value:x},R.uniforms.uCloudColor={value:b},R.uniforms.uVeinColor={value:E},R.uniforms.uNumeralColor={value:C},R.uniforms.uTrenchColor={value:M},R.uniforms.uIsLight={value:y?1:0},R.fragmentShader=`
            uniform vec3 uBodyColor;
            uniform vec3 uCloudColor;
            uniform vec3 uVeinColor;
            uniform vec3 uNumeralColor;
            uniform vec3 uTrenchColor;
            uniform float uIsLight;
        `+R.fragmentShader,R.fragmentShader=R.fragmentShader.replace("#include <map_fragment>",`
            #ifdef USE_MAP
                vec4 sampledMap = texture2D(map, vMapUv);
                float cloudNoise  = sampledMap.r; // 0.0 - 1.0 soft translucent cloud swirl
                float numeralMask = sampledMap.g; // 1.0 inside numeral, 0.0 outside
                float trenchMask  = sampledMap.b; // 1.0 inside engraved trench
                float veinNoise   = sampledMap.a; // 0.0 - 1.0 delicate mineral vein

                // 1. Translucent resin body with organic cloud variation
                float cloudStrength = mix(0.40, 0.70, uIsLight);
                vec3 resinCol = mix(uBodyColor, uCloudColor, cloudNoise * cloudStrength);

                // 2. Delicate mineral vein wisps (amplified contrast on light dice)
                float veinThreshold = mix(0.35, 0.25, uIsLight);
                float veinFactor = smoothstep(veinThreshold, 0.95, veinNoise);
                float veinStrength = mix(0.40, 0.75, uIsLight);
                resinCol = mix(resinCol, uVeinColor, veinFactor * veinStrength);

                #ifdef USE_NORMALMAP
                    // 3. Micro-cavity occlusion for scratches and pitting (subtle tactile micro-shadows)
                    vec4 sampledNormal = texture2D(normalMap, vNormalMapUv);
                    vec2 normalSlope = (sampledNormal.xy - 0.5) * 2.0;
                    float pitDepth = length(normalSlope);
                    float microOcclusion = 1.0 - smoothstep(0.06, 0.50, pitDepth) * mix(0.18, 0.42, uIsLight);
                    resinCol *= microOcclusion;
                #endif

                // 4. Dark engraved trench shadow
                vec3 finalCol = mix(resinCol, uTrenchColor, trenchMask * (1.0 - numeralMask));

                // 5. Inlaid high-contrast numerals
                finalCol = mix(finalCol, uNumeralColor, numeralMask);

                diffuseColor = vec4(finalCol, opacity);
            #endif
            `)},P}function yr(r,t,e,n,i,s,o=0,a=!1){if(r.save(),r.translate(e,n),o!==0&&r.rotate(o),r.font=`900 ${i}px ${s}`,r.textAlign="center",r.textBaseline="middle",r.save(),r.shadowColor="#ffd54f",r.shadowBlur=14,r.fillStyle="#ffffff",r.fillText(t,0,0),r.restore(),r.fillStyle="#ffffff",r.fillText(t,0,0),a){const c=i*.42,l=Math.max(3,i*.1),u=i*.36,d=-c/2;r.save(),r.shadowColor="#ffd54f",r.shadowBlur=10,r.fillStyle="#ffffff",r.fillRect(d,u,c,l),r.restore()}r.restore()}function Ji(r,t,e,n="Inter, sans-serif",i=256,s){if(typeof document>"u")return new We({});const o=document.createElement("canvas");o.width=t*i,o.height=e*i;const a=o.getContext("2d");if(!a)throw new Error("Failed to create 2D canvas context for dice emissive atlas");a.fillStyle="#000000",a.fillRect(0,0,o.width,o.height);for(let l=0;l<r.length;l++){const u=r[l],d=l%t,h=Math.floor(l/t),p=d*i,g=h*i,v=p+i/2,f=g+i/2;if(s===4&&l<os.length){const[m,_,y]=os[l],x=Math.floor(i*.3);yr(a,m.toString(),v,f-i*.3,x,n,0),yr(a,_.toString(),v-i*.26,f+i*.15,x,n,-2*Math.PI/3),yr(a,y.toString(),v+i*.26,f+i*.15,x,n,2*Math.PI/3)}else{const m=u.toString(),_=Math.floor(i*(m.length>2?.36:.46));yr(a,m,v,f,_,n,0,u===6||u===9)}}const c=new We(o);return c.generateMipmaps=!0,c.minFilter=mn,c.magFilter=we,c.anisotropy=8,c}const zc=new Map;function au(r,t,e="Inter, sans-serif"){const n=`${r}_${e}`,i=zc.get(n);if(i)return i;let s;switch(r){case 4:s=Ji(t,2,2,e,256,4);break;case 6:s=Ji(t,3,2,e);break;case 8:s=Ji(t,4,2,e);break;case 10:s=Ji(t,5,2,e);break;case 12:s=Ji(t,4,3,e);break;case 20:default:s=Ji(t,5,4,e);break}return zc.set(n,s),s}function __(r){const t=[4,6,8,10,12,20];for(const e of t){const n=Da(e);n&&(ou(e,n.faceValues,r),ru(e,n.faceValues),au(e,n.faceValues,r))}}class _n{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new T);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new T);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new _n);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],u=n[4],d=n[5],h=n[6],p=n[7],g=n[8],v=i[0],f=i[1],m=i[2],_=i[3],y=i[4],x=i[5],b=i[6],E=i[7],C=i[8];return s[0]=o*v+a*_+c*b,s[1]=o*f+a*y+c*E,s[2]=o*m+a*x+c*C,s[3]=l*v+u*_+d*b,s[4]=l*f+u*y+d*E,s[5]=l*m+u*x+d*C,s[6]=h*v+p*_+g*b,s[7]=h*f+p*y+g*E,s[8]=h*m+p*x+g*C,e}scale(t,e){e===void 0&&(e=new _n);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new T);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let u;const d=4;let h;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*a];while(--u);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const p=s[o+i*a]/s[o+i*o];u=d;do h=d-u,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*p;while(--u)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new _n);const e=3,n=6,i=v_;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const u=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=u;do d=u-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const h=i[s+n*o]/i[s+n*s];l=u;do d=u-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--l)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--l)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*h;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,u=e*a,d=e*c,h=n*a,p=n*c,g=i*c,v=s*o,f=s*a,m=s*c,_=this.elements;return _[3*0+0]=1-(h+g),_[3*0+1]=u-m,_[3*0+2]=d+f,_[3*1+0]=u+m,_[3*1+1]=1-(l+g),_[3*1+2]=p-v,_[3*2+0]=d-f,_[3*2+1]=p+v,_[3*2+2]=1-(l+h),this}transpose(t){t===void 0&&(t=new _n);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const v_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class T{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new T);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new T(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new T(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new _n([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new T);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new T);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new T),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new T),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new T),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=x_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=M_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Vc),Vc.almostEquals(t,e)}clone(){return new T(this.x,this.y,this.z)}}T.ZERO=new T(0,0,0);T.UNIT_X=new T(1,0,0);T.UNIT_Y=new T(0,1,0);T.UNIT_Z=new T(0,0,1);const x_=new T,M_=new T,Vc=new T;class rn{constructor(t){t===void 0&&(t={}),this.lowerBound=new T,this.upperBound=new T,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Gc),l=Gc),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new rn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),o.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){const n=kc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,u,d);for(let h=0;h!==8;h++){const p=n[h];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=kc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,u,d);for(let h=0;h!==8;h++){const p=n[h];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(d,h));return!(g<0||p>g)}}const Gc=new T,kc=[new T,new T,new T,new T,new T,new T,new T,new T];class Hc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class lu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Se{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new T),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=y_,i=S_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Se);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=n*u+o*a+i*l-s*c,e.y=i*u+o*c+s*a-n*l,e.z=s*u+o*l+n*c-i*a,e.w=o*u-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Se);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Se),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new T);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*s-c*i,d=l*i+c*n-o*s,h=l*s+o*i-a*n,p=-o*n-a*i-c*s;return e.x=u*l+p*-o+d*-c-h*-a,e.y=d*l+p*-a+h*-o-u*-c,e.z=h*l+p*-c+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const u=o*a+c*l;if(u>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=a*a,p=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*h-2*p),i=Math.asin(2*u),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a-c*l*u):i==="YXZ"?(this.x=c*o*a+s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a+c*l*u):i==="ZXY"?(this.x=c*o*a-s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a-c*l*u):i==="ZYX"?(this.x=c*o*a-s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a+c*l*u):i==="YZX"?(this.x=c*o*a+s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a-c*l*u):i==="XZY"&&(this.x=c*o*a-s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a+c*l*u),this}clone(){return new Se(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Se);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,u=t.z,d=t.w,h,p,g,v,f;return p=i*c+s*l+o*u+a*d,p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(h=Math.acos(p),g=Math.sin(h),v=Math.sin((1-e)*h)/g,f=Math.sin(e*h)/g):(v=1-e,f=e),n.x=v*i+f*c,n.y=v*s+f*l,n.z=v*o+f*u,n.w=v*a+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new Se);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+o*u-a*l),i.y+=h*(o*d+a*c-s*u),i.z+=h*(a*d+s*l-o*c),i.w+=h*(-s*c-o*l-a*u),i}}const y_=new T,S_=new T,E_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Rt{constructor(t){t===void 0&&(t={}),this.id=Rt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Rt.idCounter=0;Rt.types=E_;class ne{constructor(t){t===void 0&&(t={}),this.position=new T,this.quaternion=new Se,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ne.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ne.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new T),n.vsub(t,i),e.conjugate(Wc),Wc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new T),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new T),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new T),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Wc=new Se;class Ri extends Rt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Rt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new T;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new T;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Ri.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new T,o=new T;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const u=new T;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const v=u.dot(o);v>h&&(h=v,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],f=new T;f.copy(v),s.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new T,u=new T,d=new T,h=new T,p=new T,g=new T;let v=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let m=0;m!==f.uniqueAxes.length;m++){n.vmult(f.uniqueAxes[m],l);const _=f.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(l))}else{const m=a?a.length:f.faces.length;for(let _=0;_<m;_++){const y=a?a[_]:_;l.copy(f.faceNormals[y]),n.vmult(l,l);const x=f.testSepAxis(l,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(l))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){s.vmult(t.uniqueAxes[m],u);const _=f.testSepAxis(u,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}else{const m=c?c.length:t.faces.length;for(let _=0;_<m;_++){const y=c?c[_]:_;u.copy(t.faceNormals[y]),s.vmult(u,u);const x=f.testSepAxis(u,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(u))}}for(let m=0;m!==f.uniqueEdges.length;m++){n.vmult(f.uniqueEdges[m],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],p),h.cross(p,g),!g.almostZero()){g.normalize();const y=f.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Ri.project(a,t,n,i,Lo),Ri.project(e,t,s,o,Do);const c=Lo[0],l=Lo[1],u=Do[0],d=Do[1];if(c<d||u<l)return!1;const h=c-d,p=u-l;return h<p?h:p}calculateLocalInertia(t,e){const n=new T,i=new T;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new T,l=new T,u=new T,d=new T,h=new T,p=new T,g=new T,v=new T,f=this,m=[],_=i,y=m;let x=-1,b=Number.MAX_VALUE;for(let P=0;P<f.faces.length;P++){c.copy(f.faceNormals[P]),n.vmult(c,c);const R=c.dot(t);R<b&&(b=R,x=P)}if(x<0)return;const E=f.faces[x];E.connectedFaces=[];for(let P=0;P<f.faces.length;P++)for(let R=0;R<f.faces[P].length;R++)E.indexOf(f.faces[P][R])!==-1&&P!==x&&E.connectedFaces.indexOf(P)===-1&&E.connectedFaces.push(P);const C=E.length;for(let P=0;P<C;P++){const R=f.vertices[E[P]],D=f.vertices[E[(P+1)%C]];R.vsub(D,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),p.copy(R),n.vmult(p,p),e.vadd(p,p);const N=E.connectedFaces[P];g.copy(this.faceNormals[N]);const O=this.getPlaneConstantOfFace(N);v.copy(g),n.vmult(v,v);const L=O-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,L);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const M=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const w=M-v.dot(e);for(let P=0;P<_.length;P++){let R=v.dot(_[P])+w;if(R<=s&&(console.log(`clamped: depth=${R} to minDist=${s}`),R=s),R<=o){const D=_[P];if(R<=1e-6){const N={point:D,normal:v,depth:R};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let u=0;u<a;u++){if(l=t[u],o=n.dot(l)+i,s<0)if(o<0){const d=new T;d.copy(l),e.push(d)}else{const d=new T;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new T;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new T);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new T);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,u,d,h=new T;for(let p=0;p<s.length;p++){h.copy(s[p]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new T);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new T;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a];const l=e[n[a][0]],u=new T;t.vsub(l,u);const d=c.dot(u),h=new T;o.vsub(l,h);const p=c.dot(h);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(t,e,n,i,s){const o=t.vertices.length,a=b_;let c=0,l=0;const u=w_,d=t.vertices;u.setZero(),ne.vectorToLocalFrame(n,i,e,a),ne.pointToLocalFrame(n,i,u,u);const h=u.dot(a);l=c=d[0].dot(a);for(let p=1;p<o;p++){const g=d[p].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const p=l;l=c,c=p}s[0]=c,s[1]=l}}const Lo=[],Do=[];new T;const b_=new T,w_=new T;class rl extends Rt{constructor(t){super({type:Rt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=T,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Ri({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new T),rl.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ai.set(s[o][0],s[o][1],s[o][2]),e.vmult(ai,ai),t.vadd(ai,ai),n(ai.x,ai.y,ai.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;En[0].set(s.x,s.y,s.z),En[1].set(-s.x,s.y,s.z),En[2].set(-s.x,-s.y,s.z),En[3].set(-s.x,-s.y,-s.z),En[4].set(s.x,-s.y,-s.z),En[5].set(s.x,s.y,-s.z),En[6].set(-s.x,s.y,-s.z),En[7].set(s.x,-s.y,s.z);const o=En[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=En[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,u=c.y,d=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),d>i.z&&(i.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const ai=new T,En=[new T,new T,new T,new T,new T,new T,new T,new T],ol={DYNAMIC:1,STATIC:2,KINEMATIC:4},al={AWAKE:0,SLEEPY:1,SLEEPING:2};class At extends lu{constructor(t){t===void 0&&(t={}),super(),this.id=At.idCounter++,this.index=-1,this.world=null,this.vlambda=new T,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new T,this.previousPosition=new T,this.interpolatedPosition=new T,this.initPosition=new T,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new T,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new T,this.force=new T;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?At.STATIC:At.DYNAMIC,typeof t.type==typeof At.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=At.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new T,this.quaternion=new Se,this.initQuaternion=new Se,this.previousQuaternion=new Se,this.interpolatedQuaternion=new Se,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new T,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new T,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new T,this.invInertia=new T,this.invInertiaWorld=new _n,this.invMassSolve=0,this.invInertiaSolve=new T,this.invInertiaWorldSolve=new _n,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new T(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new T(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new rn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new T,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=At.AWAKE,this.wakeUpAfterNarrowphase=!1,t===At.SLEEPING&&this.dispatchEvent(At.wakeupEvent)}sleep(){this.sleepState=At.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===At.AWAKE&&n<i?(this.sleepState=At.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(At.sleepyEvent)):e===At.SLEEPY&&n>i?this.wakeUp():e===At.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(At.sleepEvent))}}updateSolveMassProperties(){this.sleepState===At.SLEEPING||this.type===At.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new T),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new T),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new T,s=new Se;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=T_,o=A_,a=this.quaternion,c=this.aabb,l=C_;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=R_,i=P_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new T),this.type!==At.DYNAMIC)return;this.sleepState===At.SLEEPING&&this.wakeUp();const n=L_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new T),this.type!==At.DYNAMIC)return;const n=D_,i=N_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===At.DYNAMIC&&(this.sleepState===At.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new T),this.type!==At.DYNAMIC)return;this.sleepState===At.SLEEPING&&this.wakeUp();const n=e,i=U_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=F_;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new T),this.type!==At.DYNAMIC)return;const n=O_,i=B_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=z_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),rl.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new T;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===At.DYNAMIC||this.type===At.KINEMATIC)||this.sleepState===At.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,p=u*t;i.x+=a.x*p*h.x,i.y+=a.y*p*h.y,i.z+=a.z*p*h.z;const g=d.elements,v=this.angularFactor,f=c.x*v.x,m=c.y*v.y,_=c.z*v.z;s.x+=t*(g[0]*f+g[1]*m+g[2]*_),s.y+=t*(g[3]*f+g[4]*m+g[5]*_),s.z+=t*(g[6]*f+g[7]*m+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}At.idCounter=0;At.COLLIDE_EVENT_NAME="collide";At.DYNAMIC=ol.DYNAMIC;At.STATIC=ol.STATIC;At.KINEMATIC=ol.KINEMATIC;At.AWAKE=al.AWAKE;At.SLEEPY=al.SLEEPY;At.SLEEPING=al.SLEEPING;At.wakeupEvent={type:"wakeup"};At.sleepyEvent={type:"sleepy"};At.sleepEvent={type:"sleep"};const T_=new T,A_=new Se,C_=new rn,R_=new _n,P_=new _n,I_=new _n,L_=new T,D_=new T,N_=new T,U_=new T,F_=new T,O_=new T,B_=new T,z_=new T;class V_{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&At.STATIC||t.sleepState===At.SLEEPING)&&(e.type&At.STATIC||e.sleepState===At.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=G_;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=k_,i=H_,s=W_,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new T;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const G_=new T;new T;new Se;new T;const k_={keys:[]},H_=[],W_=[];new T;new T;new T;class X_ extends V_{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Hr{constructor(){this.rayFromWorld=new T,this.rayToWorld=new T,this.hitNormalWorld=new T,this.hitPointWorld=new T,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let cu,hu,uu,du,fu,pu,mu;const ll={CLOSEST:1,ANY:2,ALL:4};cu=Rt.types.SPHERE;hu=Rt.types.PLANE;uu=Rt.types.BOX;du=Rt.types.CYLINDER;fu=Rt.types.CONVEXPOLYHEDRON;pu=Rt.types.HEIGHTFIELD;mu=Rt.types.TRIMESH;class be{get[cu](){return this._intersectSphere}get[hu](){return this._intersectPlane}get[uu](){return this._intersectBox}get[du](){return this._intersectConvex}get[fu](){return this._intersectConvex}get[pu](){return this._intersectHeightfield}get[mu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new T),e===void 0&&(e=new T),this.from=t.clone(),this.to=e.clone(),this.direction=new T,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=be.ANY,this.result=new Hr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||be.ANY,this.result=e.result||new Hr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Xc),No.length=0,t.broadphase.aabbQuery(t,Xc,No),this.intersectBodies(No),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=q_,s=Y_;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(av(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new T(0,0,1);e.vmult(l,l);const u=new T;o.vsub(n,u);const d=u.dot(l);a.vsub(n,u);const h=u.dot(l);if(d*h>0||o.distanceTo(a)<d)return;const p=l.dot(c);if(Math.abs(p)<this.precision)return;const g=new T,v=new T,f=new T;o.vsub(n,g);const m=-l.dot(g)/p;c.scale(m,v),o.vadd(v,f),this.reportIntersection(l,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=K_;o.from.copy(this.from),o.to.copy(this.to),ne.pointToLocalFrame(n,e,o.from,o.from),ne.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Z_;let c,l,u,d;c=l=0,u=d=t.data.length-1;const h=new rn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let p=c;p<u;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),ne.pointToWorldFrame(n,e,t.pillarOffset,Sr),this._intersectConvex(t.pillarConvex,e,Sr,i,s,qc),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),ne.pointToWorldFrame(n,e,t.pillarOffset,Sr),this._intersectConvex(t.pillarConvex,e,Sr,i,s,qc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=u**2-4*l*d,p=$_,g=J_;if(!(h<0))if(h===0)o.lerp(a,h,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const v=(-u-Math.sqrt(h))/(2*l),f=(-u+Math.sqrt(h))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Q_,c=Yc,l=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,p=this.direction,g=this.from,v=this.to,f=g.distanceTo(v),m=l?l.length:u.length,_=this.result;for(let y=0;!_.shouldStop&&y<m;y++){const x=l?l[y]:y,b=u[x],E=h[x],C=e,M=n;c.copy(d[b[0]]),C.vmult(c,c),c.vadd(M,c),c.vsub(g,c),C.vmult(E,a);const w=p.dot(a);if(Math.abs(w)<this.precision)continue;const P=a.dot(c)/w;if(!(P<0)){p.scale(P,Ke),Ke.vadd(g,Ke),pn.copy(d[b[0]]),C.vmult(pn,pn),M.vadd(pn,pn);for(let R=1;!_.shouldStop&&R<b.length-1;R++){bn.copy(d[b[R]]),wn.copy(d[b[R+1]]),C.vmult(bn,bn),C.vmult(wn,wn),M.vadd(bn,bn),M.vadd(wn,wn);const D=Ke.distanceTo(g);!(be.pointInTriangle(Ke,pn,bn,wn)||be.pointInTriangle(Ke,bn,pn,wn))||D>f||this.reportIntersection(a,Ke,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=j_,c=rv,l=ov,u=Yc,d=tv,h=ev,p=nv,g=sv,v=iv,f=t.indices;t.vertices;const m=this.from,_=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(e),ne.vectorToLocalFrame(n,e,y,d),ne.pointToLocalFrame(n,e,m,h),ne.pointToLocalFrame(n,e,_,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,p.vsub(h,d),d.normalize();const x=h.distanceSquared(p);t.tree.rayQuery(this,l,c);for(let b=0,E=c.length;!this.result.shouldStop&&b!==E;b++){const C=c[b];t.getNormal(C,a),t.getVertex(f[C*3],pn),pn.vsub(h,u);const M=d.dot(a),w=a.dot(u)/M;if(w<0)continue;d.scale(w,Ke),Ke.vadd(h,Ke),t.getVertex(f[C*3+1],bn),t.getVertex(f[C*3+2],wn);const P=Ke.distanceSquared(h);!(be.pointInTriangle(Ke,bn,pn,wn)||be.pointInTriangle(Ke,pn,bn,wn))||P>x||(ne.vectorToWorldFrame(e,a,v),ne.pointToWorldFrame(n,e,Ke,g),this.reportIntersection(v,g,s,i,C))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case be.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case be.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case be.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ai),n.vsub(e,Ms),t.vsub(e,Uo);const s=Ai.dot(Ai),o=Ai.dot(Ms),a=Ai.dot(Uo),c=Ms.dot(Ms),l=Ms.dot(Uo);let u,d;return(u=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&u+d<s*c-o*o}}be.CLOSEST=ll.CLOSEST;be.ANY=ll.ANY;be.ALL=ll.ALL;const Xc=new rn,No=[],Ms=new T,Uo=new T,q_=new T,Y_=new Se,Ke=new T,pn=new T,bn=new T,wn=new T;new T;new Hr;const qc={faceList:[0]},Sr=new T,K_=new be,Z_=[],$_=new T,J_=new T,Q_=new T;new T;new T;const Yc=new T,j_=new T,tv=new T,ev=new T,nv=new T,iv=new T,sv=new T;new rn;const rv=[],ov=new ne,Ai=new T,Er=new T;function av(r,t,e){e.vsub(r,Ai);const n=Ai.dot(t);return t.scale(n,Er),Er.vadd(r,Er),e.distanceTo(Er)}class lv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Kc{constructor(){this.spatial=new T,this.rotational=new T}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Bs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Bs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Kc,this.jacobianElementB=new Kc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return s.scale(l,Zc),a.scale(u,$c),n.invInertiaWorldSolve.vmult(o,Jc),i.invInertiaWorldSolve.vmult(c,Qc),t.multiplyVectors(Zc,Jc)+e.multiplyVectors($c,Qc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,br),l+=br.dot(t.rotational),c.vmult(e.rotational,br),l+=br.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=cv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Bs.idCounter=0;const Zc=new T,$c=new T,Jc=new T,Qc=new T,br=new T,cv=new T;class hv extends Bs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new T,this.rj=new T,this.ni=new T}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=uv,l=dv,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=fv,v=this.jacobianElementA,f=this.jacobianElementB,m=this.ni;o.cross(m,c),a.cross(m,l),m.negate(v.spatial),c.negate(v.rotational),f.spatial.copy(m),f.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=m.dot(g),y=this.restitution+1,x=y*h.dot(m)-y*u.dot(m)+p.dot(l)-d.dot(c),b=this.computeGiMf();return-_*e-x*n-t*b}getImpactVelocityAlongNormal(){const t=pv,e=mv,n=gv,i=_v,s=vv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const uv=new T,dv=new T,fv=new T,pv=new T,mv=new T,gv=new T,_v=new T,vv=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class jc extends Bs{constructor(t,e,n){super(t,e,-n,n),this.ri=new T,this.rj=new T,this.t=new T}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=xv,o=Mv,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const xv=new T,Mv=new T;class as{constructor(t,e,n){n=lv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=as.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}as.idCounter=0;class ls{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ls.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ls.idCounter=0;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new be;new T;new T;new T;new T(1,0,0),new T(0,1,0),new T(0,0,1);new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class yv extends Rt{constructor(){super({type:Rt.types.PLANE}),this.worldNormal=new T,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new T),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){zn.set(0,0,1),e.vmult(zn,zn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),zn.x===1?i.x=t.x:zn.x===-1&&(n.x=t.x),zn.y===1?i.y=t.y:zn.y===-1&&(n.y=t.y),zn.z===1?i.z=t.z:zn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const zn=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new rn;new T;new rn;new T;new T;new T;new T;new T;new T;new T;new rn;new T;new ne;new rn;class Sv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Ev extends Sv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,u=t;let d,h,p,g,v,f;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();const m=wv,_=Tv,y=bv;m.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const b=o[x];y[x]=0,_[x]=b.computeB(u),m[x]=1/b.computeC()}if(a!==0){for(let E=0;E!==l;E++){const C=c[E],M=C.vlambda,w=C.wlambda;M.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==a;E++){const C=o[E];d=_[E],h=m[E],f=y[E],v=C.computeGWlambda(),p=h*(d-v-C.eps*f),f+p<C.minForce?p=C.minForce-f:f+p>C.maxForce&&(p=C.maxForce-f),y[E]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<s)break}for(let E=0;E!==l;E++){const C=c[E],M=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),M.vadd(C.vlambda,M),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let x=o.length;const b=1/u;for(;x--;)o[x].multiplier=y[x]*b}return n}}const bv=[],wv=[],Tv=[];At.STATIC;class Av{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Cv extends Av{constructor(){super(...arguments),this.type=T}constructObject(){return new T}}const de={sphereSphere:Rt.types.SPHERE,spherePlane:Rt.types.SPHERE|Rt.types.PLANE,boxBox:Rt.types.BOX|Rt.types.BOX,sphereBox:Rt.types.SPHERE|Rt.types.BOX,planeBox:Rt.types.PLANE|Rt.types.BOX,convexConvex:Rt.types.CONVEXPOLYHEDRON,sphereConvex:Rt.types.SPHERE|Rt.types.CONVEXPOLYHEDRON,planeConvex:Rt.types.PLANE|Rt.types.CONVEXPOLYHEDRON,boxConvex:Rt.types.BOX|Rt.types.CONVEXPOLYHEDRON,sphereHeightfield:Rt.types.SPHERE|Rt.types.HEIGHTFIELD,boxHeightfield:Rt.types.BOX|Rt.types.HEIGHTFIELD,convexHeightfield:Rt.types.CONVEXPOLYHEDRON|Rt.types.HEIGHTFIELD,sphereParticle:Rt.types.PARTICLE|Rt.types.SPHERE,planeParticle:Rt.types.PLANE|Rt.types.PARTICLE,boxParticle:Rt.types.BOX|Rt.types.PARTICLE,convexParticle:Rt.types.PARTICLE|Rt.types.CONVEXPOLYHEDRON,cylinderCylinder:Rt.types.CYLINDER,sphereCylinder:Rt.types.SPHERE|Rt.types.CYLINDER,planeCylinder:Rt.types.PLANE|Rt.types.CYLINDER,boxCylinder:Rt.types.BOX|Rt.types.CYLINDER,convexCylinder:Rt.types.CONVEXPOLYHEDRON|Rt.types.CYLINDER,heightfieldCylinder:Rt.types.HEIGHTFIELD|Rt.types.CYLINDER,particleCylinder:Rt.types.PARTICLE|Rt.types.CYLINDER,sphereTrimesh:Rt.types.SPHERE|Rt.types.TRIMESH,planeTrimesh:Rt.types.PLANE|Rt.types.TRIMESH};class Rv{get[de.sphereSphere](){return this.sphereSphere}get[de.spherePlane](){return this.spherePlane}get[de.boxBox](){return this.boxBox}get[de.sphereBox](){return this.sphereBox}get[de.planeBox](){return this.planeBox}get[de.convexConvex](){return this.convexConvex}get[de.sphereConvex](){return this.sphereConvex}get[de.planeConvex](){return this.planeConvex}get[de.boxConvex](){return this.boxConvex}get[de.sphereHeightfield](){return this.sphereHeightfield}get[de.boxHeightfield](){return this.boxHeightfield}get[de.convexHeightfield](){return this.convexHeightfield}get[de.sphereParticle](){return this.sphereParticle}get[de.planeParticle](){return this.planeParticle}get[de.boxParticle](){return this.boxParticle}get[de.convexParticle](){return this.convexParticle}get[de.cylinderCylinder](){return this.convexConvex}get[de.sphereCylinder](){return this.sphereConvex}get[de.planeCylinder](){return this.planeConvex}get[de.boxCylinder](){return this.boxConvex}get[de.convexCylinder](){return this.convexConvex}get[de.heightfieldCylinder](){return this.heightfieldCylinder}get[de.particleCylinder](){return this.particleCylinder}get[de.sphereTrimesh](){return this.sphereTrimesh}get[de.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Cv,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new hv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,u=i.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,v=g.length?g.pop():new jc(n,i,h*p),f=g.length?g.pop():new jc(n,i,h*p);return v.bi=f.bi=n,v.bj=f.bj=i,v.minForce=f.minForce=-h*p,v.maxForce=f.maxForce=h*p,v.ri.copy(t.ri),v.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(v.t,f.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),f.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=f.enabled=t.enabled,e.push(v,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ei.setZero(),Qi.setZero(),ji.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Ei.vadd(e.ni,Ei),Qi.vadd(e.ri,Qi),ji.vadd(e.rj,ji)):(Ei.vsub(e.ni,Ei),Qi.vadd(e.rj,Qi),ji.vadd(e.ri,ji));const o=1/t;Qi.scale(o,n.ri),ji.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ei.normalize(),Ei.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=Lv,l=Dv,u=Pv,d=Iv;for(let h=0,p=t.length;h!==p;h++){const g=t[h],v=e[h];let f=null;g.material&&v.material&&(f=n.getContactMaterial(g.material,v.material)||null);const m=g.type&At.KINEMATIC&&v.type&At.STATIC||g.type&At.STATIC&&v.type&At.KINEMATIC||g.type&At.KINEMATIC&&v.type&At.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],u),u.vadd(g.position,u);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],l),v.quaternion.vmult(v.shapeOffsets[x],d),d.vadd(v.position,d);const b=v.shapes[x];if(!(y.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(d)>y.boundingSphereRadius+b.boundingSphereRadius)continue;let E=null;y.material&&b.material&&(E=n.getContactMaterial(y.material,b.material)||null),this.currentContactMaterial=E||f||n.defaultContactMaterial;const C=y.type|b.type,M=this[C];if(M){let w=!1;y.type<b.type?w=M.call(this,y,b,u,d,c,l,g,v,y,b,m):w=M.call(this,b,y,d,u,l,c,v,g,y,b,m),w&&m&&(n.shapeOverlapKeeper.set(y.id,b.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,u,d){const h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,wr),h.ni.scale(h.ni.dot(wr),th),wr.vsub(th,h.rj),-wr.dot(h.ni)<=t.radius){if(d)return!0;const p=h.ri,g=h.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,u,d){const h=this.v3pool,p=rx;n.vsub(i,Tr),e.getSideNormals(p,o);const g=t.radius;let v=!1;const f=ax,m=lx,_=cx;let y=null,x=0,b=0,E=0,C=null;for(let U=0,k=p.length;U!==k&&v===!1;U++){const W=nx;W.copy(p[U]);const Y=W.length();W.normalize();const ot=Tr.dot(W);if(ot<Y+g&&ot>0){const at=ix,Q=sx;at.copy(p[(U+1)%3]),Q.copy(p[(U+2)%3]);const Dt=at.length(),kt=Q.length();at.normalize(),Q.normalize();const Ot=Tr.dot(at),z=Tr.dot(Q);if(Ot<Dt&&Ot>-Dt&&z<kt&&z>-kt){const j=Math.abs(ot-Y-g);if((C===null||j<C)&&(C=j,b=Ot,E=z,y=Y,f.copy(W),m.copy(at),_.copy(Q),x++,d))return!0}}}if(x){v=!0;const U=this.createContactEquation(a,c,t,e,l,u);f.scale(-g,U.ri),U.ni.copy(f),U.ni.negate(U.ni),f.scale(y,f),m.scale(b,m),f.vadd(m,f),_.scale(E,_),f.vadd(_,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let M=h.get();const w=ox;for(let U=0;U!==2&&!v;U++)for(let k=0;k!==2&&!v;k++)for(let W=0;W!==2&&!v;W++)if(M.set(0,0,0),U?M.vadd(p[0],M):M.vsub(p[0],M),k?M.vadd(p[1],M):M.vsub(p[1],M),W?M.vadd(p[2],M):M.vsub(p[2],M),i.vadd(M,w),w.vsub(n,w),w.lengthSquared()<g*g){if(d)return!0;v=!0;const Y=this.createContactEquation(a,c,t,e,l,u);Y.ri.copy(w),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(M),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(c.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}h.release(M),M=null;const P=h.get(),R=h.get(),D=h.get(),N=h.get(),O=h.get(),L=p.length;for(let U=0;U!==L&&!v;U++)for(let k=0;k!==L&&!v;k++)if(U%3!==k%3){p[k].cross(p[U],P),P.normalize(),p[U].vadd(p[k],R),D.copy(n),D.vsub(R,D),D.vsub(i,D);const W=D.dot(P);P.scale(W,N);let Y=0;for(;Y===U%3||Y===k%3;)Y++;O.copy(n),O.vsub(N,O),O.vsub(R,O),O.vsub(i,O);const ot=Math.abs(W),at=O.length();if(ot<p[Y].length()&&at<g){if(d)return!0;v=!0;const Q=this.createContactEquation(a,c,t,e,l,u);R.vadd(N,Q.rj),Q.rj.copy(Q.rj),O.negate(Q.ni),Q.ni.normalize(),Q.ri.copy(Q.rj),Q.ri.vadd(i,Q.ri),Q.ri.vsub(n,Q.ri),Q.ri.normalize(),Q.ri.scale(g,Q.ri),Q.ri.vadd(n,Q.ri),Q.ri.vsub(a.position,Q.ri),Q.rj.vadd(i,Q.rj),Q.rj.vsub(c.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}}h.release(P,R,D,N,O)}planeBox(t,e,n,i,s,o,a,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,u,d,h,p){const g=bx;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,h,p)){const v=[],f=wx;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let m=0;for(let _=0;_!==v.length;_++){if(d)return!0;const y=this.createContactEquation(a,c,t,e,l,u),x=y.ri,b=y.rj;g.negate(y.ni),v[_].normal.negate(f),f.scale(v[_].depth,f),v[_].point.vadd(f,x),b.copy(v[_].point),x.vsub(n,x),b.vsub(i,b),x.vadd(n,x),x.vsub(a.position,x),b.vadd(i,b),b.vsub(c.position,b),this.result.push(y),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,s,o,a,c,l,u,d){const h=this.v3pool;n.vsub(i,hx);const p=e.faceNormals,g=e.faces,v=e.vertices,f=t.radius;let m=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=px;o.vmult(y,x),i.vadd(x,x);const b=fx;if(x.vsub(n,b),b.lengthSquared()<f*f){if(d)return!0;m=!0;const E=this.createContactEquation(a,c,t,e,l,u);E.ri.copy(b),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(f,E.ri),x.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(c.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&m===!1;_++){const x=p[_],b=g[_],E=mx;o.vmult(x,E);const C=gx;o.vmult(v[b[0]],C),C.vadd(i,C);const M=_x;E.scale(-f,M),n.vadd(M,M);const w=vx;M.vsub(C,w);const P=w.dot(E),R=xx;if(n.vsub(C,R),P<0&&R.dot(E)>0){const D=[];for(let N=0,O=b.length;N!==O;N++){const L=h.get();o.vmult(v[b[N]],L),i.vadd(L,L),D.push(L)}if(ex(D,E,n)){if(d)return!0;m=!0;const N=this.createContactEquation(a,c,t,e,l,u);E.scale(-f,N.ri),E.negate(N.ni);const O=h.get();E.scale(-P,O);const L=h.get();E.scale(-f,L),n.vsub(i,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(O,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),h.release(O),h.release(L),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let U=0,k=D.length;U!==k;U++)h.release(D[U]);return}else for(let N=0;N!==b.length;N++){const O=h.get(),L=h.get();o.vmult(v[b[(N+1)%b.length]],O),o.vmult(v[b[(N+2)%b.length]],L),i.vadd(O,O),i.vadd(L,L);const U=ux;L.vsub(O,U);const k=dx;U.unit(k);const W=h.get(),Y=h.get();n.vsub(O,Y);const ot=Y.dot(k);k.scale(ot,W),W.vadd(O,W);const at=h.get();if(W.vsub(n,at),ot>0&&ot*ot<U.lengthSquared()&&at.lengthSquared()<f*f){if(d)return!0;const Q=this.createContactEquation(a,c,t,e,l,u);W.vsub(i,Q.rj),W.vsub(n,Q.ni),Q.ni.normalize(),Q.ni.scale(f,Q.ri),Q.rj.vadd(i,Q.rj),Q.rj.vsub(c.position,Q.rj),Q.ri.vadd(n,Q.ri),Q.ri.vsub(a.position,Q.ri),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult);for(let Dt=0,kt=D.length;Dt!==kt;Dt++)h.release(D[Dt]);h.release(O),h.release(L),h.release(W),h.release(at),h.release(Y);return}h.release(O),h.release(L),h.release(W),h.release(at),h.release(Y)}for(let N=0,O=D.length;N!==O;N++)h.release(D[N])}}}planeConvex(t,e,n,i,s,o,a,c,l,u,d){const h=Mx,p=yx;p.set(0,0,1),s.vmult(p,p);let g=0;const v=Sx;for(let f=0;f!==e.vertices.length;f++)if(h.copy(e.vertices[f]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),p.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u),y=Ex;p.scale(p.dot(v),y),h.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(p),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,u,d){const h=e.data,p=t.radius,g=e.elementSize,v=Ox,f=Fx;ne.pointToLocalFrame(i,o,n,f);let m=Math.floor((f.x-p)/g)-1,_=Math.ceil((f.x+p)/g)+1,y=Math.floor((f.y-p)/g)-1,x=Math.ceil((f.y+p)/g)+1;if(_<0||x<0||m>h.length||y>h[0].length)return;m<0&&(m=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),m>=h.length&&(m=h.length-1),_>=h.length&&(_=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const b=[];e.getRectMinMax(m,y,_,x,b);const E=b[0],C=b[1];if(f.z-p>C||f.z+p<E)return;const M=this.result;for(let w=m;w<_;w++)for(let P=y;P<x;P++){const R=M.length;let D=!1;if(e.getConvexTrianglePillar(w,P,!1),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&D||(e.getConvexTrianglePillar(w,P,!0),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&D))return!0;if(M.length-R>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,u,d){const h=e.data,p=e.elementSize,g=t.boundingSphereRadius,v=Nx,f=Ux,m=Dx;ne.pointToLocalFrame(i,o,n,m);let _=Math.floor((m.x-g)/p)-1,y=Math.ceil((m.x+g)/p)+1,x=Math.floor((m.y-g)/p)-1,b=Math.ceil((m.y+g)/p)+1;if(y<0||b<0||_>h.length||x>h[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),b<0&&(b=0),_>=h.length&&(_=h.length-1),y>=h.length&&(y=h.length-1),b>=h[0].length&&(b=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const E=[];e.getRectMinMax(_,x,y,b,E);const C=E[0],M=E[1];if(!(m.z-g>M||m.z+g<C))for(let w=_;w<y;w++)for(let P=x;P<b;P++){let R=!1;if(e.getConvexTrianglePillar(w,P,!1),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,f,null)),d&&R||(e.getConvexTrianglePillar(w,P,!0),ne.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(R=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,f,null)),d&&R))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,u,d){const h=Rx;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,u,d){const h=Tx;h.set(0,0,1),a.quaternion.vmult(h,h);const p=Ax;if(i.vsub(a.position,p),h.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(c,a,e,t,l,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const f=Cx;h.scale(h.dot(i),f),i.vsub(f,f),v.rj.copy(f),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,u,d){let h=-1;const p=Ix,g=Lx;let v=null;const f=Px;if(f.copy(i),f.vsub(n,f),s.conjugate(eh),eh.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let m=0,_=t.faces.length;m!==_;m++){const y=[t.worldVertices[t.faces[m][0]]],x=t.worldFaceNormals[m];i.vsub(y[0],nh);const b=-x.dot(nh);if(v===null||Math.abs(b)<Math.abs(v)){if(d)return!0;v=b,h=m,p.copy(x)}}if(h!==-1){const m=this.createContactEquation(c,a,e,t,l,u);p.scale(v,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),p.negate(m.ni),m.ri.set(0,0,0);const _=m.ri,y=m.rj;_.vadd(i,_),_.vsub(c.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,u,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,u,d)}particleCylinder(t,e,n,i,s,o,a,c,l,u,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,u,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,u,d){const h=Gv,p=kv,g=Hv,v=Wv,f=Xv,m=qv,_=$v,y=Vv,x=Bv,b=Jv;ne.pointToLocalFrame(i,o,n,f);const E=t.radius;_.lowerBound.set(f.x-E,f.y-E,f.z-E),_.upperBound.set(f.x+E,f.y+E,f.z+E),e.getTrianglesInAABB(_,b);const C=zv,M=t.radius*t.radius;for(let N=0;N<b.length;N++)for(let O=0;O<3;O++)if(e.getVertex(e.indices[b[N]*3+O],C),C.vsub(f,x),x.lengthSquared()<=M){if(y.copy(C),ne.pointToWorldFrame(i,o,y,C),C.vsub(n,x),d)return!0;let L=this.createContactEquation(a,c,t,e,l,u);L.ni.copy(x),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.copy(C),L.rj.vsub(c.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let N=0;N<b.length;N++)for(let O=0;O<3;O++){e.getVertex(e.indices[b[N]*3+O],h),e.getVertex(e.indices[b[N]*3+(O+1)%3],p),p.vsub(h,g),f.vsub(p,m);const L=m.dot(g);f.vsub(h,m);let U=m.dot(g);if(U>0&&L<0&&(f.vsub(h,m),v.copy(g),v.normalize(),U=m.dot(v),v.scale(U,m),m.vadd(h,m),m.distanceTo(f)<t.radius)){if(d)return!0;const W=this.createContactEquation(a,c,t,e,l,u);m.vsub(f,W.ni),W.ni.normalize(),W.ni.scale(t.radius,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),ne.pointToWorldFrame(i,o,m,m),m.vsub(c.position,W.rj),ne.vectorToWorldFrame(o,W.ni,W.ni),ne.vectorToWorldFrame(o,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}const w=Yv,P=Kv,R=Zv,D=Ov;for(let N=0,O=b.length;N!==O;N++){e.getTriangleVertices(b[N],w,P,R),e.getNormal(b[N],D),f.vsub(w,m);let L=m.dot(D);if(D.scale(L,m),f.vsub(m,m),L=m.distanceTo(f),be.pointInTriangle(m,w,P,R)&&L<t.radius){if(d)return!0;let U=this.createContactEquation(a,c,t,e,l,u);m.vsub(f,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),ne.pointToWorldFrame(i,o,m,m),m.vsub(c.position,U.rj),ne.vectorToWorldFrame(o,U.ni,U.ni),ne.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}b.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,u,d){const h=new T,p=Nv;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const v=new T;v.copy(h),ne.pointToWorldFrame(i,o,v,h);const f=Uv;if(h.vsub(n,f),p.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,u);_.ni.copy(p);const y=Fv;p.scale(f.dot(p),y),h.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Ei=new T,Qi=new T,ji=new T,Pv=new T,Iv=new T,Lv=new Se,Dv=new Se,Nv=new T,Uv=new T,Fv=new T,Ov=new T,Bv=new T;new T;const zv=new T,Vv=new T,Gv=new T,kv=new T,Hv=new T,Wv=new T,Xv=new T,qv=new T,Yv=new T,Kv=new T,Zv=new T,$v=new rn,Jv=[],wr=new T,th=new T,Qv=new T,jv=new T,tx=new T;function ex(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Qv;r[(s+1)%i].vsub(o,a);const c=jv;a.cross(t,c);const l=tx;e.vsub(o,l);const u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Tr=new T,nx=new T,ix=new T,sx=new T,rx=[new T,new T,new T,new T,new T,new T],ox=new T,ax=new T,lx=new T,cx=new T,hx=new T,ux=new T,dx=new T,fx=new T,px=new T,mx=new T,gx=new T,_x=new T,vx=new T,xx=new T;new T;new T;const Mx=new T,yx=new T,Sx=new T,Ex=new T,bx=new T,wx=new T,Tx=new T,Ax=new T,Cx=new T,Rx=new T,eh=new Se,Px=new T;new T;const Ix=new T,nh=new T,Lx=new T,Dx=new T,Nx=new T,Ux=[0],Fx=new T,Ox=new T;class ih{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const u=n[c];for(;u>i[a];)a++;l=u===i[a],l||sh(t,u)}a=0;for(let c=0;c<o;c++){let l=!1;const u=i[c];for(;u>n[a];)a++;l=n[a]===u,l||sh(e,u)}}}function sh(r,t){r.push((t&4294901760)>>16,t&65535)}const Fo=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Bx{constructor(){this.data={keys:[]}}get(t,e){const n=Fo(t,e);return this.data[n]}set(t,e,n){const i=Fo(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Fo(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class zx extends lu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new T,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new T,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new X_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Ev,this.constraints=[],this.narrowphase=new Rv(this),this.collisionMatrix=new Hc,this.collisionMatrixPrevious=new Hc,this.bodyOverlapKeeper=new ih,this.shapeOverlapKeeper=new ih,this.contactmaterials=[],this.contactMaterialTable=new Bx,this.defaultMaterial=new ls("default"),this.defaultContactMaterial=new as(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Hr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=be.ALL,n.from=t,n.to=e,n.callback=i,Oo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=be.ANY,n.from=t,n.to=e,n.result=i,Oo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=be.CLOSEST,n.from=t,n.to=e,n.result=i,Oo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof At&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ae.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ae.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ae.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Wx,i=Xx,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=At.DYNAMIC;let h=-1/0;const p=this.constraints,g=Hx;c.length();const v=c.x,f=c.y,m=c.z;let _=0;for(l&&(h=Ae.now()),_=0;_!==s;_++){const N=o[_];if(N.type===d){const O=N.force,L=N.mass;O.x+=L*v,O.y+=L*f,O.z+=L*m}}for(let N=0,O=this.subsystems.length;N!==O;N++)this.subsystems[N].update();l&&(h=Ae.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=Ae.now()-h);let y=p.length;for(_=0;_!==y;_++){const N=p[_];if(!N.collideConnected)for(let O=n.length-1;O>=0;O-=1)(N.bodyA===n[O]&&N.bodyB===i[O]||N.bodyB===n[O]&&N.bodyA===i[O])&&(n.splice(O,1),i.splice(O,1))}this.collisionMatrixTick(),l&&(h=Ae.now());const x=kx,b=e.length;for(_=0;_!==b;_++)x.push(e[_]);e.length=0;const E=this.frictionEquations.length;for(_=0;_!==E;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),l&&(u.narrowphase=Ae.now()-h),l&&(h=Ae.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let N=0;N!==C;N++){const O=e[N],L=O.bi,U=O.bj,k=O.si,W=O.sj;let Y;if(L.material&&U.material?Y=this.getContactMaterial(L.material,U.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,L.material&&U.material&&(L.material.friction>=0&&U.material.friction>=0&&L.material.friction*U.material.friction,L.material.restitution>=0&&U.material.restitution>=0&&(O.restitution=L.material.restitution*U.material.restitution)),a.addEquation(O),L.allowSleep&&L.type===At.DYNAMIC&&L.sleepState===At.SLEEPING&&U.sleepState===At.AWAKE&&U.type!==At.STATIC){const ot=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),at=U.sleepSpeedLimit**2;ot>=at*2&&(L.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===At.DYNAMIC&&U.sleepState===At.SLEEPING&&L.sleepState===At.AWAKE&&L.type!==At.STATIC){const ot=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),at=L.sleepSpeedLimit**2;ot>=at*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,U,!0),this.collisionMatrixPrevious.get(L,U)||(ys.body=U,ys.contact=O,L.dispatchEvent(ys),ys.body=L,U.dispatchEvent(ys)),this.bodyOverlapKeeper.set(L.id,U.id),this.shapeOverlapKeeper.set(k.id,W.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Ae.now()-h,h=Ae.now()),_=0;_!==s;_++){const N=o[_];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(y=p.length,_=0;_!==y;_++){const N=p[_];N.update();for(let O=0,L=N.equations.length;O!==L;O++){const U=N.equations[O];a.addEquation(U)}}a.solve(t,this),l&&(u.solve=Ae.now()-h),a.removeAllEquations();const M=Math.pow;for(_=0;_!==s;_++){const N=o[_];if(N.type&d){const O=M(1-N.linearDamping,t),L=N.velocity;L.scale(O,L);const U=N.angularVelocity;if(U){const k=M(1-N.angularDamping,t);U.scale(k,U)}}}this.dispatchEvent(Gx),l&&(h=Ae.now());const P=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,P,R);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Ae.now()-h),this.stepnumber+=1,this.dispatchEvent(Vx);let D=!0;if(this.allowSleep)for(D=!1,_=0;_!==s;_++){const N=o[_];N.sleepTick(this.time),N.sleepState!==At.SLEEPING&&(D=!0)}this.hasActiveBodies=D}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Vn,Gn),t){for(let s=0,o=Vn.length;s<o;s+=2)Ss.bodyA=this.getBodyById(Vn[s]),Ss.bodyB=this.getBodyById(Vn[s+1]),this.dispatchEvent(Ss);Ss.bodyA=Ss.bodyB=null}if(e){for(let s=0,o=Gn.length;s<o;s+=2)Es.bodyA=this.getBodyById(Gn[s]),Es.bodyB=this.getBodyById(Gn[s+1]),this.dispatchEvent(Es);Es.bodyA=Es.bodyB=null}Vn.length=Gn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Vn,Gn),n){for(let s=0,o=Vn.length;s<o;s+=2){const a=this.getShapeById(Vn[s]),c=this.getShapeById(Vn[s+1]);kn.shapeA=a,kn.shapeB=c,a&&(kn.bodyA=a.body),c&&(kn.bodyB=c.body),this.dispatchEvent(kn)}kn.bodyA=kn.bodyB=kn.shapeA=kn.shapeB=null}if(i){for(let s=0,o=Gn.length;s<o;s+=2){const a=this.getShapeById(Gn[s]),c=this.getShapeById(Gn[s+1]);Hn.shapeA=a,Hn.shapeB=c,a&&(Hn.bodyA=a.body),c&&(Hn.bodyB=c.body),this.dispatchEvent(Hn)}Hn.bodyA=Hn.bodyB=Hn.shapeA=Hn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new rn;const Oo=new be,Ae=globalThis.performance||{};if(!Ae.now){let r=Date.now();Ae.timing&&Ae.timing.navigationStart&&(r=Ae.timing.navigationStart),Ae.now=()=>Date.now()-r}new T;const Vx={type:"postStep"},Gx={type:"preStep"},ys={type:At.COLLIDE_EVENT_NAME,body:null,contact:null},kx=[],Hx=[],Wx=[],Xx=[],Vn=[],Gn=[],Ss={type:"beginContact",bodyA:null,bodyB:null},Es={type:"endContact",bodyA:null,bodyB:null},kn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Hn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},rh=new Map;function qx(r){const t=r.attributes.position;if(!t||t.count===0)return new Ri;const e=t.count,n=`${e}_${t.getX(0).toFixed(4)},${t.getY(0).toFixed(4)},${t.getZ(0).toFixed(4)}_${t.getX(e-1).toFixed(4)},${t.getY(e-1).toFixed(4)},${t.getZ(e-1).toFixed(4)}`,i=rh.get(n);if(i)return i;const s=new Map,o=[],a=[],c=e/3,l=new F;for(let d=0;d<c;d++){const h=[];for(let p=0;p<3;p++){l.fromBufferAttribute(t,d*3+p);const g=`${l.x.toFixed(4)},${l.y.toFixed(4)},${l.z.toFixed(4)}`;let v=s.get(g);v===void 0&&(v=o.length,s.set(g,v),o.push(new T(l.x,l.y,l.z))),h.push(v)}a.push(h)}const u=new Ri({vertices:o,faces:a});return rh.set(n,u),u}const cl=32;function gu(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function _u(r){if(typeof r=="number")return r>>>0;if(!r)return 1337;let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Yx(r,t){let e=r.faceValues[0],n=-1/0,i=new F(0,1,0);const s=new F(0,1,0);for(const[o,a]of r.faceNormals){const l=a.clone().applyQuaternion(t).dot(s);l>n&&(n=l,e=o,i=a)}return{face:e,normal:i,dot:n}}function Kx(r,t=30){const e=r.map(i=>({x:i.x,z:i.z,radius:i.radius})),n=e.length;for(let i=0;i<t;i++)for(let s=0;s<n;s++)for(let o=s+1;o<n;o++){const a=e[s],c=e[o];let l=c.x-a.x,u=c.z-a.z,d=Math.hypot(l,u);const h=(a.radius+c.radius)*1.3;if(d<.001&&(l=Math.cos(s*1.5+o)*.1,u=Math.sin(s*1.5+o)*.1,d=Math.hypot(l,u)),d<h){const p=h-d,g=l/d,v=u/d,f=p*.5;a.x-=g*f,a.z-=v*f,c.x+=g*f,c.z+=v*f}}return e.map(i=>({x:i.x,z:i.z}))}function Zx(r){const{items:t,durationSeconds:e=1.35,stepDt:n=1/60,seed:i}=r;if(!t.length)return[];const s=t.slice(0,cl),o=typeof i=="number"?i:_u(i),a=i!==void 0?gu(o):Math.random,c=Kx(s.map(y=>{var x,b;return{x:((x=y.restingPosition)==null?void 0:x.x)??0,z:((b=y.restingPosition)==null?void 0:b.z)??0,radius:y.die.radius}})),l=new zx({gravity:new T(0,-32,0)}),u=new At({mass:0,shape:new yv});u.quaternion.setFromAxisAngle(new T(1,0,0),-Math.PI/2),l.addBody(u);const d=[],h=new ls("table"),p=new ls("die");l.addContactMaterial(new as(h,p,{friction:.5,restitution:.35})),l.addContactMaterial(new as(p,p,{friction:.35,restitution:.6})),u.material=h;const g=s.length;for(let y=0;y<g;y++){const x=s[y],b=c[y],E=qx(x.die.geometry),C=y/Math.max(1,g)*Math.PI*2+(a()-.5)*.4,M=14+a()*2.5,w=b.x-Math.cos(C)*M,P=b.z-Math.sin(C)*M,R=x.die.radius+1.2+y*.3,D=new Xe().setFromEuler(new Jn(a()*Math.PI*2,a()*Math.PI*2,a()*Math.PI*2)),N=new At({mass:1,shape:E,position:new T(w,R,P),quaternion:new Se(D.x,D.y,D.z,D.w),material:p,linearDamping:.16,angularDamping:.2}),O=15.5+a()*2.5,L=Math.cos(C)*O+(a()-.5)*2.5,U=Math.sin(C)*O+(a()-.5)*2.5,k=2.5+a()*1.5,W=20+a()*6,Y=-Math.sin(C)*W+(a()-.5)*4,ot=(a()-.5)*6,at=Math.cos(C)*W+(a()-.5)*4;N.velocity.set(L,k,U),N.angularVelocity.set(Y,ot,at),l.addBody(N),d.push({body:N,die:x.die,targetResult:x.targetResult,relaxedRestingPos:{x:b.x,y:x.die.radius,z:b.z}})}const v=110,f=d.map(()=>[]);for(let y=0;y<v;y++){for(let x=0;x<d.length;x++){const b=d[x].body;f[x].push({pos:new F(b.position.x,b.position.y,b.position.z),quat:new Xe(b.quaternion.x,b.quaternion.y,b.quaternion.z,b.quaternion.w)})}l.step(n)}const m=Math.max(30,Math.floor(e/n)),_=[];for(let y=0;y<d.length;y++){const{die:x,targetResult:b,relaxedRestingPos:E}=d[y],C=f[y],M=C[C.length-1].quat,w=Yx(x,M),P=x.faceNormals.get(b);if(!P)throw new Error(`Face normal not found for target result ${b}`);const R=new Xe().setFromUnitVectors(P,w.normal),D=M.clone().multiply(R),N=P.clone().applyQuaternion(D),O=new F(0,1,0),L=new Xe().setFromUnitVectors(N,O),U=L.clone().multiply(D),k=new Xe;let W=1/0;const Y=x.geometry.getAttribute("position"),ot=new F;for(let Ot=0;Ot<Y.count;Ot++)ot.fromBufferAttribute(Y,Ot).applyQuaternion(U),ot.y<W&&(W=ot.y);const at=Math.max(.05,-W),Q=C[C.length-1].pos,Dt=new F(E.x-Q.x,at-Q.y,E.z-Q.z),kt=[];for(let Ot=0;Ot<=m;Ot++){const z=Ot/m,j=z*(C.length-1),it=Math.floor(j),gt=Math.min(C.length-1,it+1),dt=j-it,_t=C[it],Wt=C[gt],Ut=new F().lerpVectors(_t.pos,Wt.pos,dt).add(Dt),Nt=new Xe().slerpQuaternions(_t.quat,Wt.quat,dt).multiply(R);let Ft;if(z<.65)Ft=Nt;else{const Vt=(z-.65)/.35,Jt=Vt*Vt*(3-2*Vt);Ft=new Xe().slerpQuaternions(k,L,Jt).multiply(Nt)}kt.push({position:[Ut.x,Ut.y,Ut.z],quaternion:[Ft.x,Ft.y,Ft.z,Ft.w],time:Ot*n})}_.push({sides:x.sides,targetResult:b,keyframes:kt,duration:e})}return _}function oh(r,t,e){const n=r.slice();n[13]=t[e],n[16]=e;const i=n[4][n[16]];return n[14]=i,n}function Bo(r){const t=r.slice(),e=t[13].sides===20&&t[13].result===20&&!t[13].dropped;t[17]=e;const n=t[13].sides===20&&t[13].result===1&&!t[13].dropped;return t[18]=n,t}function ah(r){let t,e=Al(r[0].dice),n=[];for(let i=0;i<e.length;i+=1)n[i]=ch(oh(r,e,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();t=Nr()},l(i){for(let s=0;s<n.length;s+=1)n[s].l(i);t=Nr()},m(i,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(i,s);ue(i,t,s)},p(i,s){if(s&17){e=Al(i[0].dice);let o;for(o=0;o<e.length;o+=1){const a=oh(i,e,o);n[o]?n[o].p(a,s):(n[o]=ch(a),n[o].c(),n[o].m(t.parentNode,t))}for(;o<n.length;o+=1)n[o].d(1);n.length=e.length}},d(i){i&&Yt(t),wu(n,i)}}}function lh(r){let t,e=r[13].result+"",n,i,s;return{c(){t=Ce("div"),n=ci(e),i=Wn(),this.h()},l(o){t=Re(o,"DIV",{class:!0,style:!0});var a=nn(t);n=hi(a,e),i=Xn(a),a.forEach(Yt),this.h()},h(){me(t,"class","die-numeral svelte-1xzqvr4"),me(t,"style",s=`
                        left: ${r[14].x}px;
                        top: ${r[14].y}px;
                        opacity: ${r[14].opacity};
                        transform: translate(-50%, -50%) scale(${r[14].scale});
                    `),Ne(t,"crit",r[17]),Ne(t,"fumble",r[18]),Ne(t,"dropped",r[13].dropped)},m(o,a){ue(o,t,a),hn(t,n),hn(t,i)},p(o,a){a&1&&e!==(e=o[13].result+"")&&ui(n,e),a&16&&s!==(s=`
                        left: ${o[14].x}px;
                        top: ${o[14].y}px;
                        opacity: ${o[14].opacity};
                        transform: translate(-50%, -50%) scale(${o[14].scale});
                    `)&&me(t,"style",s),a&1&&Ne(t,"crit",o[17]),a&1&&Ne(t,"fumble",o[18]),a&1&&Ne(t,"dropped",o[13].dropped)},d(o){o&&Yt(t)}}}function ch(r){let t,e=r[14]&&r[14].opacity>.01&&lh(Bo(r));return{c(){e&&e.c(),t=Nr()},l(n){e&&e.l(n),t=Nr()},m(n,i){e&&e.m(n,i),ue(n,t,i)},p(n,i){n[14]&&n[14].opacity>.01?e?e.p(Bo(n),i):(e=lh(Bo(n)),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(n){n&&Yt(t),e&&e.d(n)}}}function hh(r){let t,e,n;function i(u,d){if(u[0].isCritical)return jx;if(u[0].isFumble)return Qx;if(u[0].kind==="ADVANTAGE")return Jx;if(u[0].kind==="DISADVANTAGE")return $x}let s=i(r),o=s&&s(r);function a(u,d){return u[6]?nM:u[0].kind==="NORMAL"&&u[5]?eM:tM}let c=a(r),l=c(r);return{c(){t=Ce("div"),o&&o.c(),e=Wn(),n=Ce("div"),l.c(),this.h()},l(u){t=Re(u,"DIV",{class:!0});var d=nn(t);o&&o.l(d),e=Xn(d),n=Re(d,"DIV",{class:!0});var h=nn(n);l.l(h),h.forEach(Yt),d.forEach(Yt),this.h()},h(){me(n,"class","equation-card svelte-1xzqvr4"),Ne(n,"crit",r[0].isCritical),Ne(n,"fumble",r[0].isFumble),me(t,"class","combined-result-container svelte-1xzqvr4")},m(u,d){ue(u,t,d),o&&o.m(t,null),hn(t,e),hn(t,n),l.m(n,null)},p(u,d){s!==(s=i(u))&&(o&&o.d(1),o=s&&s(u),o&&(o.c(),o.m(t,e))),c===(c=a(u))&&l?l.p(u,d):(l.d(1),l=c(u),l&&(l.c(),l.m(n,null))),d&1&&Ne(n,"crit",u[0].isCritical),d&1&&Ne(n,"fumble",u[0].isFumble)},d(u){u&&Yt(t),o&&o.d(),l.d()}}}function $x(r){let t,e="Disadvantage";return{c(){t=Ce("div"),t.textContent=e,this.h()},l(n){t=Re(n,"DIV",{class:!0,"data-svelte-h":!0}),cs(t)!=="svelte-1yxr4is"&&(t.textContent=e),this.h()},h(){me(t,"class","disadvantage-banner svelte-1xzqvr4")},m(n,i){ue(n,t,i)},d(n){n&&Yt(t)}}}function Jx(r){let t,e="Advantage";return{c(){t=Ce("div"),t.textContent=e,this.h()},l(n){t=Re(n,"DIV",{class:!0,"data-svelte-h":!0}),cs(t)!=="svelte-1bo5ot8"&&(t.textContent=e),this.h()},h(){me(t,"class","advantage-banner svelte-1xzqvr4")},m(n,i){ue(n,t,i)},d(n){n&&Yt(t)}}}function Qx(r){let t,e="Critical Miss";return{c(){t=Ce("div"),t.textContent=e,this.h()},l(n){t=Re(n,"DIV",{class:!0,"data-svelte-h":!0}),cs(t)!=="svelte-10jt472"&&(t.textContent=e),this.h()},h(){me(t,"class","fumble-banner svelte-1xzqvr4")},m(n,i){ue(n,t,i)},d(n){n&&Yt(t)}}}function jx(r){let t,e="Critical Hit";return{c(){t=Ce("div"),t.textContent=e,this.h()},l(n){t=Re(n,"DIV",{class:!0,"data-svelte-h":!0}),cs(t)!=="svelte-1gglfn6"&&(t.textContent=e),this.h()},h(){me(t,"class","crit-banner svelte-1xzqvr4")},m(n,i){ue(n,t,i)},d(n){n&&Yt(t)}}}function tM(r){let t,e=r[0].total+"",n;return{c(){t=Ce("span"),n=ci(e),this.h()},l(i){t=Re(i,"SPAN",{class:!0});var s=nn(t);n=hi(s,e),s.forEach(Yt),this.h()},h(){me(t,"class","grand-total solo svelte-1xzqvr4"),Ne(t,"fumble",r[0].isFumble)},m(i,s){ue(i,t,s),hn(t,n)},p(i,s){s&1&&e!==(e=i[0].total+"")&&ui(n,e),s&1&&Ne(t,"fumble",i[0].isFumble)},d(i){i&&Yt(t)}}}function eM(r){let t,e,n=r[0].total+"",i,s=r[0].dice.length<=4&&uh(r);return{c(){s&&s.c(),t=Wn(),e=Ce("span"),i=ci(n),this.h()},l(o){s&&s.l(o),t=Xn(o),e=Re(o,"SPAN",{class:!0});var a=nn(e);i=hi(a,n),a.forEach(Yt),this.h()},h(){me(e,"class","grand-total svelte-1xzqvr4"),Ne(e,"fumble",r[0].isFumble)},m(o,a){s&&s.m(o,a),ue(o,t,a),ue(o,e,a),hn(e,i)},p(o,a){o[0].dice.length<=4?s?s.p(o,a):(s=uh(o),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),a&1&&n!==(n=o[0].total+"")&&ui(i,n),a&1&&Ne(e,"fumble",o[0].isFumble)},d(o){o&&(Yt(t),Yt(e)),s&&s.d(o)}}}function nM(r){let t,e=r[0].diceSubtotal+"",n,i,s,o=r[0].modifier>=0?"+":"−",a,c,l,u=Math.abs(r[0].modifier)+"",d,h,p,g="=",v,f,m=r[0].total+"",_;return{c(){t=Ce("span"),n=ci(e),i=Wn(),s=Ce("span"),a=ci(o),c=Wn(),l=Ce("span"),d=ci(u),h=Wn(),p=Ce("span"),p.textContent=g,v=Wn(),f=Ce("span"),_=ci(m),this.h()},l(y){t=Re(y,"SPAN",{class:!0});var x=nn(t);n=hi(x,e),x.forEach(Yt),i=Xn(y),s=Re(y,"SPAN",{class:!0});var b=nn(s);a=hi(b,o),b.forEach(Yt),c=Xn(y),l=Re(y,"SPAN",{class:!0});var E=nn(l);d=hi(E,u),E.forEach(Yt),h=Xn(y),p=Re(y,"SPAN",{class:!0,"data-svelte-h":!0}),cs(p)!=="svelte-nx3vdl"&&(p.textContent=g),v=Xn(y),f=Re(y,"SPAN",{class:!0});var C=nn(f);_=hi(C,m),C.forEach(Yt),this.h()},h(){me(t,"class","dice-part svelte-1xzqvr4"),me(s,"class","operator svelte-1xzqvr4"),me(l,"class","modifier-part svelte-1xzqvr4"),me(p,"class","equals svelte-1xzqvr4"),me(f,"class","grand-total svelte-1xzqvr4"),Ne(f,"fumble",r[0].isFumble)},m(y,x){ue(y,t,x),hn(t,n),ue(y,i,x),ue(y,s,x),hn(s,a),ue(y,c,x),ue(y,l,x),hn(l,d),ue(y,h,x),ue(y,p,x),ue(y,v,x),ue(y,f,x),hn(f,_)},p(y,x){x&1&&e!==(e=y[0].diceSubtotal+"")&&ui(n,e),x&1&&o!==(o=y[0].modifier>=0?"+":"−")&&ui(a,o),x&1&&u!==(u=Math.abs(y[0].modifier)+"")&&ui(d,u),x&1&&m!==(m=y[0].total+"")&&ui(_,m),x&1&&Ne(f,"fumble",y[0].isFumble)},d(y){y&&(Yt(t),Yt(i),Yt(s),Yt(c),Yt(l),Yt(h),Yt(p),Yt(v),Yt(f))}}}function uh(r){let t,e=r[0].dice.filter(dh).map(fh).join(" + ")+"",n,i,s,o="=";return{c(){t=Ce("span"),n=ci(e),i=Wn(),s=Ce("span"),s.textContent=o,this.h()},l(a){t=Re(a,"SPAN",{class:!0});var c=nn(t);n=hi(c,e),c.forEach(Yt),i=Xn(a),s=Re(a,"SPAN",{class:!0,"data-svelte-h":!0}),cs(s)!=="svelte-nx3vdl"&&(s.textContent=o),this.h()},h(){me(t,"class","dice-part svelte-1xzqvr4"),me(s,"class","equals svelte-1xzqvr4")},m(a,c){ue(a,t,c),hn(t,n),ue(a,i,c),ue(a,s,c)},p(a,c){c&1&&e!==(e=a[0].dice.filter(dh).map(fh).join(" + ")+"")&&ui(n,e)},d(a){a&&(Yt(t),Yt(i),Yt(s))}}}function iM(r){let t,e,n,i=!r[2]&&r[0]&&r[4].length>0&&ah(r),s=r[3]&&r[0]&&hh(r);return{c(){t=Ce("div"),i&&i.c(),e=Wn(),s&&s.c(),this.h()},l(o){t=Re(o,"DIV",{class:!0,style:!0});var a=nn(t);i&&i.l(a),e=Xn(a),s&&s.l(a),a.forEach(Yt),this.h()},h(){var o;me(t,"class","gather-overlay svelte-1xzqvr4"),me(t,"style",n=`--theme-glow: ${((o=r[1])==null?void 0:o.accentColor)||"#ffd700"};`)},m(o,a){ue(o,t,a),i&&i.m(t,null),hn(t,e),s&&s.m(t,null)},p(o,[a]){var c;!o[2]&&o[0]&&o[4].length>0?i?i.p(o,a):(i=ah(o),i.c(),i.m(t,e)):i&&(i.d(1),i=null),o[3]&&o[0]?s?s.p(o,a):(s=hh(o),s.c(),s.m(t,null)):s&&(s.d(1),s=null),a&2&&n!==(n=`--theme-glow: ${((c=o[1])==null?void 0:c.accentColor)||"#ffd700"};`)&&me(t,"style",n)},i:bl,o:bl,d(o){o&&Yt(t),i&&i.d(),s&&s.d()}}}const dh=r=>!r.dropped,fh=r=>r.result;function sM(r,t,e){let n,i,s,{breakdown:o}=t,{projectedPositions:a=[]}=t,{theme:c=gi}=t,{width:l=1200}=t,{height:u=800}=t,d=null,h=!1,p=[];return Ua(()=>{if(s){e(3,h=!0);return}const g=performance.now(),v=.6,f=.85,m=v+f,_=y=>{const x=(y-g)/1e3,b=(o==null?void 0:o.dice.length)||0;x>=m&&!h&&e(3,h=!0);const E=l>0?l:1200,C=u>0?u:800,M=E/2,w=C/2,P=[];for(let R=0;R<b;R++){const D=o.dice[R],N=D==null?void 0:D.dropped,O=a[R]||{x:M,y:w},L=R*2.39996+((D==null?void 0:D.result)||1)*1.618;let U=O.x,k=O.y,W=1,Y=1;const ot=Math.sin(x*7.2+L)*8.5+Math.cos(x*13.1+L*1.6)*3.5,at=Math.cos(x*6.4+L)*7.5+Math.sin(x*15.3+L*1.4)*3;if(x<v){const Q=Math.min(1,x/.22);W=Q<.7?Q/.7*1.25:1.25-(Q-.7)/.3*.25;const Dt=N?.4:1;Y=Math.min(1,x/.12)*Dt,U=O.x+ot,k=O.y+at}else if(x<m)if(N){const Q=Math.min(1,(x-v)/f);U=O.x+ot,k=O.y+at,Y=Math.max(0,.4*(1-Q*1.8)),W=Math.max(.6,1-Q*.4)}else{const Q=Math.min(1,(x-v)/f),Dt=Q*Q*Q*(Q*(Q*6-15)+10),kt=O.x,Ot=O.y,z=M,j=w,it=kt+(z-kt)*Dt,gt=Ot+(j-Ot)*Dt,dt=z-kt,_t=j-Ot,Wt=Math.hypot(dt,_t),Ut=Wt>.001?-_t/Wt:0,Nt=Wt>.001?dt/Wt:0,Ft=Math.sin(Q*Math.PI),Vt=Math.sin(Q*Math.PI*3+L)*Math.min(75,Math.max(25,Wt*.38))*Ft,Jt=Math.cos(x*24+L)*4*Ft,se=Math.sin(x*28+L)*4*Ft,ee=1-Dt;U=it+ot*ee+Ut*Vt+Jt,k=gt+at*ee+Nt*Vt+se,W=1+Ft*.22,Y=1}else if(N)Y=0;else{U=M,k=w;const Q=x-m;Y=Math.max(0,1-Q/.15),W=Math.max(.5,1-Q*2.5)}P.push({x:U,y:k,scale:W,opacity:Y})}e(4,p=P),x<m+.35&&(d=requestAnimationFrame(_))};return d=requestAnimationFrame(_),()=>{d&&cancelAnimationFrame(d)}}),Fa(()=>{d&&cancelAnimationFrame(d)}),r.$$set=g=>{"breakdown"in g&&e(0,o=g.breakdown),"projectedPositions"in g&&e(7,a=g.projectedPositions),"theme"in g&&e(1,c=g.theme),"width"in g&&e(8,l=g.width),"height"in g&&e(9,u=g.height)},r.$$.update=()=>{r.$$.dirty&256,r.$$.dirty&512,r.$$.dirty&1&&e(6,n=o&&o.modifier!==0),r.$$.dirty&1&&e(5,i=o&&o.dice.length>1),r.$$.dirty&1&&e(2,s=((o==null?void 0:o.dice.length)||0)<=1),r.$$.dirty&4&&s&&e(3,h=!0)},[o,c,s,h,p,i,n,a,l,u]}class rM extends Oa{constructor(t){super(),Ba(this,t,sM,iM,Na,{breakdown:0,projectedPositions:7,theme:1,width:8,height:9})}}function ph(r){var n,i;let t,e;return t=new rM({props:{breakdown:r[6],projectedPositions:r[5],theme:r[0],width:r[1]>0?r[1]:((n=r[3])==null?void 0:n.clientWidth)||1200,height:r[2]>0?r[2]:((i=r[3])==null?void 0:i.clientHeight)||800}}),{c(){gh(t.$$.fragment)},l(s){_h(t.$$.fragment,s)},m(s,o){vh(t,s,o),e=!0},p(s,o){var c,l;const a={};o[0]&64&&(a.breakdown=s[6]),o[0]&32&&(a.projectedPositions=s[5]),o[0]&1&&(a.theme=s[0]),o[0]&10&&(a.width=s[1]>0?s[1]:((c=s[3])==null?void 0:c.clientWidth)||1200),o[0]&12&&(a.height=s[2]>0?s[2]:((l=s[3])==null?void 0:l.clientHeight)||800),t.$set(a)},i(s){e||(As(t.$$.fragment,s),e=!0)},o(s){Ur(t.$$.fragment,s),e=!1},d(s){xh(t,s)}}}function oM(r){let t,e,n=r[4]&&r[6]&&(r[6].dice.length>1||r[6].modifier!==0)&&ph(r);return{c(){t=Ce("div"),n&&n.c(),this.h()},l(i){t=Re(i,"DIV",{class:!0});var s=nn(t);n&&n.l(s),s.forEach(Yt),this.h()},h(){me(t,"class","dice-canvas-container svelte-lnk6re")},m(i,s){ue(i,t,s),n&&n.m(t,null),r[15](t),e=!0},p(i,s){i[4]&&i[6]&&(i[6].dice.length>1||i[6].modifier!==0)?n?(n.p(i,s),s[0]&80&&As(n,1)):(n=ph(i),n.c(),As(n,1),n.m(t,null)):n&&(Ru(),Ur(n,1,1,()=>{n=null}),Pu())},i(i){e||(As(n),e=!0)},o(i){Ur(n),e=!1},d(i){i&&Yt(t),n&&n.d(),r[15](null)}}}const mh=38;function aM(r,t,e){let n,{dice:i=[]}=t,{breakdown:s=null}=t,{theme:o=gi}=t,{holdDuration:a=3.2}=t,{seed:c=void 0}=t,{width:l=1200}=t,{height:u=800}=t,{onComplete:d=()=>{}}=t,h,p=null,g=!1,v=!1,f=[],m,_,y,x,b,E,C,M,w=[],P=[],R=[],D=[],N=[],O=[];const L=new F,U=new F,k=new Xe,W=new Xe;function Y(){if(typeof document>"u")return new We({});const z=document.createElement("canvas");z.width=512,z.height=512;const j=z.getContext("2d");if(!j)return new We(z);const it=256,gt=250,dt=j.createRadialGradient(it,it,gt*.3,it,it,gt);dt.addColorStop(0,"rgba(255, 215, 0, 0.0)"),dt.addColorStop(.42,"rgba(255, 215, 0, 0.0)"),dt.addColorStop(.68,"rgba(255, 255, 255, 0.98)"),dt.addColorStop(.78,"rgba(255, 210, 40, 0.90)"),dt.addColorStop(.88,"rgba(255, 140, 10, 0.40)"),dt.addColorStop(1,"rgba(255, 80, 0, 0.0)"),j.fillStyle=dt,j.fillRect(0,0,512,512),j.save(),j.translate(it,it);const _t=36;for(let Nt=0;Nt<_t;Nt++){const Ft=Nt/_t*Math.PI*2,Vt=gt*(.65+(Nt%3===0?.28:Nt%2===0?.18:.08)),Jt=gt*(.44+Nt%2*.06);j.save(),j.rotate(Ft),j.beginPath(),j.moveTo(Jt,0),j.lineTo(Vt,0),j.lineWidth=Nt%3===0?3.5:1.8,j.strokeStyle=Nt%3===0?"rgba(255, 255, 255, 0.85)":"rgba(255, 210, 50, 0.55)",j.stroke(),j.restore()}const Wt=48;for(let Nt=0;Nt<Wt;Nt++){const Ft=Nt/Wt*Math.PI*2;j.save(),j.rotate(Ft),j.fillStyle=Nt%4===0?"rgba(255, 255, 255, 0.95)":"rgba(255, 220, 80, 0.65)",j.fillRect(gt*.74,-1.5,Nt%4===0?9:4,3),j.restore()}j.restore();const Ut=new We(z);return Ut.generateMipmaps=!0,Ut.minFilter=mn,Ut.magFilter=we,Ut.anisotropy=8,Ut}function ot(){if(typeof document>"u")return new We({});const z=document.createElement("canvas");z.width=64,z.height=64;const j=z.getContext("2d");if(!j)return new We(z);const it=32,gt=j.createRadialGradient(it,it,0,it,it,30);gt.addColorStop(0,"rgba(255, 255, 255, 1.0)"),gt.addColorStop(.2,"rgba(255, 230, 100, 0.9)"),gt.addColorStop(.5,"rgba(255, 160, 20, 0.4)"),gt.addColorStop(1,"rgba(255, 100, 0, 0.0)"),j.fillStyle=gt,j.fillRect(0,0,64,64),j.fillStyle="rgba(255, 255, 255, 0.9)",j.fillRect(it-1,4,2,56),j.fillRect(4,it-1,56,2);const dt=new We(z);return dt.anisotropy=8,dt}function at(){if(typeof document>"u")return new We({});const z=document.createElement("canvas");z.width=128,z.height=128;const j=z.getContext("2d");if(!j)return new We(z);const it=[{x:64,y:64,r:56,a:.85},{x:50,y:52,r:42,a:.55},{x:78,y:54,r:40,a:.55},{x:58,y:76,r:44,a:.55},{x:74,y:72,r:42,a:.45}];for(const dt of it){const _t=j.createRadialGradient(dt.x,dt.y,0,dt.x,dt.y,dt.r);_t.addColorStop(0,`rgba(235, 235, 250, ${dt.a})`),_t.addColorStop(.35,`rgba(180, 180, 205, ${dt.a*.7})`),_t.addColorStop(.7,`rgba(120, 120, 140, ${dt.a*.3})`),_t.addColorStop(1,"rgba(60, 60, 80, 0.0)"),j.fillStyle=_t,j.beginPath(),j.arc(dt.x,dt.y,dt.r,0,Math.PI*2),j.fill()}const gt=new We(z);return gt.anisotropy=8,gt}function Q(z,j){if(!_||!y)return;const it=Math.max(1,z),gt=Math.max(1,j);e(13,_.aspect=it/gt,_),_.updateProjectionMatrix(),y.setSize(it,gt),v&&w.length>0&&e(5,f=w.map(dt=>(L.copy(dt.mesh.position),L.y+=dt.definition.radius*1.1+.35,L.project(_),{x:(L.x+1)/2*it,y:(-L.y+1)/2*gt})))}function Dt(){e(4,v=!1),e(5,f=[]),p&&(cancelAnimationFrame(p),p=null);for(const z of w)m.remove(z.mesh),z.edgeLines.geometry.dispose(),z.edgeMaterial.dispose(),Array.isArray(z.mesh.material)?z.mesh.material.forEach(j=>j.dispose()):z.mesh.material.dispose();w=[];for(const z of P)m.remove(z.mesh);P=[];for(const z of R)z.dispose();R=[];for(const z of D)m.remove(z.points),z.geo.dispose(),z.mat.dispose();D=[];for(const z of N)m.remove(z.mesh),z.geo.dispose(),z.mat.dispose();N=[];for(const z of O)m.remove(z.epicenterLight),z.epicenterLight.dispose(),m.remove(z.glintLight),z.glintLight.dispose();O=[],y&&y.clear()}function kt(z,j,it){Dt(),M&&(M.opacity=.38);const gt=z.filter(S=>iu(S.sides)).slice(0,cl),dt=gt.length;if(dt===0){d();return}const _t=it!==void 0?gu(_u(it)):Math.random,Wt=((h==null?void 0:h.clientWidth)>0?h.clientWidth:l>0?l:window.innerWidth)||1200,Ut=((h==null?void 0:h.clientHeight)>0?h.clientHeight:u>0?u:window.innerHeight)||800;Q(Wt,Ut);const Nt=Wt/Ut,Ft=mh*Math.PI/180,Jt=2*18*Math.tan(Ft/2)*Math.min(1,Nt),ee=Jt*.15/2,Te=dt===1?0:Math.min(Jt*.22,ee*(1.2+dt*.35)),oe=gt.map((S,V)=>{const X=Da(S.sides,ee);let $=0,lt=0;if(dt===1)$=(_t()-.5)*(ee*.5),lt=(_t()-.5)*(ee*.4);else{const ft=V/dt*Math.PI*2+(_t()-.5)*.3,J=Te*(.85+_t()*.3);$=Math.cos(ft)*J,lt=Math.sin(ft)*(J*.75)}return{die:X,targetResult:S.result,restingPosition:{x:$,y:X.radius,z:lt}}}),fe=Zx({items:oe,durationSeconds:1.3,seed:it});w=[];for(let S=0;S<dt;S++){const V=gt[S],X=oe[S].die,$=Bc(V.sides,X.faceValues,j),lt=new qe(X.geometry,$);lt.castShadow=!0,lt.receiveShadow=!0;const ft=new qd(X.geometry,15),J=new Hh({color:g_(j),linewidth:2,transparent:!0,opacity:.9}),nt=new Wd(ft,J);lt.add(nt),m.add(lt),w.push({mesh:lt,edgeLines:nt,edgeMaterial:J,definition:X,trajectory:fe[S]})}P=[],R=[],D=[],N=[],O=[];for(let S=0;S<dt;S++){const V=gt[S],X=fe[S],$=X.keyframes[X.keyframes.length-1],lt=$?$.position[0]:oe[S].restingPosition.x,ft=$?$.position[2]:oe[S].restingPosition.z;if(V.sides===20&&V.result===20){const J=new Rs({map:x,transparent:!0,opacity:0,depthWrite:!1,blending:Cs,side:ln});R.push(J);const nt=new qe(C,J);nt.rotation.x=-Math.PI/2,nt.position.set(lt,.02,ft),nt.scale.set(.1,.1,1),m.add(nt),P.push({mesh:nt,startTime:X.duration,maxRadius:ee*6.5,duration:.85});const et=80,ct=new Float32Array(et*3),rt=new Float32Array(et*3),ht=new Float32Array(et*3);for(let st=0;st<et;st++){ct[st*3]=lt,ct[st*3+1]=.05,ct[st*3+2]=ft,ht[st*3]=lt,ht[st*3+1]=.05,ht[st*3+2]=ft;const Ct=st/et*Math.PI*2+(_t()-.5)*.4,wt=4.5+_t()*6,pe=2+_t()*4.5;rt[st*3]=Math.cos(Ct)*wt,rt[st*3+1]=pe,rt[st*3+2]=Math.sin(Ct)*wt}const vt=new Oe;vt.setAttribute("position",new sn(ct,3));const St=new Ra({map:b,size:.75,transparent:!0,opacity:0,blending:Cs,depthWrite:!1,color:new zt(16773290)}),Et=new ec(vt,St);m.add(Et),D.push({points:Et,geo:vt,mat:St,velocities:rt,basePositions:ht,startTime:X.duration,duration:.95,active:!1});const B=new di(ee*4.5,ee*4.5),ut=new Rs({map:E,transparent:!0,opacity:0,depthWrite:!1,blending:pi,side:ln}),tt=new qe(B,ut);tt.rotation.x=-Math.PI/2,tt.position.set(lt,.015,ft),m.add(tt),N.push({mesh:tt,geo:B,mat:ut,startTime:X.duration,duration:1.15,active:!1});const pt=new lc(16768887,0,16,2);pt.position.set(lt,.8,ft),m.add(pt);const mt=new lc(16777215,0,10,2);mt.layers.set(1),m.add(mt),O.push({epicenterLight:pt,glintLight:mt,startTime:X.duration,restX:lt,restZ:ft})}if(V.sides===20&&V.result===1){const J=new di(ee*3.5,ee*3.5),nt=new Rs({map:E,transparent:!0,opacity:0,depthWrite:!1,blending:pi,side:ln}),et=new qe(J,nt);et.rotation.x=-Math.PI/2,et.position.set(lt,.015,ft),m.add(et),N.push({mesh:et,geo:J,mat:nt,startTime:X.duration,duration:1.5,active:!1});const ct=24,rt=new Float32Array(ct*3),ht=new Float32Array(ct*3),vt=new Float32Array(ct*3);for(let ut=0;ut<ct;ut++){rt[ut*3]=lt,rt[ut*3+1]=.05,rt[ut*3+2]=ft,vt[ut*3]=lt,vt[ut*3+1]=.05,vt[ut*3+2]=ft;const tt=ut/ct*Math.PI*2+(_t()-.5)*.5,pt=.8+_t()*1.5,mt=1.2+_t()*2.2;ht[ut*3]=Math.cos(tt)*pt,ht[ut*3+1]=mt,ht[ut*3+2]=Math.sin(tt)*pt}const St=new Oe;St.setAttribute("position",new sn(rt,3));const Et=new Ra({map:b,size:.65,transparent:!0,opacity:0,blending:Cs,depthWrite:!1,color:new zt(15680580)}),B=new ec(St,Et);m.add(B),D.push({points:B,geo:St,mat:Et,velocities:ht,basePositions:vt,startTime:X.duration,duration:1.1,active:!1})}}const G=Math.max(...fe.map(S=>S.duration)),Be=performance.now();let te=!1;const I=()=>{const V=(performance.now()-Be)/1e3;for(let et=0;et<dt;et++){const ct=w[et],rt=ct.trajectory,vt=Math.min(1,V/rt.duration)*(rt.keyframes.length-1),St=Math.floor(vt),Et=Math.min(rt.keyframes.length-1,St+1),B=vt-St,ut=rt.keyframes[St],tt=rt.keyframes[Et];if(L.set(ut.position[0],ut.position[1],ut.position[2]),U.set(tt.position[0],tt.position[1],tt.position[2]),ct.mesh.position.lerpVectors(L,U,B),k.set(ut.quaternion[0],ut.quaternion[1],ut.quaternion[2],ut.quaternion[3]),W.set(tt.quaternion[0],tt.quaternion[1],tt.quaternion[2],tt.quaternion[3]),ct.mesh.quaternion.slerpQuaternions(k,W,B),gt[et].sides===20&&gt[et].result===20&&V>=rt.duration){const pt=V-rt.duration,mt=(Math.sin(pt*6)+1)/2,st=ct.mesh.material;st.emissiveIntensity=.85+mt*.95}if(gt[et].sides===20&&gt[et].result===1&&V>=rt.duration){const pt=V-rt.duration,mt=Math.max(0,1-pt/.95),st=Math.sin(pt*38)>0?.7+Math.random()*.3:.1,Ct=ct.mesh.material;if(Ct.emissive.setHex(15680580),Ct.emissiveIntensity=2.2*st*mt,ct.edgeMaterial.color.setRGB(.75*mt+.15,.15*mt+.15,.15*mt+.2),ct.edgeMaterial.opacity=.85*mt+.25,pt>=0&&pt<=.35){const wt=Math.sin(pt*42)*Math.exp(-pt*12)*.04;ct.mesh.rotation.z+=wt}}}for(let et=0;et<P.length;et++){const ct=P[et],rt=R[et],ht=V-ct.startTime;if(ht>=0&&ht<=ct.duration){const vt=ht/ct.duration,St=1-Math.pow(1-vt,3),Et=ct.maxRadius*St;ct.mesh.scale.set(Et,Et,1),rt.opacity=Math.sin(vt*Math.PI)*.95}else rt.opacity=0}const X=-9.8;for(const et of D){const ct=V-et.startTime;if(ct>=0&&ct<=et.duration){const rt=ct/et.duration;et.mat.opacity=Math.sin(rt*Math.PI);const ht=et.geo.getAttribute("position"),vt=ht.array,St=vt.length/3;for(let Et=0;Et<St;Et++)vt[Et*3]=et.basePositions[Et*3]+et.velocities[Et*3]*ct,vt[Et*3+1]=Math.max(.02,et.basePositions[Et*3+1]+et.velocities[Et*3+1]*ct+.5*X*ct*ct),vt[Et*3+2]=et.basePositions[Et*3+2]+et.velocities[Et*3+2]*ct;ht.needsUpdate=!0}else et.mat.opacity=0}for(const et of N){const ct=V-et.startTime;if(ct>=0&&ct<=et.duration){const rt=ct/et.duration,ht=1+rt*1.5;et.mesh.scale.set(ht,ht,1),et.mat.opacity=(1-rt)*.45}else et.mat.opacity=0}let $=!1;for(const et of O){const ct=V-et.startTime,rt=1;if(ct>=0&&ct<=rt){$=!0;const ht=ct/rt,vt=Math.max(0,1-ct/.75);et.epicenterLight.intensity=5.5*Math.pow(vt,2.2);const St=-Math.PI*.75+ht*Math.PI*2,Et=2.8,B=2.2+Math.sin(ht*Math.PI)*1.4;et.glintLight.position.set(et.restX+Math.cos(St)*Et,B,et.restZ+Math.sin(St)*Et);const ut=Math.min(1,ht/.15),tt=Math.min(1,(1-ht)/.2),pt=ut*tt;et.glintLight.intensity=22*pt}else et.epicenterLight.intensity=0,et.glintLight.intensity=0}if(y.clear(),_.layers.set(0),y.render(m,_),$&&(_.layers.set(1),y.render(m,_)),!v&&V>=G&&w.length>0&&_){e(4,v=!0);const et=((h==null?void 0:h.clientWidth)>0?h.clientWidth:l>0?l:window.innerWidth)||1200,ct=((h==null?void 0:h.clientHeight)>0?h.clientHeight:u>0?u:window.innerHeight)||800;e(5,f=w.map(rt=>(L.copy(rt.mesh.position),L.y+=rt.definition.radius*1.1+.35,L.project(_),{x:(L.x+1)/2*et,y:(-L.y+1)/2*ct})))}const lt=n?n.modifier!==0:!1,ft=dt>1?a:lt?2.6:Math.min(2.2,a),J=G+ft,nt=.5;if(V>=J-nt){const et=Math.min(1,(V-(J-nt))/nt),ct=Math.max(0,1-et);for(const rt of w){const ht=rt.mesh.material;ht.opacity=ct,rt.edgeMaterial.opacity=.9*ct}M&&(M.opacity=.38*ct)}V>=J?te||(te=!0,d(),Dt()):p=requestAnimationFrame(I)};p=requestAnimationFrame(I)}Ua(()=>{if(!h)return;const z=(l>0?l:window.innerWidth)||1200,j=(u>0?u:window.innerHeight)||800,it=z/j;m=new Dd,e(13,_=new tn(mh,it,.1,100)),_.position.set(0,18,3.5),_.lookAt(0,0,0),e(14,y=new i_({alpha:!0,antialias:!0,powerPreference:"high-performance"})),e(14,y.autoClear=!1,y),y.setSize(z,j),y.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),y.setClearColor(0,0),e(14,y.shadowMap.enabled=!0,y),e(14,y.shadowMap.type=yh,y),e(14,y.toneMapping=Va,y),e(14,y.toneMappingExposure=1.05,y),e(14,y.outputColorSpace=je,y),h.appendChild(y.domElement);const gt=new rf(16777215,.55);gt.layers.enable(1),m.add(gt);const dt=new cc(16777215,1.85);dt.position.set(-8,22,-10),dt.castShadow=!0,dt.shadow.mapSize.width=1024,dt.shadow.mapSize.height=1024,dt.shadow.camera.near=.5,dt.shadow.camera.far=55;const _t=18;dt.shadow.camera.left=-_t,dt.shadow.camera.right=_t,dt.shadow.camera.top=_t,dt.shadow.camera.bottom=-_t,dt.shadow.bias=-8e-4,dt.layers.enable(1),m.add(dt);const Wt=new cc(11193599,.5);Wt.position.set(10,12,10),Wt.layers.enable(1),m.add(Wt);const Ut=new di(80,80);M=new Yd({opacity:.38});const Nt=new qe(Ut,M);Nt.rotation.x=-Math.PI/2,Nt.position.y=0,Nt.receiveShadow=!0,m.add(Nt),x=Y(),b=ot(),E=at(),C=new di(1,1),__();const Ft=Da(20);if(Ft){const Jt=Bc(20,Ft.faceValues,gi),se=new qe(Ft.geometry,Jt);m.add(se),y.compile(m,_),m.remove(se),Jt.dispose()}const Vt=()=>{if(!h)return;const Jt=h.clientWidth||window.innerWidth,se=h.clientHeight||window.innerHeight;Q(Jt,se)};return window.addEventListener("resize",Vt),e(12,g=!0),i&&i.length>0&&kt(i,o,c),()=>{window.removeEventListener("resize",Vt),Dt(),x.dispose(),b.dispose(),E.dispose(),C.dispose(),y.dispose(),y.domElement.parentElement&&y.domElement.parentElement.removeChild(y.domElement)}}),Fa(()=>{Dt()});function Ot(z){Tu[z?"unshift":"push"](()=>{h=z,e(3,h)})}return r.$$set=z=>{"dice"in z&&e(7,i=z.dice),"breakdown"in z&&e(8,s=z.breakdown),"theme"in z&&e(0,o=z.theme),"holdDuration"in z&&e(9,a=z.holdDuration),"seed"in z&&e(10,c=z.seed),"width"in z&&e(1,l=z.width),"height"in z&&e(2,u=z.height),"onComplete"in z&&e(11,d=z.onComplete)},r.$$.update=()=>{r.$$.dirty[0]&384&&e(6,n=s||(i&&i.length>0?{dice:i.map(z=>({sides:z.sides,result:z.result,dropped:!1})),kind:"NORMAL",diceSubtotal:i.reduce((z,j)=>z+j.result,0),modifier:0,total:i.reduce((z,j)=>z+j.result,0),isCritical:i.length===1&&i[0].sides===20&&i[0].result===20,isFumble:i.length===1&&i[0].sides===20&&i[0].result===1}:null)),r.$$.dirty[0]&5249&&g&&(i&&i.length>0?kt(i,o,c):Dt()),r.$$.dirty[0]&28678&&g&&_&&y&&(l>0||u>0)&&Q(l,u)},[o,l,u,h,v,f,n,i,s,a,c,d,g,_,y,Ot]}class lM extends Oa{constructor(t){super(),Ba(this,t,aM,oM,Na,{dice:7,breakdown:8,theme:0,holdDuration:9,seed:10,width:1,height:2,onComplete:11},null,[-1,-1])}}function cM(r){let t,e,n,i,s;return e=new lM({props:{dice:r[0],breakdown:r[1],theme:r[2],seed:r[3],width:r[5],height:r[6],onComplete:r[8]}}),{c(){t=Ce("div"),gh(e.$$.fragment),this.h()},l(o){t=Re(o,"DIV",{class:!0,role:!0});var a=nn(t);_h(e.$$.fragment,a),a.forEach(Yt),this.h()},h(){me(t,"class","overlay-container svelte-11ywgeo"),me(t,"role","presentation"),Ne(t,"active",r[4])},m(o,a){ue(o,t,a),vh(e,t,null),n=!0,i||(s=[Gs(t,"pointerdown",r[8]),Gs(t,"click",r[8]),Gs(t,"selectstart",wl(r[9])),Gs(t,"dragstart",wl(r[10]))],i=!0)},p(o,[a]){const c={};a&1&&(c.dice=o[0]),a&2&&(c.breakdown=o[1]),a&4&&(c.theme=o[2]),a&8&&(c.seed=o[3]),a&32&&(c.width=o[5]),a&64&&(c.height=o[6]),e.$set(c),(!n||a&16)&&Ne(t,"active",o[4])},i(o){n||(As(e.$$.fragment,o),n=!0)},o(o){Ur(e.$$.fragment,o),n=!1},d(o){o&&Yt(t),xh(e),i=!1,Au(s)}}}const zo=`${Mh}/dice-overlay`;function hM(r,t,e){let n;const i=Lu(),s=Du();Cu(r,s,_=>e(12,n=_));let o=[],a=null,c=gi,l,u=!1,d=null,h=0,p=0;async function g(_,y){if(!(_===h&&y===p)){e(5,h=_),e(6,p=y);try{await Promise.all([i.popover.setWidth(zo,_),i.popover.setHeight(zo,y)])}catch{await i.popover.open({url:`${Iu}/dice-overlay`,hidePaper:!0,width:_,height:y,marginThreshold:0,disableClickAway:!0,id:zo,anchorOrigin:{horizontal:"CENTER",vertical:"CENTER"},transformOrigin:{horizontal:"CENTER",vertical:"CENTER"}})}}}Ua(()=>{d=i.broadcast.onMessage(Mh,async _=>{var P;if(!Nu(_)||_.data.imported||!Uu())return;const x=_.data.rolls.flatMap(R=>Fu(R)).filter(R=>iu(R.sides)).slice(0,cl);if(!x.length)return;const b=n[_.data.playerId],E=_.data.color||(b==null?void 0:b.color),C=u_(_.data.playerId,E);let M=1200,w=800;try{const[R,D]=await Promise.all([i.viewport.getWidth(),i.viewport.getHeight()]);R>0&&D>0&&(M=R,w=D)}catch{M=window.innerWidth||1200,w=window.innerHeight||800}await g(M,w),e(2,c=C),e(3,l=_.data.rollId),e(0,o=x),e(1,a=(P=_.data.rolls)!=null&&P[0]?Ou(_.data.rolls[0]):null),e(4,u=!0)})}),Fa(()=>{d&&d()});async function v(){u&&(e(4,u=!1),setTimeout(async()=>{e(0,o=[]),e(1,a=null),await g(0,0)},180))}function f(_){Tl.call(this,r,_)}function m(_){Tl.call(this,r,_)}return[o,a,c,l,u,h,p,s,v,f,m]}class MM extends Oa{constructor(t){super(),Ba(this,t,hM,cM,Na,{})}}export{zo as P,MM as a};
