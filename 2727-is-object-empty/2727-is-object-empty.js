/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    const key = Object.keys(obj);
    
    return key.length === 0 ? true : false;
};