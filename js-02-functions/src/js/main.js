

/**
 * Función que recibe nombre y apellido y retorna el nombre completo
 * 
 */
const printFullName = function(firstName, lastName){
    return `${firstName} ${lastName} estudiante de la cohorte 62`;
};


const printFullName2 = (firstName = "Kevin", lastName = "Najera") => `${firstName} ${lastName} estudiante de la cohorte 62`;

console.log(printFullName2 ("Luis", "Rodriguez"));
console.log(printFullName2());


// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.

const areaRectangulo = (base = 10, altura = 5) => base * altura;

console.log(areaRectangulo ());

const areaRectangulo2 = (base = 10, altura = 5) => `El área del rectangulo es = ${base * altura} cm`;

console.log(areaRectangulo2 ());
console.log(areaRectangulo2 (2, 6));

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

// console.log(`Usando incorrectamente la función: ${calculate(5, 3, 10)}`);

const subtract = (a, b) => a-b;
const multiply = (a, b) => a * b;
// Crear una función que sume dos números

const sum = (a,b) => a + b;
const divide = (a,b) => a/b;

// Aplicar a la función calculate la función suma
console.log(`Realizando una resta: ${calculate(5, 3, subtract)}`);
console.log(`Realizando una multiplicación: ${calculate(4, 5, multiply)}`);
console.log(`Realizando una suma: ${calculate(70, 4, sum)}`);
console.log(`Realizando una división: ${calculate(100, 4, divide)}`);

// Aplicar una función que calcule la potencía de un número
console.log(`Realizando una potencia: ${calculate(2, 3, (a,b) => a ** b)}`);
// Aplicar una función que calcule el residuo de una devisión, para saber si 6 es divisible entre 3
console.log(`Realizando un residuo: ${calculate(6, 3, (a,b) => a % b)}`);


