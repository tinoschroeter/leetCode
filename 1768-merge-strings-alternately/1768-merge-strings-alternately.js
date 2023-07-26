/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let count = 0;
    let result = ""
    let i1 = 0, i2 = 0
    
    while(i1 < word1.length && i2 < word2.length) {
               
        if(count % 2 === 0) {
            result += word1[i1];
            i1++
        } else {
            result += word2[i2];
            i2++
        }
        count++
    }
    
    while(i1 < word1.length) {
        result += word1[i1]
        i1++
    }
    
    while(i2 < word2.length) {
        result += word2[i2]
        i2++
    }
    
    return result
};