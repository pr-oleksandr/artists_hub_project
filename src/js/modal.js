import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import sprite from '../img/icon-sprite.svg';
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';
const loader = document.querySelector('.loader');

const formattedDuration = duration => {
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export async function openArtistModal(artistId) {
  if (!artistId) {
    iziToast.error({
      title: 'Error',
      message: 'Artist ID is missing.',
    });
    return;
  }

  showGlobalLoader(); // показываем глобальный лоадер
  try {
    const response = await axios.get(`/artists/${artistId}`);
    const albumsResponse = await axios.get(`/artists/${artistId}/albums`);
    const albums = albumsResponse.data.albumsList || [];
    const artist = response.data;
    const modal = createModal('artists');
    document.body.appendChild(modal);
    setupModalCloseHandlers(modal);
    renderArtistContent(modal, artist, albums);
  } catch (error) {
    console.error('Error fetching artist details:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load artist details.',
    });
  } finally {
    hideGlobalLoader();
  }
}

export function createModal(modalAdress) {
  const modal = document.createElement('div');
  modal.className = `${modalAdress}-modal`;
  modal.innerHTML = `
    <div class="${modalAdress}-modal-content">
    <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
              width="24" height="16">
              <use href="${sprite}#icon-clouse"></use>
            </svg></button>
            </span>
    </div>
  `;
  return modal;
}

function showGlobalLoader() {
  let loader = document.querySelector('.global-loader');
  if (!loader) {
    loader = document.createElement('div');
    loader.className = 'global-loader';
    loader.innerHTML = `<div class="loader"></div>`;
    document.body.appendChild(loader);
  }
  loader.classList.remove('hidden');
}
function hideGlobalLoader() {
  const loader = document.querySelector('.global-loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}

export function setupModalCloseHandlers(modal, onClose) {
  const closeBtn = modal.querySelector('.modal-close-btn');

  function closeModal() {
    modal.remove();
    if (typeof onClose === 'function') {
      onClose(); // включаем кнопку обратно
    }
    document.removeEventListener('keydown', closeOnEsc);
    modal.removeEventListener('click', closeOnBackdropClick);
  }

  closeBtn.addEventListener('click', closeModal);

  const closeOnEsc = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };
  document.addEventListener('keydown', closeOnEsc);

  const closeOnBackdropClick = event => {
    if (event.target === modal) {
      closeModal();
    }
  };
  modal.addEventListener('click', closeOnBackdropClick);
}

function renderArtistContent(modal, artist, albums) {
  const content = modal.querySelector('.artists-modal-content');

  content.innerHTML = `
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <svg class="SVG-icon"
              width="24" height="16">
              <use href="${sprite}#icon-clouse"></use>
            </svg></button>
            </span>
            <h2 class="m-a-name">${artist.strArtist}</h2>
            <div class="modal-wraper">
            <img src="${artist.strArtistThumb}" alt="${
    artist.strArtist
  }" class="m-a-img" loading="lazy">
            <div class="desc-container">
            <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Years active</p>
                    <p class="m-a-info">${artist.intFormedYear} - ${
    artist.intDiedYear || 'Present'
  }</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Sex</p>
                    <p class="m-a-info">${artist.strGender}</p>
                </div>
                </div>
                <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Members</p>
                    <p class="m-a-info">${artist.intMembers}</p>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Country</p>
                    <p class="m-a-info">${artist.strCountry}</p>
                </div>
                </div>
                <div class="desc-box">
                    <p class="m-a-topic">Biography</p>
                    <p class="m-a-info-biography">${artist.strBiographyEN}</p>
                </div>
                <div class="genres-container">
                    <p class="m-a-genres-container">${artist.genres
                      .map(genre => `<span class="m-a-genre">${genre}</span>`)
                      .join('')}</p>
                </div>
            </div>
            </div>
             <p class="m-a-albums-topic">Albums</p>
            <ul class="m-a-albums">
            ${albums
              .map(
                album => `
                <li class="m-a-album-item">
                <span class="m-a-album-name">${album.strAlbum}</span>
                <ul class="m-a-track-names">
                   <div class="info-container"><p class="m-a-track-title">Track</p><p class="m-a-time-title">Time</p><p class="m-a-link-title">Link</p></div>
                ${album.tracks
                  .map(
                    track => `
                 
                        <div class="m-a-track-row">
                            <span class="m-a-track-name">${
                              track.strTrack
                            }</span>
                            <span class="m-a-track-duration">${formattedDuration(
                              track.intDuration
                            )}</span>
                            <a class="m-a-track-link" href="${
                              track.strTrackThumb || '#'
                            }"  target="_blank"><svg class="SVG-icon"
              width="24" height="16">
              <use href="${sprite}#icon-youtube"></use>
            </svg></a>
                        </div>`
                  )
                  .join('')}
                </ul>
                </li>`
              )
              .join('')}
            </ul>
    `;
  setupModalCloseHandlers(modal);
}
