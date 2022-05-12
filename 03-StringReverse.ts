//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

/*
* "This is an example!" ==> "sihT si na !elpmaxe"
*  double  spaces"      ==> "elbuod  secaps"
*/ 

function invertirCadena(cadena: string) {
    return cadena.split( " " )
           .map( 
                ( palabra: string ) => palabra
                                      .split( "" )
                                      .reverse()
                                      .join( "" ) 
            )
           .join(" ");

}

console.log(invertirCadena("elbuod  secaps!"));

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);

const reversed = array1.reverse();
console.log('reversed:', reversed);





