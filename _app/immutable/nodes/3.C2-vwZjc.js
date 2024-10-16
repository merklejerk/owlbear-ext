import{s as x,b as j,o as p,n as A}from"../chunks/scheduler.BPW2WjMw.js";import{S as g,i as I,e as Y,c as K,d as W,g as h,r as Z,j as R,m as w,s as v,n as M,h as N,o as C,t as T,a as b,p as E}from"../chunks/index.Bg1sUENX.js";import{P as S,a as G}from"../chunks/public.wCUDhABG.js";import{g as $,a as V,b as J,c as z}from"../chunks/obr-host.Dqly8rIe.js";import{d as Q}from"../chunks/util.D_TvH_I6.js";import{i as tt,a as et,s as nt,b as rt,B as _,c as H,d as ot}from"../chunks/roll-formula.BbKZHRNX.js";import{P as k}from"../chunks/5.BqX7BhgE.js";import{P as at}from"../chunks/7.7rM55XYu.js";function F(a,t){return Math.round(a/t)*t}function L(a,t){return Math.floor(a/t)*t}function B(a){return a*(Math.PI/180)}function q(a,t,e){return a*(1-e)+t*e}class D{static magnitudeSquared(t){return t.x*t.x+t.y*t.y}static magnitude(t){const e=Math.sqrt(this.magnitudeSquared(t));return isNaN(e)?0:e}static normalize(t){const e=this.magnitude(t);return e===0?{x:0,y:0}:this.divide(t,e)}static dot(t,e){return t.x*e.x+t.y*e.y}static subtract(t,e){return typeof e=="number"?{x:t.x-e,y:t.y-e}:{x:t.x-e.x,y:t.y-e.y}}static add(t,e){return typeof e=="number"?{x:t.x+e,y:t.y+e}:{x:t.x+e.x,y:t.y+e.y}}static multiply(t,e){return typeof e=="number"?{x:t.x*e,y:t.y*e}:{x:t.x*e.x,y:t.y*e.y}}static divide(t,e){return typeof e=="number"?{x:t.x/e,y:t.y/e}:{x:t.x/e.x,y:t.y/e.y}}static rotate(t,e,r){const o=Math.cos(B(r)),s=Math.sin(B(r)),i=this.subtract(t,e);return{x:e.x+o*i.x-s*i.y,y:e.y+s*i.x+o*i.y}}static min(t,e){return typeof e=="number"?{x:Math.min(t.x,e),y:Math.min(t.y,e)}:{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y)}}static componentMin(t){return t.x<t.y?t.x:t.y}static max(t,e){return typeof e=="number"?{x:Math.max(t.x,e),y:Math.max(t.y,e)}:{x:Math.max(t.x,e.x),y:Math.max(t.y,e.y)}}static componentMax(t){return t.x>t.y?t.x:t.y}static roundTo(t,e){return{x:F(t.x,e.x),y:F(t.y,e.y)}}static floorTo(t,e){return{x:L(t.x,e.x),y:L(t.y,e.y)}}static sign(t){return{x:Math.sign(t.x),y:Math.sign(t.y)}}static abs(t){return{x:Math.abs(t.x),y:Math.abs(t.y)}}static pow(t,e){return typeof e=="number"?{x:Math.pow(t.x,e),y:Math.pow(t.y,e)}:{x:Math.pow(t.x,e.x),y:Math.pow(t.y,e.y)}}static clamp(t,e,r){return{x:Math.min(Math.max(t.x,e),r),y:Math.min(Math.max(t.y,e),r)}}static boundingBox(t){let e=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER;for(let n of t)e=n.x<e?n.x:e,r=n.x>r?n.x:r,o=n.y<o?n.y:o,s=n.y>s?n.y:s;let i=r-e,c=s-o,u={x:(e+r)/2,y:(o+s)/2};return{min:{x:e,y:o},max:{x:r,y:s},width:i,height:c,center:u}}static pointInPolygon(t,e){const r=this.boundingBox(e);if(t.x<r.min.x||t.x>r.max.x||t.y<r.min.y||t.y>r.max.y)return!1;let o=!1;for(let s=0,i=e.length-1;s<e.length;i=s++){const c=e[s].y>t.y,u=e[i].y>t.y;c!==u&&t.x<(e[i].x-e[s].x)*(t.y-e[s].y)/(e[i].y-e[s].y)+e[s].x&&(o=!o)}return o}static compare(t,e,r){return this.magnitudeSquared(this.subtract(t,e))<r*r}static distance(t,e){return this.magnitude(this.subtract(t,e))}static lerp(t,e,r){return{x:q(t.x,e.x,r),y:q(t.y,e.y,r)}}static centroid(t){let e={x:0,y:0};for(let r of t)e.x+=r.x,e.y+=r.y;return t.length>0&&(e={x:e.x/t.length,y:e.y/t.length}),e}}function it(a,t,e){let r,{popupDelay:o=1e3}=t;const s=$(),i=V();j(a,i,f=>e(4,r=f));let c=0;const u={};async function n(f){const d=c+=1;await Promise.all([s.popover.open({url:`${G}/crit-popover?${new URLSearchParams({players:f.join(",")}).toString()}`,disableClickAway:!0,hidePaper:!0,width:512,height:512,marginThreshold:0,id:k,anchorOrigin:{horizontal:"CENTER",vertical:"CENTER"},transformOrigin:{horizontal:"CENTER",vertical:"CENTER"}})]),o>0&&(await Q(o),c===d&&await s.popover.close(k))}function l(){if(o>0){const f=Date.now();for(const d in u){const y=u[d];f-y.when>o&&delete u[d]}}}return p(()=>{s.broadcast.onMessage(S,f=>{var y;if(!tt(f))return;const{data:d}=f;o>0&&Date.now()-d.when>o||d.rollId in u||d.rolls.some(m=>et(m))&&(u[d.rollId]={playerName:((y=r[d.playerId])==null?void 0:y.name)??"?",playerId:d.playerId,when:d.when},l(),Object.keys(u).length!==0&&n(Object.values(u).map(m=>m.playerName)))})}),a.$$set=f=>{"popupDelay"in f&&e(1,o=f.popupDelay)},[i,o]}class st extends g{constructor(t){super(),I(this,t,it,null,x,{popupDelay:1})}}function P(a){return!!a.dice}function O(a){return Array.isArray(a)?a.map(t=>O(t)).flat(1):P(a)?a.dice.map(t=>O(t)).flat(1):[Number(a.id)]}function lt(a){if(a.combination||a.dice.length!==2||a.dice.some(e=>P(e)))return!1;const t=a.dice;return t[0].type==="D100"&&t[1].type==="D10"}function ct(a,t){const e=t[a[0].id],r=t[a[1].id];return e===0&&r===0?100:e+r}function ut(a){return Number(a.substring(1))}function ft(a){const t=$(),e={};function r(i,c){const u=[];for(const n of i.dice)if(P(n))if(lt(n))u.push({sides:100,results:[ct(n.dice,c)]});else{let l=_.ADD;n.combination==="HIGHEST"?l=_.MAX:n.combination==="LOWEST"&&(l=_.MIN),u.push(H(l,n.dice.map(f=>r({bonus:0,dice:[f],hidden:!1},c))))}else{const l=ut(n.type),f=c[n.id];u.push({sides:l,results:[l===10&&f===0?10:f]})}return i.bonus&&u.push(i.bonus),u.length===0?0:u.length>1?H(_.ADD,u):u[0]}function o(i,c){const[u,n]=[c["rodeo.owlbear.dice/roll"],c["rodeo.owlbear.dice/rollValues"]];if(!u||!n)return;const l=O(u.dice);if(l.length===0)return;const f=l.reduce((y,m)=>Math.max(y,m)),d=`${i}-${f}`;if(l.some(y=>typeof n[y]!="number")){e[d]=!0;return}if(e[d])return delete e[d],{rollId:d,roll:u,rollValues:n}}function s(i){const c=o(i.connectionId,i.metadata);if(!c)return;const u=`${i.connectionId}-${c.rollId}`,n=nt(r(c.roll,c.rollValues));rt(n)||t.broadcast.sendMessage(S,{topic:"roll",imported:!0,rolls:[n],when:Date.now(),playerId:i.id,rollId:u},{destination:"LOCAL"})}return p(()=>{(async()=>(await Promise.all([(async()=>{o(...await Promise.all([t.player.getConnectionId(),t.player.getMetadata()]))})(),(async()=>{const i=await t.party.getPlayers();for(const c of i)o(c.id,c.metadata)})()]),t.player.onChange(s),t.party.onChange(i=>{i.forEach(s)})))()}),[]}class dt extends g{constructor(t){super(),I(this,t,ft,null,x,{})}}function yt(a,t,e){let r;const o=$(),s=V();return j(a,s,i=>e(1,r=i)),p(()=>{o.broadcast.onMessage(S,i=>{if(!ot(i))return;const{data:c}=i;o.notification.show(`${r[c.playerId].name}: "${c.msg}"`)})}),[s]}class mt extends g{constructor(t){super(),I(this,t,yt,null,x,{})}}const U=`uniform vec2 size;
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
}`;function ht(a){let t;return{c(){t=Y("div"),this.h()},l(e){t=K(e,"DIV",{class:!0}),W(t).forEach(h),this.h()},h(){Z(t,"class","component")},m(e,r){R(e,t,r)},p:A,i:A,o:A,d(e){e&&h(t)}}}const X="rodeo.owlbear.initiative-tracker/metadata";function xt(a){const t=`${S}/initiative-active`,e={color1:{x:.33,y:1,z:.33},color2:{x:.5,y:.85,z:.66},ground:.75,speed:.75},r={x:1.5,y:1.33},o=$();function s(n){const l=n.filter(f=>f.metadata[X]);for(const f of l){const{metadata:{[X]:d}}=f;if(d.active){c(f);return}}i()}async function i(){o.scene.local.deleteItems([t])}async function c(n){const l=await o.scene.items.getItemBounds([n.id]),f={x:l.width,y:l.height};(await o.scene.local.getItems([t])).length===0&&await u(),await o.scene.local.updateItems([t],([d])=>{d.scale={x:l.width,y:l.height},d.position=D.subtract(l.center,D.multiply(D.multiply(r,.5),f)),d.rotation=0,d.attachedTo=n.id})}async function u(){const n=J().id(t).layer("ATTACHMENT").disableHit(!0).locked(!0).strokeColor("transparent").fillColor("transparent").width(1).height(1).disableAttachmentBehavior(["COPY","DELETE","ROTATION","SCALE"]).build(),l=Object.entries(e).map(([y,m])=>({name:y,value:m})),f=z().id(`${t}/back`).effectType("STANDALONE").sksl(U).disableHit(!0).locked(!0).width(r.x).height(r.y).layer("MOUNT").zIndex(-1).attachedTo(n.id).uniforms([...l,{name:"isFront",value:-1},{name:"opacity",value:.66}]).build(),d=z().id(`${t}/front`).effectType("STANDALONE").sksl(U).disableHit(!0).locked(!0).width(r.x).height(r.y).layer("ATTACHMENT").zIndex(1e3).attachedTo(n.id).uniforms([...l,{name:"isFront",value:1},{name:"opacity",value:1}]).build();return await o.scene.local.addItems([n,f,d]),n}return p(()=>{const n=async()=>{await u(),o.scene.items.getItems().then(s),o.scene.items.onChange(s)};o.scene.onReadyChange(l=>{l&&n()}),o.scene.isReady().then(l=>{l&&n()})}),[]}class pt extends g{constructor(t){super(),I(this,t,xt,ht,x,{})}}function gt(a){let t,e,r,o,s,i,c,u;return t=new dt({}),r=new mt({}),s=new st({props:{popupDelay:5e3}}),c=new pt({}),{c(){w(t.$$.fragment),e=v(),w(r.$$.fragment),o=v(),w(s.$$.fragment),i=v(),w(c.$$.fragment)},l(n){M(t.$$.fragment,n),e=N(n),M(r.$$.fragment,n),o=N(n),M(s.$$.fragment,n),i=N(n),M(c.$$.fragment,n)},m(n,l){C(t,n,l),R(n,e,l),C(r,n,l),R(n,o,l),C(s,n,l),R(n,i,l),C(c,n,l),u=!0},p:A,i(n){u||(T(t.$$.fragment,n),T(r.$$.fragment,n),T(s.$$.fragment,n),T(c.$$.fragment,n),u=!0)},o(n){b(t.$$.fragment,n),b(r.$$.fragment,n),b(s.$$.fragment,n),b(c.$$.fragment,n),u=!1},d(n){n&&(h(e),h(o),h(i)),E(t,n),E(r,n),E(s,n),E(c,n)}}}function It(a){const t=$();return p(()=>{t.popover.open({url:`${G}/roll-popover`,hidePaper:!0,width:0,height:0,marginThreshold:96,disableClickAway:!0,id:at,anchorOrigin:{horizontal:"CENTER",vertical:"BOTTOM"}})}),[]}class At extends g{constructor(t){super(),I(this,t,It,gt,x,{})}}export{At as component};
