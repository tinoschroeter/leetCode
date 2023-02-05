/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const prefix = [];
    const postfix = [];
    const result = [];
    
    
    nums.forEach((item, i) => {
        if(i === 0) {
            prefix[i] = item
        } else {
            prefix[i] = item * prefix[i -1];
        }
    })
    prefix.unshift(1);
    console.log(prefix)
    
    nums.reverse().forEach((item, i) => {
        if(i === 0) {
            postfix[i] = item;
        } else {
            postfix[i] = item * postfix[i-1];
        }
    })
    postfix.unshift(1);
    postfix.reverse()
    console.log(postfix)
    
    prefix.forEach((item, i) => {
        result[i] = prefix[i] * postfix[i+1]
    })
    
    result.pop();
    return result;
    
};