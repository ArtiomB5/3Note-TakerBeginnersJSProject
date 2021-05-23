let inputButton = document.getElementById('inputButton');
inputButton.addEventListener('click', inputDataCheck);
//получения элемента кнопки и вызов функции при клике на кнопку

var noteNumber = 0;
//переменная для определения номера заметки

//функция обработки введенных данных, запускается по нажатию кнопки
function inputDataCheck() {
    let noteContent = document.getElementById('inputField').value;
    //получение данных полей названия, даты, суммы

    if (noteContent === "") {
        alert('Please input note text.')
    } else {
        addNewNote(noteContent);
    }
    //проверка заметки на наличие текста, если не пуста то  вызывается функция добавления заметки
}

//функция добавления заметки, в качестве параметра получает введенный пользователем текст
function addNewNote(noteContent) {
    let newNote = document.createElement('div');
    //Создание блока новой заметки

    newNoteId = idGenerator();
    newNote.id = newNoteId;
    //получение и присвоение id заметки уникального id по средствам вызова функции
    
    noteNumber = noteNumber + 1;
    //определение номера новой заметки

    let newNoteHeader = '<div class="notes__note-box"><h3>Note ' + noteNumber + '</h3>';
    //HTML разметка заголовка новой заметки

    let newNoteSlice = '<div class="notes__preview">' + noteContent.slice(0, 10) + '...' + '</div>';
    //текст для превью заметки

    let newNoteText = '<div class="notes__tooltip" id="' + newNoteId + 'nt">' + '<div class="notes__tooltip-text" id="' + newNoteId + 'ntt">' + '<button class="notes__x-button" onclick="onclickCloseDetail(' + newNoteId + ')">X</button><br>' + String(noteContent) + '</div>' + '</div>'; 
    //текст новой заметки

    let newNoteButton = '<button ' + 'onclick="onclickViewDetail(' + newNoteId + ')">View Detail</button></div>';
    //HTML разметка кнопки новой заметки

    let newNoteContent = newNoteHeader + newNoteSlice + newNoteText + newNoteButton;
    //формирование окончательной html разметки новой заметки

    newNote.innerHTML = newNoteContent;
    //заполнение HTML разметкой и текстом новой заметки 

    let notesBox = document.getElementById('notes');
    //обращение к элементу блока, вмещающего заметки

    notesBox.append(newNote);
    //добавление новой заметки в блок, вмещающий заметки

    inputClear();
    //очистка поля ввода после добавления заметки
}

//функция очистки поля ввода
function inputClear() {
    document.getElementById('inputField').value = '';
}

// функция генерации уникального id
function idGenerator() {
    let nowDate = new Date();
    let month = nowDate.getMonth();
    let date = nowDate.getDate();
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();
    let milliseconds = nowDate.getMilliseconds();

    let uniqueId = '' + month + date + hours + minutes + seconds + milliseconds;

    return uniqueId;
}

//функция отображает полную версию заметки
function onclickViewDetail(newNoteId) {
    let tultipParam = '' + newNoteId + 'nt';

    let tultipTextParam = '' + newNoteId + 'ntt';

    document.getElementById(tultipParam).style.visibility = 'visible';
    document.getElementById(tultipTextParam).style.visibility = 'visible';
    document.getElementById(tultipTextParam).style.top = '33%';
    document.getElementById(tultipTextParam).style.left = '33%';
}

//функция скрывает полную версию заметки
function onclickCloseDetail(newNoteId) {
    let tultipParam = '' + newNoteId + 'nt';

    let tultipTextParam = '' + newNoteId + 'ntt';
    
    document.getElementById(tultipParam).style.visibility = 'hidden';
    document.getElementById(tultipTextParam).style.visibility = 'hidden';
}