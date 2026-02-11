import{a as i,i as l,R as $}from"./assets/vendor-CaGxMn-M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const R=document.querySelector(".js-open-menu"),C=document.querySelector(".js-close-menu"),y=document.querySelector(".js-menu"),k=document.body,j=document.querySelectorAll(".mobile-menu__link");R.addEventListener("click",()=>{y.classList.add("is-open"),k.classList.add("no-scroll")});C.addEventListener("click",()=>{y.classList.add("closing"),k.classList.remove("no-scroll"),setTimeout(()=>{y.classList.remove("is-open","closing")},200)});j.forEach(e=>{e.addEventListener("click",()=>{y.classList.remove("is-open"),k.classList.remove("no-scroll")})});const q=document.querySelector(".loader");function O(){q.classList.remove("is-hidden")}function G(){q.classList.add("is-hidden")}const p="/artists_hub_project/assets/icon-sprite-CX7i4XyO.svg";i.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");const x=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function D(e){if(!e){l.error({title:"Error",message:"Artist ID is missing."});return}H();try{const t=await i.get(`/artists/${e}`),o=(await i.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data,a=M("artists");document.body.appendChild(a),w(a),P(a,s,o)}catch(t){console.error("Error fetching artist details:",t),l.error({title:"Error",message:"Failed to load artist details."})}finally{V()}}function M(e){const t=document.createElement("div");t.className=`${e}-modal`;const n=window.scrollY;return document.body.style.position="fixed",document.body.style.top=`-${n}px`,t.innerHTML=`
    <div class="${e}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"><svg class="SVG-icon"
              width="24" height="16">
              <use href="${p}#icon-close"></use>
            </svg></button>
            </span>
    </div>
  `,t}function H(){let e=document.querySelector(".global-loader");e||(e=document.createElement("div"),e.className="global-loader",e.innerHTML='<div class="loader"></div>',document.body.appendChild(e)),e.classList.remove("hidden")}function V(){const e=document.querySelector(".global-loader");e&&e.classList.add("hidden")}function w(e,t){const n=e.querySelector(".modal-close-btn"),o=e.querySelector(".fb-modal-close-btn");function s(){e.remove();const c=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,parseInt(c||"0")*-1),typeof t=="function"&&t(),document.removeEventListener("keydown",a),e.removeEventListener("click",r)}n&&n.addEventListener("click",s),o&&o.addEventListener("click",s);const a=c=>{c.key==="Escape"&&s()};document.addEventListener("keydown",a);const r=c=>{c.target===e&&s()};e.addEventListener("click",r)}function P(e,t,n){const o=e.querySelector(".artists-modal-content");o.innerHTML=`
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
                            <span class="m-a-track-duration">${x(a.intDuration)}</span>
                            <a class="m-a-track-link" href="${a.movie?a.movie:"#"}"  target="_blank">${a.movie?`<svg class="SVG-icon"
              width="24" height="16">
              <use href="${p}#icon-youtube"></use>
            </svg>`:""} </a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
    `,w(e)}i.defaults.baseURL="https://sound-wave.b.goit.study/api";const h=document.querySelector(".artists-list"),g=document.querySelector(".load-more-btn");let u=1;const I=8,d={genre:null,sortName:null,name:null},Y=document.querySelector(".reset-btn"),L=document.querySelectorAll(".dropdown"),B=document.querySelector(".genre-list"),U=document.querySelector(".sort-list"),E=document.querySelector(".search-input"),_=document.querySelector(".search-btn"),z=document.querySelector(".main-dropdown-btn"),T=document.querySelector(".filters-container");async function X(){const{data:e}=await i.get("/genres");return e}async function K(){const t=(await X()).map(n=>`<li data-value="${n.genre}">${n.genre}</li>`).join("");B.insertAdjacentHTML("beforeend",t)}K();z.addEventListener("click",e=>{T.classList.toggle("is-open")});L.forEach(e=>{e.querySelector(".dropdown-btn").addEventListener("click",()=>{L.forEach(n=>{n!==e&&n.classList.remove("open")}),e.classList.toggle("open")})});B.addEventListener("click",e=>{d.genre=e.target.dataset.value||null,u=1,S(),f()});U.addEventListener("click",e=>{const t=e.target.dataset.value;d.sortName=t,u=1,S(),f()});function S(){L.forEach(e=>e.classList.remove("open"))}function A(){d.name=E.value.trim()||null,u=1,f()}E.addEventListener("keydown",e=>{e.key==="Enter"&&A()});_.addEventListener("click",A);function F(){d.genre=null,d.sortName=null,d.name=null,E.value="",u=1,S(),f()}Y.addEventListener("click",F);f();g.addEventListener("click",()=>{u+=1,f()});h.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const n=t.dataset.id;D(n)});async function J(e){return(await i.get("/artists",{params:{page:e,limit:I,genre:d.genre||null,sortName:d.sortName||null,name:d.name||null}})).data}function Q(e,t=20){if(!e)return"";const n=e.indexOf("."),o=e.split(" ");if(n!==-1){const s=e.substring(0,n+1);if(s.split(" ").length<=t)return s}return o.length>t?o.slice(0,t).join(" ")+"...":e}function W(e,t=!1){const n=e.map(({_id:o,strArtist:s,strArtistThumb:a,genres:r,strBiographyEN:c})=>`
        <li class="artist-item">
            <img class="artist-img" src="${a}" alt="${s}">
            <div class="artist-info">
                <ul class="genres">${r.map(m=>`<li>${m}</li>`).join("")}</ul> 
                <h3 >${s}</h3>
                <p >${Q(c,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${o}">Learn more <svg class="SVG-icon" width="24" height="16">
    <use href="${p}#icon-icon-lr-more"></use>
  </svg></button>
            </div>
        </li>
    `).join("");t?h.insertAdjacentHTML("beforeend",n):h.innerHTML=n}async function f(){try{O(),g.classList.add("is-hidden");const e=await J(u);if(!e.artists||e.artists.length===0){T.classList.toggle("is-open"),h.innerHTML=` 
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
      </li> `,document.querySelector(".err-reset-btn").addEventListener("click",F);return}W(e.artists,u>1),e.page>=e.totalPages?(g.classList.add("is-hidden"),u>1&&l.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):g.classList.remove("is-hidden")}catch{l.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{G()}}i.defaults.baseURL="https://sound-wave.b.goit.study/api";let v;async function Z(){try{return(await i.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),l.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function ee(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML="",e.forEach(n=>{const o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,t.appendChild(o)}),te()}function te(){document.querySelectorAll(".rating").forEach(t=>{const n=parseFloat(t.dataset.rating)||0;new $(t,{readOnly:!0,score:n,number:5,path:"raty-images/",starType:"img"}).init()})}function se(){v&&v.destroy(),v=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function ne(){const e=await Z();ee(e),se()}document.addEventListener("DOMContentLoaded",ne);const b=document.querySelector(".leave-feedback-btn");i.defaults.baseURL="https://sound-wave.b.goit.study/api";async function ae(){b.disabled=!0;const e=M("feedback");document.body.appendChild(e);try{oe(e),w(e,()=>{b.disabled=!1})}catch(t){console.error("Error opening feedback modal:",t),l.error({title:"Error",message:"Failed to open feedback form."}),b.disabled=!1}}function oe(e){const t=e.querySelector(".feedback-modal-content");t.innerHTML=`
          <form class="feedback-form">
          <span class="fb-modal-close-btn-wraper">
            <button type="button" class="fb-modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
                          width="16" height="16">
                          <use href="${p}#icon-close"></use>
                        </svg></button> 
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
              `;const n=t.querySelector(".rating");new $(n,{number:5,score:0,half:!0,path:"raty-images/",starType:"img",click:function(s){n.setAttribute("data-rating",s),t.querySelector("#submit-feedback").disabled=!1},hints:["Bad","Lot to Improve","Usable","Good","Gorgeous"]}).init(),re(t.querySelector(".feedback-form"),e)}function re(e,t){e.addEventListener("submit",async n=>{n.preventDefault();const o=e.querySelector("#feedback-name").value.trim(),s=e.querySelector("#feedback-message").value.trim(),a=parseFloat(e.querySelector(".rating").getAttribute("data-rating"));let r=[];if((o.length<2||o.length>16)&&r.push("Name must be between 2 and 16 characters."),(s.length<10||s.length>512)&&r.push("Message must be between 10 and 512 characters."),(isNaN(a)||a<1||a>5)&&r.push("Rating must be between 1 and 5."),r.length>0){l.error({title:"Validation Error",message:r.join(" ")});return}const c={name:o,descr:s,rating:a};try{const m=await i.post("/feedbacks",c);l.success({title:"Success",message:"Your feedback has been submitted!"}),t.remove(),b.disabled=!1;const N=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,parseInt(N||"0")*-1)}catch(m){console.error("Full error:",m.response?.status,m.response?.data),console.error("Error submitting feedback:",m),l.error({title:"Error",message:"Failed to submit feedback. Please try again later."})}})}b.addEventListener("click",ae);
//# sourceMappingURL=index.js.map
