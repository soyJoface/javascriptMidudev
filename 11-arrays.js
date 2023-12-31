/* Hasta ahora hemos visto algunos tipos de datos. Cadenas de texto, números, booleanos... Pero... 
¿Qué pasa si queremos tener una colección de ellos? En JavaScript tenemos los arrays. */

const numeros = [1, 2, 3, 4, 5]
let names = ['Dani', 'Miguel', 'Maria']




// Métodos = Funciones que se ejecutan sobre un objeto
const frutas = ['Manzana', 'Pera', 'Plátano', 'Fresa'];

frutas.push('Melocoton') // Añadió el elemento al final del array y RETORNA LA NUEVA LONGITUD DEL ARRAY;
frutas.pop() // Elimina el último elemento y RETORNA EL ELEMENTO ELIMINADO;
frutas.shift() // Elimina el primer elemento y RETORNA EL ELEMENTO ELIMINADO;
frutas.unshift('Papaya') // Añade un elemento a la primera posición del array y RETORNA LA NUEVA LONGITUD DEL ARRAY;


//Concatener arrays:

// 1. Concat
const numbers = [1, 2, 3];
const numbers2 = [ 4, 5 ];

const allNumbers = numbers.concat( numbers2 );  // Devuelve un nuevo array que tendrá al primero y segundo array concatenado
console.log( allNumbers );

// 2. Spread Operator

const allNumbersSpread = [...numbers, ...numbers2];
console.log( allNumbersSpread );



// Recorrer arrays:

// 1. While
console.log('Recorriendo Arrays con While');
let i = 0;

while( i < frutas.length ) {
    console.log( frutas[i] )
    i++;
}

console.log('Recorriendo Arrays con For');
// 2. For
for( let i = 0; i < frutas.length; i++ ) {
    console.log(frutas[i])
}


console.log('Recorriendo Arrays for of');
//3. For of
for (fruta of frutas) {
    console.log(fruta)
}

console.log('Recorriendo Arrays con forEach()')
// 4. For Each()

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta) // imprime el elemento en la posición i
})

// Usando una arrow function e indicando sólo los parámetros que necesitamos de nuestra función podemos simplificarlo aún más:
console.log('Recorriendo Arrays con forEach() con Arrow function')
frutas.forEach((fruta) => {
  console.log(fruta) // imprime el elemento en la posición i
})


