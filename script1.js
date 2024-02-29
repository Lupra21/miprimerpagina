//alert("Hola este es mi Javascript");

//SELECCIONAR ELEMENTOS

//let contenidoTitulo = "Nombre"; 
//Asi llamamos a la línea que queremos modificar para hacer la condicional.
//let titulo = document.querySelector(".parrafo1");
//titulo.innerHTML = contenidoTitulo

//CONDICIONALES:
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)

//Funciones

//let nombre = "Sofía";
//let ciudad = "Buenos Aires";
//let gusto = "Dulce de leche";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto){
 ///   let contenido = 'Me llamo ${nombre}, nací en ${ciudad}, y soy hincha de Defensor. Me gusta el ${gusto}, ver futbol y tomar mate.'
    //return contenido;
//}

//para poder modificar y utilizar la función:
///parrafo.innerText = cambiar.Texto (nombre, ciudad, gusto);




// document.addEventListener("DOMContentLoaded", function () {
//     // Tu código aquí
//     let menu_responsive = document.querySelector(".checkbtn");
  
//     menu_responsive.addEventListener("click", function () {
//       let navbar = document.querySelector(".navbar");
//       navbar.classList.toggle("active");
//     });
//   });
document.addEventListener("DOMContentLoaded", function () {
//definimos la variable para hacer diseño responsive:
let menu_responsive = document.querySelector(".checkbtn");
//asignamos una función a un evento, evento a un click.(onclick)
//escucha cuando hacemos click en el elemento que definimos anteriormente (checkbtn)
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
}});


