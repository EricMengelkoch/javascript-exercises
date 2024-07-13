const repeatString = function(inputString, repeatCount) {
    let blankString = "";
    if (repeatCount >= 0) {
        blankString = "";
    } else {
        blankString = "ERROR";
    }
    for (i = 0; i < repeatCount; i++) {
        blankString += inputString;
    }
    return blankString;
};

// Do not edit below this line
module.exports = repeatString;
