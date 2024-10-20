import{s as _,b as W,o as N,A as $e,c as be,u as we,g as ve,a as _e,n as Ie}from"../chunks/scheduler.BXvgzZK-.js";import{S as I,i as E,e as ce,c as ue,d as fe,g as v,r as de,j as S,t as p,x as me,a as h,v as ye,m as C,n as R,o as k,p as T,u as Z,s as B,h as U}from"../chunks/index.BQ0Ppj1p.js";import{a as O,P as pe}from"../chunks/public.DaMEbo7N.js";import{g as M,a as he,c as Ee,b as X,d as Me}from"../chunks/obr-host.CvGELXpw.js";import{d as Ce}from"../chunks/util.D_TvH_I6.js";import{a as Re,b as ke,s as Te,d as Se,B as z,e as J,f as Ae,_ as Ne}from"../chunks/roll-formula.BB4CBsVT.js";import{P as Q}from"../chunks/5.Q32z-t8o.js";import{P as Pe}from"../chunks/7.C9v80fzF.js";function ge(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function ee(a,e){return Math.round(a/e)*e}function te(a,e){return Math.floor(a/e)*e}function ne(a){return a*(Math.PI/180)}function re(a,e,t){return a*(1-t)+e*t}class j{static magnitudeSquared(e){return e.x*e.x+e.y*e.y}static magnitude(e){const t=Math.sqrt(this.magnitudeSquared(e));return isNaN(t)?0:t}static normalize(e){const t=this.magnitude(e);return t===0?{x:0,y:0}:this.divide(e,t)}static dot(e,t){return e.x*t.x+e.y*t.y}static subtract(e,t){return typeof t=="number"?{x:e.x-t,y:e.y-t}:{x:e.x-t.x,y:e.y-t.y}}static add(e,t){return typeof t=="number"?{x:e.x+t,y:e.y+t}:{x:e.x+t.x,y:e.y+t.y}}static multiply(e,t){return typeof t=="number"?{x:e.x*t,y:e.y*t}:{x:e.x*t.x,y:e.y*t.y}}static divide(e,t){return typeof t=="number"?{x:e.x/t,y:e.y/t}:{x:e.x/t.x,y:e.y/t.y}}static rotate(e,t,n){const r=Math.cos(ne(n)),o=Math.sin(ne(n)),i=this.subtract(e,t);return{x:t.x+r*i.x-o*i.y,y:t.y+o*i.x+r*i.y}}static min(e,t){return typeof t=="number"?{x:Math.min(e.x,t),y:Math.min(e.y,t)}:{x:Math.min(e.x,t.x),y:Math.min(e.y,t.y)}}static componentMin(e){return e.x<e.y?e.x:e.y}static max(e,t){return typeof t=="number"?{x:Math.max(e.x,t),y:Math.max(e.y,t)}:{x:Math.max(e.x,t.x),y:Math.max(e.y,t.y)}}static componentMax(e){return e.x>e.y?e.x:e.y}static roundTo(e,t){return{x:ee(e.x,t.x),y:ee(e.y,t.y)}}static floorTo(e,t){return{x:te(e.x,t.x),y:te(e.y,t.y)}}static sign(e){return{x:Math.sign(e.x),y:Math.sign(e.y)}}static abs(e){return{x:Math.abs(e.x),y:Math.abs(e.y)}}static pow(e,t){return typeof t=="number"?{x:Math.pow(e.x,t),y:Math.pow(e.y,t)}:{x:Math.pow(e.x,t.x),y:Math.pow(e.y,t.y)}}static clamp(e,t,n){return{x:Math.min(Math.max(e.x,t),n),y:Math.min(Math.max(e.y,t),n)}}static boundingBox(e){let t=Number.MAX_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER,r=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER;for(let s of e)t=s.x<t?s.x:t,n=s.x>n?s.x:n,r=s.y<r?s.y:r,o=s.y>o?s.y:o;let i=n-t,l=o-r,c={x:(t+n)/2,y:(r+o)/2};return{min:{x:t,y:r},max:{x:n,y:o},width:i,height:l,center:c}}static pointInPolygon(e,t){const n=this.boundingBox(t);if(e.x<n.min.x||e.x>n.max.x||e.y<n.min.y||e.y>n.max.y)return!1;let r=!1;for(let o=0,i=t.length-1;o<t.length;i=o++){const l=t[o].y>e.y,c=t[i].y>e.y;l!==c&&e.x<(t[i].x-t[o].x)*(e.y-t[o].y)/(t[i].y-t[o].y)+t[o].x&&(r=!r)}return r}static compare(e,t,n){return this.magnitudeSquared(this.subtract(e,t))<n*n}static distance(e,t){return this.magnitude(this.subtract(e,t))}static lerp(e,t,n){return{x:re(e.x,t.x,n),y:re(e.y,t.y,n)}}static centroid(e){let t={x:0,y:0};for(let n of e)t.x+=n.x,t.y+=n.y;return e.length>0&&(t={x:t.x/e.length,y:t.y/e.length}),t}}function De(a,e,t){let n,{popupDelay:r=1e3}=e;const o=M(),i=he();W(a,i,f=>t(4,n=f));let l=0;const c={};async function s(f){const d=l+=1;await Promise.all([o.popover.open({url:`${pe}/crit-popover?${new URLSearchParams({players:f.join(",")}).toString()}`,disableClickAway:!0,hidePaper:!0,width:512,height:512,marginThreshold:0,id:Q,anchorOrigin:{horizontal:"CENTER",vertical:"CENTER"},transformOrigin:{horizontal:"CENTER",vertical:"CENTER"}})]),r>0&&(await Ce(r),l===d&&await o.popover.close(Q))}function u(){if(r>0){const f=Date.now();for(const d in c){const g=c[d];f-g.when>r&&delete c[d]}}}return N(()=>{o.broadcast.onMessage(O,f=>{var g;if(!Re(f))return;const{data:d}=f;r>0&&Date.now()-d.when>r||d.rollId in c||d.rolls.some(w=>ke(w))&&(c[d.rollId]={playerName:((g=n[d.playerId])==null?void 0:g.name)??"?",playerId:d.playerId,when:d.when},u(),Object.keys(c).length!==0&&s(Object.values(c).map(w=>w.playerName)))})}),a.$$set=f=>{"popupDelay"in f&&t(1,r=f.popupDelay)},[i,r]}class Oe extends I{constructor(e){super(),E(this,e,De,null,_,{popupDelay:1})}}function V(a){return!!a.dice}function G(a){return Array.isArray(a)?a.map(e=>G(e)).flat(1):V(a)?a.dice.map(e=>G(e)).flat(1):[Number(a.id)]}function ze(a){if(a.combination||a.dice.length!==2||a.dice.some(t=>V(t)))return!1;const e=a.dice;return e[0].type==="D100"&&e[1].type==="D10"}function He(a,e){const t=e[a[0].id],n=e[a[1].id];return t===0&&n===0?100:t+n}function Fe(a){return Number(a.substring(1))}function qe(a){const e=M(),t={};function n(i,l){const c=[];for(const s of i.dice)if(V(s))if(ze(s))c.push({sides:100,results:[He(s.dice,l)]});else{let u=z.ADD;s.combination==="HIGHEST"?u=z.MAX:s.combination==="LOWEST"&&(u=z.MIN),c.push(J(u,s.dice.map(f=>n({bonus:0,dice:[f],hidden:!1},l))))}else{const u=Fe(s.type),f=l[s.id];c.push({sides:u,results:[u===10&&f===0?10:f]})}return i.bonus&&c.push(i.bonus),c.length===0?0:c.length>1?J(z.ADD,c):c[0]}function r(i,l){const[c,s]=[l["rodeo.owlbear.dice/roll"],l["rodeo.owlbear.dice/rollValues"]];if(!c||!s)return;const u=G(c.dice);if(u.length===0)return;const f=u.reduce((g,w)=>Math.max(g,w)),d=`${i}-${f}`;if(u.some(g=>typeof s[g]!="number")){t[d]=!0;return}if(t[d])return delete t[d],{rollId:d,roll:c,rollValues:s}}function o(i){const l=r(i.connectionId,i.metadata);if(!l)return;const c=`${i.connectionId}-${l.rollId}`,s=Te(n(l.roll,l.rollValues));Se(s)||e.broadcast.sendMessage(O,{topic:"roll",imported:!0,rolls:[s],when:Date.now(),playerId:i.id,rollId:c},{destination:"LOCAL"})}return N(()=>{(async()=>(await Promise.all([(async()=>{r(...await Promise.all([e.player.getConnectionId(),e.player.getMetadata()]))})(),(async()=>{const i=await e.party.getPlayers();for(const l of i)r(l.id,l.metadata)})()]),e.player.onChange(o),e.party.onChange(i=>{i.forEach(o)})))()}),[]}class Le extends I{constructor(e){super(),E(this,e,qe,null,_,{})}}function Be(a,e,t){let n;const r=M(),o=he();return W(a,o,i=>t(1,n=i)),N(()=>{r.broadcast.onMessage(O,i=>{if(!Ae(i))return;const{data:l}=i;r.notification.show(`${n[l.playerId].name}: "${l.msg}"`)})}),[o]}class Ue extends I{constructor(e){super(),E(this,e,Be,null,_,{})}}const ae=`uniform vec2 size;
uniform float ground;
uniform float isFront;
uniform float speed;
uniform float time;
uniform float3 color1;
uniform float3 color2;
uniform float opacity;

const float PI = 3.1415926;

float2 hash(float2 p) {
	p = float2(dot(p,float2(127.1,311.7)), dot(p,float2(269.5,183.3)));
	return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float hash(float p) {
    return hash(float2(p * p, p)).x;
}

float getCylinderUnitHeightAt(float2 unitCoord, float2 ellHalfSize) {
    float a2 = ellHalfSize.x * ellHalfSize.x;
    float b2 = ellHalfSize.y * ellHalfSize.y;
    float dx = (unitCoord.x - 0.5); 
    float q = sqrt(a2 * b2 * (a2 - dx * dx));
    float w = a2 * unitCoord.y;
    return (isFront >= 0 ? (w - q) : (q + w)) / a2;
}

float intensity(float x, float octave) {
    float t = (isFront >= 0 ? time : -time) / octave * speed;
    float a = (x + t + hash(octave)) * PI * 2;
    return sin(a * octave) * 0.5 + 1;
}

float getCylinderOpacity(float2 unitCoord) {
    float2 ellHalfSize = float2(0.5, ground >= 0.5 ? 1 - ground : ground);
    float2 bottomTop = float2(
        ellHalfSize.y,
        ground
    );
    float h = getCylinderUnitHeightAt(unitCoord, ellHalfSize);
    if (h > bottomTop.y || h < bottomTop.x) return 0;
    float o = (h - bottomTop.x) / (bottomTop.y - bottomTop.x);
    return clamp(o, 0, 1);
}

half4 main(float2 coord) {
    float2 unitCoord = coord / size;
    float c = getCylinderOpacity(unitCoord);
    {
        float f = 0;
        f += intensity(unitCoord.x, 1) * (1. / 2);
        f += intensity(unitCoord.x, 2) * (1. / 6);
        f += intensity(unitCoord.x, 4) * (1. / 6);
        f += intensity(unitCoord.x, 8) * (1. / 6);
        f *= f;
        c *= clamp(f, 0, 1) * opacity;
    }
    return half4(mix(color2, color1, c) * c, c);
}`,je=`uniform vec2 size;
uniform mat3 view;
uniform shader scene;
uniform float speed;
uniform float time;
uniform float margin;
uniform float3 color;
uniform float opacity;

const float PI = 3.1415926;

float getMarginDist(float2 unitUv, float2 unitMargins) {
    float2 d1 = unitMargins - unitUv;
    float2 d2 = unitUv - (1 - unitMargins);
    return max(0, max(max(d1.x, d2.x), max(d1.y, d2.y)));
}

float sampleEdgeOpacity(float2 uv) {
    uv = uv / size;
    float2 unitMargins = margin * float2(size.y / size.x, 1);
    return pow(getMarginDist(uv, unitMargins), 1.15);
}

float varyOpacity(float o) {
    return max(0.5, abs(sin(time * speed * PI))) * o;
}

half4 blend(half4 src, half4 dst) {
    return src * (1 - dst.a) + dst * dst.a;
}

half4 main(float2 coord) {
    float2 uv = (float3(coord, 1) * view).xy;
    half4 orig = scene.eval(uv);
    float edgeOpacity = varyOpacity(sampleEdgeOpacity(uv));
    return blend(orig, half4(color, opacity * edgeOpacity));
}`;var Xe={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const Ge=ge(Xe),D="a-f\\d",We=`#?[${D}]{3}[${D}]?`,Ve=`#?[${D}]{6}([${D}]{2})?`,Ke=new RegExp(`[^#${D}]`,"gi"),Ye=new RegExp(`^${We}$|^${Ve}$`,"i");var Ze=(a,e={})=>{if(typeof a!="string"||Ke.test(a)||!Ye.test(a))throw new TypeError("Expected a valid hex string");a=a.replace(/^#/,"");let t=1;a.length===8&&(t=Number.parseInt(a.slice(6,8),16)/255,a=a.slice(0,6)),a.length===4&&(t=Number.parseInt(a.slice(3,4).repeat(2),16)/255,a=a.slice(0,3)),a.length===3&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);const n=Number.parseInt(a,16),r=n>>16,o=n>>8&255,i=n&255,l=typeof e.alpha=="number"?e.alpha:t;if(e.format==="array")return[r,o,i,l];if(e.format==="css"){const c=l===1?"":` / ${Number((l*100).toFixed(2))}%`;return`rgb(${r} ${o} ${i}${c})`}return{red:r,green:o,blue:i,alpha:l}};const Je=ge(Ze),Qe=/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/;var et=new RegExp(Qe,"i");const K="-?\\d*(?:\\.\\d+)",A=`(${K}?)`,$=`(${K}?%)`,P=`(${K}?%?)`,tt=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,
    \\s*${$}\\s*,
    \\s*${$}\\s*
    (?:,\\s*${P}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var nt=new RegExp(tt);const rt=`^
  hsla?\\(
    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*
    \\s+${$}
    \\s+${$}
    \\s*(?:\\s*\\/\\s*${P}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var at=new RegExp(rt);const ot=`^
  rgba?\\(
    \\s*${A}\\s*,
    \\s*${A}\\s*,
    \\s*${A}\\s*
    (?:,\\s*${P}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var st=new RegExp(ot);const it=`^
  rgba?\\(
    \\s*${$}\\s*,
    \\s*${$}\\s*,
    \\s*${$}\\s*
    (?:,\\s*${P}\\s*)?
  \\)
  $
`.replace(/\n|\s/g,"");var lt=new RegExp(it);const ct=`^
  rgba?\\(
    \\s*${A}
    \\s+${A}
    \\s+${A}
    \\s*(?:\\s*\\/\\s*${P}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var ut=new RegExp(ct);const ft=`^
  rgba?\\(
    \\s*${$}
    \\s+${$}
    \\s+${$}
    \\s*(?:\\s*\\/\\s*${P}\\s*)?
  \\)
$
`.replace(/\n|\s/g,"");var dt=new RegExp(ft);const mt=/^transparent$/;var yt=new RegExp(mt,"i");const Y=(a,e,t)=>Math.min(Math.max(e,a),t),pt=a=>{let e=a;return typeof e!="number"&&(e=e.endsWith("%")?parseFloat(e)*255/100:parseFloat(e)),Y(Math.round(e),0,255)},oe=a=>Y(parseFloat(a),0,100);function xe(a){let e=a;return typeof e!="number"&&(e=e.endsWith("%")?parseFloat(e)/100:parseFloat(e)),Y(e,0,1)}function ht(a){const[e,t,n,r]=Je(a,{format:"array"});return H([null,e,t,n,r])}function gt([,a,e,t,n=1]){let r=a;return r.endsWith("turn")?r=parseFloat(r)*360/1:r.endsWith("rad")?r=Math.round(parseFloat(r)*180/Math.PI):r=parseFloat(r),{type:"hsl",values:[r,oe(e),oe(t)],alpha:xe(n===null?1:n)}}function H([,a,e,t,n=1]){return{type:"rgb",values:[a,e,t].map(pt),alpha:xe(n===null?1:n)}}/**
 * parse-css-color
 * @version v0.2.1
 * @link http://github.com/noeldelgado/parse-css-color/
 * @license MIT
 */const xt=a=>{if(typeof a!="string")return null;const e=et.exec(a);if(e)return ht(e[0]);const t=at.exec(a)||nt.exec(a);if(t)return gt(t);const n=ut.exec(a)||dt.exec(a)||st.exec(a)||lt.exec(a);if(n)return H(n);if(yt.exec(a))return H([null,0,0,0,0]);const r=Ge[a.toLowerCase()];return r?H([null,r[0],r[1],r[2],1]):null};function $t(a,e,t){let n;const r=M(),o=Ee();W(a,o,s=>t(1,n=s));const i=`${O}/edge-glow-effect`;function l(s){const u=xt(n.mode==="DARK"?n.secondary.dark:n.secondary.light);return u?{x:u.values[0]/255,y:u.values[1]/255,z:u.values[2]/255}:{x:0,y:1,z:0}}async function c(s){const u=X().effectType("VIEWPORT").layer("POST_PROCESS").disableHit(!0).locked(!0).id(i).sksl(je).uniforms([{name:"margin",value:.125},{name:"opacity",value:1.66},{name:"color",value:s},{name:"speed",value:.75}]).build();await r.scene.local.addItems([u])}return $e(async()=>{await r.scene.local.deleteItems([i])}),a.$$.update=()=>{a.$$.dirty&2&&c(l())},[o,n]}class bt extends I{constructor(e){super(),E(this,e,$t,null,_,{})}}function se(a){let e;const t=a[2].default,n=be(t,a,a[1],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,o){n&&n.m(r,o),e=!0},p(r,o){n&&n.p&&(!e||o&2)&&we(n,t,r,r[1],e?_e(t,r[1],o,null):ve(r[1]),null)},i(r){e||(p(n,r),e=!0)},o(r){h(n,r),e=!1},d(r){n&&n.d(r)}}}function wt(a){let e,t,n=a[0]&&se(a);return{c(){e=ce("div"),n&&n.c(),this.h()},l(r){e=ue(r,"DIV",{class:!0});var o=fe(e);n&&n.l(o),o.forEach(v),this.h()},h(){de(e,"class","component")},m(r,o){S(r,e,o),n&&n.m(e,null),t=!0},p(r,[o]){r[0]?n?(n.p(r,o),o&1&&p(n,1)):(n=se(r),n.c(),p(n,1),n.m(e,null)):n&&(me(),h(n,1,1,()=>{n=null}),ye())},i(r){t||(p(n),t=!0)},o(r){h(n),t=!1},d(r){r&&v(e),n&&n.d()}}}function vt(a,e,t){let{$$slots:n={},$$scope:r}=e;const o=M();let i=!1;return N(async()=>{o.scene.isReady().then(l=>t(0,i=l)),o.scene.onReadyChange(l=>{t(0,i=l)})}),a.$$set=l=>{"$$scope"in l&&t(1,r=l.$$scope)},[i,r,n]}class _t extends I{constructor(e){super(),E(this,e,vt,wt,_,{})}}function ie(a){let e,t;return e=new bt({}),{c(){C(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,r){k(e,n,r),t=!0},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){h(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function It(a){let e,t,n=a[0]&&ie();return{c(){n&&n.c(),e=Z()},l(r){n&&n.l(r),e=Z()},m(r,o){n&&n.m(r,o),S(r,e,o),t=!0},p(r,o){r[0]?n?o&1&&p(n,1):(n=ie(),n.c(),p(n,1),n.m(e.parentNode,e)):n&&(me(),h(n,1,1,()=>{n=null}),ye())},i(r){t||(p(n),t=!0)},o(r){h(n),t=!1},d(r){r&&v(e),n&&n.d(r)}}}function Et(a){let e,t,n;return t=new _t({props:{$$slots:{default:[It]},$$scope:{ctx:a}}}),{c(){e=ce("div"),C(t.$$.fragment),this.h()},l(r){e=ue(r,"DIV",{class:!0});var o=fe(e);R(t.$$.fragment,o),o.forEach(v),this.h()},h(){de(e,"class","component")},m(r,o){S(r,e,o),k(t,e,null),n=!0},p(r,[o]){const i={};o&4097&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){h(t.$$.fragment,r),n=!1},d(r){r&&v(e),T(t)}}}const le="rodeo.owlbear.initiative-tracker/metadata";function Mt(a,e,t){const n=`${O}/initiative-active`,r={color1:{x:.33,y:1,z:.33},color2:{x:.5,y:.85,z:.66},ground:.75,speed:.75},o={x:1.5,y:1.33},i=M();let l=!1,c=null,s=!1;function u(m){const x=m.filter(y=>y.metadata[le]);for(const y of x){const{metadata:{[le]:b}}=y;if(b.active){d(y);return}}f()}async function f(){l=!1,c=null,t(0,s=!1),i.scene.local.deleteItems([n])}async function d(m){t(0,s=m.createdUserId===i.player.id),l||await w(),g(m)}const g=(()=>{const m=async y=>{if(!l)return;c=y.id;const b=await i.scene.items.getItemBounds([y.id]),F={x:b.width,y:b.height},q=j.subtract(b.center,j.multiply(j.multiply(o,.5),F));await i.scene.local.updateItems([n],([L])=>{L.scale={x:b.width,y:b.height},L.position=q,L.attachedTo=y.id})},x=Ne.debounce(m,200);return async y=>{l&&(c!==y.id?m(y):x(y))}})();async function w(){l=!0,c=null;const m=Me().id(n).layer("ATTACHMENT").disableHit(!0).locked(!0).strokeColor("transparent").fillColor("transparent").width(1).height(1).disableAttachmentBehavior(["COPY","DELETE","ROTATION","SCALE"]).build(),x=Object.entries(r).map(([F,q])=>({name:F,value:q})),y=X().id(`${n}/back`).effectType("STANDALONE").sksl(ae).disableHit(!0).locked(!0).width(o.x).height(o.y).layer("MOUNT").zIndex(-1).attachedTo(m.id).uniforms([...x,{name:"isFront",value:-1},{name:"opacity",value:.66}]).build(),b=X().id(`${n}/front`).effectType("STANDALONE").sksl(ae).disableHit(!0).locked(!0).width(o.x).height(o.y).layer("ATTACHMENT").zIndex(1e3).attachedTo(m.id).uniforms([...x,{name:"isFront",value:1},{name:"opacity",value:1}]).build();return await i.scene.local.addItems([m,y,b]),m}return N(()=>{const m=async()=>{await w(),i.scene.items.getItems().then(u),i.scene.items.onChange(u)};i.scene.onReadyChange(x=>{x&&m()}),i.scene.isReady().then(x=>{x&&m()})}),[s]}class Ct extends I{constructor(e){super(),E(this,e,Mt,Et,_,{})}}function Rt(a){let e,t,n,r,o,i,l,c;return e=new Le({}),n=new Ue({}),o=new Oe({props:{popupDelay:5e3}}),l=new Ct({}),{c(){C(e.$$.fragment),t=B(),C(n.$$.fragment),r=B(),C(o.$$.fragment),i=B(),C(l.$$.fragment)},l(s){R(e.$$.fragment,s),t=U(s),R(n.$$.fragment,s),r=U(s),R(o.$$.fragment,s),i=U(s),R(l.$$.fragment,s)},m(s,u){k(e,s,u),S(s,t,u),k(n,s,u),S(s,r,u),k(o,s,u),S(s,i,u),k(l,s,u),c=!0},p:Ie,i(s){c||(p(e.$$.fragment,s),p(n.$$.fragment,s),p(o.$$.fragment,s),p(l.$$.fragment,s),c=!0)},o(s){h(e.$$.fragment,s),h(n.$$.fragment,s),h(o.$$.fragment,s),h(l.$$.fragment,s),c=!1},d(s){s&&(v(t),v(r),v(i)),T(e,s),T(n,s),T(o,s),T(l,s)}}}function kt(a){const e=M();return N(()=>{e.popover.open({url:`${pe}/roll-popover`,hidePaper:!0,width:0,height:0,marginThreshold:96,disableClickAway:!0,id:Pe,anchorOrigin:{horizontal:"CENTER",vertical:"BOTTOM"}})}),[]}class Ht extends I{constructor(e){super(),E(this,e,kt,Rt,_,{})}}export{Ht as component};
