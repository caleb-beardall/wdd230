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
        /*
        document.documentElement.style.setProperty('--dark-blue', '#3367d6');
        document.documentElement.style.setProperty('--med-blue', '#4285f4');
        document.documentElement.style.setProperty('--light-blue', '#7baaf7');
        document.documentElement.style.setProperty('--highlight-blue', '#c6dafc');
        */

        document.documentElement.style.setProperty('--title-text-color', 'white');
        document.documentElement.style.setProperty('--body-text-color', 'black');
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--section-color', '#f2f2f2');
        document.documentElement.style.setProperty('--border-shadow-color', 'rgba(0, 0, 0, 0.1)');

    } else {
        /*
        document.documentElement.style.setProperty('--dark-blue', '#3367d6cc');
        document.documentElement.style.setProperty('--med-blue', '#4285f4cc');
        document.documentElement.style.setProperty('--light-blue', '#7baaf7cc');
        document.documentElement.style.setProperty('--highlight-blue', '#c6dafccc');
        */

        document.documentElement.style.setProperty('--title-text-color', 'black');
        document.documentElement.style.setProperty('--body-text-color', 'white');
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--section-color', '#191919');
        document.documentElement.style.setProperty('--border-shadow-color', 'rgba(255, 255, 255, 0.1)');
    }

    darkButton.classList.toggle('on');

});