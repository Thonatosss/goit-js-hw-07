import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.innerHTML = galleryMarkup;

gallery.addEventListener("click", (evt) => {
  const link = evt.target.getAttribute("data-source");
  evt.preventDefault();
  const instance = basicLightbox.create(`
  <img src="${link}" width="800" height="600">
`);
  instance.show();
});

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
