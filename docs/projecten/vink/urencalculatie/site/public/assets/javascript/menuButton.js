window.onload = document.getElementById("menu_button_mobile").addEventListener("click",changeNav);

function changeNav() {
    console.log("click");
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}