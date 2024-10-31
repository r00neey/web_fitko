function toggle_divs() {
    var elements = document.getElementsByClassName("hidden");
    Array.prototype.forEach.call(elements, function(element) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}