// Matrices: Un array de arrays

const matriz = [
    [1, 2, 3],
    [4, 5, 6]
  ];

let numero = matriz[1][2];
console.log('Posición 1, 2:',numero) // --> 6



/*  
Iteración sobre Matrices:
En este ejemplo, el bucle externo recorre {1} cada fila de la matriz, mientras que el bucle interno {2} recorre cada elemento dentro de una fila específica.
Puedes usar otros bucles para iterar sobre una matriz, como un bucle while o un bucle for...of. También puedes utilizar el método forEach() de los arrays para iterar sobre una matriz, pero tendrás que anidar dos llamadas a forEach() para iterar sobre todos los elementos de la matriz.
*/

for (let i = 0; i < matriz.length; i++) { // {1}
    for (let j = 0; j < matriz[i].length; j++) { // {2}
      console.log('Iterando la matriz', matriz[i][j])
    }
  }



// Ejercicio
/* Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra que le pasaremos con parametro en la matriz y devolver su posición 
como un array de dos elementos: el índice de la fila y el índice de la columna.  
*/

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]


function findWord(matrix, word) {
    for(let fila = 0; fila < matrix.length; fila++) {
        for(let columna = 0; columna < matrix[fila].length; columna++) {
            if( matrix[fila][columna] === word ) {
                return [fila, columna]
            }
        }
    }

    return [-1, -1];
}

console.log(findWord(matrix, 'HTML'));
