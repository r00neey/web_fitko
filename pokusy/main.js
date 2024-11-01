/*function show_divs() {
    var elements = document.getElementsByClassName("item");
    Array.prototype.forEach.call(elements, function(element) {
        element.style.display = "block";
    });
}*/

function toggle_divs() {
    var elements = document.getElementsByClassName("item");
    Array.prototype.forEach.call(elements, function(element) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}