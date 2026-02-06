import{a as u,i as l}from"./assets/vendor-CK1Rzdhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();u.defaults.baseURL="https://sound-wave.b.goit.study/api";const d=document.querySelector(".artists-list"),a=document.querySelector(".load-more-btn"),f=document.querySelector(".loader");let c=1;const g=8;async function h(t){return(await u.get("/artists",{params:{page:t,limit:g,sortName:"asc"}})).data}function y(t,r=20){if(!t)return"";const i=t.indexOf("."),o=t.split(" ");if(i!==-1){const e=t.substring(0,i+1);if(e.split(" ").length<=r)return e}return o.length>r?o.slice(0,r).join(" ")+"...":t}function L(t,r=!1){const i=t.map(({_id:o,strArtist:e,strArtistThumb:s,genres:n,strBiographyEN:p})=>`
        <li class="artist-item">
            <img src="${s}" alt="${e}" class="artist-img">
            <div class="artist-info">
                <p class="genres">${n.join(", ")}</p>
                <h3 class="artist-name">${e}</h3>
                <p class="artist-bio">${y(p,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${o}">Learn more</button>
            </div>
        </li>
    `).join("");r?d.insertAdjacentHTML("beforeend",i):d.innerHTML=i}async function m(){try{f.classList.remove("is-hidden"),a.classList.add("is-hidden");const t=await h(c);L(t.artists,c>1),t.page>=t.totalPages?(a.classList.add("is-hidden"),c>1&&l.info({message:"Оппа! Це кінесь, більше нікого немає."})):a.classList.remove("is-hidden")}catch{l.error({message:"Лишенько, щось пішло не так"})}finally{f.classList.add("is-hidden")}}m();a.addEventListener("click",()=>{c+=1,m()});
//# sourceMappingURL=index.js.map
