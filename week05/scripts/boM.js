const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () =>
       { if (input.value!==''){
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value ='';
            input.focus();}


        
           

        });


        const chaptersArray = getChapterList() ||[];
        


const displayList = item =>{
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    
    deleteButton.textContent = '❌';
    li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', ()=>{
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();});


}


const setChapterList = () =>{
    localStorage.setItem('myFAvBomlist', JSON.stringify(chaptersArray));
}


function getChapterList(){
    return JSON.parse(localStorage.getItem('myFAvBomlist'));
}


function deleteChapter(chapter){
    chapter = chapter.lice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
    