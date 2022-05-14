/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    
    let left = 0;
    let right = height.length - 1;
    
    let max = 0;
    
    while(left < right) {
        
        const volume = Math.min(height[left], height[right]) * (right - left);
        
        max = Math.max(max, volume)
        
        if(height[left] <= height[right]) {
            left++
        } else {
            right--
        }
        
    }
    
    return max;
};