if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const n=e=>a(e,c),o={module:{uri:c},exports:d,require:n};s[c]=Promise.all(i.map((e=>o[e]||n(e)))).then((e=>(r(...e),d)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-section-one.html-1gSJ6lax.js",revision:"6043f1d901b0f01962d416369822e811"},{url:"assets/01-section-one.html-dsvoNno1.js",revision:"d4ade4535e32a57f0f17821822f46924"},{url:"assets/01-worldview.html-HIf1owx9.js",revision:"a16436084c454762f83e6573298d13a5"},{url:"assets/01-worldview.html-WVY57cZs.js",revision:"1d3bda7599a6cd5424d856617ad69dd4"},{url:"assets/02-character.html-5zY4a8eM.js",revision:"0814d80cf1b5a9d7ebd003d6285ff7ce"},{url:"assets/02-character.html-LHBBJCQJ.js",revision:"aa282c651b4e0b9a103821b92615e0a1"},{url:"assets/03-莱尼坎堡归家团.html-QvlbI3te.js",revision:"2cc9365e44be00665437c08f06af2a4c"},{url:"assets/03-莱尼坎堡归家团.html-XaqRh3px.js",revision:"79e000e7fd6f87bd018971b1b8fb1e9f"},{url:"assets/404.html-8oCPJxwk.js",revision:"e9b8c08fb63e5d5e39de99ab186156f0"},{url:"assets/404.html-RpQ8S0Bh.js",revision:"5857170f990e6955cfb8477acf7aa118"},{url:"assets/app-AT1M7-i-.js",revision:"d828b05a9bba7831d0fb0efbb6aef9c6"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-CmGaGprm.js",revision:"387ff48e8cb31bf0016bf706e087f003"},{url:"assets/index.html-dhR7pvuB.js",revision:"81fc58d77d3dcae5b0a811d2a2688c41"},{url:"assets/index.html-H5Y7F3Z-.js",revision:"6a654a598c847a228858bc6c14ba7b8e"},{url:"assets/index.html-NOlkZ-LZ.js",revision:"387ff48e8cb31bf0016bf706e087f003"},{url:"assets/index.html-O1YFjzxO.js",revision:"1061609c6b5e8d0ef3aa8e8c211d0318"},{url:"assets/index.html-qII2ew3f.js",revision:"b0487b2f11bd7ed20192fcb1ab03b932"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/style-t4gVOzK4.css",revision:"70112b08eaddedc1350de437f8122406"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"b43d5ff8b751c5f1ec146eb931d3be3e"},{url:"design/01-worldview.html",revision:"b246c292ac53dd15cf5356a8f281ff07"},{url:"design/02-character.html",revision:"deed1aceada7158d2edb5fc9e4b9fd72"},{url:"design/03-莱尼坎堡归家团.html",revision:"293ec0f83ed2a72d95ac2a194789cd02"},{url:"design/index.html",revision:"142a7f4e777eb2f2d42903cba61a0599"},{url:"index.html",revision:"a0ec2343bac3dd442e201a09f331eaa5"},{url:"story/01-section-one.html",revision:"3a1731612ecc9ded74dd8cf30380f51a"},{url:"story/index.html",revision:"1110c4343530e02b977620ea1bff868c"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
