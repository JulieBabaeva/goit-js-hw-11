import{a as m,S as f,i}from"./assets/vendor-CxFKIfsH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function g(s){return m.get("https://pixabay.com/api/",{params:{key:"55690336-89d3439cb4fd8c4c20b1d93a7",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>console.log(r))}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=document.querySelector(".gallery"),o=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:a,views:u,comments:p,downloads:d})=>`<li class="gallery-item">
  <a href='${e}'>
    <img class="gallery-image" src='${n}' alt ='${t}'>    
  </a>
  <div class="info">
  <p><span class="label">Likes:</span> ${a}</p>
  <p><span class="label">Views:</span> ${u}</p>
  <p><span class="label">Comments:</span> ${p}</p>
  <p><span class="label">Downloads:</span> ${d}</p>
</div>
</li>`).join("");r.innerHTML=o,h.refresh()}const l=document.querySelector(".form"),L=document.querySelector(".gallery"),c=document.querySelector(".loader");function b(){c.classList.remove("is-hidden")}function S(){c.classList.add("is-hidden")}l.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(r===""){i.error({message:"Please enter a search term",position:"topRight"});return}L.innerHTML="",b(),g(r).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits),l.reset()}).catch(o=>{console.log(o),i.error({message:"Something went wrong!",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
