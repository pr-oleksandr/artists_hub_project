import{a as c,i as m}from"./assets/vendor-CK1Rzdhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const y=document.querySelector(".js-open-menu"),L=document.querySelector(".js-close-menu"),u=document.querySelector(".js-menu"),f=document.body,$=document.querySelectorAll(".mobile-menu__link");y.addEventListener("click",()=>{u.classList.add("is-open"),f.classList.add("no-scroll")});L.addEventListener("click",()=>{u.classList.add("closing"),f.classList.remove("no-scroll"),setTimeout(()=>{u.classList.remove("is-open","closing")},200)});$.forEach(s=>{s.addEventListener("click",()=>{u.classList.remove("is-open"),f.classList.remove("no-scroll")})});const b=document.querySelector(".loader");function k(){b.classList.remove("is-hidden")}function E(){b.classList.add("is-hidden")}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const g=document.querySelector(".loader"),w=s=>{const t=Math.floor(s/6e4),a=Math.floor(s%6e4/1e3);return`${t}:${a<10?"0":""}${a}`};async function M(s){if(!s){m.error({title:"Error",message:"Artist ID is missing."});return}try{g.classList.remove("is-hidden");const t=await c.get(`/artists/${s}`),n=(await c.get(`/artists/${s}/albums`)).data.albumsList||[],e=t.data;A(e,n)}catch(t){console.error("Error fetching artist details:",t),m.error({title:"Error",message:"Failed to load artist details."})}finally{g.classList.add("is-hidden")}}function A(s,t){const a=document.querySelector(".artist-modal");a&&a.remove();const n=document.createElement("div");n.className="artist-modal",n.innerHTML=`
        <div class="modal-content">
            <button type="button" class="modal-close-btn" aria-label="Close">x</button>
            <h2 class="m-a-name">${s.strArtist}</h2>
            <img src="${s.strArtistThumb}" alt="${s.strArtist}" class="m-a-img" loading="lazy">
            <div class="desc-container">
                <div class="desc-box">
                    <p class="m-a-topic">Years active</p>
                    <p class="m-a-info">${s.intFormedYear} - ${s.intDiedYear||"Present"}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Sex</p>
                    <p class="m-a-info">${s.strGender}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Members</p>
                    <p class="m-a-info">${s.intMembers}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Country</p>
                    <p class="m-a-info">${s.strCountry}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Biography</p>
                    <p class="m-a-info">${s.strBiographyEN}</p>
                </div>
                <div class="genres-container">
                    <p class="m-a-topic">Genres</p>
                    <p class="m-a-genres-container">${s.genres.map(r=>`<span class="m-a-genre">${r}</span>`).join("")}</p>
                </div>
            </div>
            <ul class="m-a-albums">
            <p class="m-a-albums-topic">Albums</p>
            ${t.map(r=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${r.strAlbum}</span>
                <ul class="m-a-track-names">
                ${r.tracks.map(i=>`
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${i.strTrack}</span>
                            <span class="m-a-track-duration">${w(i.intDuration)}</span>
                            <a class="m-a-track-link" href="${i.strTrackThumb||"#"}"  target="_blank">Y</a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
        </div>  
    `,document.body.appendChild(n),n.querySelector(".modal-close-btn").addEventListener("click",()=>{n.remove()});const o=r=>{r.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const p=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn");let d=1;const B=8;v();l.addEventListener("click",()=>{d+=1,v()});p.addEventListener("click",function(s){const t=s.target.closest(".learn-more-btn");if(!t)return;const a=t.dataset.id;M(a)});async function S(s){return(await c.get("/artists",{params:{page:s,limit:B}})).data}function q(s,t=20){if(!s)return"";const a=s.indexOf("."),n=s.split(" ");if(a!==-1){const e=s.substring(0,a+1);if(e.split(" ").length<=t)return e}return n.length>t?n.slice(0,t).join(" ")+"...":s}function j(s,t=!1){const a=s.map(({_id:n,strArtist:e,strArtistThumb:o,genres:r,strBiographyEN:i})=>`
        <li class="artist-item">
            <img src="${o}" alt="${e}" class="artist-img">
            <div class="artist-info">
                <p class="genres">${r.map(h=>`<span class="artist-genre">${h}</span>`).join("")}</p> 
                <h3 class="artist-name">${e}</h3>
                <p class="artist-bio">${q(i,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${n}">Learn more<img src="../img/caret-right.svg"
        alt="button load more"></button>
            </div>
        </li>
    `).join("");t?p.insertAdjacentHTML("beforeend",a):p.innerHTML=a}async function v(){try{k(),l.classList.add("is-hidden");const s=await S(d);j(s.artists,d>1),s.page>=s.totalPages?(l.classList.add("is-hidden"),d>1&&m.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):l.classList.remove("is-hidden")}catch{m.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{E()}}
//# sourceMappingURL=index.js.map
