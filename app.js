let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,  
    "GBP": 0.87  
};
 
 
const fromDollarToYen = function(valueInDollar) { 
let valueInEuro = valueInDollar / 1.07;
let valueInYen = valueInEuro * 156.5;         
return valueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
 
 
const fromYenToPound = function(valueInYen) { 
let valueInEuro = valueInYen / 156.5;
let valueInPound = valueInEuro * 0.87;         
return valueInPound;
}

 
module.exports = {  fromDollarToYen, fromEuroToDollar, fromYenToPound };

