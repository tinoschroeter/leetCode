/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    
    const counter = {};
    
    
    for(let val of magazine) {
        counter[val] ? counter[val] +=1 : counter[val] = 1;

    }
    
    
    for(let val of ransomNote) {
        
        if(counter[val]) {
            counter[val] -= 1
        } else {
            return false
        }
    }
    
    return true;
};