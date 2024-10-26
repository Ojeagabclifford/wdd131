const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');



        const chaptersArray = getChapterList() ||[];
            if (chaptersArray==0){
                console.log('first visit')
            }
        
        chaptersArra.forEach(chapter => {
            displayWindChill(chapter);
            
        });
        


    

        li.textContent = input.value;
        
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = '';

        });

        li.append(deleteButton);
        list.append(li);

        input.value = '';
    }
});


