if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const b=e=>i(e,d),f={module:{uri:d},exports:c,require:b};s[d]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(r(...e),c)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-section-one.html-s5kG_E-6.js",revision:"e4649412dbe5ae30df4c42962ffcd218"},{url:"assets/01-section-one.html-t8pzdoqo.js",revision:"f35235817f4720c224d8f94358048989"},{url:"assets/01-worldview.html-GmISe0KD.js",revision:"d2e29f99b361b93c4668479412a8ca2c"},{url:"assets/01-worldview.html-HIf1owx9.js",revision:"a16436084c454762f83e6573298d13a5"},{url:"assets/02-character.html-l6yWmR6O.js",revision:"ecf28a8070d4bdfa52afc2dcb986d5e1"},{url:"assets/02-character.html-XcvzP1TR.js",revision:"4d4ff192cec4df7245a57916f86cb589"},{url:"assets/03-莱尼坎堡归家团.html-GjIty_Wu.js",revision:"e54ba45df5f66f37c484da4ea94886f9"},{url:"assets/03-莱尼坎堡归家团.html-XaqRh3px.js",revision:"79e000e7fd6f87bd018971b1b8fb1e9f"},{url:"assets/404.html-8oCPJxwk.js",revision:"e9b8c08fb63e5d5e39de99ab186156f0"},{url:"assets/404.html-D5rSGnDF.js",revision:"bbdabf712a522a0109bdf99dacbf88e7"},{url:"assets/app-lQMmGCYu.js",revision:"9ff5019566a3f0d069525acfb819d34d"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-bJai8Jot.js",revision:"6534a041c80b2e55b64dd5534e455cd6"},{url:"assets/index.html-dhR7pvuB.js",revision:"81fc58d77d3dcae5b0a811d2a2688c41"},{url:"assets/index.html-e5eIrH_P.js",revision:"6534a041c80b2e55b64dd5534e455cd6"},{url:"assets/index.html-H5Y7F3Z-.js",revision:"6a654a598c847a228858bc6c14ba7b8e"},{url:"assets/index.html-qII2ew3f.js",revision:"b0487b2f11bd7ed20192fcb1ab03b932"},{url:"assets/index.html-y8qQfgUA.js",revision:"a9e8bdbccdf3f7d6505ebdbd3f5b7ca3"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/style-t4gVOzK4.css",revision:"70112b08eaddedc1350de437f8122406"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"8aea042b8302fb38fd36b0335ecb115b"},{url:"design/01-worldview.html",revision:"dbd2045b3b5e38010900fcb33bac79cb"},{url:"design/02-character.html",revision:"725417b7ff8bbcba628641cbdf423dde"},{url:"design/03-莱尼坎堡归家团.html",revision:"ca8df06e6097190f4c387fddaa1f5750"},{url:"design/index.html",revision:"7bb11158f5ee13ba686defedb3faeccc"},{url:"index.html",revision:"fa6c70258721d4f4eda17ee684164a02"},{url:"story/01-section-one.html",revision:"4f9442da671fa261050667b7b5fc3214"},{url:"story/index.html",revision:"b76d43f7608d236bd543a4c4250d1ba4"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
