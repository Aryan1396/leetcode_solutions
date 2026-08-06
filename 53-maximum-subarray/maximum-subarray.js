/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currMax = nums[0];
    let result = nums[0];

    for(let i = 1; i<nums.length; i++){
        currMax = Math.max(nums[i], currMax + nums[i]);
        result = Math.max(result , currMax)
    }
    return result
};