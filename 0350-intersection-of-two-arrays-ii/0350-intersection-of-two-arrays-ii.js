/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let smal, big;
    
    if(nums1.length <= nums2.length) {
        smal = nums1
        big = nums2
    } else {
        smal = nums2
        big = nums1
    }
    
    const map = {};
    const result = [];
    big.map(item => map[item] ? map[item] += 1 : map[item] = 1);
    
    smal.map(item => {
        
        if(map[item]) {
            result.push(item);
            map[item] -= 1;
        }
    })
    
    return result;
};