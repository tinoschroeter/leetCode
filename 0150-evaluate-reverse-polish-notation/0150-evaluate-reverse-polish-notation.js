/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    
    for(let val of tokens) {
        
        if(val === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if(val === "-") {
            const a = stack.pop(), b = stack.pop();
            stack.push(b - a)
        } else if(val === "*") {
            stack.push(stack.pop() * stack.pop())
        } else if(val === "/") {
            const a = stack.pop(), b = stack.pop();
            stack.push(parseInt(b / a));
        } else {
            stack.push(parseInt(val))
        }
    }
    
    return stack[0]
};