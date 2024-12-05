document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("Як до Вас звертатись?");
    let point = 0;
    let comp = 0;
    const end = 3;
    const sadImage = document.getElementById("sadImage");
    const happyImage = document.getElementById("happyImage");
    function again() {
        point = 0;
        comp = 0;
        document.getElementById("point").textContent = `Ваш рахунок: ${point}`;
        document.getElementById("comp").textContent = `Рахунок комп'ютера: ${comp}`;
        document.getElementById("my").textContent = "Число користувача: -";
        document.getElementById("notmy").textContent = "Число комп'ютера: -";
        setTimeout(function () {
            sadImage.style.display = "none";
            happyImage.style.display = "none";
        }, 1000); 
    }
    document.getElementById("play").onclick = game;
    function game() {
        let my = Math.floor(Math.random() * 10) + 1;
        let notmy = Math.floor(Math.random() * 10) + 1;
        let konets = "";
        document.getElementById("my").textContent = `Число ${name}: ${my}`;
        document.getElementById("notmy").textContent = `Число комп'ютера: ${notmy}`;
        if (my > notmy) {
            point++;
            konets = `Вітаємо, ${name} виграв!`;
        } else if (notmy > my) {
            comp++;
            konets = "Комп'ютер виграв :(";
        } else {
            konets = "Нічия..";
        }
        document.getElementById("konets").textContent = konets;
        document.getElementById("point").textContent = `Рахунок ${name}: ${point}`;
        document.getElementById("comp").textContent = `Рахунок комп'ютера: ${comp}`;
        if (point === end) {
            document.getElementById("konets").textContent = `${name} переміг у грі з рахунком ${point} - ${comp}!`;
            happyImage.style.display = "inline";
            again();
        } else if (comp === end) {
            document.getElementById("konets").textContent = `Комп'ютер переміг у грі з рахунком ${comp} - ${point}!`;
            sadImage.style.display = "inline";
            again();
        }
    }
});
