import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import api from './js/pixabay-api';
import renderItems from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

let photos = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const messageStyles = {
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
  // gallery.innerHTML = `<li class="loadText"><p>Loading images, please wait...</p></li>`;
  gallery.innerHTML = `<li class="loadText"><span class="loader"></span></li>`;

  const inputValue = e.target.elements.search.value.trim();
  inputValue.split(' ').join('+');

  // TODO: find a way to make it better
  setTimeout(() => {
    api(inputValue)
      .then(data => {
        renderItems(data);
        photos.refresh();

        if (data.total === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            ...messageStyles,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, 3000);

  photos.on('show.simplelightbox', () => {
    console.log('SimpleLightbox opened');
  });
});
