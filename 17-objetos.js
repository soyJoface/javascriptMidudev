// Objetos

const persona = {
    name: 'Dani',
    age: 30,
    isWorking: true,
    family: ['Miguel', 'Maria'],
    address: {
      street: 'Calle de la piruleta',
      number: 13,
      city: 'Barcelona'
    },
    walk: function () { // <- método
      console.log('Estoy caminando')
    }
  }




// Acceder:
console.log(persona.name); // Dani

let property = 'name'
console.log(persona[property]); // -> Dani



// Añadir y modificar propiedades de un objeto
persona.age = 30
console.log(persona) // -> { name: 'Dani', age: 30 }


// Eliminar propiedades
delete persona.age
console.log(persona) // -> { name: 'Dani' }


/* Ejercicio:
Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:

name con el valor del parámetro name
subscribers con el valor del parámetro subs
hash, con el valor de la longitud del string name multiplicado por el parámetro subs
Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.

*/

function createObject( name, subs ) {
    const objeto = {
        name: name,
        subscribers: subs,
        hash: (name.lenght) * (subs),
        getStatus() {
            return `El canal de ${name} tiene ${subs} suscriptores`
        },
    }

    return objeto;
}

