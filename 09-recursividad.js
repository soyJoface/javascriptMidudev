/* La recursividad es una técnica de programación que consiste en que una función se llame a sí misma.

Pero claro, si una función se llama a sí misma, ¿cuándo termina? ¿cómo se evita que se llame infinitamente? Con una condición base. */

function cuentaAtras( numero ) {
    if ( numero <= 0 ) { return }

    console.log( numero );
    cuentaAtras( numero - 1 );
}

cuentaAtras(3);

function factorial( num ) {
    if ( num === 0 || num === 1 ) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));