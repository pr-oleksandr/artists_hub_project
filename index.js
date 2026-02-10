import{a as i,i as c,R as w}from"./assets/vendor-CaGxMn-M.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const L=document.querySelector(".js-open-menu"),$=document.querySelector(".js-close-menu"),m=document.querySelector(".js-menu"),f=document.body,k=document.querySelectorAll(".mobile-menu__link");L.addEventListener("click",()=>{m.classList.add("is-open"),f.classList.add("no-scroll")});$.addEventListener("click",()=>{m.classList.add("closing"),f.classList.remove("no-scroll"),setTimeout(()=>{m.classList.remove("is-open","closing")},200)});k.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open"),f.classList.remove("no-scroll")})});const g=document.querySelector(".loader");function E(){g.classList.remove("is-hidden")}function M(){g.classList.add("is-hidden")}i.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");const A=e=>{const s=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${s}:${n<10?"0":""}${n}`};async function B(e){if(!e){c.error({title:"Error",message:"Artist ID is missing."});return}const s=S();document.body.appendChild(s),v(s);try{const n=await i.get(`/artists/${e}`),t=(await i.get(`/artists/${e}/albums`)).data.albumsList||[],a=n.data;O(s,a,t)}catch(n){console.error("Error fetching artist details:",n),c.error({title:"Error",message:"Failed to load artist details."})}}function S(){const e=document.createElement("div");return e.className="artist-modal",e.innerHTML=`
    <div class="modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
      <div class="loader"></div>
    </div>
  `,e}function v(e){e.querySelector(".modal-close-btn").addEventListener("click",()=>{e.remove()});const n=t=>{t.key==="Escape"&&(e.remove(),document.removeEventListener("keydown",n))};document.addEventListener("keydown",n);const o=t=>{t.target===e&&(e.remove(),e.removeEventListener("click",o),document.removeEventListener("keydown",n))};e.addEventListener("click",o)}function O(e,s,n){const o=e.querySelector(".modal-content");o.innerHTML=`
        <div class="modal-content">
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
            <h2 class="m-a-name">${s.strArtist}</h2>
            <div class="modal-wraper">
            <img src="${s.strArtistThumb}" alt="${s.strArtist}" class="m-a-img" loading="lazy">
            <div class="desc-container">
            <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Years active</p>
                    <p class="m-a-info">${s.intFormedYear} - ${s.intDiedYear||"Present"}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Sex</p>
                    <p class="m-a-info">${s.strGender}</p>
                </div>
                </div>
                <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Members</p>
                    <p class="m-a-info">${s.intMembers}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Country</p>
                    <p class="m-a-info">${s.strCountry}</p>
                </div>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Biography</p>
                    <p class="m-a-info-biography">${s.strBiographyEN}</p>
                </div>
                <div class="genres-container">
                    <p class="m-a-genres-container">${s.genres.map(t=>`<span class="m-a-genre">${t}</span>`).join("")}</p>
                </div>
            </div>
            </div>
             <p class="m-a-albums-topic">Albums</p>
            <ul class="m-a-albums">
            ${n.map(t=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${t.strAlbum}</span>
                <ul class="m-a-track-names">
                   <div class="info-container"><p class="m-a-track-title">Track</p><p class="m-a-time-title">Time</p><p class="m-a-link-title">Link</p></div>
                ${t.tracks.map(a=>`
                 
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${a.strTrack}</span>
                            <span class="m-a-track-duration">${A(a.intDuration)}</span>
                            <a class="m-a-track-link"
                            href="${a.movie&&a.movie.trim()?a.movie:"#"}"  
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Youtube link">
                            ${a.movie&&a.movie.trim()?`
          <svg class="youtube-logo" width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.91 31.91 0 0 0 0 12.005a31.91 31.91 0 0 0 .502 5.819 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.91 31.91 0 0 0 24 12.005a31.91 31.91 0 0 0-.502-5.819zM9.75 15.566V8.434L15.75 12l-6 3.566z"/>
          </svg>
        `:""}
                            </a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
         </div>
    `,v(e)}const T="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2019L17%2012L9%205V19Z'%20fill='white'/%3e%3c/svg%3e";i.defaults.baseURL="https://sound-wave.b.goit.study/api";const u=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn");let d=1;const q=8;b();l.addEventListener("click",()=>{d+=1,b()});u.addEventListener("click",function(e){const s=e.target.closest(".learn-more-btn");if(!s)return;const n=s.dataset.id;B(n)});async function C(e){return(await i.get("/artists",{params:{page:e,limit:q}})).data}function x(e,s=20){if(!e)return"";const n=e.indexOf("."),o=e.split(" ");if(n!==-1){const t=e.substring(0,n+1);if(t.split(" ").length<=s)return t}return o.length>s?o.slice(0,s).join(" ")+"...":e}function R(e,s=!1){const n=e.map(({_id:o,strArtist:t,strArtistThumb:a,genres:r,strBiographyEN:h})=>`
        <li class="artist-item">
            <img class="artist-img" src="${a}" alt="${t}">
            <div class="artist-info">
                <ul class="genres">${r.map(y=>`<li>${y}</li>`).join("")}</ul> 
                <h3 >${t}</h3>
                <p >${x(h,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${o}">Learn more<img src="${T}"
        ></button>
            </div>
        </li>
    `).join("");s?u.insertAdjacentHTML("beforeend",n):u.innerHTML=n}async function b(){try{E(),l.classList.add("is-hidden");const e=await C(d);R(e.artists,d>1),e.page>=e.totalPages?(l.classList.add("is-hidden"),d>1&&c.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):l.classList.remove("is-hidden")}catch{c.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{M()}}i.defaults.baseURL="https://sound-wave.b.goit.study/api";let p;async function j(){try{return(await i.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),c.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function D(e){const s=document.querySelector(".swiper-wrapper");s.innerHTML="",e.forEach(n=>{const o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,s.appendChild(o)}),F()}function F(){document.querySelectorAll(".rating").forEach(s=>{const n=parseFloat(s.dataset.rating)||0;new w(s,{readOnly:!0,score:n,number:5,path:"../public/raty-images",starType:"img"}).init()})}function P(){p&&p.destroy(),p=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function H(){const e=await j();D(e),P()}document.addEventListener("DOMContentLoaded",H);
//# sourceMappingURL=index.js.map
