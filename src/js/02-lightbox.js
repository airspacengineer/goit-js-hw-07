import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const getGalleryMarkup = imagesArr => {
  const galleryMarkup = imagesArr
    .map(({ preview, original, description } = {}) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
  return galleryMarkup;
};

const renderGallery = () =>
    galleryContainer.insertAdjacentHTML('beforeend', getGalleryMarkup(galleryItems));
  
renderGallery();

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
