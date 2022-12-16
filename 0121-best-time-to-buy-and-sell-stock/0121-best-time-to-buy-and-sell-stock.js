/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
      
    let buy = 0;
    let sell = 1;
    let max = 0;
    
    while(sell < prices.length) {
        
        const profit = prices[sell] - prices[buy];
        max = Math.max(max, profit);
        
        if(prices[buy] > prices[sell]) buy = sell;
        
        sell++
        
    }
    
    return max;
};