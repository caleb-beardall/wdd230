/* Main Menu */
const mainMenu = document.querySelector('#mainMenu');
const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});

/* Display Button */
const displayButton = document.querySelector('#displayButton');
const cards = document.querySelector('#cards');

displayButton.addEventListener('click', () => {
    displayButton.classList.toggle('list');
    cards.classList.toggle('list');
});

/* Membership List */
const url = "https://caleb-beardall.github.io/wdd230/chamber/data/members.json";

const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');
        let logo = document.createElement('img');

        name.textContent = member.member;
        address.textContent = member.info[0].address;
        phone.textContent = member.info[0].phone;
        website.innerHTML = `<a href="${member.info[0].website}">${member.info[0].website}</a>`;
        membership.textContent = member.info[0].membership;

        logo.setAttribute('src', member.info[0].logo);
        logo.setAttribute('alt', `${member.member} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 200);
        logo.setAttribute('height', member.info[0].logoheight);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
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