import{s as Ve,f as D,a as I,l as le,g as C,h as E,c as V,d,m as ne,j as k,i as A,v as p,n as ye,x as _e,e as ve,r as je,A as Ae}from"../chunks/scheduler.98dcdc08.js";import{S as Se,i as Le,b as L,d as P,m as M,a as v,t as w,e as j,g as se,c as ae}from"../chunks/index.bc2cb9f6.js";import{g as oe,e as Q,U as Z,u as Be,b as Ne}from"../chunks/UIcon.f72a7eb7.js";import{c as Ue,g as be}from"../chunks/app.33749309.js";import{C as qe}from"../chunks/Card.c55bd79d.js";import{C as Fe}from"../chunks/CardLogo.d328c2ce.js";import{C as Ye,a as ze}from"../chunks/ChipIcon.2afb9cb3.js";import{b as ie}from"../chunks/paths.0cfd5848.js";import{C as He}from"../chunks/Chip.d79c8c91.js";import{C as xe}from"../chunks/CardDivider.927ca8d3.js";import{S as Re}from"../chunks/SearchPage.752f286a.js";import{t as Te,i as de}from"../chunks/experience.8818fb58.js";import{i as Ge}from"../chunks/index.f092de55.js";function we(i,t,r){const e=i.slice();return e[6]=t[r],e}function ke(i,t,r){const e=i.slice();return e[9]=t[r],e}function Je(i){let t,r,e,l=i[9].label+"",o,c,f;return t=new Z({props:{icon:i[9].icon}}),{c(){L(t.$$.fragment),r=I(),e=D("span"),o=le(l),c=I(),this.h()},l(s){P(t.$$.fragment,s),r=V(s),e=C(s,"SPAN",{class:!0});var n=E(e);o=ne(n,l),n.forEach(d),c=V(s),this.h()},h(){k(e,"class","m-l-1")},m(s,n){M(t,s,n),A(s,r,n),A(s,e,n),p(e,o),A(s,c,n),f=!0},p(s,n){const m={};n&2&&(m.icon=s[9].icon),t.$set(m),(!f||n&2)&&l!==(l=s[9].label+"")&&ye(o,l)},i(s){f||(v(t.$$.fragment,s),f=!0)},o(s){w(t.$$.fragment,s),f=!1},d(s){s&&(d(r),d(e),d(c)),j(t,s)}}}function De(i){let t,r;return t=new He({props:{$$slots:{default:[Je]},$$scope:{ctx:i}}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,l){M(t,e,l),r=!0},p(e,l){const o={};l&4098&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Ce(i){let t,r;return t=new ze({props:{logo:oe(i[6].logo),name:i[6].name,href:`${ie}/skills/${i[6].slug}`}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,l){M(t,e,l),r=!0},p(e,l){const o={};l&1&&(o.logo=oe(e[6].logo)),l&1&&(o.name=e[6].name),l&1&&(o.href=`${ie}/skills/${e[6].slug}`),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Ke(i){let t,r,e,l,o,c,f,s,n,m,g,S,x,y,B,K,F,ce,N,Y,fe,me,ue,z,$e,O,W=i[0].shortDescription+"",ee,pe,H,X;r=new Fe({props:{src:oe(i[0].logo),alt:i[0].company,size:55}}),f=new Ye({props:{title:`${i[0].name}`}});let R=Q(i[1]),h=[];for(let a=0;a<R.length;a+=1)h[a]=De(ke(i,R,a));const Pe=a=>w(h[a],1,1,()=>{h[a]=null});x=new Z({props:{icon:"i-carbon-calendar",classes:"text-1.25em"}}),F=new xe({}),Y=new Z({props:{icon:"i-carbon-time",classes:"text-1.25em"}}),z=new xe({});let T=Q(i[0].skills),_=[];for(let a=0;a<T.length;a+=1)_[a]=Ce(we(i,T,a));const Me=a=>w(_[a],1,1,()=>{_[a]=null});return{c(){t=D("div"),L(r.$$.fragment),e=I(),l=D("div"),o=D("div"),c=D("h3"),L(f.$$.fragment),s=I(),n=D("div");for(let a=0;a<h.length;a+=1)h[a].c();m=I(),g=D("div"),S=D("div"),L(x.$$.fragment),y=I(),B=le(i[3]),K=I(),L(F.$$.fragment),ce=I(),N=D("div"),L(Y.$$.fragment),fe=I(),me=le(i[2]),ue=I(),L(z.$$.fragment),$e=I(),O=D("div"),ee=le(W),pe=I(),H=D("div");for(let a=0;a<_.length;a+=1)_[a].c();this.h()},l(a){t=C(a,"DIV",{class:!0});var $=E(t);P(r.$$.fragment,$),e=V($),l=C($,"DIV",{class:!0});var b=E(l);o=C(b,"DIV",{class:!0});var G=E(o);c=C(G,"H3",{class:!0});var u=E(c);P(f.$$.fragment,u),u.forEach(d),s=V(G),n=C(G,"DIV",{class:!0});var U=E(n);for(let J=0;J<h.length;J+=1)h[J].l(U);U.forEach(d),G.forEach(d),m=V(b),g=C(b,"DIV",{class:!0});var q=E(g);S=C(q,"DIV",{class:!0});var te=E(S);P(x.$$.fragment,te),y=V(te),B=ne(te,i[3]),te.forEach(d),K=V(q),P(F.$$.fragment,q),ce=V(q),N=C(q,"DIV",{class:!0});var re=E(N);P(Y.$$.fragment,re),fe=V(re),me=ne(re,i[2]),re.forEach(d),ue=V(q),P(z.$$.fragment,q),q.forEach(d),$e=V(b),O=C(b,"DIV",{class:!0});var ge=E(O);ee=ne(ge,W),ge.forEach(d),pe=V(b),H=C(b,"DIV",{class:!0});var he=E(H);for(let J=0;J<_.length;J+=1)_[J].l(he);he.forEach(d),b.forEach(d),$.forEach(d),this.h()},h(){k(c,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(n,"class","row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300"),k(o,"class","col "),k(S,"class","row items-center gap-2"),k(N,"class","row items-center gap-2"),k(g,"class","text-[var(--text)] text-[0.9em]"),k(O,"class","experience-description text-[0.9em]"),k(H,"class","flex flex-row flex-wrap mt-5"),k(l,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(a,$){A(a,t,$),M(r,t,null),p(t,e),p(t,l),p(l,o),p(o,c),M(f,c,null),p(o,s),p(o,n);for(let b=0;b<h.length;b+=1)h[b]&&h[b].m(n,null);p(l,m),p(l,g),p(g,S),M(x,S,null),p(S,y),p(S,B),p(g,K),M(F,g,null),p(g,ce),p(g,N),M(Y,N,null),p(N,fe),p(N,me),p(g,ue),M(z,g,null),p(l,$e),p(l,O),p(O,ee),p(l,pe),p(l,H);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(H,null);X=!0},p(a,$){const b={};$&1&&(b.src=oe(a[0].logo)),$&1&&(b.alt=a[0].company),r.$set(b);const G={};if($&1&&(G.title=`${a[0].name}`),f.$set(G),$&2){R=Q(a[1]);let u;for(u=0;u<R.length;u+=1){const U=ke(a,R,u);h[u]?(h[u].p(U,$),v(h[u],1)):(h[u]=De(U),h[u].c(),v(h[u],1),h[u].m(n,null))}for(se(),u=R.length;u<h.length;u+=1)Pe(u);ae()}if((!X||$&1)&&W!==(W=a[0].shortDescription+"")&&ye(ee,W),$&1){T=Q(a[0].skills);let u;for(u=0;u<T.length;u+=1){const U=we(a,T,u);_[u]?(_[u].p(U,$),v(_[u],1)):(_[u]=Ce(U),_[u].c(),v(_[u],1),_[u].m(H,null))}for(se(),u=T.length;u<_.length;u+=1)Me(u);ae()}},i(a){if(!X){v(r.$$.fragment,a),v(f.$$.fragment,a);for(let $=0;$<R.length;$+=1)v(h[$]);v(x.$$.fragment,a),v(F.$$.fragment,a),v(Y.$$.fragment,a),v(z.$$.fragment,a);for(let $=0;$<T.length;$+=1)v(_[$]);X=!0}},o(a){w(r.$$.fragment,a),w(f.$$.fragment,a),h=h.filter(Boolean);for(let $=0;$<h.length;$+=1)w(h[$]);w(x.$$.fragment,a),w(F.$$.fragment,a),w(Y.$$.fragment,a),w(z.$$.fragment,a),_=_.filter(Boolean);for(let $=0;$<_.length;$+=1)w(_[$]);X=!1},d(a){a&&d(t),j(r),j(f),_e(h,a),j(x),j(F),j(Y),j(z),_e(_,a)}}}function Oe(i){let t,r;return t=new qe({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${ie}/experience/${i[0].slug}`,color:i[0].color,$$slots:{default:[Ke]},$$scope:{ctx:i}}}),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,l){M(t,e,l),r=!0},p(e,[l]){const o={};l&1&&(o.href=`${ie}/experience/${e[0].slug}`),l&1&&(o.color=e[0].color),l&4099&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function Qe(i,t,r){let e,{experience:l}=t;const o=Ue(l.period.from,l.period.to),c=`${be(l.period.from.getMonth())} ${l.period.from.getFullYear()}`,f=l.period.to?`${be(l.period.to.getMonth())} ${l.period.to.getFullYear()}`:"Present",s=`${c} - ${f}`;return i.$$set=n=>{"experience"in n&&r(0,l=n.experience)},i.$$.update=()=>{i.$$.dirty&1&&r(1,e=[{label:l.company,icon:"i-carbon-building"},{label:l.location,icon:"i-carbon-location"},{label:l.contract,icon:"i-carbon-hourglass"}])},[l,e,o,s]}class We extends Se{constructor(t){super(),Le(this,t,Qe,Oe,Ve,{experience:0})}}function Ee(i,t,r){const e=i.slice();return e[2]=t[r],e[4]=r,e}function Xe(i){let t,r,e=[],l=new Map,o,c,f=Q(i[0]);const s=n=>n[2].slug;for(let n=0;n<f.length;n+=1){let m=Ee(i,f,n),g=s(m);l.set(g,e[n]=Ie(g,m))}return{c(){t=D("div"),r=I();for(let n=0;n<e.length;n+=1)e[n].c();o=ve(),this.h()},l(n){t=C(n,"DIV",{class:!0}),E(t).forEach(d),r=V(n);for(let m=0;m<e.length;m+=1)e[m].l(n);o=ve(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(n,m){A(n,t,m),A(n,r,m);for(let g=0;g<e.length;g+=1)e[g]&&e[g].m(n,m);A(n,o,m),c=!0},p(n,m){m&1&&(f=Q(n[0]),se(),e=Be(e,m,s,1,n,f,l,o.parentNode,Ne,Ie,o,Ee),ae())},i(n){if(!c){for(let m=0;m<f.length;m+=1)v(e[m]);c=!0}},o(n){for(let m=0;m<e.length;m+=1)w(e[m]);c=!1},d(n){n&&(d(t),d(r),d(o));for(let m=0;m<e.length;m+=1)e[m].d(n)}}}function Ze(i){let t,r,e,l,o="Could not find anything...",c;return r=new Z({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=D("div"),L(r.$$.fragment),e=I(),l=D("p"),l.textContent=o,this.h()},l(f){t=C(f,"DIV",{class:!0});var s=E(t);P(r.$$.fragment,s),e=V(s),l=C(s,"P",{class:!0,"data-svelte-h":!0}),je(l)!=="svelte-1jyyf6v"&&(l.textContent=o),s.forEach(d),this.h()},h(){k(l,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(f,s){A(f,t,s),M(r,t,null),p(t,e),p(t,l),c=!0},p:Ae,i(f){c||(v(r.$$.fragment,f),c=!0)},o(f){w(r.$$.fragment,f),c=!1},d(f){f&&d(t),j(r)}}}function Ie(i,t){let r,e,l,o,c,f,s,n,m,g,S;return c=new Z({props:{icon:"i-carbon-condition-point",classes:""}}),n=new We({props:{experience:t[2]}}),{key:i,first:null,c(){r=D("div"),e=D("div"),l=I(),o=D("div"),L(c.$$.fragment),f=I(),s=D("div"),L(n.$$.fragment),m=I(),this.h()},l(x){r=C(x,"DIV",{class:!0});var y=E(r);e=C(y,"DIV",{class:!0}),E(e).forEach(d),l=V(y),o=C(y,"DIV",{class:!0});var B=E(o);P(c.$$.fragment,B),B.forEach(d),f=V(y),s=C(y,"DIV",{class:!0});var K=E(s);P(n.$$.fragment,K),K.forEach(d),m=V(y),y.forEach(d),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(o,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(s,"class","flex-1 col items-stretch"),k(r,"class",g=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(x,y){A(x,r,y),p(r,e),p(r,l),p(r,o),M(c,o,null),p(r,f),p(r,s),M(n,s,null),p(r,m),S=!0},p(x,y){t=x;const B={};y&1&&(B.experience=t[2]),n.$set(B),(!S||y&1&&g!==(g=`flex ${t[4]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",g)},i(x){S||(v(c.$$.fragment,x),v(n.$$.fragment,x),S=!0)},o(x){w(c.$$.fragment,x),w(n.$$.fragment,x),S=!1},d(x){x&&d(r),j(c),j(n)}}}function et(i){let t,r,e,l;const o=[Ze,Xe],c=[];function f(s,n){return s[0].length===0?0:1}return r=f(i),e=c[r]=o[r](i),{c(){t=D("div"),e.c(),this.h()},l(s){t=C(s,"DIV",{class:!0});var n=E(t);e.l(n),n.forEach(d),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(s,n){A(s,t,n),c[r].m(t,null),l=!0},p(s,n){let m=r;r=f(s),r===m?c[r].p(s,n):(se(),w(c[m],1,1,()=>{c[m]=null}),ae(),e=c[r],e?e.p(s,n):(e=c[r]=o[r](s),e.c()),v(e,1),e.m(t,null))},i(s){l||(v(e),l=!0)},o(s){w(e),l=!1},d(s){s&&d(t),c[r].d()}}}function tt(i){let t,r;return t=new Re({props:{title:Te,$$slots:{default:[et]},$$scope:{ctx:i}}}),t.$on("search",i[1]),{c(){L(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,l){M(t,e,l),r=!0},p(e,[l]){const o={};l&33&&(o.$$scope={dirty:l,ctx:e}),t.$set(o)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){j(t,e)}}}function rt(i,t,r){let e=[...de];return[e,o=>{const c=o.detail.search;if(Ge(c)){r(0,e=de);return}r(0,e=de.filter(f=>f.name.toLowerCase().includes(c)||f.company.toLowerCase().includes(c)||f.description.toLowerCase().includes(c)))}]}class gt extends Se{constructor(t){super(),Le(this,t,rt,tt,Ve,{})}}export{gt as component};
