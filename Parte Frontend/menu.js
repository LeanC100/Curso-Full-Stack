function menu() {
    var x = document.getElementById("navResponsive");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}