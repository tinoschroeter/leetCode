/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
   
    let i = -1;
    while (num.at(i) === "0") i--;
     
    return num.substring(0, num.length + i + 1);
};