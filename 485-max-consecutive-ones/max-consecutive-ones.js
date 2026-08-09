var findMaxConsecutiveOnes = function(nums) {

    let count = 0, ans = 0;

    for(let num of nums){
        if(num === 1){
            count++;
        } else {
            count = 0;
        }
        ans = Math.max(ans, count);
    }

    return ans;
};