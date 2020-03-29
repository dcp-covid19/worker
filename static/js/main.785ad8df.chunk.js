(this.webpackJsonpworker=this.webpackJsonpworker||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),i=(a(13),a(1)),s=a(6),l=function(e){Object(s.a)(e);var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){var e=function(){return c(!0)},t=function(){return c(!1)};return window.dcp.compute.supervisor.on("start",e),window.dcp.compute.supervisor.on("stop",t),function(){window.dcp.compute.supervisor.off("start",e),window.dcp.compute.supervisor.off("stop",t)}}),[c]);var l=Object(n.useCallback)((function(){var e=!r;c(e),e?(console.log("Starting worker..."),window.dcp.compute.mine()):window.dcp.compute.stopMining()}),[r,c]);return o.a.createElement("button",{className:"btn btn-".concat(r?"outline-":"","success"),onClick:l,style:{width:"100px"}},r?"Pause":"Start")},m=a(7),u=function(e){var t=e.worker,a=Object(n.useState)(t.isWorking),r=Object(i.a)(a,2),c=r[0],s=r[1],l=Object(n.useState)(t.progress||0),m=Object(i.a)(l,2),u=m[0],p=m[1],d=Object(n.useState)(t.public||{}),f=Object(i.a)(d,2),v=(f[0],f[1]);return Object(n.useEffect)((function(){var e=function(e){var t=e.job;s(!0),p(0),v(t)},a=function(){s(!1)},n=function(e){var t=e.progress;p(t)};return t.on("sliceStart",e),t.on("sliceEnd",a),t.on("sliceProgress",n),function(){t.off("sliceStart",e),t.off("sliceEnd",a),t.off("sliceProgress",n)}}),[t]),c&&o.a.createElement("div",{className:"w-100 position-relative",style:{height:"4px",backgroundColor:"#E5E7E7"}},o.a.createElement("div",{className:"position-absolute",style:{top:0,bottom:0,left:0,width:"".concat(u,"%"),transition:"width 0.1s ease",backgroundColor:"#146300"}}))},p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),l=s[0],p=s[1];return Object(n.useEffect)((function(){var e=function(e){r((function(t){return[].concat(Object(m.a)(t),[e])})),e.on("workerStop",(function(){r((function(t){return t.filter((function(t){return t!==e}))}))}))},t=function(){p(!0)},a=function(){p(!1)};return window.dcp.compute.supervisor.on("sandboxStart",e),window.dcp.compute.supervisor.on("start",t),window.dcp.compute.supervisor.on("stop",a),function(){window.dcp.compute.supervisor.off("sandboxStart",e),window.dcp.compute.supervisor.off("start",t),window.dcp.compute.supervisor.off("stop",a)}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"border d-flex align-items-center justify-content-between p-3 mt-3"},o.a.createElement("span",null,o.a.createElement("span",{className:"font-weight-bold mr-4"},"Status"),o.a.createElement("span",null,l?"Computing":"Ready to Compute")),o.a.createElement("span",{className:"text-secondary"},"Task: COVID-19 Mapping")),a.map((function(e){return o.a.createElement(u,{worker:e,key:e.id})})))},d=function(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 525.31 595.71",height:55},o.a.createElement("polygon",{style:{fill:"#00a473"},points:"525.31 0 477.51 535.04 262.66 595.71 47.8 535.04 0 0 525.31 0"}),o.a.createElement("polygon",{style:{fill:"#6fc495"},points:"263.22 550.28 437.81 500.9 478.2 41.79 263.22 41.79 263.22 550.28"}),o.a.createElement("polygon",{style:{fill:"#ffde17"},points:"263.22 482.62 263.22 482.75 263.44 482.68 263.22 482.62"}),o.a.createElement("polygon",{style:{fill:"#ffde17"},points:"263.22 412.67 263.22 412.8 263.44 412.73 263.22 412.67"}),o.a.createElement("polygon",{style:{fill:"#fff"},points:"433.4 110.39 421.2 247.9 353.66 247.9 359.89 177.67 262.87 177.67 262.87 110.39 433.4 110.39"}),o.a.createElement("polygon",{style:{fill:"#fff"},points:"341.48 341.15 409.02 341.15 399.92 443.65 262.96 482.62 262.96 412.8 262.96 412.67 337 391.61 341.48 341.15"}),o.a.createElement("polygon",{style:{fill:"#e5e7e7"},points:"262.87 110.39 262.87 177.67 169.27 177.67 188.48 391.61 262.74 412.73 262.96 412.8 262.96 482.62 262.74 482.68 125.56 443.65 95.76 110.39 262.87 110.39"}))},f=function(e){var t=e.className;return o.a.createElement("div",{className:"d-flex align-items-center ".concat(t)},o.a.createElement(d,null),o.a.createElement("span",{className:"ml-2",style:{fontSize:"1rem",lineHeight:"1.2rem"}},"DISTRIBUTED",o.a.createElement("br",null),"COMPUTE LABS"))},v=[{label:"Home",href:"#"},{label:"Researcher",href:"https://covid19.apps.distributed.computer"},{label:"Worker",href:"https://dcp.work"}],E=function(e){var t=e.activeLink,a=e.hideDivider,n=void 0!==a&&a;return o.a.createElement("div",null,o.a.createElement("div",{className:"container-fluid d-flex align-items-center justify-content-between p-4"},o.a.createElement(f,{className:"ml-4"}),o.a.createElement("span",{className:"mr-2"},v.map((function(e){var a=e.label,n=e.href;return o.a.createElement("a",{key:a,href:n,className:"mr-4 header-link ".concat(t===a?"active":"")},a)})))),!n&&o.a.createElement("div",{className:"colored-divider"}))};var w=function(){return o.a.createElement(n.Fragment,null,o.a.createElement(E,{activeLink:"Home"}),o.a.createElement("div",{className:"colored-divider"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-4"},o.a.createElement("div",{className:"col-12 col-md-5"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement("img",{src:"https://dcp-covid19.github.io/logo.svg",alt:"dcp-covid19 logo"}),o.a.createElement("h4",{className:"mb-1 ml-2"},"COVID-19 Mapping")),o.a.createElement("small",null,"Join the fight against ",o.a.createElement("span",{className:"text-green"},"COVID-19")),o.a.createElement("p",null,"Project Objective:"),o.a.createElement("p",null,"To better inform remediation strategies and public health interventions against COVID-19 for municipalities, provincial/federal authorities by mapping transmission patterns of diseases based on reports from epidemiologists and transportation data."),o.a.createElement("p",null,"The resulting micro-picture will inform community-specific public health interventions to maximize recovery and minimize economic impacts. This is a platform open to all epidemiologists."),o.a.createElement("p",{className:"font-weight-bold pt-4"},"How DCP speeds up COVID-19 mapping with your computing power"),o.a.createElement("p",null,"Space-time patterns of spread span multiple scales due to complex disease ecological processes and biases from surveillance data generated from multi-jurisdictions with different sampling protocols requires a tremendous amount of computing power."),o.a.createElement("p",null,"The Distributed Compute Protocol (DCP) distributes computational workload across any device, anywhere, in order to speed up the overall computation. Many hands (computers) make light work!"),o.a.createElement("a",{href:"//distributed.computer",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-success mt-4"},"Learn More")))),o.a.createElement("div",{className:"col-12 col-md-7 p-3"},o.a.createElement("h3",{className:"mb-4"},"Compute for ",o.a.createElement("span",{className:"text-green"},"COVID-19")),o.a.createElement(l,null),o.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.dcp.compute.paymentAddress="0xA225B64d0D2253C0BD57B3cEa8b04a1A8d65548a",c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.785ad8df.chunk.js.map