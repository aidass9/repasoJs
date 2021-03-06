cargarHoraReloj();
var intervaloReloj = setInterval(cargarHoraReloj, 1000);

//https://www.w3schools.com/jsref/jsref_obj_date.asp
function cargarHoraReloj() {
    var reloj = document.getElementById("reloj");
    var fechaActual = new Date();
    var horas = fechaActual.getHours();
    if (horas < 10) {
        horas = "0" + horas
    }
    var minutos = fechaActual.getMinutes();
    if (minutos < 10) {
        minutos = "0" + minutos
    }
    var segundos = fechaActual.getSeconds();
    if (segundos < 10) {
        segundos = "0" + segundos
    }
    reloj.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function pararReloj(boton) {
    if (boton.innerHTML === "Parar hora") {
        boton.innerHTML = "Activar hora";
        clearInterval(intervaloReloj);
    }
    else {
        boton.innerHTML = "Parar hora";
        cargarHoraReloj();
        intervaloReloj = setInterval(cargarHoraReloj, 1000);
    }
}
