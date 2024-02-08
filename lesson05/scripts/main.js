const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');

button.addEventListener('click',()=>{
    if(input != ""){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        deleteButton.addEventListener('click',()=>{
            list.removeChild(li);
            input.focus;
            input.value = ''
        });
        
    }
})