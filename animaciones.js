
function saludar () {
    let nombre = prompt ("¡Bienvenido!, Ingrese su nombre")
    alert ("¡Hola " + nombre + "!"+ " Gracias por contactarse con nosotros")
}
saludar ()

function paisDeResidencia () {
    let pais = prompt ("¿De qué país sos?")
    if (pais && pais.toLowerCase () === "argentina") {
        alert ("¡Que bueno! Nosotros también somos de Argentina");
    }
    else {
        alert ("¡Que pena! Estamos lejos, nosotros somos de Argentina")
    }
}
paisDeResidencia ()

function juegoDeNumero () {
    alert ("Vamos a jugar un juego. Pensá en un número del 1 al 10. Luego presione aceptar")
    alert ("Sumale 6 y luego presione aceptar")
    alert ("Ahora sumale 2")
    alert ("Finalmente restale el número que pensaste al comienzo ")
    alert ("Vamos a adivinar tu número")
    alert ("Tu número era el 8") 
    alert ("¡Adivinamos! Ahora queremos saber un poco más de vos")   
}

juegoDeNumero()

function PasosAlDia () {
    let CualEs = parseInt  (prompt ("¿Cuantos pasos por día haces?"))
    const Promedio = 10000
    if (CualEs >= Promedio) {
        alert ("Muy bien, caminas más de 10000 por día")
    } 
    else {
        function resta () {
          alert  ("Que pena, te faltan " + (Promedio - CualEs) + " para hacer 10000 pasos al día")
        }
        resta ()
    }
}

PasosAlDia ()



let numero3 = 0;
let EscribeUnNumero = parseInt(prompt("Escribe un numero del 1 al 10"));
let numeroRepetido = 0;

if (EscribeUnNumero >= 1 && EscribeUnNumero <= 10) {
    for (numero3 = 1; numero3 <= EscribeUnNumero; numero3++) {
        for (numeroRepetido = 1; numeroRepetido <= numero3; numeroRepetido++) {
            console.log (numeroRepetido + " ");
        }
    }
} else {
    console.log ("No es un número válido");
}

let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));

// Verifica que las notas sean números válidos
if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
  // Calcula el promedio de las notas
  let promedio = (nota1 + nota2 + nota3) / 3;

  // Muestra el resultado
  alert("El promedio de las tres notas es: " + promedio.toFixed(2));
} else {
  alert("Por favor, ingrese notas válidas como números.");
}
