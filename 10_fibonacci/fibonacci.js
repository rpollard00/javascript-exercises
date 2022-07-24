const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let f = [0, 1];

    for (i = 2; i < parseInt(n)+1; i++) {
        f.push(f[i-1] + f[i-2]);
    }  // 0 1 1 2 3 5 8 13

    return f[n];
};

// Do not edit below this line
module.exports = fibonacci;
