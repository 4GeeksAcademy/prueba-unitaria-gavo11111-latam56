let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,  
    "GBP": 0.87  
};
 
 
function fromDollarToYen(dollars) {
   
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}
 
 
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
 
function fromYenToPound(yenes) {
    let euros = yenes / oneEuroIs.JPY;  
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}
 
module.exports = {  fromEuroToDollar, fromEuroToDollar };

