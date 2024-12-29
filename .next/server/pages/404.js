"use strict";(()=>{var e={};e.id=336,e.ids=[220,336,636],e.modules={671:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},355:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>p,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>x,getStaticProps:()=>h,reportWebVitals:()=>g,routeModule:()=>k,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>f});var i=r(3865),s=r(9455),n=r(671),o=r(6530),l=r(3200),d=r(1414),c=e([l,d]);[l,d]=c.then?(await c)():c;let u=(0,n.M)(d,"default"),h=(0,n.M)(d,"getStaticProps"),x=(0,n.M)(d,"getStaticPaths"),m=(0,n.M)(d,"getServerSideProps"),p=(0,n.M)(d,"config"),g=(0,n.M)(d,"reportWebVitals"),f=(0,n.M)(d,"unstable_getStaticProps"),b=(0,n.M)(d,"unstable_getStaticPaths"),v=(0,n.M)(d,"unstable_getStaticParams"),P=(0,n.M)(d,"unstable_getServerProps"),j=(0,n.M)(d,"unstable_getServerSideProps"),k=new i.PagesRouteModule({definition:{kind:s.A.PAGES,page:"/404",pathname:"/404",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:d});a()}catch(e){a(e)}})},2898:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{A:()=>d});var i=r(8732),s=r(3220);r(2015);var n=e([s]);s=(n.then?(await n)():n)[0];let o={hidden:{opacity:1},visible:{opacity:1,transition:{delay:.5,staggerChildren:.08}}},l={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:1}}},d=({text:e,className:t=""})=>(0,i.jsx)("div",{className:"py-2 w-full mx-auto flex flex-col items-center justify-center  text-center     overflow-hidden sm:py-0",children:(0,i.jsx)(s.motion.h1,{className:`inline-block text-dark dark:text-light
      text-8xl font-bold w-full capitalize  ${t} xl:text-6xl`,variants:o,initial:"hidden",animate:"visible",children:e.split(" ").map((e,t)=>(0,i.jsxs)(s.motion.span,{className:"inline-block",variants:l,children:[e,"\xa0"]},e+"-"+t))})});a()}catch(e){a(e)}})},6266:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{A:()=>o});var i=r(8732),s=r(3220);r(2015);var n=e([s]);s=(n.then?(await n)():n)[0];let o=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.motion.div,{className:"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary",initial:{x:"100%",width:"100%"},animate:{x:"0%",width:"0%"},exit:{x:["0%","100%"],width:["0%","100%"]},transition:{duration:.8,ease:"easeInOut"}}),(0,i.jsx)(s.motion.div,{className:"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark",initial:{x:"100%",width:"100%"},animate:{x:"0%",width:"0%"},transition:{delay:.2,duration:.8,ease:"easeInOut"}}),(0,i.jsx)(s.motion.div,{className:"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light",initial:{x:"100%",width:"100%"},animate:{x:"0%",width:"0%"},transition:{delay:.4,duration:.8,ease:"easeInOut"}})]});a()}catch(e){a(e)}})},1414:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>x});var i=r(8732),s=r(2898),n=r(5702),o=r(6266),l=r(7912),d=r.n(l),c=r(1106),u=r.n(c);r(2015);var h=e([s,o]);[s,o]=h.then?(await h)():h;let x=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d(),{children:[(0,i.jsx)("title",{children:"Awesome Portfolio Built with Nextjs | 404 Page "}),(0,i.jsx)("meta",{name:"description",content:"Explore CodeBucks's Next.js developer portfolio and    discover the latest webapp projects and software engineering articles.    Showcase your skills as a full-stack developer and software engineer."})]}),(0,i.jsx)(o.A,{}),(0,i.jsx)("main",{className:"h-[75vh] w-full dark:bg-dark ",children:(0,i.jsxs)(n.A,{className:"relative !bg-transparent !pt-16 flex flex-col items-center justify-center",children:[(0,i.jsx)(s.A,{text:"404",className:" "}),(0,i.jsx)(s.A,{text:"Page Not Found.",className:" !text-7xl "}),(0,i.jsx)(u(),{href:"/",className:"self-center !mt-4 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2   font-semibold text-light hover:border-dark hover:bg-light hover:text-dark    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light   ",children:"Go To Home"})]})})]});a()}catch(e){a(e)}})},6530:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(8732),i=r(883),s=r(8133),n=r.n(s);function o(){return(0,a.jsxs)(i.Html,{lang:"en",children:[(0,a.jsx)(i.Head,{}),(0,a.jsxs)("body",{children:[(0,a.jsx)(n(),{id:"theme-switcher",strategy:"beforeInteractive",children:`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}),(0,a.jsx)(i.Main,{}),(0,a.jsx)(i.NextScript,{})]})]})}},9455:(e,t)=>{var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{e.exports=require("next/head")},2015:e=>{e.exports=require("react")},2326:e=>{e.exports=require("react-dom")},8732:e=>{e.exports=require("react/jsx-runtime")},9021:e=>{e.exports=require("fs")},3873:e=>{e.exports=require("path")},7910:e=>{e.exports=require("stream")},4075:e=>{e.exports=require("zlib")},3220:e=>{e.exports=import("framer-motion")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[393,704,111,200],()=>r(355));module.exports=a})();