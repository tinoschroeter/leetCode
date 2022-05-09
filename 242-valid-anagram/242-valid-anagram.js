/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    
    return s.split('').sort((a, b) => a > b ? 1 : -1).join('') === t.split('').sort((a, b) => a > b ? 1 : -1).join('')
}