const KEYS = [
                { id: 'Backquote', type: 'double', valEn: '`', valShEn: '~', valRu: 'ё', valShRu: 'Ё',},
                { id: 'Digit1', type: 'double', valEn: '1', valShEn: '!', valRu: '1', valShRu: '!',},
                { id: 'Digit2', type: 'double', valEn: '2', valShEn: '@', valRu: '2', valShRu: '"', },
                { id: 'Digit3', type: 'double', valEn: '3', valShEn: '#', valRu: '3', valShRu: '№',},
                { id: 'Digit4', type: 'double', valEn: '4', valShEn: '$', valRu: '4', valShRu: ';',},
                { id: 'Digit5', type: 'double', valEn: '5', valShEn: '%', valRu: '5', valShRu: '%', },
                { id: 'Digit6', type: 'double', valEn: '6', valShEn: '^', valRu: '6', valShRu: ':', },
                { id: 'Digit7', type: 'double', valEn: '7', valShEn: '&', valRu: '7', valShRu: '?', },
                { id: 'Digit8', type: 'double', valEn: '8', valShEn: '*', valRu: '8', valShRu: '*', },
                { id: 'Digit9', type: 'double', valEn: '9', valShEn: '(', valRu: '9', valShRu: '(', },
                { id: 'Digit0', type: 'double', valEn: '0', valShEn: ')', valRu: '0', valShRu: ')', },
                { id: 'Minus', type: 'double',  valEn: '-', valShEn: '_', valRu: '-', valShRu: '_',},
                { id: 'Equal', type: 'double',  valEn: '=', valShEn: '+', valRu: '=', valShRu: '+',},
                { id: 'Backspace', type: 'special', valEn: 'Backspace', valShEn: 'Backspace', valRu: 'Backspace', valShRu: 'Backspace', size: 2.6},
                { id: 'Tab', type: 'special', valEn: 'Tab', valShEn: 'Tab', valRu: 'Tab', valShRu: 'Tab', size: 1.5,},
                { id: 'KeyQ', type: 'normal', valEn: 'q', valShEn: 'Q', valRu: 'й', valShRu: 'Й', },
                { id: 'KeyW', type: 'normal', valEn: 'w', valShEn: 'W', valRu: 'ц', valShRu: 'Ц', },
                { id: 'KeyE', type: 'normal', valEn: 'e', valShEn: 'E', valRu: 'у', valShRu: 'У', },
                { id: 'KeyR', type: 'normal', valEn: 'r', valShEn: 'R', valRu: 'к', valShRu: 'К', },
                { id: 'KeyT', type: 'normal', valEn: 't', valShEn: 'T', valRu: 'е', valShRu: 'Е', },
                { id: 'KeyY', type: 'normal', valEn: 'y', valShEn: 'Y', valRu: 'н', valShRu: 'Н', },
                { id: 'KeyU', type: 'normal', valEn: 'u', valShEn: 'U', valRu: 'г', valShRu: 'Г', },
                { id: 'KeyI', type: 'normal', valEn: 'i', valShEn: 'I', valRu: 'ш', valShRu: 'Ш', },
                { id: 'KeyO', type: 'normal', valEn: 'o', valShEn: 'O', valRu: 'щ', valShRu: 'Щ', },
                { id: 'KeyP', type: 'normal', valEn: 'p', valShEn: 'P', valRu: 'з', valShRu: 'З', },
                { id: 'BracketLeft', type: 'normal', valEn: '[', valShEn: '{', valRu: 'х', valShRu: 'Х', },
                { id: 'BracketRight', type: 'normal', valEn: ']', valShEn: '}', valRu: 'ъ', valShRu: 'Ъ',  },
                { id: 'BackSlash', type: 'double', valEn: '\\', valShEn: '|', valRu: '\\', valShRu: '/', },
                { id: 'Delete', type: 'special', valEn: 'DEL', valShEn: 'DEL', valRu: 'DEL', valShRu: 'DEL',},
                { id: 'CapsLock', type: 'special', valEn: 'Caps Lock', valShEn: 'Caps Lock', valRu: 'Caps Lock', valShRu: 'Caps Lock', size: 2.3,},
                { id: 'KeyA', type: 'normal', valEn: 'a', valShEn: 'A', valRu: 'ф', valShRu: 'Ф', },
                { id: 'KeyS', type: 'normal', valEn: 's', valShEn: 'S', valRu: 'ы', valShRu: 'Ы', },
                { id: 'KeyD', type: 'normal', valEn: 'd', valShEn: 'D', valRu: 'в', valShRu: 'В',  },
                { id: 'KeyF', type: 'normal', valEn: 'f', valShEn: 'F', valRu: 'а', valShRu: 'А', },
                { id: 'KeyG', type: 'normal', valEn: 'g', valShEn: 'G', valRu: 'п', valShRu: 'П', },
                { id: 'KeyH', type: 'normal', valEn: 'h', valShEn: 'H', valRu: 'р', valShRu: 'Р',},
                { id: 'KeyJ', type: 'normal', valEn: 'j', valShEn: 'J', valRu: 'о', valShRu: 'О', },
                { id: 'KeyK', type: 'normal', valEn: 'k', valShEn: 'K', valRu: 'л', valShRu: 'Л', },
                { id: 'KeyL', type: 'normal', valEn: 'l', valShEn: 'L', valRu: 'д', valShRu: 'Д', },
                { id: 'Semicolon', type: 'normal', valEn: ';', valShEn: ':', valRu: 'ж', valShRu: 'Ж', },
                { id: 'Quote', type: 'normal', valEn: '\'', valShEn: '"', valRu: 'э', valShRu: 'Э', },
                { id: 'Enter', type: 'special', valEn: 'Enter', valShEn: 'Enter', valRu: 'Enter', valShRu: 'Enter', size: 2,},
                { id: 'ShiftLeft', type: 'special', valEn: 'Shift', valShEn: 'Shift', valRu: 'Shift', valShRu: 'Shift', size: 3.5,},
                { id: 'KeyZ', type: 'normal', valEn: 'z', valShEn: 'Z', valRu: 'я', valShRu: 'Я', },
                { id: 'KeyX', type: 'normal', valEn: 'x', valShEn: 'X', valRu: 'ч', valShRu: 'Ч', },
                { id: 'KeyC', type: 'normal', valEn: 'c', valShEn: 'C', valRu: 'с', valShRu: 'С', },
                { id: 'KeyV', type: 'normal', valEn: 'v', valShEn: 'V', valRu: 'м', valShRu: 'М', },
                { id: 'KeyB', type: 'normal', valEn: 'b', valShEn: 'B', valRu: 'и', valShRu: 'И', },
                { id: 'KeyN', type: 'normal', valEn: 'n', valShEn: 'N', valRu: 'т', valShRu: 'Т', },
                { id: 'KeyM', type: 'normal', valEn: 'm', valShEn: 'M', valRu: 'ь', valShRu: 'Ь', },
                { id: 'Comma', type: 'normal', valEn: ',', valShEn: '<', valRu: 'б', valShRu: 'Б', },
                { id: 'Period', type: 'normal', valEn: '.', valShEn: '>', valRu: 'ю', valShRu: 'Ю', },
                { id: 'Slash', type: 'normal', valEn: '/', valShEn: '?', valRu: '.', valShRu: ',', },
                { id: 'ArrowUp', type: 'normal', valEn: '\u02c4', valShEn: '\u02c4',valRu: '\u02c4', valShRu: '\u02c4', },
                { id: 'ShiftRight', type: 'special', valEn: 'Shift', valShEn: 'Shift', valRu: 'Shift', valShRu: 'Shift', size: 1,},
                { id: 'ControlLeft', type: 'special', valEn: 'Ctrl', valShEn: 'Ctrl', valRu: 'Ctrl', valShRu: 'Ctrl', size: 1.7,},
                { id: 'MetaLeft', type: 'special', valEn: 'Win', valShEn: 'Win',valRu: 'Win', valShRu: 'Win', },
                { id: 'AltLeft', type: 'special', valEn: 'Alt', valShEn: 'Alt', valRu: 'Alt', valShRu: 'Alt', size: 1.3,},
                { id: 'Space', type: 'special', valEn: ' ', valShEn: ' ', valRu: ' ', valShRu: ' ', size: 7,},
                { id: 'AltRight', type: 'special', valEn: 'Alt', valShEn: 'Alt', valRu: 'Alt', valShRu: 'Alt', size: 1.3,},
                { id: 'ControlRight', type: 'special', valEn: 'Ctrl', valShEn: 'Ctrl', valRu: 'Ctrl', valShRu: 'Ctrl', size: 1.7,},
                { id: 'ArrowLeft', type: 'normal', valEn: '\u02c2', valShEn: '\u02c2', valRu: '\u02c2', valShRu: '\u02c2',},
                { id: 'ArrowDown', type: 'normal', valEn: '\u02c5', valShEn: '\u02c5',valRu: '\u02c5', valShRu: '\u02c5', },
                { id: 'ArrowRight', type: 'normal', valEn: '\u02c3', valShEn: '\u02c3',valRu: '\u02c3', valShRu: '\u02c3', },
];

