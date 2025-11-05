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

test("8.9 dollars should be 1301.72897 yens", function () {

    const yen = fromDollarToYen(8.9);

    const expectedDollarToYenFunction = (156.5 / 1.07) * 8.9;

    expect(fromDollarToYen(8.9)).toBe(1301.72897);

});

test("6 yens should be 0.03335 pounds", function () {

    const pound = fromYenToPound(6);

    const expectYenToPoundFunction = (0.87 / 156.5) * 6;

    expect(fromYenToPound(6)).toBe(0.03335);
})


