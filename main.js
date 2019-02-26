const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = ()=>{
    let verse = verseChoose.value;
    updateDisplay(verse);
};

const updateDisplay = (verse)=>{
    verse = verse.replace(' ','');
    verse = verse.toLowerCase();
    let url = './ajax/' + verse + '.txt';
    console.log(url)
    const XHR = new XMLHttpRequest();

    XHR.open('GET', url);

    XHR.responseType = 'text';

    XHR.onload = ()=>{
        poemDisplay.textContent = XHR.response;
    };

    XHR.send();
};

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';