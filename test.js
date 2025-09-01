test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should be 156.5 yenes", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yenes = fromDollarToYen(321);

    // If 1 euro is 156.5 yens, then 321 dollars should be ((321/1.07) * 156.5)
    const expected = (321/1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(321)).toBe(46950); 
})

test("One euro should be 0.87 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(626);

    // If 1 euro is 156.5 yens, then 4 euros should be (4 * 156.5)
    const expected = (626/156.5) * 0.87;
    
    // This is the comparison for the unit test
     expect(fromYenToPound(626)).toBe(3.48); 
})