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

  try {
    loader.classList.remove('is-hidden');
    const response = await axios.get(`/artists/${artistId}`);
    const albumsResponse = await axios.get(`/artists/${artistId}/albums`);
    const albums = albumsResponse.data.albumsList || [];
    const artist = response.data;
    renderArtistModal(artist, albums);
  } catch (error) {
    console.error('Error fetching artist details:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load artist details.',
    });
  } finally {
    loader.classList.add('is-hidden');
  }
}

function renderArtistModal(artist, albums) {
  const existingModalWindow = document.querySelector('.artist-modal');
  if (existingModalWindow) {
    existingModalWindow.remove();
  }

  const modal = document.createElement('div');
  modal.className = 'artist-modal';

  modal.innerHTML = `
        <div class="modal-content">
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
                            <a class="m-a-track-link" href="${track.strTrackThumb || '#'}"  target="_blank">Y</a>
                        </div>`
                  )
                  .join('')}
                </ul>
                </li>`
              )
              .join('')}
            </ul>
         </div>
    `;

  document.body.appendChild(modal);

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
}
