const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n;function o(){let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(()=>{n=setInterval(o,1e3)})),e.addEventListener("click",(function(){clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.5771b396.js.map
