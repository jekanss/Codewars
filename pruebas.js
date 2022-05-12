let letras = ['A', 'B', 'A', 'C', 'B'];
let letrasUnicas = Array.from(new Set(letras));
console.log(letrasUnicas);

console.log(...letras);

const numeros = [1, 2, 3, 4, 5];
console.log(Math.min(...numeros));

console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], x => x + x));