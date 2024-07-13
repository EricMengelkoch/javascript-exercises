const reverseString = function(inputString) {
    let length = inputString.length;
    let result = "";
    for (i = 0; i < length; i++) {
        result += inputString.charAt(length - 1 - i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