var isLang = (localStorage.getItem('Lang') == null) ? 'en' : localStorage.getItem('Lang');
var isCapsLock = false;
var isShift = false;

let Info = document.createElement('p');
Info.innerHTML = 'Ctrl + Shift - переключение клавиатуры <br> ОС: Win';
Info.classList.add('info');

 let TEXTAREA = document.createElement('textarea');
 TEXTAREA.innerText = '';

 let WRAPPER = document.createElement('div');
 WRAPPER.classList.add('wrapper');

 let KEYBOARD = document.createElement('div');
 KEYBOARD.classList.add('keyboard');

 const BODY = document.querySelector('body');
 BODY.appendChild(WRAPPER);
 WRAPPER.appendChild(TEXTAREA);
 WRAPPER.appendChild(KEYBOARD);

for (let i = 0; i < KEYS.length; i++) {
    let newKey = document.createElement('span');
    let newSize = KEYS[i].size ? KEYS[i].size : 1;
    /*newKey.innerText = KEYS[i].valEn;*/
    if ( KEYS[i].type === 'double' )
        newKey.innerHTML = `<pre>${KEYS[i].valShEn}<br>  ${KEYS[i].valEn}</pre>`;
    if ( KEYS[i].type === 'special' )   
        newKey.innerHTML = `${KEYS[i].valRu}`;
    if ( KEYS[i].type === 'normal' ){   
        if ( isLang === 'en') newKey.innerHTML = `${KEYS[i].valEn}`;
        else  newKey.innerHTML = `${KEYS[i].valRu}`;
    };
     newKey.classList.add('key');
     newKey.id = KEYS[i].id;
     if (KEYS[i].type == 'special') {newKey.classList.add('key-special')};
     newKey.style.width = `${50 * newSize}px`;
     KEYBOARD.appendChild(newKey);
};
WRAPPER.appendChild(Info);


