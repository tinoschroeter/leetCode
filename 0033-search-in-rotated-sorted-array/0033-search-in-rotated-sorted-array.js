/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    
        let l = 0; 
        let r = nums.length - 1

        while (l <= r) {
            mid = (l + r) // 2
            if(target == nums[mid]) return mid

        // left sorted portion
            if(nums[l] <= nums[mid]) {
              if(target > nums[mid] || target < nums[l]) {
                 l = mid + 1 
              } else {
                 r = mid - 1
              } 
        // right sorted portion
            } else {
              if(target < nums[mid] || target > nums[r]) {
                  r = mid - 1
              } else {
                 l = mid + 1  
              }        
            }
        }
        return -1
};