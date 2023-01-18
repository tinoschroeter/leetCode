/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    const a = nums1.splice(0, m);
    const b = nums2.splice(0, n);
    
    [...a, ...b].sort((a, b) => a-b).forEach((item, i) => {
        nums1[i] = item;
    })
}