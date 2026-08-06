/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let sort = nums.sort((a,b) => a-b);
    let result = []

    for(i = 1; i<nums.length; i++){
        if(nums[i-1] === nums[i]){
            result.push(nums[i])
        }

    }
    return result
};