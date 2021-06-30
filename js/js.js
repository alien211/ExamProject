/*Menu icon*/
function iconTransform(x) {
    x.classList.toggle("change");
}

var popup = false;
var buttons = document.getElementsByClassName("button");

/*Navigation control*/
function openNav() {
    if (!popup) {
            document.getElementById("mobile").style.height = "30%";
    } else {
            document.getElementById("mobile").style.height = "0%";
    }
    popup = !popup;
}
