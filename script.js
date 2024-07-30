// naudojantis html failu pasiimame dalykus kurie bus reikalingi: t.y buttonas, hex, kad matytume spalvos koda ir body, kad matyme besikeiciansias spalvas. 
const body = document.querySelector('body');
const hexColor = document.querySelector('.hex');
const btn = document.querySelector('.generate');

// Btn turi tureti addEventListener, kad paspaudus keistusi fono spalva ir spalvos kodas
const generateHexColor = () => {
    // norime susigeneruoti atskira skaiciu ir raidziu derini.
    // toString - pvz skaicius pavercia i stringus.
    const randomColor = Math.random().toString(16).slice(2, 8)
    hexColor.textContent = "#" + randomColor;
    // cia kad pakeistume viso fono splava.
    body.style.backgroundColor = "#" + randomColor;
    console.log(randomColor);
}

btn.addEventListener('click', generateHexColor);
// kad bunat ant fono sukant peles ratuka, keistu spalva.
body.addEventListener('mousewheel', generateHexColor);