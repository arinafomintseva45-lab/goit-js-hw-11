import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
  const markup = images
    .map(
      (img) => `
      <li>
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <p>Likes: ${img.likes} | Views: ${img.views} | Comments: ${img.comments} | Downloads: ${img.downloads}</p>
      </li>
    `
    )
    .join("");
  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  document.querySelector(".loader").style.display = "block";
}

export function hideLoader() {
  document.querySelector(".loader").style.display = "none"; }