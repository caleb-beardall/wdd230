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
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');
        let logo = document.createElement('img');

        name.textContent = member.info.name;
        address.textContent = member.info.address;
        phone.textContent = member.info.phone;
        website.textContent = member.info.website;
        membership.textContent = member.info.membership;

        logo.setAttribute('src', member.info.logo);
        logo.setAttribute('alt', `${member.info.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 200);
        logo.setAttribute('height', memeber.info.logoheight);

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(logo);

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