/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    const counter = {};
    
    arr.forEach(item => {
        counter[item] ? counter[item] += 1 : counter[item] = 1;
    })
    
    
    const result = Object.values(counter);
    console.log(result);
    
    
    return result.length === [...new Set(result)].length;
};