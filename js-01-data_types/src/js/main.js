console.log("session JS01 - Datatypes");

let userName = "Luis Rivaldo";
let userAge = 25;
let userNumberPhone = 8134489572;

const firstName = "Daniel";
let currentAge = 24;
const currentNationality = "Mexican";

// De las variables anteriores muestra en console el sig. mensaje:
// "My name is Daniel, I am 24 years old and I am Mexican."
console.log(`My name is ${firstName}, I am ${currentAge} years old and I am ${currentNationality}`);

const gravityEarth = 9.81;

console.log(typeof gravityEarth);

// --- Precisión y Límites ---
// Cuidado: JS usa punto flotante (IEEE 754), lo que causa errores en decimales.
console.log("--- Precisión ---");
console.log(`0.1 + 0.2 = ${0.1 + 0.2}`); // 0.30000000000000004 (Ojo en entrevistas)
console.log("--- Límites ---");
console.log(`Entero seguro máximo: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); // 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); // 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); // 9007199254740996

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.
 Las operaciones con un bigInt se debe hacer con otro bigInt
*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }`); // 9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }`); // 9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }`); // 9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }`); // 9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }`); // 9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }`); // 9007199254740997

/* ================================================================
   5. CONVERSIÓN DE DATOS (TYPE CASTING) 
   ================================================================
   Transformar un tipo de dato en otro.
*/
// --- 5.1 Conversión Implícita (Coerción) ---
// JS intenta "ayudarte" convirtiendo tipos automáticamente.

console.log("--- Implícita ---");
console.log("5" + 2); // "52" (concatena porque hay un string)
console.log("5" - 2); // 3 (Matemática, convierte string a number)
console.log("5" * "2"); // 10

const myNumber = "10";
console.log( `Multiplicación: ${myNumber * 2}`); //20 (hace la operación con el valor númerico del string)
console.log( typeof myNumber); // string

// --- 5.2 Conversión Explícita (Recomendado) ---
// Nosotros controlamos el cambio.
// Opciones:
// Number(): Convierte todo o devuelve NaN si hay letras.
// parseInt(): Busca enteros al inicio.
// parseFloat(): Busca decimales al inicio.