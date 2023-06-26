/* Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6 */

function calcularSumaRecursiva( num ) {
    if ( num === 0 ) {
        return 0
    } 

    let suma = num + calcularSumaRecursiva( num - 1 );

    return suma;
}

console.log(calcularSumaRecursiva(5));



/* Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
 La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores.
 Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8) */


// Operador Ternario
function fibonacci(num) {

   let resultado = ( num < 2 ) ? num : fibonacci( num-1 ) + fibonacci( num-2 );

   return resultado;

}

console.log(fibonacci(6));



// Forma clásica de un if-else
function fibo (n) {
    if (n < 2) {
        return n
    } else {
        return fibo(n-2) + fibo(n-1)
    }
}

console.log(fibo(6))