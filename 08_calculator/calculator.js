const add = function(...args) {
	return args.reduce((total, val) => total += val,0);
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return add(...array);
};

const multiply = function(array) {
  return array.reduce((total, val) => total *= val,1);
};

const power = function(x, n) {
  let raised = x;
	for (i=1; i < n; i++) {
    raised *= x;
  }
  return raised;
};

const factorial = function(val) {
  let result = val;

  if (val === 0) return 1;

	for (i = val - 1; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
