import {
  inputPictures,
  errorParams,
  showLoading,
  hideLoading,
} from './js/render-functions';
import { fetchParams } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Створення екземпляра SimpleLightbox в глобальній області
let lightbox = new SimpleLightbox('.gallery a');

const formSearch = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery-container');
const loading = document.querySelector('.loading');

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
      lightbox.refresh(); // Оновлення екземпляра SimpleLightbox після вставки нових елементів
    })
    .catch(errorParams)
    .finally(() => {
      hideLoading();
      form.reset();
    });
}
