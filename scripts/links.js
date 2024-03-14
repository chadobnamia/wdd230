const baseURL = "https://chadobnamia.github.io/wdd230/";

const linksURL = "https://chadobnamia.github.io/wdd230/data/links.json";

const card = document.querySelector('#card')
const displayLinks = (weeks) => {
  weeks.forEach((week) => {
      const lesson= document.createElement('ul');
      const fullName = document.createElement('h2'); // fill in the blank
      const portrait = document.createElement('img');

      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(portrait);

      cards.appendChild(card);
  });
}

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();