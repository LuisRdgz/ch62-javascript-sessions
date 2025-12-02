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