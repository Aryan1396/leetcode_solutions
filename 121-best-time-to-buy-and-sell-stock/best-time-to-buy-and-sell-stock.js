/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy_price = prices[0];
    let max_profit = 0;
    

    for(let i = 1; i <prices.length; i++){
        if(prices[i]<buy_price){
            buy_price = prices[i]
        }
         let current_profit = prices[i] - buy_price 

         if(current_profit > max_profit){
            max_profit = current_profit
         }
    }
         return max_profit

};