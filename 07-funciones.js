

function saludar() {
    console.log(' Hola Miguel')
}

saludar();

/*
Math.Random(); Número aleatorio
Math.floor(); Número redondear
*/

function getRandomNumber() {
    const random = Math.random();

    const multiplied = random * 10;

    const rounded = Math.floor( multiplied )

    const result = rounded + 1;

    return result;
}

console.log(getRandomNumber());



// Function expression                          No les pasa el hoisting, solo se pueden llamar después de declarada la variable de la función
const suma = function( a,b ) {
    return a + b;
}



// Arrow functions
const saludar = ( usuario ) => {
    console.log( `Hola ${usuario}` )
}

/* 
Return implícito
Cuando una función flecha tiene una sola expresión, podemos omitir las llaves {} y la palabra clave return para hacerla aún más corta.
Esto se conoce como return implícito.
Vamos a pasar una función regular a una función flecha y vamos a ver cómo se ve finalmente con return implícito:
*/

const sumar = ( a, b ) => a + b;