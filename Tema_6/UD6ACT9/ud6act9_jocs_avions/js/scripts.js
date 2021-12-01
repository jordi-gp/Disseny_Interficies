const pixels_a_moure = 15; 

function moureEsquerra() {
  let element = document.getElementById("avio");
  if(getAvioPos(element).left > -5){
    let soroll = document.getElementById("sorollAvio");

    soroll.play();
  
    element.style.backgroundImage = "url('sprites/avion_movement.png')";

    var rightPos = getAvioPos(element).left;
    var novaPos = rightPos - pixels_a_moure;

    element.style.transform = "scaleX(-1)";

    element.style.left = novaPos+"px";
  }
  
}

function moureDreta() {
  let element = document.getElementById("avio");
  //if(getAvioPos(element).left < window.innerHeight){
    let soroll = document.getElementById("sorollAvio");

    soroll.play();

    element.style.backgroundImage = "url('sprites/avion_movement.png')";

    var leftPos = getAvioPos(element).left;
    var novaPos = leftPos + pixels_a_moure;

    element.style.transform = "scaleX(1)";

    element.style.left = novaPos+"px";
  //}
}

function moureAmunt() {
  let element = document.getElementById("avio");
  if(getAvioPos(element).top > 0){
    let soroll = document.getElementById("sorollAvio");

    soroll.play();

    element.style.backgroundImage = "url('sprites/avion_movement.png')";

    var topPos = getAvioPos(element).top;
    var novaPos = topPos - pixels_a_moure;

    element.style.top = novaPos+"px";
  }
}

function moureAvall() {
  let element = document.getElementById("avio");
  let soroll = document.getElementById("sorollAvio");

  soroll.play();
  
  element.style.backgroundImage = "url('sprites/avion_movement.png')";

  var downPos = getAvioPos(element).top;
  var novaPos = downPos + pixels_a_moure;

  element.style.top = novaPos+"px";
}

function passarANumero(n) {
  return parseInt(n == "auto" ? 0 : n);
}

function getAvioPos() {
  let obj = {
    left: passarANumero(getComputedStyle(avio).left),
    top: passarANumero(getComputedStyle(avio).top),
  };
  return obj;
}

/**
 * Funció encarregada de controlar quina tecla s'ha "apretat"
 * @param {*} evt: event que es llança
 */
function moureAvio(evt) {
  switch (evt.keyCode) {
    case 37:
      /** hem apretat la tecla de fletxa esquerra */
      moureEsquerra();
      break;
    case 39:
      /** hem apretat la tecla de fletxa dreta */
      moureDreta();
      break;
    case 38:
      /** hem apretat la tecla de fletxa amunt */
      moureAmunt();
      break;
    case 40:
      /** hem apretat la tecla de fletxa avall */
      moureAvall();
      break;
    case 49:
      //Hem pres el botó 1 per parar o fer que sone la música
      controlaAudio();
    break;
  }
}

/**
 * Funció encarregada de fer el que calga quan es pare l'avió
 */
function pararAvio() {
  var soroll = document.getElementById("sorollAvio");
  var element = document.getElementById("avio");
  soroll.pause();
  element.style.backgroundImage = "url('sprites/avion_idle.png')";
  //element.style.animation = "float 3s ease-in-out infinite";
}

function docReady() {
  window.addEventListener("keydown", moureAvio);
  window.addEventListener("keyup", pararAvio);
  document.getElementById("nivell1").addEventListener("click", nivell1);
  document.getElementById("nivell2").addEventListener("click", nivell2);
  document.getElementById("nivell3").addEventListener("click", nivell3);
}

//Control de l'audio
function controlaAudio(){
  var reproductor = document.getElementById("reproductor");

  if(reproductor.paused){
    reproductor.play();
  } else {
    reproductor.pause();
  }

}

//FUNCIONS PER CANVIAR ELS FONS DE PANTALLA
//Nivell 1
function nivell1(){
  document.body.style.backgroundImage = "url('fons_nivells/nivell1.jpg')";
}

//Nivell 2
function nivell2(){
  document.body.style.backgroundImage = "url('fons_nivells/nivell2.jpg')";
}

//Nivell 3
function nivell3(){
  document.body.style.backgroundImage = "url('fons_nivells/nivell3.jpg')";
}
