if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const b=e=>i(e,r),n={module:{uri:r},exports:d,require:b};s[r]=Promise.all(a.map((e=>n[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-section-one.html-I3Rxk_8b.js",revision:"c17f3dd4e8464dd36c488adbadf0e57c"},{url:"assets/01-section-one.html-sgajCKMe.js",revision:"5d98ee7b969c4c3681aec8567ed8b54f"},{url:"assets/01-worldview.html-HIf1owx9.js",revision:"a16436084c454762f83e6573298d13a5"},{url:"assets/01-worldview.html-N_bpKdUS.js",revision:"8aa3e1ed5b726661d4330be979cb761c"},{url:"assets/02-character.html-LHBBJCQJ.js",revision:"aa282c651b4e0b9a103821b92615e0a1"},{url:"assets/02-character.html-urzEPU0l.js",revision:"81e41114b77b41c63d82f6d5b12684c3"},{url:"assets/03-莱尼坎堡归家团.html-hFVU-jei.js",revision:"52b2c6df16fa5d23535e1498c978b438"},{url:"assets/03-莱尼坎堡归家团.html-XaqRh3px.js",revision:"79e000e7fd6f87bd018971b1b8fb1e9f"},{url:"assets/404.html-8oCPJxwk.js",revision:"e9b8c08fb63e5d5e39de99ab186156f0"},{url:"assets/404.html-CxNdgksr.js",revision:"aab733ddfa9aa8602553cca0fa5f7014"},{url:"assets/app-jeRkGWZN.js",revision:"028bc5aa6df73d6bfbb5541fb146c1d7"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-7MZiAW-V.js",revision:"e0de3dc29b5f3848f13cac221cf3863e"},{url:"assets/index.html-dhR7pvuB.js",revision:"81fc58d77d3dcae5b0a811d2a2688c41"},{url:"assets/index.html-H5Y7F3Z-.js",revision:"6a654a598c847a228858bc6c14ba7b8e"},{url:"assets/index.html-JJPhLQi-.js",revision:"f9010b27d14a5d445c21561418ef777f"},{url:"assets/index.html-qII2ew3f.js",revision:"b0487b2f11bd7ed20192fcb1ab03b932"},{url:"assets/index.html-VPlXcX4b.js",revision:"f9010b27d14a5d445c21561418ef777f"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/style-t4gVOzK4.css",revision:"70112b08eaddedc1350de437f8122406"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"9cdc77cd3c6fc652ed234b23fc00782a"},{url:"design/01-worldview.html",revision:"3f1dbc46d43109446c3771d0dc9bc8e2"},{url:"design/02-character.html",revision:"00554582f6f7a5b394ccb4df652212a3"},{url:"design/03-莱尼坎堡归家团.html",revision:"41c46d2cbccfd8576a7aa039cf7b7ab7"},{url:"design/index.html",revision:"780a8872f27f95826ffc141592bb11cf"},{url:"index.html",revision:"5d3a30346d92e82c35227d2b94f0e44b"},{url:"story/01-section-one.html",revision:"b620bad4bf11feb5c2ec1e8304c0c165"},{url:"story/index.html",revision:"6fd2549dcc91ef75601db6163bb8d502"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
