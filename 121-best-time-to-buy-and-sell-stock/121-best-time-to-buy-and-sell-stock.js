/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let buy = 0;
    let sell = 1;   
    let max = 0;
    
    while(buy < prices.length) {
        
        if(prices[sell] > prices[buy]) {
            const current = prices[sell] - prices[buy] ;
            max = Math.max(current, max);
        } else {
            buy = sell;
        }
        
        sell++
    }
    
    return max
};