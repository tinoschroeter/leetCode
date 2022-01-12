/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const alphanumeric = s.replace(/[\W_]+/g,"");
    const string = alphanumeric.toLowerCase();

    return string === string.split('').reverse().join('');
};