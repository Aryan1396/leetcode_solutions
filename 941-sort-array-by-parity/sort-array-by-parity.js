/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = []
    for(let num of nums){
        if(num % 2 === 0){
            result.unshift(num)
        }
        else result.push(num)
    }
    return result
};