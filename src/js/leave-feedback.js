import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Raty from 'raty-js/src/raty.js';
import { setupModalCloseHandlers, createModal } from './modal.js';

const leaveFeedbackBtn = document.querySelector('.leave-feedback-btn');
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

async function openFeedbackModal() {
  const modal = createModal('feedback');
  document.body.appendChild(modal);
  setupModalCloseHandlers(modal);

  try {
    renderModalContent(modal);
  } catch (error) {
    console.error('Error opening feedback modal:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to open feedback form.',
    });
  }
}

function renderModalContent(modal) {
  const content = modal.querySelector('.feedback-modal-content');
  content.innerHTML = `
          <div class="feedback-form">
          <span class="modal-close-btn-wraper">
            <button type="button" class="modal-close-btn" aria-label="Close"> <img src="/img/close-icon.svg" alt="Close menu" class="close-modal-btn"></button> 
        </span>
              <h2>Submit Feedback</h2>
              <input type="text" id="feedback-name" placeholder="Emily">
              <textarea id="feedback-message" placeholder="Type your message..."></textarea>
               <div class="rating" data-rating="0"></div>
              <button id="submit-feedback">Submit Feedback</button>
              </div>
              `;
}

leaveFeedbackBtn.addEventListener('click', openFeedbackModal);
