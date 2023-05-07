/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
   
    let l = 0, r = 0;
     
    while(l < nums1.length && r < nums2.length) {
        
        if(nums1[l] === nums2[r]) return nums1[l]
        
        nums1[l] < nums2[r] ? l++ : r++
    }
    
    return -1;
};