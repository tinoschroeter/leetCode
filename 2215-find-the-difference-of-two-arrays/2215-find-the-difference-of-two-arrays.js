/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    
    const mapNum1 = {};
    const mapNum2 = {};
    
    nums1.map(item => mapNum1[item] = true);
    nums2.map(item => mapNum2[item] = true);
    
    
    const result1 = [];
    const result2 = [];
    
    [...new Set(nums1)].map(item => !mapNum2[item] && result1.push(item));
    [...new Set(nums2)].map(item => !mapNum1[item] && result2.push(item));
    
    return [ result1, result2 ];
};