/**
 * @param {number[]} nums
 * @return {number}
 */

const longestConsecutive = (nums) => {  
    
    let max = 0;
    
    const counter = new Set();

    for(let val of nums) {
        counter.add(val);
    }

    for(let val of nums) {
        let currentMax = 0;

        const befor = val - 1;
        let count = val;
        if(!counter.has(befor)) {
            while(counter.has(count++)) {
                currentMax++
                max = Math.max(currentMax, max)
            }
        }
    }
    
    return max;
};