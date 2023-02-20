/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let l = 0, r =  height.length - 1;
    let leftMax = height[l], rightMax = height[r];
    let res = 0
    
    while (l < r) {
        if (leftMax < rightMax) {
            l += 1
            leftMax = Math.max(leftMax, height[l])
            res += leftMax - height[l]
        } else {
            r -= 1
            rightMax = Math.max(rightMax, height[r])
            res += rightMax - height[r]
        }
    }
    return res
};