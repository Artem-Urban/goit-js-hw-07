import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryConteiner = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);


galleryConteiner.insertAdjacentHTML('beforeend', picturesMarkup);


function createPicturesMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
                    <div class="gallery__item">
                    <a class="gallery__link"
                    href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
        })
        .join('');
}



var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,

})










