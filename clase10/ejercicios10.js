// Uso prompt-sync para poder pedir datos por consola
const prompt = require("prompt-sync")();

// --------------------------------------------------
// EJERCICIO 1
// Declaro dos variables y les asigno valores
// --------------------------------------------------

let edad = 20;
let peso = 60;

console.log("Ejercicio 1");
console.log("Edad:", edad);
console.log("Peso:", peso);
console.log("");

// --------------------------------------------------
// EJERCICIO 2
// Pido datos al usuario y muestro un mensaje
// --------------------------------------------------

let nombreUsuario = prompt("Ingrese su nombre: ");
let edadUsuario = prompt("Ingrese su edad: ");
let pesoUsuario = prompt("Ingrese su peso: ");

console.log("Ejercicio 2");
console.log(
  "Hola " +
    nombreUsuario +
    ", tienes " +
    edadUsuario +
    " años y pesas " +
    pesoUsuario +
    " kg."
);
console.log("");

// --------------------------------------------------
// EJERCICIO 3
// Constantes y validación de edad
// --------------------------------------------------

// Defino las edades mínima y máxima
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// Pido la edad y la convierto a número entero
let edadIngresada = parseInt(prompt("Ingrese su edad para validarla: "));

console.log("Ejercicio 3");

if (edadIngresada >= EDAD_MINIMA && edadIngresada <= EDAD_MAXIMA) {
  console.log("La edad está dentro del rango permitido.");
} else {
  console.log("La edad no está permitida.");
}
console.log("");

// --------------------------------------------------
// EJERCICIO 4
// Tipos de datos
// --------------------------------------------------

let verdadero = true; // boolean
let texto = "Estoy aprendiendo JavaScript"; // string
let numero = 10; // number
let nada = null; // sin valor

// Hago una operación matemática
let resultadoNumero = numero + 5;

// Concateno un texto
let textoNuevo = texto + " en programación";

console.log("Ejercicio 4");
console.log("Resultado de la suma:", resultadoNumero);
console.log("Texto concatenado:", textoNuevo);

// Verifico el valor del boolean
if (verdadero) {
  console.log("La variable verdadero es true");
} else {
  console.log("La variable verdadero es false");
}

// Verifico si nada es null
if (nada === null) {
  console.log("La variable nada no tiene valor");
}
console.log("");

// --------------------------------------------------
// EJERCICIO 5
// Operadores matemáticos
// --------------------------------------------------

let primerNumero = 8;
let segundoNumero = 4;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

console.log("Ejercicio 5");
console.log("Suma:", resultadoSuma);
console.log("Resta:", resultadoResta);
console.log("Multiplicación:", resultadoMultiplicacion);
console.log("División:", resultadoDivision);
console.log("");

// --------------------------------------------------
// EJERCICIO 6
// Comparaciones y operadores lógicos
// --------------------------------------------------

let num1 = 12;
let num2 = 15;

// Verifico si los dos números son mayores que 10
let comparacion = num1 > 10 && num2 > 10;

console.log("Ejercicio 6");
console.log("¿Los dos números son mayores que 10?", comparacion);
console.log("");

// --------------------------------------------------
// EJERCICIO 7
// Intercambio de valores
// --------------------------------------------------

let a = 3;
let b = 7;

console.log("Ejercicio 7");
console.log("Antes del intercambio:");
console.log("a =", a);
console.log("b =", b);

// Uso una variable auxiliar para intercambiar
let aux = a;
a = b;
b = aux;

console.log("Después del intercambio:");
console.log("a =", a);
console.log("b =", b);
console.log("");

// --------------------------------------------------
// EJERCICIO 8
// Conversión de Celsius a Fahrenheit
// --------------------------------------------------

let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius: "));
let fahrenheit = celsius * 9 / 5 + 32;

console.log("Ejercicio 8");
console.log("Temperatura en Fahrenheit:", fahrenheit);
console.log("");

// --------------------------------------------------
// EJERCICIO 9
// Cálculo del IMC
// --------------------------------------------------

let pesoIMC = parseFloat(prompt("Ingrese su peso en kg: "));
let alturaIMC = parseFloat(prompt("Ingrese su altura en metros: "));

let imc = pesoIMC / (alturaIMC * alturaIMC);

console.log("Ejercicio 9");
console.log("Su IMC es:", imc);
console.log("");

// --------------------------------------------------
// EJERCICIO 10
// Cálculo de descuento
// --------------------------------------------------

let precioOriginal = parseFloat(prompt("Ingrese el precio original: "));
let porcentajeDescuento = parseFloat(
  prompt("Ingrese el porcentaje de descuento: ")
);

// Calculo el descuento y el precio final
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;

console.log("Ejercicio 10");
console.log("El precio final con descuento es:", precioFinal);