// Algoritmos con Arrays

//1. Algoritmo para encontrar el número mayor
function findMax( arr ) {
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
        if( max < arr[i] ) {
            max = arr[i]
        }
    }

    return max;
}