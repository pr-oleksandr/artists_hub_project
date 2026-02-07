import{a as c,i as m}from"./assets/vendor-CK1Rzdhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const f=document.querySelector(".loader");function b(){f.classList.remove("is-hidden")}function h(){f.classList.add("is-hidden")}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const p=document.querySelector(".loader"),v=s=>{const t=Math.floor(s/6e4),o=Math.floor(s%6e4/1e3);return`${t}:${o<10?"0":""}${o}`};async function y(s){if(!s){m.error({title:"Error",message:"Artist ID is missing."});return}try{p.classList.remove("is-hidden");const t=await c.get(`/artists/${s}`),r=(await c.get(`/artists/${s}/albums`)).data.albumsList||[],e=t.data;$(e,r)}catch(t){console.error("Error fetching artist details:",t),m.error({title:"Error",message:"Failed to load artist details."})}finally{p.classList.add("is-hidden")}}function $(s,t){const o=document.querySelector(".artist-modal");o&&o.remove();const r=document.createElement("div");r.className="artist-modal",r.innerHTML=`
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
                ${i.tracks.map(n=>`
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${n.strTrack}</span>
                            <span class="m-a-track-duration">${v(n.intDuration)}</span>
                            <a class="m-a-track-link" href="${n.strTrackThumb||"#"}"  target="_blank">Y</a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
        </div>  
    `,document.body.appendChild(r),r.querySelector(".modal-close-btn").addEventListener("click",()=>{r.remove()});const a=i=>{i.key==="Escape"&&(r.remove(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const u=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn");let d=1;const L=8;g();l.addEventListener("click",()=>{d+=1,g()});u.addEventListener("click",function(s){const t=s.target.closest(".learn-more-btn");if(!t)return;const o=t.dataset.id;y(o)});async function w(s){return(await c.get("/artists",{params:{page:s,limit:L}})).data}function k(s,t=20){if(!s)return"";const o=s.indexOf("."),r=s.split(" ");if(o!==-1){const e=s.substring(0,o+1);if(e.split(" ").length<=t)return e}return r.length>t?r.slice(0,t).join(" ")+"...":s}function E(s,t=!1){const o=s.map(({_id:r,strArtist:e,strArtistThumb:a,genres:i,strBiographyEN:n})=>`
        <li class="artist-item">
            <img src="${a}" alt="${e}" class="artist-img">
            <div class="artist-info">
                <p class="genres">${i.join(", ")}</p>
                <h3 class="artist-name">${e}</h3>
                <p class="artist-bio">${k(n,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${r}">Learn more</button>
            </div>
        </li>
    `).join("");t?u.insertAdjacentHTML("beforeend",o):u.innerHTML=o}async function g(){try{b(),l.classList.add("is-hidden");const s=await w(d);E(s.artists,d>1),s.page>=s.totalPages?(l.classList.add("is-hidden"),d>1&&m.info({position:"topRight",message:"Ouch! That is all, folks! No more artists to show."})):l.classList.remove("is-hidden")}catch{m.error({position:"topRight",message:"Welcome to Ukraine! Blackout again? Or the server is resting..."})}finally{h()}}
//# sourceMappingURL=index.js.map
