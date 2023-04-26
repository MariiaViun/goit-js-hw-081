// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
(function () {
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      alt="${description}"/>
  </a>
</li>`);
    
gallery.insertAdjacentHTML('beforeend', markup.join(''))
})()

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt",
    animationSpeed: 250
  });