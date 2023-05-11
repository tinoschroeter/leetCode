/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    
    const result = [];
    
    title.split(" ").forEach(item => {
        
        const small = item.length < 3 ? false : true;
        
        const word = item.split("").map((item, i) => {
            if(i === 0 && small) {
                return item.toUpperCase();
            } else {
                return item.toLowerCase();
            }
        })
        result.push(word.join(""))
    })
    
    return result.join(" ")
};