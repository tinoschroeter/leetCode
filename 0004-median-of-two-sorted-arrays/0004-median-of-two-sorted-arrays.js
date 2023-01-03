/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let merge = [...nums1, ...nums2].sort((a,b) => a -b);
    
    if(merge.length === 1) return merge[0];

    console.log(merge)
    if(merge.length % 2 !== 0) {
        const mid = Math.floor(merge.length / 2);
        console.log("odd", mid)
        return merge[mid]
    } else {
        const mid = Math.floor(merge.length / 2);
        return (merge[mid -1] + merge[mid]) / 2;
        
    }
};