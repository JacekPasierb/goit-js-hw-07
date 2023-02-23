import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const og of galleryItems) {
    let div = document.createElement("div");
    div.classList.add("gallery__item");
    gallery.append(div);

    let a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = og.original;
    div.append(a);

    let img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = og.preview;
    img.dataset.source = og.original;
    img.alt = og.description;
    a.append(img);

    gallery.querySelector("div.gallery__item").onclick = () => {
        preventDefault();
      basicLightbox
        .create(
          `
		<img width="1400" height="900" src="${og.original}">
	`
        )
        .show();
    };
}



