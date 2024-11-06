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