import{a as i,i as c,R as q}from"./assets/vendor-CaGxMn-M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const C=document.querySelector(".js-open-menu"),j=document.querySelector(".js-close-menu"),y=document.querySelector(".js-menu"),w=document.body,O=document.querySelectorAll(".mobile-menu__link");C.addEventListener("click",()=>{y.classList.add("is-open"),w.classList.add("no-scroll")});j.addEventListener("click",()=>{y.classList.add("closing"),w.classList.remove("no-scroll"),setTimeout(()=>{y.classList.remove("is-open","closing")},200)});O.forEach(e=>{e.addEventListener("click",()=>{y.classList.remove("is-open"),w.classList.remove("no-scroll")})});const M=document.querySelector(".loader");function G(){M.classList.remove("is-hidden")}function x(){M.classList.add("is-hidden")}const p="/artists_hub_project/assets/icon-sprite-CX7i4XyO.svg";i.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");let k=0;function D(){k=window.scrollY,document.body.style.position="fixed",document.body.style.top=`-${k}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%"}function B(){document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,k)}const H=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function V(e){if(!e){c.error({title:"Error",message:"Artist ID is missing."});return}P();try{const t=await i.get(`/artists/${e}`),o=(await i.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data,a=T("artists");document.body.appendChild(a),E(a),U(a,s,o)}catch(t){console.error("Error fetching artist details:",t),c.error({title:"Error",message:"Failed to load artist details."})}finally{I()}}function T(e){const t=document.createElement("div");return t.className=`${e}-modal`,D(),t.innerHTML=`
    <div class="${e}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"><svg class="SVG-icon"
              width="24" height="16">
              <use href="${p}#icon-close"></use>
            </svg></button>
            </span>
    </div>
  `,t}function P(){let e=document.querySelector(".global-loader");e||(e=document.createElement("div"),e.className="global-loader",e.innerHTML='<div class="loader"></div>',document.body.appendChild(e)),e.classList.remove("hidden")}function I(){const e=document.querySelector(".global-loader");e&&e.classList.add("hidden")}function E(e,t){const n=e.querySelector(".modal-close-btn"),o=e.querySelector(".fb-modal-close-btn");function s(){e.remove(),B(),typeof t=="function"&&t(),document.removeEventListener("keydown",a),e.removeEventListener("click",r)}n&&n.addEventListener("click",s),o&&o.addEventListener("click",s);const a=u=>{u.key==="Escape"&&s()};document.addEventListener("keydown",a);const r=u=>{u.target===e&&s()};e.addEventListener("click",r)}function U(e,t,n){const o=e.querySelector(".artists-modal-content");o.innerHTML=`
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
                            <span class="m-a-track-duration">${H(a.intDuration)}</span>
                            <a class="m-a-track-link" href="${a.movie?a.movie:"#"}"  target="_blank">${a.movie?`<svg class="SVG-icon"
              width="24" height="16">
              <use href="${p}#icon-youtube"></use>
            </svg>`:""} </a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
    `,E(e)}i.defaults.baseURL="https://sound-wave.b.goit.study/api";const h=document.querySelector(".artists-list"),g=document.querySelector(".load-more-btn");let d=1;const Y=8,l={genre:null,sortName:null,name:null},_=document.querySelector(".reset-btn"),L=document.querySelectorAll(".dropdown"),A=document.querySelector(".genre-list"),z=document.querySelector(".sort-list"),S=document.querySelector(".search-input"),X=document.querySelector(".search-btn"),K=document.querySelector(".main-dropdown-btn"),F=document.querySelector(".filters-container");async function J(){const{data:e}=await i.get("/genres");return e}async function Q(){const t=(await J()).map(n=>`<li data-value="${n.genre}">${n.genre}</li>`).join("");A.insertAdjacentHTML("beforeend",t)}Q();K.addEventListener("click",e=>{F.classList.toggle("is-open")});L.forEach(e=>{e.querySelector(".dropdown-btn").addEventListener("click",()=>{L.forEach(n=>{n!==e&&n.classList.remove("open")}),e.classList.toggle("open")})});A.addEventListener("click",e=>{l.genre=e.target.dataset.value||null,d=1,$(),f()});z.addEventListener("click",e=>{const t=e.target.dataset.value;l.sortName=t,d=1,$(),f()});function $(){L.forEach(e=>e.classList.remove("open"))}function N(){l.name=S.value.trim()||null,d=1,f()}S.addEventListener("keydown",e=>{e.key==="Enter"&&N()});X.addEventListener("click",N);function R(){l.genre=null,l.sortName=null,l.name=null,S.value="",d=1,$(),f()}_.addEventListener("click",R);f();g.addEventListener("click",()=>{d+=1,f()});h.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const n=t.dataset.id;V(n)});async function W(e){return(await i.get("/artists",{params:{page:e,limit:Y,genre:l.genre||null,sortName:l.sortName||null,name:l.name||null}})).data}function Z(e,t=20){if(!e)return"";const n=e.indexOf("."),o=e.split(" ");if(n!==-1){const s=e.substring(0,n+1);if(s.split(" ").length<=t)return s}return o.length>t?o.slice(0,t).join(" ")+"...":e}function ee(e,t=!1){const n=e.map(({_id:o,strArtist:s,strArtistThumb:a,genres:r,strBiographyEN:u})=>`
        <li class="artist-item">
            <img class="artist-img" src="${a}" alt="${s}">
            <div class="artist-info">
                <ul class="genres">${r.map(m=>`<li>${m}</li>`).join("")}</ul> 
                <h3 >${s}</h3>
                <p >${Z(u,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${o}">Learn more <svg class="SVG-icon" width="24" height="16">
    <use href="${p}#icon-icon-lr-more"></use>
  </svg></button>
            </div>
        </li>
    `).join("");t?h.insertAdjacentHTML("beforeend",n):h.innerHTML=n}async function f(){try{G(),g.classList.add("is-hidden");const e=await W(d);if(!e.artists||e.artists.length===0){F.classList.toggle("is-open"),h.innerHTML=` 
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
      </li> `,document.querySelector(".err-reset-btn").addEventListener("click",R);return}ee(e.artists,d>1),e.page>=e.totalPages?(g.classList.add("is-hidden"),d>1&&c.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):g.classList.remove("is-hidden")}catch{c.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{x()}}i.defaults.baseURL="https://sound-wave.b.goit.study/api";let v;async function te(){try{return(await i.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),c.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function se(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML="",e.forEach(n=>{const o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,t.appendChild(o)}),ne()}function ne(){document.querySelectorAll(".rating").forEach(t=>{const n=parseFloat(t.dataset.rating)||0;new q(t,{readOnly:!0,score:n,number:5,path:"raty-images/",starType:"img"}).init()})}function ae(){v&&v.destroy(),v=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function oe(){const e=await te();se(e),ae()}document.addEventListener("DOMContentLoaded",oe);const b=document.querySelector(".leave-feedback-btn");i.defaults.baseURL="https://sound-wave.b.goit.study/api";async function re(){b.disabled=!0;const e=T("feedback");document.body.appendChild(e);try{ie(e),E(e,()=>{b.disabled=!1})}catch(t){console.error("Error opening feedback modal:",t),c.error({title:"Error",message:"Failed to open feedback form."}),b.disabled=!1}}function ie(e){const t=e.querySelector(".feedback-modal-content");t.innerHTML=`
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
              `;const n=t.querySelector(".rating");new q(n,{number:5,score:0,half:!0,path:"raty-images/",starType:"img",click:function(s){n.setAttribute("data-rating",s),t.querySelector("#submit-feedback").disabled=!1},hints:["Bad","Lot to Improve","Usable","Good","Gorgeous"]}).init(),ce(t.querySelector(".feedback-form"),e)}function ce(e,t){e.addEventListener("submit",async n=>{n.preventDefault();const o=e.querySelector("#feedback-name").value.trim(),s=e.querySelector("#feedback-message").value.trim(),a=parseFloat(e.querySelector(".rating").getAttribute("data-rating"));let r=[];if((o.length<2||o.length>16)&&r.push("Name must be between 2 and 16 characters."),(s.length<10||s.length>512)&&r.push("Message must be between 10 and 512 characters."),(isNaN(a)||a<1||a>5)&&r.push("Rating must be between 1 and 5."),r.length>0){c.error({title:"Validation Error",message:r.join(" ")});return}const u={name:o,descr:s,rating:a};try{const m=await i.post("/feedbacks",u);c.success({title:"Success",message:"Your feedback has been submitted!"}),t.remove(),b.disabled=!1,B()}catch(m){console.error("Full error:",m.response?.status,m.response?.data),console.error("Error submitting feedback:",m),c.error({title:"Error",message:"Failed to submit feedback. Please try again later."})}})}b.addEventListener("click",re);
//# sourceMappingURL=index.js.map
