window.onload = main;

function main(){
    document.getElementById("tancar").addEventListener("click", borrarCookies);
}

function borrarCookies(){
    var div = document.getElementById("cookies");
    div.style.display = "none";
}