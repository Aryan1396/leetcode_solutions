/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     s = s.trim();
    let result = 0;

    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] !== ' '){
           result++; 
        } 
        else if(result > 0){
          break;  
        } 
    }

    return result;
};