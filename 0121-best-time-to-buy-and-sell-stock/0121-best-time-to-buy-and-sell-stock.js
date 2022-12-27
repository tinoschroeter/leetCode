/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let buy = 0, sell = 1;
    let max = 0;
    
    
    while(sell <prices.length) {
        
        const prof = prices[sell] - prices[buy] 
        max = Math.max(prof, max);
        
        
        if(prices[buy] > prices[sell]) {
            buy = sell;
        }
        
        sell++
    }
    
    return max
};