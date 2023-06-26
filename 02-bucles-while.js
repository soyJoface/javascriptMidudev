// Estructura de control

let cuentaAtras = 10;

while ( cuentaAtras >= 0 ) {

    if ( cuentaAtras === 0 ) {
        console.log(' Despegando ');
        break;
    }

    console.log( `Faltan ${cuentaAtras} segundos` );
    cuentaAtras-= 1;
}