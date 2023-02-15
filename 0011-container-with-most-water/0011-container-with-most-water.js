/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let l = 0, r = height.length -1;
    let max = 0;
    
    while(l<r) {
        
        const minHeight = Math.min(height[l], height[r]);
        const vol = minHeight * (r -l);
        
        max = Math.max(max, vol);
        
        if(height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    
    return max;
};