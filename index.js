import{i as c}from"./assets/vendor-I1I71QQ2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const a=new URLSearchParams({key:"46868133-33c4a6dc591014855bc3379a8",image_type:"photo",orientation:"horizontal",safesearch:!0});function u(o){return fetch(`https://pixabay.com/api/?q=${o}&${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{console.log(e),e.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{console.log(e)})}const l=document.querySelector(".form");document.querySelector("#search");document.querySelector("#searchBtn");l.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.search.value.trim();e.split(" ").join("+"),u(e)});
//# sourceMappingURL=index.js.map
