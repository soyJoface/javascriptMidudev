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

