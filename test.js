const { oneEuroIs, sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test('4+9 should be 23', () => {
    let result = sum(14, 9);
    expect(result).toBe(23);
});

test("3.5 euros should be 3.745 dollars", function () {


    const dollars = fromEuroToDollar(3.5);


    const expectedEuroToDollarFunction = 3.5 * 1.07;


    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 146.26168 yens", function () {

    const yen = fromDollarToYen(1);

    const expectedDollarToYenFunction = (156.5 / 1.07) * 1;

    expect(fromDollarToYen(1)).toBe(146.26168);

});

test("One yen should be 0.00556 pounds", function () {

    const pound = fromYenToPound(1);

    const expectYenToPoundFunction = (0.87 / 156.5) * 1;

    expect(fromYenToPound(1)).toBe(0.00556);
})


