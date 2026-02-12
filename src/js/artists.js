import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { openArtistModal } from './modal.js';
import { showLoader, hideLoader } from './loader.js';
import sprite from '../img/icon-sprite.svg';
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

const artistsList = document.querySelector('.artists-list');
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

  closeFiltersContainer();
  closeDropdowns();
  loadArtists(true);
});
sortList.addEventListener('click', e => {
  const value = e.target.dataset.value;

  filters.sortName = value;
  currentPage = 1;

  closeFiltersContainer();
  closeDropdowns();
  loadArtists(true);
});
function closeDropdowns() {
  allDropdowns.forEach(crntDropdown => crntDropdown.classList.remove('open'));
}
function closeFiltersContainer() {
  filtersContainer.classList.remove('is-open');
}

function applySearch() {
  filters.name = searchInput.value.trim() || null;
  currentPage = 1;

  closeFiltersContainer();
  loadArtists(true);
}
// input
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') applySearch();
});
searchBtn.addEventListener('click', applySearch);

function resetSearch() {
  filters.genre = null;
  filters.sortName = null;
  filters.name = null;

  searchInput.value = '';
  currentPage = 1;

  closeFiltersContainer();
  closeDropdowns();
  loadArtists(true);
  container.classList.remove('is-hidden');
}
// reset;
resetBtn.addEventListener('click', resetSearch);

loadArtists();

// модалка
// artistsList.addEventListener('click', function (modalParameter) {
//   const btn = modalParameter.target.closest('.learn-more-btn');
//   if (!btn) return;

//   const artistId = btn.dataset.id;
//   openArtistModal(artistId);
// });
artistsList.addEventListener('click', function (event) {
  // Открытие модалки
  const modalBtn = event.target.closest('.learn-more-btn');
  if (modalBtn) {
    const artistId = modalBtn.dataset.id;
    openArtistModal(artistId);
    return;
  }

  // Кнопка Reset в li "No results"
  const resetBtn = event.target.closest('.err-reset-btn');
  if (resetBtn) {
    resetSearch();
  }
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

// pagination
let pagination = null;

const container = document.getElementById('pagination');
function initPagination(totalItems) {
  pagination = new Pagination(container, {
    totalItems: totalItems,
    itemsPerPage: limit,
    visiblePages: 5,
    page: currentPage,
    centerAlign: true,
    usageStatistics: false,
  });

  pagination.on('afterMove', event => {
    currentPage = event.page;
    loadArtists();
  });
}

// renderArtist рендер карточек
function renderArtists(artists) {
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
                <button type="button" class="learn-more-btn" data-id="${_id}">Learn more <svg class="SVG-icon" width="24" height="16">
    <use href="${sprite}#icon-icon-lr-more"></use>
  </svg></button>
            </div>
        </li>
    `
    )
    .join('');

  artistsList.innerHTML = markup;
}

// завантаження карточек

async function loadArtists(isFilterChange = false) {
  try {
    showLoader(); // Показуємо лоадер перед початком завантаження даних

    const data = await fetchArtists(currentPage);
    console.log('🚀 ~ loadArtists ~ data:', data);

    handleArtistsResponse(data, isFilterChange);

    // if (!data.artists || data.artists.length === 0) {
    //   filtersContainer.classList.toggle('is-open');

    //   artistsList.innerHTML = `
    //   <li class="no-results">
    //   <svg class="SVG-icon" width="40" height="40">
    //                 <use href="${sprite}#error-icon"></use>
    //               </svg>
    //     <span class="search-err-main">Silence on the stage...</span>
    //     <div>
    //     <p class="search-err-info">Looks like no artists match your filters.</p>
    //     <p class="search-err-info">Try changing them or hit “Reset Filters” to bring back the beat.</p>
    //     </div>
    //     <button class="err-reset-btn" type="button">Reset filters</button>
    //   </li> `;
    //   const errResetBtn = document.querySelector('.err-reset-btn');
    //   errResetBtn.addEventListener('click', resetSearch);
    //   return;
    // }
    // renderArtists(data.artists);

    // Ховаємо лодер колидосягли останньої сторінки
  } catch (error) {
    console.log('🚀 ~ loadArtists ~ error:', error);
    iziToast.error({
      position: 'topRight',
      message:
        'Welcome to Ukraine! Blackout again? Or the server is resting...',
    });
  } finally {
    hideLoader(); // Ховаємо лоадер списку артистів
  }
}

function handleArtistsResponse(data, isFilterChange) {
  if (!data.artists || data.artists.length === 0) {
    renderNoResults();
    container.classList.add('is-hidden');
    return;
  }

  renderArtists(data.artists);

  if (!pagination) {
    initPagination(data.totalArtists);
  }

  if (isFilterChange && pagination) {
    pagination.reset(data.total);
    // pagination.movePageTo(1);
  }
}

function renderNoResults() {
  artistsList.innerHTML = ` 
    <li class="no-results">
      <svg class="SVG-icon" width="40" height="40">
        <use href="${sprite}#error-icon"></use>
      </svg>
      <span class="search-err-main">Silence on the stage...</span>
      <div>
        <p class="search-err-info">Looks like no artists match your filters.</p>
        <p class="search-err-info">Try changing them or hit “Reset Filters” to bring back the beat.</p>
      </div>
      <button class="err-reset-btn" type="button">Reset filters</button>
    </li>`;
}
