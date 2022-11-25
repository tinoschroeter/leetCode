

var MinStack = function() {
    this.Stack = []; 
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 
 */

MinStack.prototype.push = function(val) {
    this.Stack.push(val);
    
    if(this.minStack.length === 0) {
        this.minStack.push(val);    
    } else {       
        const min = Math.min(val, this.getMin());
        this.minStack.push(min);
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.Stack.pop();
     this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.Stack[this.Stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */