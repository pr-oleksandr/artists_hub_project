import{a as c,i as m,S as E}from"./assets/vendor-Bet7Kwql.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const q=document.querySelector(".js-open-menu"),S=document.querySelector(".js-close-menu"),u=document.querySelector(".js-menu"),h=document.body,A=document.querySelectorAll(".mobile-menu__link");q.addEventListener("click",()=>{u.classList.add("is-open"),h.classList.add("no-scroll")});S.addEventListener("click",()=>{u.classList.add("closing"),h.classList.remove("no-scroll"),setTimeout(()=>{u.classList.remove("is-open","closing")},200)});A.forEach(e=>{e.addEventListener("click",()=>{u.classList.remove("is-open"),h.classList.remove("no-scroll")})});const L=document.querySelector(".loader");function T(){L.classList.remove("is-hidden")}function B(){L.classList.add("is-hidden")}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const b=document.querySelector(".loader"),x=e=>{const s=Math.floor(e/6e4),t=Math.floor(e%6e4/1e3);return`${s}:${t<10?"0":""}${t}`};async function O(e){if(!e){m.error({title:"Error",message:"Artist ID is missing."});return}try{b.classList.remove("is-hidden");const s=await c.get(`/artists/${e}`),a=(await c.get(`/artists/${e}/albums`)).data.albumsList||[],o=s.data;j(o,a)}catch(s){console.error("Error fetching artist details:",s),m.error({title:"Error",message:"Failed to load artist details."})}finally{b.classList.add("is-hidden")}}function j(e,s){const t=document.querySelector(".artist-modal");t&&t.remove();const a=document.createElement("div");a.className="artist-modal",a.innerHTML=`
        <div class="modal-content">
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
            <h2 class="m-a-name">${e.strArtist}</h2>
            <div class="modal-wraper">
            <img src="${e.strArtistThumb}" alt="${e.strArtist}" class="m-a-img" loading="lazy">
            <div class="desc-container">
            <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Years active</p>
                    <p class="m-a-info">${e.intFormedYear} - ${e.intDiedYear||"Present"}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Sex</p>
                    <p class="m-a-info">${e.strGender}</p>
                </div>
                </div>
                <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Members</p>
                    <p class="m-a-info">${e.intMembers}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Country</p>
                    <p class="m-a-info">${e.strCountry}</p>
                </div>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Biography</p>
                    <p class="m-a-info-biography">${e.strBiographyEN}</p>
                </div>
                <div class="genres-container">
                    <p class="m-a-genres-container">${e.genres.map(n=>`<span class="m-a-genre">${n}</span>`).join("")}</p>
                </div>
            </div>
            </div>
             <p class="m-a-albums-topic">Albums</p>
            <ul class="m-a-albums">
            ${s.map(n=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${n.strAlbum}</span>
                <ul class="m-a-track-names">
                   <div class="info-container"><p class="m-a-track-title">Track</p><p class="m-a-time-title">Time</p><p class="m-a-link-title">Link</p></div>
                ${n.tracks.map(r=>`
                 
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${r.strTrack}</span>
                            <span class="m-a-track-duration">${x(r.intDuration)}</span>
                            <a class="m-a-track-link"
                            href="${r.movie&&r.movie.trim()?r.movie:"#"}"  
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Youtube link">
                            ${r.movie&&r.movie.trim()?`
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
    `,document.body.appendChild(a),a.querySelector(".modal-close-btn").addEventListener("click",()=>{a.remove()});const i=n=>{n.key==="Escape"&&(a.remove(),document.removeEventListener("keydown",i))};document.addEventListener("keydown",i)}const P="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2019L17%2012L9%205V19Z'%20fill='white'/%3e%3c/svg%3e";c.defaults.baseURL="https://sound-wave.b.goit.study/api";const p=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn");let d=1;const D=8;w();l.addEventListener("click",()=>{d+=1,w()});p.addEventListener("click",function(e){const s=e.target.closest(".learn-more-btn");if(!s)return;const t=s.dataset.id;O(t)});async function R(e){return(await c.get("/artists",{params:{page:e,limit:D}})).data}function C(e,s=20){if(!e)return"";const t=e.indexOf("."),a=e.split(" ");if(t!==-1){const o=e.substring(0,t+1);if(o.split(" ").length<=s)return o}return a.length>s?a.slice(0,s).join(" ")+"...":e}function H(e,s=!1){const t=e.map(({_id:a,strArtist:o,strArtistThumb:i,genres:n,strBiographyEN:r})=>`
        <li class="artist-item">
            <img class="artist-img" src="${i}" alt="${o}">
            <div class="artist-info">
                <ul class="genres">${n.map(M=>`<li>${M}</li>`).join("")}</ul> 
                <h3 >${o}</h3>
                <p >${C(r,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${a}">Learn more<img src="${P}"
        ></button>
            </div>
        </li>
    `).join("");s?p.insertAdjacentHTML("beforeend",t):p.innerHTML=t}async function w(){try{T(),l.classList.add("is-hidden");const e=await R(d);H(e.artists,d>1),e.page>=e.totalPages?(l.classList.add("is-hidden"),d>1&&m.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):l.classList.remove("is-hidden")}catch{m.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{B()}}const N="https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1",k=document.querySelector(".swiper-wrapper"),F=document.querySelector(".prev-arrow"),z=document.querySelector(".next-arrow"),f=document.querySelector(".dot-first"),v=document.querySelector(".dot-middle"),g=document.querySelector(".dot-last");async function I(){try{const e=await fetch(N);if(!e.ok){console.error(`Помилка HTTP: ${e.status}`);return}const s=await e.json(),t=Array.isArray(s.data)?s.data.slice(0,10):[];if(!t.length){console.warn("Немає відгуків для відображення."),k.innerHTML='<p style="color:#fff;text-align:center;">Відгуків поки немає.</p>';return}U(t),_(t.length)}catch(e){console.error("Помилка при завантаженні відгуків:",e)}}function U(e){const s=e.map(t=>`
        <div class="swiper-slide feedback-content">
          <div class="stars-rating" data-score="${Math.round(t.rating)}"></div>
          <blockquote class="feedback-quote">"${t.descr}"</blockquote>
          <div class="feedback-author">${t.name}</div>
        </div>
      `).join("");k.innerHTML=s,Y()}function Y(){$(".stars-rating").each(function(){const e=$(this).data("score");$(this).raty({score:e,readOnly:!0,starType:"i",hints:["","","","",""],starOn:"★",starOff:"☆"})})}function _(e){const s=new E(".feedback-slider",{slidesPerView:1,spaceBetween:30,loop:!1,navigation:{nextEl:z,prevEl:F},on:{slideChange:function(){y(this.activeIndex,e)}}});y(0,e),f.addEventListener("click",()=>s.slideTo(0)),v.addEventListener("click",()=>s.slideTo(Math.floor(e/2))),g.addEventListener("click",()=>s.slideTo(e-1))}function y(e,s){f.classList.remove("active"),v.classList.remove("active"),g.classList.remove("active"),e===0?f.classList.add("active"):e===s-1?g.classList.add("active"):v.classList.add("active")}I();
//# sourceMappingURL=index.js.map
