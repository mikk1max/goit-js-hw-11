import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u=void 0,f=new URLSearchParams({key:`${u}`,image_type:"photo",orientation:"horizontal",safesearch:!0});function d(s){return fetch(`https://pixabay.com/api/?q=${s}&${f}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const m=document.querySelector(".gallery"),h=s=>{const r=s.hits.map(t=>`<li class="gallery-list-item">
      <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" /></a>
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
  </li>`).join("");m.innerHTML=r},p=document.querySelector(".form"),g=document.querySelector(".gallery");let i=new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const y={backgroundColor:"#ef4040",maxWidth:"432px",position:"topRight",icon:"fa-regular fa-times-circle",iconColor:"#fafafb",messageColor:"#fafafb",close:!1,closeOnClick:!0};p.addEventListener("submit",s=>{s.preventDefault(),g.innerHTML='<li class="loadText"><span class="loader"></span></li>';const r=s.target.elements.search.value.trim();r.split(" ").join("+"),setTimeout(()=>{d(r).then(t=>{h(t),i.refresh(),t.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",...y})}).catch(t=>{console.log(t)})},3e3),i.on("show.simplelightbox",()=>{console.log("SimpleLightbox opened")})});
//# sourceMappingURL=index.js.map
