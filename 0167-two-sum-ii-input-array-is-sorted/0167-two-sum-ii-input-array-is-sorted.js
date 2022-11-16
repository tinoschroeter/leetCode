/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  
    let idX = 0;
    let idY = numbers.length - 1;
       
    for(let i = 0; i<numbers.length; i++) {
        
        if(numbers[idX] + numbers[idY] === target) return [idX + 1, idY + 1]
        
        if(numbers[idX] + numbers[idY] < target) idX++
        if(numbers[idX] + numbers[idY] > target) idY--
    }
};