/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
 
    const getNum = (char) => {
        const start = 'A'.charCodeAt(0) - 1;
        return char.charCodeAt(0) - start;
    };
    
    let res = 0, num = 0;
    
    for (var i = 0; i < columnTitle.length; i++) {
        num = getNum(columnTitle[columnTitle.length - 1 - i]);
        res += Math.pow(26, i) * num;
    }
    return res;
};