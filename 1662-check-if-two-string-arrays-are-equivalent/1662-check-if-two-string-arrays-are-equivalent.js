/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    const str1 = word1.reduce((akk, w) => akk += w,"").split("");
    const str2 = word2.reduce((akk, w) => akk += w,"").split("");
    
    if(str1.length !== str2.length) return false
    
    let index = 0;
    
    while(index < str1.length) {
        if(str1[index] !== str2[index]) return false
        index++
    }
    
    return true;
};