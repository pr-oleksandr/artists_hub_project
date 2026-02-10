import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';
import Raty from 'raty-js/src/raty.js';

let swiper;

async function fetchFeedbacks() {
  try {
    const response = await axios.get('/feedbacks', {
      params: {
        page: 1,
        limit: 10,
      },
    });
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load feedbacks.',
    });
    return [];
  }
}

function renderFeedbacks(feedbacks) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';

  feedbacks.forEach(feedback => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
            <div class="feedback-card">
            <div class="rating" data-rating="${feedback.rating || 0}"></div>
                <p class="feedback-message">"${feedback.descr}"</p>
                <p class="feedback-author">${feedback.name}</p>
            </div>
        `;
    swiperWrapper.appendChild(slide);
  });
  initRatings();
}

function initRatings() {
  const ratingElements = document.querySelectorAll('.rating');

  ratingElements.forEach(el => {
    const ratingValue = parseFloat(el.dataset.rating) || 0;

    const ratyInstance = new Raty(el, {
      readOnly: true,
      score: ratingValue,
      number: 5,
      path: 'raty-images/',
      starType: 'img',
    });

    ratyInstance.init();
  });
}

function initSwiper() {
  if (swiper) swiper.destroy();

  swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

async function loadAndRenderFeedbacks() {
  const feedbacks = await fetchFeedbacks();
  renderFeedbacks(feedbacks);
  initSwiper();
}

document.addEventListener('DOMContentLoaded', loadAndRenderFeedbacks);
