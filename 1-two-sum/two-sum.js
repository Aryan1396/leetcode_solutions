/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i<nums.length; i++){
        let element = target - nums[i];

        if(map.has(element)){
          return  [map.get(element),i]
        }
        map.set(nums[i], i);
    }
    return []
}