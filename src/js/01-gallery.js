import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const getGalleryMarkup = imagesArr => {
  const galleryMarkup = imagesArr
    .map(({ preview, original, description } = {}) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
        </div>`;
    })
    .join('');
  return galleryMarkup;
};

const renderGallery = () =>
  galleryContainer.insertAdjacentHTML('beforeend', getGalleryMarkup(galleryItems));

const galleryItemClickHandler = event => {
  event.preventDefault();
  const currentItem = event.target;
  if (currentItem.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${currentItem.dataset.source}" width="800" height="600">`
  );
    instance.show();
    document.addEventListener('keydown', escapeKeyPushHandler);

    function escapeKeyPushHandler(event) {
        if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', escapeKeyPushHandler);
        }
    }
};

renderGallery();
galleryContainer.addEventListener('click', galleryItemClickHandler);
