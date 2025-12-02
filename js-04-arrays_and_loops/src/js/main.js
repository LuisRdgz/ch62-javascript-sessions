// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento

const techStack = ["HTML", "CSS", "JavaScript"];

console.log(`Accediendo al primer elemento: ${techStack[0]}`);
console.log(`Accediendo al segundo elemento: ${techStack[1]}`);
console.log(`Accediendo al último elemento: ${techStack[techStack.length-1]}`);

//Modificando los elementos

techStack[1] = "Sass";
console.log("Después de la modificación: ", techStack);

// Agregar un nuevo elemento
techStack[techStack.length] = "TypeScript";
console.log("Después de la modificación: ", techStack);

const shoppingList = ["Leche", "Huevos"];

// 1. push(): Agrega al FINAL (El mas usado)
// Retorna la nueva longitud del array
shoppingList.push("Pan");
console.log("Push: ", shoppingList);

// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift: ", shoppingList);

// --- Eliminar Elementos ---
// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);
// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"
console.log("Lista actual:", shoppingList);

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("colores iniciales (con .toString()): ", colors.toString());
console.log("colores iniciales (con .join()): ", colors.join(" - "));

//Agregar 2 elemento en el indice 2, sin eliminar otros elementos
colors.splice(2, 0, "Rosa", "Cian");
console.log("Después de agregar con splice: ", colors);

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList = ["Danna", "Aitana"];
console.log(`Lista de invitados: ${guestList.join(", ")}`); 

const arreglo = (invitado, operationFunction) => {
    return operationFunction (invitado);
}

const agregarFinal = (invitado) => guestList.push(invitado);
const agregarInicio = (invitado) => guestList.unshift(invitado);
const removerInvitado = (invitado) => guestList.splice(invitado, 1);
const reemplazarInvitado = (invitado) => guestList.splice(1, 0, invitado);

arreglo("Fer", agregarFinal);
console.log(`Agregando un invitado al final: ${guestList.join(", ")}`);
arreglo("Karen", agregarInicio)
console.log(`Agregando un invitado al inicio: ${guestList.join(", ")}`);
arreglo(1, removerInvitado)
arreglo("Anne", reemplazarInvitado)
console.log(`Reemplazando al segundo invitado: ${guestList.join(", ")}`);
console.log(`Lista actualizada de invitados: ${guestList.join(", ")} `);

/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.
   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/
// Navegamos a sitios (push)
const historyStack =[];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");
console.log("Historial actual:" + historyStack);

// Presiono el botón de "atras"
console.log(`Regresando a: ${historyStack.pop()}`);

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

const taskList = [];

taskList.push("Lava los trastes");
taskList.push("Lava la ropa");
taskList.push("Tiende la cama");
console.log("Lista de tareas: ", taskList);
console.log(`Eliminando la primer tarea de la lista: ${taskList.shift()}`);
console.log(`¡TAREA URGENTE! ${taskList.unshift("HACER LAS COMPRAS")}`);
console.log(taskList.toString());
console.log(`Completando la tarea urgente: ${taskList.shift()}`);
console.log("Tareas pendientes: " + taskList.toString());

/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================
   Estructuras que repiten un bloque de código mientras una condición sea verdadera.
*/
// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }
// Imprimier los números del 1 al 5

for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

// ---------------------- Uso de break en ciclos -------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo

for (let i = 1; 1 <= 10; i ++){
   if(i === 6) {
      console.log("¡Se alcanzó el número 6!");
      break;
   }
      console.log(`(Con break) Número ${i}`);
}

// =============================================
let iteracion = 0;
for (  ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0 , 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// =====================================================
let myIteration; 
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); // 0 , 1, 2
     if( myIteration === 2) break;  
}
console.log("Final", myIteration); //  2

// =====================================================
 let jiteration;
for ( jiteration = 0; jiteration < 3; jiteration++ ) {
   console.log("For loop", jiteration ); //
}
console.log("Final", jiteration); //

// =====================================================
let k;
for ( k = 0; k < 5; k++ )         ; 
{
   console.log("Valor de", k ); // 5
}
console.log("Final", k); // 5

// ------ 2. Ciclo WHILE (Basado en condición) ---------
// Úsalo cuando NO sabes cuántas veces se repetirá, depende de algo externo
// Cuidado: Si la condición nunca es falsa, creas un bucle infinito (Infinite loop)

/*
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");
*/

// Imprimir los números del 1 al 5 (Usando while)
let i = 1;
while(i <= 5){
   console.log(i);
   i ++;
}

const countries = ["México", "USA", "Canadá", "Japón"];

for (let index = 0; index < countries.length; index++) {
   const element = countries[index];
   console.log(`(for) País en índice ${index + 1}: ${element}`);
}

// Usando For OF (ES6+)
for (const country of countries){
   console.log(`(for of) País: ${country}`);
}

// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.

const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;

for (const transaction of transactions){
   console.log(`Transacción = ${transaction}`);
   totalBalance += transaction;
   console.log(`Balance total = ${totalBalance}`);
}
console.log(`El balance total es: ${totalBalance}`);