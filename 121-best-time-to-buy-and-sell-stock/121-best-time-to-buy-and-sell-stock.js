/**
 * @param {number[]} prices
 * @return {number}
 */
    var maxProfit = function(prices) {    
        debugger
        let max = 0
        let p1 = 0
        let p2 = 1

        while(p2 < prices.length) {    
            const tempMax = prices[p2] - prices[p1]        
            if(tempMax > max) max = tempMax
            if(prices[p1] <= prices[p2]) {
                p2++
            } else {
                p1++
            }
            if(p1 === p2) p2++
        }

        return max
    }; 