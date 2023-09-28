
let ejercicio = parseInt(
  prompt(
    "Elige un ejercicio:\n1. Ejercicio 1\n2. Ejercicio 2\n3. Ejercicio 3\n4. Ejercicio 4\n5. Ejercicio 5\n6. Ejercicio 6\n7. Ejercicio 7\n8. Ejercicio 8\n9. Ejercicio 9\n10. Ejercicio 10\n11. Ejercicio 11"
  )
);

switch (ejercicio) {
  case 1:
    ejercicio1();
    break;
  case 2:
    ejercicio2();
    break;
  case 3:
    ejercicio3();
    break;
  case 4:
    ejercicio4();
    break;
  case 5:
    ejercicio5();
    break;
  case 6:
    ejercicio6();
    break;
  case 7:
    ejercicio7();
    break;
  case 8:
    ejercicio8();
    break;
  case 9:
    ejercicio9();
    break;
  case 10:
    ejercicio10();
    break;
  case 11:
    ejercicio11();
    break;

  default:
    console.log("Elección inválida");
    break;
}

// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
function ejercicio1() {
  alert("un mensaje");
}

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
function ejercicio2() {
  document.write("Hello World");
}

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
function ejercicio3() {
  document.write(3 + 2);
}

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
function ejercicio4() {
  let nombre = prompt("Ingrese su nombre");
  document.write("Hola " + nombre);
}

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
function ejercicio5() {
  let num1 = parseInt(prompt("Ingrese el primer numero"));
  let num2 = parseInt(prompt("Ingrese el segundo numero"));
  document.write(num1 + num2);
}

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo:
function ejercicio6() {
  let num1 = parseInt(prompt("Ingrese el primer numero"));
  let num2 = parseInt(prompt("Ingrese el segundo numero"));

  if (num1 > num2) {
    document.write("El numero mayor es " + num1);
  } else if (num2 > num1) {
    document.write("El numero mayor es " + num2);
  } else {
    document.write("Los numeros ingresados son iguales");
  }
}

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo:
function ejercicio7() {
  let num1 = parseInt(prompt("Ingrese el primer numero"));
  let num2 = parseInt(prompt("Ingrese el segundo numero"));
  let num3 = parseInt(prompt("Ingrese el tercer numero"));

  if (num1 > num2 && num1 > num3) {
    document.write("El numero mayor es " + num1);
  } else if (num1 > num2 || num1 > num3) {
    document.write("El numero mayor es " + num1);
  } else if (num2 > num1 && num2 > num3) {
    document.write("El numero mayor es " + num2);
  } else if (num1 > num2 || num1 > num3) {
    document.write("El numero mayor es " + num1);
  } else if (num3 > num1 && num3 > num2) {
    document.write("El numero mayor es " + num3);
  } else if (num1 > num2 || num1 > num3) {
    document.write("El numero mayor es " + num1);
  } else {
    document.write("Los numeros ingresados son iguales");
  }
}

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo:
function ejercicio8() {
  let num = parseInt(prompt("Ingrese un numero"));

  if (num % 2 === 0) {
    document.write(num + " es divisible en 2 y el resultado es " + num / 2);
  } else {
    document.write(num + " no es divisible en dos");
  }
}

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
function ejercicio9() {
  function contarVocales(frase) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
      if (vocales.indexOf(frase[i]) !== -1) {
        contador++;
      }
    }
    return contador;
  }

  function obtenerVocales(frase) {
    let vocales = "aeiouAEIOU";
    let resultado = [];
    for (let i = 0; i < frase.length; i++) {
      if (vocales.indexOf(frase[i]) !== -1) {
        resultado.push(frase[i]);
      }
    }
    return resultado.join(", ");
  }

  let frase = prompt("Introduce una frase:");
  let numVocales = contarVocales(frase);
  let vocalesEnFrase = obtenerVocales(frase);

  alert(`La frase contiene ${numVocales} vocal/es ${vocalesEnFrase}`);
}

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
function ejercicio10() {
  let num = parseInt(prompt("Ingrese un numero"));

  if (num % 2 === 0) {
    document.write(num + " Es divisible en 2");
  } else if (num % 3 === 0) {
    document.write(num + " Es divisible en 3");
  } else if (num % 5 === 0) {
    document.write(num + " Es divisible en 5");
  } else if (num % 7 === 0) {
    document.write(num + " Es divisible en 7");
  } else {
    document.write(num + " No es divisible por 2, 3 , 5 o 7");
  }
}

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
function ejercicio11() {
  let num = prompt("Escribe un número");
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    if (num % 2 === 0) {
      document.write("Es divisible por 2. ");
    }
    if (num % 3 === 0) {
      document.write("Es divisible por 3. ");
    }
    if (num % 5 === 0) {
      document.write("Es divisible por 5. ");
    }
    if (num % 7 === 0) {
      document.write("Es divisible por 7. ");
    }
  } else {
    document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
  }
}
