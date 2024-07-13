const sumAll = function(numOne, numTwo) {
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        return "ERROR";
    }
    if (numOne < 0 || numTwo < 0) {
        return "ERROR"
    }
    if (numOne > numTwo) {
        min = numTwo;
        max = numOne;
    } else {
        min = numOne;
        max = numTwo;
    }

    let sum = 0;
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
