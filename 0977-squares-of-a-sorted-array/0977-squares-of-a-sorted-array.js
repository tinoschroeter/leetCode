/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    const neg = nums.filter(item => item < 0).map(item => item * item).reverse();
    const pos = nums.filter(item => item >= 0).map(item => item * item);
    
    const result = [];
    
    let p1 = 0, p2 = 0;
    
    while(neg.length > p1 && pos.length > p2) {
    
        if(neg[p1] < pos[p2]) {
            result.push(neg[p1])
            p1++
        } else {
            result.push(pos[p2])
            p2++
        }
    }
    
    while(neg.length > p1) {
        result.push(neg[p1])
        p1++
    }
    
    while(pos.length > p2) {
        result.push(pos[p2])
        p2++
    }
    
    return result
};