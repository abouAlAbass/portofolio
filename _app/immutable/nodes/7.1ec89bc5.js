import{i as ke,t as ne}from"../chunks/projects.9b1e071b.js";import{s as he,e as se,i as M,d as h,f as w,a as B,l as H,g as E,h as I,c as N,m as J,j as b,v as g,w as S,O as oe,n as X,y as me,B as z,r as te,A as K,x as ee}from"../chunks/scheduler.98dcdc08.js";import{S as ge,i as ve,a as j,g as Q,t as D,c as W,b as A,d as O,m as U,e as q}from"../chunks/index.bc2cb9f6.js";import{U as Y,g as Z,e as G}from"../chunks/UIcon.b3002e20.js";import{b as ae}from"../chunks/paths.ab38b495.js";import{C as ye}from"../chunks/CardLogo.d328c2ce.js";import{M as we}from"../chunks/app.33749309.js";import{B as Ee,M as je}from"../chunks/Banner.0efc9b7b.js";import{T as Ce}from"../chunks/TabTitle.9718f693.js";import{C as $e}from"../chunks/Chip.d79c8c91.js";import{C as be}from"../chunks/CardDivider.927ca8d3.js";function Ie({params:n}){if(n.slug)return{project:ke.find(l=>l.slug===n.slug)}}const rt=Object.freeze(Object.defineProperty({__proto__:null,load:Ie},Symbol.toStringTag,{value:"Module"}));function ie(n){var V;let e,l,t,r,s,a,o,i,d,p,k=((V=n[0])==null?void 0:V.label)+"",f,m,P,y;return s=new Y({props:{icon:"i-carbon-close"}}),{c(){e=w("div"),l=w("div"),t=w("div"),r=w("button"),A(s.$$.fragment),a=B(),o=w("div"),d=B(),p=w("p"),f=H(k),this.h()},l(c){e=E(c,"DIV",{class:!0});var L=I(e);l=E(L,"DIV",{class:!0});var T=I(l);t=E(T,"DIV",{class:!0});var $=I(t);r=E($,"BUTTON",{class:!0});var C=I(r);O(s.$$.fragment,C),C.forEach(h),$.forEach(h),a=N(T),o=E(T,"DIV",{class:!0,style:!0}),I(o).forEach(h),d=N(T),p=E(T,"P",{class:!0});var u=I(p);f=J(u,k),u.forEach(h),T.forEach(h),L.forEach(h),this.h()},h(){var c;b(r,"class","cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"),b(t,"class","self-end"),b(o,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),b(o,"style",i=`background-image: url(${(c=n[0])==null?void 0:c.src});`),b(p,"class","font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),b(l,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),b(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(c,L){M(c,e,L),g(e,l),g(l,t),g(t,r),U(s,r,null),g(l,a),g(l,o),g(l,d),g(l,p),g(p,f),m=!0,P||(y=[S(r,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),S(r,"keydown",n[11]),S(r,"keypress",n[12]),S(r,"keyup",n[13]),S(l,"click",Ve),S(l,"keydown",n[7]),S(l,"keypress",n[8]),S(l,"keyup",n[9]),S(l,"keyup",n[10]),S(e,"click",function(){oe(n[1])&&n[1].apply(this,arguments)}),S(e,"click",Pe),S(e,"keydown",n[3]),S(e,"keypress",n[4]),S(e,"keyup",n[5]),S(e,"keyup",n[6])],P=!0)},p(c,L){var T,$;n=c,(!m||L&1&&i!==(i=`background-image: url(${(T=n[0])==null?void 0:T.src});`))&&b(o,"style",i),(!m||L&1)&&k!==(k=(($=n[0])==null?void 0:$.label)+"")&&X(f,k)},i(c){m||(j(s.$$.fragment,c),m=!0)},o(c){D(s.$$.fragment,c),m=!1},d(c){c&&h(e),q(s),P=!1,me(y)}}}function De(n){let e,l,t=n[2]&&ie(n);return{c(){t&&t.c(),e=se()},l(r){t&&t.l(r),e=se()},m(r,s){t&&t.m(r,s),M(r,e,s),l=!0},p(r,[s]){r[2]?t?(t.p(r,s),s&4&&j(t,1)):(t=ie(r),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(Q(),D(t,1,1,()=>{t=null}),W())},i(r){l||(j(t),l=!0)},o(r){D(t),l=!1},d(r){r&&h(e),t&&t.d(r)}}}const Ve=n=>n.stopPropagation(),Pe=n=>n.stopPropagation();function xe(n,e,l){let t,{screenshot:r=void 0}=e,{onClose:s=()=>{l(0,r=void 0)}}=e;function a(c){z.call(this,n,c)}function o(c){z.call(this,n,c)}function i(c){z.call(this,n,c)}function d(c){z.call(this,n,c)}function p(c){z.call(this,n,c)}function k(c){z.call(this,n,c)}function f(c){z.call(this,n,c)}function m(c){z.call(this,n,c)}function P(c){z.call(this,n,c)}function y(c){z.call(this,n,c)}function V(c){z.call(this,n,c)}return n.$$set=c=>{"screenshot"in c&&l(0,r=c.screenshot),"onClose"in c&&l(1,s=c.onClose)},n.$$.update=()=>{n.$$.dirty&1&&l(2,t=typeof r<"u")},[r,s,t,a,o,i,d,p,k,f,m,P,y,V]}class Te extends ge{constructor(e){super(),ve(this,e,xe,De,he,{screenshot:0,onClose:1})}}function ce(n,e,l){const t=n.slice();return t[11]=e[l],t[13]=l,t}function fe(n,e,l){const t=n.slice();return t[11]=e[l],t}function ue(n,e,l){const t=n.slice();return t[11]=e[l],t}function Se(n){let e,l,t,r,s,a,o,i,d,p,k,f,m,P;l=new Ee({props:{img:Z(n[0].project.logo),$$slots:{default:[Ae]},$$scope:{ctx:n}}});const y=[Ue,Oe],V=[];function c(C,u){return C[0].project.description?0:1}a=c(n),o=V[a]=y[a](n),p=new be({});const L=[Le,qe],T=[];function $(C,u){return C[4].length>0?0:1}return f=$(n),m=T[f]=L[f](n),{c(){e=w("div"),A(l.$$.fragment),t=B(),r=w("div"),s=w("div"),o.c(),i=B(),d=w("div"),A(p.$$.fragment),k=B(),m.c(),this.h()},l(C){e=E(C,"DIV",{class:!0});var u=I(e);O(l.$$.fragment,u),t=N(u),r=E(u,"DIV",{class:!0});var _=I(r);s=E(_,"DIV",{class:!0});var x=I(s);o.l(x),x.forEach(h),i=N(_),d=E(_,"DIV",{class:!0});var v=I(d);O(p.$$.fragment,v),v.forEach(h),k=N(_),m.l(_),_.forEach(h),u.forEach(h),this.h()},h(){b(s,"class","px-10px m-y-5"),b(d,"class","w-100% m-t-8"),b(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),b(e,"class","flex flex-col items-center overflow-x-hidden")},m(C,u){M(C,e,u),U(l,e,null),g(e,t),g(e,r),g(r,s),V[a].m(s,null),g(r,i),g(r,d),U(p,d,null),g(r,k),T[f].m(r,null),P=!0},p(C,u){const _={};u&1&&(_.img=Z(C[0].project.logo)),u&262145&&(_.$$scope={dirty:u,ctx:C}),l.$set(_);let x=a;a=c(C),a===x?V[a].p(C,u):(Q(),D(V[x],1,1,()=>{V[x]=null}),W(),o=V[a],o?o.p(C,u):(o=V[a]=y[a](C),o.c()),j(o,1),o.m(s,null)),m.p(C,u)},i(C){P||(j(l.$$.fragment,C),j(o),j(p.$$.fragment,C),j(m),P=!0)},o(C){D(l.$$.fragment,C),D(o),D(p.$$.fragment,C),D(m),P=!1},d(C){C&&h(e),q(l),V[a].d(),q(p),T[f].d()}}}function Be(n){let e,l,t,r,s="Could not load project data...",a;return l=new Y({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),A(l.$$.fragment),t=B(),r=w("p"),r.textContent=s,this.h()},l(o){e=E(o,"DIV",{class:!0});var i=I(e);O(l.$$.fragment,i),t=N(i),r=E(i,"P",{class:!0,"data-svelte-h":!0}),te(r)!=="svelte-18mwztv"&&(r.textContent=s),i.forEach(h),this.h()},h(){b(r,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(o,i){M(o,e,i),U(l,e,null),g(e,t),g(e,r),a=!0},p:K,i(o){a||(j(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),q(l)}}}function Ne(n){let e=n[0].project.name+"",l;return{c(){l=H(e)},l(t){l=J(t,e)},m(t,r){M(t,l,r)},p(t,r){r&1&&e!==(e=t[0].project.name+"")&&X(l,e)},d(t){t&&h(l)}}}function Me(n){let e,l,t,r,s=n[11].label+"",a,o,i;return l=new Y({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),A(l.$$.fragment),t=B(),r=w("span"),a=H(s),o=B(),this.h()},l(d){e=E(d,"DIV",{class:!0});var p=I(e);O(l.$$.fragment,p),t=N(p),r=E(p,"SPAN",{});var k=I(r);a=J(k,s),k.forEach(h),p.forEach(h),o=N(d),this.h()},h(){b(e,"class","row-center gap-2")},m(d,p){M(d,e,p),U(l,e,null),g(e,t),g(e,r),g(r,a),M(d,o,p),i=!0},p(d,p){(!i||p&1)&&s!==(s=d[11].label+"")&&X(a,s)},i(d){i||(j(l.$$.fragment,d),i=!0)},o(d){D(l.$$.fragment,d),i=!1},d(d){d&&(h(e),h(o)),q(l)}}}function de(n){let e,l;return e=new $e({props:{href:n[11].to,$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.href=t[11].to),r&262145&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function ze(n){let e,l,t,r=n[11].name+"",s,a,o;return e=new ye({props:{src:Z(n[11].logo),alt:n[11].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){A(e.$$.fragment),l=B(),t=w("span"),s=H(r),a=B(),this.h()},l(i){O(e.$$.fragment,i),l=N(i),t=E(i,"SPAN",{class:!0});var d=I(t);s=J(d,r),d.forEach(h),a=N(i),this.h()},h(){b(t,"class","text-[0.9em]")},m(i,d){U(e,i,d),M(i,l,d),M(i,t,d),g(t,s),M(i,a,d),o=!0},p(i,d){const p={};d&1&&(p.src=Z(i[11].logo)),d&1&&(p.alt=i[11].name),e.$set(p),(!o||d&1)&&r!==(r=i[11].name+"")&&X(s,r)},i(i){o||(j(e.$$.fragment,i),o=!0)},o(i){D(e.$$.fragment,i),o=!1},d(i){i&&(h(l),h(t),h(a)),q(e,i)}}}function pe(n){let e,l;return e=new $e({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ae}/skills/${n[11].slug}`,$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.href=`${ae}/skills/${t[11].slug}`),r&262145&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function Ae(n){let e,l,t,r,s,a=n[0].project.type+"",o,i,d,p,k,f,m,P,y;t=new we({props:{$$slots:{default:[Ne]},$$scope:{ctx:n}}}),p=new be({});let V=G(n[0].project.links),c=[];for(let u=0;u<V.length;u+=1)c[u]=de(ue(n,V,u));const L=u=>D(c[u],1,1,()=>{c[u]=null});let T=G(n[0].project.skills),$=[];for(let u=0;u<T.length;u+=1)$[u]=pe(fe(n,T,u));const C=u=>D($[u],1,1,()=>{$[u]=null});return{c(){e=w("div"),l=w("div"),A(t.$$.fragment),r=B(),s=w("p"),o=H(a),i=B(),d=w("div"),A(p.$$.fragment),k=B(),f=w("div");for(let u=0;u<c.length;u+=1)c[u].c();m=B(),P=w("div");for(let u=0;u<$.length;u+=1)$[u].c();this.h()},l(u){e=E(u,"DIV",{class:!0});var _=I(e);l=E(_,"DIV",{class:!0});var x=I(l);O(t.$$.fragment,x),x.forEach(h),r=N(_),s=E(_,"P",{class:!0});var v=I(s);o=J(v,a),v.forEach(h),i=N(_),d=E(_,"DIV",{class:!0});var R=I(d);O(p.$$.fragment,R),R.forEach(h),k=N(_),f=E(_,"DIV",{class:!0});var re=I(f);for(let F=0;F<c.length;F+=1)c[F].l(re);re.forEach(h),m=N(_),P=E(_,"DIV",{class:!0});var le=I(P);for(let F=0;F<$.length;F+=1)$[F].l(le);le.forEach(h),_.forEach(h),this.h()},h(){b(l,"class","text-0.9em"),b(s,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),b(d,"class","w-75%"),b(f,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),b(P,"class","row-center flex-wrap m-b-2"),b(e,"class","col-center p-y-20")},m(u,_){M(u,e,_),g(e,l),U(t,l,null),g(e,r),g(e,s),g(s,o),g(e,i),g(e,d),U(p,d,null),g(e,k),g(e,f);for(let x=0;x<c.length;x+=1)c[x]&&c[x].m(f,null);g(e,m),g(e,P);for(let x=0;x<$.length;x+=1)$[x]&&$[x].m(P,null);y=!0},p(u,_){const x={};if(_&262145&&(x.$$scope={dirty:_,ctx:u}),t.$set(x),(!y||_&1)&&a!==(a=u[0].project.type+"")&&X(o,a),_&1){V=G(u[0].project.links);let v;for(v=0;v<V.length;v+=1){const R=ue(u,V,v);c[v]?(c[v].p(R,_),j(c[v],1)):(c[v]=de(R),c[v].c(),j(c[v],1),c[v].m(f,null))}for(Q(),v=V.length;v<c.length;v+=1)L(v);W()}if(_&1){T=G(u[0].project.skills);let v;for(v=0;v<T.length;v+=1){const R=fe(u,T,v);$[v]?($[v].p(R,_),j($[v],1)):($[v]=pe(R),$[v].c(),j($[v],1),$[v].m(P,null))}for(Q(),v=T.length;v<$.length;v+=1)C(v);W()}},i(u){if(!y){j(t.$$.fragment,u),j(p.$$.fragment,u);for(let _=0;_<V.length;_+=1)j(c[_]);for(let _=0;_<T.length;_+=1)j($[_]);y=!0}},o(u){D(t.$$.fragment,u),D(p.$$.fragment,u),c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)D(c[_]);$=$.filter(Boolean);for(let _=0;_<$.length;_+=1)D($[_]);y=!1},d(u){u&&h(e),q(t),q(p),ee(c,u),ee($,u)}}}function Oe(n){let e,l,t,r,s="No description",a;return l=new Y({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),A(l.$$.fragment),t=B(),r=w("p"),r.textContent=s,this.h()},l(o){e=E(o,"DIV",{class:!0});var i=I(e);O(l.$$.fragment,i),t=N(i),r=E(i,"P",{class:!0,"data-svelte-h":!0}),te(r)!=="svelte-1ugej71"&&(r.textContent=s),i.forEach(h),this.h()},h(){b(r,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(o,i){M(o,e,i),U(l,e,null),g(e,t),g(e,r),a=!0},p:K,i(o){a||(j(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),q(l)}}}function Ue(n){let e,l;return e=new je({props:{content:n[0].project.description}}),{c(){A(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,r){U(e,t,r),l=!0},p(t,r){const s={};r&1&&(s.content=t[0].project.description),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){q(e,t)}}}function qe(n){let e,l,t,r,s="No screenshots",a;return l=new Y({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),A(l.$$.fragment),t=B(),r=w("p"),r.textContent=s,this.h()},l(o){e=E(o,"DIV",{class:!0});var i=I(e);O(l.$$.fragment,i),t=N(i),r=E(i,"P",{class:!0,"data-svelte-h":!0}),te(r)!=="svelte-s36p3y"&&(r.textContent=s),i.forEach(h),this.h()},h(){b(r,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(o,i){M(o,e,i),U(l,e,null),g(e,t),g(e,r),a=!0},p:K,i(o){a||(j(l.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),a=!1},d(o){o&&h(e),q(l)}}}function Le(n){let e,l=G(n[4]),t=[];for(let r=0;r<l.length;r+=1)t[r]=_e(ce(n,l,r));return{c(){e=w("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var s=I(e);for(let a=0;a<t.length;a+=1)t[a].l(s);s.forEach(h),this.h()},h(){b(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(r,s){M(r,e,s);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(r,s){if(s&18){l=G(r[4]);let a;for(a=0;a<l.length;a+=1){const o=ce(r,l,a);t[a]?t[a].p(o,s):(t[a]=_e(o),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:K,o:K,d(r){r&&h(e),ee(t,r)}}}function _e(n){let e,l,t,r,s=n[11].label+"",a,o,i,d;function p(){return n[9](n[13])}return{c(){e=w("div"),l=w("div"),t=B(),r=w("p"),a=H(s),o=B(),this.h()},l(k){e=E(k,"DIV",{class:!0});var f=I(e);l=E(f,"DIV",{class:!0,style:!0}),I(l).forEach(h),t=N(f),r=E(f,"P",{class:!0});var m=I(r);a=J(m,s),m.forEach(h),o=N(f),f.forEach(h),this.h()},h(){b(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),b(l,"style",`background-image: url(${n[11].src});`),b(r,"class","text-[var(--tertiary-text)] font-300"),b(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(k,f){M(k,e,f),g(e,l),g(e,t),g(e,r),g(r,a),g(e,o),i||(d=[S(e,"click",p),S(e,"keydown",n[5]),S(e,"keypress",n[6]),S(e,"keyup",n[7]),S(e,"keyup",n[8])],i=!0)},p(k,f){n=k},d(k){k&&h(e),i=!1,me(d)}}}function Re(n){let e,l,t,r,s,a,o,i;e=new Ce({props:{title:n[2]}});const d=[Be,Se],p=[];function k(f,m){return f[0].project===void 0?0:1}return r=k(n),s=p[r]=d[r](n),o=new Te({props:{screenshot:n[3],onClose:n[10]}}),{c(){A(e.$$.fragment),l=B(),t=w("div"),s.c(),a=B(),A(o.$$.fragment),this.h()},l(f){O(e.$$.fragment,f),l=N(f),t=E(f,"DIV",{class:!0});var m=I(t);s.l(m),m.forEach(h),a=N(f),O(o.$$.fragment,f),this.h()},h(){b(t,"class","pb-10 overflow-x-hidden col flex-1")},m(f,m){U(e,f,m),M(f,l,m),M(f,t,m),p[r].m(t,null),M(f,a,m),U(o,f,m),i=!0},p(f,[m]){const P={};m&4&&(P.title=f[2]),e.$set(P);let y=r;r=k(f),r===y?p[r].p(f,m):(Q(),D(p[y],1,1,()=>{p[y]=null}),W(),s=p[r],s?s.p(f,m):(s=p[r]=d[r](f),s.c()),j(s,1),s.m(t,null));const V={};m&8&&(V.screenshot=f[3]),m&2&&(V.onClose=f[10]),o.$set(V)},i(f){i||(j(e.$$.fragment,f),j(s),j(o.$$.fragment,f),i=!0)},o(f){D(e.$$.fragment,f),D(s),D(o.$$.fragment,f),i=!1},d(f){f&&(h(l),h(t),h(a)),q(e,f),p[r].d(),q(o,f)}}}function Fe(n,e,l){var P;let t,r,{data:s}=e;const a=((P=s.project)==null?void 0:P.screenshots)??[];let o;function i(y){z.call(this,n,y)}function d(y){z.call(this,n,y)}function p(y){z.call(this,n,y)}function k(y){z.call(this,n,y)}const f=y=>l(1,o=y),m=()=>l(1,o=void 0);return n.$$set=y=>{"data"in y&&l(0,s=y.data)},n.$$.update=()=>{n.$$.dirty&2&&l(3,t=typeof o<"u"&&a[o]?a[o]:void 0),n.$$.dirty&1&&l(2,r=s.project?`${s.project.name} - ${ne}`:ne)},[s,o,r,t,a,i,d,p,k,f,m]}class lt extends ge{constructor(e){super(),ve(this,e,Fe,Re,he,{data:0})}}export{lt as component,rt as universal};
