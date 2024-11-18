function toggle_divs() {
    var elements = document.getElementsByClassName("hidden");
    Array.prototype.forEach.call(elements, function(element) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });

    // Najít tlačítko a změnit jeho text
    var button = document.querySelector(".treneri-button");
    if (button.innerText === "DALŠÍ TRENÉŘI") {
        button.innerText = "MÉNĚ TRENÉRŮ";
    } else {
        button.innerText = "DALŠÍ TRENÉŘI";
    }
}

// 01 - o nas
// klikani na karticky
document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".o-nas-grid .karta");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            card.classList.toggle("flipped");
        });
    });
});

// 03 - CENIK
// klikani na buttony

document.addEventListener("DOMContentLoaded", () => {
    const ceniky = document.querySelectorAll(".cenik-tabulka");
    const buttons = document.querySelectorAll(".cenik-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");

            ceniky.forEach(cenik => {
                cenik.style.display = cenik.id === targetId ? "block" : "none";
            });
        });
    });
});


// 04 - treneri
// klikani na kartu
document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".treneri-cards .card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            card.classList.toggle("flipped");
        });
    });
});