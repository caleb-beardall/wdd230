/* Menu */
const mainMenu = document.querySelector('#mainMenu');
const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});

/* Footer */
const myInfo = document.querySelector('.myInfo');

const currentDate = new Date;
const lastModified = new Date(document.lastModified);

myInfo.textContent = `©${currentDate.getFullYear()} | Caleb Beardall | WDD 230 Project | Last Modification: ${lastModified.toLocaleString('de-DE')}`;

/* Visits Message */
const visitMessage = document.querySelector('.visitMessage');

const now = Date.now();
let lastVisit = Number(localStorage.getItem("lastVisit-ls")) || 0;
const msInADay = 86400000;

/* lastVisit = 1743897713603 - 86399999; */
/* lastVisit = 1743897713603 - 86400000 * 2; */

if (lastVisit !== 0) {

    if ((now - lastVisit) < 86400000) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if ((now - lastVisit) < (86400000 * 2)) {
        visitMessage.textContent = `You last visted 1 day ago.`;
    } else {
        visitMessage.textContent = `You last visted ${Math.floor((now - lastVisit) / 86400000)} days ago.`;
    }

} else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisit-ls", now);