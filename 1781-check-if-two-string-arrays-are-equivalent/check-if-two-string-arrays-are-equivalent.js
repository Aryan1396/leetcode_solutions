/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let arr1 = word1.join("");
    let arr2 = word2.join("");
    console.log(arr1, arr2)
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]) return false
    }
    return true
    
};