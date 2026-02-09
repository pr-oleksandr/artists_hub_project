import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { openArtistModal } from './modal.js';
import { showLoader, hideLoader } from './loader.js';
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';
const artistsList = document.querySelector('.artists-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
let currentPage = 1;
const limit = 8;

loadArtists();
loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  loadArtists();
});

artistsList.addEventListener('click', function (modalParameter) {
  const btn = modalParameter.target.closest('.learn-more-btn');
  if (!btn) return;

  const artistId = btn.dataset.id;
  openArtistModal(artistId);
});

async function fetchArtists(page) {
  const response = await axios.get('/artists', {
    params: {
      page: page,
      limit: limit,
    },
  });
  return response.data;
}
// Обрізка біографіі
function formatBio(text, maxWords = 20) {
  if (!text) return '';
  const firstDotIndex = text.indexOf('.');
  const words = text.split(' ');

  if (firstDotIndex !== -1) {
    const textBeforeDot = text.substring(0, firstDotIndex + 1);
    const wordsBeforeDot = textBeforeDot.split(' ').length;
    if (wordsBeforeDot <= maxWords) return textBeforeDot;
  }

  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
}
function renderArtists(artists, shouldAppend = false) {
  const markup = artists
    .map(
      ({ _id, strArtist, strArtistThumb, genres, strBiographyEN }) => `
        <li class="artist-item">
            <img class="artist-img" src="${strArtistThumb}" alt="${strArtist}">
            <div class="artist-info">
                <ul class="genres">${genres.map(genre => `<li>${genre}</li>`).join('')}</ul> 
                <h3 >${strArtist}</h3>
                <p >${formatBio(strBiographyEN, 20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${_id}">Learn more<img src="./img/caret-right.svg"
        alt="button load more"></button>
            </div>
        </li>
    `
    )
    .join('');

  if (shouldAppend) {
    artistsList.insertAdjacentHTML('beforeend', markup);
  } else {
    artistsList.innerHTML = markup;
  }
}
async function loadArtists() {
  try {
    showLoader(); // Показуємо лоадер перед початком завантаження даних

    loadMoreBtn.classList.add('is-hidden'); //Ховаємо поки поки йде завантаження нових

    const data = await fetchArtists(currentPage);

    renderArtists(data.artists, currentPage > 1);

    // Ховаємо лодер колидосягли останньої сторінки
    if (data.page >= data.totalPages) {
      loadMoreBtn.classList.add('is-hidden');
      if (currentPage > 1) {
        iziToast.info({
          position: 'topRight',
          message: 'Ouch! That is all, folks! No more artists to show.',
        });
      }
      // Показуємо лодер якщо є сторінки
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message:
        'Welcome to Ukraine! Blackout again? Or the server is resting...',
    });
  } finally {
    hideLoader(); // Ховаємо лоадер списку артистів
  }
}
