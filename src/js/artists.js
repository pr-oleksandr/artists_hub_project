import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { openArtistModal } from './modal.js';
import { showLoader, hideLoader } from './loader.js';
import caretIcon from '../img/caret-right.svg';
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

const artistsList = document.querySelector('.artists-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
let currentPage = 1;
const limit = 8;
const filters = {
  genre: null,
  sortName: null,
  name: null,
};

const resetBtn = document.querySelector('.reset-btn');

const allDropdowns = document.querySelectorAll('.dropdown');

const genreList = document.querySelector('.genre-list');
const sortList = document.querySelector('.sort-list');

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const mainDropdownBtn = document.querySelector('.main-dropdown-btn');
const filtersContainer = document.querySelector('.filters-container');

async function fetchGenres() {
  const { data } = await axios.get('/genres');
  return data;
}

async function loadGenres() {
  const genres = await fetchGenres();

  const markup = genres
    .map(g => `<li data-value="${g.genre}">${g.genre}</li>`)
    .join('');

  genreList.insertAdjacentHTML('beforeend', markup);
}

loadGenres();

mainDropdownBtn.addEventListener('click', e => {
  filtersContainer.classList.toggle('is-open');
});

allDropdowns.forEach(crntDropdown => {
  const openButton = crntDropdown.querySelector('.dropdown-btn');

  openButton.addEventListener('click', () => {
    allDropdowns.forEach(othDropdown => {
      if (othDropdown !== crntDropdown) othDropdown.classList.remove('open');
    });

    crntDropdown.classList.toggle('open');
  });
});

genreList.addEventListener('click', e => {
  filters.genre = e.target.dataset.value || null;
  currentPage = 1;

  closeDropdowns();
  loadArtists();
});
sortList.addEventListener('click', e => {
  const value = e.target.dataset.value;

  filters.sortName = value;
  currentPage = 1;

  closeDropdowns();
  loadArtists();
});
function closeDropdowns() {
  allDropdowns.forEach(d => d.classList.remove('open'));
}

function applySearch() {
  filters.name = searchInput.value.trim() || null;
  currentPage = 1;
  loadArtists();
}
// input
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') applySearch();
});
searchBtn.addEventListener('click', applySearch);

// reset;
resetBtn.addEventListener('click', () => {
  filters.genre = null;
  filters.sortName = null;
  filters.name = null;

  searchInput.value = '';
  currentPage = 1;

  closeDropdowns();
  loadArtists();
});

loadArtists();
// пагинация
loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  loadArtists();
});
// модалка
artistsList.addEventListener('click', function (modalParameter) {
  const btn = modalParameter.target.closest('.learn-more-btn');
  if (!btn) return;

  const artistId = btn.dataset.id;
  openArtistModal(artistId);
});
// fetchArtists
async function fetchArtists(page) {
  const response = await axios.get('/artists', {
    params: {
      page: page,
      limit: limit,
      genre: filters.genre || null,
      sortName: filters.sortName || null,
      name: filters.name || null,
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

// renderArtist рендер карточек
function renderArtists(artists, shouldAppend = false) {
  const markup = artists
    .map(
      ({ _id, strArtist, strArtistThumb, genres, strBiographyEN }) => `
        <li class="artist-item">
            <img class="artist-img" src="${strArtistThumb}" alt="${strArtist}">
            <div class="artist-info">
                <ul class="genres">${genres
                  .map(genre => `<li>${genre}</li>`)
                  .join('')}</ul> 
                <h3 >${strArtist}</h3>
                <p >${formatBio(strBiographyEN, 20)}</p> 
                <button type="button" class="learn-more-btn" data-id="${_id}">Learn more<img src="${caretIcon}"
        ></button>
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

// завантаження карточек

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
