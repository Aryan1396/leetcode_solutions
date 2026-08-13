/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let ss = 0; ts = 0;
    while(ss < s.length && ts < t.length){
        if(s[ss] === t[ts]){
            ss++;
        }
        ts++;
    }
    return ss === s.length ? true : false
};