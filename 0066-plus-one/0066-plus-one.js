/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     
   
    const result = digits.reverse();
    
    let one = 1, i = 0;
    
    while(one) {
        
        if(i<result.length) {
            if(result[i] === 9) {
                result[i] = 0;
            } else {
                result[i] += 1;
                one = 0;
            }
         } else {
            result.push(1);
            one = 0;
        }
      i++  
    }
    
    return result.reverse()
};