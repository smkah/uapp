if(!self.define){let e,n={};const c=(c,i)=>(c=new URL(c+".js",i).href,n[c]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=n,document.head.appendChild(e)}else e=c,importScripts(c),n()})).then((()=>{let e=n[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let o={};const r=e=>c(e,s),d={module:{uri:s},exports:o,require:r};n[s]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(a(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Android/Icon-144.png",revision:"d450aaf45b88ac28879300a6194ea9f2"},{url:"/Android/Icon-192.png",revision:"7030507237821c4f982c51d6d364efb0"},{url:"/Android/Icon-36.png",revision:"7b8ccd497c924752b52bb5a3a1784352"},{url:"/Android/Icon-48.png",revision:"61219ef7142144afe886dd2455f1529b"},{url:"/Android/Icon-512.png",revision:"290f61968b4dee6dee37312c3e770625"},{url:"/Android/Icon-72.png",revision:"2969cae54670feb4a27d372ce5e44225"},{url:"/Android/Icon-96.png",revision:"e115e0c34d8cb714b45dbb87e56a06af"},{url:"/Watch/Icon-172.png",revision:"66783aee8dadfc78606e9ca20b13e6a8"},{url:"/Watch/Icon-196.png",revision:"7a04c755471d7fc732e27f43c6f420b1"},{url:"/Watch/Icon-48.png",revision:"61219ef7142144afe886dd2455f1529b"},{url:"/Watch/Icon-55.png",revision:"38213d509d64b1651a4c49149e59dce5"},{url:"/Watch/Icon-80.png",revision:"86c0a8b51c3074c1493914d00a275356"},{url:"/Watch/Icon-88.png",revision:"8700f1738720ffffa082fdb6bc8817ca"},{url:"/_next/static/chunks/framework-114634acb84f8baa.js",revision:"114634acb84f8baa"},{url:"/_next/static/chunks/main-28f68c2652c32d55.js",revision:"28f68c2652c32d55"},{url:"/_next/static/chunks/pages/_app-e921e3cbdf921af4.js",revision:"e921e3cbdf921af4"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-72a6e0f703def6b5.js",revision:"72a6e0f703def6b5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/33de5d412c08127b.css",revision:"33de5d412c08127b"},{url:"/_next/static/uz7LRd12scuILEQFPZ0TN/_buildManifest.js",revision:"793a1063751434ef06db6909d7df9c21"},{url:"/_next/static/uz7LRd12scuILEQFPZ0TN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"1dd8fde3a8ddcd6f73f6ce89dcbc5dad"},{url:"/iOS/Icon-100.png",revision:"589dc4652ce80ccfd7e3ebc6a4bbef07"},{url:"/iOS/Icon-1024.png",revision:"4e3a33eddf57de5e262c74d6bae738d8"},{url:"/iOS/Icon-114.png",revision:"6469e08ba66a57932cfe5ab38d5abc34"},{url:"/iOS/Icon-120.png",revision:"56e42516e3f55cd57cfb1db1c9a7458a"},{url:"/iOS/Icon-128.png",revision:"afcb312024daac6cca8234f3d5fb8b7f"},{url:"/iOS/Icon-144.png",revision:"d450aaf45b88ac28879300a6194ea9f2"},{url:"/iOS/Icon-152.png",revision:"632dbab31c819552fe2bf8951345dfc6"},{url:"/iOS/Icon-16.png",revision:"3452fb98bc011c1ecc1c1f2e67ab1e3d"},{url:"/iOS/Icon-167.png",revision:"4f39ea260e392633021ef087ce7dae6a"},{url:"/iOS/Icon-172.png",revision:"66783aee8dadfc78606e9ca20b13e6a8"},{url:"/iOS/Icon-180.png",revision:"bd6b558bfaa004f43c582066615b5eed"},{url:"/iOS/Icon-196.png",revision:"7a04c755471d7fc732e27f43c6f420b1"},{url:"/iOS/Icon-20.png",revision:"a86d4adf18f61eee5273d33144c1c148"},{url:"/iOS/Icon-256.png",revision:"7fabd6a71bafab6c5e330e20208d3200"},{url:"/iOS/Icon-29.png",revision:"61f67ba4fd7928eaea61ff523b9121f0"},{url:"/iOS/Icon-32.png",revision:"dfa62b78a1b1a5f55ac327e80904a90c"},{url:"/iOS/Icon-40.png",revision:"0105939b4239e1e005914fd89fed300d"},{url:"/iOS/Icon-48.png",revision:"61219ef7142144afe886dd2455f1529b"},{url:"/iOS/Icon-50.png",revision:"c5d8b1dd0fc9aad36d506b4b707d940f"},{url:"/iOS/Icon-512.png",revision:"290f61968b4dee6dee37312c3e770625"},{url:"/iOS/Icon-55.png",revision:"38213d509d64b1651a4c49149e59dce5"},{url:"/iOS/Icon-57.png",revision:"05f1fb4342259691eabbbdf8a4edd2c7"},{url:"/iOS/Icon-58.png",revision:"1a50da96717e20a12497d5cc01450f9d"},{url:"/iOS/Icon-60.png",revision:"0d413cb662182a21335646ffdde37dc1"},{url:"/iOS/Icon-64.png",revision:"c18ec157a00246210d9fa3d08b93682c"},{url:"/iOS/Icon-72.png",revision:"2969cae54670feb4a27d372ce5e44225"},{url:"/iOS/Icon-76.png",revision:"4d5bbd30692c5db5b8c1f14e4222d1cf"},{url:"/iOS/Icon-80.png",revision:"86c0a8b51c3074c1493914d00a275356"},{url:"/iOS/Icon-87.png",revision:"479d54f889daf27535cb9052675eda34"},{url:"/iOS/Icon-88.png",revision:"8700f1738720ffffa082fdb6bc8817ca"},{url:"/manifest.json",revision:"18835340e4ab0f4f6d9cdf6da7857892"},{url:"/uapp.apk",revision:"b6290d1cabd73d245183b57348c24036"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:c,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
