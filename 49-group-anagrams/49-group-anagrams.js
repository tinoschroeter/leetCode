/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const counter = {};

    for(let val of strs) {
        const sorting = val.split('').sort((a,b) => a < b ? -1 : 1).join('');

        if(!counter[sorting]) {
           counter[sorting] = [val]; 
        } else {
            counter[sorting].push(val);
        }
    }

    const result = [];

    for(let val of Object.keys(counter)) {
        result.push(counter[val]);
    }

    return result;
};