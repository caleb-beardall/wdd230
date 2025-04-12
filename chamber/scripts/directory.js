/* Menu */
const mainMenu = document.querySelector('#mainMenu');
const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});

/* Membership List */
const url = "https://caleb-beardall.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        
    });
}

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

getMemberData();



/* Footer */
const myInfo = document.querySelector('.myInfo');

const currentDate = new Date;
const lastModified = new Date(document.lastModified);

myInfo.textContent = `©${currentDate.getFullYear()} | Caleb Beardall | WDD 230 Project | Last Modification: ${lastModified.toLocaleString('de-DE')}`;