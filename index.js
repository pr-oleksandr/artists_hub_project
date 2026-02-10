import{a as r,i as d,S as M}from"./assets/vendor-Bet7Kwql.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const q=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu"),m=document.querySelector(".js-menu"),g=document.body,T=document.querySelectorAll(".mobile-menu__link");q.addEventListener("click",()=>{m.classList.add("is-open"),g.classList.add("no-scroll")});S.addEventListener("click",()=>{m.classList.add("closing"),g.classList.remove("no-scroll"),setTimeout(()=>{m.classList.remove("is-open","closing")},200)});T.forEach(e=>{e.addEventListener("click",()=>{m.classList.remove("is-open"),g.classList.remove("no-scroll")})});const h=document.querySelector(".loader");function A(){h.classList.remove("is-hidden")}function B(){h.classList.add("is-hidden")}r.defaults.baseURL="https://sound-wave.b.goit.study/api";document.querySelector(".loader");const O=e=>{const s=Math.floor(e/6e4),o=Math.floor(e%6e4/1e3);return`${s}:${o<10?"0":""}${o}`};async function x(e){if(!e){d.error({title:"Error",message:"Artist ID is missing."});return}const s=j();document.body.appendChild(s),y(s);try{const o=await r.get(`/artists/${e}`),t=(await r.get(`/artists/${e}/albums`)).data.albumsList||[],n=o.data;C(s,n,t)}catch(o){console.error("Error fetching artist details:",o),d.error({title:"Error",message:"Failed to load artist details."})}}function j(){const e=document.createElement("div");return e.className="artist-modal",e.innerHTML=`
    <div class="modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
      <div class="loader"></div>
    </div>
  `,e}function y(e){e.querySelector(".modal-close-btn").addEventListener("click",()=>{e.remove()});const o=t=>{t.key==="Escape"&&(e.remove(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o);const a=t=>{t.target===e&&(e.remove(),e.removeEventListener("click",a),document.removeEventListener("keydown",o))};e.addEventListener("click",a)}function C(e,s,o){const a=e.querySelector(".modal-content");a.innerHTML=`
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
            ${o.map(t=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${t.strAlbum}</span>
                <ul class="m-a-track-names">
                   <div class="info-container"><p class="m-a-track-title">Track</p><p class="m-a-time-title">Time</p><p class="m-a-link-title">Link</p></div>
                ${t.tracks.map(n=>`
                 
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${n.strTrack}</span>
                            <span class="m-a-track-duration">${O(n.intDuration)}</span>
                            <a class="m-a-track-link"
                            href="${n.movie&&n.movie.trim()?n.movie:"#"}"  
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Youtube link">
                            ${n.movie&&n.movie.trim()?`
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
    `,y(e)}const P="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2019L17%2012L9%205V19Z'%20fill='white'/%3e%3c/svg%3e";r.defaults.baseURL="https://sound-wave.b.goit.study/api";const u=document.querySelector(".artists-list"),c=document.querySelector(".load-more-btn");let l=1;const D=8;L();c.addEventListener("click",()=>{l+=1,L()});u.addEventListener("click",function(e){const s=e.target.closest(".learn-more-btn");if(!s)return;const o=s.dataset.id;x(o)});async function H(e){return(await r.get("/artists",{params:{page:e,limit:D}})).data}function R(e,s=20){if(!e)return"";const o=e.indexOf("."),a=e.split(" ");if(o!==-1){const t=e.substring(0,o+1);if(t.split(" ").length<=s)return t}return a.length>s?a.slice(0,s).join(" ")+"...":e}function N(e,s=!1){const o=e.map(({_id:a,strArtist:t,strArtistThumb:n,genres:i,strBiographyEN:k})=>`
        <li class="artist-item">
            <img class="artist-img" src="${n}" alt="${t}">
            <div class="artist-info">
                <ul class="genres">${i.map(E=>`<li>${E}</li>`).join("")}</ul> 
                <h3 >${t}</h3>
                <p >${R(k,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${a}">Learn more<img src="${P}"
        ></button>
            </div>
        </li>
    `).join("");s?u.insertAdjacentHTML("beforeend",o):u.innerHTML=o}async function L(){try{A(),c.classList.add("is-hidden");const e=await H(l);N(e.artists,l>1),e.page>=e.totalPages?(c.classList.add("is-hidden"),l>1&&d.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):c.classList.remove("is-hidden")}catch{d.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{B()}}const F="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1",w=document.querySelector(".swiper-wrapper"),z=document.querySelector(".prev-arrow"),I=document.querySelector(".next-arrow"),p=document.querySelector(".dot-first"),f=document.querySelector(".dot-middle"),v=document.querySelector(".dot-last");async function U(){try{const e=await fetch(F);if(!e.ok){console.error(`Помилка HTTP: ${e.status}`);return}const s=await e.json(),o=Array.isArray(s.data)?s.data.slice(0,10):[];if(!o.length){console.warn("Немає відгуків для відображення."),w.innerHTML='<p style="color:#fff;text-align:center;">Відгуків поки немає.</p>';return}Y(o),V(o.length)}catch(e){console.error("Помилка при завантаженні відгуків:",e)}}function Y(e){const s=e.map(o=>`
        <div class="swiper-slide feedback-content">
          <div class="stars-rating" data-score="${Math.round(o.rating)}"></div>
          <blockquote class="feedback-quote">"${o.descr}"</blockquote>
          <div class="feedback-author">${o.name}</div>
        </div>
      `).join("");w.innerHTML=s,_()}function _(){$(".stars-rating").each(function(){const e=$(this).data("score");$(this).raty({score:e,readOnly:!0,starType:"i",hints:["","","","",""],starOn:"★",starOff:"☆"})})}function V(e){const s=new M(".feedback-slider",{slidesPerView:1,spaceBetween:30,loop:!1,navigation:{nextEl:I,prevEl:z},on:{slideChange:function(){b(this.activeIndex,e)}}});b(0,e),p.addEventListener("click",()=>s.slideTo(0)),f.addEventListener("click",()=>s.slideTo(Math.floor(e/2))),v.addEventListener("click",()=>s.slideTo(e-1))}function b(e,s){p.classList.remove("active"),f.classList.remove("active"),v.classList.remove("active"),e===0?p.classList.add("active"):e===s-1?v.classList.add("active"):f.classList.add("active")}U();
//# sourceMappingURL=index.js.map
