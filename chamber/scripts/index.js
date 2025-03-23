/* MENU */
const mainMenu = document.querySelector('#mainMenu');
const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});

/* FOOTER */
const myInfo = document.querySelector('.myInfo');

let copyrightYear = new Date();
let lastModified = new Date(document.lastModified);

myInfo.textContent = `©${copyrightYear.getFullYear()} | Caleb Beardall | Last Modification: ${lastModified.toLocaleString('de-DE')}`;

