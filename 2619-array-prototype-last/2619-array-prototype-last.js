/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const len = this.length -1;
    
    
    if(len < 0) return -1;
    return this[len];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */