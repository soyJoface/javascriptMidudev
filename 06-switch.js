// Switch
/*  Sintaxis
La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido. Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada caso y evitar que se sigan evaluando el resto de casos.

switch (expresión) {
  case valor1:
     código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
     código a ejecutar si la expresión coincide con valor2
    break
  default:
     código a ejecutar si la expresión no coincide con ningún valor
   */

const dia = new Date().getDay();

switch ( dia ) {
    case 0:
        console.log(' Hoy es domingo');
        break;
    case 1:
        console.log(' Hoy es lunes');
        break;
    case 2:
        console.log(' Ho es martes');
        break;
    case 3:
        console.log(' Hoy es miércoles');
        break;
    case 4:
        console.log(' Hoy es jueves');
        break;
    case 5:
        console.log(' Hoy es viernes');
        break;
    case 6:
        console.log(' Hoy es sábado');
        break;
    default:
        console.log(' Día no encontrado');
}


/* Agrupando cases
En ocasiones, queremos que varios casos ejecuten el mismo código.
En lugar de repetir el mismo código en cada caso, podemos agruparlos usando el mismo case para cada uno de ellos.

const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
} */ 