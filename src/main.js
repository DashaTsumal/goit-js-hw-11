import {
  inputPictures,
  errorParams,
  showLoading,
  hideLoading,
} from './js/render-functions';
import { fetchParams } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-container');
const loading = document.querySelector('.loading');

let lightbox;  // Глобальний екземпляр SimpleLightbox

formSearch.addEventListener('submit', getPictureByValue);

function getPictureByValue(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const inputValue = form.elements.insert.value.toLowerCase().trim();

  if (inputValue === '') {
    hideLoading();
    return errorParams();
  }

  showLoading();
  gallery.innerHTML = '';

  fetchParams(inputValue)
    .then(pictures => {
      inputPictures(pictures);
      
      // Ініціалізація або оновлення екземпляра SimpleLightbox
      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery-container a');
      } else {
        lightbox.refresh();
      }
    })
    .catch(errorParams)
    .finally(() => {
      hideLoading();
      form.reset();
    });
}
