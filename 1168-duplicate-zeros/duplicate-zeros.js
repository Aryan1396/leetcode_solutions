//METHOD-1
var duplicateZeros = function(arr) {

    let nums=[];

    for(let i=0; i<arr.length; i++){

        nums.push(arr[i]);
        
        if(arr[i]==0){
            nums.push(0);
        }
    }

    for(let j=0; j<arr.length; j++){

        arr[j] = nums[j];
    }

}