function show_divs() {
    var elementIds = ["item-1", "item-2", "item-3", "item-4"];
    elementIds.forEach(function(id) {
        document.getElementById(id).style.display = "block";
    });
}