import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryElement = document.querySelector(".gallery")
const galleryItemsToString = galleryItems.reduce((acc, {preview, original, description}) => {
    return acc+=`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img loading="lazy" class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
        />
   </a>
</li>`
}, "")

galleryElement.insertAdjacentHTML("beforeend", galleryItemsToString)

console.dir(SimpleLightbox)
let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt",  captionPosition:"bottom", captionDelay: 250,  scrollZoom: false});

gallery.on('shown.simplelightbox', function (event) {
  event.preventDefault();
  console.log("Everything works fine")
});

gallery.on('error.simplelightbox', function (event) {
	console.log(event, "Something wrong"); 
});
console.log(galleryItems);

