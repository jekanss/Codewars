/*
Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new
 one decrease of 1.5 percent per month. Furthermore this percent of loss increases 
 of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.


* end month 1: percent_loss 1.5 available -4910.0
* end month 2: percent_loss 2.0 available -3791.7999...
* end month 3: percent_loss 2.0 available -2675.964
* end month 4: percent_loss 2.5 available -1534.06489...
* end month 5: percent_loss 2.5 available -395.71327...
* end month 6: percent_loss 3.0 available 766.158120825...
* return [6, 766] or (6, 766)
*/

export function nbMonths( startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[ ] { 

    let precioIncialOldCar = startPriceOld;
    let precioInicialNewCar = startPriceNew;
    let ahorroPorMes = savingperMonth;
    let porcentajePerdidoPorMes = percentLossByMonth ;   

    let contador_while = -1;

    let dineroDisponible = precioIncialOldCar +  ahorroPorMes - precioInicialNewCar;   

    if( startPriceOld > startPriceNew ){ 
        return [ 0, startPriceOld - startPriceNew ];
    }

    do {   

        contador_while++;

        ahorroPorMes = ahorroPorMes +  1000;
        precioIncialOldCar = precioIncialOldCar -  ( precioIncialOldCar * (porcentajePerdidoPorMes / 100) );
        precioInicialNewCar = precioInicialNewCar -  ( precioInicialNewCar * (porcentajePerdidoPorMes / 100) );    
        dineroDisponible = precioIncialOldCar +  ahorroPorMes - precioInicialNewCar - 1000;      
       

        if( contador_while % 2 === 0 ){
            porcentajePerdidoPorMes = porcentajePerdidoPorMes + 0.5;                
        }     

        console.log(dineroDisponible);
        
        
    } while ( dineroDisponible < 0 );

    return[ contador_while + 1, Math.round(dineroDisponible) ];
}

console.log(nbMonths( 2000, 8000, 1000, 1.5 ) );

