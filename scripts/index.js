/* FOOTER */
const cYear = document.getElementById("copyright");
const mDate = document.getElementById("lastModified");

let copyrightYear = new Date();
let lastModified = new Date(document.lastModified);

cYear.textContent = `©${copyrightYear.getFullYear()} | Caleb Beardall | Ogden, Utah`;
mDate.textContent = `Last Modification: ${lastModified.toLocaleString('de-DE')}`;

/* MENU */
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navMenu.classList.toggle('open');
});

/* DARK MODE */
const darkButton = document.querySelector('#darkMode');

darkButton.addEventListener('click', () => {

    if (darkMode.classList.contains('on')) {

        document.documentElement.style.setProperty('--title-text-color', 'white');
        document.documentElement.style.setProperty('--body-text-color', 'black');
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--section-color', '#F5F5F5');
        document.documentElement.style.setProperty('--border-shadow-color', 'rgba(0, 0, 0, 0.25)');
        document.documentElement.style.setProperty('--link-color', '#1e6dae');
        document.documentElement.style.setProperty('--visited-link-color', '#6926cd');

    } else {

        document.documentElement.style.setProperty('--title-text-color', 'black');
        document.documentElement.style.setProperty('--body-text-color', 'white');
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--section-color', '#212121');
        document.documentElement.style.setProperty('--border-shadow-color', 'rgba(255, 255, 255, 0.25)');
        document.documentElement.style.setProperty('--link-color', '#67ace5');
        document.documentElement.style.setProperty('--visited-link-color', '#b089e9');
    }

    darkButton.classList.toggle('on');

});

/* Visits Counter */
const visitsCounter = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsCounter.textContent = `Visits Count: ${numVisits + 1}`;
} else {
    visitsCounter.textContent = `Welcome to my website!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);