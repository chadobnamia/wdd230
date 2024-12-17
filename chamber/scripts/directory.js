const url = '/data/members.json'

const membersContainer = document.getElementById('members-container');

const displayInfo = (members)=>{
    data.members.forEach((member) => {
        // Create a div for each member
    const memberDiv = document.createElement('div');
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
      <p><strong>Founded:</strong> ${member.founded}</p>
    `;

    // Append the image and info to the member div
    memberDiv.appendChild(img);
    memberDiv.appendChild(infoDiv);

    // Append the member div to the container
    membersContainer.appendChild(memberDiv);
    }) 
}

async function getMemberData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
}

getMemberData();