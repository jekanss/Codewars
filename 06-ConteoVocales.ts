
//contar las vocales de una cadena de texto

function getCount(str: string): number{
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelsCount = 0;

    const stringArray = str.split('');

    stringArray.forEach(letter => {
        if(vowels.includes(letter)){
            vowelsCount++;
        }
    })   
    
    return vowelsCount;
  }

  console.log(getCount('eliminar'));