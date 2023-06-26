
/* La sintaxis de for es la siguiente:

for (inicialización; condición; actualización) {
   código a ejecutar
} 

Ejemplo: 
for (let number = 1; number <= 10; number++) {
  console.log(number)
}

*/

for ( let i = 1; i <= 10; i++ ) {
    for ( let j = 1; j <= 10; j++ ) {
        resultado = i * j;
        console.log( ` ${i} * ${j} = ${resultado} `)
    }
}