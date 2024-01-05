const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function n(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}t.addEventListener("click",n),e.addEventListener("click",(function(){clearInterval(o)}));const o=setInterval(n,1e3);
//# sourceMappingURL=01-color-switcher.714e2084.js.map
