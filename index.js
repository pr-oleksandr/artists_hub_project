import{a as i,i as c,R as $}from"./assets/vendor-CaGxMn-M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const N=document.querySelector(".js-open-menu"),R=document.querySelector(".js-close-menu"),g=document.querySelector(".js-menu"),k=document.body,C=document.querySelectorAll(".mobile-menu__link");N.addEventListener("click",()=>{g.classList.add("is-open"),k.classList.add("no-scroll")});R.addEventListener("click",()=>{g.classList.add("closing"),k.classList.remove("no-scroll"),setTimeout(()=>{g.classList.remove("is-open","closing")},200)});C.forEach(e=>{e.addEventListener("click",()=>{g.classList.remove("is-open"),k.classList.remove("no-scroll")})});const q=document.querySelector(".loader");function j(){q.classList.remove("is-hidden")}function O(){q.classList.add("is-hidden")}const p="/artists_hub_project/assets/icon-sprite-CX7i4XyO.svg";i.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");const G=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function x(e){if(!e){c.error({title:"Error",message:"Artist ID is missing."});return}D();try{const t=await i.get(`/artists/${e}`),r=(await i.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data,a=M("artists");document.body.appendChild(a),w(a),P(a,s,r)}catch(t){console.error("Error fetching artist details:",t),c.error({title:"Error",message:"Failed to load artist details."})}finally{H()}}function M(e){const t=document.createElement("div");t.className=`${e}-modal`;const n=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${n}px`,t.innerHTML=`
    <div class="${e}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"><svg class="SVG-icon"
              width="24" height="16">
              <use href="${p}#icon-close"></use>
            </svg></button>
            </span>
    </div>
  `,t}function D(){let e=document.querySelector(".global-loader");e||(e=document.createElement("div"),e.className="global-loader",e.innerHTML='<div class="loader"></div>',document.body.appendChild(e)),e.classList.remove("hidden")}function H(){const e=document.querySelector(".global-loader");e&&e.classList.add("hidden")}function w(e,t){const n=e.querySelector(".modal-close-btn");function r(){e.remove();const o=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,parseInt(o||"0")*-1),typeof t=="function"&&t(),document.removeEventListener("keydown",s),e.removeEventListener("click",a)}n.addEventListener("click",r);const s=o=>{o.key==="Escape"&&r()};document.addEventListener("keydown",s);const a=o=>{o.target===e&&r()};e.addEventListener("click",a)}function P(e,t,n){const r=e.querySelector(".artists-modal-content");r.innerHTML=`
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
              width="24" height="16">
              <use href="${p}#icon-close"></use>
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
                            <span class="m-a-track-duration">${G(a.intDuration)}</span>
                            <a class="m-a-track-link" href="${a.movie?a.movie:"#"}"  target="_blank">${a.movie?`<svg class="SVG-icon"
              width="24" height="16">
              <use href="${p}#icon-youtube"></use>
            </svg>`:""} </a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
    `,w(e)}i.defaults.baseURL="https://sound-wave.b.goit.study/api";const v=document.querySelector(".artists-list"),f=document.querySelector(".load-more-btn");let d=1;const V=8,l={genre:null,sortName:null,name:null},I=document.querySelector(".reset-btn"),L=document.querySelectorAll(".dropdown"),B=document.querySelector(".genre-list"),Y=document.querySelector(".sort-list"),E=document.querySelector(".search-input"),U=document.querySelector(".search-btn"),_=document.querySelector(".main-dropdown-btn"),T=document.querySelector(".filters-container");async function z(){const{data:e}=await i.get("/genres");return e}async function X(){const t=(await z()).map(n=>`<li data-value="${n.genre}">${n.genre}</li>`).join("");B.insertAdjacentHTML("beforeend",t)}X();_.addEventListener("click",e=>{T.classList.toggle("is-open")});L.forEach(e=>{e.querySelector(".dropdown-btn").addEventListener("click",()=>{L.forEach(n=>{n!==e&&n.classList.remove("open")}),e.classList.toggle("open")})});B.addEventListener("click",e=>{l.genre=e.target.dataset.value||null,d=1,S(),m()});Y.addEventListener("click",e=>{const t=e.target.dataset.value;l.sortName=t,d=1,S(),m()});function S(){L.forEach(e=>e.classList.remove("open"))}function A(){l.name=E.value.trim()||null,d=1,m()}E.addEventListener("keydown",e=>{e.key==="Enter"&&A()});U.addEventListener("click",A);function F(){l.genre=null,l.sortName=null,l.name=null,E.value="",d=1,S(),m()}I.addEventListener("click",F);m();f.addEventListener("click",()=>{d+=1,m()});v.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const n=t.dataset.id;x(n)});async function K(e){return(await i.get("/artists",{params:{page:e,limit:V,genre:l.genre||null,sortName:l.sortName||null,name:l.name||null}})).data}function J(e,t=20){if(!e)return"";const n=e.indexOf("."),r=e.split(" ");if(n!==-1){const s=e.substring(0,n+1);if(s.split(" ").length<=t)return s}return r.length>t?r.slice(0,t).join(" ")+"...":e}function Q(e,t=!1){const n=e.map(({_id:r,strArtist:s,strArtistThumb:a,genres:o,strBiographyEN:y})=>`
        <li class="artist-item">
            <img class="artist-img" src="${a}" alt="${s}">
            <div class="artist-info">
                <ul class="genres">${o.map(u=>`<li>${u}</li>`).join("")}</ul> 
                <h3 >${s}</h3>
                <p >${J(y,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${r}">Learn more <svg class="SVG-icon" width="24" height="16">
    <use href="${p}#icon-icon-lr-more"></use>
  </svg></button>
            </div>
        </li>
    `).join("");t?v.insertAdjacentHTML("beforeend",n):v.innerHTML=n}async function m(){try{j(),f.classList.add("is-hidden");const e=await K(d);if(!e.artists||e.artists.length===0){T.classList.toggle("is-open"),v.innerHTML=` 
      <li class="no-results">
      <svg class="SVG-icon" width="40" height="40">
                    <use href="${p}#error-icon"></use>
                  </svg>
        <span class="search-err-main">Silence on the stage...</span>
        <div>
        <p class="search-err-info">Looks like no artists match your filters.</p>
        <p class="search-err-info">Try changing them or hit “Reset Filters” to bring back the beat.</p>
        </div>
        <button class="err-reset-btn" type="button">Reset filters</button>
      </li> `,document.querySelector(".err-reset-btn").addEventListener("click",F);return}Q(e.artists,d>1),e.page>=e.totalPages?(f.classList.add("is-hidden"),d>1&&c.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):f.classList.remove("is-hidden")}catch{c.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{O()}}i.defaults.baseURL="https://sound-wave.b.goit.study/api";let h;async function W(){try{return(await i.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),c.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function Z(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML="",e.forEach(n=>{const r=document.createElement("div");r.className="swiper-slide",r.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,t.appendChild(r)}),ee()}function ee(){document.querySelectorAll(".rating").forEach(t=>{const n=parseFloat(t.dataset.rating)||0;new $(t,{readOnly:!0,score:n,number:5,path:"raty-images/",starType:"img"}).init()})}function te(){h&&h.destroy(),h=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function se(){const e=await W();Z(e),te()}document.addEventListener("DOMContentLoaded",se);const b=document.querySelector(".leave-feedback-btn");i.defaults.baseURL="https://sound-wave.b.goit.study/api";async function ne(){b.disabled=!0;const e=M("feedback");document.body.appendChild(e),w(e,()=>{b.disabled=!1});try{ae(e)}catch(t){console.error("Error opening feedback modal:",t),c.error({title:"Error",message:"Failed to open feedback form."}),b.disabled=!1}}function ae(e){const t=e.querySelector(".feedback-modal-content");t.innerHTML=`
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
              `;const n=t.querySelector(".rating");new $(n,{number:5,score:0,half:!0,path:"raty-images/",starType:"img",click:function(s){n.setAttribute("data-rating",s),t.querySelector("#submit-feedback").disabled=!1},hints:["Bad","Lot to Improve","Usable","Good","Gorgeous"]}).init(),re(t.querySelector(".feedback-form"),e)}function re(e,t){e.addEventListener("submit",async n=>{n.preventDefault();const r=e.querySelector("#feedback-name").value.trim(),s=e.querySelector("#feedback-message").value.trim(),a=parseFloat(e.querySelector(".rating").getAttribute("data-rating"));let o=[];if((r.length<2||r.length>16)&&o.push("Name must be between 2 and 16 characters."),(s.length<10||s.length>512)&&o.push("Message must be between 10 and 512 characters."),(isNaN(a)||a<1||a>5)&&o.push("Rating must be between 1 and 5."),o.length>0){c.error({title:"Validation Error",message:o.join(" ")});return}const y={name:r,descr:s,rating:a};try{const u=await i.post("/feedbacks",y);c.success({title:"Success",message:"Your feedback has been submitted!"}),t.remove()}catch(u){console.error("Full error:",u.response?.status,u.response?.data),console.error("Error submitting feedback:",u),c.error({title:"Error",message:"Failed to submit feedback. Please try again later."})}})}b.addEventListener("click",ne);
//# sourceMappingURL=index.js.map
