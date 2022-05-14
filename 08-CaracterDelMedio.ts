
/*

You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character. If the word's length is even, 
return the middle 2 characters.

Examples:

*Kata.getMiddle("test") should return "es"
*Kata.getMiddle("testing") should return "t"
*Kata.getMiddle("middle") should return "dd"
*Kata.getMiddle("A") should return "A"

*/

export function getMiddle(s:string) {
    
    const stringSplit = s.split('');

    if( stringSplit.length % 2 !== 0 ) { 
        return `${(stringSplit[+(stringSplit.length / 2).toFixed(0) - 1] )}`
    }

    if( stringSplit.length % 2 === 0 ) { 

        return `${stringSplit[(stringSplit.length / 2) - 1]}${stringSplit[stringSplit.length / 2]}`            
    }

}

console.log(getMiddle('A'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);