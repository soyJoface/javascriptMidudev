
const name = 'Spidey'
const universe = 42

const spiderman = {
  name,
  universe,
  powers: ['web', 'invisibility', 'spider-sense']
}

/* En el ejemplo anterior no es necesario colocar name:name || universe: universe porque ya hay variables con este valor asignadas.
const name = 'Spidey'
const universe = 42

const spiderman = {
  name: name,
  universe: universe,
  powers: ['web', 'invisibility', 'spider-sense']
} 
*/

console.warn('Primer ejemplo');
console.log( spiderman.name, spiderman.universe );


console.warn('Desestructuracion');
const { name: nombreSpiderman, universe: universoPiderman, powers, powerScore = 100 } = spiderman;
console.log( nombreSpiderman, universoPiderman, powers, powerScore );
/* 
Se pueden desestructurar y cambiar el nombre de la variable, también se puede asignar por defecto en caso de que no exista en el objeto
*/


//Objetos anidados y atajo
const spiderman2 = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense'],
    partner: {
      name: 'Mary Jane',
      universe: 42,
      powers: ['red hair', 'blue eyes']
    }
  }

  console.warn('Acceder a propiedades de objetos anidados');
  console.log(spiderman2.partner.name) // 'Mary Jane'
console.log(spiderman2['partner']['name']) // 'Mary Jane'
const { partner: { name: partnerName } } = spiderman2
console.log(partnerName) // 'Mary Jane'

const { partner: { name: nombrePartnerSpiderman} } = spiderman2
console.log( nombrePartnerSpiderman );