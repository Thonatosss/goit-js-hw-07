import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.innerHTML = galleryMarkup;

// gallery.addEventListener("click", (evt) => {
//   const link = evt.target.getAttribute("data-source");
//   evt.preventDefault();

  
// });
gallery.addEventListener('click', () => {
    const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg" width="800" height="600">
`);
  instance.show();
});
function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class = "gallery__item">
        <a class = "gallery__link" href = "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">
        <img class = "gallery__image" src = "${item.preview}" data-source = "${item.original}" alt = "${item.description}" />
        </a>
        </div>`
    )
    .join();
}
