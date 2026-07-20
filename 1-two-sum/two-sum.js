/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const track = {}
  for(let i = 0; i<nums.length; i++){
    const element = target - nums[i]

    if(track[element] !== undefined){
        return [track[element], i]
    }
    track[nums[i]] = i
  }
  return []
};