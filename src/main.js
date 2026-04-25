import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');

const errorToastOptions = {
  backgroundColor: '#ef4040',
  maxWidth: '432px',
  position: 'topRight',
  icon: 'fa-regular fa-times-circle',
  iconColor: '#fafafb',
  messageColor: '#fafafb',
  close: false,
  closeOnClick: true,
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements['search-text'].value.trim();

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          ...errorToastOptions,
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        message: `Something went wrong: ${error.message}`,
        ...errorToastOptions,
      });
    });
});
