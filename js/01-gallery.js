import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryConteiner = document.querySelector('.gallery');
const picturesMarkup = createPicturesMarkup(galleryItems);


galleryConteiner.insertAdjacentHTML('beforeend', picturesMarkup);
galleryConteiner.addEventListener('click', onPictureClick);

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

function onPictureClick(e) {
    e.preventDefault();
    const isPicture = e.target.classList.contains('gallery__image');

    if (!isPicture) {
        return;
    }
    const originalImg = e.target.dataset.source;
    modalActive(originalImg);
}

function modalActive(image) {
    const instance = basicLightbox.create(`
<img src="${image}" width="800" height="600" />`);
    instance.show();
    
    window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            instance.close();
        }
    });
}







