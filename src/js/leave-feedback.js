import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Raty from 'raty-js/src/raty.js';
import { setupModalCloseHandlers, createModal } from './modal.js';

const leaveFeedbackBtn = document.querySelector('.leave-feedback-btn');
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

async function openFeedbackModal() {
  leaveFeedbackBtn.disabled = true;
  const modal = createModal('feedback');
  document.body.appendChild(modal);

  try {
    renderModalContent(modal);
    setupModalCloseHandlers(modal, () => {
      leaveFeedbackBtn.disabled = false;
    });
  } catch (error) {
    console.error('Error opening feedback modal:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to open feedback form.',
    });
    leaveFeedbackBtn.disabled = false;
  }
}

function renderModalContent(modal) {
  const content = modal.querySelector('.feedback-modal-content');
  content.innerHTML = `
          <form class="feedback-form">
          <span class="fb-modal-close-btn-wraper">
            <button type="button" class="fb-modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
        </span>
              <h2 class="form-title">Submit Feedback</h2>
              
              <div class="form-container">
                <div class="feedback-container">
                  <label for="feedback-name">Name</label>
                  <input type="text" id="feedback-name" placeholder="Emily">
                </div>
                
                <div class="feedback-container">
                  <label for="feedback-message">Message</label>
                  <textarea id="feedback-message" placeholder="Type your message..."></textarea>
                </div>
                <div class="rating" id="rating" data-rating="0"></div>
                <button class="form-submit-btn" type="submit" id="submit-feedback" disabled>Submit</button>
              </div>
              </form>
              `;

  const ratingElement = content.querySelector('.rating');
  const raty = new Raty(ratingElement, {
    number: 5,
    score: 0,
    half: true,
    path: 'raty-images/',
    starType: 'img',
    click: function (score) {
      ratingElement.setAttribute('data-rating', score);
      content.querySelector('#submit-feedback').disabled = false;
    },
    hints: ['Bad', 'Lot to Improve', 'Usable', 'Good', 'Gorgeous'],
  });
  raty.init();

  setupFormValidation(content.querySelector('.feedback-form'), modal);
}

function setupFormValidation(form, modal) {
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const name = form.querySelector('#feedback-name').value.trim();
    const descr = form.querySelector('#feedback-message').value.trim();
    const rating = parseFloat(
      form.querySelector('.rating').getAttribute('data-rating')
    );

    let errors = [];

    if (name.length < 2 || name.length > 16) {
      errors.push('Name must be between 2 and 16 characters.');
    }
    if (descr.length < 10 || descr.length > 512) {
      errors.push('Message must be between 10 and 512 characters.');
    }
    if (isNaN(rating) || rating < 1 || rating > 5) {
      errors.push('Rating must be between 1 and 5.');
    }

    if (errors.length > 0) {
      iziToast.error({
        title: 'Validation Error',
        message: errors.join(' '),
      });
      return;
    }

    const feedbackData = { name, descr, rating };
    try {
      const response = await axios.post('/feedbacks', feedbackData);

      iziToast.success({
        title: 'Success',
        message: 'Your feedback has been submitted!',
      });

      modal.remove();
      leaveFeedbackBtn.disabled = false;

      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    } catch (error) {
      console.error(
        'Full error:',
        error.response?.status,
        error.response?.data
      );
      console.error('Error submitting feedback:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to submit feedback. Please try again later.',
      });
    }
  });
}

leaveFeedbackBtn.addEventListener('click', openFeedbackModal);
