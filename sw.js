if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const l=e=>n(e,c),d={module:{uri:c},exports:o,require:l};i[c]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"82149d47b318debe7b8b0eaff368915d"},{url:"assets/happy-model-blowing-kiss-DfUL8gTB.png",revision:null},{url:"assets/index-Bf_-qjPK.js",revision:null},{url:"assets/index-D6KgK0c0.css",revision:null},{url:"assets/logo-DUoku2j4.png",revision:null},{url:"assets/slick-BlzDm7g2.svg",revision:null},{url:"dd-logo.png",revision:"b4282a13a91a45bfc0f64161f39e6a25"},{url:"favicon.ico",revision:"79284880ac2b2e19cc7e1c156533bc56"},{url:"index.html",revision:"98f609adb50d1bf17a09c08925ea8c4e"},{url:"maskable-icon-512x512.png",revision:"cefad059724f4c1db27f53254c0882ce"},{url:"pwa-192x192.png",revision:"d311e83df6b5842c57bd0dcdb623f877"},{url:"pwa-512x512.png",revision:"ce8813ee45407e4a09e823b82e4580c0"},{url:"pwa-64x64.png",revision:"dd6205ce14ee8328dc6402e1b228da7b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"maskable-icon-512x512.png",revision:"cefad059724f4c1db27f53254c0882ce"},{url:"pwa-192x192.png",revision:"d311e83df6b5842c57bd0dcdb623f877"},{url:"pwa-512x512.png",revision:"ce8813ee45407e4a09e823b82e4580c0"},{url:"pwa-64x64.png",revision:"dd6205ce14ee8328dc6402e1b228da7b"},{url:"manifest.webmanifest",revision:"26c7f566c2ebc5c9f99ba09887a9351b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
