// Aus Produktseite des Shops:
// const btnVorschau = document.getElementById("btnVorschau");
// Im Produkt muss für den Button die entsprechenden data- Attributte
// gesetzt werden, z. B. data-url="kursunterlagen/leseproben/LP_ECDL_BB"
// und data-title="ECDL Bidlbearbeitung mit GIMP 2.8"


// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const lpUrl = urlParams.get("lpUrl");
// const lpTitle = urlParams.get("lpTitle");


const lpUrl = "https://kursunterlagen.ch/leseproben/ECDL_BB_GIMP28/";
const lpTitle = "Leseprobe ECDL Bildbearbeitung GIMP 2.8";


const overlay = document.createElement("div");
const bookTitle = document.createElement("h1");
const lightbox = document.createElement("div");
const iFrame = document.createElement("iframe");
const closeLightbox = document.createElement("button");

window.open("", "_self", "width=200,height=100");
function showLightbox(url, title) {



    overlay.setAttribute("id", "overlay");
    overlay.style.display = "block";

    lightbox.setAttribute("id", "lightbox");

    iFrame.setAttribute("src", url);
    iFrame.setAttribute("allowfullscreen", "true");

    bookTitle.classList.add("book_title");
    bookTitle.innerHTML = title;

    closeLightbox.setAttribute("id", "closeLightbox");
    closeLightbox.innerHTML = "x";
    closeLightbox.addEventListener("click", (e) => {
      document.body.removeChild(overlay);
      window.close();
    });

    lightbox.appendChild(bookTitle);
    lightbox.appendChild(closeLightbox);
    lightbox.appendChild(iFrame);
    overlay.appendChild(lightbox);
    document.body.appendChild(overlay);


}

showLightbox(lpUrl, lpTitle);

// btnVorschau.addEventListener("click", (e) => {
//
//   overlay.setAttribute("id", "overlay");
//   overlay.style.display = "block";
//
//   lightbox.setAttribute("id", "lightbox");
//
//   iFrame.setAttribute("src", "https://kursunterlagen.ch/leseproben/ECDL_BB_GIMP28/");
//   iFrame.setAttribute("allowfullscreen", "true");
//
//   bookTitle.classList.add("book_title");
//   bookTitle.innerHTML = "ECDL Bildbearbeitung mit GIMP 2.8";
//
//   closeLightbox.setAttribute("id", "closeLightbox");
//   closeLightbox.innerHTML = "X";
//   closeLightbox.addEventListener("click", (e) => {
//     document.body.removeChild(overlay);
//   });
//
//   lightbox.appendChild(bookTitle);
//   lightbox.appendChild(closeLightbox);
//   lightbox.appendChild(iFrame);
//   overlay.appendChild(lightbox);
//   document.body.appendChild(overlay);
//
// });
