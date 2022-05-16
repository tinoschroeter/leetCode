class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
        this.size = 0
    }
    
    push(val) {
        this.stack.push(val)
        this.size++;
        
        if(this.min.length === 0) {
            this.min.push(val);
        } else {
            const top = this.min.length - 1;
            if(this.min[top] >= val) {
               this.min.push(val); 
            }
        }
    }
    
    pop() {
        const val = this.stack.pop();
        this.size--;
        
        const top = this.min.length - 1;
        if(val === this.min[top]) {
            this.min.pop();
        }
    }
    
    top() {
        const top = this.stack.length - 1;
        return this.stack[top];        
    }
    
    getMin() {
        if(this.size === 0) return 0;
        const top = this.min.length - 1;
        return this.min[top];        
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */