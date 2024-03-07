const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener('click', () => {
    if (input.value !== "") { // Check if input is not empty
        displayList(input.value != '');
        chaptersArray.push(input.value);
        setChapteList();
        input.value='';
        input.focus();
    }
});

function displayList(item){
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
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');   
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChpterList();
  }
  