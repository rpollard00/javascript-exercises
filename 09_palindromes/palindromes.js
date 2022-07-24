
const palindromes = function (str) {
    // strip non-alpha from string
    alphaRegex = /[^a-z0-9]/gi;
    const strClean = str.replace(alphaRegex, '').toLowerCase();

    // reverse string
    const strReverse = strClean.split('').reverse().join('')

    // check forward vs backward 
    return strClean === strReverse;
};

// Do not edit below this line
module.exports = palindromes;
