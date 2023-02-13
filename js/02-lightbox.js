import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = galleryMarkup;
const lightbox = new SimpleLightbox(".gallery a", {
     overlay: true,
     captions: true,
     captionSelector: 'img',
     captionsData: 'alt',
     captionPosition: 'bottom',
     captionDelay: 250,
    });

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `
          <a class="gallery__item" href=${item.original}>
          <img class="gallery__image" src=${item.preview} alt=${item.description} />
        </a>
        `
    )
    .join("");
}
