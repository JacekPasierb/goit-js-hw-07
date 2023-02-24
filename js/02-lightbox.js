import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");

for (const objectGallery of galleryItems){

    let a = document.createElement("a");
    a.classList.add("gallery__item");
    a.href = objectGallery.original;
    gallery.append(a);

    let img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = objectGallery.preview;
    img.alt = objectGallery.description;
    a.append(img);

}


const options = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};
 gallery = new SimpleLightbox(".gallery a",options);