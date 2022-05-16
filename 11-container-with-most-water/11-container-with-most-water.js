/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    
    
    let l = 0;
    let r = height.length -1;
    
    let max = 0
    let current = 0;
    
    while(l <= r) {
        
        const current = (r - l) * Math.min(height[l], height[r]);
        
        max = Math.max(current, max);
        
        if(height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    
    return max;
};