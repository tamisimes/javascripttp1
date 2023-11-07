
function saludar() {
    let nombre = prompt("¡Bienvenido!, Ingresa tu nombre")
    
    while (nombre === '' || /^[0-9]+$/.test(nombre) || nombre.trim() === '') {
        alert("Hola, digita bien tu nombre")
        nombre = prompt("¡Bienvenido!, Ingresa tu nombre")
    }

    alert("¡Hola " + nombre + "! Gracias por contactarte con nosotros")
}
saludar ()

function paisDeResidencia () {
    let pais = prompt ("¿De qué país sos?")
    if (pais && pais.toLowerCase () === "argentina") {
        alert ("¡Que bueno! Nosotros también somos de Argentina")
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
let EscribeUnNumero = parseInt(prompt("Escribí un numero del 1 al 10"));
let numeroRepetido = 0;

if (EscribeUnNumero >= 1 && EscribeUnNumero <= 10) {
    for (numero3 = 1; numero3 <= EscribeUnNumero; numero3++) {
        for (numeroRepetido = 1; numeroRepetido <= numero3; numeroRepetido++) {
            document.write (numeroRepetido + " ")
        }
    }
} else {
    console.log ("No es un número válido")
}

let notaPrimera = parseInt(prompt("Ahora contanos cuál fué tu primer nota de matemática:"))
let notaSegunda = parseInt(prompt("Ahora la segunda nota:"))
let notaTercera = parseInt(prompt("Y por último la tercera nota:"))

if (!isNaN(notaPrimera) && !isNaN(notaSegunda) && !isNaN(notaTercera)) {
  let promedio = (notaPrimera + notaSegunda + notaTercera) / 3

  alert("El promedio de las tres notas es: " + promedio.toFixed(2))
} else {
  alert("Ingresá números válidos")
}
