import{a as c,i as m}from"./assets/vendor-CK1Rzdhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();c.defaults.baseURL="https://sound-wave.b.goit.study/api";const p=document.querySelector(".loader"),g=s=>{const t=Math.floor(s/6e4),r=Math.floor(s%6e4/1e3);return`${t}:${r<10?"0":""}${r}`};async function v(s){if(!s){m.error({title:"Error",message:"Artist ID is missing."});return}try{p.classList.remove("is-hidden");const t=await c.get(`/artists/${s}`),o=(await c.get(`/artists/${s}/albums`)).data.albumsList||[],e=t.data;y(e,o)}catch(t){console.error("Error fetching artist details:",t),m.error({title:"Error",message:"Failed to load artist details."})}finally{p.classList.add("is-hidden")}}function y(s,t){const r=document.querySelector(".artist-modal");r&&r.remove();const o=document.createElement("div");o.className="artist-modal",o.innerHTML=`
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
                    <p class="m-a-genres-container">${s.genres.map(n=>`<span class="m-a-genre">${n}</span>`).join("")}</p>
                </div>
            </div>
            <ul class="m-a-albums">
            <p class="m-a-albums-topic">Albums</p>
            ${t.map(n=>`
                <li class="m-a-album-item">
                <span class="m-a-album-name">${n.strAlbum}</span>
                <ul class="m-a-track-names">
                ${n.tracks.map(i=>`
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${i.strTrack}</span>
                            <span class="m-a-track-duration">${g(i.intDuration)}</span>
                            <a class="m-a-track-link" href="${i.strTrackThumb||"#"}"  target="_blank">Y</a>
                        </div>`).join("")}
                </ul>
                </li>`).join("")}
            </ul>
        </div>  
    `,document.body.appendChild(o),o.querySelector(".modal-close-btn").addEventListener("click",()=>{o.remove()});const a=n=>{n.key==="Escape"&&(o.remove(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}c.defaults.baseURL="https://sound-wave.b.goit.study/api";const u=document.querySelector(".artists-list"),l=document.querySelector(".load-more-btn"),f=document.querySelector(".loader");let d=1;const h=8;u.addEventListener("click",function(s){const t=s.target.closest(".learn-more-btn");if(!t)return;const r=t.dataset.id;v(r)});async function $(s){return(await c.get("/artists",{params:{page:s,limit:h,sortName:"asc"}})).data}function L(s,t=20){if(!s)return"";const r=s.indexOf("."),o=s.split(" ");if(r!==-1){const e=s.substring(0,r+1);if(e.split(" ").length<=t)return e}return o.length>t?o.slice(0,t).join(" ")+"...":s}function w(s,t=!1){const r=s.map(({_id:o,strArtist:e,strArtistThumb:a,genres:n,strBiographyEN:i})=>`
        <li class="artist-item">
            <img src="${a}" alt="${e}" class="artist-img">
            <div class="artist-info">
                <p class="genres">${n.join(", ")}</p>
                <h3 class="artist-name">${e}</h3>
                <p class="artist-bio">${L(i,20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${o}">Learn more</button>
            </div>
        </li>
    `).join("");t?u.insertAdjacentHTML("beforeend",r):u.innerHTML=r}async function b(){try{f.classList.remove("is-hidden"),l.classList.add("is-hidden");const s=await $(d);w(s.artists,d>1),s.page>=s.totalPages?(l.classList.add("is-hidden"),d>1&&m.info({message:"Оппа! Це кінесь, більше нікого немає."})):l.classList.remove("is-hidden")}catch{m.error({message:"Лишенько, щось пішло не так"})}finally{f.classList.add("is-hidden")}}b();l.addEventListener("click",()=>{d+=1,b()});
//# sourceMappingURL=index.js.map
