/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let copy = [...nums]
    for(let i=0; i<nums.length; i++){
        copy.push(nums[i])
    }
    return copy
};