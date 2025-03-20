/* FOOTER */
const cYear = document.getElementById("copyright");
const mDate = document.getElementById("lastModified");

let copyrightYear = new Date();
let lastModified = new Date(document.lastModified);

cYear.textContent = `©${copyrightYear.getFullYear()} | Caleb Beardall | Ogden, Utah`;
mDate.textContent = `Last Modification: ${lastModified.toLocaleString('de-DE')}`;