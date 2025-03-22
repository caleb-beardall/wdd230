const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const setChapterList = () => {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

const deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

const displayList = (item) => {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = "X";
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus;
    });
};

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();

    } else {

        input.focus;
    }

    input.value = '';
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
    displayList(chapter);
});