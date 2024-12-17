const url = 'https://raw.githubusercontent.com/chadobnamia/wdd230/refs/heads/main/chamber/data/members.json'

const membersContainer = document.getElementById('members-container');

const displayInfo = (members)=>{
    members.forEach((member) => {
        // Create a div for each member
    const memberDiv = document.createElement('section');
    memberDiv.classList.add('member');

    // Add member logo
    const img = document.createElement('img');
    img.src = `images/${member.image}`;
    img.alt = `${member.name} Logo`;
    
    // Add member details
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('member-info');
    infoDiv.innerHTML = `
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership Level:</strong> ${member.membership_level}</p>
      <p><strong>Industry:</strong> ${member.industry}</p>
    `;

    // Append the image and info to the member div
    memberDiv.appendChild(img);
    memberDiv.appendChild(infoDiv);

    // Append the member div to the container
    membersContainer.appendChild(memberDiv);
    });
}

async function getMemberData(){
    const response = await fetch(url);
    const data = await response.json();
    displayInfo(data.members);
}

getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members-container");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
