// Transformacion Arrays

// 1. Filter(): Un nuevo array con los elementos que cumplan una condición: 
//El método filter crea un nuevo array con todos los elementos que devuelven true al ejecutar una función que le pasamos como parámetro.

const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter( function( numbers ) {
    return numbers % 2 === 0
});
console.log('Array original', numbers);
console.warn('Método Filter')
console.log( 'Números pares', evenNumbers );

const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato', 'Barrancabermeja', 'Iron Man'];
console.log('Array original', strings);

const stringsWithA = strings.filter( string => string.includes('a') );
console.log('Palabras que incluyan la A', stringsWithA);



// 2. Map(): Un nuevo array con los elementos transformados.
console.warn('Método Map');

const doubleNumbers = numbers.map( (number) => number * 2);

console.log('Array transformado con el método Map', doubleNumbers);

const stringsLength = strings.map( (string) => string.length );
console.log('Array de la longitud de las palabras', stringsLength);


//3. Map() & Filter() || Filter() && Map()
/* En JavaScript podemos crear un encadenamiento de métodos. De esta forma, si un método devuelve un array, podemos llamar a otro método sobre ese array sin necesidad de guardarlo en una variable.
Imagina que queremos crear un array con el doble de los números y sólo quedarnos con los que sean mayores que 5. Podríamos hacerlo así:*/
console.warn('Combinación de Map() y Filter()')
const numbers2 = [1, 2, 3, 4, 5, 6, 7];

const numbers2Double = numbers2.map( ( num ) => num * 2 )
.filter( (num) => num > 5 );
console.log( 'Multiplicado por dos y mayor que cinco' ,numbers2Double);

const evenAndDouble = numbers2.filter( (num) => num % 2 === 0 )
.map( (num) => num * 2 );
console.log('Par y multiplicado por dos' , evenAndDouble);



// Reduce: Un único valor a partir de un array
/*   

El método reduce es un poco más complejo que los anteriores. Este método te permite crear un único valor a partir de un Array.

Recibe dos parámetros: una función que se ejecutará por cada elemento y un valor inicial, opcional, que será donde podremos acumular los valores.

El primer parámetro de reduce, que es la función que se ejecutará por cada elemento, recibe tres parámetros:

El acumulador: el valor que se va a ir acumulando en cada iteración
El elemento actual: el elemento del Array que estamos iterando en ese momento.
El índice: la posición del elemento actual en el Array.
Y debe devolver el valor que se va a acumular en cada iteración.

Un caso de uso muy típico de reduce es sumar todos los elementos de un Array:

*/

const numbers3 = [1, 2, 3];

const sum = numbers3.reduce( (accumulator, currentNumber) => {
    return accumulator + currentNumber;
}, 0);
console.log('Suma de un array con Reduce():', sum);



// Ejercicio
/* Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista.
Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.  */

function buscaPalabras( words, word ) {

    let indiceWord = words.indexOf(word);
    
    let palabrasMasGrandesQueWord = words.filter( (word) => word.length > indiceWord )

    return palabrasMasGrandesQueWord;

}


console.log(buscaPalabras(['Hola Mundo', 'Arroz', 'Yuca', 'A', 'Futbol'], 'Futbol'));