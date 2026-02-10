import{a as c,i,R as y}from"./assets/vendor-CaGxMn-M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const E=document.querySelector(".js-open-menu"),$=document.querySelector(".js-close-menu"),p=document.querySelector(".js-menu"),v=document.body,S=document.querySelectorAll(".mobile-menu__link");E.addEventListener("click",()=>{p.classList.add("is-open"),v.classList.add("no-scroll")});$.addEventListener("click",()=>{p.classList.add("closing"),v.classList.remove("no-scroll"),setTimeout(()=>{p.classList.remove("is-open","closing")},200)});S.forEach(e=>{e.addEventListener("click",()=>{p.classList.remove("is-open"),v.classList.remove("no-scroll")})});const w=document.querySelector(".loader");function M(){w.classList.remove("is-hidden")}function q(){w.classList.add("is-hidden")}c.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");const A=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function B(e){if(!e){i.error({title:"Error",message:"Artist ID is missing."});return}T();try{const t=await c.get(`/artists/${e}`),o=(await c.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data,a=L("artists");document.body.appendChild(a),h(a),F(a,s,o)}catch(t){console.error("Error fetching artist details:",t),i.error({title:"Error",message:"Failed to load artist details."})}finally{C()}}function L(e){const t=document.createElement("div");return t.className=`${e}-modal`,t.innerHTML=`
    <div class="${e}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
    </div>
  `,t}function T(){let e=document.querySelector(".global-loader");e||(e=document.createElement("div"),e.className="global-loader",e.innerHTML='<div class="loader"></div>',document.body.appendChild(e)),e.classList.remove("hidden")}function C(){const e=document.querySelector(".global-loader");e&&e.classList.add("hidden")}function h(e,t){const n=e.querySelector(".modal-close-btn");function o(){e.remove(),typeof t=="function"&&t(),document.removeEventListener("keydown",s),e.removeEventListener("click",a)}n.addEventListener("click",o);const s=r=>{r.key==="Escape"&&o()};document.addEventListener("keydown",s);const a=r=>{r.target===e&&o()};e.addEventListener("click",a)}function F(e,t,n){const o=e.querySelector(".artists-modal-content");o.innerHTML=`
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
    `,h(e)}const x="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2019L17%2012L9%205V19Z'%20fill='white'/%3e%3c/svg%3e";c.defaults.baseURL="https://sound-wave.b.goit.study/api";const g=document.querySelector(".artists-list"),d=document.querySelector(".load-more-btn");let u=1;const O=8;k();d.addEventListener("click",()=>{u+=1,k()});g.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const n=t.dataset.id;B(n)});async function R(e){return(await c.get("/artists",{params:{page:e,limit:O}})).data}function j(e,t=20){if(!e)return"";const n=e.indexOf("."),o=e.split(" ");if(n!==-1){const s=e.substring(0,n+1);if(s.split(" ").length<=t)return s}return o.length>t?o.slice(0,t).join(" ")+"...":e}function D(e,t=!1){const n=e.map(({_id:o,strArtist:s,strArtistThumb:a,genres:r,strBiographyEN:f})=>`
        <li class="artist-item">
            <img class="artist-img" src="${a}" alt="${s}">
            <div class="artist-info">
                <ul class="genres">${r.map(l=>`<li>${l}</li>`).join("")}</ul> 
                <h3 >${s}</h3>
                <p >${j(f,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${o}">Learn more<img src="${x}"
        ></button>
            </div>
        </li>
    `).join("");t?g.insertAdjacentHTML("beforeend",n):g.innerHTML=n}async function k(){try{M(),d.classList.add("is-hidden");const e=await R(u);D(e.artists,u>1),e.page>=e.totalPages?(d.classList.add("is-hidden"),u>1&&i.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):d.classList.remove("is-hidden")}catch{i.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{q()}}c.defaults.baseURL="https://sound-wave.b.goit.study/api";let b;async function N(){try{return(await c.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),i.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function H(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML="",e.forEach(n=>{const o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,t.appendChild(o)}),P()}function P(){document.querySelectorAll(".rating").forEach(t=>{const n=parseFloat(t.dataset.rating)||0;new y(t,{readOnly:!0,score:n,number:5,path:"raty-images/",starType:"img"}).init()})}function I(){b&&b.destroy(),b=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function U(){const e=await N();H(e),I()}document.addEventListener("DOMContentLoaded",U);const m=document.querySelector(".leave-feedback-btn");c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function V(){m.disabled=!0;const e=L("feedback");document.body.appendChild(e),h(e,()=>{m.disabled=!1});try{G(e)}catch(t){console.error("Error opening feedback modal:",t),i.error({title:"Error",message:"Failed to open feedback form."}),m.disabled=!1}}function G(e){const t=e.querySelector(".feedback-modal-content");t.innerHTML=`
          <form class="feedback-form">
          <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
        </span>
              <h2>Submit Feedback</h2>
              <input type="text" id="feedback-name" placeholder="Emily">
              <textarea id="feedback-message" placeholder="Type your message..."></textarea>
               <div class="rating" data-rating="0"></div>
              <button type="submit" id="submit-feedback" disabled>Submit Feedback</button>
              </form>
              `;const n=t.querySelector(".rating");new y(n,{number:5,score:0,half:!0,path:"raty-images/",starType:"img",click:function(s){n.setAttribute("data-rating",s),t.querySelector("#submit-feedback").disabled=!1},hints:["Bad","Lot to Improve","Usable","Good","Gorgeous"]}).init(),Y(t.querySelector(".feedback-form"),e)}function Y(e,t){e.addEventListener("submit",async n=>{n.preventDefault();const o=e.querySelector("#feedback-name").value.trim(),s=e.querySelector("#feedback-message").value.trim(),a=parseFloat(e.querySelector(".rating").getAttribute("data-rating"));let r=[];if((o.length<2||o.length>16)&&r.push("Name must be between 2 and 16 characters."),(s.length<10||s.length>512)&&r.push("Message must be between 10 and 512 characters."),(isNaN(a)||a<1||a>5)&&r.push("Rating must be between 1 and 5."),r.length>0){i.error({title:"Validation Error",message:r.join(" ")});return}const f={name:o,descr:s,rating:a};try{const l=await c.post("/feedbacks",f);i.success({title:"Success",message:"Your feedback has been submitted!"}),t.remove()}catch(l){console.error("Full error:",l.response?.status,l.response?.data),console.error("Error submitting feedback:",l),i.error({title:"Error",message:"Failed to submit feedback. Please try again later."})}})}m.addEventListener("click",V);
//# sourceMappingURL=index.js.map
