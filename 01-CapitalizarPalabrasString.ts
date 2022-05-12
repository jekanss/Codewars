

function capitalize( frase : string) {

    return frase.split(' ')
           .map( palabra => palabra[0].toUpperCase() + palabra.slice(1))
           .join(' ');    
  
}

const wordSplit = capitalize('hola soy carolina');
console.log(wordSplit);







