if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const n=e=>a(e,c),o={module:{uri:c},exports:d,require:n};s[c]=Promise.all(i.map((e=>o[e]||n(e)))).then((e=>(r(...e),d)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01-section-one.html-jX5sxj39.js",revision:"980a36c6426856590fb0cd5cd8c560be"},{url:"assets/01-section-one.html-t8pzdoqo.js",revision:"f35235817f4720c224d8f94358048989"},{url:"assets/01-worldview.html-HJeBV08E.js",revision:"db4ad88d682996f7aa3786b5f79e2ca5"},{url:"assets/01-worldview.html-mTnprghO.js",revision:"773921b31738419cd235c0aadf25c19f"},{url:"assets/02-character.html--hmmuqq9.js",revision:"57b6b58a49fed23988760a12a83c7eaf"},{url:"assets/02-character.html-3LFam_It.js",revision:"7df85ea7baeddcb5e81cf770d11f28a6"},{url:"assets/03-莱尼坎堡归家团.html-KHhsPW9u.js",revision:"424144421ccc02ae4a4f5b9872171ad0"},{url:"assets/03-莱尼坎堡归家团.html-mUzRVZqQ.js",revision:"ae9923b8f374342cd9775b20c7ff273c"},{url:"assets/404.html-8oCPJxwk.js",revision:"e9b8c08fb63e5d5e39de99ab186156f0"},{url:"assets/404.html-Y_4AKeNW.js",revision:"24333736ae8a2be0fc4876074aef7ca3"},{url:"assets/app-Rnb0KEM5.js",revision:"1c59a9ec1b2c0e0c45cd6519eea97be3"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-BUoB5D2K.js",revision:"d0ae0e968e9291560eb172dd460b27d1"},{url:"assets/index.html-cRYMpKb2.js",revision:"d0ae0e968e9291560eb172dd460b27d1"},{url:"assets/index.html-dhR7pvuB.js",revision:"81fc58d77d3dcae5b0a811d2a2688c41"},{url:"assets/index.html-H5Y7F3Z-.js",revision:"6a654a598c847a228858bc6c14ba7b8e"},{url:"assets/index.html-mgaRgx3B.js",revision:"5f10f7a66ba0c392c0dee71f1846a481"},{url:"assets/index.html-qII2ew3f.js",revision:"b0487b2f11bd7ed20192fcb1ab03b932"},{url:"assets/photoswipe.esm-i2ohwMnJ.js",revision:"e9ff503527474b1afe53a1ee900448a3"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/style-t4gVOzK4.css",revision:"70112b08eaddedc1350de437f8122406"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"2aeacf1fa0044b05d1fd85da99cd94f7"},{url:"design/01-worldview.html",revision:"73bf08c47f3e63e194850511367472a8"},{url:"design/02-character.html",revision:"42f132b78e278d06241c01c879158633"},{url:"design/03-莱尼坎堡归家团.html",revision:"2a4cf96eba713ac4215fdf3603c82e2e"},{url:"design/index.html",revision:"1205f3b431bc12ce3da48d4ebec72fbf"},{url:"index.html",revision:"fb9e6203f33f24119b7dc57e3b4ca014"},{url:"story/01-section-one.html",revision:"b33c3edf748f7b1ddfd24db3db9a9f9f"},{url:"story/index.html",revision:"942059c931de9dde3a919fa02a69cf0f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
