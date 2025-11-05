let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const sum = (a, b) => {
    return a + b;
}

const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = (oneEuroIs.JPY / oneEuroIs.USD) * valueInDollar;
    let valueInYenToFiveDecimals = valueInYen.toFixed(5);
    let valueInYenToNumber = Number(valueInYenToFiveDecimals);
    return valueInYenToNumber;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = (oneEuroIs.GBP / oneEuroIs.JPY) * valueInYen;
    let valueInPoundToFiveDecimals = valueInPound.toFixed(5);
    let valueInPoundToNumber = Number(valueInPoundToFiveDecimals);
    return valueInPoundToNumber;
}


module.exports = { oneEuroIs, sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


