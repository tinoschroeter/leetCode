/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // "()[]"
  const stack = [];

  for(let item of s.split('')) {
    if (map[item]) {
      const val = stack.pop();
      if (val !== map[item]) return false;
    } else {
      stack.push(item);
    }
  };

  return stack.length === 0 ? true : false;
};