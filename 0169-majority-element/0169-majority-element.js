/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    const map = { max: [0, 0] };
    
    nums.forEach(item => {
        map[item] ? map[item] += 1 : map[item] = 1;
        
        if(map.max[0] < map[item]) {
            map.max[0] = map[item]
            map.max[1] = item;
        }
    })
    
    return map.max[1]
};