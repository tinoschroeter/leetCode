/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
    const sum = BigInt(num1) * BigInt(num2);    
    return sum.toString();
};