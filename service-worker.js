if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const b=e=>a(e,c),n={module:{uri:c},exports:d,require:b};s[c]=Promise.all(i.map((e=>n[e]||b(e)))).then((e=>(r(...e),d)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-section-one.html-fa6bkrvo.js",revision:"3fe15f495d926d5470cef4030a42bc16"},{url:"assets/01-section-one.html-QSATELFJ.js",revision:"047f5d26663d3ab76fc268470f137e3b"},{url:"assets/01-worldview.html-HIf1owx9.js",revision:"a16436084c454762f83e6573298d13a5"},{url:"assets/01-worldview.html-SGSrg1dJ.js",revision:"75eef46e595ab8d757b7b91879645fc2"},{url:"assets/02-character.html-jobcmg5d.js",revision:"840aa9188133b27861896324d0c36bfb"},{url:"assets/02-character.html-LHBBJCQJ.js",revision:"aa282c651b4e0b9a103821b92615e0a1"},{url:"assets/03-莱尼坎堡归家团.html-2nJiKBmX.js",revision:"45da53db76d0973479cf609cf285d195"},{url:"assets/03-莱尼坎堡归家团.html-XaqRh3px.js",revision:"79e000e7fd6f87bd018971b1b8fb1e9f"},{url:"assets/404.html-8oCPJxwk.js",revision:"e9b8c08fb63e5d5e39de99ab186156f0"},{url:"assets/404.html-M5lEIr4W.js",revision:"5adc2abf91d66c78a6ffbd1c536becd4"},{url:"assets/app-O82nc84Y.js",revision:"7c9918ec9a75f25798e1e71bd4ea737e"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-8VQEhGA4.js",revision:"bc2bef31a13755ad5ed68eb5ce8f0aee"},{url:"assets/index.html-B4aZLG7q.js",revision:"bc2bef31a13755ad5ed68eb5ce8f0aee"},{url:"assets/index.html-cYwfYpN8.js",revision:"bae20f2a0e49751dee9f36302898c029"},{url:"assets/index.html-dhR7pvuB.js",revision:"81fc58d77d3dcae5b0a811d2a2688c41"},{url:"assets/index.html-H5Y7F3Z-.js",revision:"6a654a598c847a228858bc6c14ba7b8e"},{url:"assets/index.html-qII2ew3f.js",revision:"b0487b2f11bd7ed20192fcb1ab03b932"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/style-t4gVOzK4.css",revision:"70112b08eaddedc1350de437f8122406"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"0837b9879612d9bd841986b581479d6e"},{url:"design/01-worldview.html",revision:"c07280e14f90f4f9940fca5f807c7368"},{url:"design/02-character.html",revision:"3573f5e1b4fc2104026946cdc77b34a5"},{url:"design/03-莱尼坎堡归家团.html",revision:"dedfd582d0cf81ddbaaec3ede68a5acf"},{url:"design/index.html",revision:"f5c6fe30eb03ae274e14a21d5be3b735"},{url:"index.html",revision:"077df1110e3aee47f0adc60afbf232e1"},{url:"story/01-section-one.html",revision:"00e5e1fe291bb9d8eedc067e558e18dd"},{url:"story/index.html",revision:"257aca554f623bfba2f056b22c8ffb45"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
