import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance = ``;

gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  document.addEventListener("keydown", onEscClick);
  const link = evt.target.getAttribute("data-source");
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  createModalWindow(link);
}

function onEscClick(evt) {
  if (evt.key !== "Escape") {
    return;
  }
  instance.close();
  document.removeEventListener('keydown', onEscClick);
}

function createModalWindow(link) {
  instance = basicLightbox.create(`
  <img src="${link}" width="800" height="600">
`);
  instance.show();
}

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class ="gallery__item">
        <a class = "gallery__link" href ="${item.original}">
        <img class ="gallery__image" src ="${item.preview}" data-source ="${item.original}" alt ="${item.description}" />
        </a>
        </div>`
    )
    .join("");
}
