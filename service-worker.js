if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const b=e=>i(e,r),n={module:{uri:r},exports:d,require:b};s[r]=Promise.all(c.map((e=>n[e]||b(e)))).then((e=>(a(...e),d)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-section-one.html-t8pzdoqo.js",revision:"f35235817f4720c224d8f94358048989"},{url:"assets/01-section-one.html-VcbLFJjA.js",revision:"43eeb3cc6579c46f46dd56b129f9f8a9"},{url:"assets/01-worldview.html-V9NriUdp.js",revision:"21d84e30c8ccbb045a5b6c8a38717f28"},{url:"assets/01-worldview.html-wcCWfemS.js",revision:"8202173fc6a81246992a0a97714ab810"},{url:"assets/02-character.html-TWzItck1.js",revision:"5cca00baf12be3a0862adfe77915a967"},{url:"assets/02-character.html-XcvzP1TR.js",revision:"4d4ff192cec4df7245a57916f86cb589"},{url:"assets/03-莱尼坎堡归家团.html-1Jnpg2ll.js",revision:"da20dc707f6c167359e312215b9d4c36"},{url:"assets/03-莱尼坎堡归家团.html-mUzRVZqQ.js",revision:"ae9923b8f374342cd9775b20c7ff273c"},{url:"assets/404.html-8oCPJxwk.js",revision:"e9b8c08fb63e5d5e39de99ab186156f0"},{url:"assets/404.html-cDv6_kwt.js",revision:"edfae225abc8a14ae5893e7740619121"},{url:"assets/app-qTCTZ-_8.js",revision:"b938d5d54b5e9d8cb22145e02a14c3d3"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-dhR7pvuB.js",revision:"81fc58d77d3dcae5b0a811d2a2688c41"},{url:"assets/index.html-H5Y7F3Z-.js",revision:"6a654a598c847a228858bc6c14ba7b8e"},{url:"assets/index.html-JJMr1eRh.js",revision:"4fc241bf6642bf8485d8c13e4f94ed4f"},{url:"assets/index.html-KHdXfbJ8.js",revision:"ed21dfeff59dcb7b546955cc7c80c1c6"},{url:"assets/index.html-qII2ew3f.js",revision:"b0487b2f11bd7ed20192fcb1ab03b932"},{url:"assets/index.html-wrEe-c8z.js",revision:"4fc241bf6642bf8485d8c13e4f94ed4f"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/style-t4gVOzK4.css",revision:"70112b08eaddedc1350de437f8122406"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"664ca7424bdf34a5c3e3030f98820470"},{url:"design/01-worldview.html",revision:"37a10daedc73bb1fdd76cfcc7e6c2b0e"},{url:"design/02-character.html",revision:"c4ce6933753d50660b796324267db8e8"},{url:"design/03-莱尼坎堡归家团.html",revision:"edca5f196f00b8bd5d66fcba055a4855"},{url:"design/index.html",revision:"6beb929853012321f139386bebbb6a44"},{url:"index.html",revision:"1cd19b5dc58bf7ccfbebfcc5223d32a0"},{url:"story/01-section-one.html",revision:"cf8665305816407ac070cb8650c79cb0"},{url:"story/index.html",revision:"73a8212c16a4d95b421dd67d6c2883b9"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