function onClickDown(currKey) {
    if ( currKey.type === 'special' ) {
        document.getElementById(currKey.id).classList.add('active-special');
        switch  (currKey.id) {
            case 'Enter':  
                TEXTAREA.innerHTML += '\n';
                break;
            case 'Backspace':  
                TEXTAREA.innerHTML = TEXTAREA.innerHTML.slice(0, -1);
                break;
            case 'Space':  
                TEXTAREA.innerHTML += ' ';
                break;
            case 'Delete':  
            debugger;
                TEXTAREA.innerHTML = TEXTAREA.innerHTML.substr(0, TEXTAREA.selectionStart) + TEXTAREA.innerHTML.substr(TEXTAREA.selectionStart+1);
                break;
            case 'Tab':  
                TEXTAREA.innerHTML += '    ';
                break;
            case 'ShiftLeft' || 'ShiftRight':  
                isShift = true;
                break;
            case 'CapsLock':  
                isCapsLock = !isCapsLock;
                break;
        }
    }
    else {
        document.getElementById(currKey.id).classList.add('active');
        let text = '';
        if ( isLang === 'en' && isCapsLock && isShift) { text = currKey.valEn};
        if ( isLang === 'en' && !isCapsLock && !isShift) { text = currKey.valEn};
        if ( isLang === 'en' && isCapsLock && !isShift) { text = currKey.valShEn};
        if ( isLang === 'en' && !isCapsLock && isShift) { text = currKey.valShEn};

        if ( isLang === 'ru' && isCapsLock && isShift) { text = currKey.valRu};
        if ( isLang === 'ru' && !isCapsLock && !isShift) { text = currKey.valRu};
        if ( isLang === 'ru' && isCapsLock && !isShift) { text = currKey.valShRu};
        if ( isLang === 'ru' && !isCapsLock && isShift) { text = currKey.valShRu};
        TEXTAREA.innerHTML += text; 
    }
};

