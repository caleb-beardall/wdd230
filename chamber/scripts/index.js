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