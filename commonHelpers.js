import{S as c,i as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y({hits:r}){const o=document.querySelector(".gallery-container"),i=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:u,comments:d,downloads:f})=>`<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${e}"> 
   <img src="${n}" alt="${t}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${s}</li>
  <li class="discrabe-item"><b>Views</b> ${u}</li>
  <li class="discrabe-item"><b>Comments</b> ${d}</li>
  <li class="discrabe-item"><b>Downloads</b> ${f}</li>
  </ul>
</div>
</li>
    </ul>`).join("");if(o.innerHTML=i,r.length===0)return l(),a();new c(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh(),l()}function g(){const r=document.querySelector(".loading");r.style.display="flex"}function l(){const r=document.querySelector(".loading");r.style.display="none"}function a(){m.error({title:"Error",position:"topRight",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function h(r){return fetch(`https://pixabay.com/api/?key=44767976-5c84653ee99974363117d019c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}let p=new c(".gallery a");const b=document.querySelector(".search-form"),L=document.querySelector(".gallery-container");document.querySelector(".loading");b.addEventListener("submit",P);function P(r){r.preventDefault();const o=r.currentTarget,i=o.elements.insert.value.toLowerCase().trim();if(i==="")return l(),a();g(),L.innerHTML="",h(i).then(n=>{y(n),p.refresh()}).catch(a).finally(()=>{l(),o.reset()})}
//# sourceMappingURL=commonHelpers.js.map
