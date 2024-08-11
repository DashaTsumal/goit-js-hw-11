import{S as u,i as y}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g({hits:r}){const o=document.querySelector(".gallery-container"),i=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:d,comments:f,downloads:m})=>`<ul class="gallery-card">
      <li class="gallery">
      <a class="gallery-link" href="${e}"> 
   <img src="${n}" alt="${t}" width="270" height="160"/>
   </a>
    <div class="discrabe">
  <ul class="discrabe-list">
  <li class="discrabe-item"><b>Likes</b> ${s}</li>
  <li class="discrabe-item"><b>Views</b> ${d}</li>
  <li class="discrabe-item"><b>Comments</b> ${f}</li>
  <li class="discrabe-item"><b>Downloads</b> ${m}</li>
  </ul>
</div>
</li>
    </ul>`).join("");if(o.innerHTML=i,r.length===0)return l(),c();new u(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh(),l()}function h(){const r=document.querySelector(".loading");r.style.display="flex"}function l(){const r=document.querySelector(".loading");r.style.display="none"}function c(){y.error({title:"Error",position:"topRight",title:"",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(r){return fetch(`https://pixabay.com/api/?key=44767976-5c84653ee99974363117d019c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const b=document.querySelector(".search-form"),L=document.querySelector(".gallery-container");document.querySelector(".loading");let a;b.addEventListener("submit",P);function P(r){r.preventDefault();const o=r.currentTarget,i=o.elements.insert.value.toLowerCase().trim();if(i==="")return l(),c();h(),L.innerHTML="",p(i).then(n=>{g(n),a?a.refresh():a=new u(".gallery-container a")}).catch(c).finally(()=>{l(),o.reset()})}
//# sourceMappingURL=commonHelpers.js.map