function ChangeKeys() {
    let loadKey = '';
    if ( isLang === 'en' && !isCapsLock ) { //loadKey = 'valEn'; 
    //alert (1);
        for (let i = 0; i < KEYS.length; i++) {
            if ( KEYS[i].type === 'normal' )  document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valEn}`;
           
        }
    };

    if ( isLang === 'en' && isCapsLock )  { //loadKey = 'valShEn'; 
    //alert (2);
        for (let i = 0; i < KEYS.length; i++) {
            if ( KEYS[i].type === 'normal' )  document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valShEn}`;
        }
    };

    if ( isLang === 'ru' && !isCapsLock ) { //loadKey = 'valRu'; 
   // alert (3);
        for (let i = 0; i < KEYS.length; i++) {
            if ( KEYS[i].type === 'normal' )  document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valRu}`;
        }
    };

    if ( isLang === 'ru' && isCapsLock )  { //loadKey = 'valShRu'; 
    //alert (4);
        for (let i = 0; i < KEYS.length; i++) {
            if ( KEYS[i].type === 'normal' )  document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valShRu}`;
        }
    };    
}

function onClickUp(currKeyId, event) {
    document.querySelectorAll('span').forEach(item => {
        item.classList.remove('active');
        item.classList.remove('active-special');
    });  
    
    if (   ( currKeyId === 'ControlLeft' && event.shiftKey ) 
        || ( event.controlLeft && currKeyId === 'ShiftKey' )
        || ( currKeyId === 'ControlRight' && event.shiftKey ) 
        || ( event.controlRight && currKeyId === 'ShiftKey' )) {
        isLang = (isLang === 'en') ? 'ru' : 'en';
        localStorage.setItem('Lang', isLang);
        ChangeKeys();
        // for (let i = 0; i < KEYS.length; i++) {
        //     if ( isLang === 'en' )  { document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valEn}` }
        //     else { document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valRu}`};
        // }
    };

        if (isCapsLock) {
            document.getElementById('CapsLock').classList.add('active-special');
        };    
        if ( currKeyId === 'CapsLock' ) {
            if (isCapsLock) {
                document.getElementById('CapsLock').classList.add('active-special');
               /* for (let i = 0; i < KEYS.length; i++) {
                    // document.getElementById(KEYS[i].id).innerText = KEYS[i].valShEn;
                    if ( KEYS[i].type === 'normal' )  document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valShEn}`;
                }*/
            }    
            else {
                /*for (let i = 0; i < KEYS.length; i++) {
                    // document.getElementById(KEYS[i].id).innerText = KEYS[i].valEn;
                    if ( KEYS[i].type === 'normal' ) document.getElementById(KEYS[i].id).innerHTML = `${KEYS[i].valEn}`;
                } */   
            }    
        }
        if (currKeyId === 'ShiftLeft' || currKeyId === 'ShiftRight') {
            isShift = false;
        }
    
}

document.addEventListener('keydown', (event) => { 
    event.preventDefault();
    if (!document.getElementById(event.code)) { return };
    let currKey = KEYS.find(item => item.id == event.code);
    onClickDown(currKey);
});

document.addEventListener('keyup', (event) => { 
    event.preventDefault();
    if (!document.getElementById(event.code)) { return };
    let currKeyId = event.code;
    onClickUp(currKeyId, event);
});

document.addEventListener('mousedown', (event) => {
    if (!document.getElementById(event.target.parentElement.id)  && !document.getElementById(event.target.id) ) {
         return 
    };
    event.preventDefault();
    let curKey = '';
    if (event.toElement.nodeName === 'PRE')
        currKey = KEYS.find(item => item.id == event.target.parentElement.id);
    else
        currKey = KEYS.find(item => item.id == event.target.id);
    onClickDown(currKey);
});

document.addEventListener('mouseup', (event) => {
    event.preventDefault();
    let currKeyId = event.target.id;
    onClickUp(currKeyId, event);
});
 

