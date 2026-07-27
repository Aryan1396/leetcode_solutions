/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let first = 0;
  let sec = 0;

  for(let num of nums){
    if(num >= first){
        sec = first;
        first = num
    }
    else if(num > sec)
        sec = num
    
  }
  return (first - 1) * (sec - 1)
};
