/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let idx = 0;
    let idy = height.length - 1;
    let max = -Infinity;
    
    while(idx < idy) {
        const high = Math.min(height[idx], height[idy])
        max = Math.max((high*(idy - idx)), max)
      if(height[idx] < height[idy]) {
           idx++
       } else {
           idy--
       }
    }
    return max;
};