import{a as c,i as m}from"./assets/vendor-CK1Rzdhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const y=document.querySelector(".js-open-menu"),L=document.querySelector(".js-close-menu"),u=document.querySelector(".js-menu"),f=document.body,w=document.querySelectorAll(".mobile-menu__link");y.addEventListener("click",()=>{u.classList.add("is-open"),f.classList.add("no-scroll")});L.addEventListener("click",()=>{u.classList.add("closing"),f.classList.remove("no-scroll"),setTimeout(()=>{u.classList.remove("is-open","closing")},200)});w.forEach(e=>{e.addEventListener("click",()=>{u.classList.remove("is-open"),f.classList.remove("no-scroll")})});const g=document.querySelector(".loader");function $(){g.classList.remove("is-hidden")}function k(){g.classList.add("is-hidden")}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const v=document.querySelector(".loader"),E=e=>{const t=Math.floor(e/6e4),i=Math.floor(e%6e4/1e3);return`${t}:${i<10?"0":""}${i}`};async function M(e){if(!e){m.error({title:"Error",message:"Artist ID is missing."});return}try{v.classList.remove("is-hidden");const t=await c.get(`/artists/${e}`),a=(await c.get(`/artists/${e}/albums`)).data.albumsList||[],s=t.data;A(s,a)}catch(t){console.error("Error fetching artist details:",t),m.error({title:"Error",message:"Failed to load artist details."})}finally{v.classList.add("is-hidden")}}function A(e,t){const i=document.querySelector(".artist-modal");i&&i.remove();const a=document.createElement("div");a.className="artist-modal",a.innerHTML=`
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
            ${t.map(n=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${n.strAlbum}</span>
                <ul class="m-a-track-names">
                   <div class="info-container"><p class="m-a-track-title">Track</p><p class="m-a-time-title">Time</p><p class="m-a-link-title">Link</p></div>
                ${n.tracks.map(r=>`
                 
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${r.strTrack}</span>
                            <span class="m-a-track-duration">${E(r.intDuration)}</span>
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
    `,document.body.appendChild(a),a.querySelector(".modal-close-btn").addEventListener("click",()=>{a.remove()});const o=n=>{n.key==="Escape"&&(a.remove(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}const B="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%2019L17%2012L9%205V19Z'%20fill='white'/%3e%3c/svg%3e";c.defaults.baseURL="https://sound-wave.b.goit.study/api";const p=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn");let d=1;const S=8;h();l.addEventListener("click",()=>{d+=1,h()});p.addEventListener("click",function(e){const t=e.target.closest(".learn-more-btn");if(!t)return;const i=t.dataset.id;M(i)});async function q(e){return(await c.get("/artists",{params:{page:e,limit:S}})).data}function O(e,t=20){if(!e)return"";const i=e.indexOf("."),a=e.split(" ");if(i!==-1){const s=e.substring(0,i+1);if(s.split(" ").length<=t)return s}return a.length>t?a.slice(0,t).join(" ")+"...":e}function j(e,t=!1){const i=e.map(({_id:a,strArtist:s,strArtistThumb:o,genres:n,strBiographyEN:r})=>`
        <li class="artist-item">
            <img class="artist-img" src="${o}" alt="${s}">
            <div class="artist-info">
                <ul class="genres">${n.map(b=>`<li>${b}</li>`).join("")}</ul> 
                <h3 >${s}</h3>
                <p >${O(r,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${a}">Learn more<img src="${B}"
        ></button>
            </div>
        </li>
    `).join("");t?p.insertAdjacentHTML("beforeend",i):p.innerHTML=i}async function h(){try{$(),l.classList.add("is-hidden");const e=await q(d);j(e.artists,d>1),e.page>=e.totalPages?(l.classList.add("is-hidden"),d>1&&m.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):l.classList.remove("is-hidden")}catch{m.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{k()}}
//# sourceMappingURL=index.js.map
