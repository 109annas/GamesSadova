let you = 0;
let comp = 0;
let imya = '';
let youCards = [];
let compCards = [];
function start() {
    imya = prompt("Введіть ваше ім'я:");
    if (!imya) {
        imya = "Євгене Олександровичу";
    }
    document.getElementById("startN").innerText = `${imya}, готові програти свої гроші?`;
    document.getElementById("playerCardsTitle").innerText = `Карти ${imya}:`;
}

function go() {
    you = 0;
    comp = 0;
    youCards = [];
    compCards = [];
    document.getElementById("youCards").innerHTML = '';
    document.getElementById("compCards").innerHTML = '';
    document.getElementById("you").innerText = `Очки: ${you}`;
    document.getElementById("comp").innerText = `Очки: ${comp}`;
    document.getElementById("result").innerText = '';
    document.getElementById("take").style.display = 'inline-block';
    document.getElementById("endB").style.display = 'inline-block';
    document.getElementById("restartB").style.display = 'none';
}

function card(index) {
    let value;
    if (index >= 1 && index <= 4) {
        value = 6;
    } else if (index >= 5 && index <= 8) {
        value = 7;
    } else if (index >= 9 && index <= 12) {
        value = 8;
    } else if (index >= 13 && index <= 16) {
        value = 9;
    } else if (index >= 17 && index <= 20) {
        value = 10;
    } else if (index >= 21 && index <= 24) {
        value = 2;
    } else if (index >= 25 && index <= 28) {
        value = 3;
    } else if (index >= 29 && index <= 32) {
        value = 4;
    } else if (index >= 33 && index <= 36) {
        value = 11;
    }
    return { value: value, imgSrc: `./css/media/cards/${index}.jpg` };
}

function takeF() {
    const index = Math.floor(Math.random() * 36) + 1;
    const { value, imgSrc } = card(index);
    you += value;
    youCards.push({ index, value });
    const cardimg = document.createElement("img");
    cardimg.src = imgSrc;
    document.getElementById("youCards").appendChild(cardimg);
    document.getElementById("you").innerText = `Очки: ${you}`;
    if (you > 21) {
        endKazino("Ви програли!");
        return;
    }
    compRand();
}

function compRand() {
    const index = Math.floor(Math.random() * 36) + 1;
    const { value, imgSrc } = card(index);
    comp += value;
    compCards.push({ index, value });
    const compCardImg = document.createElement("img");
    compCardImg.src = imgSrc;
    document.getElementById("compCards").appendChild(compCardImg);
    document.getElementById("comp").innerText = `Очки: ${comp}`;
    if (comp > 21) {
        endKazino("Комп'ютер програв! Ви виграли!");
    }
}

function kinets() {
    hwo();
}
function endTurn() {
    kinets(); 
}
function hwo() {
    if (comp > 21 || you > comp) {
        endKazino(`${imya} виграв!!`);
    } else if (you === comp) {
        endKazino("Нічия!");
    } else {
        endKazino("Ви програли:((");
    }
}

function endKazino(result) {
    document.getElementById("result").innerText = result;
    document.getElementById("take").style.display = 'none';
    document.getElementById("endB").style.display = 'none';
    document.getElementById("restartB").style.display = 'block';
}

function restartKazino() {
    go();
    start();
}

window.onload = function() {
    start();
    go();
};
