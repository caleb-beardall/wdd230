/* Menu */
const mainMenu = document.querySelector('#mainMenu');
const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
    mainMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});

/*Weather API */
const currentDay = document.querySelector('#currentDay');
const currentTemp = document.querySelector('#currentTemp');
const currentCond = document.querySelector('#currentCond');
const currentIcon = document.querySelector('#currentIcon');

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=41.21&lon=-111.96&units=imperial&appid=800b15198417d7814dc1aa2c84d56653';

async function getWeatherData() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            /* console.log(data); */
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    /* console.log(data); */

    currentDay.textContent = `Current`;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    currentCond.textContent = data.weather[0].description;

    currentIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    currentIcon.setAttribute('alt', `${data.weather[0].description}`);
    currentIcon.setAttribute('width', 50);
    currentIcon.setAttribute('height', 50);
}

function formatDate(dateNumber) {
    const date = new Date(dateNumber * 1000);
    const reformatDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }).format(date);

    return reformatDate
}

getWeatherData();

/*Forecast API */
const f1 = document.querySelector('#forecast1');
const f2 = document.querySelector('#forecast2');
const f3 = document.querySelector('#forecast3');

const f1Temp = document.querySelector('#forecast1Temp');
const f2Temp = document.querySelector('#forecast2Temp');
const f3Temp = document.querySelector('#forecast3Temp');

const f1Cond = document.querySelector('#forecast1Cond');
const f2Cond = document.querySelector('#forecast2Cond');
const f3Cond = document.querySelector('#forecast3Cond');

const f1Icon = document.querySelector('#forecast1Icon');
const f2Icon = document.querySelector('#forecast2Icon');
const f3Icon = document.querySelector('#forecast3Icon');

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.21&lon=-111.96&units=imperial&appid=800b15198417d7814dc1aa2c84d56653';

async function getForecastData() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            /* console.log(data); */
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    /* console.log(data); */

    f1.textContent = formatDate(data.list[5].dt);
    f2.textContent = formatDate(data.list[13].dt);
    f3.textContent = formatDate(data.list[21].dt);

    f1Temp.innerHTML = `${data.list[5].main.temp}&deg;F`;
    f2Temp.innerHTML = `${data.list[13].main.temp}&deg;F`;
    f3Temp.innerHTML = `${data.list[21].main.temp}&deg;F`;

    f1Cond.textContent = data.list[5].weather[0].description;
    f2Cond.textContent = data.list[13].weather[0].description;
    f3Cond.textContent = data.list[21].weather[0].description;

    f1Icon.setAttribute('src', `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`);
    f1Icon.setAttribute('alt', `${data.list[5].weather[0].description}`);
    f1Icon.setAttribute('width', 50);
    f1Icon.setAttribute('height', 50);


    f2Icon.setAttribute('src', `https://openweathermap.org/img/w/${data.list[13].weather[0].icon}.png`);
    f2Icon.setAttribute('alt', `${data.list[13].weather[0].description}`);
    f2Icon.setAttribute('width', 50);
    f2Icon.setAttribute('height', 50);

    f3Icon.setAttribute('src', `https://openweathermap.org/img/w/${data.list[21].weather[0].icon}.png`);
    f3Icon.setAttribute('alt', `${data.list[21].weather[0].description}`);
    f3Icon.setAttribute('width', 50);
    f3Icon.setAttribute('height', 50);
}

getForecastData();

/* Membership List */
const membersURL = "https://caleb-beardall.github.io/wdd230/chamber/data/members.json";

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
    const response = await fetch(membersURL);
    const data = await response.json();
    /* console.table(data.members); */

    const PremiumMembers = data.members.filter(member => {
        return member.info[0].membership === "Gold Membership" || member.info[0].membership === "Silver Membership"
    });

    function getRandomMembers(members, count = 2) {
        const shuffledMembers = members.sort(() => 0.5 - Math.random());
        return shuffledMembers.slice(0, count);
    }

    const reductedList = getRandomMembers(PremiumMembers, 2);

    displayMembers(reductedList);
}

getMemberData();

/* Footer */
const myInfo = document.querySelector('.myInfo');

const currentDate = new Date;
const lastModified = new Date(document.lastModified);

myInfo.textContent = `©${currentDate.getFullYear()} | Caleb Beardall | WDD 230 Project | Last Modification: ${lastModified.toLocaleString('de-DE')}`;