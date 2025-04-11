const baseURL = "https://caleb-beardall.github.io/wdd230/";
const linksURL = "https://caleb-beardall.github.io/wdd230/data/links.json";


const displayLinks = (weeks) => {
    const ul = document.getElementById('unordered-list');

    weeks.forEach((week) => {
        const li = document.createElement('li');

        const anchorTags = week.links.map(link => {
            return `<a href="${link.url}">${link.title}</a>`;
        });

        li.innerHTML = `${week.week}: ${anchorTags.join(' | ')}`;
        ul.appendChild(li);

    });
}

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();