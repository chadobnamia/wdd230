const baseURL = "https://https://chadobnamia.github.io/wdd230/";

const linksURL = "https://chadobnamia.github.io/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();