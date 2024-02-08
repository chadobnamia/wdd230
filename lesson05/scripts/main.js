const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', () => {
    if (input.value !== "") { // Check if input is not empty
        const li = document.createElement('li'); // Create new list item
        const deleteButton = document.createElement('button'); // Create delete button
        li.textContent = input.value; // Set text content of li to input value
        deleteButton.textContent = '❌'; // Set text content of delete button
        li.append(deleteButton); // Append delete button to li
        list.append(li); // Append li to list
        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Remove li when delete button is clicked
            input.focus(); // Set focus back to input field
            input.value = ''; // Clear input field
        });
    } else {
        alert("You didn't have an input."); // Alert if input is empty
    }
});