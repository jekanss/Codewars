
/*
* ¡No me des cinco!
En este kata obtienes el número inicial y el número final de una región y deberías devolver
el recuento de todos los números excepto los números con un 5. ¡El número inicial y final son ambos inclusivos!

Ejemplos:

* 1,9 -> 1,2,3,4,6,7,8,9 -> Resultado 8
* 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Resultado 12

El resultado puede contener cincos. ;-)
El número inicial siempre será menor que el número final. ¡Ambos números también pueden ser negativos!

Tengo mucha curiosidad por sus soluciones y la forma en que lo resuelve. Tal vez alguno de ustedes encuentre una solución matemática pura fácil.

¡Diviértete codificando y por favor no olvides votar y clasificar este kata! :-)

También he creado otros katas. ¡Echa un vistazo si te ha gustado este kata!

*/ 

export function dontGiveMeFive(start:number, end:number) : number {

    let total: number = 0;
  
    for(let i = start; i <= end; i++){
      if(!i.toString().includes('5')){
        total += 1;
      }
  
    };
    return total;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
