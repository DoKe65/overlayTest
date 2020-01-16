const overlay = document.createElement("div");
const bookTitle = document.createElement("h1");
const lightbox = document.createElement("div");
const iFrame = document.createElement("iframe");
const button = document.getElementById("btnVorschau");
const closeLightbox = document.createElement("button");


btnVorschau.addEventListener("click", (e) => {

  overlay.setAttribute("id", "overlay");
  overlay.style.display = "block";

  lightbox.setAttribute("id", "lightbox");

  iFrame.setAttribute("src", "https://kursunterlagen.ch/leseproben/ECDL_BB_GIMP28/LP_ECDL_BB_GIMP28.html");
  iFrame.setAttribute("allowfullscreen", "true");

  bookTitle.classList.add("book_title");
  bookTitle.innerHTML = "ECDL Bildbearbeitung mit GIMP 2.8";

  closeLightbox.setAttribute("id", "closeLightbox");
  closeLightbox.innerHTML = "X";
  closeLightbox.addEventListener("click", (e) => {
    document.body.removeChild(overlay);
  });

  lightbox.appendChild(bookTitle);
  lightbox.appendChild(closeLightbox);
  lightbox.appendChild(iFrame);
  overlay.appendChild(lightbox);
  document.body.appendChild(overlay);

});
