import{a as i,i as l,P as O,R as A}from"./assets/vendor-C6zc2StE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const x=document.querySelector(".js-open-menu"),D=document.querySelector(".js-close-menu"),k=document.querySelector(".js-menu"),w=document.body,E=document.documentElement,H=document.querySelectorAll(".mobile-menu__link");x.addEventListener("click",()=>{k.classList.add("is-open"),w.classList.add("no-scroll"),E.classList.add("no-scroll")});D.addEventListener("click",()=>{k.classList.remove("is-open"),w.classList.remove("no-scroll"),E.classList.remove("no-scroll")});H.forEach(e=>{e.addEventListener("click",()=>{k.classList.remove("is-open"),w.classList.remove("no-scroll"),E.classList.remove("no-scroll")})});const F=document.querySelector(".loader");function V(){F.classList.remove("is-hidden")}function I(){F.classList.add("is-hidden")}const d="/artists_hub_project/assets/icon-sprite-CfFi6UXv.svg";i.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");let v=0;function U(){v=window.scrollY,document.body.style.position="fixed",document.body.style.top=`-${v}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%"}function T(){document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,v)}const Y=e=>{const t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function _(e){if(!e){l.error({title:"Error",message:"Artist ID is missing."});return}z();try{const t=await i.get(`/artists/${e}`),o=(await i.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data,a=C("artists");document.body.appendChild(a),S(a),X(a,s,o)}catch(t){console.error("Error fetching artist details:",t),l.error({title:"Error",message:"Failed to load artist details."})}finally{K()}}function C(e){const t=document.createElement("div");return t.className=`${e}-modal`,U(),t.innerHTML=`
    <div class="${e}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"><svg class="SVG-icon"
              width="24" height="16">
              <use href="${d}#icon-close"></use>
            </svg></button>
            </span>
    </div>
  `,t}function z(){let e=document.querySelector(".global-loader");e||(e=document.createElement("div"),e.className="global-loader",e.innerHTML='<div class="loader"></div>',document.body.appendChild(e)),e.classList.remove("hidden")}function K(){const e=document.querySelector(".global-loader");e&&e.classList.add("hidden")}function S(e,t){const n=e.querySelector(".modal-close-btn"),o=e.querySelector(".fb-modal-close-btn");function s(){e.remove(),T(),typeof t=="function"&&t(),document.removeEventListener("keydown",a),e.removeEventListener("click",r)}n&&n.addEventListener("click",s),o&&o.addEventListener("click",s);const a=u=>{u.key==="Escape"&&s()};document.addEventListener("keydown",a);const r=u=>{u.target===e&&s()};e.addEventListener("click",r)}function X(e,t,n){const o=e.querySelector(".artists-modal-content");o.innerHTML=`
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
              width="24" height="16">
              <use href="${d}#icon-close"></use>
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
                            <span class="m-a-track-duration">${Y(a.intDuration)}</span>
                            <a class="m-a-track-link" href="${a.movie?a.movie:"#"}"  target="_blank">${a.movie?`<svg class="SVG-icon"
              width="24" height="16">
              <use href="${d}#icon-youtube"></use>
            </svg>`:""} </a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
    `,S(e)}i.defaults.baseURL="https://sound-wave.b.goit.study/api";const $=document.querySelector(".artists-list");let m=1;const N=8,c={genre:null,sortName:null,name:null},J=document.querySelector(".reset-btn"),L=document.querySelectorAll(".dropdown"),R=document.querySelector(".genre-list"),Q=document.querySelector(".sort-list"),q=document.querySelector(".search-input"),W=document.querySelector(".search-btn"),Z=document.querySelector(".main-dropdown-btn"),P=document.querySelector(".filters-container");async function ee(){const{data:e}=await i.get("/genres");return e}async function te(){const t=(await ee()).map(n=>`<li data-value="${n.genre}">${n.genre}</li>`).join("");R.insertAdjacentHTML("beforeend",t)}te();Z.addEventListener("click",e=>{P.classList.toggle("is-open")});L.forEach(e=>{e.querySelector(".dropdown-btn").addEventListener("click",()=>{L.forEach(n=>{n!==e&&n.classList.remove("open")}),e.classList.toggle("open")})});R.addEventListener("click",e=>{c.genre=e.target.dataset.value||null,m=1,y(),B(),p(!0)});Q.addEventListener("click",e=>{const t=e.target.dataset.value;c.sortName=t,m=1,y(),B(),p(!0)});function B(){L.forEach(e=>e.classList.remove("open"))}function y(){P.classList.remove("is-open")}function j(){c.name=q.value.trim()||null,m=1,y(),p(!0)}q.addEventListener("keydown",e=>{e.key==="Enter"&&j()});W.addEventListener("click",j);function G(){c.genre=null,c.sortName=null,c.name=null,q.value="",m=1,y(),B(),M.classList.remove("is-hidden"),p(!0)}J.addEventListener("click",G);p();$.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(t){const o=t.dataset.id;_(o);return}e.target.closest(".err-reset-btn")&&G()});async function se(e){return(await i.get("/artists",{params:{page:e,limit:N,genre:c.genre||null,sortName:c.sortName||null,name:c.name||null}})).data}function ne(e,t=20){if(!e)return"";const n=e.indexOf("."),o=e.split(" ");if(n!==-1){const s=e.substring(0,n+1);if(s.split(" ").length<=t)return s}return o.length>t?o.slice(0,t).join(" ")+"...":e}let f=null;const M=document.getElementById("pagination");function ae(e){f=new O(M,{totalItems:e,itemsPerPage:N,visiblePages:5,page:m,centerAlign:!0,usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} "><span class="tui-page-btn  tui-{{type}}"><svg class="icon" width="24" height="24"><use href="'+d+'#icon-arrow-{{type}}"></use></svg></span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg class="icon" width="24" height="24"><use href="'+d+'#icon-arrow-{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-more"><span class="tui-ico-more">...</span></a>'}}),f.on("afterMove",t=>{m=t.page,p()})}function oe(e){const t=e.map(({_id:n,strArtist:o,strArtistThumb:s,genres:a,strBiographyEN:r})=>`
        <li class="artist-item">
            <img class="artist-img" src="${s}" alt="${o}">
            <div class="artist-info">
                <ul class="genres">${a.map(u=>`<li>${u}</li>`).join("")}</ul> 
                <h3 >${o}</h3>
                <p >${ne(r,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${n}">Learn more <svg class="SVG-icon" width="24" height="16">
    <use href="${d}#icon-icon-lr-more"></use>
  </svg></button>
            </div>
        </li>
    `).join("");$.innerHTML=t}async function p(e=!1){try{V();const t=await se(m);console.log("🚀 ~ loadArtists ~ data:",t),re(t,e)}catch(t){console.log("🚀 ~ loadArtists ~ error:",t),l.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{I()}}function re(e,t){if(!e.artists||e.artists.length===0){ie(),M.classList.add("is-hidden");return}oe(e.artists),f||ae(e.totalArtists),t&&f&&f.reset(e.total)}function ie(){$.innerHTML=` 
    <li class="no-results">
      <svg class="SVG-icon" width="40" height="40">
        <use href="${d}#error-icon"></use>
      </svg>
      <span class="search-err-main">Silence on the stage...</span>
      <div>
        <p class="search-err-info">Looks like no artists match your filters.</p>
        <p class="search-err-info">Try changing them or hit “Reset Filters” to bring back the beat.</p>
      </div>
      <button class="err-reset-btn" type="button">Reset filters</button>
    </li>`}i.defaults.baseURL="https://sound-wave.b.goit.study/api";let h;async function ce(){try{return(await i.get("/feedbacks",{params:{page:1,limit:10}})).data.data||[]}catch(e){return console.error("Error fetching feedbacks:",e),l.error({title:"Error",message:"Failed to load feedbacks."}),[]}}function le(e){const t=document.querySelector(".swiper-wrapper");t.innerHTML="",e.forEach(n=>{const o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
            <div class="feedback-card">
            <div class="rating" data-rating="${n.rating||0}"></div>
                <p class="feedback-message">"${n.descr}"</p>
                <p class="feedback-author">${n.name}</p>
            </div>
        `,t.appendChild(o)}),de()}function de(){document.querySelectorAll(".rating").forEach(t=>{const n=parseFloat(t.dataset.rating)||0;new A(t,{readOnly:!0,score:n,number:5,path:"raty-images/",starType:"img"}).init()})}function ue(){h&&h.destroy(),h=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function me(){const e=await ce();le(e),ue()}document.addEventListener("DOMContentLoaded",me);const b=document.querySelector(".leave-feedback-btn");i.defaults.baseURL="https://sound-wave.b.goit.study/api";async function pe(){b.disabled=!0;const e=C("feedback");document.body.appendChild(e);try{fe(e),S(e,()=>{b.disabled=!1})}catch(t){console.error("Error opening feedback modal:",t),l.error({title:"Error",message:"Failed to open feedback form."}),b.disabled=!1}}function fe(e){const t=e.querySelector(".feedback-modal-content");t.innerHTML=`
          <form class="feedback-form">
          <span class="fb-modal-close-btn-wraper">
            <button type="button" class="fb-modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
                          width="16" height="16">
                          <use href="${d}#icon-close"></use>
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
              `;const n=t.querySelector(".rating");new A(n,{number:5,score:0,half:!0,path:"raty-images/",starType:"img",click:function(s){n.setAttribute("data-rating",s),t.querySelector("#submit-feedback").disabled=!1},hints:["Bad","Lot to Improve","Usable","Good","Gorgeous"]}).init(),be(t.querySelector(".feedback-form"),e)}function be(e,t){e.addEventListener("submit",async n=>{n.preventDefault();const o=e.querySelector("#feedback-name").value.trim(),s=e.querySelector("#feedback-message").value.trim(),a=parseFloat(e.querySelector(".rating").getAttribute("data-rating"));let r=[];if((o.length<2||o.length>16)&&r.push("Name must be between 2 and 16 characters."),(s.length<10||s.length>512)&&r.push("Message must be between 10 and 512 characters."),(isNaN(a)||a<1||a>5)&&r.push("Rating must be between 1 and 5."),r.length>0){l.error({title:"Validation Error",message:r.join(" ")});return}const u={name:o,descr:s,rating:a};try{const g=await i.post("/feedbacks",u);l.success({title:"Success",message:"Your feedback has been submitted!"}),t.remove(),b.disabled=!1,T()}catch(g){console.error("Full error:",g.response?.status,g.response?.data),console.error("Error submitting feedback:",g),l.error({title:"Error",message:"Failed to submit feedback. Please try again later."})}})}b.addEventListener("click",pe);
//# sourceMappingURL=index.js.map
