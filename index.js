import{a as r,i,R as w}from"./assets/vendor-CaGxMn-M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const k=document.querySelector(".js-open-menu"),$=document.querySelector(".js-close-menu"),m=document.querySelector(".js-menu"),f=document.body,E=document.querySelectorAll(".mobile-menu__link");k.addEventListener("click",()=>{m.classList.add("is-open"),f.classList.add("no-scroll")});$.addEventListener("click",()=>{m.classList.add("closing"),f.classList.remove("no-scroll"),setTimeout(()=>{m.classList.remove("is-open","closing")},200)});E.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open"),f.classList.remove("no-scroll")})});const g=document.querySelector(".loader");function M(){g.classList.remove("is-hidden")}function S(){g.classList.add("is-hidden")}r.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");const B=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function C(e){if(!e){i.error({title:"Error",message:"Artist ID is missing."});return}q();try{const t=await r.get(`/artists/${e}`),o=(await r.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data,a=v("artists");document.body.appendChild(a),b(a),A(a,s,o)}catch(t){console.error("Error fetching artist details:",t),i.error({title:"Error",message:"Failed to load artist details."})}finally{T()}}function v(e){const t=document.createElement("div");return t.className=`${e}-modal`,t.innerHTML=`
    <div class="${e}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
    </div>
  `,t}function q(){let e=document.querySelector(".global-loader");e||(e=document.createElement("div"),e.className="global-loader",e.innerHTML='<div class="loader"></div>',document.body.appendChild(e)),e.classList.remove("hidden")}function T(){const e=document.querySelector(".global-loader");e&&e.classList.add("hidden")}function b(e){e.querySelector(".modal-close-btn").addEventListener("click",()=>{e.remove()});const n=s=>{s.key==="Escape"&&(e.remove(),document.removeEventListener("keydown",n))};document.addEventListener("keydown",n);const o=s=>{s.target===e&&(e.remove(),e.removeEventListener("click",o),document.removeEventListener("keydown",n))};e.addEventListener("click",o)}function A(e,t,n){const o=e.querySelector(".artists-modal-content");o.innerHTML=`
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
            <h2 class="m-a-name">${t.strArtist}</h2>
            <div class="modal-wraper">
            <img src="${t.strArtistThumb}" alt="${t.strArtist}" class="m-a-img" loading="lazy">
            <div class="desc-container">
            <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Years active</p>
                    <p class="m-a-info">${t.intFormedYear} - ${t.intDiedYear||"Present"}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Sex</p>
                    <p class="m-a-info">${t.strGender}</p>
                </div>
                </div>
                <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Members</p>
                    <p class="m-a-info">${t.intMembers}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Country</p>
                    <p class="m-a-info">${t.strCountry}</p>
                </div>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Biography</p>
                    <p class="m-a-info-biography">${t.strBiographyEN}</p>
                </div>
                <div class="genres-container">
                    <p class="m-a-genres-container">${t.genres.map(s=>`<span class="m-a-genre">${s}</span>`).join("")}</p>
                </div>
            </div>
            </div>
             <p class="m-a-albums-topic">Albums</p>
            <ul class="m-a-albums">
            ${n.map(s=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${s.strAlbum}</span>
                <ul class="m-a-track-names">
                   <div class="info-container"><p class="m-a-track-title">Track</p><p class="m-a-time-title">Time</p><p class="m-a-link-title">Link</p></div>
                ${s.tracks.map(a=>`
                 
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${a.strTrack}</span>
                            <span class="m-a-track-duration">${B(a.intDuration)}</span>
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
    `,b(e)}const x="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2019L17%2012L9%205V19Z'%20fill='white'/%3e%3c/svg%3e";r.defaults.baseURL="https://sound-wave.b.goit.study/api";const p=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn");let d=1;const O=8;y();l.addEventListener("click",()=>{d+=1,y()});p.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const n=t.dataset.id;C(n)});async function F(e){return(await r.get("/artists",{params:{page:e,limit:O}})).data}function R(e,t=20){if(!e)return"";const n=e.indexOf("."),o=e.split(" ");if(n!==-1){const s=e.substring(0,n+1);if(s.split(" ").length<=t)return s}return o.length>t?o.slice(0,t).join(" ")+"...":e}function j(e,t=!1){const n=e.map(({_id:o,strArtist:s,strArtistThumb:a,genres:c,strBiographyEN:h})=>`
        <li class="artist-item">
            <img class="artist-img" src="${a}" alt="${s}">
            <div class="artist-info">
                <ul class="genres">${c.map(L=>`<li>${L}</li>`).join("")}</ul> 
                <h3 >${s}</h3>
                <p >${R(h,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${o}">Learn more<img src="${x}"
        ></button>
            </div>
        </li>
    `).join("");t?p.insertAdjacentHTML("beforeend",n):p.innerHTML=n}async function y(){try{M(),l.classList.add("is-hidden");const e=await F(d);j(e.artists,d>1),e.page>=e.totalPages?(l.classList.add("is-hidden"),d>1&&i.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):l.classList.remove("is-hidden")}catch{i.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{S()}}r.defaults.baseURL="https://sound-wave.b.goit.study/api";let u;async function D(){try{return(await r.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),i.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function H(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML="",e.forEach(n=>{const o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,t.appendChild(o)}),N()}function N(){document.querySelectorAll(".rating").forEach(t=>{const n=parseFloat(t.dataset.rating)||0;new w(t,{readOnly:!0,score:n,number:5,path:"raty-images/",starType:"img"}).init()})}function P(){u&&u.destroy(),u=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function I(){const e=await D();H(e),P()}document.addEventListener("DOMContentLoaded",I);const U=document.querySelector(".leave-feedback-btn");r.defaults.baseURL="https://sound-wave.b.goit.study/api";async function z(){const e=v("feedback");document.body.appendChild(e),b(e);try{V(e)}catch(t){console.error("Error opening feedback modal:",t),i.error({title:"Error",message:"Failed to open feedback form."})}}function V(e){const t=e.querySelector(".feedback-modal-content");t.innerHTML=`
          <div class="feedback-form">
          <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
        </span>
              <h2>Submit Feedback</h2>
              <input type="text" id="feedback-name" placeholder="Emily">
              <textarea id="feedback-message" placeholder="Type your message..."></textarea>
               <div class="rating" data-rating="0"></div>
              <button id="submit-feedback">Submit Feedback</button>
              </div>
              `}U.addEventListener("click",z);
//# sourceMappingURL=index.js.map
