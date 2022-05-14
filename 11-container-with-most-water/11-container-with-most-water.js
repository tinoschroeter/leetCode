/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    
    let left  = 0;
    let right = height.length -1;
    
    let result = 0;
    
    while(left < right) {
        const volume = Math.min(height[left], height[right]) * (right - left);
        
        result = Math.max(result, volume);
        
        if(height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return result;
};