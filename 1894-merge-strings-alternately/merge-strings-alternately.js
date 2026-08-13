/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const result = [];
    let i = 0; j = 0;
    while(i<word1.length || j<word2.length){
        if(word1[i]){
            result.push(word1[i]);
            i++
        } 
        if(word2[j]){
            result.push(word2[j]);
            j++
        }
    }
    return result.join('')
};