/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   
    const error = (err) => {
        throw new Error(err);
    }
    
    const toBe = item => (item === val) ? true : error("Not Equal");
    const notToBe = item => (item !== val) ? true : error("Equal");
    
    return {toBe, notToBe};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */