import{a as f,S as m,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",g="46868133-33c4a6dc591014855bc3379a8";function p(s){return f.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(s){const o=s.map(t=>`<li class="gallery-list-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <table>
        <tr>
          <th>Likes</th>
          <th>Views</th>
          <th>Comments</th>
          <th>Downloads</th>
        </tr>
        <tr>
          <td>${t.likes}</td>
          <td>${t.views}</td>
          <td>${t.comments}</td>
          <td>${t.downloads}</td>
        </tr>
      </table>
    </li>`).join("");u.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){u.innerHTML=""}function w(){d.classList.add("is-visible")}function c(){d.classList.remove("is-visible")}const v=document.querySelector(".form"),l={backgroundColor:"#ef4040",maxWidth:"432px",position:"topRight",icon:"fa-regular fa-times-circle",iconColor:"#fafafb",messageColor:"#fafafb",close:!1,closeOnClick:!0};v.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();L(),w(),p(o).then(t=>{if(c(),t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",...l});return}b(t.hits)}).catch(t=>{c(),n.error({message:`Something went wrong: ${t.message}`,...l})})});
//# sourceMappingURL=index.js.map
