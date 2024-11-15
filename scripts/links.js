const baseURL = "https://juliehirschi.github.io/wdd230/";
const linkURL = "https://juliehirschi.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.groupCollapsed(data);
}

getLinks();

async function getLinks() {
    const response = await fetch(linkURL);
    const data = await response.json();
    displayLinks(data);
}

displayLinks();

