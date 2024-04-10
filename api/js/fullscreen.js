//crear los selectores
const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');

//evento
abrirBtn.addEventListener('click',pantallaCompleta);
cerrarBtn.addEventListener('click', cerrarPantalla);

function pantallaCompleta(){
    document.documentElement.requestFullscreen();
}

function cerrarPantalla(){
    document.exitFullscreen();
}

