/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let left = 0, right = height.length -1;
    let max = 0;
    
    
    while(left < right) {
        
        const min = Math.min(height[left], height[right]);
        const vol = (right - left) * min;
        
        
        max = Math.max(max, vol);
        
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    
    return max
};