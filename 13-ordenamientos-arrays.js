// Ordenamiento de Arrays en JavaScript

// Método Sort(): Modifica el array original

let numeros = [5, 10, 2, 25, 7];

console.warn('Array Original');
console.log(numeros);
console.warn('Ordenamiento con Sort() normal');
console.log( 'Ordenamiento con Sort() normal', numeros.sort());

console.warn('Ordenamiento con Sort() modificado');
numeros.sort( (a,b) => a - b );
console.log( numeros );

console.warn('Ordenamiento con Sort() modificado');
numeros.sort( function( a, b ) {
    return b - a;
} );
console.log( numeros );


// Método toSorted(): No módifica el array original pero su suporte en navegadores ahora mismo es limitado
console.warn('Metodo toSorted()');
let numerosOrdenados = numeros.toSorted((a, b) => {
    return a - b
  })
  
  console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
  console.log(numeros) // [5, 10, 2, 25, 7]



/*  También podrías usar el operador de propagación (...) para crear una copia del array original y ordenarla: */
console.warn('Utilizando una copia del array con el operador ...');
let numeros2 = [5, 10, 2, 25, 7];

const copiaNumeros = [...numeros];
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros); // [2, 5, 7, 10, 25]
console.log(numeros); // [5, 10, 2, 25, 7]


// Ejercicio

/* Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto.
Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.  */

function sortAbsoluteNumbers( numbers ) {

    numbers.sort( function(a,b) {
        return Math.abs(a) - Math.abs(b);  // Se garantiza el ordenamiento sin que se pierda el signo.
    });

    return numbers;
}