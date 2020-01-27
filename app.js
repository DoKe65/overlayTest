
// Hardcoded urls and title texts for testing:
// const lpUrl = "https://kursunterlagen.ch/leseproben/ECDL_BB_GIMP28/";
// const lpTitle = "Leseprobe ECDL Bildbearbeitung GIMP 2.8";

// Speicheradresse der Vorschauen:
const serverUrl = "https://kursunterlagen.ch/vorschauen/";

/*
auf der Artikel-Seite des Shops einzufügende Buttons (Bsp. ECDL BB):

Desktop:
  <button id="btnVorschau"
    data-url="ecdl_bb_gimp28"
    data-title="ECDL Bildbearbeitung mit GIMP 2.8"
    onclick="showLightbox(lpUrl, lpTitle)">
    Vorschau →
  </button>

Mobile:
  <button id="btnPdf"
    data-pdf="LP_ECDL_BB_GIMP_2_8_F_2016.pdf"
    onclick="openLink()">
    Vorschau (PDF) →
  </button>
*/


const btnVorschau = document.getElementById("btnVorschau");
// Auslesen der Lehrmittelspezifischen Angaben im Button
const lpFolder = btnVorschau.getAttribute("data-url");
const lpName = btnVorschau.getAttribute("data-title");
// Zusammensetzen zur Url und des Titels
const lpUrl = `${serverUrl}${lpFolder}/`;
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

// Für mobile Vorschau (PDF)

const btnPdf = document.getElementById("btnPdf");
// Auslesen des Dateinamens im Button
const pdfName = btnPdf.getAttribute("data-pdf");
// definieren der url
const pdfLink = `${lpUrl}${pdfName}`;

// Aufruf über Button, im selben Fenster. Mögliche Alternativen:
// 1. window.open(pdfLink) -> öffnet in neuem Tab/Fenster
// 2. Overlay mit Schliessbutton, analog zur Desktopversion. Könnte dann
// in die showLightbox-Funktion intergriert werden (if target = btnVorschau ... else)
function openLink() {
  window.open(pdfLink, "_parent");
}
