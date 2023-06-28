// Iterando Objetos en JavaScript

const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
  }


// 1. For In()
console.warn('Iterando el objeto con For in')
for( property in spiderman ) {
    console.log( property );
    console.log( spiderman[property] );
    console.log('---')
}
/* 
Probé con dot notation pero sale undefined, al parecer debe ser con []. 
El orden de las propiedades no está garantizado.
*/



// Transformar un Objeto en Array
console.warn('Object.keys()')
const properties = Object.keys(spiderman);
console.log( properties ) 
// El método anterior crea un array con las llaves del objeto, es decir, ['name', 'universe', 'powers'];



console.warn('Objets.values()');
const values = Object.values(spiderman);
console.log( values );
// Él método anterior crea un array con los valores del objeto, es decir, ['Spidey', '42', ['web', 'invisibility', 'spider-sense']];



console.warn('Objects.entries()');
const entries = Object.entries(spiderman);
console.log( entries );
// El método anterior crear un array de arrays, en el ejemplo anterior esto es lo que imprime: (3) [Array(2), Array(2), Array(2)]
/* 
0:(2) ['name', 'Spidey']
1:(2) ['universe', 42]
2:(2) ['powers', Array(3)] 
*/

console.warn('Ejemplo de como acceder a propiedades con entries');
const entriesEjemplo = Object.entries(spiderman);
entriesEjemplo.forEach( (entry) => {
    const propiedad = entry[0];
    const valor = entry[1];

    console.log(`${propiedad}: ${valor}`)
});



const entriesEjemploDos = Object.entries(spiderman);
entriesEjemploDos.forEach( (entry) => {
    const prop = entry[0];
    const val  = entry[1];

    console.log(`${prop}: ${val} `)
})



/* Ejercicio 
Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
*/

function getKeysOfBooleanValues(obj) {
    
    const keys = [];

    Object.entries(obj).forEach( ( entry ) => {
        const prop = entry[0];
        const val  = entry[1];

        if( typeof val === 'boolean' ) {
            keys.push(prop)
        }
    } )

    return keys;
}