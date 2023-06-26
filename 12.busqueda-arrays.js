// Búsqueda en Arrays con métodos

/* Existen varios métodos en JavaScript que te permiten, específicamente, buscar dentro de un Array.
Estos métodos incluyen indexOf, some, every, find, findIndex e includes. */

const emojis = ['✨', '🥑', '😍']

//1. IndexOf: El método indexOf te permite encontrar la posición de un elemento dentro de un Array. Si el elemento no existe, entonces retorna -1.
const posicionCorazon = emojis.indexOf('😍')

console.log('Posición del emoji:',posicionCorazon) // -> 2;

//2. Includes: El método includes determina si un Array incluye un determinado elemento, devolviendo true o false según corresponda.
const tieneCorazon = emojis.includes('😍')

console.log('Está incluido en el array:',tieneCorazon) // -> true;

/*3. Some:
El método some te permite verificar si al menos uno de los elementos de un Array cumple con una condición.
Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento cada uno de los elementos del Array y debe retornar un valor booleano.
Si al menos uno de los elementos retorna true, entonces el método some retorna true. Si ninguno de los elementos retorna true, entonces el método some retorna false. */
const tieneCorazonSome = emojis.some((emoji) => emoji === '😍')
console.log('Alguno tiene corazon:',tieneCorazonSome) // -> true

const names = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = names.some((name) => name.length > 3)
console.log( 'Al menos alguno tienen nombre largo: ' , tieneNombreLargo) // -> false


//4. Every
// El método every te permite verificar si todos los elementos de un Array cumplen con una condición.
//Es similar a some, pero en lugar de verificar si al menos uno de los elementos cumple con la condición, los verifica todos.
const numbers = [2, 4, 6, 10, 12];
const todosSonPares = numbers.every( (numeros) => numeros % 2 === 0 );
console.log( 'Todos son pares: ' , todosSonPares );

const names2 = ['Alvara', 'Betsya', 'Leoa', 'Johnatana'];
const todosSonNombresLargos = names2.every( (name) => name.length > 3 );
console.log('Todos tienen nombre mayor de tres letras:', todosSonNombresLargos);

/*5. Find: 
Devuelve el primer elemento que cumple con la condición 
El método find te permite encontrar el primer elemento que cumple con una condición.
Lo interesante es que este método te devuelve el elemento en sí, no un valor booleano como some y every. 
Aunque el funcionamiento es igual: hay que pasarle una función como argumento que retorne un valor booleano.  

Si no encuentra ningún elemento que cumpla con la condición, el método find retorna undefined.
*/
const numbers3 = [1, 5, 6, 8, -10, 4, -7];
const firstNegativeNumber = numbers3.find( (number) => number < 0 );
console.log('Primer valor en el array que es negativo: ',firstNegativeNumber)


/*6. findIndex:
Devuelve el indice del primer elemento que cumple con la condición.

Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.
*/
const numbers4 = [13, 27, 44, -10, 81];
const firstNegativeNumberIndex = numbers4.findIndex( (number) => number < 0 );
console.log('Indice del primer número negativo en el array', firstNegativeNumberIndex);


// Ejercicios
/* Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".

Usa el método endsWith() de string para resolverlo.  */

const todasTerminanEnA = names2.every( (nombre) => nombre.endsWith('a') );
console.log('Todas las palabras terminan en S:', todasTerminanEnA);




