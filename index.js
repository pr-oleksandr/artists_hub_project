import{a as c,i as m}from"./assets/vendor-CK1Rzdhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const h=document.querySelector(".js-open-menu"),y=document.querySelector(".js-close-menu"),u=document.querySelector(".js-menu"),f=document.body,L=document.querySelectorAll(".mobile-menu__link");h.addEventListener("click",()=>{u.classList.add("is-open"),f.classList.add("no-scroll")});y.addEventListener("click",()=>{u.classList.add("closing"),f.classList.remove("no-scroll"),setTimeout(()=>{u.classList.remove("is-open","closing")},200)});L.forEach(s=>{s.addEventListener("click",()=>{u.classList.remove("is-open"),f.classList.remove("no-scroll")})});const g=document.querySelector(".loader");function $(){g.classList.remove("is-hidden")}function k(){g.classList.add("is-hidden")}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const b=document.querySelector(".loader"),E=s=>{const t=Math.floor(s/6e4),n=Math.floor(s%6e4/1e3);return`${t}:${n<10?"0":""}${n}`};async function w(s){if(!s){m.error({title:"Error",message:"Artist ID is missing."});return}try{b.classList.remove("is-hidden");const t=await c.get(`/artists/${s}`),a=(await c.get(`/artists/${s}/albums`)).data.albumsList||[],e=t.data;M(e,a)}catch(t){console.error("Error fetching artist details:",t),m.error({title:"Error",message:"Failed to load artist details."})}finally{b.classList.add("is-hidden")}}function M(s,t){const n=document.querySelector(".artist-modal");n&&n.remove();const a=document.createElement("div");a.className="artist-modal",a.innerHTML=`
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
                    <p class="m-a-genres-container">${s.genres.map(i=>`<span class="m-a-genre">${i}</span>`).join("")}</p>
                </div>
            </div>
            <ul class="m-a-albums">
            <p class="m-a-albums-topic">Albums</p>
            ${t.map(i=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${i.strAlbum}</span>
                <ul class="m-a-track-names">
                ${i.tracks.map(r=>`
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${r.strTrack}</span>
                            <span class="m-a-track-duration">${E(r.intDuration)}</span>
                            <a class="m-a-track-link" href="${r.strTrackThumb||"#"}"  target="_blank">Y</a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
        </div>  
    `,document.body.appendChild(a),a.querySelector(".modal-close-btn").addEventListener("click",()=>{a.remove()});const o=i=>{i.key==="Escape"&&(a.remove(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const p=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn");let d=1;const A=8;v();l.addEventListener("click",()=>{d+=1,v()});p.addEventListener("click",function(s){const t=s.target.closest(".learn-more-btn");if(!t)return;const n=t.dataset.id;w(n)});async function B(s){return(await c.get("/artists",{params:{page:s,limit:A}})).data}function S(s,t=20){if(!s)return"";const n=s.indexOf("."),a=s.split(" ");if(n!==-1){const e=s.substring(0,n+1);if(e.split(" ").length<=t)return e}return a.length>t?a.slice(0,t).join(" ")+"...":s}function q(s,t=!1){const n=s.map(({_id:a,strArtist:e,strArtistThumb:o,genres:i,strBiographyEN:r})=>`
        <li class="artist-item">
            <img src="${o}" alt="${e}" class="artist-img">
            <div class="artist-info">
                <p class="genres">${i.join(", ")}</p>
                <h3 class="artist-name">${e}</h3>
                <p class="artist-bio">${S(r,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${a}">Learn more</button>
            </div>
        </li>
    `).join("");t?p.insertAdjacentHTML("beforeend",n):p.innerHTML=n}async function v(){try{$(),l.classList.add("is-hidden");const s=await B(d);q(s.artists,d>1),s.page>=s.totalPages?(l.classList.add("is-hidden"),d>1&&m.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):l.classList.remove("is-hidden")}catch{m.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{k()}}
//# sourceMappingURL=index.js.map
