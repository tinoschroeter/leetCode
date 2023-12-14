/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    
    const res = {};
    
    for(let val of this) {
        const key = fn(val);
        
        if(!res[key]) res[key] = [];
        
        res[key].push(val);
    }
    
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */