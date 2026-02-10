// Swiper
import Swiper from 'swiper';
import 'swiper/css';

const API_URL = 'https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1';

const swiperWrapper = document.querySelector('.swiper-wrapper');
const prevBtn = document.querySelector('.prev-arrow');
const nextBtn = document.querySelector('.next-arrow');

const dotFirst = document.querySelector('.dot-first');
const dotMiddle = document.querySelector('.dot-middle');
const dotLast = document.querySelector('.dot-last');

/*  ЗАВАНТАЖЕННЯ ВІДГУКІВ */
async function loadFeedbacks() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      console.error(`Помилка HTTP: ${response.status}`);
      return;
    }

    const data = await response.json();
    const feedbacks = Array.isArray(data.data) ? data.data.slice(0, 10) : [];

    if (!feedbacks.length) {
      console.warn('Немає відгуків для відображення.');
      swiperWrapper.innerHTML =
        '<p style="color:#fff;text-align:center;">Відгуків поки немає.</p>';
      return;
    }

    createSlides(feedbacks);
    initSwiper(feedbacks.length);
  } catch (error) {
    console.error('Помилка при завантаженні відгуків:', error);
  }
}

/*  СТВОРЕННЯ СЛАЙДІВ */
function createSlides(feedbacks) {
  const slidesMarkup = feedbacks
    .map(f => {
      const rating = Math.round(f.rating);
      return `
        <div class="swiper-slide feedback-content">
          <div class="stars-rating" data-score="${rating}"></div>
          <blockquote class="feedback-quote">"${f.descr}"</blockquote>
          <div class="feedback-author">${f.name}</div>
        </div>
      `;
    })
    .join('');

  swiperWrapper.innerHTML = slidesMarkup;
  initStarRatings();
}

/* ІНІЦІАЛІЗАЦІЯ ЗІРОЧОК */
function initStarRatings() {
  $('.stars-rating').each(function () {
    const score = $(this).data('score');
    $(this).raty({
      score: score,
      readOnly: true,
      starType: 'i',
      hints: ['', '', '', '', ''],
      starOn: '★',
      starOff: '☆',
    });
  });
}

/* SWIPER */
function initSwiper(totalSlides) {
  const swiper = new Swiper('.feedback-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: { nextEl: nextBtn, prevEl: prevBtn },
    on: {
      slideChange: function () {
        updatePagination(this.activeIndex, totalSlides);
      },
    },
  });

  updatePagination(0, totalSlides);

  dotFirst.addEventListener('click', () => swiper.slideTo(0));
  dotMiddle.addEventListener('click', () =>
    swiper.slideTo(Math.floor(totalSlides / 2))
  );
  dotLast.addEventListener('click', () => swiper.slideTo(totalSlides - 1));
}

/* КАСТОМНА ПАГІНАЦІЯ */
function updatePagination(activeIndex, total) {
  dotFirst.classList.remove('active');
  dotMiddle.classList.remove('active');
  dotLast.classList.remove('active');

  if (activeIndex === 0) dotFirst.classList.add('active');
  else if (activeIndex === total - 1) dotLast.classList.add('active');
  else dotMiddle.classList.add('active');
}

/* ЗАПУСК */
loadFeedbacks();
