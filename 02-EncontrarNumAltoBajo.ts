// TODO: En esta pequeña tarea, se le da una cadena de números separados por espacios y tiene que devolver el número más alto y el más bajo.

// Ejemplos

// altoYBajo("1 2 3 4 5"); // devuelve "5 1"
// altoYBajo("1 2 -3 4 5"); // devuelve "5 -3"
// altoYBajo("1 9 3 4 -5"); // devuelve "9 -5"

/**
 * *  los números son Int32 válidos, no es necesario validarlos
 * *  Siempre habrá al menos un número en la cadena de entrada.
 * *  La cadena de salida debe ser dos números separados por un solo espacio, y el número más alto es el primero.
 */


const cadenaNumeros = "1 2 -3 4 5";

const AltoAndBajo = ( cadenaNumeros: string ): string => {

    const arrayNumeros = cadenaNumeros.split(' ').map(numero => Number(numero));
    const valorMasBajo = Math.min(...arrayNumeros);
    const valorMasAlto = Math.max(...arrayNumeros);
    
    return `${valorMasBajo} ${valorMasAlto}`;
}

console.log(AltoAndBajo(cadenaNumeros));



