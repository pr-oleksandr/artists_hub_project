import{a as c,i,R as k}from"./assets/vendor-CaGxMn-M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const $=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu"),p=document.querySelector(".js-menu"),h=document.body,M=document.querySelectorAll(".mobile-menu__link");$.addEventListener("click",()=>{p.classList.add("is-open"),h.classList.add("no-scroll")});S.addEventListener("click",()=>{p.classList.add("closing"),h.classList.remove("no-scroll"),setTimeout(()=>{p.classList.remove("is-open","closing")},200)});M.forEach(e=>{e.addEventListener("click",()=>{p.classList.remove("is-open"),h.classList.remove("no-scroll")})});const L=document.querySelector(".loader");function q(){L.classList.remove("is-hidden")}function T(){L.classList.add("is-hidden")}const f="/artists_hub_project/assets/icon-sprite-pKjToWOX.svg";c.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");const A=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function B(e){if(!e){i.error({title:"Error",message:"Artist ID is missing."});return}F();try{const t=await c.get(`/artists/${e}`),r=(await c.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data,a=w("artists");document.body.appendChild(a),y(a),O(a,s,r)}catch(t){console.error("Error fetching artist details:",t),i.error({title:"Error",message:"Failed to load artist details."})}finally{C()}}function w(e){const t=document.createElement("div");return t.className=`${e}-modal`,t.innerHTML=`
    <div class="${e}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
              width="24" height="16">
              <use href="${f}#icon-clouse"></use>
            </svg></button>
            </span>
    </div>
  `,t}function F(){let e=document.querySelector(".global-loader");e||(e=document.createElement("div"),e.className="global-loader",e.innerHTML='<div class="loader"></div>',document.body.appendChild(e)),e.classList.remove("hidden")}function C(){const e=document.querySelector(".global-loader");e&&e.classList.add("hidden")}function y(e,t){const n=e.querySelector(".modal-close-btn");function r(){e.remove(),typeof t=="function"&&t(),document.removeEventListener("keydown",s),e.removeEventListener("click",a)}n.addEventListener("click",r);const s=o=>{o.key==="Escape"&&r()};document.addEventListener("keydown",s);const a=o=>{o.target===e&&r()};e.addEventListener("click",a)}function O(e,t,n){const r=e.querySelector(".artists-modal-content");r.innerHTML=`
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
              width="24" height="16">
              <use href="${f}#icon-clouse"></use>
            </svg></button>
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
                            <a class="m-a-track-link" href="${a.strTrackThumb||"#"}"  target="_blank"><svg class="SVG-icon"
              width="24" height="16">
              <use href="${f}#icon-youtube"></use>
            </svg></a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
    `,y(e)}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const v=document.querySelector(".artists-list"),d=document.querySelector(".load-more-btn");let u=1;const j=8;E();d.addEventListener("click",()=>{u+=1,E()});v.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const n=t.dataset.id;B(n)});async function R(e){return(await c.get("/artists",{params:{page:e,limit:j}})).data}function N(e,t=20){if(!e)return"";const n=e.indexOf("."),r=e.split(" ");if(n!==-1){const s=e.substring(0,n+1);if(s.split(" ").length<=t)return s}return r.length>t?r.slice(0,t).join(" ")+"...":e}function D(e,t=!1){const n=e.map(({_id:r,strArtist:s,strArtistThumb:a,genres:o,strBiographyEN:b})=>`
        <li class="artist-item">
            <img class="artist-img" src="${a}" alt="${s}">
            <div class="artist-info">
                <ul class="genres">${o.map(l=>`<li>${l}</li>`).join("")}</ul> 
                <h3 >${s}</h3>
                <p >${N(b,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${r}">Learn more <svg class="SVG-icon" width="24" height="16">
    <use href="${f}#icon-icon-lr-more"></use>
  </svg></button>
            </div>
        </li>
    `).join("");t?v.insertAdjacentHTML("beforeend",n):v.innerHTML=n}async function E(){try{q(),d.classList.add("is-hidden");const e=await R(u);D(e.artists,u>1),e.page>=e.totalPages?(d.classList.add("is-hidden"),u>1&&i.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):d.classList.remove("is-hidden")}catch{i.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{T()}}c.defaults.baseURL="https://sound-wave.b.goit.study/api";let g;async function x(){try{return(await c.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),i.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function G(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML="",e.forEach(n=>{const r=document.createElement("div");r.className="swiper-slide",r.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,t.appendChild(r)}),H()}function H(){document.querySelectorAll(".rating").forEach(t=>{const n=parseFloat(t.dataset.rating)||0;new k(t,{readOnly:!0,score:n,number:5,path:"raty-images/",starType:"img"}).init()})}function P(){g&&g.destroy(),g=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function V(){const e=await x();G(e),P()}document.addEventListener("DOMContentLoaded",V);const m=document.querySelector(".leave-feedback-btn");c.defaults.baseURL="https://sound-wave.b.goit.study/api";async function U(){m.disabled=!0;const e=w("feedback");document.body.appendChild(e),y(e,()=>{m.disabled=!1});try{I(e)}catch(t){console.error("Error opening feedback modal:",t),i.error({title:"Error",message:"Failed to open feedback form."}),m.disabled=!1}}function I(e){const t=e.querySelector(".feedback-modal-content");t.innerHTML=`
          <form class="feedback-form">
          <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
        </span>
              <h2 class="form-title">Submit Feedback</h2>
              
              <div class="form-container">
                <div class="feedback-container">
                  <label for="feedback-name">Name</label>
                  <input type="text" id="feedback-name" placeholder="Emily">
                </div>
                
                <div class="feedback-container">
                  <label for="feedback-message">Message</label>
                  <textarea id="feedback-message" placeholder="Type your message..."></textarea>
                </div>
                <div class="rating" id="rating" data-rating="0"></div>
                <button class="form-submit-btn" type="submit" id="submit-feedback" disabled>Submit</button>
              </div>
              </form>
              `;const n=t.querySelector(".rating");new k(n,{number:5,score:0,half:!0,path:"raty-images/",starType:"img",click:function(s){n.setAttribute("data-rating",s),t.querySelector("#submit-feedback").disabled=!1},hints:["Bad","Lot to Improve","Usable","Good","Gorgeous"]}).init(),_(t.querySelector(".feedback-form"),e)}function _(e,t){e.addEventListener("submit",async n=>{n.preventDefault();const r=e.querySelector("#feedback-name").value.trim(),s=e.querySelector("#feedback-message").value.trim(),a=parseFloat(e.querySelector(".rating").getAttribute("data-rating"));let o=[];if((r.length<2||r.length>16)&&o.push("Name must be between 2 and 16 characters."),(s.length<10||s.length>512)&&o.push("Message must be between 10 and 512 characters."),(isNaN(a)||a<1||a>5)&&o.push("Rating must be between 1 and 5."),o.length>0){i.error({title:"Validation Error",message:o.join(" ")});return}const b={name:r,descr:s,rating:a};try{const l=await c.post("/feedbacks",b);i.success({title:"Success",message:"Your feedback has been submitted!"}),t.remove()}catch(l){console.error("Full error:",l.response?.status,l.response?.data),console.error("Error submitting feedback:",l),i.error({title:"Error",message:"Failed to submit feedback. Please try again later."})}})}m.addEventListener("click",U);
//# sourceMappingURL=index.js.map
