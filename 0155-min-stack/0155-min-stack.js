
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    
    if(this.min.length === 0) {
        this.min.push(val)
    } else {
        const min = Math.min(val, this.min[this.min.length -1]);
        this.min.push(min);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
    this.min.pop();
    return this.stack.pop(); 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length -1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */