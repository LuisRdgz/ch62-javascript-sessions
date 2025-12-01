let isActive = true;

if(isActive === true) console.log("El usuario está activo");

if(isActive === true) {
    console.log("El usuario está activo");
};

if(isActive) {
    console.log("El usuario está activo");
};

// Bloque de código
// Conjunto de sentencias agrupadas entre llaves {...}
{
    let firstName = "Juan";
    let lastName = "Pérez";
    var alias = "Juampi";
    let age = 28;
    console.log(firstName,lastName,alias);
    {// Bloque anidado
        let firstName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";
        var alias = "Serchmo";
        console.log(firstName,lastName,alias, age);
    }
};

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".
 Imprimir el valor del retorno por consola.
*/

const temperatura = (valor, operationFunction) => {
    return operationFunction (valor);
}

const evaluar = (valor) => {
    if (valor > 25){
        console.log("Hace calor");
    } else {
        console.log("Hace frío");
    }
}

temperatura(25, evaluar);

/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/
const Clima = (weatherCode) => {
    let mensaje = "";
    if (weatherCode === 0) {
        mensaje = "Clear sky";
    } else if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
        mensaje = "Mainly clear, partly cloudy, and overcast";
    } else if (weatherCode === 45 || weatherCode === 48) {
        mensaje = "Fog and depositing rime fog";
    } else {
        mensaje = "undefined";
    }
    return mensaje;
}

console.log(Clima(45));

document.getElementById("boton").addEventListener("click", () => {
    const estado = document.getElementById("estado").value;
    const img = document.getElementById("img");

    if (estado === "feliz"){
        console.log(estado);
        img.src = "./public/images/dino.jpg";
    } else {
        console.log(estado);
        img.src = "./public/images/dino-emo.png";
    }
});

const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};

console.log( getAccessLevel("editor") ); // Acceso para editar contenido

/*
 Refactorizar la función getWeather usando switch-case
*/

const climaSwitch = (weatherCode) => {
    let mensaje;
    switch (weatherCode){
        case 0:
            mensaje = "Clear Sky";
            break;
        case 1:
        case 2:
        case 3:
            mensaje = "Mainly clear, partly cloudy, and overcast";
            break;
        case 45:
        case 48:
            mensaje = "Fog and depositing rime fog";
            break;
        default:
            mensaje = "undefined";
    }
    return mensaje;
}

console.log(climaSwitch(0));

const climaSwitchCase = (weatherCode) => {
    switch (weatherCode){
        case 0:
            return "Clear Sky";
        case 1:
        case 2:
        case 3:
            return "Mainly clear, partly cloudy, and overcast";
        case 45:
        case 48:
            return "Fog and depositing rime fog";
        default:
            return "undefined";
    }
}

console.log(climaSwitchCase(2));

/*
 Dado un número entero, imprimir:

 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 */
function clasificarNumeroIfElse(numero) {
    if (numero < 0) {
      return "Negativo";
    } else if (numero === 0) {
      return "Cero";
    } else if (numero > 0 && numero < 100) {
      return "Positivo";
    } else {
      return "Grande";
    }
  }
  
  console.log(clasificarNumeroIfElse(-5));   // Negativo
  console.log(clasificarNumeroIfElse(0));    // Cero
  console.log(clasificarNumeroIfElse(50));   // Positivo
  console.log(clasificarNumeroIfElse(100));  // Grande

  // ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.
 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 
*/
const votingEligibility = (age) => {
    return (age >= 18) ? "puede votar" : "No puede votar";
}

console.log(votingEligibility(20));
console.log(votingEligibility(15));

/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/

const parImpar = (num) => {
    return ((num % 2) == 0) ? `${num} Es número par` : `${num} Es número impar`;
}

console.log(parImpar(10));
console.log(parImpar(5));