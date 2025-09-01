test("One euro should be 156.5 yenes", function() {
    const { fromDollarToYen } = require('./app.js');

    const yenes = fromDollarToYen(321);

    const expected = (321/1.07) * 156.5; 
    
     expect(fromDollarToYen(321)).toBe(46950); 
})

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One euro should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(626);

    const expected = (626/156.5) * 0.87;
    
     expect(fromYenToPound(626)).toBe(3.48); 
})git a