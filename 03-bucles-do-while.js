// Se va a ejecutar al menos una vez

let count = 1;

do {
    count = count - 1;
    console.log( count ) 
} while ( count > 10 );


// Ejemplo
let pregunta;

do {
    pregunta = confirm( '¿Quiere seguir jugando COD?' )
} while ( !pregunta );