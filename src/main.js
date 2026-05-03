import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '';

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
      form.reset();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Something went wrong!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
