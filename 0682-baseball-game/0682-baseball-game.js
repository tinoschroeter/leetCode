/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    
    const result = [];
    
    operations.map(item => {
        
        if(item === "+") {
            const val = result[result.length -1] + result[result.length -2];
            result.push(val)
        } else if (item === "D") {
            const val = result[result.length -1] * 2;
            result.push(val);
        } else if (item === "C") {
            result.pop()
        } else {
            result.push(parseInt(item))
        }
    })
    
    return result.reduce((acc, val) => acc + val, 0);
};