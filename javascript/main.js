function toggle_divs() {
    // Omez vyhledávání jen na sekci trenérů
    var treneriSection = document.querySelector("#treneri");
    var elements = treneriSection.querySelectorAll(".card.hidden");

    elements.forEach(function(element) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });

    // Změna textu tlačítka
    var button = document.querySelector(".treneri-button");
    if (button.innerText === "DALŠÍ TRENÉŘI") {
        button.innerText = "MÉNĚ TRENÉRŮ";
    } else {
        button.innerText = "DALŠÍ TRENÉŘI";
    }
}

//navigace

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Zobrazení/skrytí navigace po kliknutí na hamburger
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Skrytí navigace po kliknutí na odkaz
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
    });
});


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

// 02 - nase sluzby
// navigace
document.addEventListener("DOMContentLoaded", function() {
    // Přidáme event listener pro všechny odkazy v navigaci
    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Zabráníme defaultnímu chování odkazu

            // Skryjeme všechny gridy
            document.querySelectorAll(".sluzby-grid, .kardio-grid, .protazeni-grid, .obrazky-card").forEach(grid => {
                grid.classList.add("hidden");
            });

            // Zobrazíme pouze ten grid, na který bylo kliknuto
            const targetGrid = document.querySelector(`.${this.getAttribute("data-target")}`);
            if (targetGrid) {
                targetGrid.classList.remove("hidden");
            }

            // Odebereme třídu .active ze všech odkazů
            document.querySelectorAll(".nav a").forEach(link => {
                link.classList.remove("active");
            });

            // Přidáme třídu .active aktuálnímu odkazu
            this.classList.add("active");
        });
    });

    // Zobrazíme výchozí grid při načtení stránky
    const defaultGrid = document.querySelector(".sluzby-grid");
    if (defaultGrid) {
        defaultGrid.classList.remove("hidden");
    }

    // Nastavíme výchozí aktivní odkaz
    const defaultLink = document.querySelector('.nav a[data-target="sluzby-grid"]');
    if (defaultLink) {
        defaultLink.classList.add("active");
    }
});


//02 - karticky
document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".sluzby-grid .karta, .kardio-grid .karta, .protazeni-grid .karta");

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
    const buttons = document.querySelectorAll(".button-obrazek");

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


// 02 - nase sluzby
// velky sal + fight arena

document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".obrazky-card .card2");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            card.classList.toggle("karta-sluzby-back");
        });
    });
});
