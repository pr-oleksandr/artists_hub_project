import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
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
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
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

export function setupModalCloseHandlers(modal) {
  const closeBtn = modal.querySelector('.modal-close-btn');
  closeBtn.addEventListener('click', () => {
    modal.remove();
  });

  const closeOnEsc = event => {
    if (event.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', closeOnEsc);
    }
  };
  document.addEventListener('keydown', closeOnEsc);

  const closeOnBackdropClick = event => {
    if (event.target === modal) {
      modal.remove();
      modal.removeEventListener('click', closeOnBackdropClick);
      document.removeEventListener('keydown', closeOnEsc);
    }
  };
  modal.addEventListener('click', closeOnBackdropClick);
}

function renderArtistContent(modal, artist, albums) {
  const content = modal.querySelector('.artists-modal-content');

  content.innerHTML = `
            <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
            </span>
            <h2 class="m-a-name">${artist.strArtist}</h2>
            <div class="modal-wraper">
            <img src="${artist.strArtistThumb}" alt="${artist.strArtist}" class="m-a-img" loading="lazy">
            <div class="desc-container">
            <div class="info-wraper">
                <div class="desc-box">
                    <p class="m-a-topic">Years active</p>
                    <p class="m-a-info">${artist.intFormedYear} - ${artist.intDiedYear || 'Present'}</p>
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
                    <p class="m-a-genres-container">${artist.genres.map(genre => `<span class="m-a-genre">${genre}</span>`).join('')}</p>
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
                            <span class="m-a-track-name">${track.strTrack}</span>
                            <span class="m-a-track-duration">${formattedDuration(track.intDuration)}</span>
                            <a class="m-a-track-link"
                            href="${track.movie && track.movie.trim() ? track.movie : '#'}"  
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Youtube link">
                            ${
                              track.movie && track.movie.trim()
                                ? `
          <svg class="youtube-logo" width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.91 31.91 0 0 0 0 12.005a31.91 31.91 0 0 0 .502 5.819 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.91 31.91 0 0 0 24 12.005a31.91 31.91 0 0 0-.502-5.819zM9.75 15.566V8.434L15.75 12l-6 3.566z"/>
          </svg>
        `
                                : ''
                            }
                            </a>
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
