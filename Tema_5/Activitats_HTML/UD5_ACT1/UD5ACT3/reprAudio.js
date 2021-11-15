window.onload = main;

function main(){
    document.getElementById("play").addEventListener("click", reproduir);
    document.getElementById("barraVol").addEventListener("input", controlVolum);
    document.getElementById("volum").addEventListener("click", mutejaVolum);
}

//Funció per reproduir/pausar l'àudio
function reproduir(){
    var reproductor = document.getElementById("reproductor");
    var control = document.getElementById("play");

    if(reproductor.paused){
        reproductor.play();
        control.setAttribute("src", "imatges/stop.png");
    } else {
        reproductor.pause();
        control.setAttribute("src", "imatges/play.png");
    }

}

//Funció per pujar i baixar el volum
function controlVolum(){
    var reproductor = document.getElementById("reproductor");
    var control = document.getElementById("volum");
    var barra = document.getElementById("barraVol");

    reproductor.volume = barra.value;

    if(barra.value == 0){
        control.setAttribute("src", "imatges/volume_stop.png");
    } else {
        control.setAttribute("src", "imatges/volume_act.png");
    }
}

//Funció per mutejar/desmutejar l'àudio
function mutejaVolum(){
    var reproductor = document.getElementById("reproductor");
    var control = document.getElementById("volum");
    var barraControl = document.getElementById("barraVol");

    if(control.getAttribute("src") == "imatges/volume_act.png"){
        control.setAttribute("src", "imatges/volume_stop.png")
        reproductor.volume = 0;
    } else {
        control.setAttribute("src", "imatges/volume_act.png");
        reproductor.volume = barraControl.value;
    }
}