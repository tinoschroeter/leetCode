/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.split("").map(item => item.toLowerCase()).join("");
};