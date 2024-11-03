import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import api from './js/pixabay-api';

const form = document.querySelector('.form');
const input = document.querySelector('#search');
const inputBtn = document.querySelector('#searchBtn');

form.addEventListener('submit', e => {
  e.preventDefault();

  //   console.log(e.target.elements.search.value);

  const inputValue = e.target.elements.search.value.trim();
  inputValue.split(' ').join('+');

  api(inputValue);

  //   if (fetchApi.total === 0) {
  //     iziToast.error({
  //       message:
  //         'Sorry, there are no images matching your search query. Please try again!',
  //     });
  //   }
});
