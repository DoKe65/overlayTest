
// Hardcoded urls and title texts for testing:
// const lpUrl = "https://kursunterlagen.ch/leseproben/ECDL_BB_GIMP28/";
// const lpTitle = "Leseprobe ECDL Bildbearbeitung GIMP 2.8";

/* auf der Artikel-Seite des Shops einzufügender Button (Bsp. ECDL BB):
  <button id="btnVorschau"
    data-url="ecdl_bb_gimp28"
    data-title="ECDL Bildbearbeitung mit GIMP 2.8"
    onclick="showLightbox(lpUrl, lpTitle)">
    Vorschau →
  </button>
*/

const btnVorschau = document.getElementById("btnVorschau");
// Auslesen der Lehrmittelspezifischen Angaben im Button
const lpFolder = btnVorschau.getAttribute("data-url");
const lpName = btnVorschau.getAttribute("data-title");
// Zusammensetzen zur Url und des Titels
const lpUrl = `http://www.wings.ch/vorschauen/${lpFolder}/`;
const lpTitle = `Leseprobe ${lpName}`;

// Die folgende Funktion erstellt das Overlay mit einem iFrame, der die
// entsprechende Vorschau öffnet. Die Funktionn wird über das Attributt
// onclick="showLightbox(lpUrl, lpTitle)" im Vorschau-Button aufgerufen

function showLightbox(url, title) {

  const overlay = document.createElement("div");
  const bookTitle = document.createElement("h1");
  const lightbox = document.createElement("div");
  const iFrame = document.createElement("iframe");
  const closeLightbox = document.createElement("button");

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
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  lightbox.appendChild(bookTitle);
  lightbox.appendChild(closeLightbox);
  lightbox.appendChild(iFrame);
  overlay.appendChild(lightbox);
  document.body.appendChild(overlay);

}
