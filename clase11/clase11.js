// ===============================
// EJERCICIO 1: Positivo, negativo o cero?
// ===============================
let num1 = Number(prompt("Ejercicio 1: Ingresa un número"));

if (num1 > 0) {
  console.log("El número es positivo");
} else if (num1 < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// ===============================
// EJERCICIO 2: Semáforo inteligente
// ===============================
let color = prompt("Ejercicio 2: Ingresa un color del semáforo").toLowerCase();

switch (color) {
  case "rojo":
    console.log("Alto, no puedes avanzar.");
    break;
  case "amarillo":
    console.log("Precaución, prepárate para avanzar.");
    break;
  case "verde":
    console.log("Avanza con seguridad.");
    break;
  default:
    console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}

// ===============================
// EJERCICIO 3
// ===============================
let num2 = Number(prompt("Ejercicio 3: Ingresa un número positivo"));

for (let i = 1; i <= num2; i++) {
  console.log(i);
}

// ===============================
// EJERCICIO 4
// ===============================
let num3 = Number(prompt("Ejercicio 4: Ingresa un número"));

if (num3 % 2 === 0) {
  console.log("El número es par. Se puede dividir entre 2.");
} else {
  console.log("El número es impar. No se divide exactamente entre 2.");
}

// ===============================
// EJERCICIO 5: Números pares
// ===============================
let inicio = Number(prompt("Ejercicio 5: Ingresa el número inicial"));
let fin = Number(prompt("Ingresa el número final"));

if (inicio > fin) {
  console.log("Los valores son inválidos");
} else {
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// ===============================
// EJERCICIO 6 Tabla de multiplicar
// ===============================
let num4 = Number(prompt("Ejercicio 6: Ingresa un número"));

for (let i = 1; i <= 10; i++) {
  console.log(num4 + " x " + i + " = " + (num4 * i));
}

// ===============================
// EJERCICIO 7Calculadora simple
// ===============================
let a = Number(prompt("Ejercicio 7: Ingresa el primer número"));
let b = Number(prompt("Ingresa el segundo número"));
let operacion = prompt("Ingresa la operación: suma, resta, multiplicacion o division");

switch (operacion) {
  case "suma":
    console.log("Resultado:", a + b);
    break;
  case "resta":
    console.log("Resultado:", a - b);
    break;
  case "multiplicacion":
    console.log("Resultado:", a * b);
    break;
  case "division":
    console.log("Resultado:", a / b);
    break;
  default:
    console.log("Operación inválida");
}

// ===============================
// EJERCICIO 8 Múltiplos de un número
// ===============================
let num5 = Number(prompt("Ejercicio 8: Ingresa un número positivo"));

for (let i = 1; i <= 100; i++) {
  if (i % num5 === 0) {
    console.log(i);
  }
}

// ===============================
// EJERCICIO 9 Cuenta regresiva
// ===============================
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("¡Despegue!");

// ===============================
// EJERCICIO 10 Adivina el número
// ===============================
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let acierto = false;

for (let i = 1; i <= 3; i++) {
  let intento = Number(prompt("Ejercicio 10 - Intento " + i + ": Adivina el número (1 al 10)"));

  if (intento === numeroSecreto) {
    console.log("¡Felicidades! Adivinaste el número.");
    acierto = true;
    break;
  }
}

if (!acierto) {
  console.log("No acertaste. El número era: " + numeroSecreto);
}