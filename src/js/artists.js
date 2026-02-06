import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { openArtistModal } from './modal.js';
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';
const artistsList = document.querySelector('.artists-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loader = document.querySelector('.loader');
let currentPage = 1;
const limit = 8;

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
      sortName: 'asc',
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
            <img src="${strArtistThumb}" alt="${strArtist}" class="artist-img">
            <div class="artist-info">
                <p class="genres">${genres.join(', ')}</p>
                <h3 class="artist-name">${strArtist}</h3>
                <p class="artist-bio">${formatBio(strBiographyEN, 20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${_id}">Learn more</button>
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
    loader.classList.remove('is-hidden'); // Показуємо лоадер перед початком завантаження даних

    loadMoreBtn.classList.add('is-hidden'); //Ховаємо поки поки йде завантаження нових

    const data = await fetchArtists(currentPage);

    renderArtists(data.artists, currentPage > 1);

    // Ховаємо лодер колидосягли останньої сторінки
    if (data.page >= data.totalPages) {
      loadMoreBtn.classList.add('is-hidden');
      if (currentPage > 1) {
        iziToast.info({ message: 'Оппа! Це кінесь, більше нікого немає.' });
      }
      // Показуємо лодер якщо є сторінки
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    iziToast.error({ message: 'Лишенько, щось пішло не так' });
  } finally {
    loader.classList.add('is-hidden'); // Ховаємо лоадер ГАЛЕРЕЇ
  }
}

loadArtists();

loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  loadArtists();
});
