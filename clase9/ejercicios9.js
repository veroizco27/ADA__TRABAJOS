// =======================================
// TAREA 9 - EJERCICIOS CLASE 9
// Curso ADA
// =======================================



// =======================================
// EJERCICIO 1: Comparar dos números
// =======================================

// Pedimos dos números al usuario
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));

// Comparamos cuál es mayor o si son iguales
if (number1 > number2) {
  console.log("The first number is greater");
} else if (number2 > number1) {
  console.log("The second number is greater");
} else {
  console.log("Both numbers are equal");
}



/*
// =======================================
// EJERCICIO 2: Verificar si un número está en un rango
// =======================================

// Definimos el rango mínimo y máximo
const MIN_RANGE = 10;
const MAX_RANGE = 50;

// Pedimos un número al usuario
let number = parseFloat(prompt("Enter a number:"));

// Verificamos si está dentro del rango
if (number >= MIN_RANGE && number <= MAX_RANGE) {
  console.log("The number is within the range");
} else {
  console.log("The number is outside the range");
}
*/



/*
// =======================================
// EJERCICIO 3: Operaciones lógicas booleanas
// =======================================

// Pedimos dos valores booleanos (true o false)
let condition1 = prompt("Enter true or false for condition1:") === "true";
let condition2 = prompt("Enter true or false for condition2:") === "true";

// Mostramos combinaciones lógicas
console.log("AND:", condition1 && condition2);
console.log("OR:", condition1 || condition2);
console.log("NOT condition1:", !condition1);
console.log("NOT condition2:", !condition2);
*/



/*
// =======================================
// EJERCICIO 4: Comparar nombres
// =======================================

// Pedimos el nombre del usuario
let name = prompt("Enter your name:");
let myName = "Veronica";

// Verificamos si los nombres coinciden
if (name === myName) {
  console.log("The names are the same");
} else {
  console.log("The names are different");
}
*/



/*
// =======================================
// EJERCICIO 5: Mayor de tres números
// =======================================

// Pedimos tres números
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

// Asumimos que el primero es el mayor
let greatest = num1;

// Comparamos con los demás
if (num2 > greatest) {
  greatest = num2;
}
if (num3 > greatest) {
  greatest = num3;
}

// Mostramos el mayor
console.log("The greatest number is: " + greatest);
*/



/*
// =======================================
// EJERCICIO 6: Verificar si es mayor de edad
// =======================================

// Pedimos la edad del usuario
let age = parseInt(prompt("Enter your age:"));

// Verificamos si es mayor o menor de edad
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are underage");
}
*/



/*
// =======================================
// EJERCICIO 7: Convertir kilogramos a libras
// =======================================

// Pedimos el peso en kilogramos
let weightKg = parseFloat(prompt("Enter your weight in kilograms:"));

// Convertimos a libras
let weightLb = weightKg * 2.20462;

// Mostramos el resultado
console.log("Your weight in pounds is: " + weightLb.toFixed(2));
*/



/*
// =======================================
// EJERCICIO 8: Tipo de triángulo
// =======================================

// Pedimos los tres lados del triángulo
let side1 = parseFloat(prompt("Enter the first side:"));
let side2 = parseFloat(prompt("Enter the second side:"));
let side3 = parseFloat(prompt("Enter the third side:"));

// Determinamos el tipo de triángulo
if (side1 === side2 && side2 === side3) {
  console.log("The triangle is equilateral");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("The triangle is isosceles");
} else {
  console.log("The triangle is scalene");
}
*/



/*
// =======================================
// EJERCICIO 9: Área y perímetro de un círculo
// =======================================

// Definimos la constante PI
const PI = 3.14159;

// Pedimos el radio
let radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculamos área y perímetro
let area = PI * radius * radius;
let perimeter = 2 * PI * radius;

// Mostramos los resultados
console.log("The area is: " + area.toFixed(2));
console.log("The perimeter is: " + perimeter.toFixed(2));
*/



/*
// =======================================
// EJERCICIO 10: Día de la semana
// =======================================

// Pedimos un número del 1 al 7
let dayNumber = parseInt(prompt("Enter a number from 1 to 7:"));

// Mostramos el día correspondiente
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Error: number must be between 1 and 7");
}
*/