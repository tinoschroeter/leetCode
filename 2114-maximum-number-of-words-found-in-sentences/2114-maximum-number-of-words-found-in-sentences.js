/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    
    const result = [];
    
    sentences.forEach(item => {
        const arr = item.split(" ");
        result.push(arr.length);
    })
    
    
    return result.sort((a, b) => b - a)[0];
};