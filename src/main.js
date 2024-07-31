// src/js/main.js
import { fetchParams } from './pixabay-api.js';
import { renderGallery, showError, showNoResults } from './render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.querySelector('.search-form').addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.query.value.trim();
  if (searchQuery === '') {
    showError('Please enter a search term.');
    return;
  }

  fetchParams(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        showNoResults();
      } else {
        renderGallery(data.hits);
        const lightbox = new SimpleLightbox('.gallery a');
        lightbox.refresh();
      }
    })
    .catch(error => showError(`Error: ${error.message}`));
});
