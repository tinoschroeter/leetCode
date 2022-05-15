/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    
    let pointer = 0;
    let max = 0;
    
    for(let i = 1; i<prices.length; i++) {
        
        const current =  prices[i] - prices[pointer];
        
        if(current <= 0) pointer = i;
        
        max = Math.max(current, max);
        
    }
    
    return max;
};