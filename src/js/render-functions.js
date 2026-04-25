import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery(images) {
  const markup = images
    .map(
      item => `<li class="gallery-list-item">
      <a href="${item.largeImageURL}">
        <img src="${item.webformatURL}" alt="${item.tags}" />
      </a>
      <table>
        <tr>
          <th>Likes</th>
          <th>Views</th>
          <th>Comments</th>
          <th>Downloads</th>
        </tr>
        <tr>
          <td>${item.likes}</td>
          <td>${item.views}</td>
          <td>${item.comments}</td>
          <td>${item.downloads}</td>
        </tr>
      </table>
    </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.add('is-visible');
}

function hideLoader() {
  loader.classList.remove('is-visible');
}

export { createGallery, clearGallery, showLoader, hideLoader };
