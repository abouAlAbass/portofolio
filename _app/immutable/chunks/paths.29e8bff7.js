import{n as c,s as h}from"./scheduler.7a274a43.js";const e=[];function k(o,a=c){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const b=!e.length;for(const s of n)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(i=a(r,u)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:u,subscribe:_}}var f;const g=((f=globalThis.__sveltekit_kghurb)==null?void 0:f.base)??"/slick-portfolio-svelte";var l;const d=((l=globalThis.__sveltekit_kghurb)==null?void 0:l.assets)??g;export{d as a,g as b,k as w};
