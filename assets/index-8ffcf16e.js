(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();fetch("http://localhost:3000/locales/en.json").then(o=>o.json()).then(o=>{const t=localStorage.getItem("language")||"en";i18next.init({lng:"en",debug:!0,resources:{en:{translation:o}}},function(r,s){i(),t!=="en"&&fetch(`${t}.json`).then(e=>e.json()).then(e=>{i18next.addResourceBundle(t,"translation",e),i18next.changeLanguage(t,i)})})});function a(o){fetch(`http://localhost:3000/locales/${o}.json`).then(t=>t.json()).then(t=>{i18next.addResourceBundle(o,"translation",t),i18next.changeLanguage(o,function(r,s){localStorage.setItem("language",o),i()})})}function i(){document.querySelectorAll("[id]").forEach(t=>{const r=t.id;t.innerHTML=i18next.t(r)})}window.changeLanguage=a;
//# sourceMappingURL=index-8ffcf16e.js.map
