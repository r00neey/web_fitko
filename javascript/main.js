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

document.addEventListener("DOMContentLoaded", () => {
    const fitnessSection = document.querySelector(".obrazky");
    const skupinovkySection = document.querySelector(".skupinovky-hidden");
    const navLinks = document.querySelectorAll(".nav li a");

    // Nastavení výchozí sekce a aktivního odkazu
    fitnessSection.style.display = "grid";
    skupinovkySection.style.display = "none";
    navLinks[0].classList.add("active"); // První odkaz je "FITNESS"

    navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Zamezí přechodu na jinou stránku

        // Odebereme třídu 'active' ze všech odkazů
        navLinks.forEach((navLink) => navLink.classList.remove("active"));

        // Přidáme třídu 'active' na právě kliknutý odkaz
        link.classList.add("active");

        if (link.textContent === "SKUPINOVÉ LEKCE") {
          fitnessSection.style.display = "none"; // Skryje fitness sekci
          skupinovkySection.style.display = "block"; // Zobrazí skupinovky
        } else {
          fitnessSection.style.display = "grid"; // Zobrazí fitness sekci
          skupinovkySection.style.display = "none"; // Skryje skupinovky
        }
    });
    });
});

// 02 - nase sluzby
// klikani na karticky
//ZDE DAT PAK FLEX
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
        const front = card.querySelector(".card-front");
        const back = card.querySelector(".card-back");

        // Přepínáme viditelnost mezi přední a zadní stranou
        if (front.style.display === "block") {
            front.style.display = "none";
            back.style.display = "block"; // Otočení na zadní stranu
        } else {
          front.style.display = "block"; // Zobrazení přední strany
          back.style.display = "none";   // Skrytí zadní strany
        }
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
