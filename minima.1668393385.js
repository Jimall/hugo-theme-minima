(()=>{var f="giscus",r="🌝",l="🌚",c="light",d="dark",s,n,i;function a(e){s||(s=document.getElementById(e)),s.innerHTML=localStorage.theme===c?r:l,s.addEventListener("click",_)}function _(){let e=localStorage.getItem("theme"),t=e===c?d:c;switch(g(e,t),f){case"utterances":p(`github-${t}`);break;case"giscus":b(t);break;default:}}function g(e,t){let{classList:o}=document.documentElement,h=t===c?r:l;o.remove(e),o.add(t),localStorage.setItem("theme",t),s.innerHTML=h}function p(e){n=n||document.querySelector("iframe.utterances-frame"),!!n&&n.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function b(e){i=i||document.querySelector("iframe.giscus-frame"),!!i&&i.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}function m(e){document.querySelectorAll(e).forEach(t=>{/<li><input .+>.+<\/li>/.test(t.innerHTML)&&t.classList.add("ul-checkbox")})}function u(){"true"==="false"&&(document.documentElement.style="user-select:none")}a("theme-switch");u();m(".md ul");})();