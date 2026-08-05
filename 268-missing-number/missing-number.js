var missingNumber = function(nums) {

    let n = nums.length;

    let sum = n * (n + 1) / 2;

    for(let num of nums){
        sum -= num;
    }

    return sum;
};