// Author:  Adrian Gavela Rodriguez
// Version: 1.0
// Date:    2024/10/01

// variable ventana emergente
var myWindow;

// Variable para el  temporizador
var timer;
// Número de segundos transcurridos
var count = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Variables botones
  const btnInfo = document.getElementById("btnInfo");
  const btnUrl = document.getElementById("btnUrl");
  const btnClose = document.getElementById("btnClose");

  const url = document.getElementById("inputUrl");
  const btnBack = document.getElementById("btnBack");
  const btnForward = document.getElementById("btnForward");
  const btnRedirection = document.getElementById("redirection");

  // Añadir eventos click a los botones

  // Muestra la información del navegador
  btnInfo.addEventListener("click", function () {
    informacionNavegador();
  });

  // Redirecciona a la URL introducida en el input a la nueva ventana mywindow
  
  btnUrl.addEventListener("click", function () {
    // si la URL no está vacía, redireccionar a www.educa.jcyl.es"
    if(url.value === ""){
      myWindow = window.open('https://www.educa.jcyl.es');
    }else{
      myWindow = window.open(url.value);
    }
  });
  
  // Cierra la ventana emergente mywindow
  btnClose.addEventListener("click", function () {
    myWindow.close();
  });
  
  // Retroceder en la historia del navegador
  btnBack.addEventListener("click", function () {
    window.history.back();
  });
    
  // Avanzar en la historia del navegador
  btnForward.addEventListener("click", function () {
    window.history.forward();
  });
    
  // Temoporizador
  btnStartTimer.addEventListener("click", function () {
    // Iniciar el temporizador timer cada segundo para poner en counter el valor de segundos transcurridos
  });

  btnStopTimer.addEventListener("click", function () {
    // Detener el temporizador timer
  });

  btnRedirection.addEventListener("click", function () {
    // avisar en el párrafo redirection que se va a redireccionar a www.educa.jcyl.es en 5 segundos
    // Redireccionar a la página de la Junta de Castilla y León en una nueva pestaña en 5 segundos
  });

  updateScreenSize();
});

// Función para actualizar el tamaño de la pantalla
function updateScreenSize() {
  document.getElementById("width").textContent = 0;
  document.getElementById("height").textContent = 0;
}

// Evento de cambio de pantalla
// Si cambia el tamaño de la pantalla, llamamos de nuevo a la función updateScreenSize
window.onresize = updateScreenSize;

// Eventos de conexión a internet
/*
window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Desconectado';
  });
*/

/*
  window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Conectado';
  });
  */

// mostrar la información del navegador en una ventana emergente
function informacionNavegador() {
  let navegador = `
    Nombre del navegador = ${window.navigator.appName}
    Version del navegador = ${window.navigator.appVersion}    
    Sistema Operativo = ${window.navigator.platform}
    Idioma del navegador = ${window.navigator.languages[0]}
  `
  alert(navegador);
}
  

// Función para redireccionar a una URL en una ventana nueva
function redirect(url) {}
