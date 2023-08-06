/**
 * @param {number[]} nums
 * @return {number[]}
 */

const merge = (left, right) => {
    const sortedArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
            } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

const sortArray = (nums) => {
    if (nums.length <= 1) return nums
  
    let mid = Math.floor(nums.length / 2)
    
    let left = sortArray(nums.slice(0, mid))
    let right = sortArray(nums.slice(mid))
    
    return merge(left, right)
};